import wordFontUrl from '@fontsource/roboto/files/roboto-latin-400-normal.woff';
import { Quaternion, Scene, Vector3 } from 'three';
import { Text } from 'troika-three-text';
import { CollisionSystem } from '../combat/CollisionSystem';
import { GAME_CONFIG } from '../config/GameConfig';
import { Enemy } from '../enemies/Enemy';
import { ObjectPool } from '../utils/ObjectPool';
import { clamp, randRange } from '../utils/MathUtils';

/** Lifecycle of a fired letter pellet. Each letter runs its own copy of this machine. */
type ProjectileState =
  /** Flying straight along its own spread trajectory. */
  | 'flying'
  /** Reached max range, now dropping under gravity. */
  | 'falling'
  /** Resting on the floor for its ground lifetime. */
  | 'grounded'
  /** Fading out just before being recycled. */
  | 'fading';

interface LetterProjectile {
  readonly mesh: Text;
  state: ProjectileState;
  readonly velocity: Vector3;
  /** Distance THIS letter travelled from ITS launch position - drives the range check. */
  distanceFlown: number;
  /** Countdown in milliseconds (grounded lifetime, then fade duration). */
  timer: number;
  /** True once this letter has fired its one-time first-contact splash/FX. */
  splashed: boolean;
}

/** Callbacks fired by the projectile system during an update. */
export interface ProjectileEvents {
  /** An enemy was destroyed (piercing hit, splash, or ground hazard). */
  onEnemyKilled(enemy: Enemy): void;
  /** A letter struck something - spawn impact effects here (first contact only). */
  onImpact(point: Vector3): void;
}

const Z_AXIS = new Vector3(0, 0, 1);

/**
 * Letter-shotgun projectiles.
 *
 * A completed word is split into one `troika-three-text` mesh per character: typing
 * "cat" fires exactly 3 independent letter pellets, "keyboard" fires 8. Meshes are
 * pooled (one pool for every letter), re-texted on launch and recycled after fading.
 *
 * Launch, per the design:
 *
 *   letters spawn as a compact cluster (lateral + vertical offset around the launch
 *   point, mirroring the typed word) and each receives its OWN velocity: the shared
 *   aim direction rotated by a per-letter angle evenly distributed across
 *   LETTER_SPREAD_ANGLE, plus speed jitter. They fan out into one forward cone - never
 *   a single shared vector, never a homing shot.
 *
 * Motion and damage per letter:
 *
 *   flies along its own trajectory for at most WORD_PROJECTILE_MAX_DISTANCE measured
 *   from ITS OWN launch position (short-range attack, never a cross-arena shot)
 *     -> pierces: every enemy inside `hitRadius` dies and the letter KEEPS FLYING
 *        (first contact also fires a one-time splash + impact FX)
 *     -> at max range it stops and falls
 *     -> while falling, resting or fading it is STILL A GROUND HAZARD: any enemy that
 *        walks into `groundHazardRadius` around it dies (no repeated impact FX)
 *     -> rests for its ground lifetime, fades, returns to the pool.
 *
 * Every letter owns position/velocity/state/timer independently: they separate, land
 * and expire one by one. A word never leaves more than `capacity` meshes in the scene.
 */
export class ProjectileManager {
  private readonly pool: ObjectPool<LetterProjectile>;
  private readonly active: LetterProjectile[] = [];
  private readonly collision = new CollisionSystem();
  private readonly impactPoint = new Vector3();
  private readonly cameraSpace = new Vector3();
  private readonly inverseCamera = new Quaternion();
  private readonly roll = new Quaternion();
  /** Unit launch direction + its perpendicular, rebuilt on each launch (no allocation). */
  private readonly baseDir = new Vector3();
  private readonly perpDir = new Vector3();

  constructor(scene: Scene) {
    const { projectile: cfg } = GAME_CONFIG;

    this.pool = new ObjectPool<LetterProjectile>(() => {
      const mesh = new Text();
      mesh.font = wordFontUrl;
      mesh.anchorX = 'center';
      mesh.anchorY = 'middle';
      mesh.color = cfg.fillColor;
      mesh.outlineColor = cfg.outlineColor;
      mesh.outlineWidth = 0.05;
      mesh.outlineOpacity = 1;
      mesh.fillOpacity = 1;
      mesh.visible = false;
      // Troika's SDF bounds lag one sync behind the text; culling would pop glyphs in.
      mesh.frustumCulled = false;
      scene.add(mesh);
      return { mesh, state: 'grounded', velocity: new Vector3(), distanceFlown: 0, timer: 0, splashed: false };
    }, cfg.capacity);
  }

