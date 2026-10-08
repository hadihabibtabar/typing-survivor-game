import {
  BoxGeometry,
  BufferGeometry,
  CapsuleGeometry,
  Color,
  DynamicDrawUsage,
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  Scene,
  SphereGeometry,
  Vector3,
} from 'three';
import { GAME_CONFIG } from '../config/GameConfig';
import { ObjectPool } from '../utils/ObjectPool';
import { SpatialHash } from '../utils/SpatialHash';
import { clamp } from '../utils/MathUtils';
import { Enemy, createEnemy } from './Enemy';

/** How long a killed enemy stays visible as a white, shrinking death flash. */
const DEATH_FLASH_SECONDS = 0.16;

/**
 * Owns every enemy in the run.
 *
 * Rendering uses instanced meshes:
 * - One instanced capsule mesh for the enemy body.
 * - One instanced dome mesh for the green combat helmet.
 * - One instanced brim mesh for the front of the helmet.
 *
 * All enemies share the same geometries/materials and per-enemy transforms
 * live in instance buffers. State objects come from a pre-allocated pool.
 */
export class EnemyManager {
  /** Red enemy body. */
  private readonly mesh: InstancedMesh;

  /** Green helmet dome. */
  private readonly helmetMesh: InstancedMesh;

  /** Green helmet front brim. */
  private readonly helmetBrimMesh: InstancedMesh;

  private readonly material: MeshStandardMaterial;
  private readonly helmetMaterial: MeshStandardMaterial;

  private readonly pool: ObjectPool<Enemy>;

  /** Swap-remove list of live enemies; iterated every frame. */
  private readonly active: Enemy[] = [];

  /** Recently killed enemies still playing their death flash; never collidable. */
  private readonly dying: Enemy[] = [];

  private readonly freeSlots: number[] = [];

  private readonly dummy = new Object3D();

  /** Separate dummy used to construct helmet transforms. */
  private readonly helmetDummy = new Object3D();

  private readonly hash: SpatialHash<Enemy>;
  private readonly neighbours: Enemy[] = [];

  private readonly baseColor: Color;
  private readonly helmetBaseColor: Color;

  private readonly flashColor = new Color(0xffffff);

  private readonly scratchColor = new Color();
  private readonly scratchHelmetColor = new Color();

  private elapsed = 0;

