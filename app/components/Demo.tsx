import { Waypoints } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Demo() {
  return (
    <section id="demo" className="scroll-mt-20 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Demo"
          title="Explorer — ไฟล์ HTML เดียว เปิดดูได้เลย"
        />
        <div className="mx-auto mt-12 flex h-96 max-w-5xl overflow-hidden rounded-2xl bg-[#0a0a0f] shadow-xl shadow-violet-900/10">
          <div className="w-[20%] border-r border-white/5 p-4 text-xs text-white/40">
            Health A&ndash;
            <br />
            File Tree
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-3 border-r border-white/5 text-white/40">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-800">
              <Waypoints className="text-white" size={28} />
            </div>
            <span className="text-xs">Graph View (force / tree / matrix / flow)</span>
          </div>
          <div className="w-[24%] p-4 text-xs text-white/40">
            FILE / PATTERNS
            <br />/ SECURITY
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-[#6B7280]">
          ไม่ต้องมี server ไม่ต้องเข้าถึง repo — commit ไว้ หรือส่งเป็นไฟล์เดียวก็เปิดดูได้
        </p>
      </div>
    </section>
  );
}
