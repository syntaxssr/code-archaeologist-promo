import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 02 — why today's answer does not work.
 *
 * The damage is the image. A retriever cuts a codebase into fixed-size pieces,
 * and the cut does not care where it lands: it goes through the middle of a
 * function, and what is left on either side no longer knows what it belonged
 * to. So the wide tile is one function with the cuts drawn through it, and the
 * three tiles beside it are what the cut cost — cause on the left at twice the
 * size, consequence on the right.
 *
 * No token count on the screen. The size of the window is a setting, it differs
 * between tools, and a number nobody can check is worth less than the picture
 * of the cut.
 *
 * The accent marks the call that can no longer be followed — the evidence the
 * cut destroyed. Same rule as every other screen: orange is evidence, or its
 * absence. The cuts themselves are the bad grade's red: they are damage, not
 * evidence.
 */
const before = [
  "class OrderService:",
  "    def place_order(self, payload):",
  "        session = self.auth.verify(payload.token)",
  "        order = Order.from_payload(payload)",
  "        self.validate(order)",
  "        return self.repo.save(order)",
];

/** Where the fixed-size window happens to land. Nowhere meaningful, which is
 *  the entire problem. */
const CUT_AFTER = [2, 4];

const costs: [string, React.ReactNode][] = [
  ["Scope", "ไม่รู้ว่าอยู่ class ไหน"],
  [
    "Call hierarchy",
    <>
      <span className="font-mono text-[0.92em] text-traced">self.repo.save</span> เหลืออยู่ แต่ repo คืออะไร ไม่รู้
    </>,
  ],
  ["Retrieval", "ถามซ้ำ ได้คนละคำตอบ"],
];

const tile = "rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 p-[clamp(1rem,1.7vw,2rem)]";

export function WhyFail({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        RAG หั่นโค้ดตรงไหนก็ได้
      </h2>

      <div className="mt-[clamp(1.25rem,4svh,2.5rem)] grid gap-[clamp(0.625rem,1vw,1.25rem)] lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div
          data-enter
          style={{ "--enter-delay": "380ms" } as React.CSSProperties}
          className={`${tile} font-mono text-[clamp(1rem,1.2vw,1.375rem)] leading-[1.8] whitespace-pre text-muted`}
        >
          {before.map((line, i) => (
            <div key={i}>
              <span className={i === before.length - 1 ? "text-traced" : undefined}>{line}</span>
              {CUT_AFTER.includes(i) && (
                <span
                  data-enter
                  style={{ "--enter-delay": `${700 + CUT_AFTER.indexOf(i) * 260}ms` } as React.CSSProperties}
                  className="my-[0.5em] flex items-center gap-3"
                >
                  <span className="h-px flex-1 border-t border-dashed border-grade-bad" />
                  {/* 0.8em, not smaller: it is a word the room has to read,
                      and the floor for those is 16px. */}
                  <span className="text-[0.8em] tracking-[0.18em] text-grade-bad uppercase">cut</span>
                </span>
              )}
            </div>
          ))}
        </div>

        <dl className="grid gap-[clamp(0.625rem,1vw,1.25rem)]">
          {costs.map(([term, cost], n) => (
            <div
              key={term}
              data-enter
              style={{ "--enter-delay": `${1240 + n * 150}ms` } as React.CSSProperties}
              className={tile}
            >
              <dt className="font-mono text-[clamp(1rem,0.95vw,1.0625rem)] tracking-[0.16em] text-faint uppercase">
                {term}
              </dt>
              <dd className="mt-[clamp(0.35rem,1.2svh,0.75rem)] text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.45] text-ink">
                {cost}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Frame>
  );
}
