import {
  BufferGeometry,
  CylinderGeometry,
  Float32BufferAttribute,
  Fog,
  GridHelper,
  Group,
  IcosahedronGeometry,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Scene,
  TorusGeometry,
} from 'three';
import { GAME_CONFIG } from '../config/GameConfig';
import { TAU } from '../utils/MathUtils';

/** How far the floor extends beyond the playable rim, in world units. */
const FLOOR_OVERHANG = 32;

/**
 * Builds the arena: floor, neon grid, glowing rim, decorative pylons and a star field.
 *
 * All geometry/materials are created once and disposed together - nothing here is
 * allocated during gameplay.
 */
export class Arena {
  private readonly group = new Group();
  private readonly geometries: BufferGeometry[] = [];
  private readonly materials: Material[] = [];

  constructor() {
    const { arena } = GAME_CONFIG;
    // The floor deliberately extends well past the playable rim so a player pushed to the
    // edge still sees ground and grid instead of a black void.
    const floorSize = (arena.radius + FLOOR_OVERHANG) * 2;

    const ground = new Mesh(
      trackGeometry(this.geometries, new PlaneGeometry(floorSize, floorSize)),
      trackMaterial(
        this.materials,
        new MeshStandardMaterial({ color: arena.groundColor, roughness: 0.95, metalness: 0.05 }),
      ),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.group.add(ground);

    // Futuristic floor grid, drawn slightly above the floor to avoid z-fighting.
    const grid = new GridHelper(floorSize, arena.gridDivisions, arena.gridColor, arena.gridColor);
    const gridMaterial = grid.material;
    gridMaterial.transparent = true;
    gridMaterial.opacity = 0.4;
    grid.position.y = 0.03;
    this.geometries.push(grid.geometry);
    this.materials.push(gridMaterial);
    this.group.add(grid);

    // Neon rim marks the arena boundary.
    const rim = new Mesh(
      trackGeometry(this.geometries, new TorusGeometry(arena.radius, 0.3, 8, 180)),
      trackMaterial(this.materials, new MeshBasicMaterial({ color: arena.rimColor })),
    );
    rim.rotation.x = -Math.PI / 2;
    rim.position.y = 0.16;
    this.group.add(rim);

    // Fainter inner ring for depth.
    const innerRim = new Mesh(
      trackGeometry(this.geometries, new TorusGeometry(arena.radius * 0.55, 0.12, 6, 140)),
      trackMaterial(this.materials, new MeshBasicMaterial({ color: arena.rimColor, transparent: true, opacity: 0.35 })),
    );
    innerRim.rotation.x = -Math.PI / 2;
    innerRim.position.y = 0.05;
    this.group.add(innerRim);

    this.buildPylons();
    this.group.add(this.buildStars());
  }

  /** Corner pylons give the arena silhouette and reference points without cluttering play. */
  private buildPylons(): void {
    const { arena } = GAME_CONFIG;
    const bodyGeometry = trackGeometry(this.geometries, new CylinderGeometry(0.32, 0.5, 4.4, 8));
    const capGeometry = trackGeometry(this.geometries, new IcosahedronGeometry(0.42, 0));
    const bodyMaterial = trackMaterial(
      this.materials,
      new MeshStandardMaterial({ color: arena.pylonColor, roughness: 0.6 }),
    );
    const capMaterial = trackMaterial(this.materials, new MeshBasicMaterial({ color: arena.pylonGlowColor }));

    for (let i = 0; i < arena.pylonCount; i++) {
      const angle = (i / arena.pylonCount) * TAU;
      const radius = arena.radius * 0.96;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const body = new Mesh(bodyGeometry, bodyMaterial);
      body.position.set(x, 2.2, z);
      body.castShadow = true;
      this.group.add(body);

      const cap = new Mesh(capGeometry, capMaterial);
      cap.position.set(x, 4.7, z);
      this.group.add(cap);
    }
  }

  /** Sparse static star field, excluded from fog so it reads as distant sky. */
  private buildStars(): Points {
    const { arena } = GAME_CONFIG;
    const positions = new Float32Array(arena.starCount * 3);
    for (let i = 0; i < arena.starCount; i++) {
      const angle = Math.random() * TAU;
      const radius = arena.radius + 30 + Math.random() * 90;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = 18 + Math.random() * 55;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    const geometry = trackGeometry(this.geometries, new BufferGeometry());
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));

    const material = trackMaterial(
      this.materials,
      new PointsMaterial({
        color: 0x9fd8ff,
        size: 0.6,
        sizeAttenuation: true,
        fog: false,
        transparent: true,
        opacity: 0.75,
      }),
    );

    const points = new Points(geometry, material);
    points.frustumCulled = false;
    return points;
  }

  /** Applies the arena atmosphere to the scene. */
  applyAtmosphere(scene: Scene): void {
    const { arena } = GAME_CONFIG;
    scene.fog = new Fog(arena.fogColor, arena.fogNear, arena.fogFar);
  }

  addTo(scene: Scene): void {
    scene.add(this.group);
  }

  dispose(scene: Scene): void {
    scene.remove(this.group);
    scene.fog = null;
    for (const geometry of this.geometries) geometry.dispose();
    for (const material of this.materials) material.dispose();
    this.geometries.length = 0;
    this.materials.length = 0;
  }
}

function trackGeometry<T extends BufferGeometry>(list: BufferGeometry[], geometry: T): T {
  list.push(geometry);
  return geometry;
}

function trackMaterial<T extends Material>(list: Material[], material: T): T {
  list.push(material);
  return material;
}
