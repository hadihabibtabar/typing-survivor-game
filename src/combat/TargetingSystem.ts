import { Vector3 } from 'three';
import { ARENA_RADIUS, GAME_CONFIG } from '../config/GameConfig';
import { Enemy } from '../enemies/Enemy';
import { angleToSector, sectorDirection } from '../utils/MathUtils';

/** Distance at which an enemy stops influencing steering and threat scoring. */
const INFLUENCE_RADIUS = 60;
/** Falloff scale: an enemy at this distance counts half as much as one at the player's feet.
 *  Keeps distant groups relevant while making near threats dominate. */
const FALLOFF_SCALE = 15;

/**
 * One pass over the live enemy list per frame, feeding both automatic player movement and
 * word aiming.
 *
 * Two views of the same field are kept:
 *  - `weights`      : distance-weighted density per angular sector, used to run away,
 *  - `centroidX/Z/W`: distance-weighted centroid per sector, used to aim into a danger zone.
 *
 * Aiming no longer picks the biggest crowd. Each enemy is scored as a *threat*
 * (closeness + how directly it closes on the player + how soon it would collide), and the
 * word is fired into the danger zone of the highest-threat enemy's sector - a fixed
 * direction, never a homing shot at the individual enemy.
 *
 * Steering is a weighted sum of five components - enemy avoidance, centre bias, boundary
 * avoidance, movement inertia and a slow roaming walk - normalised to one direction, so
 * no single force (e.g. a panicked flee) can pin the player against the arena rim.
 */
export class TargetingSystem {
  private readonly sectors: number;
  private readonly weights: Float64Array;
  private readonly centroidX: Float64Array;
  private readonly centroidZ: Float64Array;
  private readonly centroidWeight: Float64Array;
  private readonly direction = new Vector3();
  /** Player position the current buckets were built around (needed to re-sector on aim). */
  private originX = 0;
  private originZ = 0;
  /** Slow random-walk heading that keeps the player roaming when nothing threatens it. */
  private roamAngle = Math.random() * Math.PI * 2;

  constructor() {
    this.sectors = GAME_CONFIG.density.sectors;
    this.weights = new Float64Array(this.sectors);
    this.centroidX = new Float64Array(this.sectors);
    this.centroidZ = new Float64Array(this.sectors);
    this.centroidWeight = new Float64Array(this.sectors);
  }

