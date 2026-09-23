import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 07 — what it can do.
 *
 * Every command on one screen, in two tiles, because the split is the skill's
 * own: `scripts/query` walks the graph, `scripts/review` judges what it finds.
 * This used to be two screens; folding it into one says "this is all of it"
 * without anyone having to count.
 *
 * Each row leads with what a person types, in their own words, and the command
 * the skill tells the agent to run sits underneath in small mono. USAGE.md
 * opens by saying most people never run these by hand — the agent does — so the
 * words are the part to read and the command is the proof that the answer came
 * from a script, not from a model's memory.
 *
 * Every command and flag is copied from the skill's usage reference.
 */
const groups: { label: string; asks: [string, string][] }[] = [
  {
    label: "Navigate",
    asks: [
      ["โค้ดเรื่องนี้อยู่ไฟล์ไหน", "search.py --name X"],
      ["จากหน้าเว็บวิ่งไปถึง database ยังไง", "trace_path.py --from A --to B"],
      ["แก้ตรงนี้ จะพังตรงไหนบ้าง", "trace_path.py --impact-of X"],
      ["PR ที่เปิดอยู่ กระทบอะไรบ้าง", "trace_path.py --impact-of-diff"],
      ["ตัวนี้ทำอะไร", "context.py --node X"],
      ["แผนที่ยังตรงกับโค้ดล่าสุดไหม", "archaeologist.py check"],
    ],
  },
  {
    label: "Review",
    asks: [
      ["โค้ดเบสนี้สุขภาพเป็นยังไง", "analyze.py"],
      ["มีช่องโหว่อะไรบ้างไหม", "scan_security.py"],
      ["มีอะไรรกค้างอยู่ไหม", "debt.py"],
      ["ตรงไหนยังไม่มีเทส", "tests_map.py"],
      ["มีโค้ดก็อปแปะกันไหม", "duplicates.py"],
      ["ใครดูแลส่วนไหน จุดไหนแก้บ่อย", "git_insights.py"],
    ],
  },
];

export function Ask({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        พิมพ์เป็นภาษาคน AI ไปเรียกเอง
      </h2>

      <div className="mt-[clamp(0.75rem,2.6svh,1.75rem)] grid min-h-0 flex-1 grid-cols-2 gap-[clamp(0.625rem,1vw,1.25rem)]">
        {groups.map((g, gi) => (
          <section
            key={g.label}
            data-enter
            style={{ "--enter-delay": `${360 + gi * 200}ms` } as React.CSSProperties}
            className="flex min-h-0 flex-col rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 p-[clamp(1rem,1.9vw,2.25rem)]"
          >
            <p className="flex-none font-mono text-[clamp(1rem,0.95vw,1.0625rem)] font-medium tracking-[0.16em] text-faint uppercase">
              {g.label}
            </p>
            <dl className="mt-[clamp(0.5rem,1.6svh,1rem)] flex min-h-0 flex-1 flex-col justify-between">
              {g.asks.map(([said, cmd]) => (
                <div key={cmd}>
                  <dt className="text-[clamp(1rem,1.45vw,1.625rem)] leading-[1.35] text-ink">{said}</dt>
                  <dd className="font-mono text-[clamp(1rem,0.95vw,1.0625rem)] leading-[1.45] text-traced-deep">{cmd}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </Frame>
  );
}
