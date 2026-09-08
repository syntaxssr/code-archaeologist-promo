import { GithubIcon } from "./icons/GithubIcon";
import { Logo } from "./brand/Logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#demo", label: "Demo" },
  { href: "#team", label: "Team" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" aria-label="Code Archaeologist — หน้าแรก">
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 font-mono text-sm text-fg-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors duration-200 hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 font-mono text-sm text-fg-muted transition-colors duration-200 hover:border-accent hover:text-fg"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
      </nav>
    </header>
  );
}
