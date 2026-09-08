import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { ExplorerMock } from "./visuals/ExplorerMock";

export function Demo() {
  return (
    <Section id="demo" tone="layer">
      <SectionHeading kicker="Demo" title="Explorer — ไฟล์ HTML เดียว เปิดดูได้เลย" />
      <div className="mx-auto mt-12 max-w-5xl">
        <ExplorerMock />
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-[1.7] text-fg-muted">
        ไม่ต้องมี server ไม่ต้องเข้าถึง repo — commit ไว้ หรือส่งเป็นไฟล์เดียวก็เปิดดูได้
        <span className="mt-1 block text-xs text-fg-faint">
          (ภาพจำลองหน้าตา — ของจริงจะสลับเป็น screenshot จากตัว skill)
        </span>
      </p>
    </Section>
  );
}