  get activeCount(): number {
    return this.active.length;
  }

  /**
   * Splits `word` into one pellet per character and fires the cluster from `origin`
   * along `direction` (the shared aim vector chosen by the targeting system).
   *
   * Letters start in a compact stack and immediately fan into a shotgun cone. Returns
   * false only when the pool is empty (not reachable at normal typing speeds: the pool
   * holds several long words).
   */
  launch(word: string, origin: Vector3, direction: Vector3): boolean {
    const { projectile: cfg } = GAME_CONFIG;
    const count = word.length;
    if (count === 0) return false;

    // Shared aim frame: forward + perpendicular (both level, XZ plane).
    this.baseDir.copy(direction);
    this.baseDir.y = 0;
    if (this.baseDir.lengthSq() < 1e-6) this.baseDir.set(0, 0, -1);
    this.baseDir.normalize();
    this.perpDir.set(-this.baseDir.z, 0, this.baseDir.x);

    const fontSize = clamp(1.35 - (count - 4) * 0.03, 0.9, 1.4);
    let launched = 0;

    for (let i = 0; i < count; i++) {
      const letter = this.pool.acquire();
      if (letter === undefined) break;

      // Even fan across the cone: first letter left edge, last letter right edge,
      // middle letters fly straight at the target. Tiny jitter keeps it organic.
      const t = count === 1 ? 0 : i / (count - 1) - 0.5; // -0.5 .. +0.5
      const angle = t * 2 * cfg.letterSpreadAngle + randRange(-0.03, 0.03);
      const speed = cfg.speed * randRange(1 - cfg.letterSpeedVariance, 1 + cfg.letterSpeedVariance);

      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      letter.velocity.set(
        (this.baseDir.x * cos + this.baseDir.z * sin) * speed,
        0,
        (-this.baseDir.x * sin + this.baseDir.z * cos) * speed,
      );

      // Compact launch cluster: lateral offset perpendicular to flight, vertical stack
      // mirroring the word (first letter on top). They separate further via the cone.
      letter.mesh.position.set(
        origin.x + this.perpDir.x * t * cfg.letterSpreadDistance,
        origin.y - t * cfg.letterStackHeight,
        origin.z + this.perpDir.z * t * cfg.letterSpreadDistance,
      );

      letter.state = 'flying';
      letter.distanceFlown = 0;
      letter.timer = 0;
      letter.splashed = false;
      letter.mesh.visible = true;
      letter.mesh.fontSize = fontSize;
      letter.mesh.text = word[i];
      letter.mesh.fillOpacity = 1;
      letter.mesh.outlineOpacity = 1;
      letter.mesh.sync();

      this.active.push(letter);
      launched++;
    }

    return launched > 0;
  }

