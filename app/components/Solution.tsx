import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { WikiNote } from "./visuals/WikiNote";

const problems = [
  "คำถามเชิงสถาปัตยกรรม เช่น “controller เชื่อมกับ database ยังไง” ต้องให้ agent ไล่อ่านทั้ง repository",
  "RAG แบบ chunk ตัดโค้ดเป็นก้อน ~500 token ทำลาย function scope และ call hierarchy",
];

const cards = [
  {
    ours: false,
    title: "Standard RAG",
    items: [
      "แบ่งโค้ดเป็น chunk ขนาด ~500 token",
      "ทำลาย call hierarchy และ scope",
      "Similarity search — ไม่ deterministic",
      "อ่าน context ก้อนใหญ่ทุกครั้งที่ถาม",
    ],
  },
  {
    ours: true,
    title: "Code Archaeologist",
    items: [
      "เก็บทั้ง entity ไว้เป็น note เดียว ไม่ตัด",
      "เข้ารหัสความสัมพันธ์เป็น graph ชัดเจน",
      "BFS graph traversal — deterministic",
      "อ่านเฉพาะ node บน path ที่ trace เจอ",
    ],
  },
];

export function Solution() {
  return (
    <Section id="solution" tone="layer">
      <SectionHeading
        kicker="Problem → Solution"
        title="Agent อ่านโค้ดทั้ง repo เพื่อตอบคำถามเดียว"
        center={false}
      />

      <div className="mt-8 grid gap-10 sm:mt-10 sm:grid-cols-[1.3fr_1fr]">
        <div>
          {/* The heading already states the problem; on a phone these restate it
              at the cost of half a screen, so they start at md. */}
          <ul className="hidden space-y-5 md:block">
            {problems.map((p) => (
              <li key={p} className="flex gap-3.5 leading-[1.7] text-fg-muted">
                <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-[1.7] text-fg-muted md:mt-8 md:text-base">
            Code Archaeologist สแกนโค้ดเบสด้วย AST แปลงเป็น Markdown wiki ที่เชื่อมกันด้วย{" "}
            <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-sm text-accent">
              [[wikilink]]
            </code>{" "}
            พร้อม dependency graph ที่ agent เรียก query ได้ตรงๆ แบบ{" "}
            <strong className="font-semibold text-fg">Zero-RAG</strong> — ไม่ต้องเดา
            ไม่ต้อง similarity search
          </p>
        </div>

        {/* Supporting evidence rather than the argument — md and up. */}
        <div className="hidden sm:block">
          <WikiNote />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6">
        {cards.map((c) => (
          <Card key={c.title} accent={c.ours} className="p-4 sm:p-7">
            <h3
              className={`font-mono text-sm font-semibold sm:text-lg ${
                c.ours ? "text-accent" : "text-fg-muted"
              }`}
            >
              {c.title}
            </h3>
            <ul className="mt-3 space-y-2.5 sm:mt-5 sm:space-y-3.5">
              {c.items.map((it) => (
                <li
                  key={it}
                  className={`flex gap-2 text-xs leading-[1.6] sm:gap-3 sm:text-sm sm:leading-[1.7] ${
                    c.ours ? "text-fg" : "text-fg-muted"
                  }`}
                >
                  <span
                    className={`mt-2 h-px w-2 shrink-0 sm:mt-2.5 sm:w-3 ${
                      c.ours ? "bg-accent" : "bg-border"
                    }`}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
