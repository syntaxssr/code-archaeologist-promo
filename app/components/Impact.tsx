import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "90%+", label: "Token ที่ลดลง เทียบกับอ่าน source ทั้งไฟล์" },
  { value: "A–F", label: "Health grade ประเมินคุณภาพสถาปัตยกรรมอัตโนมัติ" },
  { value: "0", label: "External dependency — Python stdlib ล้วน ติดตั้งเร็ว" },
];

const criteria = ["ลดเวลาทำงาน", "ลดต้นทุน (token/LLM cost)", "เพิ่มคุณภาพโค้ด"];

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-20 bg-[#F7F5FF] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Impact" title="ผลลัพธ์ที่วัดได้" />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-8 text-center">
              <p className="text-5xl font-bold text-violet-700">{s.value}</p>
              <p className="mt-3 text-sm text-[#6B7280]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl bg-[#18181B] p-8">
          <p className="font-semibold text-white">
            ตรงกับเกณฑ์ &ldquo;Impact ต่อบริษัท&rdquo; ของงานนี้
          </p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {criteria.map((c) => (
              <span key={c} className="flex items-center gap-2 text-sm text-white/70">
                <Check className="text-violet-400" size={16} />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
