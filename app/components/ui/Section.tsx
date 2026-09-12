import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Page section on one of the two grounds — see design-system/MASTER.md §2.
 * Sections alternate `bg` / `layer` so the page reads as stacked strata.
 *
 * Each one holds a full screen and centres its content, so scrolling lands on
 * one layer at a time. `min-h`, not a fixed height: where the content is taller
 * than the viewport — the long sections on a phone — it grows rather than
 * clipping.
 */
export function Section({
  id,
  tone = "bg",
  width = "wide",
  children,
}: {
  id: string;
  tone?: "bg" | "layer";
  width?: "wide" | "narrow";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`flex min-h-svh scroll-mt-20 flex-col justify-center px-6 py-16 sm:py-20 ${
        tone === "layer" ? "bg-layer" : "bg-bg"
      }`}
    >
      <Reveal className={`mx-auto w-full ${width === "narrow" ? "max-w-4xl" : "max-w-6xl"}`}>
        {children}
      </Reveal>
    </section>
  );
}
