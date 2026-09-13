import { LogoMark } from "../../brand/Logo";
import { CodeField } from "./CodeField";

/**
 * The holding screen. It sits on the projector while the room settles, for a
 * minute or for ten, until the judges give the signal and the presenter clicks
 * into screen 00.
 *
 * It shows the repository drifting past **unscanned** — no pass, no lit line.
 * That is the whole setup: this is the codebase as it sits before anything has
 * looked at it. Clicking runs the scan on the title, and the find lands.
 *
 * It holds the team and the event, and not the project name: the name is the
 * payoff of screen 00, and a standby screen that already said it takes the
 * reveal away.
 *
 * This is the one screen allowed to loop. Nobody is speaking over it, and a
 * still screen with four words on it reads as a page that failed to load.
 */
export function Standby() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Two columns at different speeds. One column of code leaves two thirds
          of a 16:9 screen empty, and drifting them in lockstep would read as
          one sheet sliding rather than a repository sitting there. */}
      <CodeField scan={false} drift={90} rows={64} />
      <CodeField scan={false} drift={124} rows={64} left="54%" seed={11} />

      {/* The plate sits on its own ground so the drifting field cannot run
          through the lettering. */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border border-rule bg-sheet px-[clamp(2rem,5vw,4.5rem)] py-[clamp(1.75rem,5svh,3rem)] text-center">
          <LogoMark size={34} className="mx-auto text-line" />

          <p className="mt-[clamp(1rem,2.4svh,1.75rem)] font-mono text-[clamp(1.5rem,3.2vw,3rem)] leading-none font-semibold tracking-[0.06em] text-ink">
            TEAM 03
          </p>

          <span className="mx-auto mt-[clamp(1rem,2.4svh,1.75rem)] block h-px w-full bg-rule" />

          <p className="mt-[clamp(0.875rem,2svh,1.25rem)] font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.2em] text-muted uppercase">
            iCONEXT AI Challenge Day 2026
          </p>

          <p className="mt-[clamp(1rem,2.4svh,1.75rem)] font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.2em] text-traced-deep uppercase">
            Standby
            {/* A caret needs no translation and puts no instruction on a screen
                the whole room can read. */}
            <span
              data-caret
              style={{ animation: "caret 1.1s steps(1, end) infinite" }}
              className="ml-1.5 inline-block w-[0.55em] translate-y-[0.08em] border-b-2 border-traced align-baseline"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
