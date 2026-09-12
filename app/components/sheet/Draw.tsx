"use client";

import { useEffect, useRef } from "react";

/**
 * The draw-on-scroll trigger. Measures every [data-draw] path so each one
 * plays out over its own length — otherwise a long wall finishes before a
 * short one it was drawn after, and the survey order stops reading as an
 * order. Fires once; a line that redrew every time you scrolled past would be
 * decoration, and the motif is that this is a record being made.
 */
export function Draw({
  children,
  className,
  threshold = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.querySelectorAll<SVGGeometryElement>("[data-draw]").forEach((p) => {
      if (typeof p.getTotalLength !== "function") return;
      p.style.setProperty("--draw-len", String(Math.ceil(p.getTotalLength())));
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          el.setAttribute("data-draw-run", "");
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
