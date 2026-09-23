import Image from "next/image";
import { Bot, FolderCode, Map as MapIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import mole from "@/public/mascot/mole.png";

/**
 * Screen 02 · 2/3 — how Code Archaeologist helps, after the problem.
 *
 * Screen 01 ends on "a skill is the runner's map". This screen answers the
 * obvious next question — who draws the map — and the answer is the mole from
 * the cover. So the screen is one line of four, left to right: our code, the
 * mole reading every file of it, the map it draws, and the AI running the
 * right way. The map is the one tile in the orange marker, the same colour the
 * answer on 01 was highlighted in, so the two screens read as one thought.
 *
 * An earlier version showed the same calls tangled and then laid out. It was
 * accurate and did not say what the thing is; this one names it.
 *
 * Latin appears only where it is a name (Code Archaeologist, AI); everything
 * the room needs to understand is in Thai.
 */
type Step = { icon: ReactNode; title: string; detail: string; accent?: boolean };

const iconClass = "h-[45%] w-[45%]";

const steps: Step[] = [
  { icon: <FolderCode className={iconClass} strokeWidth={1.5} aria-hidden />, title: "โค้ดของเรา", detail: "ทุกไฟล์ใน repo" },
  {
    icon: <Image src={mole} alt="" aria-hidden className="h-[82%] w-auto" />,
    title: "Code Archaeologist",
    detail: "ขุดอ่านทุกไฟล์",
  },
  { icon: <MapIcon className={iconClass} strokeWidth={1.5} aria-hidden />, title: "แผนที่", detail: "อะไรเรียกอะไร", accent: true },
  { icon: <Bot className={iconClass} strokeWidth={1.5} aria-hidden />, title: "AI", detail: "วิ่งถูกทาง" },
];

function Arrow() {
  return (
    <svg
      viewBox="0 0 48 16"
      className="mt-[calc(var(--tile)/2-0.5rem)] w-[clamp(1.25rem,2.4vw,3rem)] flex-none self-start text-faint"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M0 8H46" />
      <path d="M39 2L46 8L39 14" />
    </svg>
  );
}

export function What({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      {/* "Code Archaeologist คืออะไร" is the topic in the corner (Frame). */}
      <h2
        data-enter
        style={{ "--enter-delay": "200ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.75rem,4vw,3.75rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-ink"
      >
        skill ที่วาดแผนที่ของโค้ดเราให้เอง
      </h2>

      {/* --tile sizes every square, so the arrows can sit on their centre line. */}
      <div
        style={{ "--tile": "clamp(5.5rem,14vw,15rem)" } as React.CSSProperties}
        className="mt-[clamp(1.5rem,6svh,4rem)] flex items-start justify-between gap-[clamp(0.25rem,0.8vw,1rem)]"
      >
        {steps.map((s, n) => (
          <div key={s.title} className="contents">
            {n > 0 && (
              <div data-enter style={{ "--enter-delay": `${560 + n * 380}ms` } as React.CSSProperties} className="flex">
                <Arrow />
              </div>
            )}
            <figure
              data-enter
              style={{ "--enter-delay": `${420 + n * 380}ms` } as React.CSSProperties}
              className="flex w-[var(--tile)] flex-none flex-col items-center text-center"
            >
              <div
                className={`flex size-[var(--tile)] items-center justify-center rounded-[clamp(0.75rem,1.4vw,1.75rem)] ${
                  s.accent ? "bg-highlight text-ink" : "bg-sheet-2 text-muted"
                }`}
              >
                {s.icon}
              </div>
              <figcaption className="mt-[clamp(0.5rem,1.6svh,1rem)]">
                {/* One line even where the name is wider than its tile: it spills into
                    the gap beside it rather than breaking "Code Archaeologist". */}
                <p className="text-[clamp(1rem,1.6vw,1.75rem)] leading-[1.25] font-semibold whitespace-nowrap text-ink">{s.title}</p>
                <p className="mt-[clamp(0.15rem,0.5svh,0.35rem)] text-[clamp(1rem,1.3vw,1.5rem)] leading-[1.35] text-muted">
                  {s.detail}
                </p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "2000ms" } as React.CSSProperties}
        className="mt-[clamp(1.5rem,5svh,3.5rem)] flex-none text-[clamp(1.0625rem,1.5vw,1.625rem)] leading-[1.45] text-muted"
      >
        ทั้งคนและ AI เปิดอ่านแผนที่ชุดเดียวกัน
      </p>
    </Frame>
  );
}
