import { RunStats, getAccuracy, getWpm } from '../game/GameState';
import { formatTime } from '../utils/MathUtils';
import { requireElement, setVisible } from './dom';

export interface ScreenActions {
  onStart(): void;
  onRestart(): void;
  onToggleAudio(): void;
}

/** Main menu and game-over overlays. */
export class Screens {
  private readonly menu: HTMLElement;
  private readonly gameover: HTMLElement;
  private readonly audioToggle: HTMLElement;

  constructor(root: HTMLElement, actions: ScreenActions) {
    this.menu = requireElement(root, 'menu-screen');
    this.gameover = requireElement(root, 'gameover-screen');
    this.audioToggle = requireElement(root, 'audio-toggle-btn');

    this.bindButton(root, 'start-btn', actions.onStart);
    this.bindButton(root, 'restart-btn', actions.onRestart);
    this.bindButton(root, 'audio-toggle-btn', actions.onToggleAudio);
  }

  /** Keeps the menu's visible sound state in sync with the game's `audioEnabled`. */
  setAudioEnabled(enabled: boolean): void {
    this.audioToggle.textContent = enabled ? '🔊 SOUND: ON' : '🔇 SOUND: OFF';
  }

  /** Blurs after clicking so a focused button cannot swallow the Enter key during play. */
  private bindButton(root: ParentNode, id: string, handler: () => void): void {
    const button = requireElement(root, id);
    button.addEventListener('click', () => {
      button.blur();
      handler();
    });
  }

  showMenu(): void {
    setVisible(this.menu, true);
    setVisible(this.gameover, false);
  }

  showGameOver(stats: RunStats): void {
    const root = this.gameover;
    requireElement(root, 'final-score').textContent = Math.round(stats.score).toLocaleString('en-US');
    requireElement(root, 'final-words').textContent = stats.wordsTyped.toString();
    requireElement(root, 'final-accuracy').textContent = `${Math.round(getAccuracy(stats))}%`;
    requireElement(root, 'final-wpm').textContent = Math.round(getWpm(stats)).toString();
    requireElement(root, 'final-kills').textContent = stats.kills.toString();
    requireElement(root, 'final-time').textContent = formatTime(stats.elapsed);

    setVisible(this.menu, false);
    setVisible(this.gameover, true);
  }

  hide(): void {
    setVisible(this.menu, false);
    setVisible(this.gameover, false);
  }
}
