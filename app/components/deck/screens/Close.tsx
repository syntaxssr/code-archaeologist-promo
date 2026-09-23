import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/** Copied from the skill's README. */
const INSTALL = "npx github:non-nattawut/Code-Archaeologist-LLM-Agent-Skill --harness claude";

/**
 * Screen 08 · 2/2 — the close, after the team.
 *
 * One sentence to leave the room with, and it is the claim the run was rebuilt
 * around: a developer opens a project they have never seen and understands it
 * on the first day. Then the one thing to do about it — the install command,
 * verbatim, in a tile of its own so it reads as something to type rather than
 * as part of the sentence.
 */
export function Close({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "200ms" } as React.CSSProperties}
        className="max-w-[18ch] text-[clamp(2.5rem,6.4vw,6.25rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-ink"
      >
        เปิดโปรเจกต์ที่ไม่เคยเห็น แล้วเข้าใจได้ตั้งแต่วันแรก
      </h2>

      <div
        data-enter
        style={{ "--enter-delay": "720ms" } as React.CSSProperties}
        className="mt-[clamp(1.5rem,5svh,3.25rem)] rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 px-[clamp(1rem,2vw,2.25rem)] py-[clamp(0.875rem,2.4svh,1.75rem)]"
      >
        <p className="font-mono text-[clamp(1rem,1.3vw,1.5rem)] leading-[1.5] break-all text-ink">{INSTALL}</p>
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "880ms" } as React.CSSProperties}
        className="mt-[clamp(0.625rem,1.8svh,1.25rem)] text-[clamp(1rem,1.4vw,1.5rem)] leading-[1.4] text-muted"
      >
        ติดตั้งคำสั่งเดียว · ใช้ได้กับ Claude, Cursor, Windsurf และ Zed
      </p>
    </Frame>
  );
}
