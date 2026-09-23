import Image from "next/image";
import mole from "@/public/mascot/mole.png";

/**
 * Screen 00 — the cover.
 *
 * The mascot and the name side by side, as one lockup, on white. Standby held
 * the name back so this screen could be the moment it arrives. The mole comes
 * first and the name lands beside it a beat later, so the room meets the
 * character and then learns what it is called.
 *
 * Behind them, a faint square grid drifts diagonally, slowly. It means nothing
 * and is not meant to be looked at — it only keeps a still screen from reading
 * as a frozen one while the presenter talks. The lines are a shade off white
 * and one cell takes twenty seconds to pass, so it sits under the threshold of
 * anything the eye would follow. Here and there a single cell fills with the
 * grid's grey and empties again, each on its own clock, never two in step —
 * enough life that the screen does not look paused. These are the one loop on
 * the deck besides the standby cursor, and they run only while this screen is
 * live.
 *
 * The mascot is capped near its own pixel size: the source is 434 × 480, and a
 * raster scaled far past that goes soft on a projector. A larger export can
 * lift the cap.
 */

/** One grid cell, in px. The layer is a cell larger than the screen on every
 *  side and moves exactly one cell per loop, so the seam never shows. */
const CELL = 72;

/** Enough cells to cover a 1920 × 1080 screen plus the drift margin. */
const COLS = 30;
const ROWS = 18;

/** A fixed hash, not Math.random — the server and the client must pick the
 *  same cells, or hydration puts them somewhere else. */
const hash = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

/** About one cell in seventeen, each on its own delay. */
const glows = Array.from({ length: COLS * ROWS }, (_, i) => i)
  .filter((i) => hash(i) < 0.06)
  .map((i) => ({ x: (i % COLS) * CELL, y: Math.floor(i / COLS) * CELL, delay: (hash(i + 7) * 12).toFixed(2) }));

const drift = { "--cell": `${CELL}px`, inset: `-${CELL}px` } as React.CSSProperties;

export function Title() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-sheet">
      <div
        aria-hidden
        data-drift
        style={{
          ...drift,
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
        }}
        className="absolute"
      />

      {/* The filling cells ride their own layer on the same drift, started by
          the same live flag, so they stay inside the grid's squares. The layer
          has a hole where the lockup sits — as fractions of the screen, so it
          holds at 16:9 and at 4:3 — and nothing fills behind the mole or the
          name. Each cell is inset by the line's width so the line stays on
          top. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          clipPath:
            "polygon(evenodd, 0 0, 100% 0, 100% 100%, 0 100%, 0 0, 12% 26%, 12% 74%, 88% 74%, 88% 26%, 12% 26%)",
        }}
      >
        <div data-drift style={drift} className="absolute">
          <svg width={COLS * CELL} height={ROWS * CELL} className="absolute top-0 left-0">
            {glows.map((g) => (
              <rect
                key={`${g.x}-${g.y}`}
                x={g.x + 1}
                y={g.y + 1}
                width={CELL - 1}
                height={CELL - 1}
                fill="var(--grid)"
                data-glow
                style={{ "--glow-delay": `${g.delay}s` } as React.CSSProperties}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center gap-[clamp(1.5rem,3.5vw,4.5rem)] px-[7%]">
        <Image
          src={mole}
          alt="มาสคอตตัวตุ่นนักโบราณคดี ใส่หมวกและแว่น ถือปากกากับแท็บเล็ต มีหน้าจอโค้ดลอยล้อมรอบ"
          priority
          data-enter
          style={{ "--enter-delay": "150ms" } as React.CSSProperties}
          className="h-[min(46svh,32vw,480px)] w-auto shrink-0"
        />
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
  );
}
