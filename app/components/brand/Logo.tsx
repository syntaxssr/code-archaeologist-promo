/**
 * Brand lockup — see design-system/MASTER.md §4.
 * Mark = "trench": site grid, three strata, a dashed shaft tracing down to the
 * find. The dashed shaft is the same convention the sheet uses everywhere else
 * — dashed is the route you have not evidenced yet; the node at its foot is
 * where it ended up.
 */

export function LogoMark({
  size = 26,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <path d="M3 15.5H21" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <path
        d="M12 5.5V14.6"
        stroke="var(--traced)"
        strokeWidth="1.6"
        strokeDasharray="2 2.4"
      />
      <circle cx="12" cy="17.6" r="2.2" fill="var(--traced)" />
    </svg>
  );
}

export function Logo({ size = 26, className }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={size} className="text-line" />
      <span className="font-mono text-base font-semibold tracking-[-0.01em] text-ink">
        Code<span className="text-traced-deep">Archaeologist</span>
      </span>
    </span>
  );
}
