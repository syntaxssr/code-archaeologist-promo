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
    <div className={center ? "text-center" : ""}>
      <span className="text-xs font-semibold tracking-[0.2em] text-violet-500">
        {kicker.toUpperCase()}
      </span>
      <h2 className="mt-3 text-3xl font-bold text-[#18181B] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
