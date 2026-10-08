/**
 * troika-three-text ships TypeScript definitions in `dist/types/` but does not declare them
 * in its package.json `types` field, so TypeScript cannot discover them automatically.
 * This hand-written declaration models the subset of the API the game uses, and (unlike the
 * shipped definitions) correctly extends `three`'s `Mesh` so 3D transform members are typed.
 */
declare module 'troika-three-text' {
  import { Color, Material, Mesh } from 'three';

  export class Text extends Mesh {
    /** The string of text to render. */
    text: string;
    /** Horizontal anchor relative to the local origin, e.g. 0, 'center' or '50%'. */
    anchorX: number | string;
    /** Vertical anchor relative to the local origin, e.g. 0, 'middle' or 'bottom-baseline'. */
    anchorY: number | string;
    /** URL of a custom font file (.ttf, .otf or .woff). `null` uses the built-in default. */
    font: string | null;
    /** Glyph em-box size in world units. */
    fontSize: number;
    /** Extra spacing between glyphs, in em units. */
    letterSpacing: number;
    /** Fill color of the glyphs. */
    color: string | number | Color;
    /** Fill opacity in the range 0..1, used for fade-out effects. */
    fillOpacity: number;
    /** Halo width drawn around each glyph, in em units. */
    outlineWidth: number;
    /** Halo color around each glyph. */
    outlineColor: string | number | Color;
    /** Halo opacity in the range 0..1. */
    outlineOpacity: number;
    /** Blur radius applied to the halo, in em units. */
    outlineBlur: number;
    /** Inner stroke width in em units. */
    strokeWidth: number;
    /** Inner stroke color. */
    strokeColor: string | number | Color;
    /** Inner stroke opacity in the range 0..1. */
    strokeOpacity: number;
    /** The derived render material in use for this text mesh. */
    material: Material;
    /** Re-layout and re-upload the glyphs. Async; safe to call after batching property writes. */
    sync(callback?: () => void): void;
    /** Releases GPU resources owned by this instance. */
    dispose(): void;
  }

  /** Warm the font/ glyph cache for a set of characters before first use. */
  export function preloadFont(
    options: { font: string; characters: string | string[]; sdfGlyphSize?: number },
    callback?: () => void,
  ): void;
}
