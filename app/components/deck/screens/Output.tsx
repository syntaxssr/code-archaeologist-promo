import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 07 — what comes out.
 *
 * Six capabilities, and the previous design's mistake was six cards: six boxes
 * of small body copy that nobody can read from the back of a hall. Here they
 * are a register — numbered findings with their identifiers, the way a record
 * gives every observation something you can point at. Dense on purpose; density
 * is what a record looks like, and it is the one screen on the deck that has
 * any.
 *
 * The accent is on the identifiers, because each one names a piece of evidence
 * the tool produced.
 */
const findings: [string, string, string][] = [
  ["CTX 01", "Structure map", "ใครอ้างอิงใคร ระดับ class"],
  ["CTX 02", "Flow map", "ใครเรียกใคร ระดับ method"],
  ["CTX 03", "Blast radius", "แก้ตรงนี้แล้วกระทบไฟล์ไหนบ้าง"],
  ["CTX 04", "Health grade", "เกรด A–F ต่อ entity พร้อมเหตุผล"],
  ["CTX 05", "Security scan", "จุดที่ input ดิบวิ่งถึง SQL หรือ eval"],
  ["CTX 06", "Hotspot ranking", "ไฟล์ที่แก้บ่อยและเสี่ยงที่สุด"],
];

export function Output({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        ทุกอย่างที่มันตอบได้ มีที่มาชี้ได้
      </h2>

      <dl className="mt-[clamp(1.25rem,3.5svh,2.25rem)] border-t border-rule">
        {findings.map(([id, en, th], n) => (
          <div
            key={id}
            data-enter
            style={{ "--enter-delay": `${360 + n * 110}ms` } as React.CSSProperties}
            className="flex flex-wrap items-baseline gap-x-[clamp(1rem,2.2vw,2.25rem)] gap-y-1 border-b border-rule py-[clamp(0.5rem,1.6svh,1rem)]"
          >
            <dt className="w-[7.5em] shrink-0 font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.12em] text-traced-deep uppercase">
              {id}
            </dt>
            <dd className="w-[11em] shrink-0 font-mono text-[clamp(0.875rem,1.15vw,1.1875rem)] tracking-[0.06em] text-ink uppercase">
              {en}
            </dd>
            <dd className="min-w-0 flex-1 text-[clamp(1rem,1.4vw,1.4375rem)] leading-[1.45] text-muted">
              {th}
            </dd>
          </div>
        ))}
      </dl>

      <p
        data-enter
        style={{ "--enter-delay": "1120ms" } as React.CSSProperties}
        className="mt-[clamp(0.875rem,2.4svh,1.5rem)] text-[clamp(0.9375rem,1.2vw,1.25rem)] leading-[1.6] text-faint"
      >
        ทุกบรรทัดข้างบนเปิดดูที่มาได้ว่ามาจาก entity ไหน บรรทัดไหน
      </p>
    </Frame>
  );
}
