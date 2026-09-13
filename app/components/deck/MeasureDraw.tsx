"use client";

import { useEffect } from "react";

/**
 * Measures every drawable path once, so each one plays out over its own length
 * rather than a shared guess. Without it a long route finishes before a short
 * one it was drawn after, and the order stops reading as an order.
 *
 * Path length is in the SVG's own user units, so it does not change when the
 * viewBox is scaled — measuring once is enough.
 */
export function MeasureDraw() {
  useEffect(() => {
    document.querySelectorAll<SVGGeometryElement>("[data-draw]").forEach((p) => {
      if (typeof p.getTotalLength !== "function") return;
      p.style.setProperty("--draw-len", String(Math.ceil(p.getTotalLength())));
    });
  }, []);

  return null;
}
