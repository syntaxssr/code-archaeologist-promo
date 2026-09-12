"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/**
 * The one moment on the sheet the presenter visibly operates.
 *
 * The radius is scroll-linked rather than time-linked, so it advances under the
 * scroll wheel instead of playing on its own. A judge reads that as a
 * demonstration; a timed animation reads as playback. One such moment is
 * enough — two would be a gimmick.
 */
export function BlastRadius({
  cx,
  cy,
  max,
  hatch,
}: {
  cx: number;
  cy: number;
  max: number;
  /** Rooms the radius reaches, hatched as they come inside it. */
  hatch: { x: number; y: number; w: number; h: number }[];
}) {
  const ref = useRef<SVGGElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!section) return;

    const onScroll = () => {
      const r = section.getBoundingClientRect();
      // 0 when the section's top reaches the middle of the viewport, 1 by the
      // time it has travelled another screen — so the whole sweep happens while
      // the section is the thing being looked at.
      const travelled = window.innerHeight * 0.5 - r.top;
      setP(clamp(travelled / (window.innerHeight * 0.55), 0, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const r = max * p;

  return (
    <g ref={ref}>
      {hatch.map((b, i) => {
        // A room lights up once the circle has actually reached it, not on a
        // timer — so the hatch is always telling the truth about the radius.
        const d = Math.hypot(b.x + b.w / 2 - cx, b.y + b.h / 2 - cy);
        return (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            fill="url(#hatch-traced)"
            opacity={r >= d ? 0.5 : 0}
            style={{ transition: "opacity 180ms linear" }}
          />
        );
      })}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="var(--traced)"
        strokeWidth="2"
        opacity={p > 0.02 ? 1 : 0}
      />
      <circle cx={cx} cy={cy} r="6" fill="var(--traced)" />
    </g>
  );
}
