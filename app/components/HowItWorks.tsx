import { FileCode2, Search, Waypoints, Route, CheckCircle2 } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { IconBadge } from "./ui/IconBadge";

const steps = [
  { label: "Source", icon: FileCode2 },
  { label: "Scan (AST)", icon: Search },
  { label: "Graph", icon: Waypoints },
  { label: "Trace", icon: Route },
  { label: "Answer", icon: CheckCircle2 },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="layer">
      <SectionHeading kicker="How it Works" title="จาก Source ถึงคำตอบ ใน 5 ขั้น" />
      <ol className="mt-14 flex flex-wrap items-start justify-center gap-x-3 gap-y-8">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <li key={step.label} className="flex items-center gap-3">
              <div className="flex w-24 flex-col items-center gap-3">
                <IconBadge icon={step.icon} size={56} solid={isLast} />
                <span className="text-center font-mono text-xs text-fg-muted">
                  {step.label}
                </span>
              </div>
              {/* Connectors only once the row is a single line — a wrapped row
                  would leave them pointing at nothing. */}
              {!isLast && <span className="mb-8 hidden h-px w-6 bg-border lg:block" />}
            </li>
          );
        })}
      </ol>
      <p className="mx-auto mt-12 max-w-3xl rounded-lg border border-border-soft bg-surface-2 px-6 py-4 text-center font-mono text-sm leading-[2] break-words text-fg-muted">
        submitOrder <span className="text-accent">&rarr;</span> createOrder{" "}
        <span className="text-accent">&rarr;</span> OrderController.create_order{" "}
        <span className="text-accent">&rarr;</span> OrderService.place_order{" "}
        <span className="text-accent">&rarr;</span> OrderRepository.save
      </p>
    </Section>
  );
}
