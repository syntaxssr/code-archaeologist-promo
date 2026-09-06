import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    standard: true,
    title: "Standard RAG",
    items: [
      "แบ่งโค้ดเป็น chunk ขนาด ~500 token",
      "ทำลาย call hierarchy และ scope",
      "Similarity search — ไม่ deterministic",
      "อ่าน context ก้อนใหญ่ทุกครั้งที่ถาม",
    ],
  },
  {
    standard: false,
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
    <section id="solution" className="scroll-mt-20 bg-[#F7F5FF] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="The Solution" title="Code Archaeologist คืออะไร" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-[#6B7280]">
          สแกนโค้ดเบสด้วย AST แปลงเป็น Markdown wiki ที่เชื่อมกันด้วย{" "}
          <code className="rounded bg-[#EDE9FE] px-1.5 py-0.5 text-violet-700">
            [[wikilink]]
          </code>{" "}
          พร้อม dependency graph ที่ agent เรียก query ได้ตรงๆ แบบ{" "}
          <strong className="text-[#18181B]">Zero-RAG</strong> — ไม่ต้องเดา
          ไม่ต้อง similarity search
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl border ${
                c.standard
                  ? "border-[#E7E1FB] bg-white"
                  : "border-transparent bg-[#18181B]"
              } p-8`}
            >
              <h3
                className={`text-lg font-bold ${
                  c.standard ? "text-[#6B7280]" : "text-violet-400"
                }`}
              >
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className={`flex gap-3 text-sm leading-relaxed ${
                      c.standard ? "text-[#6B7280]" : "text-white/80"
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        c.standard ? "bg-[#9CA3AF]" : "bg-violet-400"
                      }`}
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
