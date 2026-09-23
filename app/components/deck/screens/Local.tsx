import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Not in the run — merged into screen 06, ready for work (Company.tsx).
 *
 * In a company the first thing that blocks adoption is not price or features,
 * it is "does our source leave the building". Most tools in this space index
 * the whole repository into a third-party vector database, and the answer
 * becomes "yes, all of it, continuously".
 *
 * This one's answer is a keynote figure: scanning, building the map and opening
 * the explorer send the code out zero times — they are scripts and a file on
 * disk, with no network and no vector database (the skill's README: "100%
 * offline"). The line under the rule is the honest half, said plainly: when
 * someone asks the agent a question, the notes it reads do go to the model.
 *
 * This screen used to carry a token figure — 0.55% of the repository sent per
 * answer. It came out when testing showed the skill does not reliably save
 * tokens, and the deck no longer argues from token counts anywhere.
 */
export function Local({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <p
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(1.125rem,1.8vw,2rem)] leading-[1.4] text-muted"
      >
        สแกน สร้างแผนที่ และเปิดดู — ส่งโค้ดออกนอกเครื่อง
      </p>

      <p
        data-enter
        style={{ "--enter-delay": "360ms" } as React.CSSProperties}
        className="mt-[clamp(0.25rem,1svh,0.75rem)] text-[clamp(5rem,15vw,17rem)] leading-[0.9] font-semibold tracking-[-0.05em] tabular-nums text-ink"
      >
        0
      </p>

      <p
        data-enter
        style={{ "--enter-delay": "620ms" } as React.CSSProperties}
        className="mt-[clamp(0.75rem,2.4svh,1.5rem)] text-[clamp(1.125rem,1.8vw,2rem)] leading-[1.4] text-ink"
      >
        ครั้ง · ทำงานในเครื่องทั้งหมด แผนที่อยู่ใน git ของเราเอง
      </p>
      <p
        data-enter
        style={{ "--enter-delay": "760ms" } as React.CSSProperties}
        className="mt-[clamp(0.25rem,0.8svh,0.5rem)] font-mono text-[clamp(1rem,1.05vw,1.125rem)] tracking-[0.08em] text-traced-deep"
      >
        offline · no vector database · no upload
      </p>

      {/* The honest half. */}
      <p
        data-enter
        style={{ "--enter-delay": "1000ms" } as React.CSSProperties}
        className="mt-[clamp(1.25rem,4.5svh,3rem)] border-t border-rule pt-[clamp(0.75rem,2.2svh,1.5rem)] text-[clamp(1rem,1.35vw,1.5rem)] leading-[1.4] text-muted"
      >
        ที่ออกไปมีแค่ตอนถาม AI — ส่งเฉพาะโน้ตที่เกี่ยวกับคำถาม ไม่ใช่ทั้ง repo
      </p>
    </Frame>
  );
}
