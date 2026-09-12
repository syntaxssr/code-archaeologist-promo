/**
 * Brand lockup — see design-system/MASTER.md §4.
 * Mark = "trench": site grid, three strata, a dashed shaft tracing down to the amber find.
 */

export function LogoMark({
  size = 24,
  accent = "var(--accent)",
  className,
}: {
  size?: number;
  /** Amber is too pale on daylight — pass --accent-deep there. */
  accent?: string;
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
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <path d="M3 15.5H21" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
      <path
        d="M12 5.5V15"
        stroke={accent}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="2 2.4"
      />
      <circle cx="12" cy="17.6" r="2.3" fill={accent} />
    </svg>
  );
}

export function Logo({
  size = 24,
  onSky = false,
  className,
}: {
  size?: number;
  /** Sitting on the daylight ground rather than the dark one. */
  onSky?: boolean;
  className?: string;
}) {
  const ink = onSky ? "text-sky-fg" : "text-fg";
  const mark = onSky ? "text-accent-deep" : "text-accent";

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark size={size} accent={onSky ? "var(--accent-deep)" : "var(--accent)"} className={ink} />
      <span className={`font-mono text-sm font-semibold tracking-[-0.01em] ${ink}`}>
        Code<span className={mark}>Archaeologist</span>
      </span>
    </span>
  );
}
