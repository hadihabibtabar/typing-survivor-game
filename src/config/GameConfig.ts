/**
 * Central gameplay configuration.
 *
 * Every tunable constant lives here so gameplay can be rebalanced without touching system code.
 * Values are chosen for a desktop 1280x720 .. 1920x1080 viewport.
 */

/** Radius of the circular arena, in world units. */
export const ARENA_RADIUS = 50;

/**
 * World scale: 1 world unit is approximately 1 metre (the player capsule is 1.7 units
 * tall, the arena is a 100 m circle). Distances quoted in centimetres in the design are
 * therefore written here directly in world units.
 */

/** Maximum forward travel of a letter pellet before it stops and falls (~20 m). */
export const WORD_PROJECTILE_MAX_DISTANCE = 20.0;

/**
 * Half-angle (radians) of the shotgun cone every letter fans across around the aim
 * direction. Moderate on purpose: wide enough that pellets rake across the danger zone,
 * narrow enough that most of them still land in it (0.15 rad at max range ~ 3 m lateral).
 */
export const LETTER_SPREAD_ANGLE = 0.15;

/** Lateral width of the launch cluster - letters start tight, then fan out in flight. */
export const LETTER_SPREAD_DISTANCE = 1.2;

/** Vertical stack height of the launch cluster (mirrors the typed word, first letter on top). */
export const LETTER_STACK_HEIGHT = 0.6;

/** Muzzle velocity of a single letter pellet (world units / second). */
export const LETTER_PROJECTILE_SPEED = 34;

/** An enemy closer than this to the player may never be spawned (~5 m). */
export const MIN_ENEMY_SPAWN_DISTANCE = 5;

/** Floor on the live enemy population: the arena never empties while you are alive. */
export const ENEMY_MIN_COUNT = 10;

/**
 * Hard ceiling on simultaneously alive enemies. The difficulty curve may ask for less,
 * never more - enemy count can never grow without bound.
 */
export const ENEMY_MAX_COUNT = 160;

/** Enemies spawned per second at the start of a run; the stage table scales it up. */
export const ENEMY_SPAWN_RATE = 1.25;

/** Upper bound on enemies emitted by a single spawn wave. */
export const ENEMY_MAX_SPAWN_PER_INTERVAL = 16;

/** Absolute cap re-checked at every spawn call, regardless of stage. */
export const MAX_ACTIVE_ENEMIES = ENEMY_MAX_COUNT;

/** Milliseconds a mistyped word stays locked before it unlocks itself (~2 s). */
export const TYPING_ERROR_RECOVERY_MS = 500;

/** Difficulty stage: parameters that ramp as survival time increases. */
export interface StageConfig {
  /** Elapsed seconds at which this stage becomes active. */
  readonly startsAt: number;
  /** Seconds between enemy spawn waves. */
  readonly spawnInterval: number;
  /** Base number of enemies per spawn wave. */
  readonly waveSize: number;
  /** Multiplier applied to base enemy speed. */
  readonly speedMultiplier: number;
  /** Hard cap on simultaneously alive enemies for this stage. */
  readonly maxAlive: number;
  /** Highest word difficulty tier unlocked by this stage. */
  readonly maxWordTier: number;
}

/**
 * Controlled difficulty curve: low -> moderate -> medium -> high -> very high, stepping
 * every 30 seconds as designed. Each stage shortens the wave interval and raises group
 * size, speed and the alive-cap - but every value stays at or below the named spawn caps
 * (`ENEMY_MAX_SPAWN_PER_INTERVAL`, `ENEMY_MAX_COUNT` / `MAX_ACTIVE_ENEMIES`, enforced by
 * the spawner), so late game is intense rather than an exponential flood.
 * The last entry never expires: pressure plateaus instead of exploding.
 */
