import { PCFSoftShadowMap, Scene, Vector3, WebGLRenderer } from 'three';
import { SoundManager } from '../audio/SoundManager';
import { CollisionSystem } from '../combat/CollisionSystem';
import { TargetingSystem } from '../combat/TargetingSystem';
import { GAME_CONFIG, getStage } from '../config/GameConfig';
import { EffectsManager } from '../effects/EffectsManager';
import { Enemy } from '../enemies/Enemy';
import { EnemyManager } from '../enemies/EnemyManager';
import { EnemySpawner } from '../enemies/EnemySpawner';
import { ProjectileEvents, ProjectileManager } from '../projectiles/ProjectileManager';
import { Player } from '../player/Player';
import { TypingCallbacks, TypingManager } from '../typing/TypingManager';
import { WordManager } from '../typing/WordManager';
import { HUD } from '../ui/HUD';
import { Screens } from '../ui/Screens';
import { WordDisplay } from '../ui/WordDisplay';
import { requireElement } from '../ui/dom';
import { Arena } from '../world/Arena';
import { CameraRig } from '../world/CameraRig';
import { Lighting } from '../world/Lighting';
import { GameLoop } from './GameLoop';
import { GameState, RunStats, createRunStats } from './GameState';

/** Milliseconds between death and the game-over panel, so the death burst stays visible. */
const DEATH_PANEL_DELAY_MS = 750;
/** Cap on kill sounds per frame so a large splash cannot clip the master bus. */
const MAX_KILL_SOUNDS_PER_FRAME = 3;
/** Cap on impact bursts per frame: a whole letter cluster can connect at once. */
const MAX_IMPACTS_PER_FRAME = 2;
/** Particle counts for key feedback moments. */
const DEATH_PARTICLES = 40;
const IMPACT_PARTICLES = 14;
const KILL_PARTICLES = 8;

/**
 * Composition root.
 *
 * Owns the renderer, scene and every gameplay system, and drives one animation frame:
 *
 *   density analysis -> auto steering -> spawn -> horde simulation -> word projectiles
 *   -> lethal contact check -> camera -> HUD
 *
 * States are MENU -> PLAYING -> GAME_OVER -> PLAYING. A restart rebuilds run state in
 * place: no page reload and no scene teardown.
 */
export class Game {
  private readonly container: HTMLElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: WebGLRenderer;
  private readonly scene = new Scene();

  private readonly arena = new Arena();
  private readonly lighting = new Lighting(this.scene);
  private readonly cameraRig = new CameraRig();
  private readonly player = new Player();
  private readonly enemies = new EnemyManager();
  private readonly spawner = new EnemySpawner();
  private readonly targeting = new TargetingSystem();
  private readonly collision = new CollisionSystem();
  private readonly effects = new EffectsManager();
  private readonly sound = new SoundManager();
  private readonly wordManager = new WordManager();
  private readonly projectiles: ProjectileManager;
  private readonly typing: TypingManager;
  private readonly hud: HUD;
  private readonly wordDisplay: WordDisplay;
  private readonly screens: Screens;
  private readonly vignette: HTMLElement;
  private readonly loop: GameLoop;

  private state: GameState = GameState.Menu;
  private stats: RunStats = createRunStats();
  /** Master audio preference, stored in game state and mirrored by SoundManager.muted. */
  audioEnabled = true;
  private deathPanelTimer: number | null = null;
  private killSoundsThisFrame = 0;
  private impactsThisFrame = 0;

  /** Scratch vectors reused every frame - the update path allocates nothing. */
  private readonly steer = new Vector3();
  private readonly aimPoint = new Vector3();
  private readonly launchOrigin = new Vector3();
  private readonly launchDirection = new Vector3();

  private readonly projectileEvents: ProjectileEvents = {
    onEnemyKilled: (enemy) => this.handleEnemyKilled(enemy),
    onImpact: (point) => this.handleImpact(point),
  };

  private readonly typingCallbacks: TypingCallbacks = {
    onCorrectChar: (_word, index) => {
      this.stats.charsTyped++;
      this.stats.charsCorrect++;
      this.sound.correct(index);
    },
    onWrongChar: () => {
      this.stats.charsTyped++;
      this.stats.charsWrong++;
      this.stats.score = Math.max(0, this.stats.score + GAME_CONFIG.scoring.wrongChar);
      this.sound.wrong();
      this.wordDisplay.shake();
    },
    onWordCompleted: (word) => this.launchWord(word),
    onWordSkipped: (_word, hadError) => {
      this.stats.skippedWords++;
      if (hadError) this.stats.incorrectWords++;
      this.stats.score = Math.max(0, this.stats.score + GAME_CONFIG.scoring.skip);
      this.sound.skip();
    },
    onChanged: () => this.refreshWords(),
  };

  private readonly onWindowResize = (): void => this.resize();
  private readonly onGlobalKeyDown = (event: KeyboardEvent): void => this.handleGlobalKeyDown(event);

