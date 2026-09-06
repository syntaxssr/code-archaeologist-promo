import { UserRound } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const team = [
  { name: "ณัฐวุฒิ รอดทอง (อุด้ง)", role: "Lead Tech — Skill Development" },
  { name: "พีรพล จันทะแจ่ม (BB)", role: "Presentation — PPT, Web, Script" },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker="Team 3" title="ทีมของเรา" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {team.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center gap-3 rounded-2xl bg-[#F7F5FF] p-8 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-700">
                <UserRound className="text-white" size={30} />
              </div>
              <p className="font-bold text-[#18181B]">{m.name}</p>
              <p className="text-sm text-[#6B7280]">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
