/**
 * Word difficulty tiers.
 *
 * Tier 0 unlocks immediately; later tiers are unlocked by survival time through
 * `StageConfig.maxWordTier`. Words are lowercase ASCII only (no punctuation) so the
 * keyboard input loop can stay simple and fair.
 */
export const WORD_TIERS: readonly (readonly string[])[] = [
  // Tier 0 - short, common words (0-30s)
  [
    'cat', 'tree', 'game', 'blue', 'fast', 'star', 'wind', 'fire', 'rain', 'bird',
    'fish', 'moon', 'leaf', 'snow', 'rock', 'sand', 'lake', 'hill', 'road', 'gold',
    'jump', 'rush', 'play', 'type', 'word', 'key', 'hit', 'grab', 'dash', 'zoom',
    'glow', 'wave', 'beam', 'ring', 'core', 'seed', 'nest', 'cave', 'dune', 'frost',
    'light', 'storm', 'cloud', 'river', 'blade',
  ],
  // Tier 1 - medium words (30s+)
  [
    'planet', 'machine', 'window', 'galaxy', 'engine', 'future', 'rocket', 'sensor',
    'vector', 'pulse', 'laser', 'drone', 'shield', 'orbit', 'crystal', 'thunder',
    'winter', 'garden', 'bridge', 'castle', 'forest', 'ocean', 'travel', 'motion',
    'signal', 'matrix', 'cyber', 'boost', 'random', 'source', 'buffer', 'cursor',
    'render', 'socket', 'thread', 'sprite', 'shader', 'stream', 'tunnel', 'vortex',
    'beacon', 'chroma', 'delta', 'flame', 'grasp',
  ],
  // Tier 2 - long words (60s+)
  [
    'computer', 'javascript', 'mountain', 'keyboard', 'building', 'strategy',
    'network', 'compiler', 'database', 'firewall', 'gravity', 'hardware', 'infinite',
    'logistics', 'magnetic', 'observer', 'pipeline', 'platform', 'creature',
    'festival', 'grammar', 'harvest', 'morning', 'diamond', 'emergency', 'furniture',
    'hurricane', 'knowledge', 'languages', 'mushroom', 'newspaper', 'operation',
    'painting', 'question', 'skeleton', 'tailwind', 'umbrella', 'volunteer',
  ],
  // Tier 3 - very long words (120s+)
  [
    'architecture', 'development', 'transformation', 'performance', 'configuration',
    'engineering', 'environment', 'information', 'technology', 'connection',
    'generation', 'imagination', 'incredible', 'opportunity', 'remarkable',
    'celebration', 'communicate', 'complicated', 'determined', 'everything',
    'electrical', 'fascinated', 'interactive', 'maintenance', 'observation',
    'persistent', 'revolution', 'significant', 'temperature', 'understand',
  ],
];

/** Picks the tier that should be sampled, biased toward the hardest unlocked tier. */
export function pickTier(maxTier: number): number {
  const cap = Math.max(0, Math.min(maxTier, WORD_TIERS.length - 1));
  if (cap === 0) return 0;
  // 55% of words come from the newest tier, the rest are spread across earlier tiers so
  // difficulty rises without the queue becoming uniformly hard.
  if (Math.random() < 0.55) return cap;
  return Math.floor(Math.random() * (cap + 1));
}
