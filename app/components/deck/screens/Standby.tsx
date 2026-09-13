"use client";

import { useSyncExternalStore } from "react";
import { LogoMark } from "../../brand/Logo";
import { CodeField } from "./CodeField";

/**
 * The holding screen. It sits on the projector while the room settles, for a
 * minute or for ten, until the judges give the signal and the presenter clicks
 * into screen 00.
 *
 * Candidates, switchable with `?sb=a…h` so they can be compared in the room
 * they will actually run in. This chooser comes out once one is picked.
 *
 * Most of them hold back the project name — it is the payoff of screen 00, and
 * a standby screen that already said it takes the reveal away. H deliberately
 * does not, because showing it is also a defensible choice and worth seeing.
 *
 * All of them carry some small movement: a still screen with four words on it
 * reads as a page that failed to load. This is the one screen allowed to loop,
 * because nobody is speaking over it.
 */
const EVENT = "iCONEXT AI Challenge Day 2026";

function Caret({ className = "" }: { className?: string }) {
  return (
    <span
      data-caret
      style={{ animation: "caret 1.1s steps(1, end) infinite" }}
      className={`ml-1.5 inline-block w-[0.55em] translate-y-[0.08em] border-b-2 border-traced align-baseline ${className}`}
    />
  );
}

/** A — the repository, drifting past unscanned. Pairs with screen 00: this is
 *  the codebase before anything looked at it, and the click runs the scan. */
function Drifting() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Two columns at different speeds. One column leaves two thirds of a
          16:9 screen empty, and drifting them in lockstep would read as one
          sheet sliding rather than a repository sitting there. */}
      <CodeField scan={false} drift={90} rows={64} />
      <CodeField scan={false} drift={124} rows={64} left="54%" seed={11} />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border border-rule bg-sheet px-[clamp(2rem,5vw,4.5rem)] py-[clamp(1.75rem,5svh,3rem)] text-center">
          <LogoMark size={34} className="mx-auto text-line" />
          <p className="mt-[clamp(1rem,2.4svh,1.75rem)] font-mono text-[clamp(1.5rem,3.2vw,3rem)] leading-none font-semibold tracking-[0.06em] text-ink">
            TEAM 03
          </p>
          <span className="mx-auto mt-[clamp(1rem,2.4svh,1.75rem)] block h-px w-full bg-rule" />
          <p className="mt-[clamp(0.875rem,2svh,1.25rem)] font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.2em] text-muted uppercase">
            {EVENT}
          </p>
          <p className="mt-[clamp(1rem,2.4svh,1.75rem)] font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.2em] text-traced-deep uppercase">
            Standby
            <Caret />
          </p>
        </div>
      </div>
    </div>
  );
}

/** B — the quiet one. Nothing but the mark and the team, very large, on black.
 *  Least risk of distraction and the most confident; also the least to look at
 *  if the room waits ten minutes. */
function Quiet() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <LogoMark size={96} className="text-line" />
      <p className="mt-[clamp(2rem,5svh,3.5rem)] font-mono text-[clamp(2.5rem,6vw,5.5rem)] leading-none font-semibold tracking-[0.04em] text-ink">
        TEAM 03
      </p>
      <span className="mt-[clamp(1.5rem,4svh,2.5rem)] block h-px w-[min(38rem,60vw)] bg-rule" />
      <p className="mt-[clamp(1.25rem,3svh,2rem)] font-mono text-[clamp(0.875rem,1.2vw,1.25rem)] tracking-[0.24em] text-muted uppercase">
        {EVENT}
      </p>
      <p className="mt-[clamp(1.75rem,4svh,2.75rem)] font-mono text-[clamp(0.875rem,1.2vw,1.25rem)] tracking-[0.24em] text-traced-deep uppercase">
        Standby
        <Caret />
      </p>
    </div>
  );
}

/** C — the ready board. Reads as a tool that has booted and is waiting, which
 *  is what the project is. It also tells the judges how long this will take,
 *  which is a courtesy no other option offers. */
const board: [string, string][] = [
  ["TEAM", "03"],
  ["SCREENS", "13"],
  ["RUNTIME", "10 MIN"],
  ["INSTRUMENTS", "PYTHON STDLIB"],
  ["DEPENDENCIES", "0"],
];

