import { requireElement, setVisible } from './dom';

/** Cached render state so identical frames never touch the DOM. */
interface RenderCache {
  words: string;
  typed: number;
  error: boolean;
}

/**
 * The three word boxes at the top of the screen.
 *
 * Box 0 is always the active word: it is larger, highlighted, and split into typed
 * (green) and pending (white) characters. A mistake turns the whole box red and shakes it;
 * completion flashes it green before the queue shifts left.
 */
export class WordDisplay {
  private readonly root: HTMLElement;
  private readonly boxes: HTMLElement[] = [];
  private readonly labels: HTMLElement[] = [];
  private readonly cache: RenderCache[] = [];

  constructor(root: HTMLElement, count: number) {
    this.root = requireElement(root, 'word-row');

    for (let i = 0; i < count; i++) {
      const box = document.createElement('div');
      box.className = 'word-box';
      const label = document.createElement('span');
      label.className = 'word-text';
      box.appendChild(label);
      this.root.appendChild(box);
      this.boxes.push(box);
      this.labels.push(label);
      this.cache.push({ words: '', typed: -1, error: false });

      // Animation classes must be transient: `success` and `shake` share the `animation`
      // property, so a leftover class from a completed word would suppress the next shake.
      box.addEventListener('animationend', () => {
        box.classList.remove('shake', 'success');
      });
    }
  }

  show(): void {
    setVisible(this.root, true);
  }

  hide(): void {
    setVisible(this.root, false);
  }

  /** Draws the queue plus typing progress. Safe to call on every keystroke. */
  render(words: readonly string[], typed: number, hasError: boolean, enabled: boolean): void {
    const activeWord = words[0] ?? '';
    const activeBox = this.boxes[0];
    const activeLabel = this.labels[0];
    const activeCache = this.cache[0];

    activeBox.classList.toggle('active', enabled);
    activeBox.classList.toggle('error', hasError && enabled);

    if (
      activeCache.words !== activeWord ||
      activeCache.typed !== typed ||
      activeCache.error !== hasError
    ) {
      activeCache.words = activeWord;
      activeCache.typed = typed;
      activeCache.error = hasError;
      this.paintActive(activeLabel, activeWord, typed);
    }

    for (let i = 1; i < this.boxes.length; i++) {
      const word = words[i] ?? '';
      const box = this.boxes[i];
      const label = this.labels[i];
      box.classList.remove('active', 'error');
      if (this.cache[i].words !== word) {
        this.cache[i].words = word;
        label.textContent = word;
      }
    }
  }

  /** Green success flash on the active box (restarts the CSS animation). */
  flashSuccess(): void {
    this.restartAnimation(this.boxes[0], 'success');
  }

  /** Shake animation on the active box after a wrong character. */
  shake(): void {
    this.restartAnimation(this.boxes[0], 'shake');
  }

  private paintActive(label: HTMLElement, word: string, typed: number): void {
    label.textContent = '';
    for (let i = 0; i < word.length; i++) {
      const character = document.createElement('span');
      character.className = i < typed ? 'char typed' : 'char';
      character.textContent = word[i];
      label.appendChild(character);
    }
  }

  private restartAnimation(box: HTMLElement, className: string): void {
    // Clear the sibling animation first: `shake` and `success` share the `animation`
    // property, so a success flash still in flight would otherwise swallow the shake.
    box.classList.remove('shake', 'success');
    // Forcing a reflow makes the browser restart the keyframe animation.
    void box.offsetWidth;
    box.classList.add(className);
  }
}
