import type { Slide as SlideType } from "./deck-data";
import { lastNo } from "./deck-data";
import { screens } from "./screens";

/**
 * A screen of the deck.
 *
 * All thirteen stay mounted so a transition has something to slide to, so the
 * inactive ones are hidden from assistive tech and made inert — otherwise a
 * screen reader would walk the whole deck and Tab would land on controls nobody
 * can see.
 *
 * Screens that have not been designed yet fall back to a placeholder carrying
 * the name, the number and the rehearsal budget, so the shape of the run stays
 * visible while it is built one section at a time.
 */
export function Slide({
  slide,
  active,
  offset,
}: {
  slide: SlideType;
  active: boolean;
  /** Screens behind sit one width to the left, screens ahead one to the right.
   *  The sign is what gives the transition its direction. */
  offset: number;
}) {
  const Screen = screens[slide.id];

  return (
    <section
      // Prefixed, so the URL fragment does not match it. A bare id={slide.id}
      // let the browser treat "#title" as a fragment target and scroll this
      // overflow-hidden container to bring it into view — on top of our own
      // transform, which landed the deck exactly one screen off on every deep
      // link. The hash is our state, not a scroll anchor.
      id={`screen-${slide.id}`}
      aria-hidden={!active}
      inert={!active}
      data-live={active ? "" : undefined}
      // Each screen paints its own ground, so a dark screen and a light one can
      // be on stage together mid-transition without either bleeding through.
      // The still grid is part of that ground, the same on every screen.
      data-tone={slide.tone}
      style={{ transform: `translate3d(${offset * 100}%, 0, 0)` }}
      className="absolute inset-0 bg-sheet bg-grid transition-transform duration-[520ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
    >
      {Screen ? <Screen slide={slide} /> : <Placeholder slide={slide} />}
    </section>
  );
}

function Placeholder({ slide }: { slide: SlideType }) {
  return (
    <div className="flex h-full flex-col justify-center px-[7%]">
      <h2 className="text-[clamp(2.5rem,6.4vw,6rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-ink">
        {slide.th}
      </h2>

      <p className="mt-8 font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.16em] text-faint uppercase">
        Screen {slide.no} of {lastNo} — ยังไม่ใส่เนื้อหา
      </p>
    </div>
  );
}
