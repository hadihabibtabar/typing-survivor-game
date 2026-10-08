import {
  BufferGeometry,
  CapsuleGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  RingGeometry,
  Scene,
  SphereGeometry,
  Vector3,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ARENA_RADIUS, GAME_CONFIG } from '../config/GameConfig';
import { clamp, damp, lerp } from '../utils/MathUtils';

/** Keep-away margin so the player cannot touch the arena rim. */
const EDGE_MARGIN = 4;

/**
 * The blue player capsule.
 *
 * The player is not keyboard-driven: `steer` is computed each frame from enemy density
 * (see combat/TargetingSystem) and the capsule accelerates smoothly toward it.
 */
export class Player {
  readonly group = new Group();
  readonly velocity = new Vector3();
  readonly radius: number = GAME_CONFIG.player.radius;

  private readonly body: Mesh;
  private readonly indicator: Mesh;
  private readonly indicatorMaterial: MeshBasicMaterial;
  /** Cosmetic character parts (hat + braid): geometries/materials to release on dispose. */
  private readonly characterParts: Array<{ dispose(): void }> = [];
  private facing = 0;
  private bobTime = 0;

  constructor() {
    const { player } = GAME_CONFIG;

    this.body = new Mesh(
      new CapsuleGeometry(player.capsuleRadius, player.capsuleLength, 6, 16),
      new MeshStandardMaterial({
        color: player.color,
        emissive: player.emissive,
        emissiveIntensity: 0.85,
        roughness: 0.35,
        metalness: 0.15,
      }),
    );
    this.body.position.y = player.bodyY;
    this.body.castShadow = true;
    this.group.add(this.body);

    // Ground ring keeps the player trivially findable against the swarm.
    this.indicatorMaterial = new MeshBasicMaterial({
      color: player.indicatorColor,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    this.indicator = new Mesh(new RingGeometry(player.radius * 0.95, player.radius * 1.25, 40), this.indicatorMaterial);
    this.indicator.rotation.x = -Math.PI / 2;
    this.indicator.position.y = 0.05;
    this.group.add(this.indicator);

    // Cosmetic character: hat + braided mustache are children of the body mesh, so
    // they inherit facing, bob and reset automatically and never touch collision
    // (gameplay only ever queries `player.radius`).
    this.buildHat();
    this.buildMustache();
  }

  /**
   * Classic top hat: wide brim, tapered crown, glowing arena-cyan band, jaunty tilt.
   * Attached at the brim plane so the tilt pivots where the hat meets the capsule.
   */
private buildHat(): void {
  const hatMaterial = new MeshStandardMaterial({
    color: 0x111217,
    roughness: 0.72,
    metalness: 0.08,
  });

  const edgeMaterial = new MeshStandardMaterial({
    color: 0x050609,
    roughness: 0.82,
    metalness: 0.03,
  });

  const bandMaterial = new MeshStandardMaterial({
    color: 0x37e0ff,
    emissive: 0x37e0ff,
    emissiveIntensity: 0.55,
    roughness: 0.35,
    metalness: 0.15,
  });

  // Wide, slightly irregular cowboy-style brim.
  const brim = new Mesh(
    new CylinderGeometry(
      0.58,  // top radius
      0.66,  // bottom radius
      0.075, // thickness
      32,
    ),
    edgeMaterial,
  );

  // Shorter and wider crown -> less formal, more "gangster/cowboy".
  const crown = new Mesh(
    new CylinderGeometry(
      0.34,
      0.42,
      0.42,
      32,
    ),
    hatMaterial,
  );

  crown.position.y = 0.23;

  // Bright band around the hat.
  const band = new Mesh(
    new CylinderGeometry(
      0.405,
      0.425,
      0.10,
      32,
    ),
    bandMaterial,
  );

  band.position.y = 0.08;

  /*
   * Small decorative badge on the front.
   * Since +Z is the character's facing direction,
   * move it slightly toward +Z.
   */
  const badge = new Mesh(
    new CylinderGeometry(
      0.075,
      0.075,
      0.025,
      20,
    ),
    bandMaterial,
  );

  badge.rotation.x = Math.PI / 2;
  badge.position.set(0, 0.22, 0.405);

  /*
   * Put everything inside one group so the whole hat tilts together.
   */
  const hat = new Group();
  hat.name = 'hat';

  // Slightly higher than the old hat.
  hat.position.y = 0.86;

  // Stronger gangster/cowboy tilt.
  hat.rotation.z = 0.13;
  hat.rotation.x = -0.08;

  hat.add(brim);
  hat.add(crown);
  hat.add(band);
  hat.add(badge);

  for (const mesh of [brim, crown, band, badge]) {
    mesh.castShadow = true;
  }

  this.body.add(hat);

  this.characterParts.push(
    brim.geometry,
    crown.geometry,
    band.geometry,
    badge.geometry,
    hatMaterial,
    edgeMaterial,
    bandMaterial,
  );
}

  /**
   * Long black braided mustache hanging from both sides of the face (local +Z is the
   * movement-facing front).
   *
   * Each strand is a quadratic-bezier chain of overlapping ellipsoid "links" that
   * alternate twist and zig-zag offset - the two alternating cues are what make it
   * read as a braid/rope rather than two straight cylinders. Segments taper toward a
   * cone tip and the strand flares past the capsule silhouette, so it stays visible
   * from the elevated camera. All links are merged into ONE geometry: one draw call.
   */
  private buildMustache(): void {
  const geometries: BufferGeometry[] = [];

  /*
   * Full, connected, heavy curled mustache.
   *
   * Instead of separate "braid links", each side is built from overlapping
   * thick capsules/spheres along a smooth hanging curve. The overlap makes
   * the whole mustache read as one continuous, dense shape.
   */

  for (const side of [-1, 1]) {
    const segments = 11;

    for (let i = 0; i < segments; i++) {
      const t = i / (segments - 1);

      // Start near the center of the face.
      // Move outward, then strongly downward so the mustache hangs.
      const x = 0.08 + t * 0.46;

      const y =
        0.08
        - Math.sin(t * Math.PI * 0.85) * 0.16
        - t * 0.52;

      const z =
        0.43
        + Math.sin(t * Math.PI) * 0.07;

      // Thick near the face and still deliberately chunky at the hanging tip.
      const radius = lerp(0.15, 0.095, t);

      const geometry = new SphereGeometry(1, 14, 10);

      geometry.scale(
        radius * 1.35,
        radius * 0.95,
        radius * 0.85,
      );

      geometry.translate(
        side * x,
        y,
        z,
      );

      geometries.push(geometry);
    }

    /*
     * Extra lower section makes the end look heavy and hanging instead of
     * becoming a thin pointed braid.
     */
    for (let i = 0; i < 4; i++) {
      const t = i / 3;

      const x = 0.50 + t * 0.035;
      const y = -0.52 - t * 0.16;
      const z = 0.46;

      const radius = lerp(0.105, 0.075, t);

      const geometry = new SphereGeometry(1, 14, 10);

      geometry.scale(
        radius * 1.25,
        radius * 1.15,
        radius * 0.9,
      );

      geometry.translate(
        side * x,
        y,
        z,
      );

      geometries.push(geometry);
    }
  }

  const merged = mergeGeometries(geometries, false);

  for (const geometry of geometries) {
    geometry.dispose();
  }

  if (merged === null) return;

  const mustacheMaterial = new MeshStandardMaterial({
    color: 0x08080b,
    roughness: 0.72,
    metalness: 0.02,
  });

  const mustache = new Mesh(
    merged,
    mustacheMaterial,
  );

  mustache.name = 'mustache';
  mustache.castShadow = true;

  this.body.add(mustache);

  this.characterParts.push(
    mustache.geometry,
    mustacheMaterial,
  );
}

  get position(): Vector3 {
    return this.group.position;
  }

  /** Resets the player to the arena centre with no momentum. */
  reset(): void {
    this.group.position.set(0, 0, 0);
    this.velocity.set(0, 0, 0);
    this.facing = 0;
    this.bobTime = 0;
    this.body.rotation.y = 0;
    this.body.position.y = GAME_CONFIG.player.bodyY;
  }

  /**
   * Applies steering.
   *
   * `steer` is a normalised direction (or zero when surrounded). Velocity eases toward
   * `steer * maxSpeed`, which gives smooth, non-teleporting motion and a natural stop
   * when no safe direction exists.
   */
  update(dt: number, steer: Vector3): void {
    const { player } = GAME_CONFIG;

    this.velocity.x = damp(this.velocity.x, steer.x * player.maxSpeed, player.acceleration, dt);
    this.velocity.z = damp(this.velocity.z, steer.z * player.maxSpeed, player.acceleration, dt);

    this.group.position.x += this.velocity.x * dt;
    this.group.position.z += this.velocity.z * dt;

    // Arena containment: project back inside and cancel outward velocity.
    const limit = ARENA_RADIUS - EDGE_MARGIN;
    const x = this.group.position.x;
    const z = this.group.position.z;
    const distance = Math.hypot(x, z);
    if (distance > limit && distance > 0) {
      const nx = x / distance;
      const nz = z / distance;
      this.group.position.x = nx * limit;
      this.group.position.z = nz * limit;
      const outward = this.velocity.x * nx + this.velocity.z * nz;
      if (outward > 0) {
        this.velocity.x -= nx * outward;
        this.velocity.z -= nz * outward;
      }
    }

    // Face the movement direction, turning smoothly.
    const speed = Math.hypot(this.velocity.x, this.velocity.z);
    if (speed > 0.35) {
      const target = Math.atan2(this.velocity.x, this.velocity.z);
      let delta = target - this.facing;
      while (delta > Math.PI) delta -= Math.PI * 2;
      while (delta < -Math.PI) delta += Math.PI * 2;
      this.facing += clamp(delta, -player.turnRate * dt, player.turnRate * dt);
      this.body.rotation.y = this.facing;
    }

    // Subtle motion bob so movement reads even at a distance.
    this.bobTime += dt;
    const bob = Math.sin(this.bobTime * 9) * 0.04 * Math.min(speed / player.maxSpeed, 1);
    this.body.position.y = player.bodyY + bob;
    this.indicatorMaterial.opacity = clamp(0.45 + speed * 0.04, 0.45, 0.75);
  }

  addTo(scene: Scene): void {
    scene.add(this.group);
  }

  dispose(scene: Scene): void {
    scene.remove(this.group);
    this.body.geometry.dispose();
    disposeMaterial(this.body.material);
    this.indicator.geometry.dispose();
    this.indicatorMaterial.dispose();
    for (const part of this.characterParts) part.dispose();
    this.characterParts.length = 0;
  }
}

function disposeMaterial(material: Mesh['material']): void {
  if (Array.isArray(material)) {
    for (const item of material) item.dispose();
  } else {
    material.dispose();
  }
}
