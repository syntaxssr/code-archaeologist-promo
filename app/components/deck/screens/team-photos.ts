import type { StaticImageData } from "next/image";

/**
 * The two portraits on screen 06 · 1/2.
 *
 * They are null until the real photographs exist, and the screen draws a marked
 * empty frame rather than a silhouette or a stock face — an obviously missing
 * portrait is honest, a fake one is not.
 *
 * To wire a photo in: drop the file at `public/team/<name>.jpg`, import it at
 * the top of this file, and assign it below. Static imports give Next the
 * intrinsic size, so the frame needs no hard-coded dimensions.
 *
 *   import bbPhoto from "@/public/team/bb.jpg";
 *   export const bb: StaticImageData | null = bbPhoto;
 *
 * What to send: half-body, portrait, 3:4, at least 1400 × 1866 px. A plain
 * light grey or white background sits best now that the deck is white, but any
 * background works — the frame crops to fill, so leave a little room around the
 * head and shoulders.
 */
export const bb: StaticImageData | null = null;
export const udong: StaticImageData | null = null;
