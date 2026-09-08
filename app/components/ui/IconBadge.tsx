import type { LucideIcon } from "lucide-react";

/**
 * Icon in a circle — the section-level visual anchor.
 * `solid` fills amber (reserved for the one "found" step per flow).
 */
export function IconBadge({
  icon: Icon,
  size = 44,
  solid = false,
}: {
  icon: LucideIcon;
  size?: number;
  solid?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full border ${
        solid ? "border-accent bg-accent" : "border-border bg-surface-2"
      }`}
      style={{ width: size, height: size }}
    >
      <Icon
        size={Math.round(size * 0.45)}
        strokeWidth={1.5}
        className={solid ? "text-on-accent" : "text-accent"}
      />
    </div>
  );
}
