import { Sheet, type Note } from "./sheet/Sheet";
import { Plan } from "./plan/Plan";
import { BlastRadius } from "./plan/BlastRadius";
import { findings, roomById } from "./plan/plan-data";

const notes: Note[] = findings.map((f) => ({
  ref: `Find ${f.n} · ${f.feature}`,
  title: f.th,
}));

/** Everything within the radius of AUTH/SESSION — seven of fourteen. Struck
 *  from a central room so the circle stays on the sheet rather than running off
 *  its edge. */
const blastRooms = ["session", "mw", "charge", "validate", "query", "config", "cli"].map((id) => {
  const r = roomById(id);
  return { x: r.x, y: r.y, w: r.w, h: r.h };
});

const origin = roomById("session");

const entries = [
  ["2.5px solid", "เส้นทางที่ไล่ตาม graph จริง", "traced"],
  ["1.5px dashed", "การเดา", "muted"],
  ["2px circle", "รัศมีผลกระทบ", "traced"],
] as const;

/** A strip along the bottom edge of the drawing, which is where a legend
 *  belongs. As a block it cost this beat its one screen. */
function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border border-line px-5 py-3">
      <span className="font-mono text-base font-medium uppercase tracking-[0.14em] text-faint">
        Legend
      </span>
      {entries.map(([spec, th, tone]) => (
        <span key={spec} className="flex items-baseline gap-2.5">
          <span
            className={`font-mono text-base uppercase tracking-[0.1em] ${
              tone === "traced"
                ? "text-traced-deep"
                : tone === "muted"
                  ? "text-muted"
                  : "text-line"
            }`}
          >
            {spec}
          </span>
          <span className="text-lg text-muted">{th}</span>
        </span>
      ))}
      <span className="flex items-baseline gap-2.5">
        <span className="font-mono text-base uppercase tracking-[0.14em] text-faint">Grade</span>
        <span className="font-mono text-base text-grade-good">A·B</span>
        <span className="font-mono text-base text-muted">C·D</span>
        <span className="font-mono text-base text-grade-bad">E·F</span>
      </span>
    </div>
  );
}

/**
 * Beat 04 — what the survey found.
 *
 * The six capabilities are not six cards; they are six marks on the plan, each
 * keyed to a numbered note in the margin. Six cards of small body copy would be
 * unreadable from the back of the room — six marks on one drawing are not.
 */
export function Features() {
  return (
    <Sheet
      id="features"
      no="04"
      titleTh="สิ่งที่พบบนผัง"
      titleEn="Features on the plan"
      notes={notes}
    >
      <Plan
        ariaLabel="ผังเดิม มีเครื่องหมายหมายเลข 01 ถึง 06 ทำเครื่องหมายสิ่งที่ skill ตรวจพบ และวงรัศมีผลกระทบจากห้อง AUTH/SESSION"
        showEdges
        maxH="min(50svh, calc(100svh - 520px))"
      >
        <BlastRadius
          cx={origin.x + origin.w / 2}
          cy={origin.y + origin.h / 2}
          max={250}
          hatch={blastRooms}
        />

        {findings.map((f, i) => {
          const r = roomById(f.room);
          return (
            <g
              key={f.n}
              data-note
              style={{ "--note-delay": `${900 + i * 180}ms` } as React.CSSProperties}
            >
              {/* Bottom-right: a long label like MIDDLEWARE/AUTH runs all the
                  way to the room's top-right corner. */}
              <rect
                x={r.x + r.w - 38}
                y={r.y + r.h - 38}
                width="26"
                height="26"
                fill="var(--traced)"
              />
              <text
                x={r.x + r.w - 25}
                y={r.y + r.h - 19}
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fontFamily="var(--font-plex-mono), monospace"
                fill="var(--on-traced)"
              >
                {f.n}
              </text>
            </g>
          );
        })}
      </Plan>

      <div className="mt-6">
        <Legend />
        <p className="mt-4 text-lg leading-[1.65] text-muted">
          <span className="font-medium text-ink">เลื่อนหน้าจอเพื่อขยายรัศมี</span> —
          ห้องที่ถูกแรเงาคือห้องที่อยู่ในรัศมีจริง ไม่ใช่ห้องที่หน้าตาคล้ายกัน
        </p>
      </div>
    </Sheet>
  );
}
