import { Frame } from "./Frame";
import { Shot } from "./Shot";
import type { ScreenProps } from "./index";
import stage1 from "@/public/shots/stage-1.png";
import stage2 from "@/public/shots/stage-2.png";
import stage3 from "@/public/shots/stage-3.png";
import stage4 from "@/public/shots/stage-4.png";

/**
 * Screen 04 — how it works.
 *
 * Four panels, and each one is the *same function* at a later stage rather than
 * four unrelated icons. It used to be four drawings of that idea; it is now the
 * four artefacts themselves, taken from the run against the skill's own
 * repository on 13 September 2026 — the source, the note built from it, the
 * edge recorded in the graph, and the traced answer that walks it.
 *
 * `langs_extract.extract_file` is the thread. A judge can read its name in all
 * four panels and watch it turn from text into something you can follow.
 *
 * Every panel is verbatim: a contiguous slice of a real file, or a command's
 * real output. The accent falls only on the relationship — the wikilink, the
 * edge's fields, the arrows in the trace — which is the deck's rule that the
 * accent marks evidence.
 */
const steps = [
  {
    no: "01",
    en: "SOURCE",
    th: "อ่านโครงสร้างด้วย parser",
    shot: stage1,
    caption: "scripts/extract/langs_extract.py:1378",
    alt: "โค้ด Python จริงของฟังก์ชัน extract_file",
  },
  {
    no: "02",
    en: "1 FUNCTION → 1 NOTE",
    th: "เขียนเป็นโน้ตใบเดียว ไม่หั่น",
    shot: stage2,
    caption: "data/flow/notes/langs_extract.extract_file.md",
    alt: "ไฟล์โน้ตจริงของฟังก์ชันเดียวกัน มีลิงก์ไปฟังก์ชันที่มันเรียก",
  },
  {
    no: "03",
    en: "EDGE",
    th: "ความสัมพันธ์กลายเป็นข้อมูล",
    shot: stage3,
    caption: "data/flow/flow_graph.json",
    alt: "edge จริงในกราฟ บอกว่า extract_file เรียก _generic",
  },
  {
    no: "04",
    en: "BFS TRAVERSAL",
    th: "ตอบด้วยการเดินตามเส้น",
    shot: stage4,
    caption: "stdout · trace_path.py",
    alt: "ผลลัพธ์จริงของคำสั่ง trace_path แสดงเส้นทาง 5 โหนด",
  },
];

export function How({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <ol className="grid min-h-0 flex-1 grid-cols-2 gap-x-[clamp(1.25rem,3vw,3rem)] gap-y-[clamp(0.75rem,2.2svh,1.5rem)]">
        {steps.map((s, n) => (
          <li
            key={s.no}
            data-enter
            style={{ "--enter-delay": `${200 + n * 170}ms` } as React.CSSProperties}
            className="flex min-h-0 flex-col border-t border-rule pt-[clamp(0.5rem,1.5svh,0.9rem)]"
          >
            <div className="flex flex-none items-baseline gap-3">
              <span className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] font-medium tabular-nums text-traced-deep">
                {s.no}
              </span>
              <span className="font-mono text-[clamp(0.6875rem,0.9vw,0.9375rem)] tracking-[0.16em] text-faint uppercase">
                {s.en}
              </span>
              <span className="ml-auto text-[clamp(0.9375rem,1.3vw,1.375rem)] leading-[1.3] font-medium text-ink">
                {s.th}
              </span>
            </div>

            <Shot
              src={s.shot}
              alt={s.alt}
              caption={s.caption}
              className="mt-[clamp(0.4rem,1.2svh,0.75rem)] min-h-0 flex-1"
              fit="contain"
            />
          </li>
        ))}
      </ol>
    </Frame>
  );
}
