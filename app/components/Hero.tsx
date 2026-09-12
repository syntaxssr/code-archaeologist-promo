import { ButtonLink } from "./ui/Button";
import { GithubIcon } from "./icons/GithubIcon";
import { Draw } from "./sheet/Draw";
import { sheetCount } from "./sheet/sheet-index";

const REPO = "https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill";

/**
 * Beat 01 — the blank sheet.
 *
 * Nothing has been drawn yet, and the blankness is the argument: the ground is
 * still closed. Then an anomaly resolves underneath it and a single grid square
 * opens exactly over the anomaly — we knew where to open before we opened it.
 * Every judge has sat through a demo where a model read everything and guessed;
 * this frame says the opposite before a word of copy.
 */
function Anomaly() {
  return (
    <svg
      viewBox="0 0 1200 300"
      className="mx-auto max-h-[34svh] w-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="ผังเปล่ายังไม่ได้ขุด มีความผิดปกติใต้ดินปรากฏขึ้น แล้วเปิดหลุมสำรวจตรงจุดนั้นพอดี"
    >
      {/* The unopened ground: grid only, no features. */}
      <rect x="0" y="0" width="1200" height="300" fill="var(--sheet-2)" />
      <g stroke="var(--grid)" strokeWidth="1">
        {Array.from({ length: 16 }, (_, i) => (
          <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="300" />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 80} x2="1200" y2={i * 80} />
        ))}
      </g>

      {/* The anomaly. Soft, unmeasured, obviously not a wall — this is what a
          geophysical sweep returns before anyone puts a spade in. */}
      <g data-note style={{ "--note-delay": "260ms" } as React.CSSProperties}>
        <path
          d="M672 118 C700 88 760 86 792 104 C828 124 842 166 826 196 C808 230 748 240 712 224 C676 208 656 152 672 118 Z"
          fill="var(--line)"
          opacity="0.22"
        />
        <path
          d="M694 136 C712 118 754 116 774 130 C796 146 802 172 792 190 C780 210 744 216 722 206 C700 194 684 154 694 136 Z"
          fill="var(--line)"
          opacity="0.3"
        />
      </g>

      {/* One cell opened, dead over it. */}
      <rect
        x="640"
        y="80"
        width="240"
        height="160"
        fill="none"
        stroke="var(--traced)"
        strokeWidth="2.5"
        data-draw
        style={{ "--draw-delay": "900ms", "--draw-dur": "900ms" } as React.CSSProperties}
      />
      <g data-note style={{ "--note-delay": "1700ms" } as React.CSSProperties}>
        <line x1="880" y1="90" x2="940" y2="90" stroke="var(--traced)" strokeWidth="1.5" />
        <text
          x="950"
          y="96"
          fontSize="19"
          fontWeight="500"
          letterSpacing="1.6"
          fontFamily="var(--font-plex-mono), monospace"
          fill="var(--traced-deep)"
        >
          TRENCH 01
        </text>
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-svh scroll-mt-4 flex-col px-6 pt-14 pb-12 sm:px-10 lg:pt-16"
    >
      <div className="flex items-center gap-5">
        <span className="font-mono text-base font-medium uppercase tracking-[0.14em] text-faint tabular-nums">
          Sheet 01 / {sheetCount}
        </span>
        <span className="h-px flex-1 bg-rule" />
        <span className="hidden font-mono text-base uppercase tracking-[0.14em] text-faint sm:inline">
          iCONEXT AI Challenge Day · 26.09.2026
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center gap-12 py-10 xl:flex-row xl:items-center xl:gap-14">
        <div className="max-w-[46ch] flex-none">
          <p className="font-mono text-lg font-medium uppercase tracking-[0.14em] text-traced-deep">
            Code Archaeologist
          </p>
          <h1 className="mt-5 text-[clamp(2.25rem,4vw,4rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-ink">
            รู้โครงสร้างทั้ง repo โดยไม่ต้องอ่านโค้ดทั้งหมด
          </h1>
          <p className="mt-6 text-[1.375rem] leading-[1.75] text-muted">
            สแกนด้วย AST แล้วเขียนเป็น Markdown wiki ที่เชื่อมกันด้วย{" "}
            <code className="rounded-[2px] bg-sheet-2 px-1.5 py-0.5 font-mono text-[1.25rem] text-traced-deep">
              [[wikilink]]
            </code>{" "}
            จากนั้น agent เดินตาม dependency graph เพื่อตอบคำถาม — ไม่ใช่การเดาด้วย
            similarity search
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <ButtonLink href="#solution">ดูทั้งแผ่น</ButtonLink>
            <ButtonLink href={REPO} variant="ghost" external>
              <GithubIcon size={18} />
              Repository
            </ButtonLink>
          </div>
        </div>

        <Draw className="min-w-0 flex-1" threshold={0.05}>
          <Anomaly />
          {/* The caption is the whole point of the frame, so it is set as a
              caption and not as body copy. */}
          <div className="mt-5 flex max-w-[64ch] gap-4">
            <span className="mt-3 h-px w-9 flex-none bg-traced" />
            <p className="text-lg leading-[1.7] text-muted">
              <span className="font-medium text-ink">เรารู้ว่าต้องเปิดตรงไหน ก่อนที่จะเปิด</span>{" "}
              — การสำรวจสมัยใหม่ไม่ต้องขุดทั้งพื้นที่เพื่อรู้ว่ามีอะไรอยู่ข้างใต้ นี่คือสิ่งเดียวกับที่
              skill นี้ทำกับโค้ดเบส
            </p>
          </div>
        </Draw>
      </div>
    </section>
  );
}
