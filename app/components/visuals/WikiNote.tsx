/**
 * What one entity looks like after the scan: a whole note, not a chunk, with
 * its relationships written as links the agent can follow.
 */

const lines: { text: string; tone?: "accent" | "faint" | "fg" }[] = [
  { text: "# OrderService.place_order", tone: "fg" },
  { text: "" },
  { text: "## calls", tone: "faint" },
  { text: "- [[OrderRepository.save]]", tone: "accent" },
  { text: "- [[PaymentGateway.charge]]", tone: "accent" },
  { text: "" },
  { text: "## called by", tone: "faint" },
  { text: "- [[OrderController.create_order]]", tone: "accent" },
];

const toneClass = {
  accent: "text-accent",
  faint: "text-fg-faint",
  fg: "text-fg",
} as const;

export function WikiNote() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-soft bg-surface">
      <div className="border-b border-border-soft px-4 py-2.5">
        <span className="font-mono text-xs text-fg-muted">OrderService.place_order.md</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-xs leading-[1.9] text-fg-muted">
        {lines.map((l, i) => (
          <span key={i} className={`block ${l.tone ? toneClass[l.tone] : ""}`}>
            {l.text || " "}
          </span>
        ))}
      </pre>
    </div>
  );
}
