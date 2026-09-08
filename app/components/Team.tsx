import { UserRound } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { IconBadge } from "./ui/IconBadge";

const team = [
  { name: "ณัฐวุฒิ รอดทอง (อุด้ง)", role: "Lead Tech — Skill Development" },
  { name: "พีรพล จันทะแจ่ม (BB)", role: "Presentation — PPT, Web, Script" },
];

export function Team() {
  return (
    <Section id="team" width="narrow">
      <SectionHeading kicker="Team 3" title="ทีมของเรา" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {team.map((m) => (
          <Card key={m.name} className="flex flex-col items-center gap-3 text-center">
            <IconBadge icon={UserRound} size={56} />
            <p className="mt-2 font-semibold text-fg">{m.name}</p>
            <p className="font-mono text-xs text-fg-muted">{m.role}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
