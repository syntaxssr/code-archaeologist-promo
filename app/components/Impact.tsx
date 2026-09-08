import { Check } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";

const stats = [
  { value: "90%+", label: "Token ที่ลดลง เทียบกับอ่าน source ทั้งไฟล์" },
  { value: "A–F", label: "Health grade ประเมินคุณภาพสถาปัตยกรรมอัตโนมัติ" },
  { value: "0", label: "External dependency — Python stdlib ล้วน ติดตั้งเร็ว" },
];

const criteria = ["ลดเวลาทำงาน", "ลดต้นทุน (token/LLM cost)", "เพิ่มคุณภาพโค้ด"];

export function Impact() {
  return (
    <Section id="impact">
      <SectionHeading kicker="Impact" title="ผลลัพธ์ที่วัดได้" />
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label} className="text-center">
            <p className="font-mono text-5xl font-bold text-accent">{s.value}</p>
            <p className="mt-3 text-sm leading-[1.7] text-fg-muted">{s.label}</p>
          </Card>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-accent-deep bg-surface p-7">
        <p className="font-semibold text-fg">
          ตรงกับเกณฑ์ &ldquo;Impact ต่อบริษัท&rdquo; ของงานนี้
        </p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {criteria.map((c) => (
            <span key={c} className="flex items-center gap-2 text-sm text-fg-muted">
              <Check className="text-accent" size={16} strokeWidth={2} />
              {c}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
