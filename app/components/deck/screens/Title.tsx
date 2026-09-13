import { LogoMark } from "../../brand/Logo";
import { CodeField } from "./CodeField";

/**
 * Screen 00 — the cover.
 *
 * The order matters: the scan runs first, across an uncovered field, and finds
 * its one line; only then does the cut open and the product get named. Opening
 * the cut first would hide the middle of the sweep behind it.
 *
 * Twenty seconds, and it has to do two things at once: say the name, and make
 * the argument. The field behind is the repository; one line in it is lit. The
 * band across the middle is the cut — the only part that was opened.
 *
 * The previous design failed because nothing on it ever changed scale. Here the
 * contrast is the point: unreadable mass against type at 150px. Every word that
 * is meant to be read sits on the band, never on the texture.
 */
export function Title() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <CodeField delay="0ms" litLabel="บรรทัดเดียวที่ agent เปิดอ่านจริง" />

      {/* The cut opens from its own centre line, so it wipes rather than fades.
          Tailwind v4 sets `translate` as its own property, so the scaleY of the
          animation composes with the centring instead of overriding it. */}
      <div
        data-open
        style={{ "--enter-delay": "1050ms" } as React.CSSProperties}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-y border-line bg-sheet-raised"
      >
        <div className="px-[7%] py-[clamp(1.5rem,4svh,2.75rem)]">
          <div
            data-enter
            style={{ "--enter-delay": "1250ms" } as React.CSSProperties}
            className="flex items-center gap-3.5"
          >
            <LogoMark size={26} className="shrink-0 text-line" />
            <p className="font-mono text-[clamp(0.8125rem,1vw,1.0625rem)] font-medium tracking-[0.2em] text-traced-deep uppercase">
              iCONEXT AI Challenge Day 2026
            </p>
          </div>

          <h1 className="mt-[clamp(0.5rem,1.6svh,1.125rem)] font-mono text-[clamp(2.25rem,8.4vw,9.5rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-ink">
            <span
              data-enter
              style={{ "--enter-delay": "1310ms" } as React.CSSProperties}
              className="block"
            >
              CODE
            </span>
            <span
              data-enter
              style={{ "--enter-delay": "1390ms" } as React.CSSProperties}
              className="block"
            >
              ARCHAEOLOGIST
            </span>
          </h1>

          <p
            data-enter
            style={{ "--enter-delay": "1490ms" } as React.CSSProperties}
            className="mt-[clamp(0.75rem,2.4svh,1.75rem)] max-w-[52ch] text-[clamp(1.125rem,1.85vw,1.875rem)] leading-[1.4] font-medium text-muted"
          >
            รู้โครงสร้างทั้ง repo โดยไม่ต้องอ่านโค้ดทั้งหมด
          </p>

        </div>
      </div>
    </div>
  );
}
