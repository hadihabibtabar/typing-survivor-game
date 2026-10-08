/** High level flow of a run: MENU -> PLAYING -> GAME_OVER -> PLAYING. */
export enum GameState {
  Menu = 'menu',
  Playing = 'playing',
  GameOver = 'game_over',
}

/** Mutable statistics for a single run, read by the HUD and game-over screen. */
export interface RunStats {
  score: number;
  /** Words fully typed and launched. */
  wordsTyped: number;
  correctWords: number;
  /** Words abandoned through Enter while in an error state. */
  incorrectWords: number;
  /** Words discarded with Enter (error or not). */
  skippedWords: number;
  /** Total keystrokes counted against the target word. */
  charsTyped: number;
  charsCorrect: number;
  charsWrong: number;
  kills: number;
  /** Survival time in seconds. */
  elapsed: number;
}

/** Creates a zeroed stats record for a fresh run. */
export function createRunStats(): RunStats {
  return {
    score: 0,
    wordsTyped: 0,
    correctWords: 0,
    incorrectWords: 0,
    skippedWords: 0,
    charsTyped: 0,
    charsCorrect: 0,
    charsWrong: 0,
    kills: 0,
    elapsed: 0,
  };
}

/** Character-level accuracy in percent (100% before any keystroke). */
export function getAccuracy(stats: RunStats): number {
  if (stats.charsTyped === 0) return 100;
  return (stats.charsCorrect / stats.charsTyped) * 100;
}

/** Words per minute from correctly typed characters (standard 5 chars/word). */
export function getWpm(stats: RunStats): number {
  const minutes = stats.elapsed / 60;
  if (minutes <= 0) return 0;
  return stats.charsCorrect / 5 / minutes;
}
