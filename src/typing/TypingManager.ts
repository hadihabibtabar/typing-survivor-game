import { GAME_CONFIG } from '../config/GameConfig';
import { WordManager } from './WordManager';
import { WordQueue } from './WordQueue';

/** Events the game reacts to while typing. */
export interface TypingCallbacks {
  /** A correct character was entered; `index` is its position in the word. */
  onCorrectChar(word: string, index: number): void;
  /** A wrong character was entered; the word is locked until it auto-recovers (or Enter). */
  onWrongChar(word: string, char: string): void;
  /** The whole word was typed - launch it as a projectile. */
  onWordCompleted(word: string): void;
  /** Enter discarded the active word; `hadError` says whether it was mistyped. */
  onWordSkipped(word: string, hadError: boolean): void;
  /** Typing state changed - the UI should re-render the word boxes. */
  onChanged(): void;
}

const isLetter = (char: string): boolean => char >= 'a' && char <= 'z';

/**
 * Global keyboard handler and per-word progress state.
 *
 * Input rules:
 *  - letters advance the active word (index 0 of the queue),
 *  - a wrong letter locks the word in an error state (red + shake) for
 *    `typing.errorRecoveryMs` (~2 s), after which it unlocks itself with the correctly
 *    typed prefix intact - Enter still skips it immediately for players who prefer that,
 *  - Backspace and M are ignored completely: no un-typing, no queue changes, no
 *    shortcuts,
 *  - Enter always discards the active word and pulls the next one forward.
 *
 * The listener is attached to `window`, so typing works regardless of which element has
 * focus. Keystroke handling is event-driven; the only polled state is the error-recovery
 * countdown, ticked once per frame from the game loop via `update(dt)`.
 */
export class TypingManager {
  readonly queue: WordQueue;

  private typedLength = 0;
  private errored = false;
  /** Milliseconds left before a mistyped word unlocks itself. Only ticks while errored. */
  private errorTimerMs = 0;
  private enabled = false;

  private readonly onKeyDown = (event: KeyboardEvent): void => this.handleKeyDown(event);

  constructor(
    private readonly wordManager: WordManager,
    private readonly callbacks: TypingCallbacks,
  ) {
    this.queue = new WordQueue(wordManager);
  }

  /** Progress within the active word, in characters. */
  get typed(): number {
    return this.typedLength;
  }

  /** True when the active word has a pending mistake. */
  get hasError(): boolean {
    return this.errored;
  }

  attach(): void {
    window.addEventListener('keydown', this.onKeyDown);
  }

  detach(): void {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  /** Fresh queue and cleared progress (new run). */
  reset(): void {
    this.wordManager.reset();
    this.queue.reset();
    this.typedLength = 0;
    this.errored = false;
    this.errorTimerMs = 0;
    this.callbacks.onChanged();
  }

  /**
   * Ticks the error-recovery countdown (called once per frame while playing).
   *
   * After `typing.errorRecoveryMs` the word leaves the error state on its own: the red
   * styling clears, `hasError` flips to false and the next keystroke is compared against
   * the character that failed - the correctly typed prefix is preserved, so the player
   * simply resumes typing where they slipped up. No Enter press is ever required.
   */
  update(dt: number): void {
    if (!this.errored) return;
    this.errorTimerMs -= dt * 1000;
    if (this.errorTimerMs <= 0) {
      this.errorTimerMs = 0;
      this.errored = false;
      this.callbacks.onChanged(); // re-render clears the error styling
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (!this.enabled) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    if (event.key === 'Enter') {
      event.preventDefault();
      this.skipCurrentWord();
      return;
    }

    // Backspace is deliberately inert: it must not un-type, reset the word, touch the
    // queue, or trigger any gameplay action. It falls through below (key.length !== 1)
    // and is simply ignored.

    if (event.key.length !== 1) return;

    if (event.key === ' ') {
      // Words never contain spaces - swallow it so the page cannot scroll mid-run.
      event.preventDefault();
      return;
    }

    const char = event.key.toLowerCase();
    if (!isLetter(char)) return;
    event.preventDefault();

    if (this.errored) return; // locked; the countdown in update() unlocks it automatically

    const word = this.queue.current;
    if (char === word[this.typedLength]) {
      this.typedLength++;
      this.callbacks.onCorrectChar(word, this.typedLength - 1);
      if (this.typedLength >= word.length) {
        this.completeCurrentWord();
        return;
      }
    } else {
      this.errored = true;
      this.errorTimerMs = GAME_CONFIG.typing.errorRecoveryMs;
      this.callbacks.onWrongChar(word, char);
    }
    this.callbacks.onChanged();
  }

  private completeCurrentWord(): void {
    const word = this.queue.shift();
    this.typedLength = 0;
    this.errored = false;
    this.errorTimerMs = 0;
    this.callbacks.onWordCompleted(word);
    this.callbacks.onChanged();
  }

  private skipCurrentWord(): void {
    const hadError = this.errored;
    const word = this.queue.shift();
    this.typedLength = 0;
    this.errored = false;
    this.errorTimerMs = 0;
    this.callbacks.onWordSkipped(word, hadError);
    this.callbacks.onChanged();
  }
}
