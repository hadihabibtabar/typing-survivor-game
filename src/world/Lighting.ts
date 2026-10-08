import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  Light,
  PointLight,
  Scene,
} from 'three';
import { GAME_CONFIG } from '../config/GameConfig';

/**
 * Readable, high-contrast lighting:
 *  - hemisphere + ambient keep the arena from going dark,
 *  - one shadow-casting directional light anchors entities to the floor,
 *  - two coloured point lights add neon mood without washing out silhouettes.
 */
export class Lighting {
  private readonly lights: Light[] = [];

  constructor(scene: Scene) {
    const { arena } = GAME_CONFIG;

    const hemisphere = new HemisphereLight(0x9ec8ff, 0x121a2e, 1.1);
    scene.add(hemisphere);

    const ambient = new AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    const sun = new DirectionalLight(0xffffff, 2.1);
    sun.position.set(34, 52, 24);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 160;
    sun.shadow.camera.left = -arena.radius - 6;
    sun.shadow.camera.right = arena.radius + 6;
    sun.shadow.camera.top = arena.radius + 6;
    sun.shadow.camera.bottom = -arena.radius - 6;
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.02;
    scene.add(sun);
    scene.add(sun.target);

    const glowA = new PointLight(arena.rimColor, 90, arena.radius * 1.1, 2);
    glowA.position.set(-arena.radius * 0.5, 7, -arena.radius * 0.5);
    scene.add(glowA);

    const glowB = new PointLight(0xff4f8b, 70, arena.radius, 2);
    glowB.position.set(arena.radius * 0.5, 6, arena.radius * 0.45);
    scene.add(glowB);

    this.lights.push(hemisphere, ambient, sun, glowA, glowB);
  }

  dispose(scene: Scene): void {
    for (const light of this.lights) {
      scene.remove(light);
      light.dispose();
    }
    this.lights.length = 0;
  }
}
