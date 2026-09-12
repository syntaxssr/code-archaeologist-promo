/**
 * Cross-section of a codebase: three strata of entities, with one traced call
 * path cutting down through them. The site's core idea in one picture —
 * see design-system/MASTER.md §1.
 *
 * A depth scale runs down the left gutter. Depth marks and layer names share
 * one column so the section reads as a dig log rather than a diagram with a
 * legend bolted to it.
 *
 * The compact variant keeps only the traced entities: at phone widths the full
 * cross-section would either need side-scrolling to reach the trace — the whole
 * point of the picture — or shrink its labels past legibility.
 */

type Node = { x: number; label: string; hit?: boolean };
type Stratum = { y: number; depth: string; layer: string; nodes: Node[] };
type Layout = { viewBox: string; gutter: number; contentRight: number; strata: Stratum[] };

const CHIP_W = 148;
const CHIP_H = 26;
const TOP_MARK = 34;
const BOTTOM_MARK = 330;

const wide: Layout = {
  viewBox: "0 0 1060 352",
  gutter: 128,
  contentRight: 1044,
  strata: [
    {
      y: 84,
      depth: "Layer 01",
      layer: "controllers",
      nodes: [
        { x: 274, label: "AuthController" },
        { x: 452, label: "OrderController", hit: true },
        { x: 630, label: "UserController" },
        { x: 808, label: "CartController" },
      ],
    },
    {
      y: 178,
      depth: "Layer 02",
      layer: "services",
      nodes: [
        { x: 310, label: "AuthService" },
        { x: 488, label: "PaymentService" },
        { x: 666, label: "OrderService", hit: true },
        { x: 844, label: "MailService" },
      ],
    },
    {
      y: 272,
      depth: "Layer 03",
      layer: "repositories",
      nodes: [
        { x: 346, label: "UserRepository" },
        { x: 524, label: "OrderRepository", hit: true },
        { x: 702, label: "ItemRepository" },
      ],
    },
  ],
};

const compact: Layout = {
  viewBox: "0 0 420 352",
  gutter: 104,
  contentRight: 412,
  strata: [
    {
      y: 84,
      depth: "Layer 01",
      layer: "controllers",
      nodes: [{ x: 116, label: "OrderController", hit: true }],
    },
    {
      y: 178,
      depth: "Layer 02",
      layer: "services",
      nodes: [{ x: 250, label: "OrderService", hit: true }],
    },
    {
      y: 272,
      depth: "Layer 03",
      layer: "repositories",
      nodes: [{ x: 160, label: "OrderRepository", hit: true }],
    },
  ],
};

function chipCenter(x: number) {
  return x + CHIP_W / 2;
}

function DepthMark({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <line x1={x} x2={x + 9} y1={y} y2={y} stroke="var(--border)" strokeWidth="1" />
      <text
        x={x - 8}
        y={y + 3.5}
        textAnchor="end"
        fill="var(--fg-faint)"
        fontSize="10"
        fontFamily="var(--font-jetbrains), monospace"
        letterSpacing="1.4"
      >
        {label.toUpperCase()}
      </text>
    </g>
  );
}

export function TrenchDiagram({
  variant = "wide",
  className,
}: {
  variant?: "wide" | "compact";
  className?: string;
}) {
  const layout = variant === "compact" ? compact : wide;
  const scaleX = layout.gutter - 24;

  // Route the trace chip-edge to chip-edge, so it never crosses a label.
  const hits = layout.strata
    .map((s) => {
      const n = s.nodes.find((node) => node.hit);
      return n ? { x: chipCenter(n.x), top: s.y, bottom: s.y + CHIP_H } : null;
    })
    .filter((p): p is { x: number; top: number; bottom: number } => p !== null);

  const segments = hits
    .slice(0, -1)
    .map((from, i) => `M ${from.x} ${from.bottom} L ${hits[i + 1].x} ${hits[i + 1].top}`);

  const last = hits[hits.length - 1];

  return (
    <svg
      viewBox={layout.viewBox}
      className={className}
      role="img"
      aria-label="ภาพตัดขวางของโค้ดเบส 3 ชั้น — controllers, services, repositories — พร้อมเส้นทางการเรียกที่ลากผ่านลงไป"
    >
      {/* Depth scale */}
      <line
        x1={scaleX}
        x2={scaleX}
        y1={TOP_MARK}
        y2={BOTTOM_MARK}
        stroke="var(--border-soft)"
        strokeWidth="1"
      />
      <DepthMark x={scaleX} y={TOP_MARK} label="Surface" />
      {layout.strata.map((s) => (
        <DepthMark key={s.depth} x={scaleX} y={s.y + CHIP_H / 2} label={s.depth} />
      ))}
      <DepthMark x={scaleX} y={BOTTOM_MARK} label="Bedrock" />

      {layout.strata.map((s) => (
        <g key={s.layer}>
          <line
            x1={layout.gutter}
            x2={layout.contentRight}
            y1={s.y - 18}
            y2={s.y - 18}
            stroke="var(--border)"
            strokeWidth="1"
            opacity="0.5"
          />
          <text
            x={layout.gutter}
            y={s.y - 26}
            fill="var(--fg-faint)"
            fontSize="11"
            fontFamily="var(--font-jetbrains), monospace"
            letterSpacing="1.6"
          >
            {s.layer.toUpperCase()}
          </text>

          {s.nodes.map((n) => (
            <g key={n.label}>
              <rect
                x={n.x}
                y={s.y}
                width={CHIP_W}
                height={CHIP_H}
                rx="5"
                fill="var(--surface)"
                stroke={n.hit ? "var(--accent-deep)" : "var(--border-soft)"}
              />
              <text
                x={chipCenter(n.x)}
                y={s.y + 17}
                textAnchor="middle"
                fill={n.hit ? "var(--accent)" : "var(--fg-faint)"}
                fontSize="11"
                fontFamily="var(--font-jetbrains), monospace"
              >
                {n.label}
              </text>
            </g>
          ))}
        </g>
      ))}

      {/* The trace: one deterministic path, not a similarity guess. */}
      <g stroke="var(--accent)" strokeWidth="1.6" strokeDasharray="3 3" fill="none">
        {segments.map((d) => (
          <path key={d} d={d} />
        ))}
        <path d={`M ${last.x} ${last.bottom} L ${last.x} ${last.bottom + 16}`} />
      </g>
      <circle cx={last.x} cy={last.bottom + 20} r="4.5" fill="var(--accent)" />
    </svg>
  );
}
