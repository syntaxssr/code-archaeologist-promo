import { Frame } from "./Frame";
import { Shot } from "./Shot";
import type { ScreenProps } from "./index";
import graph from "@/public/shots/explorer-graph.png";

/**
 * Screen 06 — the demo. Two and a half minutes, the longest thing on the deck,
 * because it is what decides the room.
 *
 * The board no longer has to describe the tool in prose: the tool's own window
 * is on it. The words shrink to the three things a judge should watch for, so
 * they know what they are looking at before the screen changes to the live
 * Explorer.
 *
 * The picture is the sample repository, not a customer's, and the caption says
 * so — a screenshot presented as something it is not would cost more than it
 * buys.
 */
const watch: [string, string][] = [
  ["01", "นับว่าเปิดกี่ไฟล์"],
  ["02", "กดดูว่าใครเรียกใคร"],
  ["03", "แก้จุดเดียว กระทบอะไรบ้าง"],
];

export function Demo({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="flex min-h-0 flex-1 items-stretch gap-[clamp(1.5rem,3.5vw,3.5rem)]">
        <div className="flex w-[34%] shrink-0 flex-col justify-center">
          <h2
            data-enter
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
            className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] font-semibold tracking-[-0.03em] text-ink"
          >
            ของจริง
          </h2>

          <ol className="mt-[clamp(1.1rem,3svh,2rem)] border-t border-rule">
            {watch.map(([no, th], n) => (
              <li
                key={no}
                data-enter
                style={{ "--enter-delay": `${520 + n * 160}ms` } as React.CSSProperties}
                className="flex items-baseline gap-[clamp(0.75rem,1.5vw,1.5rem)] border-b border-rule py-[clamp(0.5rem,1.5svh,0.95rem)]"
              >
                <span className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] font-medium tabular-nums text-traced-deep">
                  {no}
                </span>
                <span className="text-[clamp(0.9375rem,1.25vw,1.3125rem)] leading-[1.4] text-ink">
                  {th}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <Shot
          src={graph}
          alt="หน้าต่าง explorer.html แสดงกราฟการเรียกระดับเมธอด 53 โหนด 33 เส้น พร้อมคะแนนสุขภาพ"
          caption="explorer.html · flow map · sample repo"
          className="min-w-0 flex-1"
          priority
        />
      </div>
    </Frame>
  );
}