  /** Rebuilds the density buckets. Call once per frame before steering/aiming queries. */
  analyze(enemies: readonly Enemy[], origin: Vector3): void {
    this.weights.fill(0);
    this.centroidX.fill(0);
    this.centroidZ.fill(0);
    this.centroidWeight.fill(0);
    this.originX = origin.x;
    this.originZ = origin.z;

    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      const dx = enemy.position.x - origin.x;
      const dz = enemy.position.z - origin.z;
      const distance = Math.hypot(dx, dz);
      if (distance > INFLUENCE_RADIUS) continue;

      const sector = angleToSector(Math.atan2(dz, dx), this.sectors);
      this.weights[sector] += 1 / (1 + distance / FALLOFF_SCALE);

      // Centroid weight favours nearer enemies so the aim point sits on the near face
      // of a cluster instead of being dragged past it.
      const aimWeight = 1 / (1 + distance * 0.08);
      this.centroidX[sector] += enemy.position.x * aimWeight;
      this.centroidZ[sector] += enemy.position.z * aimWeight;
      this.centroidWeight[sector] += aimWeight;
    }
  }

  /**
   * Writes the desired movement direction (a unit vector, or zero) into `out`.
   *
   *   finalDirection = enemyAvoidance + centreBias + boundaryAvoidance + inertia + roaming
   *
   * Each term is a normalised direction scaled by its configured weight, then the sum is
   * normalised once. That keeps the proportions stable: 40 enemies no longer drown out
   * the centring and boundary forces, which is exactly what used to trap the player on
   * the rim. `velocity` supplies the inertia term; `dt` advances the roaming walk.
   */
  computeSteering(out: Vector3, origin: Vector3, velocity: Vector3, dt: number): void {
    const { steering: cfg } = GAME_CONFIG;

    let steerX = 0;
    let steerZ = 0;

    // 1. Enemy avoidance: negative gradient of the density field, normalised so it
    //    contributes exactly its weight regardless of how many enemies are pressing.
    let gradientX = 0;
    let gradientZ = 0;
    for (let sector = 0; sector < this.sectors; sector++) {
      const weight = this.weights[sector];
      if (weight === 0) continue;
      sectorDirection(sector, this.sectors, this.direction);
      gradientX += this.direction.x * weight;
      gradientZ += this.direction.z * weight;
    }
    const gradientLength = Math.hypot(gradientX, gradientZ);
    if (gradientLength > 1e-6) {
      steerX += (-gradientX / gradientLength) * cfg.avoidanceWeight;
      steerZ += (-gradientZ / gradientLength) * cfg.avoidanceWeight;
    }

    const distanceFromCentre = Math.hypot(origin.x, origin.z);
    if (distanceFromCentre > 1e-6) {
      // 2. Centre bias: grows linearly with distance from the middle - a moderate pull
      //    that fades to nothing at the centre, so the player roams rather than locking.
      const centrePull = (distanceFromCentre / ARENA_RADIUS) * cfg.centerWeight;
      steerX += (-origin.x / distanceFromCentre) * centrePull;
      steerZ += (-origin.z / distanceFromCentre) * centrePull;

      // 3. Soft boundary force: engages past `boundaryStart` and ramps up to a strength
      //    no avoidance vector can beat, so pressure can shove the player close to the
      //    wall but never pin it there. No teleport - the containment clamp in
      //    Player.update stays as a last-resort safety net only.
      if (distanceFromCentre > cfg.boundaryStart) {
        const overhang = (distanceFromCentre - cfg.boundaryStart) / (ARENA_RADIUS - cfg.boundaryStart);
        const boundaryPush = overhang * cfg.boundaryWeight;
        steerX += (-origin.x / distanceFromCentre) * boundaryPush;
        steerZ += (-origin.z / distanceFromCentre) * boundaryPush;
      }
    }

    // 4. Inertia: keep a little of the current heading so direction changes read as
    //    intelligent navigation instead of an instant vector flip.
    const speed = Math.hypot(velocity.x, velocity.z);
    if (speed > 0.5) {
      steerX += (velocity.x / speed) * cfg.inertiaWeight;
      steerZ += (velocity.z / speed) * cfg.inertiaWeight;
    }

    // 5. Roaming: a persistent slow random walk. The player never freezes when the
    //    arena is quiet, and the centre/boundary terms keep the walk inside the middle
    //    regions over time.
    this.roamAngle += (Math.random() * 2 - 1) * cfg.roamTurnRate * dt;
    steerX += Math.cos(this.roamAngle) * cfg.roamWeight;
    steerZ += Math.sin(this.roamAngle) * cfg.roamWeight;

    const length = Math.hypot(steerX, steerZ);
    if (length < 1e-6) {
      out.set(0, 0, 0);
      return;
    }
    out.set(steerX / length, 0, steerZ / length);
  }

  /**
   * Writes the aim point for a word into `out` and returns `false` when nothing is in
   * range (callers then fall back to the player's facing).
   *
   * Threat scoring, not crowd size, picks the direction:
   *
   *   threat = closeness(d) · approachMultiplier · (1 + urgency(d / closingSpeed))
   *
   * A close enemy wins ties, but an enemy that is a little farther away and closing
   * head-on outranks one that is close and drifting sideways - it will reach the player
   * first. The word is then aimed at the *danger zone*: the weighted centroid of the
   * highest-threat enemy's sector (plus its neighbours), a region where several enemies
   * may be packed, rather than at the individual enemy. The point is computed once at
   * launch; the projectile never re-aims, never rotates toward a target and never
   * chases - it flies a fixed direction for its short range.
   */
  computeAimPoint(out: Vector3, enemies: readonly Enemy[]): boolean {

    let threat: Enemy | null = null;
    let threatSector = -1;
    let highestScore = 0;

    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      const dx = enemy.position.x - this.originX;
      const dz = enemy.position.z - this.originZ;
      const distance = Math.hypot(dx, dz);
      if (distance > INFLUENCE_RADIUS) continue;

      const score = this.threatScore(enemy, dx, dz, distance);
      if (score > highestScore) {
        highestScore = score;
        threat = enemy;
        threatSector = angleToSector(Math.atan2(dz, dx), this.sectors);
      }
    }
    if (threat === null || threatSector < 0) return false;

    // Danger zone = centroid of the threat's sector and its two neighbours.
    let sumX = 0;
    let sumZ = 0;
    let sumWeight = 0;
    for (let offset = -1; offset <= 1; offset++) {
      const sector = (threatSector + offset + this.sectors) % this.sectors;
      sumX += this.centroidX[sector];
      sumZ += this.centroidZ[sector];
      sumWeight += this.centroidWeight[sector];
    }

    if (sumWeight > 0) {
      out.set(sumX / sumWeight, 0, sumZ / sumWeight);
    } else {
      // Should not happen (the threat itself contributes to its sector) - fall back to
      // the threat's direction, still a plain fixed point, not a homing target.
      out.set(threat.position.x, 0, threat.position.z);
    }
    return true;
  }

  /**
   * Threat score of one enemy - higher means "will reach the player soonest".
   *
   *  - `closeness`: `1 / (1 + d / scale)`, always in (0, 1]; distance dominates ties.
   *  - `approach` : how much of the enemy's motion is directed at the player (0..1),
   *                 scaled between `threatSidewaysFactor` and 1. A close enemy drifting
   *                 sideways scores less than a slightly farther enemy charging in.
   *  - `urgency`  : `1 / (1 + timeToImpact / scale)` using the current closing speed, so
   *                 an imminent collision pushes a threat to the top of the list.
   */
  private threatScore(enemy: Enemy, dx: number, dz: number, distance: number): number {
    const { targeting: cfg } = GAME_CONFIG;

    const closeness = 1 / (1 + distance / cfg.threatDistanceScale);

    // Velocity component pointing from the enemy toward the player (positive = closing).
    const closing = Math.max(0, -(enemy.velocity.x * dx + enemy.velocity.z * dz) / Math.max(distance, 1e-4));
    const approach = Math.min(closing / Math.max(enemy.speed, 1e-4), 1);
    const approachMultiplier = cfg.threatSidewaysFactor + (1 - cfg.threatSidewaysFactor) * approach;

    let urgency = 0;
    if (closing > 1e-4) {
      const timeToImpact = distance / closing;
      urgency = 1 / (1 + timeToImpact / cfg.threatUrgencyTimeScale);
    }

    return closeness * approachMultiplier * (1 + cfg.threatUrgencyBoost * urgency);
  }
}
