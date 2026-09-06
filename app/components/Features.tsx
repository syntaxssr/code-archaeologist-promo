import {
  Network,
  GitBranch,
  Zap,
  HeartPulse,
  ShieldAlert,
  Flame,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "Structure Map", desc: "class-level: ใครอ้างอิงใคร", icon: Network },
  { title: "Flow Map", desc: "method-level: ใครเรียกใคร", icon: GitBranch },
  { title: "Blast Radius", desc: "เปลี่ยนจุดนี้ กระทบอะไรบ้าง", icon: Zap },
  { title: "Health Grade", desc: "smell + anti-pattern เป็นเกรด A-F", icon: HeartPulse },
  { title: "Security Scan", desc: "secret, SQL injection, eval sink", icon: ShieldAlert },
  { title: "Hotspot Ranking", desc: "ไฟล์แก้บ่อย + risk สูงสุด", icon: Flame },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-[#F7F5FF] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Key Features" title="6 ความสามารถหลัก" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-6 shadow-sm shadow-violet-900/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-700">
                <f.icon className="text-white" size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#18181B]">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#6B7280]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
