const rows: [string, string][] = [
  ["PROJECT", "CODE ARCHAEOLOGIST"],
  ["SHEET", "01 OF 01"],
  ["SCALE", "1 SHEET = 1 REPO"],
  ["INSTRUMENTS", "PYTHON STDLIB. NOTHING ELSE."],
  ["SITE", "iCONEXT AI CHALLENGE DAY"],
  ["DATE", "26.09.2026"],
];

/**
 * The title block, bottom-right of the sheet as it is on every drawing ever
 * issued. It is the last thing on the page because it is the last thing you
 * fill in.
 */
export function TitleBlock() {
  return (
    <div className="w-full max-w-[520px] border border-line">
      {rows.map(([k, v], i) => (
        <div
          key={k}
          className={`flex items-baseline gap-4 px-5 py-2 ${
            i === 0 ? "" : "border-t border-rule"
          }`}
        >
          <span className="w-[132px] shrink-0 font-mono text-base uppercase tracking-[0.12em] text-faint">
            {k}
          </span>
          <span
            className={`font-mono uppercase tracking-[0.06em] ${
              i === 0 ? "text-lg font-semibold text-ink" : "text-base text-muted"
            }`}
          >
            {v}
          </span>
        </div>
      ))}
    </div>
  );
}
