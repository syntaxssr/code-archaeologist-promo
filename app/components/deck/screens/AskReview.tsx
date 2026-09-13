import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 10 · 2/2 — the commands that judge the code.
 *
 * The first page walks the graph; this one reads it and reports. The split is
 * the skill's own — `scripts/query` against `scripts/review` — so the deck is
 * describing a structure that exists rather than tidying the commands into
 * groups for the slide.
 *
 * Same two layers as the page before it: what a person types on the left, what
 * the skill tells the agent to run on the right. Nobody memorises these.
 *
 * No picture on this page. The previous screen carries one, and a second
 * screenshot here would be decoration: this is a reference list, and a
 * reference list is most useful when it is only a reference list.
 *
 * Every command and flag is copied from the skill's usage reference. The last
 * row is the one to say out loud — a judge does not have to run six commands,
 * because one writes the lot.
 */
const asks: [string, string][] = [
  ["โค้ดเบสนี้สุขภาพเป็นยังไง", "analyze.py"],
  ["มีช่องโหว่อะไรบ้างไหม", "scan_security.py"],
  ["มีอะไรรกค้างอยู่ไหม", "debt.py"],
  ["ตรงไหนยังไม่มีเทส", "tests_map.py"],
  ["มีโค้ดก็อปแปะกันไหม", "duplicates.py"],
  ["ใครดูแลส่วนไหน จุดไหนแก้บ่อย", "git_insights.py"],
];

export function AskReview({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-ink"
      >
        อีกกลุ่มไม่ได้หาของ — มันตรวจของที่หาเจอ
      </h2>

      <dl className="mt-[clamp(0.875rem,2.6svh,1.75rem)] border-t border-rule">
        <div className="flex gap-[clamp(0.875rem,2vw,2rem)] border-b border-rule py-[clamp(0.3rem,1svh,0.6rem)]">
          <span className="w-[13em] shrink-0 font-mono text-[clamp(0.6875rem,0.9vw,0.9375rem)] tracking-[0.16em] text-faint uppercase">
            คนพิมพ์แบบนี้
          </span>
          <span className="w-[1.5em] shrink-0" aria-hidden="true" />
          <span className="w-[13em] shrink-0 font-mono text-[clamp(0.6875rem,0.9vw,0.9375rem)] tracking-[0.16em] text-traced-deep uppercase">
            AI เรียกอันนี้ให้เอง
          </span>
        </div>

        {asks.map(([th, cmd], n) => (
          <div
            key={cmd}
            data-enter
            style={{ "--enter-delay": `${320 + n * 130}ms` } as React.CSSProperties}
            className="flex flex-wrap items-baseline gap-x-[clamp(0.875rem,2vw,2rem)] gap-y-1 border-b border-rule py-[clamp(0.45rem,1.5svh,0.95rem)]"
          >
            <dt className="w-[13em] shrink-0 text-[clamp(0.9375rem,1.3vw,1.375rem)] leading-[1.4] text-ink">
              “{th}”
            </dt>
            <dd
              data-lead
              style={{ "--enter-delay": `${410 + n * 130}ms` } as React.CSSProperties}
              className="shrink-0 self-center font-mono text-[clamp(0.875rem,1.2vw,1.25rem)] text-traced"
              aria-hidden="true"
            >
              →
            </dd>
            <dd className="min-w-0 flex-1 font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] leading-[1.5] text-traced-deep">
              {cmd}
            </dd>
          </div>
        ))}

        {/* The one that replaces the six above it. */}
        <div
          data-enter
          style={{ "--enter-delay": "1120ms" } as React.CSSProperties}
          className="flex flex-wrap items-baseline gap-x-[clamp(0.875rem,2vw,2rem)] gap-y-1 border-b border-rule py-[clamp(0.6rem,2svh,1.25rem)]"
        >
          <dt className="w-[13em] shrink-0 text-[clamp(1rem,1.4vw,1.5rem)] leading-[1.4] font-semibold text-ink">
            “ขอรายงานรวมทีเดียว”
          </dt>
          <dd
            data-lead
            style={{ "--enter-delay": "1210ms" } as React.CSSProperties}
            className="shrink-0 self-center font-mono text-[clamp(0.875rem,1.2vw,1.25rem)] text-traced"
            aria-hidden="true"
          >
            →
          </dd>
          <dd className="w-[13em] shrink-0 font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] leading-[1.5] whitespace-nowrap text-traced">
            archaeologist.py report
          </dd>
          <dd className="min-w-0 flex-1 text-[clamp(0.9375rem,1.2vw,1.25rem)] leading-[1.5] text-muted">
            รันทุกอันข้างบน เป็นรายงานเดียว
          </dd>
        </div>
      </dl>

      <p
        data-enter
        style={{ "--enter-delay": "1280ms" } as React.CSSProperties}
        className="mt-[clamp(0.6rem,2svh,1.1rem)] flex-none text-[clamp(0.875rem,1.15vw,1.1875rem)] leading-[1.6] text-faint"
      >
        ทุกข้อคำนวณจากกราฟ ไม่มีข้อไหนที่โมเดลเดา
      </p>
    </Frame>
  );
}
