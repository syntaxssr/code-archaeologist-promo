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
 * Three tiles for the three ways that go today, and one tile twice their size
 * for the thing none of them gives you. The size is the argument: the wide tile
 * is where the eye lands, and what is in it is a question mark. The three above
 * it are equal because they are equally bad.
 *
 * They arrive one at a time so the presenter can walk them, and the wide one
 * last.
 *
 * The accent lands once, on that question mark. On screen 00 it lit the line
 * that *was* read; here it marks the one thing nobody knows. Same colour, and
 * it means the same thing both times — this is the evidence, or its absence.
 */
const routes: [string, string][] = [
  ["ไล่เปิดอ่านเอง", "หมดไปครึ่งเช้า"],
  // Not "wastes tokens": the deck no longer argues cost. What is true of every
  // model is that a large repository does not fit in what it can read at once.
  ["ให้ AI อ่านทั้ง repo", "ช้า และอ่านไม่หมด"],
  ["ให้ AI เดาจากไฟล์ที่คล้ายกัน", "ผิดแล้วไม่รู้ตัว"],
];

/** A tile: grey one step off the ground, no border and no shadow, because
 *  depth on this deck is value and line weight only. */
const tile =
  "flex flex-col justify-between rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 p-[clamp(1rem,1.9vw,2.25rem)]";

export function Pain({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <p
        data-enter
        style={{ "--enter-delay": "220ms" } as React.CSSProperties}
        className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[clamp(1rem,1.5vw,1.5rem)] text-muted"
      >
        เพิ่ม field เดียวใน <span className="font-mono text-[0.92em] text-ink">OrderService</span>
      </p>

      <h2
        data-enter
        style={{ "--enter-delay": "340ms" } as React.CSSProperties}
        className="mt-[clamp(0.5rem,1.6svh,1.25rem)] text-[clamp(2.25rem,5vw,5rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        แก้แล้วจะพังตรงไหน
      </h2>

      <div className="mt-[clamp(1.25rem,4svh,2.75rem)] grid grid-cols-3 gap-[clamp(0.625rem,1vw,1.25rem)]">
        {routes.map(([label, cost], n) => (
          <div
            key={label}
            data-enter
            style={{ "--enter-delay": `${620 + n * 150}ms` } as React.CSSProperties}
            className={`${tile} min-h-[clamp(7rem,17svh,11rem)] gap-[clamp(0.75rem,2svh,1.5rem)]`}
          >
            <p className="text-[clamp(1rem,1.5vw,1.75rem)] leading-[1.35] text-ink">{label}</p>
            <p className="text-[clamp(1rem,1.6vw,1.875rem)] leading-none font-medium text-muted">{cost}</p>
          </div>
        ))}
      </div>

      {/* The answer, and the answer is that there isn't one. */}
      <div
        data-enter
        style={{ "--enter-delay": "1240ms" } as React.CSSProperties}
        className={`${tile} mt-[clamp(0.625rem,1vw,1.25rem)] gap-[clamp(0.5rem,1.6svh,1.25rem)]`}
      >
        <p className="text-[clamp(1rem,1.5vw,1.75rem)] leading-none text-muted">ไฟล์ที่กระทบจริง</p>
        <p className="font-mono text-[clamp(3rem,7vw,7.5rem)] leading-[0.8] font-semibold text-traced">?</p>
      </div>
    </Frame>
  );
}