  constructor(container: HTMLElement) {
    this.container = container;
    this.canvas = requireElement<HTMLCanvasElement>(container, 'game-canvas');

    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;

    this.projectiles = new ProjectileManager(this.scene);
    this.typing = new TypingManager(this.wordManager, this.typingCallbacks);
    this.hud = new HUD(container);
    this.wordDisplay = new WordDisplay(container, GAME_CONFIG.typing.visibleWords);
    this.screens = new Screens(container, {
      onStart: () => this.startGame(),
      onRestart: () => this.startGame(),
      onToggleAudio: () => this.toggleAudio(),
    });
    this.vignette = requireElement(container, 'vignette');

    // World + entities.
    this.arena.addTo(this.scene);
    this.arena.applyAtmosphere(this.scene);
    this.player.addTo(this.scene);
    this.enemies.addTo(this.scene);
    this.effects.addTo(this.scene);

    this.loop = new GameLoop((dt) => this.frame(dt));

    this.typing.attach();
    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('keydown', this.onGlobalKeyDown);

    this.resize();
    this.screens.showMenu();
    this.hud.hide();
    this.wordDisplay.hide();
    this.render();
    this.loop.start(); // renders the arena behind the menu; gameplay only runs when Playing
  }

  // ---------------------------------------------------------------- lifecycle

  /** Starts (or restarts) a run in place. */
  startGame(): void {
    if (this.state === GameState.Playing) return;
    this.clearDeathPanel();
    this.loop.start(); // idempotent: guarantees the frame loop is alive on every path in

    this.sound.unlock();

    this.state = GameState.Playing;
    this.stats = createRunStats();
    this.killSoundsThisFrame = 0;

    this.player.reset();
    this.enemies.reset();
    this.spawner.reset();
    this.projectiles.reset();
    this.effects.reset();
    this.typing.reset();
    this.typing.enable();
    this.cameraRig.snapTo(this.player.position);

    // Seed the arena so the first seconds are already readable (never below the
    // configured population floor, never near the player).
    this.spawner.seed(this.enemies, this.player.position);

    this.screens.hide();
    this.hud.reset(this.stats);
    this.hud.show();
    this.wordDisplay.show();
    this.refreshWords();
  }

  /** Returns to the main menu, releasing the current run. */
  returnToMenu(): void {
    this.clearDeathPanel();
    this.state = GameState.Menu;
    this.typing.disable();
    this.enemies.reset();
    this.projectiles.reset();
    this.effects.reset();
    // The loop keeps running: the menu renders the arena behind its overlay, and a later
    // startGame() must not have to resurrect a stopped loop.
    this.screens.showMenu();
    this.hud.hide();
    this.wordDisplay.hide();
  }

  dispose(): void {
    this.loop.stop();
    this.clearDeathPanel();
    this.typing.detach();
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('keydown', this.onGlobalKeyDown);

    this.projectiles.dispose(this.scene);
    this.effects.dispose(this.scene);
    this.enemies.dispose(this.scene);
    this.player.dispose(this.scene);
    this.arena.dispose(this.scene);
    this.lighting.dispose(this.scene);
    this.sound.dispose();
    this.renderer.dispose();
  }

  // ------------------------------------------------------------------ update

  private frame(dt: number): void {
    this.killSoundsThisFrame = 0;
    this.impactsThisFrame = 0;

    if (this.state === GameState.Playing) {
      this.updatePlaying(dt);
    } else {
      // Gameplay is frozen, but the camera should still settle and decay its shake.
      this.cameraRig.update(dt, this.player.position);
    }

    this.effects.update(dt);
    this.render();
  }

  private updatePlaying(dt: number): void {
    this.stats.elapsed += dt;

    // Word difficulty tracks the current survival stage.
    this.wordManager.setMaxTier(getStage(this.stats.elapsed).maxWordTier);

    // Typing-error recovery countdown (~2 s), so a mistake unlocks itself.
    this.typing.update(dt);

    // 1. Measure enemy density once: it drives both steering and aiming.
    this.targeting.analyze(this.enemies.activeEnemies, this.player.position);
    this.targeting.computeSteering(this.steer, this.player.position, this.player.velocity, dt);

    // 2. The player roams and flees toward the safest heading.
    this.player.update(dt, this.steer);

    // 3. Spawn (capped, min-distance checked) and simulate the horde.
    this.spawner.update(dt, this.stats.elapsed, this.enemies, this.player.position);
    this.enemies.update(dt, this.player.position);

    // 4. Letter pellets fly, pierce enemies, fall and expire - one lifecycle per letter.
    this.projectiles.update(
      dt,
      this.enemies.activeEnemies,
      this.cameraRig.camera.quaternion,
      this.projectileEvents,
    );

    // 5. Any enemy touching the player ends the run.
    if (this.collision.findPlayerCollision(this.player.position, this.player.radius, this.enemies.activeEnemies)) {
      this.handleDeath();
      return;
    }

    // 6. Presentation.
    this.cameraRig.update(dt, this.player.position);
    this.hud.update(dt, this.stats);
  }

  // ------------------------------------------------------------------ combat