  constructor() {
    const { enemies: cfg } = GAME_CONFIG;

    /*
     * ------------------------------------------------------------
     * Enemy body
     * ------------------------------------------------------------
     */
    const geometry = new CapsuleGeometry(
      cfg.capsuleRadius,
      cfg.capsuleLength,
      4,
      12,
    );

    this.material = new MeshStandardMaterial({
      color: cfg.color,
      emissive: cfg.emissive,
      emissiveIntensity: 0.7,
      roughness: 0.45,
      metalness: 0.1,
    });

    this.baseColor = new Color(cfg.color);

    this.mesh = new InstancedMesh(
      geometry,
      this.material,
      cfg.capacity,
    );

    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.castShadow = true;

    /*
     * Instance transforms are spread across the whole arena, so the
     * default per-geometry bounding sphere would cull the entire horde.
     */
    this.mesh.frustumCulled = false;

    /*
     * ------------------------------------------------------------
     * Green combat helmet
     * ------------------------------------------------------------
     *
     * The helmet consists of:
     *
     *   1. A flattened upper hemisphere / dome
     *   2. A small front brim
     *
     * Both use the same instance slot as the enemy body.
     */

    const helmetRadius = cfg.capsuleRadius * 1.12;

    /*
     * Upper hemisphere.
     *
     * phiLength = PI / 2 means only the upper half of the sphere
     * is rendered, producing a helmet-like dome instead of a ball.
     */
    const helmetGeometry = new SphereGeometry(
      helmetRadius,
      12,
      6,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2,
    );

    this.helmetMaterial = new MeshStandardMaterial({
      color: 0x294d2a,
      emissive: 0x081208,
      emissiveIntensity: 0.25,
      roughness: 0.62,
      metalness: 0.18,
    });

    this.helmetBaseColor = new Color(0x294d2a);

    this.helmetMesh = new InstancedMesh(
      helmetGeometry,
      this.helmetMaterial,
      cfg.capacity,
    );

    this.helmetMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.helmetMesh.castShadow = true;
    this.helmetMesh.frustumCulled = false;

    /*
     * Front brim.
     *
     * It is intentionally a little wider than the dome so the silhouette
     * reads clearly as a combat helmet.
     */
    const helmetBrimGeometry = new BoxGeometry(
      helmetRadius * 1.45,
      helmetRadius * 0.18,
      helmetRadius * 0.62,
    );

    this.helmetBrimMesh = new InstancedMesh(
      helmetBrimGeometry,
      this.helmetMaterial,
      cfg.capacity,
    );

    this.helmetBrimMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.helmetBrimMesh.castShadow = true;
    this.helmetBrimMesh.frustumCulled = false;

    /*
     * ------------------------------------------------------------
     * Hide every instance slot initially
     * ------------------------------------------------------------
     */

    this.dummy.scale.setScalar(0);
    this.dummy.updateMatrix();

    this.helmetDummy.scale.setScalar(0);
    this.helmetDummy.updateMatrix();

    for (let slot = 0; slot < cfg.capacity; slot++) {
      /*
       * Body
       */
      this.mesh.setMatrixAt(slot, this.dummy.matrix);
      this.mesh.setColorAt(slot, this.baseColor);

      /*
       * Helmet dome
       */
      this.helmetMesh.setMatrixAt(slot, this.helmetDummy.matrix);
      this.helmetMesh.setColorAt(slot, this.helmetBaseColor);

      /*
       * Helmet brim
       */
      this.helmetBrimMesh.setMatrixAt(slot, this.helmetDummy.matrix);
      this.helmetBrimMesh.setColorAt(slot, this.helmetBaseColor);

      this.freeSlots.push(slot);
    }

    this.freeSlots.reverse(); // pop() now yields slot 0 first

    this.mesh.instanceMatrix.needsUpdate = true;
    this.helmetMesh.instanceMatrix.needsUpdate = true;
    this.helmetBrimMesh.instanceMatrix.needsUpdate = true;

    if (this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate = true;
    }

    if (this.helmetMesh.instanceColor) {
      this.helmetMesh.instanceColor.needsUpdate = true;
    }

    if (this.helmetBrimMesh.instanceColor) {
      this.helmetBrimMesh.instanceColor.needsUpdate = true;
    }

    this.pool = new ObjectPool(createEnemy, cfg.capacity);

    this.hash = new SpatialHash<Enemy>(
      cfg.separationRadius * 1.5,
    );
  }

  /** Number of live enemies. */
  get activeCount(): number {
    return this.active.length;
  }

  /** Live enemies, stable for the duration of a frame. */
  get activeEnemies(): readonly Enemy[] {
    return this.active;
  }

