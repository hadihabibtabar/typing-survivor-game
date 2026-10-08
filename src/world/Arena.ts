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
 * Cyberpunk / futuristic arena.
 *
 * Visual layers:
 * - Dark metallic floor
 * - Subtle neon grid
 * - Multiple energy rings
 * - Glowing arena boundary
 * - Radial floor accents
 * - Futuristic pylons
 * - Floating energy cores
 * - Sparse star field
 *
 * Everything is created once and disposed together.
 */
export class Arena {
  private readonly group = new Group();

  private readonly geometries: BufferGeometry[] = [];
  private readonly materials: Material[] = [];

  constructor() {
    const { arena } = GAME_CONFIG;

    const floorSize =
      (arena.radius + FLOOR_OVERHANG) * 2;

    this.buildFloor(floorSize);
    this.buildGrid(floorSize);
    this.buildArenaRings();
    this.buildRadialAccents();
    this.buildPylons();
    this.group.add(this.buildStars());
  }

  /**
   * Main dark metallic floor.
   */
  private buildFloor(floorSize: number): void {
    const { arena } = GAME_CONFIG;

    const ground = new Mesh(
      trackGeometry(
        this.geometries,
        new PlaneGeometry(
          floorSize,
          floorSize,
        ),
      ),
      trackMaterial(
        this.materials,
        new MeshStandardMaterial({
          color: arena.groundColor,
          roughness: 0.82,
          metalness: 0.28,
        }),
      ),
    );

    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;

    this.group.add(ground);

    /*
     * Very subtle inner floor plate.
     *
     * This creates a large circular visual area without affecting gameplay.
     */
    const plate = new Mesh(
      trackGeometry(
        this.geometries,
        new CylinderGeometry(
          arena.radius * 0.985,
          arena.radius * 0.985,
          0.08,
          96,
        ),
      ),
      trackMaterial(
        this.materials,
        new MeshStandardMaterial({
          color: 0x071019,
          roughness: 0.7,
          metalness: 0.42,
        }),
      ),
    );

    plate.position.y = 0.035;
    plate.receiveShadow = true;

    this.group.add(plate);
  }

  /**
   * Futuristic floor grid.
   *
   * The grid is intentionally subtle so it does not compete with
   * typing targets and enemies.
   */
  private buildGrid(floorSize: number): void {
    const { arena } = GAME_CONFIG;

    const grid = new Group();

    const gridHelper = new GridHelper
    (
      floorSize,
      arena.gridDivisions,
      0x16435c,
      0x0b2635,
    );

    const gridMaterial =
      gridHelper.material;

    if (Array.isArray(gridMaterial)) {
      for (const material of gridMaterial) {
        material.transparent = true;
        material.opacity = 0.24;
      }
    } else {
      gridMaterial.transparent = true;
      gridMaterial.opacity = 0.24;
    }

    gridHelper.position.y = 0.075;

    this.geometries.push(
      gridHelper.geometry,
    );

    if (Array.isArray(gridMaterial)) {
      for (const material of gridMaterial) {
        this.materials.push(material);
      }
    } else {
      this.materials.push(gridMaterial);
    }

    grid.add(gridHelper);

    /*
     * Add a second, much larger grid with very low opacity.
     * This gives the floor a layered sci-fi appearance.
     */
    const secondaryGrid = new GridHelper
    (
      floorSize,
      Math.max(
        8,
        Math.floor(
          arena.gridDivisions / 4,
        ),
      ),
      0x28506a,
      0x122b3b,
    );

    const secondaryMaterial =
      secondaryGrid.material;

    if (Array.isArray(secondaryMaterial)) {
      for (const material of secondaryMaterial) {
        material.transparent = true;
        material.opacity = 0.13;
      }
    } else {
      secondaryMaterial.transparent = true;
      secondaryMaterial.opacity = 0.13;
    }

    secondaryGrid.position.y = 0.078;

    this.geometries.push(
      secondaryGrid.geometry,
    );

    if (Array.isArray(secondaryMaterial)) {
      for (const material of secondaryMaterial) {
        this.materials.push(material);
      }
    } else {
      this.materials.push(
        secondaryMaterial,
      );
    }

    grid.add(secondaryGrid);

    this.group.add(grid);
  }

