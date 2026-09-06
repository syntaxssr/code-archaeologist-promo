import { AlertTriangle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const bullets = [
  "คำถามเชิงสถาปัตยกรรม เช่น “controller เชื่อมกับ database ยังไง” ต้องให้ agent อ่านทั้ง repository",
  "RAG แบบ chunk ตัดโค้ดเป็นก้อน ~500 token ทำลาย function scope และ call hierarchy",
  "ผลลัพธ์: ตอบช้า ใช้ token เยอะเกินจำเป็น = ต้นทุนที่เพิ่มขึ้นทุกครั้งที่ถาม",
];

export function Problem() {
  return (
    <section
      id="problem"
      className="scroll-mt-20 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="The Problem" title="Agent อ่านโค้ดทั้ง repo เพื่อตอบคำถามเดียว" center={false} />
        <div className="mt-12 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
          <ul className="space-y-5">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-base leading-relaxed text-[#18181B]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F7F5FF] p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600">
              <AlertTriangle className="text-white" size={28} />
            </div>
            <p className="mt-5 text-5xl font-bold text-violet-700">90%+</p>
            <p className="mt-3 text-sm text-[#6B7280]">
              token ที่เสียไปโดยไม่จำเป็น
              <br />
              เมื่อ agent อ่านซอร์สทั้ง repo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
