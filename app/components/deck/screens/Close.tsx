import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

const REPO = "github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill";

/**
 * Screen 12 — the close.
 *
 * One sentence to leave the room with, and it is the spine of the whole deck
 * stated plainly: you do not have to open a site to know what is under it. The
 * standby screen's cursor was waiting to do exactly this, and now it has.
 */
export function Close({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "200ms" } as React.CSSProperties}
        className="max-w-[16ch] text-[clamp(2.5rem,7.4vw,7rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-ink"
      >
        ไม่ต้องขุดทั้งพื้นที่ ก็รู้ว่ามีอะไรอยู่ข้างใต้
      </h2>

      <div
        data-enter
        style={{ "--enter-delay": "720ms" } as React.CSSProperties}
        className="mt-[clamp(1.75rem,5svh,3.25rem)] flex flex-wrap items-baseline gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-2 border-t border-rule pt-[clamp(1rem,2.6svh,1.75rem)]"
      >
        <span className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.16em] text-faint uppercase">
          Repository
        </span>
        <span className="font-mono text-[clamp(0.9375rem,1.35vw,1.375rem)] break-all text-traced-deep">
          {REPO}
        </span>
      </div>
    </Frame>
  );
}
