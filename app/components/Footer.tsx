import { GithubIcon } from "./icons/GithubIcon";

export function Footer() {
  return (
    <footer id="footer" className="scroll-mt-20 bg-[#0a0a0f] px-6 py-12 text-center">
      <a
        href="https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
      >
        <GithubIcon size={16} />
        non-nattawut/Code-Archaeologist-LLM-Agent-Skill
      </a>
      <p className="mt-3 text-xs text-white/30">
        iCONEXT AI Challenge Day 2026 &middot; Team 3
      </p>
    </footer>
  );
}
