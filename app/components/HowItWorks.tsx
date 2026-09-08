import { FileCode2, Search, Waypoints, Route, CheckCircle2 } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { IconBadge } from "./ui/IconBadge";

const steps = [
  {
    label: "Source",
    icon: FileCode2,
    desc: "รับ repo ทั้งก้อน ไม่ต้องตั้ง server ไม่ต้อง index ล่วงหน้า",
  },
  {
    label: "Scan (AST)",
    icon: Search,
    desc: "แยกเป็น entity ตาม AST — class, method อยู่ครบทั้งก้อน ไม่โดนตัดกลาง scope",
  },
  {
    label: "Graph",
    icon: Waypoints,
    desc: "เขียนเป็น Markdown note เชื่อมกันด้วย [[wikilink]] + dependency edge",
  },
  {
    label: "Trace",
    icon: Route,
    desc: "BFS ไล่จากจุดตั้งต้น ได้ path จริง ไม่ใช่ similarity search",
  },
  {
    label: "Answer",
    icon: CheckCircle2,
    desc: "ตอบพร้อม path ที่อ้างอิงได้ อ่านเฉพาะ node บนเส้นทางนั้น",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading kicker="How it Works" title="จาก Source ถึงคำตอบ ใน 5 ขั้น" />

      <ol className="mx-auto mt-14 max-w-3xl">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <li key={step.label} className="flex gap-5 sm:gap-7">
              {/* The shaft: each step is one layer deeper down the trench. */}
              <div className="flex flex-col items-center">
                <IconBadge icon={step.icon} size={48} solid={isLast} />
                {!isLast && <span className="w-px flex-1 bg-border" />}
              </div>

              <div className={isLast ? "pb-0" : "pb-9"}>
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

      <p className="mx-auto mt-12 max-w-3xl rounded-lg border border-border-soft bg-surface-2 px-6 py-4 text-center font-mono text-sm leading-[2] break-words text-fg-muted">
        submitOrder <span className="text-accent">&rarr;</span> createOrder{" "}
        <span className="text-accent">&rarr;</span> OrderController.create_order{" "}
        <span className="text-accent">&rarr;</span> OrderService.place_order{" "}
        <span className="text-accent">&rarr;</span> OrderRepository.save
      </p>
    </Section>
  );
}
