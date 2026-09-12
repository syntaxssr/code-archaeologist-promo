import { Draw } from "./sheet/Draw";
import { sheets } from "./sheet/sheet-index";
import { GithubIcon } from "./icons/GithubIcon";

const REPO = "https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill";

/**
 * The close — pull back.
 *
 * Everything the judge just scrolled through is revealed to have been one sheet
 * the whole time. The stamp is the last thing on it, because a stamp is the
 * last thing that goes on a drawing.
 */
export function Footer() {
  return (
    <footer className="border-t border-rule px-6 py-16 sm:px-10">
      <Draw threshold={0.3}>
        <div className="flex flex-col items-center">
          {/* The whole sheet, at the scale of a key map: seven beats, one
              drawing. */}
          <svg
            viewBox="0 0 260 190"
            className="w-full max-w-[260px]"
            role="img"
            aria-label="ผังย่อของทั้งแผ่น เจ็ดจังหวะรวมเป็นกระดาษแผ่นเดียว"
          >
            <rect
              x="1"
              y="1"
              width="258"
              height="188"
              fill="var(--sheet-2)"
              stroke="var(--line)"
              strokeWidth="1.5"
              data-draw
              style={{ "--draw-dur": "700ms" } as React.CSSProperties}
            />
            {sheets.map((s, i) => (
              <g key={s.id}>
                <rect
                  x="14"
                  y={12 + i * 24}
                  width={i === 0 ? 232 : 150 + ((i * 37) % 80)}
                  height="16"
                  fill="none"
                  stroke="var(--line)"
                  strokeWidth="1.2"
                  data-draw
                  style={
                    { "--draw-delay": `${300 + i * 90}ms`, "--draw-dur": "420ms" } as React.CSSProperties
                  }
                />
                <text
                  x="20"
                  y={24 + i * 24}
                  fontSize="9"
                  fontFamily="var(--font-plex-mono), monospace"
                  fill="var(--faint)"
                  data-note
                  style={{ "--note-delay": `${520 + i * 90}ms` } as React.CSSProperties}
                >
                  {s.no}
                </text>
              </g>
            ))}
          </svg>

          <p
            data-note
            style={{ "--note-delay": "1300ms" } as React.CSSProperties}
            className="mt-10 border-y-2 border-traced px-7 py-3 text-center font-mono text-xl font-semibold uppercase tracking-[0.18em] text-traced-deep sm:text-2xl"
          >
            One file. No dependencies.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 font-mono text-base text-muted transition-colors duration-200 hover:text-ink"
            >
              <GithubIcon size={18} />
              Code Archaeologist — LLM Agent Skill
            </a>
            <p className="font-mono text-base uppercase tracking-[0.12em] text-faint">
              Team 03 · iCONEXT AI Challenge Day · 26.09.2026
            </p>
          </div>
        </div>
      </Draw>
    </footer>
  );
}
