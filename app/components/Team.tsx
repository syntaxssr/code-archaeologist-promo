import { Sheet, type Note } from "./sheet/Sheet";
import { TitleBlock } from "./sheet/TitleBlock";

const recorders = [
  {
    name: "ณัฐวุฒิ รอดทอง",
    nick: "อุด้ง",
    role: "LEAD TECH — THE SKILL",
    th: "เขียน skill ทั้งตัว ตั้งแต่ AST scan ถึง Explorer",
  },
  {
    name: "พีรพล จันทะแจ่ม",
    nick: "BB",
    role: "PRESENTATION MATERIALS",
    th: "เว็บแผ่นนี้ และสไลด์ที่ใช้บนเวที",
  },
];

const notes: Note[] = [
  {
    ref: "Team 03",
    title: "สองคน สองหน้าที่",
    mono: "iCONEXT AI Challenge Day 2026",
    body: "คนหนึ่งสร้างของ อีกคนทำให้คนอื่นเห็นว่ามันทำอะไรได้",
  },
  {
    ref: "Convention",
    title: "ทำไมส่วนนี้ถึงเป็นช่องลงชื่อ",
    mono: "Recorder / Date / Initials",
    body: "แบบฟอร์มบันทึกทางโบราณคดีจบด้วยสามช่องนี้เสมอ ส่วนนี้จึงไม่ได้ถูกคิดขึ้นใหม่",
  },
];

/**
 * Beat 07 — the title block.
 *
 * A real context record ends with Recorder / Date / Initials: who recorded it,
 * when, and who checked it. The team section needed no invention — it was
 * already the last row of the form.
 */
export function Team() {
  return (
    <Sheet id="team" no="07" titleTh="ช่องลงชื่อ" titleEn="The title block" notes={notes}>
      <div className="grid gap-8 2xl:grid-cols-[minmax(0,1fr)_auto] 2xl:items-end">
        <div className="border border-line">
          {recorders.map((r, i) => (
            <div
              key={r.name}
              className={`flex flex-wrap items-baseline gap-x-6 gap-y-2 px-6 py-4 ${
                i === 0 ? "" : "border-t border-rule"
              }`}
            >
              <span className="w-[110px] shrink-0 font-mono text-base uppercase tracking-[0.14em] text-faint">
                Recorder
              </span>
              <div className="min-w-0">
                <p className="text-xl font-medium text-ink">
                  {r.name}{" "}
                  <span className="font-mono text-lg text-traced-deep">({r.nick})</span>
                </p>
                <p className="mt-1.5 font-mono text-base uppercase tracking-[0.1em] text-muted">
                  {r.role}
                </p>
                <p className="mt-1.5 text-lg leading-[1.65] text-muted">{r.th}</p>
              </div>
            </div>
          ))}
        </div>

        <TitleBlock />
      </div>
    </Sheet>
  );
}
