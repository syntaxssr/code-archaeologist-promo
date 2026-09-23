/**
 * The run. One entry per screen, in stage order.
 *
 * A section can run to more than one screen: several entries share a `no`, and
 * the frame then prints "03 · 2/3" so the room knows it is still inside the
 * same idea. One page per section was a constraint that made some sections
 * either cramped or shallow — the rule now is one *idea* per section, however
 * many screens that idea needs.
 *
 * `seconds` is the rehearsal budget, not a countdown — it is here so the shape
 * of the talk is visible while the screens are still empty. The slot is 15 to
 * 25 minutes; the run is about eighteen, in the four parts the brief asks for —
 * what we built, why it helps, how we built it with AI, and the close — and the
 * demo is deliberately the longest thing on it.
 */
export type Slide = {
  id: string;
  no: string;
  th: string;
  en: string;
  seconds: number;
  /** The deck runs dark. A screen can opt into paper where it should land
   *  differently from the one before it — tone is the cheapest pacing device a
   *  deck has. */
  tone?: "light";
};

export const slides: Slide[] = [
  // Before the run. It holds the stage until the judges give the signal, so it
  // carries no number and no budget — it is not part of the ten minutes.
  { id: "standby", no: "—", th: "พร้อมเริ่ม", en: "STANDBY", seconds: 0, tone: "light" },

  // Part 1 — what we built.
  { id: "title", no: "00", th: "Code Archaeologist", en: "TITLE", seconds: 20, tone: "light" },
  { id: "pain", no: "01", th: "แก้แล้วจะพังตรงไหน", en: "THE PAIN", seconds: 60, tone: "light" },
  { id: "why-fail", no: "02", th: "เครื่องมือที่มีอยู่เดาจากความคล้าย", en: "WHY IT FAILS TODAY", seconds: 45, tone: "light" },
  { id: "what", no: "03", th: "สแกนครั้งเดียว ได้แผนที่ทั้ง repo", en: "WHAT IT IS", seconds: 45, tone: "light" },

  // Part 2 — why it helps. Told as features and one real case; the deep
  // technical material moved to the appendix, for questions.
  { id: "output", no: "04", th: "ได้อะไรออกมาให้คนอ่าน", en: "WHAT YOU GET", seconds: 90, tone: "light" },
  { id: "demo", no: "05", th: "เดโม", en: "DEMO", seconds: 240, tone: "light" },
  { id: "case", no: "06", th: "เจอจริง — entity เรียก service ผิด layer", en: "A REAL FINDING", seconds: 90, tone: "light" },
  { id: "ask", no: "07", th: "ทำอะไรได้บ้าง", en: "WHAT IT CAN DO", seconds: 60, tone: "light" },
  { id: "use", no: "08", th: "ใช้ตอนไหน", en: "WHEN YOU REACH FOR IT", seconds: 60, tone: "light" },
  // The one screen that talks about tokens, and it says what is true: the map
  // is rebuilt by scripts at no token cost; tokens are spent only on asking.
  { id: "fresh", no: "09", th: "อัปเดตทุกครั้งที่มีโค้ดใหม่", en: "ALWAYS UP TO DATE", seconds: 60, tone: "light" },
  { id: "local", no: "10", th: "โค้ดไม่ออกจากเครื่อง", en: "IT STAYS LOCAL", seconds: 45, tone: "light" },

  // Part 3 — how we built it with AI. The brief's own question.
  { id: "built", no: "11", th: "เราใช้ AI สร้าง skill นี้ยังไง", en: "BUILT WITH AI", seconds: 90, tone: "light" },
  { id: "steps", no: "12", th: "ขั้นตอนคร่าว ๆ", en: "HOW WE GOT HERE", seconds: 120, tone: "light" },

  // Part 4 — the close.
  { id: "team", no: "13", th: "ทีม", en: "TEAM", seconds: 30, tone: "light" },
  { id: "close", no: "14", th: "ปิด", en: "CLOSE", seconds: 30, tone: "light" },

  // Appendix. After the close, for questions only — the technical depth the
  // team wants on hand but not in the talk. Lettered, so they sit outside the
  // numbered run and add nothing to its budget.
  { id: "how", no: "A1", th: "ทำงานยังไง", en: "HOW IT WORKS", seconds: 0, tone: "light" },
  { id: "vs-rag", no: "A2", th: "ต่างจาก RAG ยังไง", en: "VERSUS RAG", seconds: 0, tone: "light" },
];

/* Reshaped on 23 September 2026 after the team's review: the slot is 15–25
 * minutes, the brief asks how AI was used to build the thing, and testing
 * showed the skill does not reliably save tokens — sometimes it costs more,
 * because the skill's own context is loaded too. So the run tells features and
 * a real finding, adds a part on building it with AI, says the one true thing
 * about tokens (screen 09), and moves how-it-works and versus-RAG to an
 * appendix.
 *
 * Cut earlier the same day, when the pitch stopped leading with token cost and
 * started leading with what a developer reads. Their screens are still in
 * `screens/`, so any of them can come back by adding a row above:
 *
 *   category, skill — 65 seconds spent teaching what an agent skill is, which
 *     is not our idea and not what the room is judging.
 *   numbers, tokens — both argued cost. The one number worth keeping, the
 *     architectural health grade, belongs on screen 04 with the rest of the
 *     output.
 *   ask-review — folded into one screen for every command (now screen 07).
 */

/** The numbered screens — the run itself, without the standby in front of it. */
export const run = slides.filter((s) => /^\d+$/.test(s.no));

export const lastNo = run[run.length - 1].no;

/** Where a screen sits inside its section, for sections that run to more than
 *  one screen. Null for a section that is a single screen, so the frame prints
 *  nothing extra. */
export function part(id: string): { n: number; of: number } | null {
  const slide = slides.find((s) => s.id === id);
  if (!slide) return null;
  const peers = slides.filter((s) => s.no === slide.no);
  return peers.length > 1 ? { n: peers.indexOf(slide) + 1, of: peers.length } : null;
}

export const totalSeconds = slides.reduce((a, s) => a + s.seconds, 0);

export const fmt = (s: number) =>
  s >= 60 ? `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}` : `0:${String(s).padStart(2, "0")}`;


/* ---------------------------------------------------------------------- */
/* The URL is the deck's position.                                          */
/*                                                                          */
/* Keeping it there rather than in component state means a deep link, a      */
/* reload and the deck's own controls cannot disagree about which screen is  */
/* showing — which matters during rehearsal, when you jump straight to the   */
/* screen you are drilling.                                                  */
/* ---------------------------------------------------------------------- */

let listeners: (() => void)[] = [];

export function currentIndex() {
  const id = window.location.hash.replace(/^#/, "");
  const i = slides.findIndex((s) => s.id === id);
  return i < 0 ? 0 : i;
}

export function subscribeIndex(cb: () => void) {
  listeners.push(cb);
  window.addEventListener("hashchange", cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
    window.removeEventListener("hashchange", cb);
  };
}

/** replaceState rather than assigning location.hash, so thirteen screens do
 *  not leave thirteen entries in the back button. */
export function goTo(n: number) {
  const i = Math.min(slides.length - 1, Math.max(0, n));
  if (i === currentIndex()) return;
  window.history.replaceState(null, "", `#${slides[i].id}`);
  listeners.forEach((l) => l());
}
