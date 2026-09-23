import Image from "next/image";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import stage1 from "@/public/shots/stage-1.png";
import stage2 from "@/public/shots/stage-2.png";
import stage3 from "@/public/shots/stage-3.png";
import stage4 from "@/public/shots/stage-4.png";

/**
 * Appendix A1 — how it works. Moved out of the talk and after the close: the
 * team tells the story as features and keeps this depth for questions.
 *
 * Four panels, and each one is the *same function* at a later stage rather than
 * four unrelated icons: the source, the note built from it, the edge recorded
 * in the graph, and the traced answer that walks it. Taken from the run against
 * the skill's own repository on 13 September 2026.
 *
 * `langs_extract.extract_file` is the thread. A judge can read its name in all
 * four panels and watch it turn from text into something you can follow — which
 * is why the panels get the whole screen at two by two: in a single row they
 * shrink until the code in them cannot be read, and then they are decoration.
 *
 * Every panel is verbatim: a contiguous slice of a real file, or a command's
 * real output. The accent inside them falls only on the relationship — the
 * wikilink, the edge's fields, the arrows in the trace.
 *
 * Latin mono names the stage, Thai says what happens in it, on separate lines.
 */
const steps = [
  {
    no: "01",
    en: "Source",
    th: "อ่านโครงสร้างด้วย tree-sitter",
    shot: stage1,
    caption: "scripts/extract/langs_extract.py:1378",
    alt: "โค้ด Python จริงของฟังก์ชัน extract_file",
  },
  {
    no: "02",
    en: "1 function → 1 note",
    th: "เขียนเป็นโน้ตใบเดียว ไม่หั่น",
    shot: stage2,
    // The tail of data/flow/notes/… — the full path is one character too wide
    // for a 4:3 projector and would lose its end to the ellipsis.
    caption: "notes/langs_extract.extract_file.md",
    alt: "ไฟล์โน้ตจริงของฟังก์ชันเดียวกัน มีลิงก์ไปฟังก์ชันที่มันเรียก",
  },
  {
    no: "03",
    en: "Edge",
    th: "ความสัมพันธ์กลายเป็นข้อมูล",
    shot: stage3,
    caption: "data/flow/flow_graph.json",
    alt: "edge จริงในกราฟ บอกว่า extract_file เรียก _generic",
  },
  {
    no: "04",
    en: "Trace",
    th: "ตอบด้วยการเดินตามเส้น",
    shot: stage4,
    caption: "stdout · trace_path.py",
    alt: "ผลลัพธ์จริงของคำสั่ง trace_path แสดงเส้นทาง 5 โหนด",
  },
];

export function How({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        ตามฟังก์ชันเดียว ผ่านสี่ขั้น
      </h2>

      <ol className="mt-[clamp(0.75rem,2.6svh,1.75rem)] grid min-h-0 flex-1 grid-cols-2 gap-x-[clamp(0.75rem,1.6vw,2rem)] gap-y-[clamp(0.75rem,2.2svh,1.5rem)]">
        {steps.map((s, n) => (
          <li
            key={s.no}
            data-enter
            style={{ "--enter-delay": `${360 + n * 170}ms` } as React.CSSProperties}
            className="flex min-h-0 flex-col"
          >
            <p className="flex-none font-mono text-[clamp(1rem,0.95vw,1.0625rem)] font-medium tracking-[0.14em] uppercase">
              <span className="tabular-nums text-traced-deep">{s.no}</span>
              <span className="ml-3 text-faint">{s.en}</span>
            </p>
            <p className="mt-[clamp(0.15rem,0.5svh,0.35rem)] flex-none text-[clamp(1rem,1.45vw,1.625rem)] leading-[1.3] font-medium text-ink">
              {s.th}
            </p>

            <figure className="mt-[clamp(0.4rem,1.2svh,0.75rem)] flex min-h-0 flex-1 flex-col">
              <div className="min-h-0 flex-1 overflow-hidden rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-[#161412]">
                <Image src={s.shot} alt={s.alt} className="h-full w-full object-contain object-left" />
              </div>
              <figcaption className="mt-[clamp(0.3rem,0.9svh,0.55rem)] truncate font-mono text-[clamp(1rem,0.9vw,1rem)] tracking-[0.04em] text-faint">
                {s.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>
    </Frame>
  );
}
