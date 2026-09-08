import { PlayCircle } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { ButtonLink } from "./ui/Button";
import { TrenchDiagram } from "./visuals/TrenchDiagram";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-20 flex-col items-center justify-center overflow-hidden bg-bg px-6 pt-28 pb-16 text-center"
    >
      {/* Warm light from above the trench, fading into the ground. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% -5%, rgba(245,158,11,0.16), transparent 70%)",
        }}
      />

      <span className="relative z-10 font-mono text-[11px] font-medium tracking-[0.18em] text-accent sm:text-xs">
        ICONEXT AI CHALLENGE DAY 2026 · TEAM 3
      </span>
      <h1 className="relative z-10 mt-6 font-mono text-4xl font-bold tracking-[-0.02em] text-fg sm:text-5xl lg:text-6xl">
        Code Archaeologist
      </h1>
      <p className="relative z-10 mt-6 max-w-xl leading-[1.7] text-fg-muted sm:text-lg">
        ขุดค้นสถาปัตยกรรมของ repo ทีละชั้น ให้ AI เข้าใจโค้ดทั้งโปรเจ็ค
        โดยไม่ต้องอ่านทั้งหมด — Zero-RAG, deterministic, ลด token กว่า 90%
      </p>
      <div className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-4">
        <ButtonLink href="#how-it-works">
          <PlayCircle size={18} strokeWidth={1.8} />
          ดูวิธีทำงาน
        </ButtonLink>
        <ButtonLink
          href="https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill"
          variant="ghost"
          external
        >
          <GithubIcon size={18} />
          GitHub
        </ButtonLink>
      </div>

      {/* The idea itself, before a single word of explanation. */}
      {/* Scrolls sideways on narrow screens — scaling it to fit would make the
          entity names unreadable. Focusable so it is reachable by keyboard. */}
      <div
        className="relative z-10 mt-14 w-full max-w-5xl overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="ภาพตัดขวางของโค้ดเบส"
      >
        <TrenchDiagram className="h-auto w-full min-w-[760px]" />
      </div>

      <p className="relative z-10 mt-10 text-xs text-fg-faint">
        พีรพล จันทะแจ่ม (BB) · ณัฐวุฒิ รอดทอง (อุด้ง)
      </p>
    </section>
  );
}
