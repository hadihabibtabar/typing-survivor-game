import {
  BoxGeometry,
  Color,
  DoubleSide,
  DynamicDrawUsage,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  RingGeometry,
  Scene,
  Vector3,
} from 'three';
import { GAME_CONFIG } from '../config/GameConfig';
import { ObjectPool } from '../utils/ObjectPool';
import { TAU, clamp } from '../utils/MathUtils';

interface Particle {
  readonly position: Vector3;
  readonly velocity: Vector3;
  readonly color: Color;
  life: number;
  maxLife: number;
  size: number;
  spin: number;
}

interface Shockwave {
  readonly mesh: Mesh;
  readonly material: MeshBasicMaterial;
  life: number;
}

const PARTICLE_GRAVITY = 14;
const PARTICLE_DRAG = 3;
const SHOCKWAVE_START_SCALE = 0.5;
const SHOCKWAVE_END_SCALE = 4.5;

/**
 * Lightweight hit feedback: pooled particle bursts and expanding ring shockwaves.
 *
 * Particles share one instanced mesh (transforms and colours are rewritten from the live
 * array each frame, so slot order always matches array order). Shockwave rings are created
 * once up-front and recycled by a round-robin cursor. Nothing is allocated during play.
 */
export class EffectsManager {
  private readonly particles: InstancedMesh;
  private readonly particleGeometry: BoxGeometry;
  private readonly particleMaterial: MeshBasicMaterial;
  private readonly pool: ObjectPool<Particle>;
  private readonly active: Particle[] = [];

  private readonly shockwaveGeometry: RingGeometry;
  private readonly shockwaves: Shockwave[] = [];
  private readonly activeShockwaves: Shockwave[] = [];
  private nextShockwave = 0;

  private readonly dummy = new Object3D();
  /** Highest instance slot written last frame - lets stale slots be cleared. */
  private lastWritten = 0;

  constructor() {
    const { effects: cfg } = GAME_CONFIG;

    this.particleGeometry = new BoxGeometry(0.16, 0.16, 0.16);
    this.particleMaterial = new MeshBasicMaterial({ toneMapped: false });
    this.particles = new InstancedMesh(this.particleGeometry, this.particleMaterial, cfg.particleCapacity);
    this.particles.instanceMatrix.setUsage(DynamicDrawUsage);
    this.particles.frustumCulled = false;

    // Allocate the colour buffer and hide every slot.
    const white = new Color(0xffffff);
    this.dummy.scale.setScalar(0);
    this.dummy.updateMatrix();
    for (let slot = 0; slot < cfg.particleCapacity; slot++) {
      this.particles.setMatrixAt(slot, this.dummy.matrix);
      this.particles.setColorAt(slot, white);
    }
    this.particles.instanceMatrix.needsUpdate = true;
    if (this.particles.instanceColor) this.particles.instanceColor.needsUpdate = true;

    this.pool = new ObjectPool<Particle>(
      () => ({
        position: new Vector3(),
        velocity: new Vector3(),
        color: new Color(),
        life: 0,
        maxLife: 1,
        size: 1,
        spin: 0,
      }),
      cfg.particleCapacity,
    );

    this.shockwaveGeometry = new RingGeometry(0.7, 1, 48);
    for (let i = 0; i < cfg.shockwaveCapacity; i++) {
      const material = new MeshBasicMaterial({
        transparent: true,
        depthWrite: false,
        side: DoubleSide,
        toneMapped: false,
      });
      const mesh = new Mesh(this.shockwaveGeometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      this.shockwaves.push({ mesh, material, life: 0 });
    }
  }

  /** Spawns `count` particles radiating from `position` in `color`. */
  burst(position: Vector3, color: number, count: number, speed: number): void {
    const { effects: cfg } = GAME_CONFIG;

    for (let i = 0; i < count; i++) {
      const particle = this.pool.acquire();
      if (particle === undefined) return;

      if (this.active.length >= cfg.particleCapacity) {
        this.pool.release(particle);
        return;
      }

      particle.position.copy(position);
      particle.color.set(color);

      // Random direction biased upward so bursts read as an explosion, not a flat ring.
      let directionX = Math.random() - 0.5;
      let directionY = Math.random() * 0.9 + 0.15;
      let directionZ = Math.random() - 0.5;
      const length = Math.hypot(directionX, directionY, directionZ) || 1;
      const velocity = speed * (0.4 + Math.random() * 0.9);
      directionX = (directionX / length) * velocity;
      directionY = (directionY / length) * velocity;
      directionZ = (directionZ / length) * velocity;
      particle.velocity.set(directionX, directionY, directionZ);

      particle.maxLife = cfg.particleLifetime * (0.7 + Math.random() * 0.6);
      particle.life = particle.maxLife;
      particle.size = 0.6 + Math.random() * 1.1;
      particle.spin = Math.random() * TAU;
      this.active.push(particle);
    }
  }

  /** Expanding ring at `position` in `color`. Reuses the oldest free ring. */
  shockwave(position: Vector3, color: number): void {
    const { effects: cfg } = GAME_CONFIG;
    const wave = this.shockwaves[this.nextShockwave];
    this.nextShockwave = (this.nextShockwave + 1) % this.shockwaves.length;

    wave.life = cfg.shockwaveLifetime;
    wave.mesh.position.set(position.x, 0.12, position.z);
    wave.mesh.scale.setScalar(SHOCKWAVE_START_SCALE);
    wave.material.color.set(color);
    wave.material.opacity = 0.9;
    wave.mesh.visible = true;
    if (!this.activeShockwaves.includes(wave)) this.activeShockwaves.push(wave);
  }

  update(dt: number): void {
    this.updateParticles(dt);
    this.updateShockwaves(dt);
  }

  private updateParticles(dt: number): void {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const particle = this.active[i];
      particle.life -= dt;

      if (particle.life <= 0) {
        const last = this.active.pop();
        if (last !== undefined && last !== particle) this.active[i] = last;
        continue;
      }

      particle.velocity.y -= PARTICLE_GRAVITY * dt;
      const damping = Math.exp(-PARTICLE_DRAG * dt);
      particle.velocity.multiplyScalar(damping);
      particle.position.addScaledVector(particle.velocity, dt);

      if (particle.position.y < 0.08) {
        particle.position.y = 0.08;
        particle.velocity.y = Math.abs(particle.velocity.y) * 0.35;
      }
    }

    // Instance slot order mirrors array order: rewrite transforms and colours together.
    for (let slot = 0; slot < this.active.length; slot++) {
      const particle = this.active[slot];
      const ratio = clamp(particle.life / particle.maxLife, 0, 1);
      this.dummy.position.copy(particle.position);
      this.dummy.rotation.set(particle.spin + ratio * 4, particle.spin + ratio * 3, 0);
      this.dummy.scale.setScalar(particle.size * ratio);
      this.dummy.updateMatrix();
      this.particles.setMatrixAt(slot, this.dummy.matrix);
      this.particles.setColorAt(slot, particle.color);
    }

    // Clear the tail of the buffer that is no longer in use.
    this.dummy.scale.setScalar(0);
    this.dummy.updateMatrix();
    for (let slot = this.active.length; slot < this.lastWritten; slot++) {
      this.particles.setMatrixAt(slot, this.dummy.matrix);
    }

    if (this.active.length > 0 || this.lastWritten !== this.active.length) {
      this.particles.instanceMatrix.needsUpdate = true;
      if (this.particles.instanceColor) this.particles.instanceColor.needsUpdate = true;
    }
    this.lastWritten = this.active.length;
  }

