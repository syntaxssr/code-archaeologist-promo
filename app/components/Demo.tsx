import { Waypoints } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { IconBadge } from "./ui/IconBadge";

export function Demo() {
  return (
    <Section id="demo" tone="layer">
      <SectionHeading kicker="Demo" title="Explorer — ไฟล์ HTML เดียว เปิดดูได้เลย" />
      {/* Placeholder frame — swap for the real Explorer screenshot once อุด้ง sends it. */}
      <div className="mx-auto mt-12 flex h-96 max-w-5xl overflow-hidden rounded-xl border border-border-soft bg-surface">
        <div className="w-[20%] border-r border-border-soft p-4 font-mono text-xs text-fg-muted">
          Health A&ndash;
          <br />
          File Tree
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 border-r border-border-soft">
          <IconBadge icon={Waypoints} size={56} />
          <span className="font-mono text-xs text-fg-muted">
            Graph View (force / tree / matrix / flow)
          </span>
        </div>
        <div className="w-[24%] p-4 font-mono text-xs text-fg-muted">
          FILE / PATTERNS
          <br />/ SECURITY
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-[1.7] text-fg-muted">
        ไม่ต้องมี server ไม่ต้องเข้าถึง repo — commit ไว้ หรือส่งเป็นไฟล์เดียวก็เปิดดูได้
      </p>
    </Section>
  );
}
