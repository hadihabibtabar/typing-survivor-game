import {
  BufferGeometry,
  CapsuleGeometry,
  Color,
  DynamicDrawUsage,
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  Scene,
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
 * Rendering uses a single `InstancedMesh`: all enemies share one geometry and one
 * material, and per-enemy transforms/colours live in instance buffers. State objects come
 * from a pre-allocated pool, so a wave of 20 enemies allocates nothing.
 */
export class EnemyManager {
  private readonly mesh: InstancedMesh;
  private readonly material: MeshStandardMaterial;
  private readonly pool: ObjectPool<Enemy>;
  /** Swap-remove list of live enemies; iterated every frame. */
  private readonly active: Enemy[] = [];
  /** Recently killed enemies still playing their death flash; never collidable. */
  private readonly dying: Enemy[] = [];
  private readonly freeSlots: number[] = [];

  private readonly dummy = new Object3D();
  private readonly hash: SpatialHash<Enemy>;
  private readonly neighbours: Enemy[] = [];
  private readonly baseColor: Color;
  private readonly flashColor = new Color(0xffffff);
  private readonly scratchColor = new Color();

  private elapsed = 0;

  constructor() {
    const { enemies: cfg } = GAME_CONFIG;

    const geometry = new CapsuleGeometry(cfg.capsuleRadius, cfg.capsuleLength, 4, 12);
    this.material = new MeshStandardMaterial({
      color: cfg.color,
      emissive: cfg.emissive,
      emissiveIntensity: 0.7,
      roughness: 0.45,
      metalness: 0.1,
    });
    this.baseColor = new Color(cfg.color);

    this.mesh = new InstancedMesh(geometry, this.material, cfg.capacity);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.castShadow = true;
    // Instance transforms are spread across the whole arena, so the default per-geometry
    // bounding sphere would cull the entire horde incorrectly.
    this.mesh.frustumCulled = false;

    // Hide every slot up-front and allocate the instance colour buffer.
    this.dummy.scale.setScalar(0);
    this.dummy.updateMatrix();
    for (let slot = 0; slot < cfg.capacity; slot++) {
      this.mesh.setMatrixAt(slot, this.dummy.matrix);
      this.mesh.setColorAt(slot, this.baseColor);
      this.freeSlots.push(slot);
    }
    this.freeSlots.reverse(); // pop() now yields slot 0 first
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;

    this.pool = new ObjectPool(createEnemy, cfg.capacity);
    this.hash = new SpatialHash<Enemy>(cfg.separationRadius * 1.5);
  }

  /** Number of live enemies. */
  get activeCount(): number {
    return this.active.length;
  }

  /** Live enemies, stable for the duration of a frame. */
  get activeEnemies(): readonly Enemy[] {
    return this.active;
  }

  /** Spawns one enemy at floor position (x, z) moving at `speed`. Returns null when capped. */
  spawn(x: number, z: number, speed: number): Enemy | null {
    const { enemies: cfg } = GAME_CONFIG;
    const enemy = this.pool.acquire();
    const slot = this.freeSlots.pop();
    if (enemy === undefined || slot === undefined) {
      if (enemy !== undefined) this.pool.release(enemy);
      return null;
    }

    enemy.active = true;
    enemy.position.set(x, cfg.bodyY, z);
    enemy.velocity.set(0, 0, 0);
    enemy.speed = speed;
    enemy.radius = cfg.radius;
    enemy.wobblePhase = Math.random() * Math.PI * 2;
    enemy.wobbleFrequency = cfg.wobbleFrequency * (0.75 + Math.random() * 0.5);
    enemy.wobbleAmplitude = cfg.wobbleAmplitude * (0.5 + Math.random());
    enemy.flash = 0;
    enemy.slot = slot;

    this.dummy.position.copy(enemy.position);
    this.dummy.rotation.set(0, Math.atan2(-x, -z), 0);
    this.dummy.scale.setScalar(1);
    this.dummy.updateMatrix();
    this.mesh.setMatrixAt(slot, this.dummy.matrix);
    this.mesh.setColorAt(slot, this.baseColor);
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;

    this.active.push(enemy);
    return enemy;
  }

  /**
   * Removes an enemy from play.
   *
   * The instance is not hidden immediately: it joins a short-lived `dying` list so the
   * kill reads as a white flash that shrinks away, then its slot and object are recycled.
   * Safe to call twice.
   */
  kill(enemy: Enemy): void {
    if (!enemy.active) return;
    enemy.active = false;
    enemy.flash = DEATH_FLASH_SECONDS;

    const index = this.active.indexOf(enemy);
    if (index >= 0) {
      const last = this.active.pop();
      if (last !== undefined && last !== enemy) this.active[index] = last;
    }

    this.dying.push(enemy);
  }

  /**
   * Advances the horde: seek the player, wobble, separate from neighbours, decay hit
   * flashes, then write instance transforms/colours.
   */
  update(dt: number, playerPos: Vector3): void {
    const { enemies: cfg } = GAME_CONFIG;
    this.elapsed += dt;

    // Rebuild the neighbour grid once; queries below then cost O(local density).
    this.hash.clear();
    for (let i = 0; i < this.active.length; i++) this.hash.insert(this.active[i]);

    for (let i = this.active.length - 1; i >= 0; i--) {
      const enemy = this.active[i];

      // Seek the player.
      let dirX = playerPos.x - enemy.position.x;
      let dirZ = playerPos.z - enemy.position.z;
      const distance = Math.hypot(dirX, dirZ) || 1;
      dirX /= distance;
      dirZ /= distance;

      // Lateral sine offset makes the swarm drift organically instead of beelining.
      const wobble = Math.sin(this.elapsed * enemy.wobbleFrequency + enemy.wobblePhase) * enemy.wobbleAmplitude;
      let moveX = dirX - dirZ * wobble;
      let moveZ = dirZ + dirX * wobble;
      const moveLength = Math.hypot(moveX, moveZ) || 1;
      moveX = (moveX / moveLength) * enemy.speed;
      moveZ = (moveZ / moveLength) * enemy.speed;

      // Local separation (spatial hash keeps this near-constant cost).
      const near = this.hash.collect(enemy.position.x, enemy.position.z, cfg.separationRadius, this.neighbours);
      for (let n = 0; n < near.length; n++) {
        const other = near[n];
        if (other === enemy) continue;
        const offsetX = enemy.position.x - other.position.x;
        const offsetZ = enemy.position.z - other.position.z;
        const separationSquared = offsetX * offsetX + offsetZ * offsetZ;
        const radius = cfg.separationRadius;
        if (separationSquared >= radius * radius || separationSquared < 1e-6) continue;
        const separation = Math.sqrt(separationSquared);
        const push = (1 - separation / radius) * cfg.separationStrength;
        moveX += (offsetX / separation) * push;
        moveZ += (offsetZ / separation) * push;
      }

      enemy.velocity.set(moveX, 0, moveZ);
      enemy.position.x += moveX * dt;
      enemy.position.z += moveZ * dt;
      enemy.position.y = cfg.bodyY;

      this.writeInstance(enemy, moveX, moveZ, 1, 0);
    }

    this.updateDying(dt);

    this.mesh.instanceMatrix.needsUpdate = true;
  }

  /** Runs death flashes to completion, then recycles the instance slot and object. */
  private updateDying(dt: number): void {
    for (let i = this.dying.length - 1; i >= 0; i--) {
      const enemy = this.dying[i];
      enemy.flash -= dt;
      const progress = clamp(enemy.flash / DEATH_FLASH_SECONDS, 0, 1);

      // White and full size at the moment of death, shrinking away as it fades.
      this.writeInstance(enemy, enemy.velocity.x, enemy.velocity.z, progress, progress);

      if (enemy.flash <= 0) {
        this.dummy.position.copy(enemy.position);
        this.dummy.scale.setScalar(0);
        this.dummy.updateMatrix();
        this.mesh.setMatrixAt(enemy.slot, this.dummy.matrix);

        const last = this.dying.pop();
        if (last !== undefined && last !== enemy) this.dying[i] = last;

        this.freeSlots.push(enemy.slot);
        enemy.slot = -1;
        enemy.flash = 0;
        this.pool.release(enemy);
      }
    }
    if (this.dying.length > 0 && this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate = true;
    }
  }

  private writeInstance(enemy: Enemy, velocityX: number, velocityZ: number, scale: number, whiten: number): void {
    this.dummy.position.copy(enemy.position);
    this.dummy.rotation.set(0, Math.atan2(velocityX, velocityZ), 0);
    this.dummy.scale.setScalar(scale);
    this.dummy.updateMatrix();
    this.mesh.setMatrixAt(enemy.slot, this.dummy.matrix);

    this.scratchColor.copy(this.baseColor).lerp(this.flashColor, whiten);
    this.mesh.setColorAt(enemy.slot, this.scratchColor);
  }

  /** Clears the arena without touching rendering state. */
  reset(): void {
    const recycle = (enemy: Enemy): void => {
      enemy.active = false;
      enemy.flash = 0;
      enemy.slot = -1;
      this.pool.release(enemy);
    };
    for (let i = 0; i < this.active.length; i++) recycle(this.active[i]);
    for (let i = 0; i < this.dying.length; i++) recycle(this.dying[i]);
    this.active.length = 0;
    this.dying.length = 0;

    this.freeSlots.length = 0;
    for (let slot = GAME_CONFIG.enemies.capacity - 1; slot >= 0; slot--) {
      this.freeSlots.push(slot);
      this.dummy.position.set(0, 0, 0);
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.scale.setScalar(0);
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(slot, this.dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.elapsed = 0;
  }

  addTo(scene: Scene): void {
    scene.add(this.mesh);
  }

  dispose(scene: Scene): void {
    scene.remove(this.mesh);
    const geometry = this.mesh.geometry as BufferGeometry;
    geometry.dispose();
    this.material.dispose();
    this.pool.dispose();
    this.active.length = 0;
    this.dying.length = 0;
    this.freeSlots.length = 0;
    this.neighbours.length = 0;
  }
}
