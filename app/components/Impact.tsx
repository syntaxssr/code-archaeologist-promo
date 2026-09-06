import { WireframeBlock } from "./WireframeBlock";

const impacts = ["ลดเวลาทำงาน", "ลดต้นทุน", "เพิ่มคุณภาพ"];

export function Impact() {
  return (
    <WireframeBlock
      id="impact"
      index="06"
      title="Impact"
      note="จับคู่กับเกณฑ์คะแนนงาน (Impact ต่อบริษัท 30 คะแนน)"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {impacts.map((i) => (
          <div
            key={i}
            className="flex h-24 items-center justify-center rounded-lg border border-dashed border-white/20 text-center text-sm text-white/60"
          >
            {i}
          </div>
        ))}
      </div>
    </WireframeBlock>
  );
}
