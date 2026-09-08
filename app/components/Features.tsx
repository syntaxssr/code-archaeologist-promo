import {
  Network,
  GitBranch,
  Zap,
  HeartPulse,
  ShieldAlert,
  Flame,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { IconBadge } from "./ui/IconBadge";

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
    <Section id="features">
      <SectionHeading kicker="Key Features" title="6 ความสามารถหลัก" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} hover>
            <IconBadge icon={f.icon} />
            <h3 className="mt-4 font-mono text-base font-semibold text-fg">
              {f.title}
            </h3>
            <p className="mt-1.5 text-sm leading-[1.7] text-fg-muted">{f.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