  /**
   * Spawns one enemy at floor position (x, z) moving at `speed`.
   * Returns null when capped.
   */
  spawn(x: number, z: number, speed: number): Enemy | null {
    const { enemies: cfg } = GAME_CONFIG;

    const enemy = this.pool.acquire();
    const slot = this.freeSlots.pop();

    if (enemy === undefined || slot === undefined) {
      if (enemy !== undefined) {
        this.pool.release(enemy);
      }

      return null;
    }

    enemy.active = true;
    enemy.position.set(x, cfg.bodyY, z);
    enemy.velocity.set(0, 0, 0);
    enemy.speed = speed;
    enemy.radius = cfg.radius;

    enemy.wobblePhase = Math.random() * Math.PI * 2;

    enemy.wobbleFrequency =
      cfg.wobbleFrequency *
      (0.75 + Math.random() * 0.5);

    enemy.wobbleAmplitude =
      cfg.wobbleAmplitude *
      (0.5 + Math.random());

    enemy.flash = 0;
    enemy.slot = slot;

    /*
     * ------------------------------------------------------------
     * Body transform
     * ------------------------------------------------------------
     */

    this.dummy.position.copy(enemy.position);

    this.dummy.rotation.set(
      0,
      Math.atan2(-x, -z),
      0,
    );

    this.dummy.scale.setScalar(1);
    this.dummy.updateMatrix();

    this.mesh.setMatrixAt(slot, this.dummy.matrix);
    this.mesh.setColorAt(slot, this.baseColor);

    /*
     * ------------------------------------------------------------
     * Helmet transform
     * ------------------------------------------------------------
     *
     * The capsule's center is around bodyY. Move the helmet upward
     * so it sits on the top of the red enemy.
     */
    const helmetY =
      cfg.bodyY +
      cfg.capsuleLength * 0.5 +
      cfg.capsuleRadius * 0.42;

    this.helmetDummy.position.set(
      enemy.position.x,
      helmetY,
      enemy.position.z,
    );

    /*
     * Match the enemy's facing direction.
     */
    this.helmetDummy.rotation.set(
      0,
      Math.atan2(enemy.velocity.x, enemy.velocity.z),
      0,
    );

    /*
     * Slightly flatten the dome vertically so it reads as a helmet
     * rather than a sphere.
     */
    this.helmetDummy.scale.set(
      1,
      0.72,
      1,
    );

    this.helmetDummy.updateMatrix();

    this.helmetMesh.setMatrixAt(
      slot,
      this.helmetDummy.matrix,
    );

    this.helmetMesh.setColorAt(
      slot,
      this.helmetBaseColor,
    );

    /*
     * ------------------------------------------------------------
     * Helmet brim
     * ------------------------------------------------------------
     *
     * Put the brim slightly forward relative to the enemy.
     */
    const helmetAngle = Math.atan2(
      enemy.velocity.x,
      enemy.velocity.z,
    );

    const forwardX = Math.sin(helmetAngle);
    const forwardZ = Math.cos(helmetAngle);

    this.helmetDummy.position.set(
      enemy.position.x + forwardX * cfg.capsuleRadius * 0.28,
      helmetY - cfg.capsuleRadius * 0.02,
      enemy.position.z + forwardZ * cfg.capsuleRadius * 0.28,
    );

    this.helmetDummy.rotation.set(
      0,
      helmetAngle,
      0,
    );

    this.helmetDummy.scale.set(
      1,
      1,
      1,
    );

    this.helmetDummy.updateMatrix();

    this.helmetBrimMesh.setMatrixAt(
      slot,
      this.helmetDummy.matrix,
    );

    this.helmetBrimMesh.setColorAt(
      slot,
      this.helmetBaseColor,
    );

    /*
     * Mark all instance buffers dirty.
     */
    this.mesh.instanceMatrix.needsUpdate = true;
    this.helmetMesh.instanceMatrix.needsUpdate = true;
    this.helmetBrimMesh.instanceMatrix.needsUpdate = true;

    if (this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate = true;
    }

    if (this.helmetMesh.instanceColor) {
      this.helmetMesh.instanceColor.needsUpdate = true;
    }

    if (this.helmetBrimMesh.instanceColor) {
      this.helmetBrimMesh.instanceColor.needsUpdate = true;
    }

    this.active.push(enemy);

    return enemy;
  }

  /**
   * Removes an enemy from play.
   *
   * The instance is not hidden immediately: it joins a short-lived
   * `dying` list so the kill reads as a white flash that shrinks away,
   * then its slot and object are recycled.
   *
   * Safe to call twice.
   */
  kill(enemy: Enemy): void {
    if (!enemy.active) return;

    enemy.active = false;
    enemy.flash = DEATH_FLASH_SECONDS;

    const index = this.active.indexOf(enemy);

    if (index >= 0) {
      const last = this.active.pop();

      if (last !== undefined && last !== enemy) {
        this.active[index] = last;
      }
    }

    this.dying.push(enemy);
  }

