import { WireframeBlock } from "./WireframeBlock";

const team = [
  { name: "ณัฐวุฒิ รอดทอง (อุด้ง)", role: "Lead Tech — Skill Development" },
  { name: "พีรพล จันทะแจ่ม (BB)", role: "Presentation — PPT, Web, Script" },
];

export function Team() {
  return (
    <WireframeBlock id="team" index="07" title="Team">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex h-32 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-white/20 text-center"
          >
            <span className="text-sm font-medium text-white/80">
              {member.name}
            </span>
            <span className="text-xs text-white/50">{member.role}</span>
          </div>
        ))}
      </div>
    </WireframeBlock>
  );
}
