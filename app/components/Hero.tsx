import { PlayCircle } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { ButtonLink } from "./ui/Button";
import { TrenchDiagram } from "./visuals/TrenchDiagram";

// Exactly one screen: the trench is the last thing above the fold, and the first
// scroll moves on. svh, not vh, so a phone's collapsing URL bar cannot overflow it.
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-svh scroll-mt-20 flex-col overflow-hidden bg-bg"
    >
      {/* Above ground: daylight, where the pitch is made. Sized by its own
          content — on a short window the trench gives up height, the pitch
          never does. `data-hero-sky` is what the nav watches to know whether it
          is currently over daylight or over earth. */}
      <div
        data-hero-sky=""
        className="relative flex flex-none flex-col items-center justify-center px-6 pt-[clamp(6rem,14svh,7rem)] pb-[clamp(1.5rem,4svh,3rem)] text-center"
        style={{
          background: "linear-gradient(to bottom, var(--sky-surface), var(--sky) 45%, var(--sky-deep))",
        }}
      >
        {/* Low sun across the site. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(245,158,11,0.20), transparent 70%)",
          }}
        />

        <span className="relative z-10 font-mono text-[11px] font-medium tracking-[0.18em] text-accent-deep sm:text-xs">
          ICONEXT AI CHALLENGE DAY 2026 · TEAM 3
        </span>
        <h1 className="relative z-10 mt-6 font-mono text-4xl font-bold tracking-[-0.03em] text-sky-fg sm:text-5xl lg:text-6xl">
          Code Archaeologist
        </h1>
        <p className="relative z-10 mt-6 max-w-xl leading-[1.7] text-sky-fg-muted sm:text-lg">
          ขุดค้นสถาปัตยกรรมของ repo ทีละชั้น ให้ AI เข้าใจโค้ดทั้งโปรเจ็ค
          โดยไม่ต้องอ่านทั้งหมด — Zero-RAG, deterministic, ลด token กว่า 90%
        </p>
        <div className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="#how-it-works">
            <PlayCircle size={18} strokeWidth={1.8} />
            ดูวิธีทำงาน
          </ButtonLink>
          <ButtonLink
            href="https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill"
            variant="ghost"
            onSky
            external
          >
            <GithubIcon size={18} />
            GitHub
          </ButtonLink>
        </div>
      </div>

      {/* Ground level — the stratum motif, run the full width of the page. */}
      <span className="stratum" />

      {/* Below ground: darker, where the light stops reaching. */}
      <div
        className="relative flex min-h-0 flex-1 flex-col justify-center px-6 py-[clamp(1rem,3svh,2rem)]"
        style={{ boxShadow: "inset 0 24px 32px -24px rgba(0,0,0,0.9)" }}
      >
        {/* Strata receding into the dark. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(to bottom, rgba(68,64,60,0.16) 0 1px, transparent 1px 104px)",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        {/* Takes whatever height is left. The SVG scales to fit it rather than
            overflowing, so the hero stays one screen on short windows. */}
        <TrenchDiagram
          variant="compact"
          className="relative z-10 min-h-0 w-full flex-1 md:hidden"
        />

        {/* Scrolls sideways between md and the diagram's own width — scaling it
            to fit would make the entity names unreadable. Focusable so it is
            reachable by keyboard. */}
        <div
          className="relative z-10 mx-auto hidden min-h-0 w-full max-w-5xl flex-1 overflow-x-auto md:block"
          tabIndex={0}
          role="region"
          aria-label="ภาพตัดขวางของโค้ดเบส"
        >
          <TrenchDiagram className="h-full w-full min-w-[820px]" />
        </div>

        <p className="relative z-10 mt-[clamp(0.75rem,2svh,1.5rem)] text-center text-xs text-fg-faint">
          พีรพล จันทะแจ่ม (BB) · ณัฐวุฒิ รอดทอง (อุด้ง)
        </p>
      </div>
    </section>
  );
}
