import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 10 — against the criteria.
 *
 * The judges score against something. This screen answers it directly rather
 * than hoping they join the dots themselves, and each row points at the screen
 * that already proved it — so it reads as a summary of what was shown, not as a
 * fresh claim at the end.
 *
 * The four criteria below are the ones an internal AI challenge usually scores
 * on. **They are a stand-in: replace them with the organisers' published list
 * as soon as we have it**, because a mapping to the wrong criteria is worse
 * than no mapping at all.
 */
const rows: [string, string, string][] = [
  ["ใช้ได้จริง", "รันกับ repo ของทีมได้วันนี้ ไม่ต้องติดตั้งอะไร", "09"],
  ["ความคิดสร้างสรรค์", "ตอบด้วยการเดินตาม graph แทนการค้นด้วยความคล้าย", "05"],
  ["ผลกระทบ", "ลดเวลาที่หมดไปกับการหาว่าอะไรกระทบอะไร", "01"],
  ["ความสมบูรณ์", "ทำงานได้ครบตั้งแต่สแกนจนถึงหน้าที่เปิดดูได้", "06"],
];

export function Criteria({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(1.75rem,4.2vw,3.75rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        ทุกข้อ ชี้กลับไปที่จอที่เพิ่งดูไป
      </h2>

      <dl className="mt-[clamp(1.25rem,3.5svh,2.25rem)] border-t border-rule">
        {rows.map(([k, th, ref], n) => (
          <div
            key={k}
            data-enter
            style={{ "--enter-delay": `${380 + n * 160}ms` } as React.CSSProperties}
            className="flex flex-wrap items-baseline gap-x-[clamp(1rem,2.2vw,2.25rem)] gap-y-1 border-b border-rule py-[clamp(0.65rem,2svh,1.25rem)]"
          >
            <dt className="w-[10em] shrink-0 text-[clamp(1.0625rem,1.5vw,1.625rem)] font-medium text-ink">
              {k}
            </dt>
            <dd className="min-w-0 flex-1 text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.5] text-muted">
              {th}
            </dd>
            {/* Points back at the screen that already showed it. */}
            <dd className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.14em] tabular-nums text-traced-deep">
              → {ref}
            </dd>
          </div>
        ))}
      </dl>

      <p
        data-enter
        style={{ "--enter-delay": "1080ms" } as React.CSSProperties}
        className="mt-[clamp(0.875rem,2.4svh,1.5rem)] text-[clamp(0.9375rem,1.2vw,1.25rem)] leading-[1.6] text-faint"
      >
        เกณฑ์ข้างบนเป็นฉบับร่าง — เปลี่ยนเป็นเกณฑ์จริงของผู้จัดทันทีที่ได้มา
      </p>
    </Frame>
  );
}
