/**
 * Word difficulty tiers.
 *
 * Tier 0 unlocks immediately; later tiers are unlocked by survival time through
 * `StageConfig.maxWordTier`. Words are lowercase ASCII only.
 */
export const WORD_TIERS: readonly (readonly string[])[] = [
  // Tier 0 - short, common words (0-30s)
  [
    'cat', 'tree', 'game', 'blue', 'fast', 'star', 'wind', 'fire', 'rain', 'bird',
    'fish', 'moon', 'leaf', 'snow', 'rock', 'sand', 'lake', 'hill', 'road', 'gold',
    'jump', 'rush', 'play', 'type', 'word', 'key', 'hit', 'grab', 'dash', 'zoom',
    'glow', 'wave', 'beam', 'ring', 'core', 'seed', 'nest', 'cave', 'dune', 'frost',
    'light', 'storm', 'cloud', 'river', 'blade', 'red', 'green', 'white', 'black',
    'pink', 'sun', 'sky', 'sea', 'wood', 'stone', 'door', 'wall', 'floor', 'hand',
    'head', 'face', 'eye', 'ear', 'foot', 'walk', 'run', 'jump', 'move', 'turn',
    'look', 'find', 'make', 'take', 'give', 'keep', 'hold', 'drop', 'push', 'pull',
    'open', 'close', 'start', 'stop', 'win', 'lose', 'safe', 'danger', 'enemy',
    'hero', 'power', 'life', 'time', 'space', 'world', 'level', 'score', 'sound',
    'sword', 'arrow', 'shot', 'blast', 'spark', 'smoke',
  ],

  // Tier 1 - medium words (30s+)
  [
    'planet', 'machine', 'window', 'galaxy', 'engine', 'future', 'rocket', 'sensor',
    'vector', 'pulse', 'laser', 'drone', 'shield', 'orbit', 'crystal', 'thunder',
    'winter', 'garden', 'bridge', 'castle', 'forest', 'ocean', 'travel', 'motion',
    'signal', 'matrix', 'cyber', 'boost', 'random', 'source', 'buffer', 'cursor',
    'render', 'socket', 'thread', 'sprite', 'shader', 'stream', 'tunnel', 'vortex',
    'beacon', 'chroma', 'delta', 'flame', 'grasp', 'target', 'danger', 'attack',
    'defense', 'hunter', 'fighter', 'warrior', 'battle', 'combat', 'survive',
    'escape', 'future', 'energy', 'power', 'charge', 'impact', 'damage', 'health',
    'enemy', 'player', 'weapon', 'missile', 'rocket', 'bullet', 'plasma', 'threat',
    'sector', 'arena', 'ground', 'center', 'border', 'corner', 'direction',
    'movement', 'cluster', 'group', 'system', 'screen', 'keyboard', 'typing',
    'letter', 'button', 'action', 'speed', 'accuracy', 'victory', 'defeat',
    'mission', 'challenge', 'survival', 'score', 'effect', 'shadow', 'bright',
    'silent', 'dangerous', 'powerful',
  ],

  // Tier 2 - long words (60s+)
  [
    'computer', 'javascript', 'mountain', 'keyboard', 'building', 'strategy',
    'network', 'compiler', 'database', 'firewall', 'gravity', 'hardware', 'infinite',
    'logistics', 'magnetic', 'observer', 'pipeline', 'platform', 'creature',
    'festival', 'grammar', 'harvest', 'morning', 'diamond', 'emergency', 'furniture',
    'hurricane', 'knowledge', 'languages', 'mushroom', 'newspaper', 'operation',
    'painting', 'question', 'skeleton', 'tailwind', 'umbrella', 'volunteer',
    'adventure', 'algorithm', 'animation', 'application', 'architecture',
    'attention', 'automatic', 'character', 'collision', 'controller', 'direction',
    'distance', 'enemy', 'environment', 'explosion', 'function', 'generation',
    'graphics', 'interface', 'keyboard', 'mechanism', 'movement', 'objective',
    'prediction', 'projectile', 'rotation', 'security', 'simulation', 'software',
    'targeting', 'technology', 'trajectory', 'velocity', 'visual', 'weapon',
    'accuracy', 'difficulty', 'experience', 'reaction', 'reflex', 'response',
    'strategy', 'survivor', 'challenge', 'pressure', 'dangerous', 'powerful',
    'continuous', 'dynamic', 'multiple', 'position', 'location', 'distance',
    'direction', 'cluster', 'pattern', 'sequence', 'process', 'resource',
    'performance', 'framework', 'browser', 'website', 'internet', 'developer',
  ],

  // Tier 3 - very long words (120s+)
  [
    'architecture', 'development', 'transformation', 'performance', 'configuration',
    'engineering', 'environment', 'information', 'technology', 'connection',
    'generation', 'imagination', 'incredible', 'opportunity', 'remarkable',
    'celebration', 'communicate', 'complicated', 'determined', 'everything',
    'electrical', 'fascinated', 'interactive', 'maintenance', 'observation',
    'persistent', 'revolution', 'significant', 'temperature', 'understand',
    'acceleration', 'accessibility', 'accommodation', 'administration',
    'communication', 'concentration', 'consideration', 'construction',
    'coordination', 'customization', 'determination', 'distribution',
    'documentation', 'effectiveness', 'elimination', 'implementation',
    'improvement', 'independent', 'intelligence', 'interaction', 'management',
    'optimization', 'organization', 'orientation', 'prediction', 'preparation',
    'probability', 'processing', 'recognition', 'reconstruction', 'relationship',
    'representation', 'responsibility', 'significance', 'specialization',
    'transformation', 'transportation', 'understanding', 'visualization',
    'adaptation', 'calculation', 'collaboration', 'complexity', 'competition',
    'concentration', 'connectivity', 'creativity', 'deployment', 'description',
    'discovery', 'efficiency', 'evaluation', 'exploration', 'flexibility',
    'functionality', 'innovation', 'integration', 'navigation', 'observation',
    'prediction', 'protection', 'reliability', 'resolution', 'simulation',
    'stability', 'synchronization', 'verification', 'virtualization',
    'vulnerability', 'responsiveness', 'optimization', 'configuration',
  ],
];

/** Picks the tier that should be sampled, biased toward the hardest unlocked tier. */
export function pickTier(maxTier: number): number {
  const cap = Math.max(0, Math.min(maxTier, WORD_TIERS.length - 1));

  if (cap === 0) return 0;

  // 55% of words come from the newest unlocked tier.
  // The remaining 45% are sampled from all unlocked tiers.
  if (Math.random() < 0.55) return cap;

  return Math.floor(Math.random() * (cap + 1));
}