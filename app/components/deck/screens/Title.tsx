import { CodeField } from "./CodeField";

/**
 * Screen 00 — the cover.
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
      <CodeField delay="40ms" />

      {/* The cut opens from its own centre line, so it wipes rather than fades.
          Tailwind v4 sets `translate` as its own property, so the scaleY of the
          animation composes with the centring instead of overriding it. */}
      <div
        data-open
        style={{ "--enter-delay": "200ms" } as React.CSSProperties}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-y border-line bg-sheet-raised"
      >
        <div className="px-[7%] pt-[clamp(1.25rem,3.6svh,2.5rem)] pb-[clamp(0.875rem,2.4svh,1.5rem)]">
          <p
            data-enter
            style={{ "--enter-delay": "460ms" } as React.CSSProperties}
            className="font-mono text-[clamp(0.8125rem,1vw,1.0625rem)] font-medium tracking-[0.2em] text-traced-deep uppercase"
          >
            iCONEXT AI Challenge Day 2026
          </p>

          <h1 className="mt-[clamp(0.5rem,1.6svh,1.125rem)] font-mono text-[clamp(2.25rem,8.4vw,9.5rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-ink">
            <span
              data-enter
              style={{ "--enter-delay": "520ms" } as React.CSSProperties}
              className="block"
            >
              CODE
            </span>
            <span
              data-enter
              style={{ "--enter-delay": "600ms" } as React.CSSProperties}
              className="block"
            >
              ARCHAEOLOGIST
            </span>
          </h1>

          <p
            data-enter
            style={{ "--enter-delay": "700ms" } as React.CSSProperties}
            className="mt-[clamp(0.75rem,2.2svh,1.75rem)] max-w-[52ch] text-[clamp(1.125rem,1.85vw,1.875rem)] leading-[1.4] font-medium text-muted"
          >
            รู้โครงสร้างทั้ง repo โดยไม่ต้องอ่านโค้ดทั้งหมด
          </p>

          {/* The sign-off stays on the band. On the texture it would be sitting
              on top of code and neither would be readable. */}
          <div
            data-enter
            style={{ "--enter-delay": "800ms" } as React.CSSProperties}
            className="mt-[clamp(0.875rem,2.4svh,1.75rem)] flex flex-wrap items-baseline gap-x-8 gap-y-1 border-t border-rule pt-[clamp(0.625rem,1.6svh,1rem)] font-mono text-[clamp(0.8125rem,0.95vw,1.0625rem)] tracking-[0.14em] text-faint uppercase"
          >
            <span>
              Team 03 — <span className="text-muted">ณัฐวุฒิ รอดทอง · พีรพล จันทะแจ่ม</span>
            </span>
            <span className="ml-auto tabular-nums">26.09.2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
