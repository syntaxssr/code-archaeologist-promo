import { Sheet, type Note } from "./sheet/Sheet";
import { PLAN_H, PLAN_W, edgeLine, edges, findings, roomById, rooms, tracedPath } from "./plan/plan-data";

const notes: Note[] = [
  {
    ref: "Instruments",
    title: "Python stdlib เท่านั้น",
    mono: "0 external dependencies · no server",
    body: "ไม่ต้องมี vector DB ไม่ต้องมี embedding model",
  },
  {
    ref: "Output",
    title: "1 entity = 1 โน้ต",
    mono: "*.md, [[wikilink]]-connected",
    body: "ทั้ง class อยู่ในโน้ตเดียว ไม่ถูกหั่น จึงไม่มีชิ้นส่วนที่หลุดบริบท",
  },
  {
    ref: "Coverage",
    title: "สแกนโครงสร้าง ไม่ได้อ่านทุกบรรทัด",
    mono: "AST, not full text",
    body: "ได้แผนผังว่าอะไรเชื่อมกับอะไร ไม่ใช่บทสรุปของทุกบรรทัด — นั่นคือเหตุผลที่มันเร็ว",
  },
];

const stages = [
  {
    no: "01",
    en: "SET GRID",
    th: "ตั้งกริด",
    mono: "AST scan",
    body: "อ่านโครงสร้างไฟล์ทั้ง repository ยังไม่ตีความอะไร",
  },
  {
    no: "02",
    en: "OUTLINE",
    th: "วาดขอบเขต",
    mono: "1 entity → 1 note",
    body: "แต่ละ class และ method กลายเป็นโน้ต Markdown ของตัวเอง",
  },
  {
    no: "03",
    en: "WALLS",
    th: "วาดผนัง",
    mono: "[[wikilink]]",
    body: "โน้ตเชื่อมถึงกัน ความสัมพันธ์กลายเป็นสิ่งที่เดินตามได้",
  },
  {
    no: "04",
    en: "FINDS",
    th: "ลงจุดที่พบ",
    mono: "dependency graph",
    body: "เกรด ความเสี่ยง และ sink ถูกทำเครื่องหมายลงบนผัง",
  },
  {
    no: "05",
    en: "TRAVERSE",
    th: "เดินเส้นทาง",
    mono: "BFS traversal",
    body: "ตอบคำถามโดยอ่านเฉพาะ node ที่อยู่บนเส้นทาง",
  },
];

/** A stage of the same drawing, at thumbnail scale. Labels are dropped — at
 *  this size they would be texture, and the caption underneath is what the
 *  judge is meant to read. */
function StageThumb({ stage }: { stage: number }) {
  return (
    <svg
      viewBox={`0 0 ${PLAN_W} ${PLAN_H}`}
      className="w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="0" y="0" width={PLAN_W} height={PLAN_H} fill="var(--sheet-2)" />
      <g stroke="var(--grid)" strokeWidth="2">
        {Array.from({ length: 12 }, (_, i) => (
          <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2={PLAN_H} />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 80} x2={PLAN_W} y2={i * 80} />
        ))}
      </g>

      {stage >= 2 &&
        rooms.map((r) => (
          <rect
            key={r.id}
            x={r.x}
            y={r.y}
            width={r.w}
            height={r.h}
            fill="var(--sheet-2)"
            stroke="var(--line)"
            strokeWidth="2.6"
          />
        ))}

      {/* Over the rooms, not under them. At thumbnail scale the gaps between
          rooms are a couple of pixels, so corridors drawn underneath would be
          invisible and this stage would look identical to the one before it. */}
      {stage >= 3 &&
        edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            {...edgeLine([a, b])}
            stroke="var(--line)"
            strokeWidth="3"
            opacity="0.7"
          />
        ))}

      {stage >= 4 &&
        findings.map((f) => {
          const r = roomById(f.room);
          return (
            <rect
              key={f.n}
              x={r.x + r.w - 30}
              y={r.y + 10}
              width="18"
              height="18"
              fill="var(--traced)"
            />
          );
        })}

      {stage >= 5 && (
        <path d={tracedPath} fill="none" stroke="var(--traced)" strokeWidth="7" />
      )}
    </svg>
  );
}

/**
 * Beat 03 — survey order.
 *
 * The plan assembles in the order a surveyor would draw it, and that order is
 * the pipeline: grid, outline, walls, finds, traverse. Nothing here is a new
 * diagram; it is the same drawing from beat 02, arriving.
 */
export function Method() {
  return (
    <Sheet id="method" no="03" titleTh="ลำดับการสำรวจ" titleEn="Survey order" notes={notes}>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stages.map((s, i) => (
            <li
              key={s.no}
              data-note
              style={{ "--note-delay": `${i * 180}ms` } as React.CSSProperties}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-base font-medium tabular-nums text-traced-deep">
                  {s.no}
                </span>
                <span className="h-px flex-1 bg-rule" />
              </div>
              <div className="mt-3 border border-rule bg-sheet-raised p-2.5">
                <StageThumb stage={i + 1} />
              </div>
              <p className="mt-4 text-lg font-medium text-ink">{s.th}</p>
              <p className="mt-1 font-mono text-base uppercase tracking-[0.1em] text-muted">
                {s.en}
              </p>
              <p className="mt-2.5 font-mono text-base text-traced-deep">{s.mono}</p>
              <p className="mt-2 text-lg leading-[1.7] text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
    </Sheet>
  );
}
