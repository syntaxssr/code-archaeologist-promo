import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 09 · 2/2 — where the code goes.
 *
 * In a company the first thing that blocks adoption is not price or features,
 * it is "does our source leave the building". Most tools in this space answer
 * badly: they index the whole repository into a third-party vector database and
 * the answer becomes "yes, all of it, continuously".
 *
 * This one answers narrowly, and the deck's own measurement is the evidence —
 * the five notes a traced answer reads are 0.55% of the repository, so the
 * saving screen 08 claims as cost is the same fact as the exposure claimed
 * here.
 *
 * The last row is the honest one and it stays. Claiming "nothing ever leaves"
 * would be false while the agent is a hosted model, and a judge who catches
 * that takes the other four rows with it.
 */
const rows: [string, string][] = [
  ["ไม่มี vector DB", "ทั้งหมดเป็นไฟล์ JSON ในเครื่อง"],
  ["แผนที่อยู่ใน repo เราเอง", "commit ลง git ได้ diff ได้"],
  ["explorer เปิดตอนปิดเน็ตได้", "0 การเรียกเน็ต"],
  ["ตอนถาม ส่งแค่โน้ตบนเส้นทาง", "732 จาก 133,932 tokens — 0.55%"],
];

export function Local({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-ink"
      >
        เครื่องมือแบบนี้ส่วนใหญ่ต้องอัปโหลดโค้ดขึ้นคลาวด์ — อันนี้ไม่ต้อง
      </h2>

      <dl className="mt-[clamp(0.875rem,2.6svh,1.75rem)] border-t border-rule">
        {rows.map(([k, proof], n) => (
          <div
            key={k}
            data-enter
            style={{ "--enter-delay": `${340 + n * 150}ms` } as React.CSSProperties}
            className="flex flex-wrap items-baseline gap-x-[clamp(0.875rem,2vw,2rem)] gap-y-1 border-b border-rule py-[clamp(0.5rem,1.7svh,1.05rem)]"
          >
            <dt className="min-w-0 flex-1 text-[clamp(1.0625rem,1.5vw,1.625rem)] leading-[1.35] font-medium text-ink">
              {k}
            </dt>
            <dd className="w-[18em] shrink-0 font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] leading-[1.5] text-traced-deep">
              {proof}
            </dd>
          </div>
        ))}
      </dl>

      {/* The row that keeps the other four believable. */}
      <div
        data-enter
        style={{ "--enter-delay": "1000ms" } as React.CSSProperties}
        className="mt-[clamp(0.75rem,2.4svh,1.5rem)] border border-rule p-[clamp(0.875rem,1.8vw,1.5rem)]"
      >
        <p className="font-mono text-[clamp(0.6875rem,0.9vw,0.9375rem)] tracking-[0.16em] text-faint uppercase">
          ที่ต้องพูดตรงๆ
        </p>
        <p className="mt-2 max-w-[80ch] text-[clamp(0.9375rem,1.25vw,1.25rem)] leading-[1.6] text-muted">
          <span className="text-ink">โน้ตที่ AI อ่าน ยังวิ่งผ่าน API</span> — แต่ไม่กี่ใบ ไม่ใช่ทั้ง repo
        </p>
      </div>
    </Frame>
  );
}
