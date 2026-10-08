import { GAME_CONFIG } from '../config/GameConfig';
import { WordManager } from './WordManager';

/**
 * The three visible words.
 *
 * Index 0 is always the active (typeable) word. Completing or skipping it shifts the
 * queue left and appends a fresh word, so exactly `visibleWords` boxes are shown at all
 * times - matching the design's `[ word B ] [ word C ] [ NEW WORD ]` flow.
 */
export class WordQueue {
  private readonly words: string[] = [];

  constructor(private readonly wordManager: WordManager) {
    this.reset();
  }

  /** The word currently being typed. */
  get current(): string {
    return this.words[0];
  }

  /** Read-only view for rendering. */
  get all(): readonly string[] {
    return this.words;
  }

  wordAt(index: number): string {
    return this.words[index];
  }

  /** Removes the active word and appends a new one at the end. */
  shift(): string {
    const completed = this.words.shift() ?? '';
    this.words.push(this.wordManager.next());
    return completed;
  }

  /** Rebuilds the queue from scratch. */
  reset(): void {
    this.words.length = 0;
    for (let i = 0; i < GAME_CONFIG.typing.visibleWords; i++) {
      this.words.push(this.wordManager.next());
    }
  }
}
