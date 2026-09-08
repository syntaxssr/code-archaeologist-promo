/**
 * Stand-in for the Explorer UI until the real screenshot arrives from อุด้ง.
 * Mocked, and labelled as such in the section copy — it shows the shape of the
 * output (tree · graph · findings), not real numbers from a real run.
 */

const tree = [
  { name: "app/", depth: 0, grade: null },
  { name: "controllers/", depth: 1, grade: null },
  { name: "OrderController.py", depth: 2, grade: "B" },
  { name: "AuthController.py", depth: 2, grade: "A" },
  { name: "services/", depth: 1, grade: null },
  { name: "OrderService.py", depth: 2, grade: "C", active: true },
  { name: "PaymentService.py", depth: 2, grade: "B" },
  { name: "repositories/", depth: 1, grade: null },
  { name: "OrderRepository.py", depth: 2, grade: "A" },
];

const gradeColor: Record<string, string> = {
  A: "text-success",
  B: "text-fg-muted",
  C: "text-accent",
};

const nodes = [
  { id: "ctrl", x: 96, y: 44, label: "Controller" },
  { id: "svc", x: 96, y: 128, label: "Service", hot: true },
  { id: "pay", x: 212, y: 128, label: "Payment" },
  { id: "repo", x: 96, y: 212, label: "Repository" },
  { id: "mail", x: 8, y: 212, label: "Mailer" },
];

const edges = [
  ["ctrl", "svc", true],
  ["svc", "repo", true],
  ["svc", "pay", false],
  ["svc", "mail", false],
] as const;

// Concrete results, not a second copy of the feature list in the section above.
const findings = [
  { label: "แก้ไฟล์นี้ กระทบ", value: "7 ไฟล์ · 12 method" },
  { label: "เกรด", value: "C — god object, 340 บรรทัด" },
  { label: "พบ", value: "eval() บรรทัด 142" },
  { label: "แก้ไปแล้ว", value: "23 ครั้งใน 90 วัน" },
];

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function ExplorerMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-soft bg-surface">
      <div className="flex items-center justify-between border-b border-border-soft px-4 py-2.5">
        <span className="font-mono text-xs text-fg-muted">explorer.html</span>
        <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-fg-muted">
          NO SERVER
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_minmax(0,0.8fr)]">
        <div className="border-b border-border-soft p-4 sm:border-r sm:border-b-0">
          <p className="font-mono text-[10px] tracking-[0.18em] text-fg-faint">FILE TREE</p>
          <ul className="mt-3 space-y-1.5">
            {tree.map((f) => (
              <li
                key={f.name}
                className="flex items-center justify-between gap-2 font-mono text-xs"
                style={{ paddingLeft: f.depth * 12 }}
              >
                <span className={f.active ? "text-accent" : "text-fg-muted"}>{f.name}</span>
                {f.grade && (
                  <span className={`text-[10px] ${gradeColor[f.grade]}`}>{f.grade}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center border-b border-border-soft p-4 lg:border-r lg:border-b-0">
          <svg viewBox="-40 20 340 236" className="w-full" role="img" aria-label="กราฟความสัมพันธ์ระหว่าง entity">
            {edges.map(([from, to, onPath]) => {
              const a = nodeById(from);
              const b = nodeById(to);
              return (
                <line
                  key={`${from}-${to}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={onPath ? "var(--accent)" : "var(--border)"}
                  strokeWidth={onPath ? 1.6 : 1}
                  strokeDasharray={onPath ? "3 3" : undefined}
                />
              );
            })}
            {nodes.map((n) => (
              <g key={n.id}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.hot ? 9 : 6.5}
                  fill={n.hot ? "var(--accent)" : "var(--surface-2)"}
                  stroke={n.hot ? "var(--accent)" : "var(--border)"}
                />
                {/* Labels sit beside the node so edges never run through them. */}
                <text
                  x={n.x + 15}
                  y={n.y + 4}
                  fill={n.hot ? "var(--accent)" : "var(--fg-faint)"}
                  fontSize="10"
                  fontFamily="var(--font-jetbrains), monospace"
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-2 font-mono text-[10px] text-fg-faint">
            force / tree / matrix / flow
          </p>
        </div>

        <div className="p-4">
          <p className="font-mono text-[10px] tracking-[0.18em] text-fg-faint">
            ORDERSERVICE.PY
          </p>
          <dl className="mt-3 space-y-3">
            {findings.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-[10px] text-fg-faint">{f.label}</dt>
                <dd className="text-sm font-medium text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