  private updateShockwaves(dt: number): void {
    const { effects: cfg } = GAME_CONFIG;
    for (let i = this.activeShockwaves.length - 1; i >= 0; i--) {
      const wave = this.activeShockwaves[i];
      wave.life -= dt;
      const progress = 1 - clamp(wave.life / cfg.shockwaveLifetime, 0, 1);

      wave.mesh.scale.setScalar(SHOCKWAVE_START_SCALE + (SHOCKWAVE_END_SCALE - SHOCKWAVE_START_SCALE) * progress);
      wave.material.opacity = (1 - progress) * 0.9;

      if (wave.life <= 0) {
        wave.mesh.visible = false;
        const last = this.activeShockwaves.pop();
        if (last !== undefined && last !== wave) this.activeShockwaves[i] = last;
      }
    }
  }

  /** Clears all live effects (new run). */
  reset(): void {
    for (const particle of this.active) this.pool.release(particle);
    this.active.length = 0;

    for (const wave of this.activeShockwaves) wave.mesh.visible = false;
    this.activeShockwaves.length = 0;

    this.dummy.scale.setScalar(0);
    this.dummy.updateMatrix();
    for (let slot = 0; slot < this.lastWritten; slot++) this.particles.setMatrixAt(slot, this.dummy.matrix);
    if (this.lastWritten > 0) this.particles.instanceMatrix.needsUpdate = true;
    this.lastWritten = 0;
  }

  addTo(scene: Scene): void {
    scene.add(this.particles);
    for (const wave of this.shockwaves) scene.add(wave.mesh);
  }

  dispose(scene: Scene): void {
    scene.remove(this.particles);
    for (const wave of this.shockwaves) {
      scene.remove(wave.mesh);
      wave.material.dispose();
    }
    this.particleGeometry.dispose();
    this.particleMaterial.dispose();
    this.shockwaveGeometry.dispose();
    this.pool.dispose();
    this.active.length = 0;
    this.activeShockwaves.length = 0;
    this.shockwaves.length = 0;
  }
}
