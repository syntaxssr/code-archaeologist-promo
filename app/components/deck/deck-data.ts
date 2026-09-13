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
 * of the talk is visible while the screens are still empty. The whole run is
 * about ten minutes and the demo is deliberately the longest thing on it.
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
  { id: "standby", no: "—", th: "พร้อมเริ่ม", en: "STANDBY", seconds: 0 },
  { id: "title", no: "00", th: "Code Archaeologist", en: "TITLE", seconds: 20 },
  { id: "pain", no: "01", th: "เจ็บตรงไหน", en: "THE PAIN", seconds: 60 },
  { id: "why-fail", no: "02", th: "ทำไม AI ที่มีอยู่ยังตอบไม่ได้", en: "WHY IT FAILS TODAY", seconds: 45 },
  // Section 03 runs to three screens. The room holds people who have never
  // installed anything, and "what a skill is" has to land with them before
  // "what ours is" can mean anything.
  { id: "category", no: "03", th: "เราอยู่หมวดไหน", en: "WHERE THIS SITS", seconds: 25 },
  { id: "skill", no: "03", th: "skill คืออะไร", en: "WHAT A SKILL IS", seconds: 40 },
  { id: "what", no: "03", th: "นี่คืออะไร", en: "WHAT IT IS", seconds: 30 },
  { id: "how", no: "04", th: "ทำงานยังไง", en: "HOW IT WORKS", seconds: 60 },
  { id: "vs-rag", no: "05", th: "ต่างจาก RAG ยังไง", en: "VERSUS RAG", seconds: 45 },
  { id: "demo", no: "06", th: "เดโม", en: "DEMO", seconds: 150 },
  { id: "output", no: "07", th: "ได้อะไรออกมา", en: "WHAT YOU GET", seconds: 45 },
  { id: "numbers", no: "08", th: "ตัวเลข", en: "THE NUMBERS", seconds: 45 },
  { id: "use", no: "09", th: "ใช้กับงานเราจริงยังไง", en: "AT iCONEXT", seconds: 60 },
  { id: "ask", no: "10", th: "สั่งอะไรได้บ้าง", en: "WHAT YOU CAN ASK IT", seconds: 45 },
  { id: "team", no: "11", th: "ทีม", en: "TEAM", seconds: 20 },
  { id: "tokens", no: "12", th: "token ที่บริษัทออกให้ ใช้ไปกับอะไร", en: "THE TOKEN BUDGET", seconds: 45 },
  { id: "close", no: "13", th: "ปิด", en: "CLOSE", seconds: 20 },
];

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
