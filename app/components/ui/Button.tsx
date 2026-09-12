import type { ReactNode } from "react";

/**
 * Link-styled button. `primary` is the amber fill and there is at most one
 * per view — amber is the find, not decoration (design-system/MASTER.md §2).
 */
export function ButtonLink({
  href,
  variant = "primary",
  onSky = false,
  external = false,
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  /** Sitting on the daylight ground rather than the dark one. */
  onSky?: boolean;
  external?: boolean;
  children: ReactNode;
}) {
  const base =
    "flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-6 py-2.5 font-mono text-sm font-semibold transition-colors duration-200";

  const styles =
    variant === "primary"
      ? "bg-accent text-on-accent hover:bg-accent-hover"
      : onSky
        ? "border border-sky-border bg-sky-surface text-sky-fg-muted hover:border-accent-deep hover:text-sky-fg"
        : "border border-border text-fg-muted hover:border-accent hover:text-fg";

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
