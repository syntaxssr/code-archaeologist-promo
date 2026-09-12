import type { ReactNode } from "react";

/**
 * Link-styled button. Rectangular with a 2px radius rather than a pill: the
 * sheet's whole vocabulary is hairline rectangles and a pill reads as imported
 * SaaS furniture. It is still a plainly modern control — the archive frames
 * the instrument, it never operates it (design-system/MASTER.md §8).
 *
 * `primary` is the one traced fill, and there is at most one per view.
 */
export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  children: ReactNode;
}) {
  const base =
    "inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-[2px] px-6 py-3 font-mono text-base font-medium uppercase tracking-[0.08em] transition-colors duration-200";

  const styles =
    variant === "primary"
      ? "bg-traced text-on-traced hover:bg-traced-deep"
      : "border border-rule bg-sheet-raised text-muted hover:border-traced-deep hover:text-ink";

  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