  private handleEnemyKilled(enemy: Enemy): void {
    this.enemies.kill(enemy);
    this.stats.kills++;
    this.stats.score += GAME_CONFIG.scoring.kill;
    this.effects.burst(enemy.position, GAME_CONFIG.enemies.color, KILL_PARTICLES, 5);
    if (this.killSoundsThisFrame < MAX_KILL_SOUNDS_PER_FRAME) {
      this.killSoundsThisFrame++;
      this.sound.kill();
    }
  }

  private handleImpact(point: Vector3): void {
    // Many letters can connect in the same frame; burst FX for the first few only.
    if (this.impactsThisFrame >= MAX_IMPACTS_PER_FRAME) return;
    this.impactsThisFrame++;
    this.effects.shockwave(point, GAME_CONFIG.projectile.outlineColor);
    this.effects.burst(point, GAME_CONFIG.projectile.fillColor, IMPACT_PARTICLES, 7);
    this.sound.impact();
    this.cameraRig.addShake(0.3);
  }

  /**
   * Splits a completed word into one letter pellet per character and fires the whole
   * cluster into the highest-threat danger zone (aim direction is shared; each letter
   * applies its own spread on top).
   */
  private launchWord(word: string): void {
    const { scoring, projectile } = GAME_CONFIG;

    this.stats.wordsTyped++;
    this.stats.correctWords++;
    let score = scoring.correctWord;
    if (word.length >= scoring.longWordThreshold) {
      score += scoring.longWordBonusPerChar * word.length;
    }
    this.stats.score += score;

    this.launchOrigin.copy(this.player.position);
    this.launchOrigin.y = projectile.launchHeight;

    if (this.targeting.computeAimPoint(this.aimPoint, this.enemies.activeEnemies)) {
      this.launchDirection.copy(this.aimPoint).sub(this.launchOrigin);
    } else {
      // Nothing to aim at: fire along the player's heading.
      this.launchDirection.copy(this.player.velocity);
    }
    // Keep the flight level so the word travels toward the group, not into the floor.
    this.launchDirection.y = 0;
    if (this.launchDirection.lengthSq() < 1e-6) this.launchDirection.set(0, 0, -1);

    if (this.projectiles.launch(word, this.launchOrigin, this.launchDirection)) {
      this.sound.launch();
      this.wordDisplay.flashSuccess();
    }
  }

  // ------------------------------------------------------------------- death

  private handleDeath(): void {
    if (this.state !== GameState.Playing) return;

    this.state = GameState.GameOver;
    this.typing.disable();
    this.wordDisplay.hide();

    this.sound.death();
    this.cameraRig.addShake(GAME_CONFIG.camera.maxShake);
    this.effects.burst(this.player.position, GAME_CONFIG.player.color, DEATH_PARTICLES, 9);
    this.effects.shockwave(this.player.position, GAME_CONFIG.player.color);
    this.flashVignette();
    this.hud.update(1, this.stats); // flush final values immediately

    this.deathPanelTimer = window.setTimeout(() => {
      this.deathPanelTimer = null;
      if (this.state === GameState.GameOver) this.screens.showGameOver(this.stats);
    }, DEATH_PANEL_DELAY_MS);
  }

  private clearDeathPanel(): void {
    if (this.deathPanelTimer !== null) {
      window.clearTimeout(this.deathPanelTimer);
      this.deathPanelTimer = null;
    }
  }

  private flashVignette(): void {
    this.vignette.classList.remove('flash');
    void this.vignette.offsetWidth;
    this.vignette.classList.add('flash');
  }

  // ------------------------------------------------------------------ input

  private handleGlobalKeyDown(event: KeyboardEvent): void {
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    // Sound has no keyboard shortcut anymore (M is ignored); the menu button owns it.
    if (event.key === 'Enter') {
      if (this.state === GameState.Menu) this.startGame();
      else if (this.state === GameState.GameOver && this.deathPanelTimer === null) this.startGame();
      return;
    }

    if (event.key === 'Escape' && this.state === GameState.GameOver && this.deathPanelTimer === null) {
      this.returnToMenu();
    }
  }

  /** Menu sound toggle: flips `audioEnabled`, mirrors it onto the audio bus and UI. */
  private toggleAudio(): void {
    const muted = this.sound.toggleMuted();
    this.audioEnabled = !muted;
    this.screens.setAudioEnabled(this.audioEnabled);
  }

  // ------------------------------------------------------------------ output

  private refreshWords(): void {
    this.wordDisplay.render(
      this.typing.queue.all,
      this.typing.typed,
      this.typing.hasError,
      this.state === GameState.Playing,
    );
  }

  private resize(): void {
    const width = Math.max(this.container.clientWidth, 1);
    const height = Math.max(this.container.clientHeight, 1);
    this.renderer.setSize(width, height, false);
    this.cameraRig.setAspect(width / height);
    if (this.state !== GameState.Playing) this.render();
  }

  private render(): void {
    this.renderer.render(this.scene, this.cameraRig.camera);
  }
}