export const STAGES: readonly StageConfig[] = [
  // The first wave per interval seeds `ENEMY_SPAWN_RATE` enemies per second.
  { startsAt: 0, spawnInterval: 3.2, waveSize: Math.round(ENEMY_SPAWN_RATE * 3.2), speedMultiplier: 1.0, maxAlive: 45, maxWordTier: 0 },
  { startsAt: 30, spawnInterval: 2.6, waveSize: 7, speedMultiplier: 1.1, maxAlive: 75, maxWordTier: 1 },
  { startsAt: 60, spawnInterval: 2.1, waveSize: 10, speedMultiplier: 1.2, maxAlive: 105, maxWordTier: 2 },
  { startsAt: 90, spawnInterval: 1.7, waveSize: 13, speedMultiplier: 1.3, maxAlive: 135, maxWordTier: 2 },
  { startsAt: 120, spawnInterval: 1.4, waveSize: 16, speedMultiplier: 1.4, maxAlive: ENEMY_MAX_COUNT, maxWordTier: 3 },
];

/** Returns the stage active at the given elapsed time (seconds). */
export function getStage(elapsedSeconds: number): StageConfig {
  let active = STAGES[0];
  for (let i = 1; i < STAGES.length; i++) {
    if (elapsedSeconds >= STAGES[i].startsAt) active = STAGES[i];
  }
  return active;
}

/** Index of the active stage, used by the HUD. */
export function getStageIndex(elapsedSeconds: number): number {
  let index = 0;
  for (let i = 1; i < STAGES.length; i++) {
    if (elapsedSeconds >= STAGES[i].startsAt) index = i;
  }
  return index;
}

