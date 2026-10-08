import { RunStats, getAccuracy, getWpm } from '../game/GameState';
import { formatTime } from '../utils/MathUtils';
import { requireElement, setVisible } from './dom';

/** Seconds between HUD text writes - the DOM is not touched every frame. */
const REFRESH_INTERVAL = 0.1;

type StatKey = 'score' | 'wpm' | 'accuracy' | 'kills' | 'time';

/**
 * Bottom-left stat strip: score, WPM, accuracy, kills, time.
 *
 * Values are cached and only written to the DOM when they actually change, and only at
 * 10 Hz, so the HUD costs effectively nothing during play.
 */
export class HUD {
  private readonly root: HTMLElement;
  private readonly score: HTMLElement;
  private readonly wpm: HTMLElement;
  private readonly accuracy: HTMLElement;
  private readonly kills: HTMLElement;
  private readonly time: HTMLElement;

  private accumulator = 0;
  private readonly shown: Record<StatKey, string> = {
    score: '',
    wpm: '',
    accuracy: '',
    kills: '',
    time: '',
  };

  constructor(root: HTMLElement) {
    this.root = requireElement(root, 'hud');
    this.score = requireElement(this.root, 'stat-score');
    this.wpm = requireElement(this.root, 'stat-wpm');
    this.accuracy = requireElement(this.root, 'stat-accuracy');
    this.kills = requireElement(this.root, 'stat-kills');
    this.time = requireElement(this.root, 'stat-time');
  }

  show(): void {
    setVisible(this.root, true);
  }

  hide(): void {
    setVisible(this.root, false);
  }

  /** Resets cached values so a new run never shows the previous run's numbers. */
  reset(stats: RunStats): void {
    this.accumulator = REFRESH_INTERVAL;
    this.shown.score = '';
    this.shown.wpm = '';
    this.shown.accuracy = '';
    this.shown.kills = '';
    this.shown.time = '';
    this.update(0, stats);
  }

  update(dt: number, stats: RunStats): void {
    this.accumulator += dt;
    if (this.accumulator < REFRESH_INTERVAL) return;
    this.accumulator = 0;

    this.write(this.score, 'score', Math.round(stats.score).toLocaleString('en-US'));
    this.write(this.wpm, 'wpm', Math.round(getWpm(stats)).toString());
    this.write(this.accuracy, 'accuracy', `${Math.round(getAccuracy(stats))}%`);
    this.write(this.kills, 'kills', stats.kills.toString());
    this.write(this.time, 'time', formatTime(stats.elapsed));
  }

  private write(element: HTMLElement, key: StatKey, value: string): void {
    if (this.shown[key] === value) return;
    this.shown[key] = value;
    element.textContent = value;
  }
}
