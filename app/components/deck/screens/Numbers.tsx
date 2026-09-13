import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 08 — the numbers.
 *
 * The rule on this deck is that every number is real, and the honest position
 * today is that one of them is not measured yet. So the screen is built in two
 * halves and says which is which: what the demo the room just watched can
 * prove, and what is still an estimate with its basis stated.
 *
 * That is not a weakness to hide. A tool whose whole claim is "we only read
 * what we can justify reading" cannot put an unjustified number on a screen —
 * and a judge who catches one will not believe the rest.
 */
const measured: [string, string, string][] = [
  ["NODES READ", "4", "จำนวน entity ที่อยู่บนเส้นทาง จากคำถามในเดโม"],
  ["EDGES FOLLOWED", "3", "ทุก hop ชี้บรรทัดต้นทางได้"],
  ["RUNS", "เท่ากันทุกครั้ง", "ถามซ้ำได้คำตอบเดิม ไม่ใช่ similarity"],
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
            วัดจากเดโมที่เพิ่งดูไป
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
            Estimate
          </p>
          <p className="mt-2 text-[clamp(1.25rem,2.4vw,2.25rem)] leading-[1.25] font-semibold text-ink">
            token ที่ประหยัดได้
          </p>
          <p className="mt-[clamp(0.75rem,2svh,1.25rem)] text-[clamp(0.9375rem,1.25vw,1.25rem)] leading-[1.6] text-muted">
            คำนวณจากสัดส่วน entity ที่ต้องอ่าน ยังไม่ได้จับกับ repository จริง —
            <span className="text-ink"> จะวัดให้ได้ก่อนวันนำเสนอ</span>
          </p>
          <p className="mt-[clamp(0.75rem,2svh,1.25rem)] border-t border-rule pt-[clamp(0.625rem,1.6svh,1rem)] text-[clamp(0.9375rem,1.2vw,1.1875rem)] leading-[1.6] text-faint">
            เขียนแยกไว้ตรงนี้ เพราะตัวเลขที่ยังพิสูจน์ไม่ได้
            ไม่ควรอยู่ปนกับตัวเลขที่พิสูจน์ได้
          </p>
        </div>
      </div>
    </Frame>
  );
}
