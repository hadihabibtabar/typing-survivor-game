import { GAME_CONFIG } from '../config/GameConfig';

type ToneOptions = {
  frequency: number;
  endFrequency?: number;
  duration: number;
  type: OscillatorType;
  /** Peak gain in 0..1, before the master bus. */
  level: number;
  delay?: number;
};

/**
 * Procedural sound effects built with the Web Audio API - no external audio assets.
 *
 * The AudioContext is created lazily on the first user gesture (the start button) to obey
 * browser autoplay policy. Everything degrades gracefully: if audio is unavailable or
 * muted, calls become no-ops and the game plays silently.
 */
export class SoundManager {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private muted = false;

  /** Creates/resumes the audio graph. Must be called from a user gesture. */
  unlock(): void {
    if (this.context === null) {
      const ctor: typeof AudioContext | undefined =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (ctor === undefined) return;

      try {
        this.context = new ctor();
      } catch {
        return;
      }

      this.master = this.context.createGain();
      this.master.gain.value = this.muted ? 0 : GAME_CONFIG.audio.masterGain;
      this.master.connect(this.context.destination);
      this.noiseBuffer = this.createNoiseBuffer(this.context);
    }

    if (this.context.state === 'suspended') {
      void this.context.resume();
    }
  }

  get isMuted(): boolean {
    return this.muted;
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.master !== null && this.context !== null) {
      this.master.gain.setTargetAtTime(muted ? 0 : GAME_CONFIG.audio.masterGain, this.context.currentTime, 0.02);
    }
  }

  toggleMuted(): boolean {
    this.setMuted(!this.muted);
    return this.muted;
  }

  /** Rising blip per correctly typed character - pitch climbs as the word completes. */
  correct(step: number): void {
    const frequency = Math.min(640 * Math.pow(1.06, step), 1500);
    this.tone({ frequency, duration: 0.06, type: 'triangle', level: 0.16 });
  }

  /** Buzz for a mistyped character. */
  wrong(): void {
    this.tone({ frequency: 190, endFrequency: 90, duration: 0.17, type: 'square', level: 0.22 });
  }

  /** Word launched. */
  launch(): void {
    this.tone({ frequency: 260, endFrequency: 840, duration: 0.16, type: 'sawtooth', level: 0.14 });
    this.noise(0.1, 0.1, 2400);
  }

  /** A single enemy died. */
  kill(): void {
    this.tone({ frequency: 520 + Math.random() * 140, duration: 0.07, type: 'square', level: 0.1 });
  }

  /** The word struck the ground / detonated. */
  impact(): void {
    this.tone({ frequency: 110, endFrequency: 60, duration: 0.2, type: 'sine', level: 0.3 });
    this.noise(0.22, 0.24, 1100);
  }

  /** Enter discarded a word. */
  skip(): void {
    this.tone({ frequency: 330, endFrequency: 230, duration: 0.09, type: 'triangle', level: 0.12 });
  }

  /** Player died. */
  death(): void {
    this.tone({ frequency: 420, endFrequency: 55, duration: 0.85, type: 'sawtooth', level: 0.26 });
    this.noise(0.5, 0.2, 600);
  }

  dispose(): void {
    if (this.context !== null) {
      void this.context.close();
    }
    this.context = null;
    this.master = null;
    this.noiseBuffer = null;
  }

  private tone(options: ToneOptions): void {
    const context = this.context;
    const master = this.master;
    if (context === null || master === null || this.muted) return;

    const start = context.currentTime + (options.delay ?? 0);
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = options.type;
    oscillator.frequency.setValueAtTime(options.frequency, start);
    if (options.endFrequency !== undefined) {
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(options.endFrequency, 1), start + options.duration);
    }

    // Short attack / exponential decay keeps overlapping notes from stacking up.
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(options.level, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + options.duration);

    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(start);
    oscillator.stop(start + options.duration + 0.03);
    oscillator.onended = (): void => {
      oscillator.disconnect();
      gain.disconnect();
    };
  }

  private noise(duration: number, level: number, cutoff: number): void {
    const context = this.context;
    const master = this.master;
    if (context === null || master === null || this.muted || this.noiseBuffer === null) return;

    const start = context.currentTime;
    const source = context.createBufferSource();
    source.buffer = this.noiseBuffer;

    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(cutoff, start);

    const gain = context.createGain();
    gain.gain.setValueAtTime(level, start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    source.start(start);
    source.stop(start + duration);
    source.onended = (): void => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  private createNoiseBuffer(context: AudioContext): AudioBuffer {
    const length = Math.floor(context.sampleRate * 0.5);
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }
}
