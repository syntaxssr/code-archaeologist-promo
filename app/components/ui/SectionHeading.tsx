/**
 * Kicker + title, carrying the stratum rule — the site's one repeated motif
 * (design-system/MASTER.md §5). Titles may center; prose below never does.
 */
export function SectionHeading({
  kicker,
  title,
  center = true,
}: {
  kicker: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "flex flex-col items-center text-center" : ""}>
      <span className="stratum max-w-[180px]" />
      <span className="mt-4 font-mono text-xs font-medium tracking-[0.18em] text-accent">
        {kicker.toUpperCase()}
      </span>
      {/* Sans, not mono: titles carry Thai, and JetBrains Mono has no Thai glyphs. */}
      <h2 className="mt-3 text-3xl font-semibold text-fg sm:text-4xl">{title}</h2>
    </div>
  );
}
