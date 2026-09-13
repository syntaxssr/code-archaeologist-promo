import Image from "next/image";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import { bb, udong } from "./team-photos";

/**
 * Screen 11 — the team.
 *
 * Every archaeological context sheet ends the same way: who recorded it, when,
 * and who checked. That was the whole screen; it is now the caption under two
 * portraits, because at this point in the run the room has watched ten minutes
 * of a tool and has not yet seen the two people who built it.
 *
 * Left is the presentation side, right is the code side — the same split the
 * work actually had, so the screen is a division of labour rather than a
 * courtesy.
 *
 * A portrait that has not been taken yet draws a marked empty frame. A
 * silhouette or a stock face would read as a real answer to a question we have
 * not answered.
 */
const people = [
  {
    photo: bb,
    name: "พีรพล จันทะแจ่ม",
    nick: "BB",
    role: "ฝั่งงานนำเสนอ",
    th: "เว็บที่กำลังดูอยู่นี้ ทั้งเด็ค และสคริปต์การพูด",
  },
  {
    photo: udong,
    name: "ณัฐวุฒิ รอดทอง",
    nick: "อุด้ง",
    role: "ฝั่ง code",
    th: "เขียน skill ทั้งตัว ตั้งแต่ AST scan ถึง Explorer",
  },
];

export function Team({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="flex min-h-0 flex-1 items-stretch gap-[clamp(2rem,5vw,5rem)]">
        {people.map((p, n) => (
          <figure
            key={p.name}
            data-enter
            style={{ "--enter-delay": `${220 + n * 200}ms` } as React.CSSProperties}
            className="flex min-h-0 min-w-0 flex-1 items-center gap-[clamp(1rem,2.4vw,2.25rem)]"
          >
            {/* width-driven, so the portrait never crowds the name beside it */}
            <div className="aspect-[3/4] w-[46%] max-h-full shrink-0 overflow-hidden border border-rule bg-sheet-raised">
              {p.photo ? (
                <Image
                  src={p.photo}
                  alt={`${p.name} (${p.nick})`}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
                  <span className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.16em] text-faint uppercase">
                    รอรูป
                  </span>
                  <span className="font-mono text-[clamp(0.625rem,0.8vw,0.875rem)] leading-[1.7] tracking-[0.1em] text-texture uppercase">
                    ครึ่งตัว · แนวตั้ง 3:4
                    <br />
                    1400 × 1866 ขึ้นไป
                  </span>
                </div>
              )}
            </div>

            <figcaption className="min-w-0 flex-1">
              <p className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.16em] text-traced-deep uppercase">
                {p.role}
              </p>
              <p className="mt-[clamp(0.4rem,1.2svh,0.7rem)] text-[clamp(1.125rem,2vw,2rem)] leading-[1.2] font-semibold text-ink">
                {p.name}
              </p>
              <p className="mt-1 font-mono text-[clamp(0.875rem,1.15vw,1.1875rem)] text-faint">
                ({p.nick})
              </p>
              <p className="mt-[clamp(0.5rem,1.6svh,1rem)] text-[clamp(0.9375rem,1.25vw,1.25rem)] leading-[1.55] text-muted">
                {p.th}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div
        data-enter
        style={{ "--enter-delay": "680ms" } as React.CSSProperties}
        className="mt-[clamp(0.75rem,2.4svh,1.5rem)] flex flex-none flex-wrap items-baseline gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-1 border-t border-rule pt-[clamp(0.5rem,1.6svh,1rem)]"
      >
        <span className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.16em] text-faint uppercase">
          Recorded
        </span>
        <span className="font-mono text-[clamp(1rem,1.5vw,1.5rem)] tabular-nums text-ink">
          26.09.2026
        </span>
        <span className="text-[clamp(0.875rem,1.15vw,1.1875rem)] leading-[1.6] text-faint">
          แบบฟอร์มบันทึกทางโบราณคดีจบด้วยช่องนี้เสมอ — ใครบันทึก และบันทึกเมื่อไหร่
        </span>
      </div>
    </Frame>
  );
}
