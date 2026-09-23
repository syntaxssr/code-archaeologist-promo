import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 03 — what it is.
 *
 * Thirty seconds, and the judges have to leave the hall able to repeat it. So
 * the sentence is the heading and the rest of the screen is the same sentence
 * as a picture: the repository, one scan, and what comes out — left to right,
 * two arrows, nothing to read that is not on the path.
 *
 * The last line is the claim the whole run now rests on: what comes out is read
 * by a person, not only by an agent.
 *
 * No accent. This is the one screen with no evidence on it — it is a
 * definition, and the colour would be decoration.
 */
const steps: { label: string; lines: string[] }[] = [
  { label: "Repo", lines: ["โค้ดที่มีอยู่แล้ว", "17 ภาษา"] },
  // tree-sitter by name, with what it does underneath: the team wants the
  // library credited rather than the bare term "AST".
  { label: "Scan", lines: ["tree-sitter", "อ่านโค้ดเป็นโครงสร้าง AST"] },
  { label: "Output", lines: ["แผนที่และโน้ต", "explorer.html"] },
];

function Arrow() {
  return (
    <svg
      viewBox="0 0 48 16"
      className="w-[clamp(1.5rem,3vw,3.5rem)] flex-none self-center text-line"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M0 8H46" />
      <path d="M39 2L46 8L39 14" />
    </svg>
  );
}

export function What({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        สแกนครั้งเดียว ได้แผนที่ทั้ง repo
      </h2>

      <div className="mt-[clamp(1.5rem,5svh,3rem)] flex items-stretch gap-[clamp(0.5rem,1vw,1.25rem)]">
        {steps.map((step, n) => (
          <div key={step.label} className="contents">
            {n > 0 && (
              <div data-enter style={{ "--enter-delay": `${560 + n * 260}ms` } as React.CSSProperties} className="flex">
                <Arrow />
              </div>
            )}
            <div
              data-enter
              style={{ "--enter-delay": `${420 + n * 260}ms` } as React.CSSProperties}
              className="flex-1 rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 p-[clamp(1rem,1.9vw,2.25rem)]"
            >
              {/* Latin mono names the step, Thai says what happens — the two
                  never share a line. */}
              <p className="font-mono text-[clamp(1rem,0.95vw,1.0625rem)] tracking-[0.18em] text-faint uppercase">
                {step.label}
              </p>
              <div className="mt-[clamp(0.5rem,1.6svh,1rem)] text-[clamp(1.0625rem,1.6vw,1.875rem)] leading-[1.45] text-ink">
                {step.lines.map((line) => (
                  <p
                    key={line}
                    // Mono runs wider than the Thai beside it, so it is set a
                    // little smaller — but never under the 16px floor.
                    className={/^[\x00-\x7F]+$/.test(line) ? "font-mono text-[max(1rem,0.86em)]" : undefined}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "1240ms" } as React.CSSProperties}
        className="mt-[clamp(1.25rem,4svh,2.5rem)] text-[clamp(1.125rem,1.7vw,1.875rem)] leading-[1.45] text-muted"
      >
        ทั้งคนและ AI เปิดอ่านของชุดเดียวกัน
      </p>
    </Frame>
  );
}
