import { FileCode2, Search, Waypoints, Route, CheckCircle2 } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { IconBadge } from "./ui/IconBadge";

// One action per step. The mechanism behind them is argued in Solution above —
// repeating it here just made the page say the same thing twice.
const steps = [
  { label: "Source", icon: FileCode2, desc: "ชี้ไปที่ repo ไม่ต้องตั้ง server" },
  { label: "Scan (AST)", icon: Search, desc: "แยกเป็น entity ตามโครงสร้างจริงของภาษา" },
  { label: "Graph", icon: Waypoints, desc: "เขียนความสัมพันธ์ทุกเส้นลงเป็น note" },
  { label: "Trace", icon: Route, desc: "ไล่ตาม edge จากจุดตั้งต้นไปจนสุดปลายทาง" },
  { label: "Answer", icon: CheckCircle2, desc: "ตอบพร้อม path ที่ตรวจย้อนได้" },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading kicker="How it Works" title="จาก Source ถึงคำตอบ ใน 5 ขั้น" />

      <ol className="mx-auto mt-10 max-w-3xl sm:mt-14">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <li key={step.label} className="flex gap-5 sm:gap-7">
              {/* The shaft: each step is one layer deeper down the trench. */}
              <div className="flex flex-col items-center">
                <IconBadge icon={step.icon} size={48} solid={isLast} />
                {!isLast && <span className="w-px flex-1 bg-border" />}
              </div>

              <div className={isLast ? "pb-0" : "pb-6 sm:pb-9"}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-mono text-base font-semibold text-fg">{step.label}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-[1.7] text-fg-muted">{step.desc}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mx-auto mt-8 max-w-3xl rounded-lg sm:mt-12 border border-border-soft bg-surface-2 px-6 py-4 text-center font-mono text-sm leading-[2] break-words text-fg-muted">
        submitOrder <span className="text-accent">&rarr;</span> createOrder{" "}
        <span className="text-accent">&rarr;</span> OrderController.create_order{" "}
        <span className="text-accent">&rarr;</span> OrderService.place_order{" "}
        <span className="text-accent">&rarr;</span> OrderRepository.save
      </p>
    </Section>
  );
}
