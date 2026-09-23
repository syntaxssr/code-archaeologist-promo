import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Appendix A2 — versus RAG. After the close, for questions.
 *
 * A solid line is a route that was traced through the dependency graph; a
 * dashed line is a guess. That is a real drafting convention — on a survey
 * drawing, solid is what you evidenced and dashed is what you inferred — and it
 * happens to be exactly the difference between this product and a retriever.
 * The argument is settled in two strokes, with no sentence needed.
 *
 * Both routes start at the same question and are drawn on the same field, or
 * the comparison proves nothing.
 *
 * The legend carries no counts. It used to say the guess "opened 6 files", but
 * that number came from how many circles the drawing happens to have, not from
 * a run — and a number nobody can check is the one a judge will ask about.
 */
const W = 1000;
const H = 420;

/** The traced route: four hops, each one a real edge, turning at right angles
 *  because every turn is a thing you can point at. */
const stations = [
  { x: 90, y: 84, call: "login()" },
  { x: 330, y: 84, call: "verifyToken()" },
  { x: 330, y: 214, call: "getUser()" },
  { x: 640, y: 214, call: "db.query()" },
];
const traced = "M90 84 H330 V214 H640";

/** The guess: it wanders, because similarity has no edges to follow. It opens
 *  six things and arrives nowhere. */
const guess =
  "M90 84 C60 170 120 220 150 268 C186 326 130 372 210 386 C300 400 330 330 396 322 C470 314 520 360 610 352 C700 344 760 300 848 322";
const opened = [
  [150, 268],
  [210, 386],
  [396, 322],
  [610, 352],
  [760, 316],
  [848, 322],
] as const;

export function VsRag({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <p
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex flex-wrap items-baseline gap-x-4 text-[clamp(1rem,1.5vw,1.5rem)] text-muted"
      >
        <span className="font-mono text-[clamp(1rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-faint uppercase">
          Q
        </span>
        <span>
          <span className="font-mono text-[0.92em] text-ink">login()</span> ไปถึง database ยังไง
        </span>
      </p>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-[clamp(1rem,3svh,2rem)] max-h-[46svh] w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="สองเส้นทางจากคำถามเดียวกัน เส้นทึบไล่ตาม dependency graph จริง เส้นประคือการเดาที่วนแล้วไม่ถึงปลายทาง"
      >
        {/* Conjectured first, so the evidenced line lands on top of it. Drawn
            through a mask because the draw animation works by setting
            stroke-dasharray, which would overwrite this path's own dashes and
            render the guess as a solid line — destroying the one convention the
            deck rests on. */}
        <defs>
          <mask id="vs-guess-reveal">
            <path
              d={guess}
              fill="none"
              stroke="#fff"
              strokeWidth="26"
              data-draw
              style={{ "--draw-delay": "520ms", "--draw-dur": "1500ms" } as React.CSSProperties}
            />
          </mask>
        </defs>
        <path
          d={guess}
          fill="none"
          stroke="var(--texture)"
          strokeWidth="2"
          strokeDasharray="7 5"
          mask="url(#vs-guess-reveal)"
        />
        {opened.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="8"
            fill="var(--sheet)"
            stroke="var(--texture)"
            strokeWidth="2"
            data-enter
            style={{ "--enter-delay": `${700 + i * 150}ms` } as React.CSSProperties}
          />
        ))}
        <g data-enter style={{ "--enter-delay": "1700ms" } as React.CSSProperties}>
          <text
            x="884"
            y="330"
            fontSize="30"
            fontFamily="var(--font-plex-mono), monospace"
            fill="var(--muted)"
          >
            ?
          </text>
        </g>

        <path
          d={traced}
          fill="none"
          stroke="var(--traced)"
          strokeWidth="3.5"
          data-draw
          style={{ "--draw-delay": "1900ms", "--draw-dur": "1100ms" } as React.CSSProperties}
        />
        {stations.map((s, i) => (
          <g
            key={s.call}
            data-enter
            style={{ "--enter-delay": `${2150 + i * 230}ms` } as React.CSSProperties}
          >
            <rect x={s.x - 7} y={s.y - 7} width="14" height="14" fill="var(--traced)" />
            <text
              x={s.x + 18}
              y={s.y - 14}
              fontSize="21"
              fontWeight="500"
              letterSpacing="1"
              fontFamily="var(--font-plex-mono), monospace"
              fill="var(--traced-deep)"
            >
              {i + 1} {s.call}
            </text>
          </g>
        ))}
      </svg>

      <dl
        data-enter
        style={{ "--enter-delay": "3100ms" } as React.CSSProperties}
        className="mt-[clamp(0.75rem,2.5svh,1.75rem)] flex flex-wrap gap-x-[clamp(2rem,5vw,5rem)] gap-y-3 border-t border-rule pt-[clamp(0.75rem,2svh,1.25rem)]"
      >
        <div className="flex items-center gap-3.5">
          <svg width="58" height="10" aria-hidden="true">
            <line x1="0" y1="5" x2="58" y2="5" stroke="var(--traced)" strokeWidth="3.5" />
          </svg>
          <dt className="font-mono text-[clamp(1rem,1vw,1.0625rem)] tracking-[0.14em] text-traced-deep uppercase">
            Traced
          </dt>
          <dd className="text-[clamp(1rem,1.35vw,1.375rem)] text-ink">ทุกช่วงคือการเรียกจริง</dd>
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="58" height="10" aria-hidden="true">
            <line
              x1="0"
              y1="5"
              x2="58"
              y2="5"
              stroke="var(--texture)"
              strokeWidth="2"
              strokeDasharray="7 5"
            />
          </svg>
          <dt className="font-mono text-[clamp(1rem,1vw,1.0625rem)] tracking-[0.14em] text-faint uppercase">
            Inferred
          </dt>
          <dd className="text-[clamp(1rem,1.35vw,1.375rem)] text-muted">เดาจากความคล้าย ไม่ถึงปลายทาง</dd>
        </div>
      </dl>
    </Frame>
  );
}
