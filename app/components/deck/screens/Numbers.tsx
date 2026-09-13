import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 08 — the numbers.
 *
 * These are measured, not argued. On 13 September 2026 the skill was installed
 * and run against its own repository — 34 files, 11,881 lines — and against
 * this one. The path `trace_path.py` actually returns for "how does
 * langs_extract.main reach _text" is five nodes, and reading those five notes
 * costs 732 of the repository's 133,932 tokens; the blast radius of a function
 * with 41 callers reads 5,824. Both maps rebuild from scratch in about half a
 * second.
 *
 * The right-hand box carries what the measurement does not cover, because the
 * fastest way to lose a room is to let it find the caveat first: the baseline
 * is the worst case of reading everything, the count comes from a GPT
 * tokenizer rather than Claude's, and only three of the seventeen graphed
 * languages have been run on real code.
 *
 * A tool whose whole claim is "we only read what we can justify reading"
 * cannot put an unjustified number on a screen.
 */
const measured: [string, string, string][] = [
  ["ONE TRACED ANSWER", "0.55%", "อ่าน 732 จาก 133,932 tokens — เส้นทาง 5 โหนดที่ trace คืนมา"],
  ["ONE BLAST RADIUS", "4.3%", "อ่าน 5,824 tokens — ครอบ 42 โหนดที่กระทบกัน"],
  ["FULL REBUILD", "0.5 วิ", "สแกน 11,881 บรรทัดใหม่ทั้งหมด ทั้งสองแผนที่"],
];

export function Numbers({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="grid gap-[clamp(1.5rem,4vw,4rem)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        <div>
          <p
            data-enter
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
            className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-traced-deep uppercase"
          >
            Measured
          </p>
          <p
            data-enter
            style={{ "--enter-delay": "220ms" } as React.CSSProperties}
            className="mt-2 text-[clamp(1.25rem,2.4vw,2.25rem)] leading-[1.25] font-semibold text-ink"
          >
            รันกับ repo ของ skill เอง
          </p>

          <dl className="mt-[clamp(1rem,3svh,1.75rem)] border-t border-rule">
            {measured.map(([k, v, th], n) => (
              <div
                key={k}
                data-enter
                style={{ "--enter-delay": `${420 + n * 160}ms` } as React.CSSProperties}
                className="border-b border-rule py-[clamp(0.5rem,1.8svh,1rem)]"
              >
                <div className="flex items-baseline gap-4">
                  <dt className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.14em] text-faint uppercase">
                    {k}
                  </dt>
                  <dd className="h-0 flex-1 translate-y-[-0.3em] border-b border-dotted border-rule" />
                  <dd className="font-mono text-[clamp(1.25rem,2.4vw,2.5rem)] leading-none font-semibold text-traced">
                    {v}
                  </dd>
                </div>
                <dd className="mt-1.5 text-[clamp(0.9375rem,1.2vw,1.1875rem)] leading-[1.55] text-muted">
                  {th}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          data-enter
          style={{ "--enter-delay": "980ms" } as React.CSSProperties}
          className="border border-rule p-[clamp(1.25rem,2.4vw,2.25rem)]"
        >
          <p className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-faint uppercase">
            Limits
          </p>
          <p className="mt-2 text-[clamp(1.25rem,2.4vw,2.25rem)] leading-[1.25] font-semibold text-ink">
            ตัวเลขนี้ไม่ครอบอะไรบ้าง
          </p>
          <ul className="mt-[clamp(0.75rem,2svh,1.25rem)] space-y-[clamp(0.45rem,1.3svh,0.85rem)] text-[clamp(0.9375rem,1.25vw,1.25rem)] leading-[1.55] text-muted">
            <li>
              <span className="text-ink">เทียบกับการอ่านทั้ง repo</span> ซึ่งเป็นกรณีแย่ที่สุด
            </li>
            <li>
              <span className="text-ink">นับด้วย tokenizer ของ GPT</span> สัดส่วนใช้ได้ ตัวเลขดิบของ
              Claude ไม่ตรงเป๊ะ
            </li>
            <li>
              <span className="text-ink">รันกับโค้ดจริงแล้ว 3 ภาษา</span> คือ Python, JS/TS และ Java —
              อีก 14 ภาษาผ่าน fixture
            </li>
          </ul>
          <p className="mt-[clamp(0.75rem,2svh,1.25rem)] border-t border-rule pt-[clamp(0.625rem,1.6svh,1rem)] text-[clamp(0.9375rem,1.2vw,1.1875rem)] leading-[1.6] text-faint">
            เขียนแยกไว้ตรงนี้ เพราะตัวเลขที่ยังพิสูจน์ไม่ได้
            ไม่ควรอยู่ปนกับตัวเลขที่พิสูจน์ได้
          </p>
        </div>
      </div>
    </Frame>
  );
}
