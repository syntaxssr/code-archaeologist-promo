import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";

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
    <Section id="solution">
      <SectionHeading kicker="The Solution" title="Code Archaeologist คืออะไร" />
      <p className="mx-auto mt-7 max-w-2xl leading-[1.7] text-fg-muted">
        สแกนโค้ดเบสด้วย AST แปลงเป็น Markdown wiki ที่เชื่อมกันด้วย{" "}
        <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-sm text-accent">
          [[wikilink]]
        </code>{" "}
        พร้อม dependency graph ที่ agent เรียก query ได้ตรงๆ แบบ{" "}
        <strong className="font-semibold text-fg">Zero-RAG</strong> — ไม่ต้องเดา
        ไม่ต้อง similarity search
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {cards.map((c) => (
          <Card key={c.title} accent={c.ours}>
            <h3
              className={`font-mono text-lg font-semibold ${
                c.ours ? "text-accent" : "text-fg-muted"
              }`}
            >
              {c.title}
            </h3>
            <ul className="mt-5 space-y-3.5">
              {c.items.map((it) => (
                <li
                  key={it}
                  className={`flex gap-3 text-sm leading-[1.7] ${
                    c.ours ? "text-fg" : "text-fg-muted"
                  }`}
                >
                  <span
                    className={`mt-2.5 h-px w-3 shrink-0 ${
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