function ReadyBoard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-[7%]">
      <div className="w-full max-w-[min(52rem,86vw)]">
        <div className="flex items-center gap-3.5">
          <LogoMark size={26} className="shrink-0 text-line" />
          <p className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-muted uppercase">
            {EVENT}
          </p>
        </div>

        <span className="mt-[clamp(1.25rem,3svh,2rem)] block h-px w-full bg-rule" />

        <dl className="mt-[clamp(1.25rem,3svh,2rem)] font-mono text-[clamp(1rem,1.6vw,1.625rem)] tracking-[0.08em] uppercase">
          {board.map(([k, v], n) => (
            <div
              key={k}
              data-enter
              style={{ "--enter-delay": `${180 + n * 110}ms` } as React.CSSProperties}
              className="flex items-baseline gap-4 py-[clamp(0.3rem,1svh,0.6rem)]"
            >
              <dt className="text-faint">{k}</dt>
              {/* Dot leaders, the way a contents page or a boot log sets a
                  key against its value. */}
              <dd className="flex-1 border-b border-dotted border-rule" />
              <dd className="text-ink">{v}</dd>
            </div>
          ))}
          <div
            data-enter
            style={{ "--enter-delay": `${180 + board.length * 110}ms` } as React.CSSProperties}
            className="mt-[clamp(0.75rem,2svh,1.25rem)] flex items-baseline gap-4 border-t border-rule pt-[clamp(0.75rem,2svh,1.25rem)]"
          >
            <dt className="text-faint">STATUS</dt>
            <dd className="flex-1 border-b border-dotted border-rule" />
            <dd className="text-traced-deep">
              READY
              <Caret />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

/** D — the question, held. It puts the thing the next ten minutes answers in
 *  front of the room before a word is spoken, so the talk starts already owed
 *  an answer. */
function Question() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-[7%]">
      <div className="flex items-center gap-3.5">
        <LogoMark size={26} className="shrink-0 text-line" />
        <p className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-traced-deep uppercase">
          Team 03 · {EVENT}
        </p>
      </div>

      <p className="mt-[clamp(1.5rem,4svh,3rem)] max-w-[22ch] text-[clamp(2rem,5.4vw,4.75rem)] leading-[1.18] font-semibold tracking-[-0.015em] text-ink">
        ถ้าแก้ไฟล์นี้ จะกระทบอะไรบ้าง
        <Caret className="!w-[0.42em] border-b-4" />
      </p>

      <p className="mt-[clamp(1.25rem,3svh,2.25rem)] max-w-[46ch] text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.6] text-muted">
        คำถามที่ทุกคนเคยถาม และไม่มีใครตอบได้เร็ว
      </p>
    </div>
  );
}

/** E — the artefact at rest. The thing the tool produces, drawn dim and
 *  sitting there, with one node breathing. It shows the deck's visual language
 *  before a word of it is spoken. */
const nodes = [
  { x: 120, y: 70 }, { x: 300, y: 70 }, { x: 480, y: 96 },
  { x: 90, y: 190 }, { x: 268, y: 178 }, { x: 452, y: 210 }, { x: 604, y: 150 },
  { x: 170, y: 300 }, { x: 356, y: 296 }, { x: 528, y: 320 }, { x: 660, y: 268 },
  { x: 258, y: 404 }, { x: 452, y: 418 },
];
const links: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 6], [3, 7], [4, 7], [4, 8], [5, 8],
  [5, 9], [6, 10], [7, 11], [8, 11], [8, 12], [9, 12], [2, 5], [10, 9],
];
/** The one that breathes — the node a trace would end on. */
const ALIVE = 8;

