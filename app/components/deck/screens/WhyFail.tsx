import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 02 — why today's answer does not work.
 *
 * The damage is the image. A retriever cuts a codebase into fixed-size pieces,
 * and the cut does not care where it lands: it goes through the middle of a
 * function, and what is left on either side no longer knows what it belonged
 * to. So the screen shows one function with the cuts drawn through it.
 *
 * The accent marks the call that can no longer be followed — the evidence the
 * cut destroyed. Same rule as every other screen: orange is evidence, or its
 * absence.
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

export function WhyFail({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        RAG หั่นโค้ดตรงไหนก็ได้ที่ครบ 500 token
      </h2>

      <div className="mt-[clamp(1.5rem,4svh,2.75rem)] grid gap-[clamp(1.5rem,4vw,4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-center">
        <div
          data-enter
          style={{ "--enter-delay": "380ms" } as React.CSSProperties}
          className="font-mono text-[clamp(0.875rem,1.35vw,1.375rem)] leading-[1.85] whitespace-pre"
        >
          {before.map((line, i) => (
            <div key={i}>
              <span className={i === before.length - 1 ? "text-traced" : "text-muted"}>
                {line}
              </span>
              {CUT_AFTER.includes(i) && (
                <span
                  data-enter
                  style={{ "--enter-delay": `${700 + CUT_AFTER.indexOf(i) * 260}ms` } as React.CSSProperties}
                  className="relative my-[0.55em] flex items-center gap-3"
                >
                  <span className="h-px flex-1 border-t border-dashed border-grade-bad/70" />
                  <span className="font-mono text-[0.62em] tracking-[0.18em] text-grade-bad uppercase">
                    cut
                  </span>
                </span>
              )}
            </div>
          ))}
        </div>

        <dl
          data-enter
          style={{ "--enter-delay": "1240ms" } as React.CSSProperties}
          className="space-y-[clamp(0.75rem,2.2svh,1.5rem)] border-l border-rule pl-[clamp(1.25rem,2vw,2rem)]"
        >
          <div>
            <dt className="font-mono text-[clamp(0.8125rem,1vw,1.0625rem)] tracking-[0.16em] text-faint uppercase">
              Scope
            </dt>
            <dd className="mt-1 text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-ink">
              ไม่รู้ว่าอยู่ class ไหน
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[clamp(0.8125rem,1vw,1.0625rem)] tracking-[0.16em] text-faint uppercase">
              Call hierarchy
            </dt>
            <dd className="mt-1 text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-ink">
              <span className="font-mono text-[0.92em] text-traced">self.repo.save</span>{" "}
              เหลืออยู่ แต่ repo คืออะไร ไม่รู้
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[clamp(0.8125rem,1vw,1.0625rem)] tracking-[0.16em] text-faint uppercase">
              Retrieval
            </dt>
            <dd className="mt-1 text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-ink">
              ถามซ้ำ ได้คนละคำตอบ
            </dd>
          </div>
        </dl>
      </div>
    </Frame>
  );
}
