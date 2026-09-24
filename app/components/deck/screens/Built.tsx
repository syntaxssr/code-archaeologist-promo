import { Bot, ChevronRight, GitCompare, ListChecks, UserCheck, type LucideIcon } from "lucide-react";
import { Fragment } from "react";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 05 — how we used AI to build the skill.
 *
 * The skill was written with Claude, and the room will assume "AI wrote it" means
 * "nobody checked it". So the screen is the way the work actually ran, as four
 * steps: a plan written first, Claude doing the work one phase and one commit at
 * a time, scripts checking it, and a person deciding whatever needed a choice.
 * The line under it says the same in six words.
 *
 * Every step carries its proof in small mono, and every one is from the skill's
 * own repository (non-nattawut/Code-Archaeologist-LLM-Agent-Skill), read on
 * 24 September 2026:
 *   - plan: docs/ROADMAP_PLAN.md, whose phase bodies are never revised as
 *     phases land (docs/PROJECT_HISTORY.md, phase 4).
 *   - Claude: 150 of 194 commits carry a "Co-Authored-By: Claude" trailer.
 *   - check: ports were accepted on byte-identical graphs, and
 *     tools/check_graph.py --self-test breaks each check once to prove it can
 *     fail (PROJECT_HISTORY.md, phase 5).
 *   - decide: the roadmap's "Found while implementing" list holds what needed
 *     the user's decision; the history records each choice ("the user chose").
 * Recount before the event if the repository has moved on.
 */
const steps: { icon: LucideIcon; th: string; say: string; proof: string }[] = [
  { icon: ListChecks, th: "เขียนแผนก่อน", say: "เขียนไว้ก่อนลงมือ ไม่แก้ย้อนหลัง", proof: "ROADMAP_PLAN.md" },
  { icon: Bot, th: "Claude ลงมือ", say: "ทีละ phase ทีละ commit", proof: "150 / 194 commits" },
  { icon: GitCompare, th: "script ตรวจ", say: "เทียบกราฟก่อน-หลัง ต้องตรงทุก byte", proof: "check_graph.py" },
  { icon: UserCheck, th: "คนตัดสิน", say: "เรื่องที่ต้องเลือก คนเป็นคนเลือก", proof: "Found while implementing" },
];

export function Built({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <ol className="flex items-stretch">
        {steps.map((s, i) => (
          <Fragment key={s.th}>
            {i > 0 ? (
              <li
                aria-hidden
                data-enter
                style={{ "--enter-delay": `${300 + i * 450}ms` } as React.CSSProperties}
                className="flex w-[clamp(1.5rem,2.6vw,3rem)] flex-none items-center justify-center text-faint"
              >
                <ChevronRight className="size-[70%]" strokeWidth={2} />
              </li>
            ) : null}
            <li
              data-enter
              style={{ "--enter-delay": `${400 + i * 450}ms` } as React.CSSProperties}
              className="flex min-w-0 flex-1 flex-col rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 p-[clamp(1rem,1.8vw,2.25rem)]"
            >
              <s.icon className="size-[clamp(1.75rem,2.6vw,3rem)] text-traced" strokeWidth={1.75} aria-hidden />
              <p className="mt-[clamp(0.75rem,2.6svh,1.75rem)] text-[clamp(1.25rem,2.1vw,2.5rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-ink">
                {s.th}
              </p>
              <p className="mt-[clamp(0.35rem,1svh,0.65rem)] flex-1 text-[clamp(1rem,1.3vw,1.5rem)] leading-[1.45] text-muted">
                {/* Thai has no spaces between words: each phrase is held whole,
                    so a narrow tile breaks between phrases, not inside one. */}
                {s.say.split(" ").map((phrase, n) => (
                  <Fragment key={n}>
                    {n > 0 ? " " : null}
                    <span className="inline-block">{phrase}</span>
                  </Fragment>
                ))}
              </p>
              <p className="mt-[clamp(0.75rem,2.2svh,1.5rem)] font-mono text-[clamp(1rem,0.95vw,1.125rem)] leading-[1.4] text-traced-deep">
                {s.proof}
              </p>
            </li>
          </Fragment>
        ))}
      </ol>

      <p
        data-enter
        style={{ "--enter-delay": "2300ms" } as React.CSSProperties}
        className="mt-[clamp(1.5rem,5svh,3.5rem)] text-center text-[clamp(1.25rem,2.3vw,2.75rem)] leading-[1.3] font-semibold tracking-[-0.02em] text-ink"
      >
        AI เขียน · {/* The step the room doubts, marked once the line has been read. */}
        <span
          data-mark
          style={{ "--mark-delay": "3000ms" } as React.CSSProperties}
          className="-mx-[0.2em] rounded-[0.2em] px-[0.2em] box-decoration-clone"
        >
          script ตรวจ
        </span>{" "}
        · คนตัดสินใจ
      </p>
    </Frame>
  );
}
