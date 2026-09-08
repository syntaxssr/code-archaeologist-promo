/**
 * Brand lockup — see design-system/MASTER.md §4.
 * Mark = "trench": site grid, three strata, a dashed shaft tracing down to the amber find.
 */

export function LogoMark({ size = 24, className }: { size?: number; className?: string }) {
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
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="2 2.4"
      />
      <circle cx="12" cy="17.6" r="2.3" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark size={size} className="text-fg" />
      <span className="font-mono text-sm font-semibold tracking-[-0.01em] text-fg">
        Code<span className="text-accent">Archaeologist</span>
      </span>
    </span>
  );
}
