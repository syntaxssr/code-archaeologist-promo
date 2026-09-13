/**
 * The run. One entry per screen, in stage order.
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
  /** Screens default to paper. Dark is a pacing device, not a theme — use it
   *  where the screen should land differently from the one before it. */
  tone?: "dark";
};

export const slides: Slide[] = [
  { id: "title", no: "00", th: "Code Archaeologist", en: "TITLE", seconds: 20, tone: "dark" },
  { id: "pain", no: "01", th: "เจ็บตรงไหน", en: "THE PAIN", seconds: 60 },
  { id: "why-fail", no: "02", th: "ทำไม AI ที่มีอยู่ยังตอบไม่ได้", en: "WHY IT FAILS TODAY", seconds: 45 },
  { id: "what", no: "03", th: "นี่คืออะไร", en: "WHAT IT IS", seconds: 30 },
  { id: "how", no: "04", th: "ทำงานยังไง", en: "HOW IT WORKS", seconds: 60 },
  { id: "vs-rag", no: "05", th: "ต่างจาก RAG ยังไง", en: "VERSUS RAG", seconds: 45 },
  { id: "demo", no: "06", th: "เดโม", en: "DEMO", seconds: 150 },
  { id: "output", no: "07", th: "ได้อะไรออกมา", en: "WHAT YOU GET", seconds: 45 },
  { id: "numbers", no: "08", th: "ตัวเลข", en: "THE NUMBERS", seconds: 45 },
  { id: "use", no: "09", th: "ใช้กับงานเราจริงยังไง", en: "AT iCONEXT", seconds: 60 },
  { id: "criteria", no: "10", th: "ตรงเกณฑ์ตรงไหน", en: "AGAINST THE CRITERIA", seconds: 45 },
  { id: "team", no: "11", th: "ทีม", en: "TEAM", seconds: 20 },
  { id: "close", no: "12", th: "ปิด", en: "CLOSE", seconds: 20 },
];

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
