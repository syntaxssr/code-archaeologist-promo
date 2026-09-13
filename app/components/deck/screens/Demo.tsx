import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 06 — the demo. Two and a half minutes, the longest thing on the deck,
 * because it is what decides the room.
 *
 * The screen itself is deliberately almost empty: the demo is the real tool,
 * not a picture of it, and this is the board that frames it. It states the
 * question being answered live and the three things to watch, so a judge knows
 * what they are looking for before the screen changes to the tool.
 *
 * Leaving it as a holding board is also the honest option while the Explorer
 * screenshot is still outstanding — a drawn mock here would be a picture of a
 * demo, which is worth less than the demo.
 */
const watch: [string, string][] = [
  ["01", "ถามคำถามเดียวกับจอที่แล้ว แล้วดูว่ามันเปิดกี่ไฟล์"],
  ["02", "กดที่ entity ไหนก็ได้ แล้วดูว่าใครเรียกมัน ใครถูกมันเรียก"],
  ["03", "แก้จุดหนึ่ง แล้วให้มันบอกว่ากระทบอะไรบ้าง"],
];

export function Demo({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(3rem,8vw,7.5rem)] leading-[1] font-semibold tracking-[-0.03em] text-ink"
      >
        ของจริง
      </h2>

      <p
        data-enter
        style={{ "--enter-delay": "320ms" } as React.CSSProperties}
        className="mt-[clamp(0.75rem,2.4svh,1.5rem)] max-w-[52ch] text-[clamp(1.125rem,1.8vw,1.875rem)] leading-[1.45] text-muted"
      >
        ไม่ใช่ภาพหน้าจอ ไม่ใช่วิดีโอ — เปิด{" "}
        <span className="font-mono text-[0.9em] text-ink">explorer.html</span> จากเครื่องนี้เลย
      </p>

      <ol className="mt-[clamp(1.75rem,5svh,3.25rem)] max-w-[min(58rem,88%)] border-t border-rule">
        {watch.map(([no, th], n) => (
          <li
            key={no}
            data-enter
            style={{ "--enter-delay": `${600 + n * 170}ms` } as React.CSSProperties}
            className="flex items-baseline gap-[clamp(1rem,2vw,2rem)] border-b border-rule py-[clamp(0.6rem,1.8svh,1.1rem)]"
          >
            <span className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tabular-nums text-traced-deep">
              {no}
            </span>
            <span className="text-[clamp(1.0625rem,1.55vw,1.625rem)] leading-[1.45] text-ink">
              {th}
            </span>
          </li>
        ))}
      </ol>
    </Frame>
  );
}
