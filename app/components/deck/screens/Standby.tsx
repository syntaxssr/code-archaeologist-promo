import { LogoMark } from "../../brand/Logo";

/**
 * The holding screen. It sits on the projector while the room settles, for a
 * minute or for ten, until the judges give the signal and the presenter clicks
 * into screen 00.
 *
 * A prompt with nothing typed at it, because that is what standby is. In a room
 * of developers it needs no caption: everyone there knows what a blinking
 * cursor at a shell means, and it says "ready, waiting for you" without putting
 * an instruction on a screen the whole room can read.
 *
 * It holds back the project name — that is the payoff of screen 00, and a
 * standby screen that already said it takes the reveal away.
 *
 * The cursor is the only thing on the deck that loops, and this is the only
 * screen where that is right: nobody is speaking over it, and a completely
 * still screen carrying four words reads as a page that failed to load.
 *
 * The seven alternatives this was chosen from are at commit cd54697.
 */
export function Standby() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-[7%]">
      <div className="flex items-center gap-3.5">
        <LogoMark size={26} className="shrink-0 text-line" />
        <p className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-muted uppercase">
          Team 03 · iCONEXT AI Challenge Day 2026
        </p>
      </div>

      <span className="mt-[clamp(1.25rem,3svh,2rem)] block h-px w-full max-w-[min(60rem,80vw)] bg-rule" />

      <p className="mt-[clamp(1.5rem,4svh,2.5rem)] font-mono text-[clamp(1.5rem,3.4vw,3.25rem)] leading-none text-muted">
        <span className="text-faint">~/standby</span> <span className="text-traced">$</span>
        <span
          data-caret
          style={{ animation: "caret 1.1s steps(1, end) infinite" }}
          className="ml-3 inline-block w-[0.6em] translate-y-[0.08em] border-b-[6px] border-traced align-baseline"
        />
      </p>
    </div>
  );
}
