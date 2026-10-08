import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import './style.css';

import { Game } from './game/Game';

const container = document.getElementById('app');
if (container === null) {
  throw new Error('Missing #app mount point');
}

try {
  const game = new Game(container);

  if (import.meta.env.DEV) {
    // Dev-only inspection hook. `import.meta.env.DEV` is replaced with `false` at build
    // time, so this branch (and the global it assigns) is dropped from production builds.
    (window as unknown as { __typingSurvivor?: Game }).__typingSurvivor = game;
  }
} catch (error) {
  const message = document.createElement('div');
  message.className = 'fatal';
  message.textContent =
    error instanceof Error ? `Unable to start Typing Survivor: ${error.message}` : 'Unable to start Typing Survivor.';
  container.appendChild(message);
  throw error;
}
