import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 01 — the pain.
 *
 * One minute, and its only job is to make the room feel the problem before
 * anyone offers a solution. So it is a single moment every developer in the
 * hall has had, not a statement about the industry: you are asked to change one
 * thing in code you did not write, and nobody can tell you what it touches.
 *
 * Deliberately the opposite shape from screen 00. That screen was full of code;
 * this one is nearly empty, and what fills it is a question. Two screens in a
 * row built the same way is what made the previous design flat.
 *
 * The accent lands once, on a question mark. On screen 00 it lit the one line
 * that *was* read; here it marks the one thing nobody knows. Same colour, and
 * it means the same thing both times — this is the evidence, or its absence.
 */
const routes: [string, string][] = [
  ["ไล่เปิดอ่านเอง", "หมดไปครึ่งเช้า"],
  ["ให้ AI อ่านทั้ง repo", "ช้า และเปลือง token"],
  ["ให้ AI เดาจากไฟล์ที่หน้าตาคล้ายกัน", "ผิดแล้วไม่รู้ตัว"],
];

function Row({
  label,
  value,
  delay,
  accent,
}: {
  label: string;
  value: string;
  delay: number;
  accent?: boolean;
}) {
  return (
    <div
      data-enter
      style={{ "--enter-delay": `${delay}ms` } as React.CSSProperties}
      className="flex items-baseline gap-4 py-[clamp(0.4rem,1.2svh,0.85rem)] text-[clamp(1.0625rem,1.7vw,1.75rem)]"
    >
      <dt className={accent ? "font-medium text-ink" : "text-muted"}>{label}</dt>
      {/* Dot leaders, the way a contents page sets a thing against its cost. */}
      <dd className="h-0 flex-1 translate-y-[-0.3em] border-b border-dotted border-rule" />
      <dd
        className={
          accent
            ? "font-mono text-[1.6em] leading-none font-semibold text-traced"
            : "text-right text-ink"
        }
      >
        {value}
      </dd>
    </div>
  );
}

export function Pain({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <p
        data-enter
        style={{ "--enter-delay": "220ms" } as React.CSSProperties}
        className="flex flex-wrap items-baseline gap-x-4 gap-y-1"
      >
        <span className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-faint uppercase">
          Task
        </span>
        <span className="text-[clamp(1rem,1.5vw,1.5rem)] text-muted">
          เพิ่ม field เดียวใน <span className="font-mono text-[0.92em] text-ink">OrderService</span>
        </span>
      </p>

      <h2
        data-enter
        style={{ "--enter-delay": "340ms" } as React.CSSProperties}
        className="mt-[clamp(0.75rem,2.4svh,1.75rem)] text-[clamp(2.5rem,6.4vw,6rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-ink"
      >
        แก้แล้วจะพังตรงไหน
      </h2>

      <dl className="mt-[clamp(1.5rem,4.5svh,3rem)] max-w-[min(64rem,86%)]">
        {routes.map(([label, value], n) => (
          <Row key={label} label={label} value={value} delay={620 + n * 150} />
        ))}
        <div className="mt-[clamp(0.5rem,1.6svh,1rem)] border-t border-rule pt-[clamp(0.4rem,1.4svh,0.9rem)]">
          {/* The answer, and the answer is that there isn't one. */}
          <Row label="ไฟล์ที่กระทบจริง" value="?" delay={1240} accent />
        </div>
      </dl>
    </Frame>
  );
}
