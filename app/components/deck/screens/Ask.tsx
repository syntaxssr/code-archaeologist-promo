import { Frame } from "./Frame";
import { Shot } from "./Shot";
import type { ScreenProps } from "./index";
import matrix from "@/public/shots/matrix-canvas.png";

/**
 * Screen 10 · 1/2 — the commands that walk the graph.
 *
 * This slot used to map the work onto the judges' scoring criteria. That was
 * the wrong thing to put on a projector: the criteria belong to the panel, not
 * to us, and reciting them back is not evidence of anything. The room's real
 * question at this point is simpler and had gone unanswered — what can the
 * thing actually do, and how do you drive it.
 *
 * So every row is a question a developer already asks out loud, paired with the
 * single command that answers it. The commands are real and copied from the
 * skill's own usage reference; none of them is an invented flag.
 *
 * This page is `scripts/query` — finding things and walking between them. The
 * second page is `scripts/review`, which judges what it finds. The split is the
 * skill's own, not one invented for the slide.
 */
const asks: [string, string][] = [
  ["อยู่ตรงไหน", "search.py --name X"],
  ["A ไปถึง B ยังไง", "trace_path.py --from A --to B"],
  ["แก้แล้วพังตรงไหน", "trace_path.py --impact-of X"],
  ["PR นี้กระทบอะไร", "trace_path.py --impact-of-diff"],
  ["ขอทุกอย่างของโหนดเดียว", "context.py --node X"],
  ["แผนที่เก่ารึยัง", "archaeologist.py check"],
];

export function Ask({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.5rem,3.6vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        ถามเป็นคำสั่ง ตอบจากกราฟ ไม่ใช่จากการเดา
      </h2>

      <div className="mt-[clamp(1rem,3svh,2rem)] flex min-h-0 flex-1 items-stretch gap-[clamp(1.5rem,3.5vw,3.5rem)]">
        <dl className="flex min-w-0 flex-1 flex-col justify-center border-t border-rule">
          {asks.map(([th, cmd], n) => (
            <div
              key={cmd}
              data-enter
              style={{ "--enter-delay": `${340 + n * 130}ms` } as React.CSSProperties}
              className="flex flex-wrap items-baseline gap-x-[clamp(0.75rem,1.8vw,1.75rem)] gap-y-1 border-b border-rule py-[clamp(0.45rem,1.5svh,0.9rem)]"
            >
              <dt className="w-[9em] shrink-0 text-[clamp(1rem,1.4vw,1.5rem)] font-medium text-ink">
                {th}
              </dt>
              <dd className="min-w-0 flex-1 font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] leading-[1.5] text-traced-deep">
                {cmd}
              </dd>
            </div>
          ))}
        </dl>

        <Shot
          src={matrix}
          alt="มุมมอง matrix ของ explorer แสดงว่าคลาสไหนอ้างอิงคลาสไหน"
          caption="explorer · structure matrix · ใครอ้างอิงใคร"
          className="min-w-0 flex-1"
          fit="contain"
          frame="aspect"
          priority
        />
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "1180ms" } as React.CSSProperties}
        className="mt-[clamp(0.6rem,2svh,1.1rem)] flex-none text-[clamp(0.875rem,1.15vw,1.1875rem)] leading-[1.6] text-faint"
      >
        17 ภาษา · 11 เฟรมเวิร์กที่อ่าน route ได้ · 0 การเรียกเน็ตตอนใช้งาน
      </p>
    </Frame>
  );
}
