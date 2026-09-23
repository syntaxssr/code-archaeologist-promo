import Image from "next/image";
import mole from "@/public/mascot/mole.png";

/**
 * Screen 00 — the cover.
 *
 * The mascot and the name side by side, as one lockup, on white. Standby held
 * the name back so this screen could be the moment it arrives. The mole comes
 * first and the name lands beside it a beat later, so the room meets the
 * character and then learns what it is called. A small "skill" tag sits over
 * the name, so the next screen — what a skill is — follows from a word the room
 * has just read.
 *
 * Behind them is the same still grid every screen stands on (Slide.tsx). It
 * used to drift here, on this screen only; it was stilled and made the ground
 * of the whole deck, so the cover and the run read as one surface.
 *
 * The mascot is capped near its own pixel size: the source is 434 × 480, and a
 * raster scaled far past that goes soft on a projector. A larger export can
 * lift the cap.
 */
export function Title() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-[clamp(1.5rem,3.5vw,4.5rem)] px-[7%]">
        <Image
          src={mole}
          alt="มาสคอตตัวตุ่นนักโบราณคดี ใส่หมวกและแว่น ถือปากกากับแท็บเล็ต มีหน้าจอโค้ดลอยล้อมรอบ"
          priority
          data-enter
          style={{ "--enter-delay": "150ms" } as React.CSSProperties}
          className="h-[min(46svh,32vw,480px)] w-auto shrink-0"
        />
        <div>
          {/* A tag, the way a keynote marks a new product line: the room reads
              "skill" before the name, and screen 01 explains the word. */}
          <p
            data-enter
            style={{ "--enter-delay": "380ms" } as React.CSSProperties}
            className="mb-[clamp(0.5rem,1.6svh,1.25rem)] inline-block rounded-full border-[1.5px] border-traced px-[0.9em] py-[0.2em] font-mono text-[clamp(1rem,1.25vw,1.5rem)] leading-[1.3] font-medium text-traced-deep"
          >
            skill
          </p>
          <h1
            data-enter
            style={{ "--enter-delay": "450ms" } as React.CSSProperties}
            className="text-[clamp(2.5rem,7vw,8.5rem)] leading-[1] font-semibold tracking-[-0.035em] text-ink"
          >
            <span className="block">Code</span>
            <span className="block">Archaeologist</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
