import type { Vector3 } from 'three';
import { Enemy } from '../enemies/Enemy';

/**
 * Distance-based collision queries.
 *
 * Collision is deliberately simple (sphere tests) for responsiveness rather than physical
 * accuracy. Volume counts are small enough that a linear scan is faster than maintaining a
 * broadphase structure: projectiles are few and the enemy list is bounded by the pool cap.
 */
export class CollisionSystem {
  private readonly hits: Enemy[] = [];

  /**
   * First enemy overlapping the player on the XZ plane, or `null`.
   * Height is ignored here: both capsules stand on the same floor.
   */
  findPlayerCollision(
    playerPosition: Vector3,
    playerRadius: number,
    enemies: readonly Enemy[],
  ): Enemy | null {
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      const dx = enemy.position.x - playerPosition.x;
      const dz = enemy.position.z - playerPosition.z;
      const radius = playerRadius + enemy.radius;
      if (dx * dx + dz * dz <= radius * radius) return enemy;
    }
    return null;
  }

  /**
   * Every enemy within `radius` of `point` on the XZ plane - used for projectile impacts.
   *
   * Height is deliberately ignored: words fly about a unit above the floor while enemies
   * stand on it, and a vertical component would silently shrink the hit test. Everything
   * in the fight shares one floor, so the planar distance is the honest one.
   *
   * The returned array is reused between calls; consume it before the next query.
   */
  collectAt(point: Vector3, radius: number, enemies: readonly Enemy[]): readonly Enemy[] {
    this.hits.length = 0;
    const radiusSquared = radius * radius;
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      const dx = enemy.position.x - point.x;
      const dz = enemy.position.z - point.z;
      if (dx * dx + dz * dz <= radiusSquared) this.hits.push(enemy);
    }
    return this.hits;
  }
}