function IdleGraph() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-[7%]">
      <svg
        viewBox="0 0 750 480"
        className="w-full max-w-[min(56rem,72vw)]"
        role="img"
        aria-label="กราฟความสัมพันธ์ในโค้ดเบส วางนิ่งรอ"
      >
        {links.map(([a, z]) => (
          <line
            key={`${a}-${z}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[z].x}
            y2={nodes[z].y}
            stroke="var(--rule)"
            strokeWidth="1.2"
          />
        ))}
        {nodes.map((n, i) =>
          i === ALIVE ? (
            <g key={i} data-breathe style={{ animation: "breathe 4.2s ease-in-out infinite" }}>
              <circle cx={n.x} cy={n.y} r="22" fill="none" stroke="var(--traced)" strokeWidth="1.2" />
              <circle cx={n.x} cy={n.y} r="7" fill="var(--traced)" />
            </g>
          ) : (
            <circle key={i} cx={n.x} cy={n.y} r="5.5" fill="var(--texture)" />
          ),
        )}
      </svg>

      <p className="mt-[clamp(1.5rem,4svh,2.75rem)] font-mono text-[clamp(1.25rem,2.6vw,2.25rem)] leading-none font-semibold tracking-[0.06em] text-ink">
        TEAM 03
      </p>
      <p className="mt-[clamp(0.75rem,2svh,1.25rem)] font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.2em] text-muted uppercase">
        {EVENT}
      </p>
    </div>
  );
}

/** F — the split. A wall of code on one side, a handful of notes on the other,
 *  with nothing explaining either. The whole argument as shape, sitting there
 *  for however long the room takes to settle. */
function Split() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <CodeField scan={false} drift={110} rows={64} />

      <div className="absolute inset-y-0 left-1/2 w-px bg-rule" />

      <div className="absolute inset-y-0 right-0 left-1/2 flex flex-col justify-center gap-[clamp(0.75rem,2svh,1.25rem)] px-[clamp(2rem,5vw,5rem)]">
        {[0, 1, 2, 3].map((n) => (
          <div key={n} className="border border-rule px-5 py-4">
            <span className="block h-[7px] w-[42%] bg-line/70" />
            <span className="mt-3 block h-[5px] w-[82%] bg-texture" />
            <span className="mt-2 block h-[5px] w-[64%] bg-texture" />
            <span className="mt-3 block h-[5px] w-[30%] bg-traced/70" />
          </div>
        ))}
      </div>

      {/* On its own ground. Sitting on the field, neither the lettering nor the
          code underneath it can be read — the same rule the title obeys. */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 border-t border-rule bg-sheet px-[7%] py-[clamp(1rem,2.6svh,1.75rem)] pb-[clamp(4rem,8svh,5.5rem)]">
        <LogoMark size={24} className="shrink-0 text-line" />
        <p className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-traced-deep uppercase">
          Team 03 · {EVENT}
        </p>
      </div>
    </div>
  );
}

/** G — a prompt, waiting. Nothing has been typed: that is what standby is. For
 *  a room full of developers this needs no caption at all. */
function Prompt() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-[7%]">
      <div className="flex items-center gap-3.5">
        <LogoMark size={26} className="shrink-0 text-line" />
        <p className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] font-medium tracking-[0.2em] text-muted uppercase">
          Team 03 · {EVENT}
        </p>
      </div>

      <span className="mt-[clamp(1.25rem,3svh,2rem)] block h-px w-full max-w-[min(60rem,80vw)] bg-rule" />

      <p className="mt-[clamp(1.5rem,4svh,2.5rem)] font-mono text-[clamp(1.5rem,3.4vw,3.25rem)] leading-none text-muted">
        <span className="text-faint">~/repo</span> <span className="text-traced">$</span>
        <Caret className="!ml-3 !w-[0.6em] border-b-[6px]" />
      </p>
    </div>
  );
}

/** H — the name, held. The one option that does not withhold it. Conventional,
 *  and conventional is not wrong on a standby screen: the room wants to know
 *  who is up. It costs screen 00 its reveal. */
function Named() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-[7%]">
      <p className="font-mono text-[clamp(0.8125rem,1vw,1.0625rem)] font-medium tracking-[0.2em] text-traced-deep uppercase">
        Team 03 · {EVENT}
      </p>
      <h1 className="mt-[clamp(0.75rem,2svh,1.5rem)] font-mono text-[clamp(2.25rem,8.4vw,9.5rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-ink">
        <span className="block">CODE</span>
        <span className="block">ARCHAEOLOGIST</span>
      </h1>
      <p className="mt-[clamp(1rem,2.6svh,1.75rem)] font-mono text-[clamp(0.875rem,1.2vw,1.25rem)] tracking-[0.24em] text-muted uppercase">
        Standby
        <Caret />
      </p>
    </div>
  );
}

const variants: Record<string, () => React.ReactElement> = {
  a: Drifting,
  b: Quiet,
  c: ReadyBoard,
  d: Question,
  e: IdleGraph,
  f: Split,
  g: Prompt,
  h: Named,
};

export function Standby() {
  // Read straight from the URL rather than mirroring it into state: the server
  // renders "a" and the client reads the real value, which is exactly the
  // mismatch useSyncExternalStore exists to handle.
  const key = useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(window.location.search).get("sb") ?? "a",
    () => "a",
  );
  const Variant = variants[key] ?? Drifting;
  return <Variant />;
}
