import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 11 — the team.
 *
 * Every archaeological context sheet ends the same way: who recorded it, when,
 * and who checked. This section did not need inventing — it was already the
 * last row of the form, and it is one of the five devices the deck is allowed
 * (MASTER.md §1).
 */
const recorders: [string, string, string][] = [
  ["ณัฐวุฒิ รอดทอง", "อุด้ง", "เขียน skill ทั้งตัว ตั้งแต่ AST scan ถึง Explorer"],
  ["พีรพล จันทะแจ่ม", "BB", "เว็บที่กำลังดูอยู่นี้ และการนำเสนอ"],
];

export function Team({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="border-t border-rule">
        {recorders.map(([name, nick, th], n) => (
          <div
            key={name}
            data-enter
            style={{ "--enter-delay": `${200 + n * 200}ms` } as React.CSSProperties}
            className="flex flex-wrap items-baseline gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-2 border-b border-rule py-[clamp(1rem,3svh,2rem)]"
          >
            <span className="w-[7em] shrink-0 font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.16em] text-faint uppercase">
              Recorder
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[clamp(1.5rem,3vw,2.75rem)] leading-[1.2] font-semibold text-ink">
                {name}{" "}
                <span className="font-mono text-[0.6em] font-medium text-traced-deep">({nick})</span>
              </p>
              <p className="mt-1.5 text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.5] text-muted">
                {th}
              </p>
            </div>
          </div>
        ))}

        <div
          data-enter
          style={{ "--enter-delay": "640ms" } as React.CSSProperties}
          className="flex flex-wrap items-baseline gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-2 border-b border-rule py-[clamp(0.75rem,2.4svh,1.5rem)]"
        >
          <span className="w-[7em] shrink-0 font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.16em] text-faint uppercase">
            Date
          </span>
          <span className="font-mono text-[clamp(1.125rem,1.9vw,1.75rem)] tabular-nums text-ink">
            26.09.2026
          </span>
        </div>
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "820ms" } as React.CSSProperties}
        className="mt-[clamp(1rem,2.6svh,1.75rem)] max-w-[54ch] text-[clamp(0.9375rem,1.2vw,1.25rem)] leading-[1.6] text-faint"
      >
        แบบฟอร์มบันทึกทางโบราณคดีจบด้วยสามช่องนี้เสมอ — ใครบันทึก บันทึกเมื่อไหร่ ใครตรวจ
        ส่วนนี้จึงไม่ได้ถูกคิดขึ้นใหม่
      </p>
    </Frame>
  );
}
