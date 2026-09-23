/**
 * The holding screen. It sits on the projector while the room settles, for a
 * minute or for ten, until the judges give the signal and the presenter clicks
 * into screen 00.
 *
 * A path and a cursor, with nothing typed at it, because that is what standby
 * is. In a room of developers it needs no caption: everyone there knows what a
 * blinking cursor means, and it says "ready, waiting for you" without putting
 * an instruction on a screen the whole room can read.
 *
 * White, and nothing else on it — the restraint of an Apple keynote's holding
 * screen. The path is grey so it reads as waiting rather than as a title; the
 * caret is the one point of colour. It is centred on the path alone, with the
 * caret hung off its end, so the word sits on the true centre of the screen.
 *
 * It holds back the project name — that is the payoff of screen 00, and a
 * standby screen that already said it takes the reveal away.
 *
 * The cursor loops because nobody is speaking over this screen, and a
 * completely still screen carrying one word reads as a page that failed to
 * load. It is the only loop on the deck; the grid behind it holds still.
 *
 * The torch-wall version is parked on branch explore/torch-wall; the seven
 * earlier alternatives are at commit cd54697.
 */
export function Standby() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="relative font-mono text-[clamp(1.75rem,3.4vw,4rem)] leading-none tracking-[-0.01em] text-muted">
        ~/standby
        <span
          data-caret
          style={{ animation: "caret 1.1s steps(1, end) infinite" }}
          className="absolute bottom-[-0.08em] left-full ml-[0.35em] w-[0.6em] border-b-[0.12em] border-traced"
        />
      </p>
    </div>
  );
}