  /**
   * Advances the horde:
   * seek the player, wobble, separate from neighbours,
   * decay hit flashes, then write instance transforms/colours.
   */
  update(dt: number, playerPos: Vector3): void {
    const { enemies: cfg } = GAME_CONFIG;

    this.elapsed += dt;

    /*
     * Rebuild the neighbour grid once; queries below then cost
     * O(local density).
     */
    this.hash.clear();

    for (let i = 0; i < this.active.length; i++) {
      this.hash.insert(this.active[i]);
    }

    for (let i = this.active.length - 1; i >= 0; i--) {
      const enemy = this.active[i];

      /*
       * ------------------------------------------------------------
       * Seek the player
       * ------------------------------------------------------------
       */

      let dirX = playerPos.x - enemy.position.x;
      let dirZ = playerPos.z - enemy.position.z;

      const distance =
        Math.hypot(dirX, dirZ) || 1;

      dirX /= distance;
      dirZ /= distance;

      /*
       * Lateral sine offset makes the swarm drift organically
       * instead of beelining.
       */
      const wobble =
        Math.sin(
          this.elapsed * enemy.wobbleFrequency +
          enemy.wobblePhase,
        ) *
        enemy.wobbleAmplitude;

      let moveX =
        dirX -
        dirZ * wobble;

      let moveZ =
        dirZ +
        dirX * wobble;

      const moveLength =
        Math.hypot(moveX, moveZ) || 1;

      moveX =
        (moveX / moveLength) *
        enemy.speed;

      moveZ =
        (moveZ / moveLength) *
        enemy.speed;

      /*
       * ------------------------------------------------------------
       * Local separation
       * ------------------------------------------------------------
       */

      const near = this.hash.collect(
        enemy.position.x,
        enemy.position.z,
        cfg.separationRadius,
        this.neighbours,
      );

      for (let n = 0; n < near.length; n++) {
        const other = near[n];

        if (other === enemy) continue;

        const offsetX =
          enemy.position.x -
          other.position.x;

        const offsetZ =
          enemy.position.z -
          other.position.z;

        const separationSquared =
          offsetX * offsetX +
          offsetZ * offsetZ;

        const radius =
          cfg.separationRadius;

        if (
          separationSquared >= radius * radius ||
          separationSquared < 1e-6
        ) {
          continue;
        }

        const separation =
          Math.sqrt(separationSquared);

        const push =
          (1 - separation / radius) *
          cfg.separationStrength;

        moveX +=
          (offsetX / separation) *
          push;

        moveZ +=
          (offsetZ / separation) *
          push;
      }

      enemy.velocity.set(
        moveX,
        0,
        moveZ,
      );

      enemy.position.x +=
        moveX * dt;

      enemy.position.z +=
        moveZ * dt;

      enemy.position.y =
        cfg.bodyY;

      /*
       * Body.
       */
      this.writeInstance(
        enemy,
        moveX,
        moveZ,
        1,
        0,
      );

      /*
       * Helmet.
       */
      this.writeHelmetInstance(
        enemy,
        moveX,
        moveZ,
        1,
        0,
      );
    }

    this.updateDying(dt);

    this.mesh.instanceMatrix.needsUpdate = true;
    this.helmetMesh.instanceMatrix.needsUpdate = true;
    this.helmetBrimMesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Runs death flashes to completion, then recycles the instance slot
   * and object.
   */
  private updateDying(dt: number): void {
    for (
      let i = this.dying.length - 1;
      i >= 0;
      i--
    ) {
      const enemy = this.dying[i];

      enemy.flash -= dt;

      const progress = clamp(
        enemy.flash /
          DEATH_FLASH_SECONDS,
        0,
        1,
      );

      /*
       * Body death flash.
       */
      this.writeInstance(
        enemy,
        enemy.velocity.x,
        enemy.velocity.z,
        progress,
        progress,
      );

      /*
       * Helmet death flash.
       *
       * The green helmet also becomes white during the hit/death flash
       * and shrinks together with the body.
       */
      this.writeHelmetInstance(
        enemy,
        enemy.velocity.x,
        enemy.velocity.z,
        progress,
        progress,
      );

      if (enemy.flash <= 0) {
        /*
         * Hide body.
         */
        this.dummy.position.copy(
          enemy.position,
        );

        this.dummy.scale.setScalar(0);
        this.dummy.updateMatrix();

        this.mesh.setMatrixAt(
          enemy.slot,
          this.dummy.matrix,
        );

        /*
         * Hide helmet dome.
         */
        this.helmetDummy.position.copy(
          enemy.position,
        );

        this.helmetDummy.scale.setScalar(0);
        this.helmetDummy.updateMatrix();

        this.helmetMesh.setMatrixAt(
          enemy.slot,
          this.helmetDummy.matrix,
        );

        /*
         * Hide helmet brim.
         */
        this.helmetBrimMesh.setMatrixAt(
          enemy.slot,
          this.helmetDummy.matrix,
        );

        /*
         * Swap-remove from dying.
         */
        const last = this.dying.pop();

        if (
          last !== undefined &&
          last !== enemy
        ) {
          this.dying[i] = last;
        }

        this.freeSlots.push(
          enemy.slot,
        );

        enemy.slot = -1;
        enemy.flash = 0;

        this.pool.release(enemy);
      }
    }

    if (this.dying.length > 0) {
      if (this.mesh.instanceColor) {
        this.mesh.instanceColor.needsUpdate = true;
      }

      if (this.helmetMesh.instanceColor) {
        this.helmetMesh.instanceColor.needsUpdate = true;
      }

      if (this.helmetBrimMesh.instanceColor) {
        this.helmetBrimMesh.instanceColor.needsUpdate = true;
      }
    }
  }

  /**
   * Writes the red enemy body instance.
   */
  private writeInstance(
    enemy: Enemy,
    velocityX: number,
    velocityZ: number,
    scale: number,
    whiten: number,
  ): void {
    this.dummy.position.copy(
      enemy.position,
    );

    this.dummy.rotation.set(
      0,
      Math.atan2(
        velocityX,
        velocityZ,
      ),
      0,
    );

    this.dummy.scale.setScalar(
      scale,
    );

    this.dummy.updateMatrix();

    this.mesh.setMatrixAt(
      enemy.slot,
      this.dummy.matrix,
    );

    this.scratchColor
      .copy(this.baseColor)
      .lerp(
        this.flashColor,
        whiten,
      );

    this.mesh.setColorAt(
      enemy.slot,
      this.scratchColor,
    );
  }

  /**
   * Writes both helmet instances.
   *
   * The helmet follows the enemy's movement direction and stays positioned
   * above the red capsule.
   */
  private writeHelmetInstance(
    enemy: Enemy,
    velocityX: number,
    velocityZ: number,
    scale: number,
    whiten: number,
  ): void {
    const { enemies: cfg } =
      GAME_CONFIG;

    const angle = Math.atan2(
      velocityX,
      velocityZ,
    );

    /*
     * Helmet sits on top of the capsule.
     */
    const helmetY =
      cfg.bodyY +
      cfg.capsuleLength * 0.5 +
      cfg.capsuleRadius * 0.42;

    /*
     * ------------------------------------------------------------
     * Dome
     * ------------------------------------------------------------
     */

    this.helmetDummy.position.set(
      enemy.position.x,
      helmetY,
      enemy.position.z,
    );

    this.helmetDummy.rotation.set(
      0,
      angle,
      0,
    );

    this.helmetDummy.scale.set(
      scale,
      scale * 0.72,
      scale,
    );

    this.helmetDummy.updateMatrix();

    this.helmetMesh.setMatrixAt(
      enemy.slot,
      this.helmetDummy.matrix,
    );

    /*
     * ------------------------------------------------------------
     * Front brim
     * ------------------------------------------------------------
     */

    const forwardX =
      Math.sin(angle);

    const forwardZ =
      Math.cos(angle);

    this.helmetDummy.position.set(
      enemy.position.x +
        forwardX *
          cfg.capsuleRadius *
          0.28 *
          scale,

      helmetY -
        cfg.capsuleRadius *
          0.02 *
          scale,

      enemy.position.z +
        forwardZ *
          cfg.capsuleRadius *
          0.28 *
          scale,
    );

    this.helmetDummy.rotation.set(
      0,
      angle,
      0,
    );

    this.helmetDummy.scale.setScalar(
      scale,
    );

    this.helmetDummy.updateMatrix();

    this.helmetBrimMesh.setMatrixAt(
      enemy.slot,
      this.helmetDummy.matrix,
    );

    /*
     * ------------------------------------------------------------
     * Helmet colour
     * ------------------------------------------------------------
     */

    this.scratchHelmetColor
      .copy(this.helmetBaseColor)
      .lerp(
        this.flashColor,
        whiten,
      );

    this.helmetMesh.setColorAt(
      enemy.slot,
      this.scratchHelmetColor,
    );

    this.helmetBrimMesh.setColorAt(
      enemy.slot,
      this.scratchHelmetColor,
    );
  }

  /** Clears the arena without touching rendering state. */
  reset(): void {
    const recycle = (
      enemy: Enemy,
    ): void => {
      enemy.active = false;
      enemy.flash = 0;
      enemy.slot = -1;

      this.pool.release(enemy);
    };

    for (
      let i = 0;
      i < this.active.length;
      i++
    ) {
      recycle(this.active[i]);
    }

    for (
      let i = 0;
      i < this.dying.length;
      i++
    ) {
      recycle(this.dying[i]);
    }

    this.active.length = 0;
    this.dying.length = 0;

    this.freeSlots.length = 0;

    for (
      let slot =
        GAME_CONFIG.enemies.capacity - 1;
      slot >= 0;
      slot--
    ) {
      this.freeSlots.push(slot);

      /*
       * Hide body.
       */
      this.dummy.position.set(
        0,
        0,
        0,
      );

      this.dummy.rotation.set(
        0,
        0,
        0,
      );

      this.dummy.scale.setScalar(0);
      this.dummy.updateMatrix();

      this.mesh.setMatrixAt(
        slot,
        this.dummy.matrix,
      );

      /*
       * Hide helmet dome and brim.
       */
      this.helmetDummy.position.set(
        0,
        0,
        0,
      );

      this.helmetDummy.rotation.set(
        0,
        0,
        0,
      );

      this.helmetDummy.scale.setScalar(
        0,
      );

      this.helmetDummy.updateMatrix();

      this.helmetMesh.setMatrixAt(
        slot,
        this.helmetDummy.matrix,
      );

      this.helmetBrimMesh.setMatrixAt(
        slot,
        this.helmetDummy.matrix,
      );
    }

    this.mesh.instanceMatrix.needsUpdate = true;
    this.helmetMesh.instanceMatrix.needsUpdate = true;
    this.helmetBrimMesh.instanceMatrix.needsUpdate = true;

    this.elapsed = 0;
  }

  /**
   * Adds all enemy rendering meshes to the scene.
   */
  addTo(scene: Scene): void {
    scene.add(this.mesh);
    scene.add(this.helmetMesh);
    scene.add(this.helmetBrimMesh);
  }

  /**
   * Releases all GPU resources.
   */
  dispose(scene: Scene): void {
    scene.remove(this.mesh);
    scene.remove(this.helmetMesh);
    scene.remove(this.helmetBrimMesh);

    const geometry =
      this.mesh.geometry as BufferGeometry;

    const helmetGeometry =
      this.helmetMesh.geometry as BufferGeometry;

    const helmetBrimGeometry =
      this.helmetBrimMesh.geometry as BufferGeometry;

    geometry.dispose();
    helmetGeometry.dispose();
    helmetBrimGeometry.dispose();

    this.material.dispose();
    this.helmetMaterial.dispose();

    this.pool.dispose();

    this.active.length = 0;
    this.dying.length = 0;
    this.freeSlots.length = 0;
    this.neighbours.length = 0;
  }
}