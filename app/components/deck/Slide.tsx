import type { Slide as SlideType } from "./deck-data";
import { fmt } from "./deck-data";

/**
 * A screen. Right now it carries only its name — the point of this pass is to
 * feel the run: how many stops there are, how the transition reads, whether the
 * pacing is right. Content lands one section at a time after that.
 *
 * `aria-hidden` on the inactive screens keeps a screen reader on the one that
 * is actually showing, since all thirteen stay mounted in the track.
 */
export function Slide({
  slide,
  active,
  total,
  offset,
}: {
  slide: SlideType;
  active: boolean;
  total: number;
  /** Screens behind sit one width to the left, screens ahead one to the right.
   *  The sign is what gives the transition its direction. */
  offset: number;
}) {
  return (
    <section
      id={slide.id}
      aria-hidden={!active}
      inert={!active}
      style={{ transform: `translate3d(${offset * 100}%, 0, 0)` }}
      className="absolute inset-0 flex flex-col justify-center px-[7%] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
    >
      <div className="flex items-baseline gap-5">
        <span className="font-mono text-base font-medium uppercase tracking-[0.16em] text-traced-deep tabular-nums">
          {slide.no}
        </span>
        <span className="h-px flex-1 bg-rule" />
        <span className="font-mono text-base uppercase tracking-[0.16em] text-faint tabular-nums">
          {fmt(slide.seconds)}
        </span>
      </div>

      <h2 className="mt-10 text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
        {slide.th}
      </h2>
      <p className="mt-5 font-mono text-[clamp(1rem,1.6vw,1.5rem)] uppercase tracking-[0.16em] text-muted">
        {slide.en}
      </p>

      <p className="mt-14 font-mono text-base uppercase tracking-[0.14em] text-faint tabular-nums">
        Screen {slide.no} of {String(total - 1).padStart(2, "0")} — ยังไม่ใส่เนื้อหา
      </p>
    </section>
  );
}
