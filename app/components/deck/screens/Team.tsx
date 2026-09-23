import Image from "next/image";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import { bb, udong } from "./team-photos";

/**
 * Screen 06 · 1/2 — the team, just before the close.
 *
 * Two portraits side by side in the middle of the screen, a name and one line
 * under each — the plainest way to put faces to the work. At this point in the
 * run the room has watched fifteen minutes of a tool and has not yet seen the two
 * people who built it; nothing else on the screen should compete with that.
 *
 * Left is the presentation side, right is the code side — the same split the
 * work actually had.
 *
 * A portrait that has not been taken yet draws a marked empty frame. A
 * silhouette or a stock face would read as a real answer to a question we have
 * not answered.
 */
const people = [
  { photo: bb, name: "พีรพล จันทะแจ่ม", nick: "BB", role: "ฝั่งงานนำเสนอ" },
  { photo: udong, name: "ณัฐวุฒิ รอดทอง", nick: "อุด้ง", role: "ฝั่งโค้ด ทั้ง skill" },
];

export function Team({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="flex min-h-0 flex-1 items-center justify-center gap-[clamp(1.5rem,4vw,4.5rem)]">
        {people.map((p, n) => (
          <figure
            key={p.name}
            data-enter
            style={{ "--enter-delay": `${220 + n * 200}ms` } as React.CSSProperties}
            className="flex min-h-0 flex-col items-center"
          >
            {/* Height-driven, so both portraits are the same size whatever the
                screen's shape, and the names underneath always fit. */}
            <div className="aspect-[3/4] h-[min(52svh,30vw)] overflow-hidden rounded-[clamp(0.75rem,1.4vw,1.75rem)] bg-sheet-2">
              {p.photo ? (
                <Image src={p.photo} alt={`${p.name} (${p.nick})`} className="h-full w-full object-cover object-center" />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
                  <span className="text-[clamp(1rem,1.2vw,1.25rem)] text-muted">รอรูป</span>
                  <span className="font-mono text-[clamp(1rem,0.95vw,1.0625rem)] tracking-[0.08em] text-faint">
                    3:4 · 1400 × 1866
                  </span>
                </div>
              )}
            </div>

            <figcaption className="mt-[clamp(0.75rem,2.4svh,1.5rem)] text-center">
              <p className="text-[clamp(1.25rem,2.1vw,2.25rem)] leading-[1.2] font-semibold text-ink">{p.name}</p>
              <p className="mt-[clamp(0.25rem,0.8svh,0.5rem)] text-[clamp(1rem,1.35vw,1.5rem)] leading-[1.4] text-muted">
                {p.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Frame>
  );
}
