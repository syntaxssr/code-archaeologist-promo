import type { ReactNode } from "react";

/**
 * Raised panel. Depth comes from the surface step and a hairline border —
 * never a shadow, never an edge stripe (design-system/MASTER.md §2, §7).
 */
export function Card({
  accent = false,
  hover = false,
  className,
  children,
}: {
  accent?: boolean;
  hover?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border p-7 transition-colors duration-200 ${
        accent ? "border-accent-deep bg-surface" : "border-border-soft bg-surface"
      } ${hover ? "hover:border-border" : ""} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
