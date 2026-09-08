import { GithubIcon } from "./icons/GithubIcon";
import { LogoMark } from "./brand/Logo";

export function Footer() {
  return (
    <footer
      id="footer"
      className="scroll-mt-20 border-t border-border-soft bg-bg px-6 py-14 text-center"
    >
      <LogoMark size={22} className="mx-auto text-fg-faint" />
      <a
        href="https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex min-h-11 cursor-pointer items-center gap-2 font-mono text-sm text-fg-muted transition-colors duration-200 hover:text-accent"
      >
        <GithubIcon size={16} />
        non-nattawut/Code-Archaeologist-LLM-Agent-Skill
      </a>
      <p className="mt-3 font-mono text-xs text-fg-faint">
        iCONEXT AI Challenge Day 2026 &middot; Team 3
      </p>
    </footer>
  );
}
