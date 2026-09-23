import Image from "next/image";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import graph from "@/public/shots/explorer-graph.png";

/**
 * Screen 03 — the demo. Five minutes, the longest thing on the deck,
 * because it is what decides the room.
 *
 * The board is not the demo; it is what the room should watch for while the
 * presenter drives the real Explorer. Three things, in the order they will
 * happen, and the first one is the new claim: someone who has never seen this
 * repository reads a note and understands it.
 *
 * The picture is the sample repository, not a customer's, and the caption says
 * so — a screenshot presented as something it is not would cost more than it
 * buys. It is also the fallback: if the live demo will not start, everything
 * being described is still on the screen.
 */
const watch: [string, string][] = [
  ["01", "เปิด repo ที่ไม่เคยเห็น อ่านโน้ตรู้เรื่อง"],
  ["02", "กดดูว่าใครเรียกใคร"],
  ["03", "แก้จุดเดียว กระทบอะไรบ้าง"],
];

export function Demo({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="flex min-h-0 flex-1 items-stretch gap-[clamp(0.625rem,1.4vw,1.75rem)]">
        <div className="flex w-[32%] shrink-0 flex-col gap-[clamp(0.5rem,0.9vw,1rem)]">
          <h2
            data-enter
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
            className="flex-none text-[clamp(2rem,4.6vw,4.25rem)] leading-[1] font-semibold tracking-[-0.03em] text-ink"
          >
            ของจริง
          </h2>

          <ol className="flex min-h-0 flex-1 flex-col gap-[clamp(0.5rem,0.9vw,1rem)]">
            {watch.map(([no, th], n) => (
              <li
                key={no}
                data-enter
                style={{ "--enter-delay": `${520 + n * 160}ms` } as React.CSSProperties}
                className="flex min-h-0 flex-1 flex-col justify-center rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 p-[clamp(0.875rem,1.5vw,1.75rem)]"
              >
                <span className="font-mono text-[clamp(1rem,0.95vw,1.0625rem)] font-medium tabular-nums text-traced-deep">
                  {no}
                </span>
                <span className="mt-[clamp(0.25rem,0.9svh,0.6rem)] text-[clamp(1.0625rem,1.5vw,1.75rem)] leading-[1.35] text-ink">
                  {th}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <figure
          data-enter
          style={{ "--enter-delay": "360ms" } as React.CSSProperties}
          className="flex min-h-0 flex-1 flex-col"
        >
          <div className="min-h-0 flex-1 overflow-hidden rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2">
            <Image
              src={graph}
              alt="หน้าต่าง explorer.html แสดงกราฟการเรียกระดับเมธอดของโค้ดเบสตัวอย่าง"
              priority
              className="h-full w-full object-contain object-center"
            />
          </div>
          <figcaption className="mt-[clamp(0.35rem,1svh,0.65rem)] font-mono text-[clamp(1rem,0.95vw,1.0625rem)] tracking-[0.14em] text-faint uppercase">
            explorer.html · flow map · sample repo
          </figcaption>
        </figure>
      </div>
    </Frame>
  );
}
