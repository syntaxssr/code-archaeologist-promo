import type { Slide as SlideType } from "./deck-data";
import { fmt, lastNo } from "./deck-data";
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
      data-tone={slide.tone}
      style={{ transform: `translate3d(${offset * 100}%, 0, 0)` }}
      className="absolute inset-0 bg-sheet transition-transform duration-[520ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
    >
      {Screen ? <Screen slide={slide} /> : <Placeholder slide={slide} />}
    </section>
  );
}

function Placeholder({ slide }: { slide: SlideType }) {
  return (
    <div className="flex h-full flex-col justify-center px-[7%]">
      <div className="flex items-baseline gap-5">
        <span className="font-mono text-base font-medium tracking-[0.16em] tabular-nums text-traced-deep uppercase">
          {slide.no}
        </span>
        <span className="h-px flex-1 bg-rule" />
        <span className="font-mono text-base tracking-[0.16em] tabular-nums text-faint uppercase">
          {fmt(slide.seconds)}
        </span>
      </div>

      <h2 className="mt-10 text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-ink">
        {slide.th}
      </h2>
      <p className="mt-5 font-mono text-[clamp(1rem,1.6vw,1.5rem)] tracking-[0.16em] text-muted uppercase">
        {slide.en}
      </p>

      <p className="mt-14 font-mono text-base tracking-[0.14em] tabular-nums text-faint uppercase">
        Screen {slide.no} of {lastNo} — ยังไม่ใส่เนื้อหา
      </p>
    </div>
  );
}
