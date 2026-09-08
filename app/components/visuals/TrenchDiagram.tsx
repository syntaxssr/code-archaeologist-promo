/**
 * Cross-section of a codebase: three strata of entities, with one traced call
 * path cutting down through them. The site's core idea in one picture —
 * see design-system/MASTER.md §1.
 */

type Node = { x: number; label: string; hit?: boolean };

const strata: { y: number; layer: string; nodes: Node[] }[] = [
  {
    y: 74,
    layer: "controllers",
    nodes: [
      { x: 214, label: "AuthController" },
      { x: 392, label: "OrderController", hit: true },
      { x: 570, label: "UserController" },
      { x: 748, label: "CartController" },
    ],
  },
  {
    y: 168,
    layer: "services",
    nodes: [
      { x: 250, label: "AuthService" },
      { x: 428, label: "PaymentService" },
      { x: 606, label: "OrderService", hit: true },
      { x: 784, label: "MailService" },
    ],
  },
  {
    y: 262,
    layer: "repositories",
    nodes: [
      { x: 286, label: "UserRepository" },
      { x: 464, label: "OrderRepository", hit: true },
      { x: 642, label: "ItemRepository" },
    ],
  },
];

const CHIP_W = 148;
const CHIP_H = 26;

function chipCenter(x: number) {
  return x + CHIP_W / 2;
}

export function TrenchDiagram({ className }: { className?: string }) {
  // Route the trace chip-edge to chip-edge, so it never crosses a label.
  const hits = strata
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
      viewBox="0 0 980 320"
      className={className}
      role="img"
      aria-label="ภาพตัดขวางของโค้ดเบส 3 ชั้น — controllers, services, repositories — พร้อมเส้นทางการเรียกที่ลากผ่านลงไป"
    >
      {strata.map((s) => (
        <g key={s.layer}>
          <line
            x1="24"
            x2="956"
            y1={s.y - 18}
            y2={s.y - 18}
            stroke="var(--border)"
            strokeWidth="1"
            opacity="0.5"
          />
          <text
            x="24"
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
