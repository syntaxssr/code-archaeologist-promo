import { Check } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";

// The token saving is the bar above — it does not need a card restating it.
const stats = [
  { value: "A–F", label: "Health grade ประเมินคุณภาพสถาปัตยกรรมอัตโนมัติ" },
  { value: "0", label: "External dependency — Python stdlib ล้วน ติดตั้งเร็ว" },
];

const criteria = ["ลดเวลาทำงาน", "ลดต้นทุน (token/LLM cost)", "เพิ่มคุณภาพโค้ด"];

export function Impact() {
  return (
    <Section id="impact" tone="layer">
      <SectionHeading kicker="Impact" title="ผลลัพธ์ที่วัดได้" />

      {/* Before / after, at the same scale — the whole argument in one picture. */}
      <div className="mx-auto mt-12 max-w-3xl space-y-5">
        {[
          { label: "อ่าน source ทั้ง repo", width: "100%", tone: "muted" as const },
          { label: "Code Archaeologist", width: "8%", tone: "accent" as const },
        ].map((bar) => (
          <div key={bar.label}>
            <div className="flex items-baseline justify-between gap-4 text-xs">
              <span className={bar.tone === "accent" ? "text-accent" : "text-fg-muted"}>
                {bar.label}
              </span>
              <span className="text-fg-faint">
                <span className="font-mono">{bar.tone === "accent" ? "~8%" : "100%"}</span> ของ
                token
              </span>
            </div>
            <div className="mt-2 h-2.5 rounded-full bg-surface-2">
              <div
                className={`h-full rounded-full ${
                  bar.tone === "accent" ? "bg-accent" : "bg-border"
                }`}
                style={{ width: bar.width }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
        {stats.map((s) => (
          <Card key={s.label} className="text-center">
            <p className="font-mono text-5xl font-bold text-accent">{s.value}</p>
            <p className="mt-3 text-sm leading-[1.7] text-fg-muted">{s.label}</p>
          </Card>
        ))}
      </div>
      <div className="mx-auto mt-5 max-w-3xl rounded-xl border border-accent-deep bg-surface p-5 sm:p-7">
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
