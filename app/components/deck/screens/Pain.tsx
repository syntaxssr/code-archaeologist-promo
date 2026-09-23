import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 02 · 1/3 — the problem, first step of "what Code Archaeologist is".
 *
 * Its only job is to make the room feel the problem before anyone offers a
 * solution: you change one line in code you did not write, and nobody can say
 * what it touches. For the half of the room that does not write code, that is
 * a picture rather than a list — one orange dot where the change is, lines
 * running out from it, and a question mark at the end of every line.
 *
 * Dots are pieces of code and lines are calls. There is no map yet, so every
 * place the change could reach is a guess; the next step (2/3) brings the map,
 * and the last (3/3) shows what it looks like.
 *
 * The lines draw outward from the change, first ring then second, so the
 * question marks arrive as the reach grows. The accent lands once, on the dot
 * that was changed.
 *
 * The three ways a team answers this today — for the presenter to say over the
 * picture, not to put on it:
 *   ไล่เปิดอ่านเอง — หมดไปครึ่งเช้า
 *   ให้ AI อ่านทั้ง repo — ช้า และอ่านไม่หมด
 *   ให้ AI เดาจากไฟล์ที่คล้ายกัน — ผิดแล้วไม่รู้ตัว
 */
const center: [number, number] = [260, 112];

/** Pieces the change reaches directly. */
const near: [number, number][] = [
  [140, 50], [260, 28], [384, 44], [96, 146], [424, 152], [206, 196], [322, 198],
];

/** Pieces reached through them: [from index in `near`, x, y]. */
const far: [number, number, number][] = [
  [0, 40, 70], [2, 488, 76], [3, 30, 196], [4, 498, 200],
];

function Unknown({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <g data-enter style={{ "--enter-delay": `${delay}ms` } as React.CSSProperties}>
      <circle
        cx={x}
        cy={y}
        r="15"
        className="fill-sheet stroke-line"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={x}
        y={y}
        dy="0.36em"
        textAnchor="middle"
        className="fill-muted font-mono text-[17px] font-semibold"
      >
        ?
      </text>
    </g>
  );
}

export function Pain({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <p
        data-enter
        style={{ "--enter-delay": "120ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.4] text-muted"
      >
        แก้โค้ดบรรทัดเดียว
      </p>
      <h2
        data-enter
        style={{ "--enter-delay": "220ms" } as React.CSSProperties}
        className="mt-[clamp(0.25rem,0.8svh,0.5rem)] flex-none text-[clamp(2.25rem,5vw,5rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        แล้วจะพังตรงไหน
      </h2>

      <div className="mt-[clamp(0.75rem,2.6svh,2rem)] min-h-0 flex-1">
        <svg viewBox="0 0 528 228" className="h-full w-full" aria-hidden>
          {/* No non-scaling-stroke on these: it measures the dash in screen
              pixels while the drawn length is in user units, so a line would
              stop partway once the picture is scaled up. */}
          <g className="stroke-rule" strokeWidth="1" fill="none">
            {near.map(([x, y], n) => (
              <path
                key={`n${n}`}
                d={`M${center[0]} ${center[1]} L${x} ${y}`}
                data-draw
                style={{ "--draw-delay": `${700 + n * 60}ms`, "--draw-dur": "500ms" } as React.CSSProperties}
              />
            ))}
            {far.map(([from, x, y], n) => (
              <path
                key={`f${n}`}
                d={`M${near[from][0]} ${near[from][1]} L${x} ${y}`}
                data-draw
                style={{ "--draw-delay": `${1400 + n * 80}ms`, "--draw-dur": "450ms" } as React.CSSProperties}
              />
            ))}
          </g>

          {near.map(([x, y], n) => (
            <Unknown key={`n${n}`} x={x} y={y} delay={1050 + n * 60} />
          ))}
          {far.map(([, x, y], n) => (
            <Unknown key={`f${n}`} x={x} y={y} delay={1750 + n * 80} />
          ))}

          {/* The change itself — the one thing on the screen anyone is sure of. */}
          <g data-enter style={{ "--enter-delay": "480ms" } as React.CSSProperties}>
            <circle cx={center[0]} cy={center[1]} r="22" className="fill-traced/15" />
            <circle cx={center[0]} cy={center[1]} r="12" className="fill-traced" />
          </g>
        </svg>
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "2300ms" } as React.CSSProperties}
        className="mt-[clamp(0.5rem,1.8svh,1.25rem)] flex-none text-[clamp(1.125rem,1.7vw,1.875rem)] leading-[1.45] text-muted"
      >
        ไม่มีใครตอบได้ว่ากระทบกี่ที่
      </p>
    </Frame>
  );
}
