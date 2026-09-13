import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 03 · 2/3 — what a skill is.
 *
 * Written for the half of the room that does not write code. It carries no
 * jargon it does not immediately pay back, and the comparison is the whole
 * screen: the same question, asked without the skill and with it.
 *
 * The analogy is a new hire rather than a robot or a brain, because the
 * failure it describes is the true one — not stupidity, just not knowing this
 * particular building.
 */
const rows: [string, string, string][] = [
  ["ถามเรื่องโค้ดของบริษัท", "เดาจากโค้ดทั่วโลกที่มันเคยเห็น", "เดินตามแผนที่ของ repo นั้นจริงๆ"],
  ["ถามคำถามเดิมซ้ำ", "ตอบไม่เหมือนเดิมสักครั้ง", "ได้คำตอบเดิมทุกครั้ง"],
  ["จะเริ่มใช้", "ต้องหาเครื่องมือใหม่มาต่อ", "วางไฟล์ไว้ในโปรเจ็ค แค่นั้น"],
];

export function Skill({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-ink"
      >
        skill คือคู่มือหน้างาน ที่ยื่นให้ AI อ่านก่อนลงมือ
      </h2>

      <p
        data-enter
        style={{ "--enter-delay": "300ms" } as React.CSSProperties}
        className="mt-[clamp(0.5rem,1.6svh,1rem)] max-w-[64ch] text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.6] text-muted"
      >
        AI ที่บริษัทใช้อยู่ เหมือนพนักงานใหม่ที่เก่งมาก แต่ยังไม่รู้ว่าระบบของเราวางไว้ยังไง —
        skill คือคู่มือที่ยื่นให้เขา
      </p>

      <dl className="mt-[clamp(1rem,3svh,1.75rem)] border-t border-rule">
        <div className="flex gap-[clamp(1rem,2.4vw,2.5rem)] border-b border-rule py-[clamp(0.4rem,1.2svh,0.7rem)]">
          <dt className="w-[14em] shrink-0" />
          <dd className="min-w-0 flex-1 font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.16em] text-faint uppercase">
            ไม่มี skill
          </dd>
          <dd className="min-w-0 flex-1 font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.16em] text-traced-deep uppercase">
            มี skill
          </dd>
        </div>

        {rows.map(([q, without, withIt], n) => (
          <div
            key={q}
            data-enter
            style={{ "--enter-delay": `${480 + n * 160}ms` } as React.CSSProperties}
            className="flex gap-[clamp(1rem,2.4vw,2.5rem)] border-b border-rule py-[clamp(0.55rem,1.9svh,1.15rem)]"
          >
            <dt className="w-[14em] shrink-0 text-[clamp(1rem,1.35vw,1.4375rem)] leading-[1.4] font-medium text-ink">
              {q}
            </dt>
            <dd className="min-w-0 flex-1 text-[clamp(0.9375rem,1.25vw,1.3125rem)] leading-[1.45] text-faint">
              {without}
            </dd>
            <dd className="min-w-0 flex-1 text-[clamp(0.9375rem,1.25vw,1.3125rem)] leading-[1.45] text-ink">
              {withIt}
            </dd>
          </div>
        ))}
      </dl>
    </Frame>
  );
}
