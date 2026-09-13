import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 09 — at iCONEXT.
 *
 * A minute on the thing every internal pitch forgets: who here actually uses
 * this, on what, starting when. Three roles and a three-step adoption path, and
 * nothing that needs budget or a new platform — because the honest selling
 * point is that there is nothing to install.
 */
const roles: [string, string][] = [
  ["Developer", "เข้าโปรเจกต์ใหม่แล้วรู้โครงสร้างภายในวันแรก แทนที่จะเป็นสัปดาห์แรก"],
  ["Reviewer", "เห็นว่า PR นี้กระทบอะไรบ้าง ก่อนกด approve"],
  ["MA / Support", "ตามรอยบั๊กจากอาการไปถึงจุดที่แก้ โดยไม่ต้องรอเจ้าของโค้ด"],
];

const steps: [string, string][] = [
  ["01", "รันกับ repo เดียวที่ทีมปวดหัวที่สุด"],
  ["02", "แชร์ explorer.html ให้ทั้งทีมเปิดดู"],
  ["03", "ถ้ามีประโยชน์ ค่อยใส่เข้า pipeline ให้อัปเดตเอง"],
];

export function Use({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="max-w-[24ch] text-[clamp(1.75rem,4.2vw,3.75rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        ไม่ต้องติดตั้งอะไร ไม่ต้องขอ budget
      </h2>

      <div className="mt-[clamp(1.25rem,3.5svh,2.25rem)] grid gap-[clamp(1.5rem,3.5vw,3.5rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <dl className="border-t border-rule">
          {roles.map(([who, th], n) => (
            <div
              key={who}
              data-enter
              style={{ "--enter-delay": `${380 + n * 150}ms` } as React.CSSProperties}
              className="border-b border-rule py-[clamp(0.6rem,1.9svh,1.15rem)]"
            >
              <dt className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.14em] text-traced-deep uppercase">
                {who}
              </dt>
              <dd className="mt-1.5 text-[clamp(1rem,1.4vw,1.4375rem)] leading-[1.5] text-ink">
                {th}
              </dd>
            </div>
          ))}
        </dl>

        <div
          data-enter
          style={{ "--enter-delay": "900ms" } as React.CSSProperties}
          className="border border-rule p-[clamp(1.25rem,2.2vw,2rem)]"
        >
          <p className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-faint uppercase">
            เริ่มพรุ่งนี้ได้
          </p>
          <ol className="mt-[clamp(0.75rem,2svh,1.25rem)]">
            {steps.map(([no, th]) => (
              <li
                key={no}
                className="flex items-baseline gap-4 border-t border-rule py-[clamp(0.5rem,1.6svh,0.95rem)] first:border-t-0 first:pt-0"
              >
                <span className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tabular-nums text-faint">
                  {no}
                </span>
                <span className="text-[clamp(0.9375rem,1.25vw,1.25rem)] leading-[1.5] text-muted">
                  {th}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Frame>
  );
}
