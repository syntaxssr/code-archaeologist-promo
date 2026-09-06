import { WireframeBlock } from "./WireframeBlock";

export function Problem() {
  return (
    <WireframeBlock
      id="problem"
      index="01"
      title="Problem"
      note="Agent อ่านโค้ดทั้ง repo กิน token เยอะ — RAG แบบ chunk ทำลาย call hierarchy/scope"
    />
  );
}
