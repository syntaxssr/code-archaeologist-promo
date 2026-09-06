import { FileCode2, Search, Waypoints, Route, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { label: "Source", icon: FileCode2 },
  { label: "Scan (AST)", icon: Search },
  { label: "Graph", icon: Waypoints },
  { label: "Trace", icon: Route },
  { label: "Answer", icon: CheckCircle2 },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="How it Works" title="จาก Source ถึงคำตอบ ใน 5 ขั้น" />
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${
                      isLast ? "bg-violet-500" : "bg-violet-800"
                    }`}
                  >
                    <Icon className="text-white" size={26} />
                  </div>
                  <span className="text-sm font-semibold text-[#18181B]">
                    {step.label}
                  </span>
                </div>
                {!isLast && (
                  <span className="mb-7 text-2xl text-[#D1D5DB]">&rarr;</span>
                )}
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-12 max-w-3xl rounded-lg bg-[#F7F5FF] px-6 py-4 text-center font-mono text-sm text-[#6B7280]">
          submitOrder &rarr; createOrder &rarr; OrderController.create_order
          &rarr; OrderService.place_order &rarr; OrderRepository.save
        </p>
      </div>
    </section>
  );
}
