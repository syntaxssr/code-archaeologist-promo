import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/** Copied from the skill's README: the companion skill that builds both maps
 *  and the explorer in one step. */
const COMMAND = "/code-archaeologist-explorer";

/**
 * Screen 03 — the demo. Five minutes, the longest thing on the deck.
 *
 * The demo runs on another computer; the room watches that screen, not this
 * one. So this screen holds while the presenter switches machines, and says one
 * thing: everything that follows starts from a single command. It is the
 * command itself, verbatim, in a terminal with a caret waiting after it — the
 * same caret as the standby screen, and like that screen nobody is speaking
 * over it, so it may blink. No caption: the command says it alone.
 *
 * An earlier version listed three things to watch for beside a capture of the
 * explorer, as a fallback if the live demo would not start. The results screen
 * (02 · 3/3) now carries that capture, with a button to open it full screen.
 */
export function Demo({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="flex flex-col items-center">
        <p
          data-enter
          style={{ "--enter-delay": "200ms" } as React.CSSProperties}
          className="flex items-center gap-[0.6em] rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-ink px-[1.1em] py-[0.8em] font-mono text-[clamp(1.5rem,3.2vw,3.75rem)] leading-none tracking-[-0.01em] whitespace-nowrap text-sheet"
        >
          <span aria-hidden className="text-highlight">
            &gt;
          </span>
          <span>
            {COMMAND}
            <span
              data-caret
              aria-hidden
              style={{ animation: "caret 1.1s steps(1, end) infinite" }}
              className="ml-[0.15em] inline-block h-[1em] w-[0.55em] translate-y-[0.12em] bg-sheet"
            />
          </span>
        </p>
      </div>
    </Frame>
  );
}