  /**
   * Main arena boundary and inner energy rings.
   */
  private buildArenaRings(): void {
    const { arena } = GAME_CONFIG;

    /*
     * ------------------------------------------------------------
     * Outer energy rim
     * ------------------------------------------------------------
     */

    const outerRim = new Mesh(
      trackGeometry(
        this.geometries,
        new TorusGeometry(
          arena.radius,
          0.34,
          10,
          192,
        ),
      ),
      trackMaterial(
        this.materials,
        new MeshBasicMaterial({
          color: arena.rimColor,
        }),
      ),
    );

    outerRim.rotation.x =
      -Math.PI / 2;

    outerRim.position.y = 0.16;

    this.group.add(outerRim);

    /*
     * Second outer rim.
     */
    const outerGlow = new Mesh(
      trackGeometry(
        this.geometries,
        new TorusGeometry(
          arena.radius + 0.65,
          0.075,
          6,
          192,
        ),
      ),
      trackMaterial(
        this.materials,
        new MeshBasicMaterial({
          color: 0x37d9ff,
          transparent: true,
          opacity: 0.7,
        }),
      ),
    );

    outerGlow.rotation.x =
      -Math.PI / 2;

    outerGlow.position.y = 0.12;

    this.group.add(outerGlow);

    /*
     * Third outer ring.
     */
    const outerHalo = new Mesh(
      trackGeometry(
        this.geometries,
        new TorusGeometry(
          arena.radius + 1.15,
          0.025,
          5,
          192,
        ),
      ),
      trackMaterial(
        this.materials,
        new MeshBasicMaterial({
          color: 0x8a5cff,
          transparent: true,
          opacity: 0.5,
        }),
      ),
    );

    outerHalo.rotation.x =
      -Math.PI / 2;

    outerHalo.position.y = 0.105;

    this.group.add(outerHalo);

    /*
     * ------------------------------------------------------------
     * Inner rings
     * ------------------------------------------------------------
     */

    const innerRings = [
      {
        radius: arena.radius * 0.78,
        tube: 0.035,
        opacity: 0.35,
      },
      {
        radius: arena.radius * 0.55,
        tube: 0.07,
        opacity: 0.28,
      },
      {
        radius: arena.radius * 0.30,
        tube: 0.025,
        opacity: 0.22,
      },
    ];

    for (const ring of innerRings) {
      const mesh = new Mesh(
        trackGeometry(
          this.geometries,
          new TorusGeometry(
            ring.radius,
            ring.tube,
            6,
            160,
          ),
        ),
        trackMaterial(
          this.materials,
          new MeshBasicMaterial({
            color: arena.rimColor,
            transparent: true,
            opacity: ring.opacity,
          }),
        ),
      );

      mesh.rotation.x =
        -Math.PI / 2;

      mesh.position.y = 0.085;

      this.group.add(mesh);
    }
  }

  /**
   * Decorative radial lines on the floor.
   *
   * They visually divide the arena into sectors and lead the eye
   * toward the center.
   */
  private buildRadialAccents(): void {
    const { arena } = GAME_CONFIG;

    const lineMaterial =
      trackMaterial(
        this.materials,
        new MeshBasicMaterial({
          color: 0x17647c,
          transparent: true,
          opacity: 0.42,
        }),
      );

    const lineGeometry =
      trackGeometry(
        this.geometries,
        new PlaneGeometry(
          arena.radius * 0.46,
          0.035,
        ),
      );

    const count = 16;

    for (let i = 0; i < count; i++) {
      const angle =
        (i / count) * TAU;

      const line = new Mesh(
        lineGeometry,
        lineMaterial,
      );

      const distance =
        arena.radius * 0.29;

      line.position.set(
        Math.cos(angle) * distance,
        0.092,
        Math.sin(angle) * distance,
      );

      line.rotation.x =
        -Math.PI / 2;

      line.rotation.z =
        -angle;

      this.group.add(line);
    }
  }

