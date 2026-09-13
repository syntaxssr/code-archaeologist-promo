import type { ReactNode } from "react";
import { part, type Slide } from "../deck-data";

/**
 * The frame every content screen sits in: its number, a rule, and its name.
 *
 * It is the deck's only piece of repeated furniture, which is the point — the
 * previous design repeated its *content* and went flat. Here what repeats is
 * the edge, and the middle of each screen is free to be a different thing.
 *
 * The number, the part marker when the section runs to several screens, and a
 * rule. Nothing else. The screen's English name and its
 * rehearsal budget used to sit at the right, but both are notes to the
 * presenter and the room can read them too — the budgets live in DECK.md and in
 * deck-data, which is where a note to the presenter belongs.
 */
export function Frame({ slide, children }: { slide: Slide; children: ReactNode }) {
  const p = part(slide.id);

  return (
    <div className="absolute inset-0 flex flex-col px-[7%] pt-[clamp(2.25rem,6svh,4rem)] pb-[clamp(4rem,9svh,6rem)]">
      <header
        data-enter
        style={{ "--enter-delay": "40ms" } as React.CSSProperties}
        className="flex flex-none items-center gap-5"
      >
        <span className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.16em] tabular-nums text-traced-deep">
          {slide.no}
        </span>
        {/* A section that runs to several screens says so, so the room knows it
            is still inside the same idea rather than watching it restart. */}
        {p ? (
          <span className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.14em] tabular-nums text-faint">
            {p.n}/{p.of}
          </span>
        ) : null}
        <span className="h-px flex-1 bg-rule" />
      </header>

      <div className="flex min-h-0 flex-1 flex-col justify-center">{children}</div>
    </div>
  );
}
