import { Sheet, type Note } from "./sheet/Sheet";
import { Plan } from "./plan/Plan";
import { guessEnd, guessHits, guessPath, tracedPath, tracedStations } from "./plan/plan-data";

const notes: Note[] = [
  {
    ref: "Trace 01 — solid",
    title: "เส้นทางจริง 4 hop",
    mono: "login() → verifyToken() → getUser() → db.query()",
    body: "ทุก hop คือ edge จริงที่ชี้บรรทัดได้ ถามซ้ำได้คำตอบเดิม",
  },
  {
    ref: "Trace 02 — dashed",
    title: "การเดาแบบ similarity search",
    mono: "6 rooms opened · 0 edges followed",
    body: "ไม่มี edge ให้เดิน จึงเปิดไฟล์ที่คล้ายแล้วย้อนกลับ สุดท้ายไม่ถึงปลายทาง",
  },
  {
    ref: "Why RAG breaks",
    title: "chunk ตัดกลาง function",
    mono: "~500 tokens per chunk",
    body: "การหั่นโค้ดทำลาย scope และ call hierarchy ชิ้นส่วนที่เหลือไม่รู้ว่าถูกเรียกจากไหน",
  },
];

export function Solution() {
  return (
    <Sheet id="solution" no="02" titleTh="สองเส้นทาง" titleEn="Two routes" notes={notes}>
        <Plan ariaLabel="ผังโค้ดเบส มีสองเส้นทางจากจุดเริ่มเดียวกัน เส้นทึบคือเส้นทางที่ไล่ตาม dependency graph จริง เส้นประคือการเดาที่วนแล้วไม่ถึงปลายทาง">
          {/* Conjectured first, so the evidenced line lands on top of it.

              It is drawn through a mask rather than animated directly: the draw
              animation works by setting stroke-dasharray, which would overwrite
              this path's own dash pattern and render the guess as a solid line —
              destroying the one convention the whole sheet rests on. */}
          <defs>
            <mask id="guess-reveal">
              <path
                d={guessPath}
                fill="none"
                stroke="#fff"
                strokeWidth="16"
                data-draw
                style={{ "--draw-delay": "980ms", "--draw-dur": "1300ms" } as React.CSSProperties}
              />
            </mask>
          </defs>
          <path
            d={guessPath}
            fill="none"
            stroke="var(--muted)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            mask="url(#guess-reveal)"
          />
          {guessHits.map((h, i) => (
            <circle
              key={i}
              cx={h.x}
              cy={h.y}
              r="7"
              fill="var(--sheet)"
              stroke="var(--muted)"
              strokeWidth="1.5"
              data-note
              style={{ "--note-delay": `${1100 + i * 150}ms` } as React.CSSProperties}
            />
          ))}
          <g data-note style={{ "--note-delay": "2300ms" } as React.CSSProperties}>
            <circle
              cx={guessEnd.x}
              cy={guessEnd.y}
              r="9"
              fill="var(--sheet)"
              stroke="var(--muted)"
              strokeWidth="1.5"
            />
            <text
              x={guessEnd.x + 18}
              y={guessEnd.y + 7}
              fontSize="21"
              fontFamily="var(--font-plex-mono), monospace"
              fill="var(--muted)"
            >
              ?
            </text>
          </g>

          <path
            d={tracedPath}
            fill="none"
            stroke="var(--traced)"
            strokeWidth="2.5"
            data-draw
            style={{ "--draw-delay": "1500ms", "--draw-dur": "1100ms" } as React.CSSProperties}
          />
          {tracedStations.map((s, i) => (
            <g
              key={s.n}
              data-note
              style={{ "--note-delay": `${1750 + i * 240}ms` } as React.CSSProperties}
            >
              <rect x={s.x - 6} y={s.y - 6} width="12" height="12" fill="var(--traced)" />
              {/* Above the line, never on it — the route is 2.5px and would
                  otherwise run straight through its own caption. */}
              <text
                x={s.flip ? s.x - 14 : s.x + 14}
                textAnchor={s.flip ? "end" : "start"}
                y={s.y - 10}
                fontSize="18"
                fontWeight="500"
                letterSpacing="1.2"
                fontFamily="var(--font-plex-mono), monospace"
                fill="var(--traced-deep)"
              >
                {s.n} {s.call}
              </text>
            </g>
          ))}
        </Plan>

        {/* The convention, stated once, where it is first used. Everything else
            on the sheet obeys it. */}
        <dl className="mt-7 flex flex-wrap gap-x-12 gap-y-4 border-t border-rule pt-5">
          <div className="flex items-center gap-3.5">
            <svg width="52" height="10" aria-hidden="true">
              <line x1="0" y1="5" x2="52" y2="5" stroke="var(--traced)" strokeWidth="2.5" />
            </svg>
            <dt className="font-mono text-base uppercase tracking-[0.12em] text-traced-deep">
              Traced
            </dt>
            <dd className="text-lg text-ink">มีหลักฐาน</dd>
          </div>
          <div className="flex items-center gap-3.5">
            <svg width="52" height="10" aria-hidden="true">
              <line
                x1="0"
                y1="5"
                x2="52"
                y2="5"
                stroke="var(--muted)"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />
            </svg>
            <dt className="font-mono text-base uppercase tracking-[0.12em] text-muted">
              Inferred
            </dt>
            <dd className="text-lg text-muted">การเดา</dd>
          </div>
        </dl>
    </Sheet>
  );
}
