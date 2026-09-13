import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 04 — how it works.
 *
 * Four panels, and each one is the *same thing* at a later stage rather than
 * four unrelated icons: source, note, link, graph. A judge can follow one
 * entity across the row and watch it become something you can walk.
 *
 * The accent lands only in the last panel, on the edge that can now be
 * followed — the first evidence the pipeline produces.
 */
const steps = [
  {
    no: "01",
    th: "อ่านโครงสร้าง",
    en: "AST",
    body: "รู้ว่ามี class อะไร method อะไร เรียกอะไร โดยไม่ต้องอ่านเนื้อในทุกบรรทัด",
  },
  {
    no: "02",
    th: "เขียนเป็นโน้ต",
    en: "1 ENTITY → 1 NOTE",
    body: "ทั้ง entity อยู่ในไฟล์เดียว ไม่ถูกหั่น จึงไม่มีชิ้นส่วนที่หลุดบริบท",
  },
  {
    no: "03",
    th: "เชื่อมโน้ตเข้าหากัน",
    en: "[[WIKILINK]]",
    body: "ความสัมพันธ์กลายเป็นลิงก์ที่เดินตามได้ ไม่ใช่ความคล้ายที่ต้องเดา",
  },
  {
    no: "04",
    th: "ตอบโดยเดินตามเส้น",
    en: "BFS TRAVERSAL",
    body: "อ่านเฉพาะ node ที่อยู่บนเส้นทาง ถามซ้ำได้คำตอบเดิมทุกครั้ง",
  },
];

/** A small drawing per stage. Same entity, four states. */
function Glyph({ stage }: { stage: number }) {
  return (
    <svg viewBox="0 0 120 76" className="h-[clamp(2.75rem,6svh,4.25rem)] w-auto" aria-hidden="true">
      {stage === 0 && (
        <g stroke="var(--line)" strokeWidth="1.4">
          {[0, 1, 2, 3, 4].map((r) => (
            <line key={r} x1="14" y1={16 + r * 11} x2={r % 2 ? 82 : 100} y2={16 + r * 11} />
          ))}
        </g>
      )}
      {stage === 1 && (
        <g>
          <rect x="30" y="10" width="60" height="56" fill="none" stroke="var(--line)" strokeWidth="1.4" />
          {[0, 1, 2].map((r) => (
            <line
              key={r}
              x1="40"
              y1={26 + r * 12}
              x2={r === 2 ? 62 : 80}
              y2={26 + r * 12}
              stroke="var(--texture)"
              strokeWidth="1.4"
            />
          ))}
        </g>
      )}
      {stage === 2 && (
        <g>
          <rect x="6" y="18" width="42" height="40" fill="none" stroke="var(--line)" strokeWidth="1.4" />
          <rect x="72" y="18" width="42" height="40" fill="none" stroke="var(--line)" strokeWidth="1.4" />
          <line x1="48" y1="38" x2="72" y2="38" stroke="var(--line)" strokeWidth="1.4" />
        </g>
      )}
      {stage === 3 && (
        <g>
          <line x1="20" y1="22" x2="60" y2="38" stroke="var(--traced)" strokeWidth="2.2" />
          <line x1="60" y1="38" x2="100" y2="24" stroke="var(--traced)" strokeWidth="2.2" />
          <line x1="60" y1="38" x2="46" y2="62" stroke="var(--rule)" strokeWidth="1.4" />
          <line x1="60" y1="38" x2="94" y2="60" stroke="var(--rule)" strokeWidth="1.4" />
          {[
            [20, 22, true],
            [60, 38, true],
            [100, 24, true],
            [46, 62, false],
            [94, 60, false],
          ].map(([x, y, on], i) => (
            <circle
              key={i}
              cx={x as number}
              cy={y as number}
              r={on ? 5 : 3.5}
              fill={on ? "var(--traced)" : "var(--texture)"}
            />
          ))}
        </g>
      )}
    </svg>
  );
}

export function How({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <ol className="grid gap-[clamp(1.25rem,2.4vw,2.5rem)] sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((s, n) => (
          <li
            key={s.no}
            data-enter
            style={{ "--enter-delay": `${200 + n * 170}ms` } as React.CSSProperties}
            className="border-t border-rule pt-[clamp(0.875rem,2.4svh,1.5rem)]"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[clamp(0.8125rem,1vw,1.0625rem)] font-medium tabular-nums text-traced-deep">
                {s.no}
              </span>
              <span className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.16em] text-faint uppercase">
                {s.en}
              </span>
            </div>

            <div className="mt-[clamp(0.875rem,2.4svh,1.5rem)]">
              <Glyph stage={n} />
            </div>

            <p className="mt-[clamp(0.875rem,2.4svh,1.5rem)] text-[clamp(1.125rem,1.6vw,1.75rem)] leading-[1.3] font-medium text-ink">
              {s.th}
            </p>
            <p className="mt-2 text-[clamp(0.9375rem,1.15vw,1.1875rem)] leading-[1.6] text-muted">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </Frame>
  );
}
