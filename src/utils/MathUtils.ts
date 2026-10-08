import { Vector3 } from 'three';

export const TAU = Math.PI * 2;

/** Clamps `value` into [min, max]. */
export function clamp(value: number, min: number, max: number): number {
  return value < min ? min : value > max ? max : value;
}

/** Linear interpolation between `a` and `b`. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Frame-rate independent exponential smoothing.
 * `rate` is the response speed: larger values converge faster.
 */
export function damp(current: number, target: number, rate: number, dt: number): number {
  return lerp(current, target, 1 - Math.exp(-rate * dt));
}

/** Random float in [min, max). */
export function randRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

/** Random integer in [min, max] inclusive. */
export function randInt(min: number, max: number): number {
  return Math.floor(randRange(min, max + 1));
}

/** Standard normal sample (Box-Muller), used for organic spawn clustering. */
export function gaussianRandom(): number {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v);
}

/** Maps an XZ-plane angle in radians to a sector index in [0, sectors). */
export function angleToSector(angle: number, sectors: number): number {
  const normalized = (angle + Math.PI) / TAU; // 0..1
  const sector = Math.floor(normalized * sectors);
  return clamp(sector, 0, sectors - 1);
}

/** Writes the unit XZ direction of a sector centre into `out` and returns it. */
export function sectorDirection(sector: number, sectors: number, out: Vector3): Vector3 {
  const angle = -Math.PI + ((sector + 0.5) / sectors) * TAU;
  out.set(Math.cos(angle), 0, Math.sin(angle));
  return out;
}

/** Formats seconds as `mm:ss` for the HUD. */
export function formatTime(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(total / 60);
  const secs = total % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
