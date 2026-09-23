import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 04 — ready for work.
 *
 * Merges the old "always up to date" and "it stays local" screens. In a company
 * the question is never features first; it is the three things someone asks
 * before they let a tool near the source. So the screen is those questions,
 * asked in the room's own words, each with a short answer — read one row at a
 * time, which is about what seventy-five seconds holds.
 *
 * The facts, and where they come from:
 *   - local: scanning, building the map and opening the explorer are scripts
 *     and a file on disk, with no network and no vector database (the skill's
 *     README: "100% offline"). See Local.tsx.
 *   - fresh: the map is rebuilt by scripts, so rebuilding it costs no tokens.
 *   - install: one npx command.
 *
 * The line under the rule is the honest half, kept from Local.tsx: when someone
 * asks the agent a question, the notes it reads do go to the model.
 */
const rows = [
  { q: "โค้ดออกนอกเครื่องไหม", a: "ไม่ · ทำในเครื่องทั้งหมด", tag: "offline · no vector database" },
  { q: "แผนที่จะเก่าไหม", a: "สแกนใหม่ ไม่เสีย token", tag: "scripts, not the model" },
  { q: "ติดตั้งยากไหม", a: "คำสั่งเดียว", tag: "npx" },
];

export function Company({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        คำถามแรกของบริษัท
      </h2>

      <dl className="mt-[clamp(1.25rem,4.5svh,3rem)] flex flex-col">
        {rows.map((r, i) => (
          <div
            key={r.q}
            data-enter
            style={{ "--enter-delay": `${400 + i * 220}ms` } as React.CSSProperties}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] items-baseline gap-x-[clamp(1rem,3vw,3rem)] border-t border-rule py-[clamp(0.75rem,2.6svh,1.75rem)]"
          >
            <dt className="text-[clamp(1.125rem,1.8vw,2rem)] leading-[1.35] text-muted">{r.q}</dt>
            <dd>
              <p className="text-[clamp(1.5rem,2.9vw,2.75rem)] leading-[1.2] font-semibold tracking-[-0.015em] text-ink">
                {r.a}
              </p>
              <p className="mt-[clamp(0.2rem,0.6svh,0.4rem)] font-mono text-[clamp(1rem,1.05vw,1.125rem)] tracking-[0.08em] text-traced-deep">
                {r.tag}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      {/* The honest half. */}
      <p
        data-enter
        style={{ "--enter-delay": "1200ms" } as React.CSSProperties}
        className="border-t border-rule pt-[clamp(0.75rem,2.2svh,1.5rem)] text-[clamp(1rem,1.35vw,1.5rem)] leading-[1.4] text-muted"
      >
        ที่ออกไปมีแค่ตอนถาม AI — ส่งเฉพาะโน้ตที่เกี่ยวกับคำถาม ไม่ใช่ทั้ง repo
      </p>
    </Frame>
  );
}
