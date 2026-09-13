import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 10 — against the criteria.
 *
 * These are the organisers' published weights, received 13 September 2026, not
 * a guess: Impact 30, a real path to adoption 30, creativity 20, presentation
 * 10, audience vote 10.
 *
 * The shape of that list is itself the argument, so the screen says it out
 * loud: sixty of the hundred points are for whether the thing is worth having
 * and can actually be adopted. Cleverness is worth twenty. Each row points at
 * the screen that already proved it, so this reads as a summary of what the
 * room has seen rather than a fresh claim made at the end.
 */
const rows: { k: string; th: string; ref: string; pts: number }[] = [
  {
    k: "Impact ต่อบริษัท",
    th: "เวลาที่หมดไปกับการหาว่าแก้ตรงนี้แล้วอะไรพัง หายไปจากทุกงานแก้",
    ref: "08",
    pts: 30,
  },
  {
    k: "ต่อยอด / ใช้ได้จริง",
    th: "รันกับ repo ของทีมได้วันนี้ ไม่ต้องย้ายระบบ ไม่ต้องตั้งเซิร์ฟเวอร์",
    ref: "09",
    pts: 30,
  },
  {
    k: "ความคิดสร้างสรรค์",
    th: "เดินตามการเรียกจริงในโค้ด แทนการค้นด้วยความคล้ายของข้อความ",
    ref: "05",
    pts: 20,
  },
  {
    k: "Presentation",
    th: "นี่คือตัวงานจริง ไม่ใช่สไลด์ที่พูดถึงงาน",
    ref: "ทั้งเด็ค",
    pts: 10,
  },
  {
    k: "คะแนนผู้เข้าร่วม",
    th: "คนดูโหวตจากของที่เห็นว่าทำงานจริงตรงหน้า",
    ref: "06",
    pts: 10,
  },
];

export function Criteria({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-ink"
      >
        60 จาก 100 ไม่ได้วัดว่าฉลาดแค่ไหน วัดว่าเอาไปใช้ได้จริงไหม
      </h2>

      <dl className="mt-[clamp(1rem,3svh,1.75rem)] border-t border-rule">
        {rows.map(({ k, th, ref, pts }, n) => (
          <div
            key={k}
            data-enter
            style={{ "--enter-delay": `${360 + n * 140}ms` } as React.CSSProperties}
            className="flex flex-wrap items-baseline gap-x-[clamp(0.875rem,2vw,2rem)] gap-y-1 border-b border-rule py-[clamp(0.5rem,1.7svh,1rem)]"
          >
            <dt className="w-[9.5em] shrink-0 text-[clamp(1rem,1.4vw,1.5rem)] font-medium text-ink">
              {k}
            </dt>
            <dd className="min-w-0 flex-1 text-[clamp(0.9375rem,1.25vw,1.25rem)] leading-[1.5] text-muted">
              {th}
            </dd>
            {/* Points back at the screen that already showed it. */}
            <dd
              className={`w-[6.5em] shrink-0 whitespace-nowrap text-right font-mono text-[clamp(0.75rem,1vw,1.0625rem)] tabular-nums text-traced-deep ${
                /^\d+$/.test(ref) ? "tracking-[0.12em]" : ""
              }`}
            >
              → {ref}
            </dd>
            {/* Weight carried by contrast, not colour — the two thirties lead. */}
            <dd
              className={`w-[2.5em] shrink-0 text-right font-mono text-[clamp(1.25rem,2.1vw,2.25rem)] leading-none tabular-nums ${
                pts >= 20 ? "text-ink" : "text-faint"
              }`}
            >
              {pts}
            </dd>
          </div>
        ))}
      </dl>

      <p
        data-enter
        style={{ "--enter-delay": "1160ms" } as React.CSSProperties}
        className="mt-[clamp(0.75rem,2.2svh,1.25rem)] text-[clamp(0.9375rem,1.2vw,1.25rem)] leading-[1.6] text-faint"
      >
        โจทย์ขอให้เกิดอย่างน้อย 1 ข้อ — อันนี้ตอบ 2 ข้อ:{" "}
        <span className="text-line">ลดเวลาทำงาน</span> และ{" "}
        <span className="text-line">เพิ่มคุณภาพ</span>
      </p>
    </Frame>
  );
}
