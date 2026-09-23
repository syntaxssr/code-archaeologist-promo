import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 02 — what Code Archaeologist is.
 *
 * Screen 01 ends on a map: the AI is a good runner who does not know the route,
 * and a skill is the runner's map. This screen says who draws that map. It is a
 * before and after, for the half of the room that does not write code — the
 * technical words (tree-sitter, AST, explorer.html) moved to screen 04, where
 * the output is shown.
 *
 * Both pictures are the same eight functions and the same calls between them.
 * Before, they sit where they happen to fall and the calls cross into a knot
 * nobody can follow. After, they are laid out in the order they call each
 * other, and one route through them is drawn in orange — the route a runner
 * would take. Nothing is added between the two; only the order changes, which
 * is the honest version of what a scan does.
 *
 * The last line is the claim the whole run rests on: what comes out is read by
 * a person, not only by an agent.
 */

/** The calls, by node index. The same list draws both pictures. */
const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [3, 6], [4, 6], [4, 7], [5, 7],
];

/** Where each node falls before the scan: scattered, so the calls cross. */
const scattered: [number, number][] = [
  [120, 20], [220, 120], [24, 110], [40, 30], [200, 24], [130, 128], [150, 70], [60, 70],
];

/** After: in calling order, left to right. */
const ordered: [number, number][] = [
  [28, 70], [92, 36], [92, 104], [156, 18], [156, 70], [156, 122], [216, 44], [216, 96],
];

/** One route through the ordered map: 0 → 1 → 4 → 7. */
const route = "M28 70 L92 36 L156 70 L216 96";
const routeNodes = new Set([0, 1, 4, 7]);

function Graph({ nodes, withRoute }: { nodes: [number, number][]; withRoute?: boolean }) {
  return (
    <svg viewBox="0 0 244 144" className="h-full w-full" aria-hidden>
      <g className="text-rule" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
        {edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
      {withRoute ? (
        <path
          d={route}
          data-draw
          style={{ "--draw-delay": "1300ms", "--draw-dur": "1100ms" } as React.CSSProperties}
          className="text-traced"
          fill="none"
          stroke="currentColor"
          // In user units, not non-scaling: the draw animation measures the
          // dash in the same units as the path, so the whole route is drawn.
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ) : null}
      {nodes.map(([x, y], n) => (
        <circle
          key={n}
          cx={x}
          cy={y}
          r="5"
          className={withRoute && routeNodes.has(n) ? "fill-traced" : "fill-line"}
        />
      ))}
    </svg>
  );
}

const panels = [
  { label: "Before", caption: "ไม่มีใครจำได้ว่าอะไรเรียกอะไร", nodes: scattered, withRoute: false },
  { label: "After", caption: "เห็นเส้นทางของโค้ด", nodes: ordered, withRoute: true },
];

export function What({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      {/* "Code Archaeologist คืออะไร" is the topic in the corner (Frame). */}
      <h2
        data-enter
        style={{ "--enter-delay": "200ms" } as React.CSSProperties}
        className="flex-none text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        ขุดโค้ดเก่า วาดเป็นแผนที่
      </h2>

      <div className="mt-[clamp(1rem,3.5svh,2.5rem)] grid min-h-0 flex-1 grid-cols-2 gap-[clamp(0.75rem,2vw,2.5rem)]">
        {panels.map((p, n) => (
          <figure
            key={p.label}
            data-enter
            style={{ "--enter-delay": `${420 + n * 420}ms` } as React.CSSProperties}
            className="flex min-h-0 flex-col"
          >
            <div className="min-h-0 flex-1 rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 p-[clamp(0.75rem,2vw,2.25rem)]">
              <Graph nodes={p.nodes} withRoute={p.withRoute} />
            </div>
            {/* Latin mono names the panel, Thai says what it shows — the two
                never share a line. */}
            <figcaption className="mt-[clamp(0.5rem,1.4svh,1rem)]">
              <p
                className={`font-mono text-[clamp(1rem,0.95vw,1.0625rem)] tracking-[0.16em] uppercase ${
                  p.withRoute ? "text-traced-deep" : "text-faint"
                }`}
              >
                {p.label}
              </p>
              <p className="mt-[clamp(0.2rem,0.6svh,0.4rem)] text-[clamp(1.0625rem,1.6vw,1.75rem)] leading-[1.4] text-ink">
                {p.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "1600ms" } as React.CSSProperties}
        className="mt-[clamp(0.75rem,2.6svh,1.75rem)] flex-none text-[clamp(1.0625rem,1.5vw,1.625rem)] leading-[1.45] text-muted"
      >
        ทั้งคนและ AI เปิดอ่านแผนที่ชุดเดียวกัน
      </p>
    </Frame>
  );
}
