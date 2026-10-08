/**
 * Single `requestAnimationFrame` driver.
 *
 * The whole game runs through one loop; `dt` is clamped so a backgrounded tab or a
 * long frame cannot teleport entities through collisions.
 */
const MAX_FRAME_DELTA = 0.05;

export class GameLoop {
  private rafId = 0;
  private lastTime = 0;
  private running = false;

  constructor(private readonly onFrame: (dt: number) => void) {}

  start(): void {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();

    const tick = (now: number): void => {
      if (!this.running) return;
      const elapsed = (now - this.lastTime) / 1000;
      this.lastTime = now;
      this.onFrame(Math.min(Math.max(elapsed, 0), MAX_FRAME_DELTA));
      this.rafId = requestAnimationFrame(tick);
    };

    this.rafId = requestAnimationFrame(tick);
  }

  stop(): void {
    if (!this.running) return;
    this.running = false;
    cancelAnimationFrame(this.rafId);
  }

  get isRunning(): boolean {
    return this.running;
  }
}
