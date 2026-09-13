import type { ReactNode } from "react";
import type { Slide } from "../deck-data";
import { fmt } from "../deck-data";

/**
 * The frame every content screen sits in: its number, a rule, and its name.
 *
 * It is the deck's only piece of repeated furniture, which is the point — the
 * previous design repeated its *content* and went flat. Here what repeats is
 * the edge, and the middle of each screen is free to be a different thing.
 *
 * The rehearsal budget sits at the right. It is for the presenter, not the
 * room, so it is set at label size in the faintest ink that still clears AA.
 */
export function Frame({ slide, children }: { slide: Slide; children: ReactNode }) {
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
        <span className="h-px flex-1 bg-rule" />
        <span className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.16em] text-faint uppercase">
          {slide.en}
        </span>
        <span className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tabular-nums text-faint">
          {fmt(slide.seconds)}
        </span>
      </header>

      <div className="flex min-h-0 flex-1 flex-col justify-center">{children}</div>
    </div>
  );
}
