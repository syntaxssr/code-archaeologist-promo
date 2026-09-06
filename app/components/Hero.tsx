import { PlayCircle } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-20 flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] px-6 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 20%, rgba(139,92,246,0.25), transparent 45%), radial-gradient(circle at 20% 80%, rgba(109,40,217,0.2), transparent 45%)",
        }}
      />
      <span className="relative z-10 text-xs font-semibold tracking-[0.2em] text-violet-400">
        ICONEXT AI CHALLENGE DAY 2026 &middot; TEAM 3
      </span>
      <h1 className="relative z-10 mt-6 text-5xl font-bold text-white sm:text-6xl">
        Code Archaeologist
      </h1>
      <p className="relative z-10 mt-6 max-w-xl text-lg text-white/60">
        Agent Skill ที่ให้ AI เข้าใจสถาปัตยกรรมทั้ง repo
        โดยไม่ต้องอ่านโค้ดทั้งหมด — Zero-RAG, deterministic, 90%+ token ที่ลดลง
      </p>
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#how-it-works"
          className="flex items-center gap-2 rounded-md bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
        >
          <PlayCircle size={18} />
          ดูวิธีทำงาน
        </a>
        <a
          href="https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-violet-400/60 hover:text-white"
        >
          <GithubIcon size={18} />
          GitHub
        </a>
      </div>
      <p className="relative z-10 mt-14 text-xs text-white/30">
        พีรพล จันทะแจ่ม (BB) &middot; ณัฐวุฒิ รอดทอง (อุด้ง)
      </p>
    </section>
  );
}
