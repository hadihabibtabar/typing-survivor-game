# Typing Survivor

A 3D horde-survival game for the browser where **your typing is the weapon**.

You control a small blue capsule — wearing a top hat and a long black braided mustache — in
a neon arena. Red capsule swarms close in from the edge and your character dodges on its
own — you never aim, never move, and never shoot. Instead you type the highlighted word,
and the word splits into one **letter pellet per character**: a short-range shotgun blast
fired into the most dangerous threat zone.

> Typing speed = attack speed · Typing accuracy = combat accuracy · Typing skill = survival skill

Built with **Three.js + TypeScript + Vite**, no framework, no backend, no external art or
audio assets. The result is a static site you can host anywhere.

---

## 1. Installation

```bash
npm install
```

Requires Node 18+ and npm 9+.

## 2. Commands

| Command             | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Dev server with HMR → http://127.0.0.1:5173         |
| `npm run build`     | Type-checks (`tsc --noEmit`) then builds `dist/`    |
| `npm run preview`   | Serves the production build locally                 |
| `npm run typecheck` | Type-check only, no emit                            |

```bash
npm run dev      # develop
npm run build    # production build  ->  dist/
npm run preview  # serve dist/ as a static site
```

`vite.config.ts` sets `base: './'`, so `dist/` can be deployed under any path (GitHub
Pages, Netlify, S3, an iframe inside another app) without configuration.

## 3. Controls

| Key                  | Action                                              |
| -------------------- | --------------------------------------------------- |
| `a`–`z`              | Type the highlighted (leftmost) word                |
| `Enter`              | Discard the current word and pull the queue forward |
| `Enter` (menu/over)  | Start / play again                                  |
| `Escape` (game over) | Back to the menu                                    |
| `Backspace`          | Ignored (no un-typing, no queue changes)            |
| `M`                  | Ignored (sound is toggled from the menu button)     |

A wrong character turns the word red for ~2 s, then it unlocks itself with the typed
prefix intact — Enter is never required. Sound has no shortcut: the main menu carries a
visible `🔊 SOUND: ON / 🔇 SOUND: OFF` toggle.

---

## 4. Project structure

```
index.html                  DOM shell: canvas, word row, HUD, menu, game-over panel
src/
  main.ts                   Entry point (boots Game, dev-only debug handle)
  style.css                 All UI styling (word boxes, HUD, overlays, feedback anims)

  config/
    GameConfig.ts           Every tunable constant + the difficulty stage table
    words.ts                Four word-difficulty tiers

  game/
    Game.ts                 Composition root: owns renderer/scene and the frame order
    GameLoop.ts             Single requestAnimationFrame driver, clamped delta time
    GameState.ts            MENU/PLAYING/GAME_OVER + run statistics and derived metrics

  world/
    Arena.ts                Floor, grid, neon rim, pylons, star field, fog
    Lighting.ts             Hemisphere + ambient + shadow-casting directional + 2 point lights
    CameraRig.ts            Elevated follow camera (fixed orientation) + screen shake

  player/
    Player.ts               Blue capsule + hat + braided mustache, auto steering, containment

  enemies/
    Enemy.ts                Enemy state interface + pooled factory
    EnemyManager.ts         InstancedMesh horde: seek, wobble, separation, death flash
    EnemySpawner.ts         Capped, min-distance-checked edge spawns scaled by survival time

  typing/
    WordManager.ts          Difficulty-aware word source with repeat avoidance
    WordQueue.ts            The three visible words (shift-and-refill)
    TypingManager.ts        Global keyboard handling, 2 s error auto-recovery, Enter skip

  combat/
    TargetingSystem.ts      Threat scoring for auto-aim + multi-force steering
    CollisionSystem.ts      Distance-based collision queries

  projectiles/
    ProjectileManager.ts    Pooled troika 3D-text letters: spread, pierce, fall, rest, fade

  effects/
    EffectsManager.ts       Instanced particle bursts + expanding shockwave rings

  audio/
    SoundManager.ts         Procedural Web Audio effects (no audio files)

  ui/
    HUD.ts                  Score/WPM/accuracy/kills/time, throttled + diffed
    WordDisplay.ts          Three word boxes: typed/error/success states
    Screens.ts              Menu and game-over overlays
    dom.ts                  Small DOM helpers

  utils/
    MathUtils.ts            clamp/lerp/damp/random/sector maths
    ObjectPool.ts           Fixed-capacity pool
    SpatialHash.ts          Uniform grid for neighbour queries

  types/
    troika-three-text.d.ts  Ambient typings (the npm package ships no `types` entry)
```

