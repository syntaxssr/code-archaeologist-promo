"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { currentIndex, goTo, slides, subscribeIndex } from "./deck-data";
import { Slide } from "./Slide";

/** A clicker sends key events, not mouse clicks, so these are the ones that
 *  actually matter on stage. Space and Enter are the two a presenter remote
 *  most commonly emits for "next". */
const NEXT = new Set(["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"]);
const PREV = new Set(["ArrowLeft", "ArrowUp", "PageUp", "Backspace"]);

export function Deck() {
  // The hash is the source of truth; the deck reads it rather than mirroring it.
  const i = useSyncExternalStore(subscribeIndex, currentIndex, () => 0);
  const [full, setFull] = useState(false);
  const [idle, setIdle] = useState(false);
  const wheelLock = useRef(0);

  const go = useCallback((next: number) => goTo(next), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      // Let a focused control handle its own Space/Enter instead of advancing.
      if (el && (el.tagName === "BUTTON" || el.tagName === "A") && (e.key === " " || e.key === "Enter")) {
        return;
      }
      if (NEXT.has(e.key)) {
        e.preventDefault();
        go(i + 1);
      } else if (PREV.has(e.key)) {
        e.preventDefault();
        go(i - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(slides.length - 1);
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        void toggleFull();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go]);

  // One wheel gesture advances exactly one screen. Anyone who opens the deck
  // outside the pitch will reach for the scroll wheel first, and a page that
  // simply does not move reads as broken.
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 4) return;
      const now = Date.now();
      if (now < wheelLock.current) return;
      wheelLock.current = now + 600;
      go(i + (e.deltaY > 0 ? 1 : -1));
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [i, go]);

  useEffect(() => {
    const onChange = () => setFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // In fullscreen the chrome and the cursor get out of the way until the
  // presenter moves again. `idle` is only ever set from an event, never
  // synchronously in the effect body, and it is read as `full && idle` so
  // leaving fullscreen needs no reset.
  useEffect(() => {
    if (!full) return;
    let t = setTimeout(() => setIdle(true), 2500);
    const wake = () => {
      setIdle(false);
      clearTimeout(t);
      t = setTimeout(() => setIdle(true), 2500);
    };
    window.addEventListener("mousemove", wake);
    window.addEventListener("keydown", wake);
    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", wake);
      window.removeEventListener("keydown", wake);
    };
  }, [full]);

  async function toggleFull() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      // Some browsers refuse outside a user gesture; the deck still runs.
    }
  }

  const chrome = full && idle ? "opacity-0" : "opacity-100";

  return (
    <div
      // The controls read the live screen's tone, so they stay visible over a
      // dark screen without being styled twice.
      data-tone={slides[i].tone}
      className={`relative h-svh w-screen overflow-hidden bg-sheet ${
        full && idle ? "cursor-none" : ""
      }`}
      // Click anywhere to advance; the controls below stop propagation so they
      // do not also step the deck.
      onClick={() => go(i + 1)}
    >
      {/* Each screen is its own reference frame: it sits absolutely over the
          stage and translates by whole multiples of its own width, so one step
          is always exactly one screen. A single translated track has to agree
          with the container about what 100% means, and when it does not, the
          deck lands between screens. */}
      {slides.map((s, n) => (
        <Slide
          key={s.id}
          slide={s}
          active={n === i}
          total={slides.length}
          offset={n - i}
        />
      ))}

      <Controls
        i={i}
        full={full}
        className={chrome}
        onGo={go}
        onFull={() => void toggleFull()}
      />
    </div>
  );
}

function Controls({
  i,
  full,
  className,
  onGo,
  onFull,
}: {
  i: number;
  full: boolean;
  className: string;
  onGo: (n: number) => void;
  onFull: () => void;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 transition-opacity duration-500 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="pointer-events-auto flex items-center gap-6 px-7 py-5">
        <span className="font-mono text-base tabular-nums text-faint">
          {slides[i].no} / {slides[slides.length - 1].no}
        </span>

        {/* One tick per screen. Clickable, because rehearsing means jumping. */}
        <div className="flex flex-1 items-center gap-1.5">
          {slides.map((s, n) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onGo(n)}
              aria-label={`ไปจอ ${s.no} ${s.th}`}
              aria-current={n === i ? "true" : undefined}
              className="group h-6 flex-1 cursor-pointer"
            >
              <span
                className={`block h-[3px] w-full transition-colors duration-200 ${
                  n === i
                    ? "bg-traced"
                    : n < i
                      ? "bg-line/45 group-hover:bg-line"
                      : "bg-rule group-hover:bg-line/60"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <NavButton label="จอก่อนหน้า" onClick={() => onGo(i - 1)} disabled={i === 0}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </NavButton>
          <NavButton
            label="จอถัดไป"
            onClick={() => onGo(i + 1)}
            disabled={i === slides.length - 1}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </NavButton>
          <NavButton label={full ? "ออกจากเต็มจอ" : "เต็มจอ"} onClick={onFull}>
            {full ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path
                  d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path
                  d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            )}
          </NavButton>
        </div>
      </div>
    </div>
  );
}

function NavButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.currentTarget.blur();
        onClick();
      }}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[2px] border border-rule text-muted transition-colors duration-150 hover:border-line hover:text-ink disabled:cursor-default disabled:opacity-35 disabled:hover:border-rule disabled:hover:text-muted"
    >
      {children}
    </button>
  );
}
