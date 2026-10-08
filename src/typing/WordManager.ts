import { WORD_TIERS, pickTier } from '../config/words';
import { GAME_CONFIG } from '../config/GameConfig';
import { randInt } from '../utils/MathUtils';

/**
 * Supplies words for the queue at the current difficulty.
 *
 * Difficulty is expressed as "the highest tier unlocked so far"; picks are biased toward
 * that tier but still draw from earlier ones so the queue does not become uniformly brutal.
 * A short recency window prevents the same word appearing twice in a row.
 */
export class WordManager {
  private maxTier = 0;
  private readonly recent: string[] = [];

  /** Called by the game whenever the difficulty stage changes. */
  setMaxTier(tier: number): void {
    this.maxTier = Math.max(0, Math.min(tier, WORD_TIERS.length - 1));
  }

  /** Returns the next word to display. */
  next(): string {
    let word = this.draw();
    for (let attempt = 0; attempt < 6 && this.recent.includes(word); attempt++) {
      word = this.draw();
    }

    this.recent.push(word);
    if (this.recent.length > GAME_CONFIG.typing.repeatWindow) this.recent.shift();
    return word;
  }

  /** Clears the recency history (new run). */
  reset(): void {
    this.recent.length = 0;
  }

  private draw(): string {
    const tier = WORD_TIERS[pickTier(this.maxTier)];
    return tier[randInt(0, tier.length - 1)];
  }
}
