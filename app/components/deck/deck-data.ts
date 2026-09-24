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
 * 25 minutes; the run is about fifteen and a quarter, and the demo is
 * deliberately the longest thing on it.
 */
export type Slide = {
  id: string;
  no: string;
  /** The screen's topic. Printed in the top-left corner of every content
   *  screen (Frame.tsx), so it names what the screen is about rather than
   *  repeating the screen's own heading. */
  th: string;
  en: string;
  seconds: number;
  /** The deck runs dark. A screen can opt into paper where it should land
   *  differently from the one before it — tone is the cheapest pacing device a
   *  deck has. */
  tone?: "light";
  /** For a section that runs to several screens: the section's own name. The
   *  frame then prints it over a row of the section's steps — each screen's
   *  `th` — with the current one marked, so the room sees where it is in the
   *  story and how much of it is left. */
  section?: string;
};

export const slides: Slide[] = [
  // Before the run. It holds the stage until the judges give the signal, so it
  // carries no number and no budget — it is not part of the run.
  { id: "standby", no: "—", th: "พร้อมเริ่ม", en: "STANDBY", seconds: 0, tone: "light" },

  // The name says "skill", and the next screen says what a skill is.
  { id: "title", no: "00", th: "Code Archaeologist", en: "TITLE", seconds: 20, tone: "light" },
  { id: "skill", no: "01", th: "skill คืออะไร", en: "WHAT A SKILL IS", seconds: 40, tone: "light" },

  // What this skill is, told in three steps: the problem, how it helps, and
  // what comes out. One section, so the three read as one answer.
  { id: "pain", no: "02", section: "Code Archaeologist คืออะไร", th: "ปัญหาที่เจอ", en: "THE PAIN", seconds: 120, tone: "light" },
  { id: "what", no: "02", section: "Code Archaeologist คืออะไร", th: "Code Archaeologist เข้ามาช่วยยังไง", en: "HOW IT HELPS", seconds: 45, tone: "light" },
  { id: "output", no: "02", section: "Code Archaeologist คืออะไร", th: "ผลลัพธ์ที่ได้", en: "WHAT YOU GET", seconds: 90, tone: "light" },

  // Then the real thing, and whether a company can use it.
  { id: "demo", no: "03", th: "เดโม", en: "DEMO", seconds: 300, tone: "light" },
  { id: "company", no: "04", th: "ใช้ในบริษัทได้จริง", en: "READY FOR WORK", seconds: 75, tone: "light" },

  // How we built it with AI — the brief's own question, told after the room
  // has seen why the thing is worth building.
  { id: "built", no: "05", th: "เราใช้ AI สร้าง skill นี้ยังไง", en: "BUILT WITH AI", seconds: 180, tone: "light" },

  // The faces and the line to leave with, on one screen. It ends the run, so its
  // install command stays up through the questions.
  { id: "team", no: "06", th: "ทีม", en: "TEAM", seconds: 45, tone: "light" },
];

/* Cut to nine screens on 23 September 2026: sixteen was too many to present,
 * and several said the same thing twice. Merged, not lost —
 *
 *   case (a real finding: an entity calling a service) is meant for the pain
 *     screen, as the pain the team actually hit.
 *   fresh (always up to date) and local (it stays local) become "company".
 *   built and steps (building it with AI) become "built".
 *   team becomes the first of the last section's two screens, before the close.
 *
 * Later the same day, what, pain and output became one section — "what Code
 * Archaeologist is" — in three steps (the problem, how it helps, what comes
 * out), and the sections after it were renumbered 03 to 06.
 *   use (the four moments) is cut; the presenter can say it over the demo.
 *   why-fail, how, vs-rag and ask move to the appendix.
 *
 * On 24 September the close was folded into the team screen, so the run ends on
 * the team, and the appendix (why-fail, vs-rag, how, ask) came off the deck:
 * the team keeps it as preparation for the judges' questions, not as screens.
 *
 * Earlier the same day, when the pitch stopped leading with token cost — testing
 * showed the skill does not reliably save tokens, sometimes it costs more,
 * because the skill's own context is loaded too — category, numbers, tokens
 * and ask-review were cut. Every screen named here is still in `screens/`, so
 * any of them can come back by adding a row above.
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
