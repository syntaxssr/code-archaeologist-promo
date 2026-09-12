import type { ReactNode } from "react";
import { PLAN_H, PLAN_W, edgeLine, edges, labelAt, rooms } from "./plan-data";

/**
 * Fills, drawn the way a section drawing distinguishes deposits: hatch,
 * cross-hatch and stipple density, never four coloured washes. Hatching stays
 * legible when overlays stack, survives a projector, and works for colourblind
 * viewers — which is exactly why the convention exists.
 */
export function PlanDefs() {
  return (
    <defs>
      <pattern id="hatch" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--line)" strokeWidth="1" />
      </pattern>
      <pattern id="hatch-traced" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="7" stroke="var(--traced)" strokeWidth="1.4" />
      </pattern>
      <pattern id="crosshatch" width="9" height="9" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
        <path d="M0 0V9M0 0H9" stroke="var(--line)" strokeWidth="0.9" />
      </pattern>
      <pattern id="stipple" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.1" fill="var(--line)" />
      </pattern>
    </defs>
  );
}

export function RoomLabel({ room, tone = "ink" }: { room: (typeof rooms)[number]; tone?: "ink" | "faint" }) {
  const p = labelAt(room);
  return (
    <text
      x={p.x}
      y={p.y}
      fontSize="19"
      fontWeight="500"
      letterSpacing="1.5"
      fontFamily="var(--font-plex-mono), monospace"
      fill={tone === "ink" ? "var(--ink)" : "var(--faint)"}
    >
      {room.label}
    </text>
  );
}

/**
 * The base plan: fourteen rooms and the walls between them. Every other beat
 * draws on top of this, so the judge is looking at one drawing that keeps
 * gaining information rather than six unrelated diagrams.
 *
 * `drawn` animates the outlines in survey order when an ancestor carries
 * data-draw-run; pass false where the plan is context rather than the subject.
 */
export function Plan({
  children,
  className,
  ariaLabel,
  drawn = true,
  dim = [],
  labels = true,
  showEdges = false,
  maxH = "min(54svh, calc(100svh - 430px))",
}: {
  children?: ReactNode;
  className?: string;
  ariaLabel: string;
  drawn?: boolean;
  /** Rooms the current beat is not talking about. */
  dim?: string[];
  labels?: boolean;
  /** The dependency graph. Drawn beneath the rooms, so what you see between
   *  two rooms is the corridor between them. */
  showEdges?: boolean;
  /** How much height this beat can spare. Room labels scale with the drawing,
   *  so at 1920x1080 — the pitch surface — this must stay high enough to keep
   *  them at or above 16px. Below that width they degrade, by design. */
  maxH?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${PLAN_W} ${PLAN_H}`}
      // Letterboxed into whatever height the beat has left, so a section always
      // fits one screen. The cap is tuned so room labels stay at or above the
      // 16px projector floor at 1920x1080 (MASTER.md section 3).
      className={`mx-auto w-full ${className ?? ""}`}
      style={{ maxHeight: maxH }}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={ariaLabel}
    >
      <PlanDefs />

      {showEdges &&
        edges.map(([a, b], i) => {
          const l = edgeLine([a, b]);
          return (
            <line
              key={`${a}-${b}`}
              {...l}
              stroke="var(--line)"
              strokeWidth="1.2"
              opacity="0.55"
              data-draw
              style={{ "--draw-delay": `${i * 45}ms`, "--draw-dur": "360ms" } as React.CSSProperties}
            />
          );
        })}

      {rooms.map((r, i) => {
        const isDim = dim.includes(r.id);
        return (
          <rect
            key={r.id}
            x={r.x}
            y={r.y}
            width={r.w}
            height={r.h}
            fill="var(--sheet-2)"
            stroke="var(--line)"
            strokeWidth="1.5"
            opacity={isDim ? 0.4 : 1}
            {...(drawn
              ? { "data-draw": true, style: { "--draw-delay": `${i * 55}ms`, "--draw-dur": "420ms" } as React.CSSProperties }
              : {})}
          />
        );
      })}

      {labels &&
        rooms.map((r, i) => {
          const label = <RoomLabel room={r} tone={dim.includes(r.id) ? "faint" : "ink"} />;
          // Only tie a label to the draw sequence when the outlines are being
          // drawn — otherwise it would wait for a trigger that never fires and
          // sit at zero opacity forever.
          return drawn ? (
            <g
              key={`l-${r.id}`}
              data-note
              style={{ "--note-delay": `${i * 55 + 320}ms` } as React.CSSProperties}
            >
              {label}
            </g>
          ) : (
            <g key={`l-${r.id}`}>{label}</g>
          );
        })}

      {children}
    </svg>
  );
}
