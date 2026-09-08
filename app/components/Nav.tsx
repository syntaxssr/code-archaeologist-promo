"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { Logo } from "./brand/Logo";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#impact", label: "Impact" },
  { href: "#team", label: "Team" },
];

const REPO = "https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Mark the section currently under the nav, so the menu says where you are.
  // Measured on scroll rather than by intersection ratio: neighbouring sections
  // are often both on screen, and the taller one would win the ratio contest.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = 120; // just below the fixed header
      let current: string | null = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = `#${s.id}`;
      }

      // The last section can never reach the line — the page runs out of scroll
      // first — so at the bottom, light it regardless.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      setActive(atBottom ? `#${sections[sections.length - 1].id}` : current);
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="flex min-h-11 items-center"
        >
          <Logo />
        </a>

        {/* Seven links need more room than the sm breakpoint gives — the
            hamburger carries the menu until lg. */}
        <ul className="hidden items-center gap-6 font-mono text-[13px] text-fg-muted lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`transition-colors duration-200 hover:text-accent ${
                  active === link.href ? "text-accent" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-border px-3 font-mono text-sm text-fg-muted transition-colors duration-200 hover:border-accent hover:text-fg"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-fg-muted transition-colors duration-200 hover:text-fg lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <ul
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border-soft bg-bg px-6 pb-4 font-mono text-sm lg:hidden"
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex min-h-11 items-center transition-colors duration-200 hover:text-accent ${
                active === link.href ? "text-accent" : "text-fg-muted"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
