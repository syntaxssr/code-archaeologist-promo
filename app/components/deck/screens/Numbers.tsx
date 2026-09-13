import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 08 — the numbers.
 *
 * The rule on this deck is that every number is real. These now come from the
 * skill's own repository rather than from the shape of an argument: seventeen
 * graphed languages, the five notes one trace actually reads, and the zero
 * network calls the explorer makes.
 *
 * The screen is still built in two halves, because one number is still missing
 * and one claim is weaker than it looks. The right-hand box carries both: the
 * token saving has not been measured against a real repository, and only three
 * of the seventeen languages have been run on real code.
 *
 * That is not a weakness to hide. A tool whose whole claim is "we only read
 * what we can justify reading" cannot put an unjustified number on a screen —
 * and a judge who catches one will not believe the rest.
 */
const measured: [string, string, string][] = [
  ["LANGUAGES", "17", "ทุกภาษามี fixture ตรวจทั้ง node, edge, route และบรรทัด"],
  ["NOTES PER ANSWER", "5", "≈ 1,500 tokens แทนการอ่านทั้ง repository"],
  ["NETWORK CALLS", "0", "explorer.html เปิดจากเครื่องได้ ปิดเน็ตก็ยังเปิด"],
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
            นับจาก repo ของ skill จริง
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
            ยังไม่ได้วัด 2 ข้อ
          </p>
          <p className="mt-[clamp(0.75rem,2svh,1.25rem)] text-[clamp(0.9375rem,1.25vw,1.25rem)] leading-[1.6] text-muted">
            <span className="text-ink">token ที่ประหยัดได้</span> — ยังไม่ได้จับกับ repository
            ของทีมเรา จะวัดให้ได้ก่อนวันนำเสนอ
          </p>
          <p className="mt-[clamp(0.5rem,1.4svh,0.9rem)] text-[clamp(0.9375rem,1.25vw,1.25rem)] leading-[1.6] text-muted">
            <span className="text-ink">17 ภาษาผ่าน fixture</span> — แต่รันกับโค้ดจริงแล้ว 3 ภาษา
            คือ Python, JS/TS และ Java
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
