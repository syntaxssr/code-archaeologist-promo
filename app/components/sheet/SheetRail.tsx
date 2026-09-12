"use client";

import { useEffect, useState } from "react";
import { Logo } from "../brand/Logo";
import { GithubIcon } from "../icons/GithubIcon";
import { sheets } from "./sheet-index";

const REPO = "https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill";

function NorthArrow() {
  return (
    <svg viewBox="0 0 16 22" width="14" height="19" fill="none" aria-hidden="true">
      <path d="M8 1.5 L12 12 L8 9.4 L4 12 Z" fill="var(--line)" />
      <text
        x="8"
        y="21"
        textAnchor="middle"
        fontSize="8"
        fontFamily="var(--font-plex-mono), monospace"
        fill="var(--faint)"
      >
        N
      </text>
    </svg>
  );
}

/**
 * The left rail: key map, north arrow, scale bar. On a real survey sheet these
 * are the instruments that tell you where on the drawing you are standing, so
 * they are fixed and they never leave — that continuity is what makes seven
 * scroll-stops read as one sheet rather than seven pages.
 *
 * The key map is also the nav. During the pitch the presenter can say "ห้าสิบ"
 * and every judge's eye lands in the same place.
 */
export function SheetRail() {
  const [active, setActive] = useState(sheets[0].id);

  useEffect(() => {
    const onScroll = () => {
      // Whichever section has most recently crossed a line near the top of the
      // viewport is the one being read. Intersection ratio is the wrong test
      // here: two neighbouring full-height sections are both visible at once,
      // and the taller one wins even when you are not looking at it.
      const line = 160;
      let current = sheets[0].id;
      for (const s of sheets) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = sheets.findIndex((s) => s.id === active);

  return (
    <>
      {/* Desktop rail. Mobile is deliberately deferred (see REDESIGN-PLAN §12),
          so below lg this collapses to the bar underneath. */}
      <div className="fixed inset-y-0 left-0 z-40 hidden w-[248px] flex-col justify-between border-r border-rule bg-sheet px-6 py-7 lg:flex">
        <div>
          <a href="#hero" className="inline-block">
            <Logo />
          </a>

          <nav aria-label="Key map" className="mt-9">
            <div className="flex items-end justify-between">
              <span className="font-mono text-base font-medium uppercase tracking-[0.14em] text-faint">
                Key map
              </span>
              <NorthArrow />
            </div>
            <span className="mt-2 block h-px w-full bg-rule" />

            <ol className="mt-4">
              {sheets.map((s, i) => {
                const isActive = s.id === active;
                const visited = i < activeIndex;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className="group flex items-center gap-3 py-[7px]"
                    >
                      {/* The cell, not a bullet: a plan square that fills as you
                          walk into it. Visited cells stay tinted, so the rail
                          also reads as how far through the sheet you are. */}
                      <span
                        className={`h-3.5 w-3.5 shrink-0 border transition-colors duration-200 ${
                          isActive
                            ? "border-traced bg-traced"
                            : visited
                              ? "border-rule bg-sheet-2"
                              : "border-rule bg-transparent"
                        }`}
                      />
                      <span
                        className={`font-mono text-base tabular-nums transition-colors duration-200 ${
                          isActive ? "text-traced-deep" : "text-faint"
                        }`}
                      >
                        {s.no}
                      </span>
                      <span
                        className={`truncate text-base transition-colors duration-200 ${
                          isActive
                            ? "font-medium text-ink"
                            : "text-muted group-hover:text-ink"
                        }`}
                      >
                        {s.th}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>

        <div>
          <span className="block h-px w-full bg-rule" />
          <div className="mt-4">
            <span className="font-mono text-base font-medium uppercase tracking-[0.14em] text-faint">
              Scale
            </span>
            {/* A scale bar with a tick at each end, as drawn. The unit is the
                repository — there is no invented line count here, because a
                number that encodes nothing is the tell of a costume. */}
            <svg viewBox="0 0 180 14" className="mt-2.5 w-full" aria-hidden="true">
              <path
                d="M1 2.5V11.5M1 7H179M179 2.5V11.5M60.3 4.5V9.5M119.7 4.5V9.5"
                stroke="var(--line)"
                strokeWidth="1.2"
              />
            </svg>
            <p className="mt-1.5 font-mono text-base text-muted">1 SHEET = 1 REPO</p>
          </div>

          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 font-mono text-base text-muted transition-colors duration-200 hover:text-ink"
          >
            <GithubIcon size={18} />
            Repository
          </a>
        </div>
      </div>

      {/* Below lg: the rail cannot fit, so the sheet keeps only its identity and
          its repository link. Full phone layout is a later phase. */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-rule bg-sheet px-5 py-3 lg:hidden">
        <a href="#hero">
          <Logo size={22} />
        </a>
        <a
          href={REPO}
          target="_blank"
          rel="noreferrer"
          aria-label="Repository"
          className="text-muted"
        >
          <GithubIcon size={20} />
        </a>
      </div>
    </>
  );
}
