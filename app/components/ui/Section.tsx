import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Page section on one of the two grounds — see design-system/MASTER.md §2.
 * Sections alternate `bg` / `layer` so the page reads as stacked strata.
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
      className={`scroll-mt-20 px-6 py-24 ${tone === "layer" ? "bg-layer" : "bg-bg"}`}
    >
      <Reveal className={`mx-auto ${width === "narrow" ? "max-w-4xl" : "max-w-6xl"}`}>
        {children}
      </Reveal>
    </section>
  );
}
