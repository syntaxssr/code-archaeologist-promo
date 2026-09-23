import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 08 — when you reach for it.
 *
 * Four moments every developer in the hall has had, in the order they happen
 * to a project rather than by job title: the first day on code you did not
 * write, the pull request you are about to approve, the old code you are about
 * to touch, and the night something breaks. A room remembers a moment it has
 * lived through; it does not remember an org chart.
 *
 * The tiles are equal because none of the four is the main one — which moment
 * matters most depends on who is watching.
 *
 * Latin mono names the moment, Thai says what the tool gives you in it; the two
 * never share a line.
 */
const moments: [string, string, string][] = [
  ["Day 1", "เข้าโปรเจกต์ที่ไม่ได้เขียนเอง", "รู้โครงสร้างตั้งแต่วันแรก"],
  ["Pull request", "ก่อนกด approve", "รู้ว่าการแก้นี้กระทบอะไรบ้าง"],
  ["Refactor", "ก่อนแตะของเก่า", "เห็นว่าใครเรียกมันอยู่"],
  ["Incident", "ไล่จากอาการถึงจุดแก้", "ไม่ต้องรอเจ้าของโค้ด"],
];

export function Use({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        หยิบมาใช้ตอนไหน
      </h2>

      <div className="mt-[clamp(1.25rem,4svh,2.5rem)] grid grid-cols-2 gap-[clamp(0.625rem,1vw,1.25rem)]">
        {moments.map(([when, what, gives], n) => (
          <div
            key={when}
            data-enter
            style={{ "--enter-delay": `${420 + n * 150}ms` } as React.CSSProperties}
            className="rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 p-[clamp(1rem,1.9vw,2.25rem)]"
          >
            <p className="font-mono text-[clamp(1rem,0.95vw,1.0625rem)] font-medium tracking-[0.16em] text-traced-deep uppercase">
              {when}
            </p>
            <p className="mt-[clamp(0.5rem,1.4svh,0.9rem)] text-[clamp(1.125rem,1.9vw,2.125rem)] leading-[1.3] font-medium text-ink">
              {what}
            </p>
            <p className="mt-[clamp(0.25rem,0.8svh,0.5rem)] text-[clamp(1rem,1.4vw,1.625rem)] leading-[1.4] text-muted">
              {gives}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}