  update(
    dt: number,
    enemies: readonly Enemy[],
    cameraQuaternion: Quaternion,
    events: ProjectileEvents,
  ): void {
    const { projectile: cfg } = GAME_CONFIG;
    this.inverseCamera.copy(cameraQuaternion).invert();

    for (let i = this.active.length - 1; i >= 0; i--) {
      const letter = this.active[i];
      let remove = false;

      switch (letter.state) {
        case 'flying': {
          // Hard per-letter range limit: the step is clamped to what is left of
          // WORD_PROJECTILE_MAX_DISTANCE measured from this letter's own launch point,
          // so no pellet can ever cross the arena.
          const speed = Math.hypot(letter.velocity.x, letter.velocity.z) || 1;
          const fullStep = speed * dt;
          const remaining = cfg.maxDistance - letter.distanceFlown;
          const travel = Math.min(fullStep, Math.max(remaining, 0));
          const invSpeed = 1 / speed;
          letter.mesh.position.x += letter.velocity.x * invSpeed * travel;
          letter.mesh.position.z += letter.velocity.z * invSpeed * travel;
          letter.distanceFlown += travel;

          // Piercing collision: kill everything inside the pellet, KEEP FLYING.
          this.impactPoint.copy(letter.mesh.position);
          const direct = this.collision.collectAt(this.impactPoint, cfg.hitRadius, enemies);
          if (direct.length > 0) {
            for (let h = 0; h < direct.length; h++) events.onEnemyKilled(direct[h]);

            if (!letter.splashed) {
              // One-time first-contact burst so a hit still reads visually; the pellet
              // itself is not destroyed and stays lethal for its whole lifetime.
              letter.splashed = true;
              const splash = this.collision.collectAt(this.impactPoint, cfg.impactRadius, enemies);
              for (let h = 0; h < splash.length; h++) events.onEnemyKilled(splash[h]);
              events.onImpact(this.impactPoint);
            }
          }

          if (letter.distanceFlown >= cfg.maxDistance) {
            letter.state = 'falling';
            letter.velocity.set(0, 0, 0);
          }
          break;
        }

        case 'falling': {
          letter.velocity.y -= cfg.gravity * dt;
          const damping = Math.exp(-cfg.fallDamping * dt);
          letter.velocity.x *= damping;
          letter.velocity.z *= damping;
          letter.mesh.position.addScaledVector(letter.velocity, dt);

          // Still a weapon while it drops: enemies it is about to land on die now.
          this.killGroundHazards(letter, enemies, events);

          if (letter.mesh.position.y <= cfg.restY) {
            letter.mesh.position.y = cfg.restY;
            letter.velocity.set(0, 0, 0);
            letter.state = 'grounded';
            letter.timer = cfg.groundLifetimeMs;
          }
          break;
        }

        case 'grounded': {
          // A landed letter is a ground hazard until its lifetime expires.
          this.killGroundHazards(letter, enemies, events);

          letter.timer -= dt * 1000;
          if (letter.timer <= 0) {
            letter.state = 'fading';
            letter.timer = cfg.fadeMs;
          }
          break;
        }

        case 'fading': {
          // Still lethal while it fades out; only the pool release ends the threat.
          this.killGroundHazards(letter, enemies, events);

          letter.timer -= dt * 1000;
          const opacity = clamp(letter.timer / cfg.fadeMs, 0, 1);
          letter.mesh.fillOpacity = opacity;
          letter.mesh.outlineOpacity = opacity;
          if (letter.timer <= 0) remove = true;
          break;
        }
      }

      this.orient(letter, cameraQuaternion, this.inverseCamera);

      if (remove) {
        const last = this.active.pop();
        if (last !== undefined && last !== letter) this.active[i] = last;
        letter.mesh.visible = false;
        this.pool.release(letter);
      }
    }
  }

  /**
   * Kills every enemy standing within `groundHazardRadius` of a letter that has left
   * the flying phase. Only `onEnemyKilled` fires - deliberately *not* `onImpact`, so a
   * letter parked on top of a chokepoint cannot retrigger shockwaves/sound every frame.
   * Killed enemies leave the live list immediately, so each enemy dies at most once.
   */
  private killGroundHazards(
    letter: LetterProjectile,
    enemies: readonly Enemy[],
    events: ProjectileEvents,
  ): void {
    const { projectile: cfg } = GAME_CONFIG;
    this.impactPoint.copy(letter.mesh.position);
    const hits = this.collision.collectAt(this.impactPoint, cfg.groundHazardRadius, enemies);
    for (let h = 0; h < hits.length; h++) events.onEnemyKilled(hits[h]);
  }

  /**
   * Billboards the letter toward the camera while tilting it along its travel axis.
   *
   * The tilt is folded into (-90deg, 90deg] and clamped, so the glyph always stays
   * upright and readable - readability outranks literally pointing it at the target.
   */
  private orient(letter: LetterProjectile, cameraQuaternion: Quaternion, inverseCamera: Quaternion): void {
    this.cameraSpace.copy(letter.velocity).applyQuaternion(inverseCamera);
    if (this.cameraSpace.lengthSq() < 1e-6) {
      letter.mesh.quaternion.copy(cameraQuaternion);
      return;
    }

    let angle = Math.atan2(this.cameraSpace.y, this.cameraSpace.x);
    if (angle > Math.PI / 2) angle -= Math.PI;
    else if (angle < -Math.PI / 2) angle += Math.PI;

    this.roll.setFromAxisAngle(Z_AXIS, clamp(angle, -0.45, 0.45));
    letter.mesh.quaternion.copy(cameraQuaternion).multiply(this.roll);
  }

  /** Removes every live letter immediately (new run). */
  reset(): void {
    for (const letter of this.active) {
      letter.mesh.visible = false;
      this.pool.release(letter);
    }
    this.active.length = 0;
  }

  dispose(scene: Scene): void {
    this.reset();
    this.pool.dispose((letter) => {
      scene.remove(letter.mesh);
      letter.mesh.dispose();
    });
    this.active.length = 0;
  }
}
