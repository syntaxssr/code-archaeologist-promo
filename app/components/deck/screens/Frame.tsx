import type { ReactNode } from "react";
import type { Slide } from "../deck-data";

/**
 * The frame every content screen sits in: the margins, and the screen's topic
 * in the top-left corner.
 *
 * The topic is the slide's Thai name from deck-data, in the same place and the
 * same quiet type on every screen, so anyone who looks up mid-sentence can tell
 * what the screen is about. It replaced an earlier header — the section number
 * and a rule — that told the room where it was but not what it was looking at;
 * the progress bar at the foot of the deck already does the where.
 */
export function Frame({ slide, children }: { slide: Slide; children: ReactNode }) {
  return (
    <div className="absolute inset-0 flex flex-col px-[7%] pt-[clamp(2.25rem,6svh,4rem)] pb-[clamp(4rem,9svh,6rem)]">
      <p
        data-enter
        style={{ "--enter-delay": "40ms" } as React.CSSProperties}
        // Ink and semibold, with room under it: several screens open with a
        // muted lead line of their own, and the topic must not read as part of
        // it.
        className="mb-[clamp(1rem,3.5svh,2.25rem)] flex-none text-[clamp(1.25rem,1.9vw,2.125rem)] leading-[1.3] font-semibold text-ink"
      >
        {slide.th}
      </p>
      <div className="flex min-h-0 flex-1 flex-col justify-center">{children}</div>
    </div>
  );
}
