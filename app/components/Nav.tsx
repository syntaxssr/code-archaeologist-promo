"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { Logo } from "./brand/Logo";

const links = [
  { href: "#solution", label: "Solution" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#impact", label: "Impact" },
];

const REPO = "https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  // The hero's daylight block is the only light ground on the page; the bar has
  // to invert while it is over it, or it sits as a dark slab on a bright hero.
  const [onSky, setOnSky] = useState(true);

  // Mark the section currently under the nav, so the menu says where you are.
  // Measured on scroll rather than by intersection ratio: neighbouring sections
  // are often both on screen, and the taller one would win the ratio contest.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const sky = document.querySelector<HTMLElement>("[data-hero-sky]");

    let frame = 0;
    const measure = () => {
      frame = 0;

      const line = 120; // just below the fixed header
      let current: string | null = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = `#${s.id}`;
      }
      setActive(current);

      setOnSky(sky ? sky.getBoundingClientRect().bottom > 72 : false);
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

  const shell = onSky
    ? "border-sky-border bg-sky-surface/85 text-sky-fg-muted"
    : "border-border-soft bg-bg/85 text-fg-muted";
  const linkHover = onSky ? "hover:text-accent-deep" : "hover:text-accent";
  const linkActive = onSky ? "text-accent-deep" : "text-accent";
  const control = onSky
    ? "border-sky-border hover:border-accent-deep hover:text-sky-fg"
    : "border-border hover:border-accent hover:text-fg";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div
        className={`mx-auto max-w-5xl rounded-2xl border backdrop-blur transition-colors duration-300 ${shell}`}
      >
        <nav className="flex items-center justify-between gap-4 px-4 py-2.5">
          <a href="#hero" onClick={() => setOpen(false)} className="flex min-h-11 items-center">
            <Logo onSky={onSky} />
          </a>

          {/* Five links need more room than the sm breakpoint gives — the
              hamburger carries the menu until lg. */}
          <ul className="hidden items-center gap-6 font-mono text-[13px] lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "true" : undefined}
                  className={`transition-colors duration-200 ${linkHover} ${
                    active === link.href ? linkActive : ""
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
              className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 font-mono text-sm transition-colors duration-200 ${control}`}
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
              className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 lg:hidden ${
                onSky ? "hover:text-sky-fg" : "hover:text-fg"
              }`}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <ul
          id="mobile-menu"
          hidden={!open}
          className={`border-t px-5 pb-3 font-mono text-sm lg:hidden ${
            onSky ? "border-sky-border" : "border-border-soft"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-11 items-center transition-colors duration-200 ${linkHover} ${
                  active === link.href ? linkActive : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
