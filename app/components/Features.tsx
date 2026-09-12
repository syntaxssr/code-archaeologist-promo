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
    <Section id="features" tone="layer">
      <SectionHeading kicker="Key Features" title="6 ความสามารถหลัก" />
      {/* Two columns on a phone: six stacked cards ran half a screen past the
          fold, and these cards are short enough to pair. */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
        {features.map((f, i) => (
          <Card key={f.title} hover className="p-4 sm:p-7">
            <div className="flex items-start justify-between">
              <IconBadge icon={f.icon} size={36} />
              {/* Catalogue number — field-notes motif. */}
              <span className="font-mono text-[10px] tracking-[0.18em] text-fg-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-3 font-mono text-sm font-semibold text-fg sm:mt-4 sm:text-base">
              {f.title}
            </h3>
            <p className="mt-1.5 text-xs leading-[1.7] text-fg-muted sm:text-sm">{f.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