Roughly 3.7k lines of TypeScript, strict mode, no `any`, no magic numbers — constants live
in `GAME_CONFIG`.

---

## 5. The frame

One `requestAnimationFrame` loop drives everything, in a fixed order:

```
density analysis  ->  auto steering  ->  spawn wave  ->  horde simulation
      ->  letter pellets (spread / pierce / fall / rest / fade, ground hazards)
      ->  typing error countdown  ->  lethal-contact check  ->  camera follow  ->  HUD (10 Hz)
```

Gameplay stops dead on death (`MENU -> PLAYING -> GAME_OVER -> PLAYING`); a restart rebuilds
run state in place — no page reload, no scene teardown.

## 6. Major systems

**Steering (where the player runs).** The player has no keyboard movement. Each frame a
single direction is assembled from five weighted components, then normalised once:

```
finalDirection = normalise(
    enemyAvoidance   // normalised negative density gradient (12 sectors, 1/(1+d/15))
  + centreBias       // grows linearly with distance from the centre; 0 at the centre
  + boundaryAvoidance// soft ramp past ARENA_RADIUS − 12, unbeatable by avoidance at the rim
  + movementInertia  // a little of the current heading, so turns stay organic
  + slowRoaming      // persistent random walk — the player never freezes
)
```

Normalising *each* term before summing is what fixes the old edge-trapping bug: the
escape vector no longer drowns the centring term just because 40 enemies are pressing.
Pressure can push the player outward only to about `ARENA_RADIUS − 10`; the wall itself
(`Player.update`'s containment clamp) is a hard safety net that should rarely engage.
Velocity still eases toward `steer × maxSpeed`, so motion is smooth and never teleports,
and the roaming term keeps the capsule crossing the middle regions even when the arena
is quiet.

**Spawning.** Waves are emitted around a random anchor angle (two anchors after 60 s)
with a Gaussian angular spread, on a ring just inside the arena edge. Every candidate
position is validated: never outside the floor, never within `MIN_ENEMY_SPAWN_DISTANCE`
(~30 cm) of the player's capsule, never on top of another enemy — bad candidates are
resampled up to 12 times and the enemy is dropped if none pass. Population is bounded by
three caps: the stage's `maxAlive`, `MAX_ACTIVE_ENEMIES` (160 — the hard ceiling) and the
instance pool; each wave is also clamped to `ENEMY_MAX_SPAWN_PER_INTERVAL` (16), and a
floor of `ENEMY_MIN_COUNT` (10) tops the arena back up after a big multi-kill. `STAGES`
ramps interval, group size and speed every 30 s (0–30 low → 120+ very high), so the
curve is gradual and plateaus instead of exploding exponentially.

**Horde simulation.** All enemies render through a single `InstancedMesh` (one geometry, one
material). They seek the player, add a per-enemy sine wobble so groups do not move as a
rigid sheet, and separate locally through a spatial hash rebuilt once per frame. Kills do not
pop instantly: the instance whitens and shrinks over 160 ms before its slot is recycled.

**Difficulty.** `getStage(elapsed)` drives enemies *and* words — `maxWordTier` unlocks
tier 0 → 3 at 0/30/60/120 s, with 55 % of picks drawn from the newest tier so the queue
hardens gradually instead of all at once. Enemy pressure follows the five-stage table
(0/30/60/90/120 s), always inside the configured population caps.

**Presentation.** HUD text is written at 10 Hz and only when a value actually changes; word
boxes re-render only on keystrokes; feedback (green flash, red shake, red vignette, screen
shake, particle bursts, shockwaves) is CSS animation or pooled GPU instances.

**Audio.** Procedural Web Audio: rising blips per correct character, a buzz for mistakes,
a sweep for launches, noise bursts for impacts, a descending tone on death. The context is
created on the first user gesture (the start button) and every call no-ops if audio is
unavailable or muted. The setting lives in game state (`Game.audioEnabled`, mirrored by
`SoundManager.muted`) and is toggled only through the menu's visible `🔊/🔇` button —
there is no keyboard shortcut.

---

## 7. How threat-based targeting works

Words do **not** fly at the biggest crowd. `TargetingSystem` scores every enemy within
influence range (60 units) as a threat:

```
threat = closeness(d) · approachMultiplier · (1 + 0.8 · urgency)

  closeness        = 1 / (1 + d / 10)          // closer generally wins
  approach         = how much velocity points at the player (0..1),
                     scaled into [0.45 … 1]     // charging beats drifting
  urgency          = 1 / (1 + (d / closingSpeed) / 2)   // imminent collision ranks up
```

So an enemy that is slightly farther away but closing head-on outranks one that is close
and moving sideways — the ranking is *who reaches the player first*, not *who has the most
friends*.

When a word completes, `computeAimPoint()`:

1. finds the highest-threat enemy;
2. takes the **danger zone** instead of the enemy itself: the distance-weighted centroid
   of that enemy's sector plus its two neighbours — a region where several enemies may be
   packed, so one word's letter cluster can kill multiple targets;
3. returns a plain world point once, at launch. `Game.launchWord` turns it into a fixed
   horizontal direction; `ProjectileManager` gives every letter its own velocity fanned
   around that direction — no homing, no re-aiming, no rotation toward any enemy
   mid-flight. When nothing is in range the shot falls back to the player's facing. The
   same density pass, weighted and negated, is what makes the player run.

---

## 8. How typing input is processed

`TypingManager` attaches **one** `keydown` listener to `window`, so input works no matter
which element has focus, and keystroke handling is completely event-driven — the only
per-frame work is the 2 s error-recovery countdown, and nothing re-renders the DOM per
frame.

```
keydown
  ├─ modifier combos (Ctrl/Cmd/Alt)      → ignored (browser shortcuts still work)
  ├─ Enter                              → discard active word, shift the queue
  ├─ Backspace                          → ignored completely (no un-typing)
  ├─ space / non a-z                    → swallowed so the page cannot scroll mid-run
  └─ letter
       ├─ matches word[typedLength]     → advance, onCorrectChar (stats + rising blip)
       │    └─ completes the word       → shift queue, onWordCompleted → launch projectile
       └─ does not match                → error state: box turns red and shakes,
                                          onWrongChar (−10 pts, accuracy), timer starts

error timer (ticked per frame by TypingManager.update)
  └─ reaches 0 after 2 s               → error clears by itself, typed prefix intact,
                                          the word is typeable again — no Enter needed
```

The active word is always index 0 of `WordQueue`; completing or skipping it shifts the queue
and appends a fresh word, so exactly three boxes are visible forever. `WordDisplay` diffs
against its last render, so a keystroke only touches the DOM when something really changed.

Scoring follows the design: +100 per word, +10 × length for words of 8+ characters, +50 per
kill, −10 per wrong character, −5 per skip. WPM is `correctChars / 5 / minutes`, accuracy is
`correctChars / typedChars`.

---

## 9. How the letter shotgun works

Completing a word does **not** fire the word as one object. `ProjectileManager.launch`
splits it into one real `troika-three-text` mesh (3D text in the scene, not an HTML
overlay) **per character** — `cat` → 3 pellets, `keyboard` → 8 — all pooled and recycled.

**Launch.** Letters spawn as a compact cluster (lateral offset perpendicular to the aim
direction, vertical stack mirroring the word with the first letter on top). Each letter
gets its **own** velocity: the shared threat-zone direction rotated by a per-letter angle
evenly distributed across `LETTER_SPREAD_ANGLE` (±0.15 rad), with ±8 % speed jitter. The
result is a forward shotgun cone — same general direction for the whole cluster, slightly
different trajectory per letter, never one shared vector.

```
FLYING   each letter flies its own trajectory, hard-clamped to
   │     WORD_PROJECTILE_MAX_DISTANCE measured from ITS OWN launch point
   │     — never a cross-arena shot
   │  every frame: planar distance test vs every live enemy
   │     ├─ enemy within hitRadius (1.2) → KILL and KEEP FLYING (piercing)
   │     │    └─ first contact also fires a one-time splash (impactRadius 3) + FX
   │     └─ travelled max range          → stop forward movement, start falling
   ▼
FALLING   gravity + damping; still lethal — enemies it drops on die →
   ▼  position.y reaches restY
GROUNDED  ground hazard: any enemy within groundHazardRadius (1.6) dies,
          for the full 2000 ms ground lifetime →
   ▼
FADING    still lethal while opacity ramps to 0 over 300 ms → recycled to the pool
```

Every letter runs this machine independently: they separate, land at different spots and
expire one by one. A letter is never destroyed by a kill — it pierces enemies in flight,
and a landed letter keeps reaping enemies until its own timer runs out. One long word =
more pellets = more offensive power. Ground-phase and post-first-hit kills fire only
`onEnemyKilled` (burst + score + sound), never `onImpact`, so a parked letter cannot
retrigger shockwaves every frame; impact FX are additionally capped per frame in `Game`
because a whole cluster can connect simultaneously.

Collision is a deliberate sphere test on the **XZ plane**: letters fly about a unit above
the floor while enemies stand on it, so a 3-D test would silently shrink the effective
radius. There is no broadphase for projectiles — there are at most `capacity` (96) of them
against a bounded enemy list, so a linear scan is cheaper than maintaining a structure.
Enemy-vs-player lethality is the same idea: `distance < playerRadius + enemyRadius` ends
the run.

Total lifetime of a letter is ~3 s (range covered in under a second at this speed, then
fall + 2 s rest + 0.3 s fade), so old letters never accumulate beyond the fixed pool.

---

## 10. Adding an online leaderboard later

The game has no backend today, but every seam a leaderboard needs already exists:

- **Stats are already a serializable snapshot.** `RunStats` (`src/game/GameState.ts`) is a
  plain object — score, words, accuracy, WPM, kills, survival time — produced for a single
  run. `getAccuracy()` / `getWpm()` are pure functions over it, so the same payload can be
  sent to a server and re-validated there instead of trusting the client's display values.
- **The run boundary is a single method.** `Game.handleDeath()` is the only place a run ends.
  Posting the result there is one call:

  ```ts
  // handleDeath()
  void fetch('/api/scores', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ ...this.stats, version: BUILD_VERSION }),
  });
  ```

  Keep `startGame()`/`returnToMenu()` untouched — the client stays fully playable offline and
  simply queues or drops posts when there is no server.
- **Trust boundary.** Scores should be re-derived server-side where possible: a run longer
  than `elapsed`, or a `wordsTyped` inconsistent with `charsCorrect`, is a cheap sanity check.
  For stronger guarantees, send the per-word timeline (word, ms offset, correct/incorrect) and
  replay it against the same difficulty table, which is deterministic given elapsed time.
- **Identity** can be layered on later (an anonymous device id first, accounts later) without
  touching gameplay: the game never reads a user today.

Natural next steps in that direction, all listed as future work rather than MVP: global and
friend leaderboards, daily seeded challenges (a fixed word list + spawn seed), per-mode
statistics, and alternative arenas/enemy types.

---

## 11. Performance notes

- **One draw call for the whole horde** (`InstancedMesh`, ≤ 160 active / 200 slots); the
  character's braided mustache is merged into a single geometry, so hat + braid cost only
  4 extra draw calls. Letter pellets are one draw call each (real 3D text) — a full
  16-letter volley stays well under 40 draw calls total.
- **Pooling everywhere**: enemies (200), letter pellets (96), particles (700), shockwaves
  (12). Nothing allocates during steady-state play; instance buffers are allocated once at
  boot.
- **Spatial hash** for enemy separation (cell size = 1.5 × separation radius), rebuilt once
  per frame with retained cell arrays — neighbour queries stay near-constant cost.
- **Per-frame scratch vectors** in `Game`; the update path does not allocate.
- **DOM writes are rationed**: HUD at 10 Hz and diffed, word boxes only on keystrokes,
  feedback via CSS classes/animations.
- Shadows use a single 2048² directional map covering the arena; pixel ratio is capped at 2.

## 12. Acceptance checklist

| Area        | Verified                                                              |
| ----------- | --------------------------------------------------------------------- |
| 3D world    | Scene, arena, blue player capsule, red enemies, camera follow (0, 17) offset |
| Enemy AI    | Group spawns, seek + wobble, sector density, multi-force auto-steer, lethal contact |
| Spawning    | Controlled 5-stage curve, `MAX_ACTIVE_ENEMIES` cap, ~30 cm min player distance, no overlap, in-arena only |
| Typing      | Three boxes, active highlight, global input, launch on completion, red/shake on error, ~2 s auto-recovery, Enter skip, queue refresh |
| Keyboard    | Backspace and M ignored, Enter still skips/starts/restarts             |
| Combat      | Threat-direction aim (not the largest group), word → N letter pellets with spread, piercing multi-kill, short-range flight, grounded letters stay lethal, 2 s rest → fade |
| Character   | Blue capsule with top hat + long black braided mustache; both follow facing/bob, no effect on collision |
| Audio       | Menu `🔊/🔇` toggle stores `audioEnabled`; off means no SFX              |
| Progression | Score, timer, WPM, accuracy, stage ramp, word-tier ramp                 |
| Game flow   | Start screen, in-place restart, game-over panel with stats              |
| Build       | `tsc --noEmit` clean, `vite build` clean, production bundle runs         |
