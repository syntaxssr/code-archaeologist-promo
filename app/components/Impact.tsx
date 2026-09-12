import { Sheet, type Note } from "./sheet/Sheet";
import { PLAN_H, PLAN_W, rooms, tracedPath } from "./plan/plan-data";
import { PlanDefs } from "./plan/Plan";

const opened = ["router", "mw", "session", "query"];

const notes: Note[] = [
  {
    ref: "Measured",
    title: "4 จาก 14 entity",
    mono: "4 / 14 nodes read",
    body: "นับจากเส้นทางที่วาดอยู่บนผังแผ่นนี้จริงๆ ไม่ใช่ตัวเลขที่ตั้งขึ้น",
  },
  {
    ref: "Estimate",
    title: "token ที่ประหยัดได้ ยังเป็นค่าประมาณ",
    mono: "not yet measured on a real repo",
    body: "คำนวณจากสัดส่วน node ที่ต้องอ่าน ยังไม่ได้วัดกับ repository จริง ต้องวัดก่อนวันที่ 26",
  },
  {
    ref: "Why it holds",
    title: "ยิ่ง repo ใหญ่ ยิ่งได้เปรียบ",
    mono: "cost ∝ path length, not repo size",
    body: "อ่านทั้ง repo แพงขึ้นตามขนาด เดินตามเส้นทางแพงขึ้นตามความยาวเส้นทาง",
  },
];

/** The same plan at the same scale, twice. Identical scale is the entire
 *  argument — two drawings at different sizes prove nothing. */
function ComparisonPlan({ mode }: { mode: "all" | "opened" }) {
  return (
    <svg
      viewBox={`0 0 ${PLAN_W} ${PLAN_H}`}
      className="w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <PlanDefs />
      <rect x="0" y="0" width={PLAN_W} height={PLAN_H} fill="var(--sheet-2)" />
      {rooms.map((r) => {
        const isOpen = mode === "all" || opened.includes(r.id);
        return (
          <rect
            key={r.id}
            x={r.x}
            y={r.y}
            width={r.w}
            height={r.h}
            fill={isOpen ? "url(#hatch-traced)" : "none"}
            stroke={isOpen ? "var(--traced)" : "var(--line)"}
            strokeWidth={isOpen ? "3" : "2"}
            opacity={isOpen ? 1 : 0.35}
          />
        );
      })}
      {mode === "opened" && (
        <path d={tracedPath} fill="none" stroke="var(--traced)" strokeWidth="6" />
      )}
    </svg>
  );
}

function Panel({
  figure,
  of,
  th,
  en,
  mode,
}: {
  figure: string;
  of: string;
  th: string;
  en: string;
  mode: "all" | "opened";
}) {
  return (
    <div>
      <div className="border border-line bg-sheet-raised p-4">
        <ComparisonPlan mode={mode} />
      </div>
      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-mono text-[clamp(2.5rem,4.5vw,4.5rem)] font-semibold leading-none tabular-nums text-traced-deep">
          {figure}
        </span>
        <span className="font-mono text-2xl tabular-nums text-faint">/ {of}</span>
      </div>
      <p className="mt-3 text-xl font-medium text-ink">{th}</p>
      <p className="mt-1 font-mono text-base uppercase tracking-[0.1em] text-muted">{en}</p>
    </div>
  );
}

/**
 * Beat 06 — two plans, one scale.
 *
 * The area you would have had to open, and the area actually opened. The
 * headline figure is the one the drawing can prove; the token saving is
 * labelled as the estimate it currently is, because a number that cannot be
 * checked is the fastest way to lose a room.
 */
export function Impact() {
  return (
    <Sheet
      id="impact"
      no="06"
      titleTh="สองผัง มาตราส่วนเดียวกัน"
      titleEn="Two plans, one scale"
      notes={notes}
    >
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
          <Panel
            mode="all"
            figure="14"
            of="14"
            th="ถ้าต้องอ่านทั้ง repository"
            en="Read everything"
          />
          <Panel
            mode="opened"
            figure="4"
            of="14"
            th="อ่านเฉพาะ node บนเส้นทาง"
            en="Read the path only"
          />
        </div>
        <p className="mt-9 max-w-[70ch] border-t border-rule pt-6 text-xl leading-[1.7] text-muted">
          ผังสองแผ่นนี้เป็นผังเดียวกันและมาตราส่วนเดียวกัน ต่างกันแค่พื้นที่ที่ถูกเปิด —
          <span className="font-medium text-ink"> คำถามเดียวกัน คำตอบเดียวกัน อ่านน้อยกว่า</span>
        </p>
    </Sheet>
  );
}
