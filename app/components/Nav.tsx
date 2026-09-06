import { GithubIcon } from "./icons/GithubIcon";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#demo", label: "Demo" },
  { href: "#team", label: "Team" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-sm font-semibold text-white">
          Code<span className="text-violet-400">Archaeologist</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-white/60 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/80 transition hover:border-violet-400/60 hover:text-white"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
      </nav>
    </header>
  );
}
