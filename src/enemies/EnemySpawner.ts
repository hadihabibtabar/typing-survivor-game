import { Vector3 } from 'three';
import {
  ARENA_RADIUS,
  ENEMY_MAX_SPAWN_PER_INTERVAL,
  ENEMY_MIN_COUNT,
  GAME_CONFIG,
  MAX_ACTIVE_ENEMIES,
  MIN_ENEMY_SPAWN_DISTANCE,
  getStage,
} from '../config/GameConfig';
import { TAU, gaussianRandom, randRange } from '../utils/MathUtils';
import { EnemyManager } from './EnemyManager';

/** Candidate positions tried before a single enemy is skipped for this wave. */
const MAX_SPAWN_ATTEMPTS = 12;
/** Upper bound on `seed()` waves, in case the edge is somehow saturated at run start. */
const MAX_SEED_WAVES = 12;

/**
 * Spawns enemies in clusters around the arena edge under a controlled difficulty curve.
 *
 *  - Waves fire on the stage's interval and are clamped three ways: the stage's alive
 *    cap, `MAX_ACTIVE_ENEMIES` (the absolute hard cap - enemy count never grows without
 *    an upper limit) and `ENEMY_MAX_SPAWN_PER_INTERVAL` per wave.
 *  - The population never drops below `ENEMY_MIN_COUNT`: a wave is emitted immediately
 *    when a burst of kills leaves the arena too quiet.
 *  - Every candidate position is validated before it is used: never closer than
 *    `MIN_ENEMY_SPAWN_DISTANCE` (~30 cm) to the player, never on top of another enemy,
 *    and never outside the arena floor. Invalid candidates are retried with a fresh
 *    sample, up to `MAX_SPAWN_ATTEMPTS` per enemy.
 *
 * Waves are grouped around a random anchor angle so pressure arrives from a direction
 * (rather than a uniform ring), which is what the density steering and threat targeting
 * systems react to.
 */
export class EnemySpawner {
  private timer = 0;

  reset(): void {
    this.timer = 0;
  }

  /** Fires on the stage's interval; a wave is emitted as soon as the timer fills. */
  update(dt: number, elapsedSeconds: number, enemies: EnemyManager, playerPosition: Vector3): void {
    const stage = getStage(elapsedSeconds);
    this.timer += dt;

    const belowFloor = enemies.activeCount < ENEMY_MIN_COUNT;
    if (!belowFloor && this.timer < stage.spawnInterval) return;

    this.timer = 0;
    this.spawnWave(elapsedSeconds, enemies, playerPosition);
  }

  /** Tops the arena up to `ENEMY_MIN_COUNT` when a run starts. */
  seed(enemies: EnemyManager, playerPosition: Vector3): void {
    let waves = 0;
    while (enemies.activeCount < ENEMY_MIN_COUNT && waves < MAX_SEED_WAVES) {
      this.spawnWave(0, enemies, playerPosition);
      waves++;
    }
  }

  /** Emits one wave immediately (also used to seed the arena when a run starts). */
  spawnWave(elapsedSeconds: number, enemies: EnemyManager, playerPosition: Vector3): void {
    const { enemies: cfg } = GAME_CONFIG;
    const stage = getStage(elapsedSeconds);

    // Three independent caps: stage curve, absolute active cap, physical instance pool.
    const cap = Math.min(stage.maxAlive, MAX_ACTIVE_ENEMIES, cfg.capacity);
    const budget = cap - enemies.activeCount;
    if (budget <= 0) return;

    // Later stages attack from two sides at once.
    const clusters = elapsedSeconds >= 60 ? 2 : 1;
    const baseAngle = Math.random() * TAU;
    const wanted = Math.round(stage.waveSize * randRange(0.8, 1.3));
    let remaining = Math.min(wanted, ENEMY_MAX_SPAWN_PER_INTERVAL, budget);
    let spawned = 0;

    for (let cluster = 0; cluster < clusters && remaining > 0; cluster++) {
      const anchor = baseAngle + (cluster / clusters) * TAU + randRange(-0.5, 0.5);
      const count = Math.max(1, Math.ceil(remaining / (clusters - cluster)));
      remaining -= count;

      for (let i = 0; i < count; i++) {
        if (spawned >= budget) return;

        const speed =
          cfg.baseSpeed * stage.speedMultiplier * randRange(1 - cfg.speedVariance, 1 + cfg.speedVariance);
        if (this.trySpawn(enemies, playerPosition, anchor, speed)) spawned++;
      }
    }
  }

  /**
   * Samples candidate positions around `anchor` until one passes every spawn rule:
   * inside the arena, away from the player, clear of other enemies. Returns false when
   * all attempts fail (the wave simply loses that enemy - never spawns it illegally).
   */
  private trySpawn(
    enemies: EnemyManager,
    playerPosition: Vector3,
    anchor: number,
    speed: number,
  ): boolean {
    const { enemies: cfg } = GAME_CONFIG;

    for (let attempt = 0; attempt < MAX_SPAWN_ATTEMPTS; attempt++) {
      const angle = anchor + gaussianRandom() * cfg.spawnClusterSpread;
      const radius = cfg.spawnRadius + randRange(-cfg.spawnRadiusJitter, cfg.spawnRadiusJitter);
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Rule 1: never outside the arena floor.
      if (Math.hypot(x, z) > ARENA_RADIUS - cfg.spawnArenaMargin) continue;

      // Rule 2: never within ~30 cm of the player (or their collision radius plus margin).
      const playerDistance = Math.hypot(x - playerPosition.x, z - playerPosition.z);
      if (playerDistance < MIN_ENEMY_SPAWN_DISTANCE + GAME_CONFIG.player.radius) continue;

      // Rule 3: never inside another enemy.
      if (this.overlapsEnemy(enemies, x, z)) continue;

      if (enemies.spawn(x, z, speed) !== null) return true;
      return false; // pool exhausted: retrying positions cannot help
    }
    return false;
  }

  /** True when a live enemy already occupies this floor position. */
  private overlapsEnemy(enemies: EnemyManager, x: number, z: number): boolean {
    const { enemies: cfg } = GAME_CONFIG;
    const live = enemies.activeEnemies;
    const minSquared = cfg.spawnMinSeparation * cfg.spawnMinSeparation;
    for (let i = 0; i < live.length; i++) {
      const dx = live[i].position.x - x;
      const dz = live[i].position.z - z;
      if (dx * dx + dz * dz < minSquared) return true;
    }
    return false;
  }
}
