import { AlertTriangle } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { IconBadge } from "./ui/IconBadge";

const bullets = [
  "คำถามเชิงสถาปัตยกรรม เช่น “controller เชื่อมกับ database ยังไง” ต้องให้ agent อ่านทั้ง repository",
  "RAG แบบ chunk ตัดโค้ดเป็นก้อน ~500 token ทำลาย function scope และ call hierarchy",
  "ผลลัพธ์: ตอบช้า ใช้ token เยอะเกินจำเป็น = ต้นทุนที่เพิ่มขึ้นทุกครั้งที่ถาม",
];

export function Problem() {
  return (
    <Section id="problem" tone="layer">
      <SectionHeading
        kicker="The Problem"
        title="Agent อ่านโค้ดทั้ง repo เพื่อตอบคำถามเดียว"
        center={false}
      />
      <div className="mt-12 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
        <ul className="space-y-5">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3.5 leading-[1.7] text-fg-muted">
              <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
              {b}
            </li>
          ))}
        </ul>
        <Card className="flex flex-col items-center justify-center text-center">
          <IconBadge icon={AlertTriangle} size={56} />
          <p className="mt-5 font-mono text-5xl font-bold text-accent">90%+</p>
          <p className="mt-3 text-sm leading-[1.7] text-fg-muted">
            token ที่เสียไปโดยไม่จำเป็น
            <br />
            เมื่อ agent อ่านซอร์สทั้ง repo
          </p>
        </Card>
      </div>
    </Section>
  );
}