export const GAME_CONFIG = {
  arena: {
    radius: ARENA_RADIUS,
    gridDivisions: 64,
    groundColor: 0x0d1426,
    gridColor: 0x1f4c8a,
    rimColor: 0x37e0ff,
    pylonColor: 0x11203c,
    pylonGlowColor: 0x37e0ff,
    pylonCount: 10,
    fogColor: 0x060a14,
    fogNear: 48,
    fogFar: 145,
    starCount: 350,
  },

  camera: {
    fov: 60,
    near: 0.5,
    far: 400,
    /** Camera height above the player. */
    height: 20,
    /** Camera distance behind the player. */
    distance: 17,
    /** Height above the player the camera aims at. */
    lookAtHeight: 1.4,
    /** Exponential follow rate (higher = snappier). */
    followRate: 5,
    maxShake: 1.4,
    shakeDecay: 5,
  },

  player: {
    /** Collision radius used by gameplay queries (slightly larger than the visible capsule). */
    radius: 0.62,
    capsuleRadius: 0.5,
    capsuleLength: 0.7,
    /** Y position of the capsule origin, i.e. half of its total height. */
    bodyY: 0.85,
    color: 0x2f86ff,
    emissive: 0x0c3f9e,
    indicatorColor: 0x59c8ff,
    /** Maximum steering speed, world units / second. */
    maxSpeed: 7.5,
    /** Velocity response rate; time constant is 1 / acceleration seconds. */
    acceleration: 6.5,
    /** Radians / second the capsule turns to face its movement direction. */
    turnRate: 9,
  },

  enemies: {
    /** Instanced pool size: hard cap on visible enemies. */
    capacity: 200,
    radius: 0.45,
    capsuleRadius: 0.4,
    capsuleLength: 0.4,
    bodyY: 0.6,
    color: 0xff3347,
    emissive: 0x7d0d16,
    baseSpeed: 2.2,
    /** +/- speed variation so the horde does not move as a rigid sheet. */
    speedVariance: 0.3,
    wobbleAmplitude: 0.42,
    wobbleFrequency: 2.4,
    /** Neighbour distance used for local separation. */
    separationRadius: 1.15,
    separationStrength: 7,
    /** Ring radius enemies spawn on: just inside the arena edge, never near the player. */
    spawnRadius: ARENA_RADIUS - 3,
    spawnRadiusJitter: 4,
    /** Candidate spawn positions outside this radius (or inside this one to the player) are rejected. */
    spawnArenaMargin: 2,
    /** Minimum centre-to-centre spacing from live enemies at a candidate spawn point. */
    spawnMinSeparation: 1.1,
    /** Angular spread (radians) of a spawn cluster. */
    spawnClusterSpread: 0.45,
    /** Distance at which an enemy starts influencing auto-steering. */
    influenceRadius: 32,
  },

  projectile: {
    /**
     * Pool size for live letter pellets. One typed word = one mesh per character, so this
     * must comfortably hold several long words in flight (e.g. 96 = six 16-letter words).
     */
    capacity: 96,
    /** Base muzzle velocity of one letter (per-letter variance applied on top). */
    speed: LETTER_PROJECTILE_SPEED,
    fontSize: 1.3,
    /** Shotgun geometry: cone half-angle, launch cluster width/height, speed jitter. */
    letterSpreadAngle: LETTER_SPREAD_ANGLE,
    letterSpreadDistance: LETTER_SPREAD_DISTANCE,
    letterStackHeight: LETTER_STACK_HEIGHT,
    /** +/- speed variance (fraction) so pellets never fly in lockstep. */
    letterSpeedVariance: 0.08,
    /**
     * Maximum forward travel of EACH letter before it stops and falls - measured from
     * that letter's own launch position, a deliberately short-range attack, never a
     * cross-arena shot. See WORD_PROJECTILE_MAX_DISTANCE.
     */
    maxDistance: WORD_PROJECTILE_MAX_DISTANCE,
    gravity: 32,
    /** Y position at which a landed word rests on the floor. */
    restY: 0.68,
    /** Y position the word is fired at, just above the enemy line. */
    launchHeight: 1.0,
    /** How long a word rests on the ground before fading (~1s, per design). */
    groundLifetimeMs: 2000,
    fadeMs: 300,
    /** Centre-to-centre radius (on the floor plane) for a letter's piercing hit while flying. */
    hitRadius: 1.2,
    /** One-time splash radius on a letter's first contact (kills the cluster around it, once). */
    impactRadius: 3,
    /**
     * Ground-hazard radius: while a letter is falling, resting or fading, any enemy that
     * walks into this circle around it dies. Sized to match a single landed glyph.
     */
    groundHazardRadius: 1.6,
    /** Horizontal velocity damping once the word starts falling. */
    fallDamping: 2.2,
    fillColor: 0xffffff,
    outlineColor: 0x49e6ff,
  },

  typing: {
    /** Exactly three word boxes are visible at once. */
    visibleWords: 3,
    /** Words repeated within this many picks are avoided. */
    repeatWindow: 8,
    /** Milliseconds a wrong character locks the word before it unlocks itself. */
    errorRecoveryMs: TYPING_ERROR_RECOVERY_MS,
  },

  scoring: {
    correctWord: 100,
    kill: 50,
    longWordBonusPerChar: 10,
    longWordThreshold: 8,
    wrongChar: -10,
    skip: -5,
  },

  density: {
    /** Directions the arena is split into for density analysis. */
    sectors: 12,
  },

  /**
   * Automatic player movement. Each component is a weighted unit vector; their sum is
   * normalised once per frame, so no single force can silently drown the others.
   */
  steering: {
    /** Flee pressure from enemy concentrations (the negative density gradient). */
    avoidanceWeight: 1,
    /** Gentle pull toward the arena centre, growing linearly with distance (never a lock). */
    centerWeight: 0.85,
    /** Radius at which the soft boundary force starts to engage. */
    boundaryStart: ARENA_RADIUS - 12,
    /** Boundary force at the rim - comfortably stronger than a full avoidance vector. */
    boundaryWeight: 1.7,
    /** Weight of the current heading, so turns stay smooth and organic. */
    inertiaWeight: 0.35,
    /** Persistent slow random walk so the player keeps roaming even with no threat. */
    roamWeight: 0.3,
    /** Random-walk turn rate, radians per second. */
    roamTurnRate: 0.9,
  },

  /** Threat scoring used to pick the direction a word is launched into. */
  targeting: {
    /** Closeness scale: an enemy at this distance scores 0.5 on the distance term. */
    threatDistanceScale: 10,
    /** Threat multiplier for an enemy moving sideways or away (zero approach). */
    threatSidewaysFactor: 0.45,
    /** Extra multiplier when a collision is imminent (zero time-to-impact). */
    threatUrgencyBoost: 0.8,
    /** Seconds that scale the time-to-impact urgency term. */
    threatUrgencyTimeScale: 2,
  },

  effects: {
    particleCapacity: 700,
    shockwaveCapacity: 12,
    particleSpeed: 7,
    particleLifetime: 0.55,
    shockwaveLifetime: 0.35,
  },

  audio: {
    masterGain: 0.32,
  },
} as const;
