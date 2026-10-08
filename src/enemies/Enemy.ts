import { Vector3 } from 'three';
import { GAME_CONFIG } from '../config/GameConfig';

/**
 * A single enemy's gameplay state. Visuals are drawn through the shared InstancedMesh
 * in EnemyManager, keyed by `slot` - enemies own no geometry or material of their own.
 */
export interface Enemy {
  active: boolean;
  position: Vector3;
  velocity: Vector3;
  /** Current movement speed (base speed * stage multiplier * per-enemy variance). */
  speed: number;
  radius: number;
  /** Random phase so a horde never wobbles in unison. */
  wobblePhase: number;
  wobbleFrequency: number;
  wobbleAmplitude: number;
  /** Seconds left of the white death flash; always 0 while the enemy is alive. */
  flash: number;
  /** Index into the InstancedMesh matrix/colour buffers. */
  slot: number;
}

/** Creates a pooled enemy with fresh vectors. */
export function createEnemy(): Enemy {
  return {
    active: false,
    position: new Vector3(),
    velocity: new Vector3(),
    speed: 0,
    radius: GAME_CONFIG.enemies.radius,
    wobblePhase: 0,
    wobbleFrequency: 0,
    wobbleAmplitude: 0,
    flash: 0,
    slot: -1,
  };
}