  /**
   * Futuristic perimeter pylons.
   *
   * Each pylon consists of:
   * - dark metallic body
   * - glowing cap
   * - small energy ring
   */
  private buildPylons(): void {
    const { arena } = GAME_CONFIG;

    const bodyGeometry =
      trackGeometry(
        this.geometries,
        new CylinderGeometry(
          0.32,
          0.52,
          4.6,
          8,
        ),
      );

    const capGeometry =
      trackGeometry(
        this.geometries,
        new IcosahedronGeometry(
          0.46,
          1,
        ),
      );

    const ringGeometry =
      trackGeometry(
        this.geometries,
        new TorusGeometry(
          0.62,
          0.045,
          6,
          32,
        ),
      );

    const bodyMaterial =
      trackMaterial(
        this.materials,
        new MeshStandardMaterial({
          color: 0x101a24,
          roughness: 0.42,
          metalness: 0.72,
        }),
      );

    const capMaterial =
      trackMaterial(
        this.materials,
        new MeshBasicMaterial({
          color: arena.pylonGlowColor,
        }),
      );

    const ringMaterial =
      trackMaterial(
        this.materials,
        new MeshBasicMaterial({
          color: 0x38d9ff,
          transparent: true,
          opacity: 0.7,
        }),
      );

    for (
      let i = 0;
      i < arena.pylonCount;
      i++
    ) {
      const angle =
        (i / arena.pylonCount) *
        TAU;

      const radius =
        arena.radius * 0.96;

      const x =
        Math.cos(angle) * radius;

      const z =
        Math.sin(angle) * radius;

      /*
       * Main body.
       */
      const body = new Mesh(
        bodyGeometry,
        bodyMaterial,
      );

      body.position.set(
        x,
        2.3,
        z,
      );

      body.castShadow = true;

      this.group.add(body);

      /*
       * Glowing top core.
       */
      const cap = new Mesh(
        capGeometry,
        capMaterial,
      );

      cap.position.set(
        x,
        4.85,
        z,
      );

      this.group.add(cap);

      /*
       * Energy ring around the core.
       */
      const ring = new Mesh(
        ringGeometry,
        ringMaterial,
      );

      ring.position.set(
        x,
        4.85,
        z,
      );

      ring.rotation.x =
        Math.PI / 2;

      this.group.add(ring);
    }
  }

  /**
   * Sparse static star field.
   *
   * Stars are excluded from fog so they remain visible as distant
   * points of light.
   */
  private buildStars(): Points {
    const { arena } = GAME_CONFIG;

    const positions =
      new Float32Array(
        arena.starCount * 3,
      );

    for (
      let i = 0;
      i < arena.starCount;
      i++
    ) {
      const angle =
        Math.random() * TAU;

      const radius =
        arena.radius +
        30 +
        Math.random() * 110;

      positions[i * 3] =
        Math.cos(angle) *
        radius;

      positions[i * 3 + 1] =
        18 +
        Math.random() * 60;

      positions[i * 3 + 2] =
        Math.sin(angle) *
        radius;
    }

    const geometry =
      trackGeometry(
        this.geometries,
        new BufferGeometry(),
      );

    geometry.setAttribute(
      'position',
      new Float32BufferAttribute(
        positions,
        3,
      ),
    );

    const material =
      trackMaterial(
        this.materials,
        new PointsMaterial({
          color: 0x9fd8ff,
          size: 0.65,
          sizeAttenuation: true,
          fog: false,
          transparent: true,
          opacity: 0.8,
        }),
      );

    const points =
      new Points(
        geometry,
        material,
      );

    points.frustumCulled = false;

    return points;
  }

  /**
   * Applies the arena atmosphere to the scene.
   */
  applyAtmosphere(
    scene: Scene,
  ): void {
    const { arena } = GAME_CONFIG;

    scene.fog = new Fog(
      arena.fogColor,
      arena.fogNear,
      arena.fogFar,
    );
  }

  addTo(scene: Scene): void {
    scene.add(this.group);
  }

  dispose(scene: Scene): void {
    scene.remove(this.group);

    scene.fog = null;

    for (
      const geometry of this.geometries
    ) {
      geometry.dispose();
    }

    for (
      const material of this.materials
    ) {
      material.dispose();
    }

    this.geometries.length = 0;
    this.materials.length = 0;
  }
}

function trackGeometry<
  T extends BufferGeometry,
>(
  list: BufferGeometry[],
  geometry: T,
): T {
  list.push(geometry);
  return geometry;
}

function trackMaterial<
  T extends Material,
>(
  list: Material[],
  material: T,
): T {
  list.push(material);
  return material;
}