const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#demo", label: "Demo" },
  { href: "#team", label: "Team" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-sm font-semibold">
          Code Archaeologist
        </a>
        <ul className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
