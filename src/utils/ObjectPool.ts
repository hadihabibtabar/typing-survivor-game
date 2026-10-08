/**
 * Minimal fixed-capacity object pool.
 *
 * The game pre-allocates its pools once (enemies, projectiles, particles) so gameplay
 * never triggers garbage-collector pauses. `acquire` returns `undefined` when exhausted,
 * which callers treat as "skip this spawn" rather than allocating.
 */
export class ObjectPool<T> {
  private readonly free: T[] = [];

  constructor(factory: () => T, initialSize = 0) {
    for (let i = 0; i < initialSize; i++) {
      this.free.push(factory());
    }
  }

  /** Removes one item from the pool, or `undefined` when the pool is empty. */
  acquire(): T | undefined {
    return this.free.pop();
  }

  /** Returns an item to the pool. Callers are responsible for resetting its state. */
  release(item: T): void {
    this.free.push(item);
  }

  /** Number of idle items available. */
  get available(): number {
    return this.free.length;
  }

  /** Drains the pool, disposing each item if a disposer is supplied. */
  dispose(disposeItem?: (item: T) => void): void {
    if (disposeItem) {
      for (const item of this.free) disposeItem(item);
    }
    this.free.length = 0;
  }
}
