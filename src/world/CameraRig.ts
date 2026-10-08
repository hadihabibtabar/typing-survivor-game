import { PerspectiveCamera, Quaternion, Vector3 } from 'three';
import { GAME_CONFIG } from '../config/GameConfig';
import { damp } from '../utils/MathUtils';

/**
 * Elevated third-person camera.
 *
 * The camera never rotates around the player: it keeps a fixed offset and orientation,
 * only translating to follow. This keeps the arena readable at all times. A decaying
 * random offset provides screen shake for impacts.
 */
export class CameraRig {
  readonly camera: PerspectiveCamera;

  /** Smoothed follow target (player XZ). */
  private readonly focus = new Vector3();
  private readonly desired = new Vector3();
  private readonly lookTarget = new Vector3();
  private shake = 0;

  constructor() {
    const { camera } = GAME_CONFIG;
    this.camera = new PerspectiveCamera(camera.fov, 1, camera.near, camera.far);
    this.camera.position.set(0, camera.height, camera.distance);
    this.camera.lookAt(0, camera.lookAtHeight, 0);
  }

  /** Adds screen shake, clamped so stacked hits cannot nauseate the player. */
  addShake(amount: number): void {
    const { camera } = GAME_CONFIG;
    this.shake = Math.min(this.shake + amount, camera.maxShake);
  }

  /** Snaps the follow target (used when starting a run so the camera does not sweep in). */
  snapTo(target: Vector3): void {
    this.focus.set(target.x, 0, target.z);
    this.shake = 0;
    this.applyTransform();
  }

  update(dt: number, target: Vector3): void {
    const { camera } = GAME_CONFIG;
    this.focus.x = damp(this.focus.x, target.x, camera.followRate, dt);
    this.focus.z = damp(this.focus.z, target.z, camera.followRate, dt);
    this.shake *= Math.exp(-camera.shakeDecay * dt);
    if (this.shake < 0.001) this.shake = 0;
    this.applyTransform();
  }

  private applyTransform(): void {
    const { camera } = GAME_CONFIG;
    this.desired.set(this.focus.x, camera.height, this.focus.z + camera.distance);
    this.camera.position.copy(this.desired);

    if (this.shake > 0) {
      const magnitude = this.shake;
      this.camera.position.x += (Math.random() - 0.5) * magnitude;
      this.camera.position.y += (Math.random() - 0.5) * magnitude * 0.6;
      this.camera.position.z += (Math.random() - 0.5) * magnitude;
    }

    this.lookTarget.set(this.focus.x, camera.lookAtHeight, this.focus.z);
    this.camera.lookAt(this.lookTarget);
  }

  setAspect(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  /** Inverse world rotation, used to project world velocities into screen space. */
  getInverseOrientation(out: Quaternion): Quaternion {
    return out.copy(this.camera.quaternion).invert();
  }
}
