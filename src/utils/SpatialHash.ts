import type { Vector3 } from 'three';

interface Positioned {
  readonly position: Vector3;
}

/**
 * Uniform-grid spatial hash over the XZ plane.
 *
 * Used for neighbour queries (enemy separation). Cell arrays are retained between frames
 * and only cleared, so steady-state operation performs no allocations.
 */
export class SpatialHash<T extends Positioned> {
  private readonly cells = new Map<number, T[]>();

  constructor(private readonly cellSize: number) {}

  private static key(cx: number, cz: number): number {
    // Offset into unsigned range so negative world coordinates work as Map keys.
    return (cx + 4096) * 8192 + (cz + 4096);
  }

  /** Clears all cells while keeping their backing arrays allocated. */
  clear(): void {
    for (const list of this.cells.values()) {
      list.length = 0;
    }
  }

  insert(item: T): void {
    const cx = Math.floor(item.position.x / this.cellSize);
    const cz = Math.floor(item.position.z / this.cellSize);
    const key = SpatialHash.key(cx, cz);
    let list = this.cells.get(key);
    if (list === undefined) {
      list = [];
      this.cells.set(key, list);
    }
    list.push(item);
  }

  /**
   * Collects every item within `radius` of (x, z) into `out` (cleared first).
   * Returns `out` so callers can iterate without allocating a closure per query.
   */
  collect(x: number, z: number, radius: number, out: T[]): T[] {
    out.length = 0;
    const range = Math.ceil(radius / this.cellSize);
    const cx = Math.floor(x / this.cellSize);
    const cz = Math.floor(z / this.cellSize);
    for (let ix = cx - range; ix <= cx + range; ix++) {
      for (let iz = cz - range; iz <= cz + range; iz++) {
        const list = this.cells.get(SpatialHash.key(ix, iz));
        if (list === undefined) continue;
        for (let i = 0; i < list.length; i++) out.push(list[i]);
      }
    }
    return out;
  }
}
