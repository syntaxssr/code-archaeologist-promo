import type { ReactNode } from "react";
import { slides, type Slide } from "../deck-data";

/**
 * The frame every content screen sits in: the margins, and the screen's topic
 * in the top-left corner.
 *
 * The topic is the slide's Thai name from deck-data, in the same place and the
 * same type on every screen, so anyone who looks up mid-sentence can tell what
 * the screen is about. It replaced an earlier header — the section number and
 * a rule — that told the room where it was but not what it was looking at; the
 * progress bar at the foot of the deck already does the where.
 *
 * A section that runs to several screens names itself instead, with its steps
 * in a row beneath: every step shown, the current one in ink with an orange
 * rule under it, the others faint. The room sees both where it is in the story
 * and how much of it is left.
 */
const topic = "text-[clamp(1.25rem,1.9vw,2.125rem)] leading-[1.3] font-semibold text-ink";

export function Frame({ slide, children }: { slide: Slide; children: ReactNode }) {
  const steps = slide.section ? slides.filter((s) => s.no === slide.no) : null;

  return (
    <div className="absolute inset-0 flex flex-col px-[7%] pt-[clamp(2.25rem,6svh,4rem)] pb-[clamp(4rem,9svh,6rem)]">
      <header
        data-enter
        style={{ "--enter-delay": "40ms" } as React.CSSProperties}
        // Room under it: several screens open with a muted lead line of their
        // own, and the topic must not read as part of it.
        className="mb-[clamp(1rem,3.5svh,2.25rem)] flex-none"
      >
        <p className={topic}>{slide.section ?? slide.th}</p>
        {steps ? (
          <ol className="mt-[clamp(0.35rem,1svh,0.75rem)] flex flex-wrap gap-x-[clamp(1rem,2.2vw,2.5rem)] gap-y-1">
            {steps.map((s, n) => {
              const current = s.id === slide.id;
              return (
                <li
                  key={s.id}
                  aria-current={current ? "step" : undefined}
                  className={`border-b-2 pb-[0.15em] text-[clamp(1rem,1.35vw,1.5rem)] leading-[1.35] ${
                    current ? "border-traced font-semibold text-ink" : "border-transparent text-faint"
                  }`}
                >
                  <span className="tabular-nums">{n + 1}</span> {s.th}
                </li>
              );
            })}
          </ol>
        ) : null}
      </header>
      <div className="flex min-h-0 flex-1 flex-col justify-center">{children}</div>
    </div>
  );
}
