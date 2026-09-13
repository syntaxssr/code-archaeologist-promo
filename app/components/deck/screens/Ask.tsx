import { Frame } from "./Frame";
import { Shot } from "./Shot";
import type { ScreenProps } from "./index";
import matrix from "@/public/shots/matrix-canvas.png";

/**
 * Screen 10 · 1/2 — the commands that walk the graph.
 *
 * Two layers, because the first draft of this screen only showed the second
 * one. USAGE.md opens by saying most people never run these by hand — the agent
 * does — and a hall that is half non-developers reading a column of `--flags`
 * concludes it has to memorise them, which is the opposite of the pitch.
 *
 * So the left column is what a person actually types, in their own words, and
 * the right is what the skill tells the agent to run. A mark travels between
 * them a beat after each row lands: the motion carries the eye across the pair,
 * which is the job a sentence of explanation used to do. A non-developer can read
 * the left and stop; a developer gets the proof on the right that the answer
 * came from a command and not from a model's memory.
 *
 * This page is `scripts/query` — finding things and walking between them. The
 * second page is `scripts/review`, which judges what it finds. The split is the
 * skill's own, not one invented for the slide.
 */
const asks: [string, string][] = [
  ["โค้ดที่จัดการเรื่องนี้อยู่ไฟล์ไหน", "search.py --name X"],
  ["จากหน้าเว็บวิ่งไปถึง database ยังไง", "trace_path.py --from A --to B"],
  ["ถ้าแก้ตรงนี้ จะพังตรงไหนบ้าง", "trace_path.py --impact-of X"],
  ["PR ที่เปิดอยู่ กระทบอะไรบ้าง", "trace_path.py --impact-of-diff"],
  ["เล่าให้ฟังหน่อยว่าตัวนี้ทำอะไร", "context.py --node X"],
  ["แผนที่ยังตรงกับโค้ดล่าสุดไหม", "archaeologist.py check"],
];

export function Ask({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-ink"
      >
        ไม่มีคำสั่งให้ท่อง — พิมพ์เป็นภาษาคน แล้ว AI ไปเรียกเอง
      </h2>

      <div className="mt-[clamp(0.875rem,2.6svh,1.75rem)] flex min-h-0 flex-1 items-stretch gap-[clamp(1.5rem,3vw,3rem)]">
        <dl className="flex min-w-0 flex-1 flex-col justify-center border-t border-rule">
          <div className="flex flex-none gap-[clamp(0.75rem,1.8vw,1.75rem)] border-b border-rule py-[clamp(0.3rem,1svh,0.6rem)]">
            <dt className="min-w-0 flex-[1.25] font-mono text-[clamp(0.6875rem,0.9vw,0.9375rem)] tracking-[0.16em] text-faint uppercase">
              คนพิมพ์แบบนี้
            </dt>
            <dd className="w-[1.5em] shrink-0" aria-hidden="true" />
            <dd className="min-w-0 flex-1 font-mono text-[clamp(0.6875rem,0.9vw,0.9375rem)] tracking-[0.16em] text-traced-deep uppercase">
              AI เรียกอันนี้ให้เอง
            </dd>
          </div>

          {asks.map(([said, cmd], n) => (
            <div
              key={cmd}
              data-enter
              style={{ "--enter-delay": `${340 + n * 130}ms` } as React.CSSProperties}
              className="flex gap-[clamp(0.75rem,1.8vw,1.75rem)] border-b border-rule py-[clamp(0.4rem,1.4svh,0.9rem)]"
            >
              <dt className="min-w-0 flex-[1.25] text-[clamp(0.9375rem,1.3vw,1.375rem)] leading-[1.4] text-ink">
                “{said}”
              </dt>
              <dd
                data-lead
                style={{ "--enter-delay": `${430 + n * 130}ms` } as React.CSSProperties}
                className="shrink-0 self-center font-mono text-[clamp(0.875rem,1.2vw,1.25rem)] text-traced"
                aria-hidden="true"
              >
                →
              </dd>
              <dd className="min-w-0 flex-1 font-mono text-[clamp(0.75rem,1vw,1.0625rem)] leading-[1.5] text-traced-deep">
                {cmd}
              </dd>
            </div>
          ))}
        </dl>

        <Shot
          src={matrix}
          alt="มุมมอง matrix ของ explorer แสดงว่าคลาสไหนอ้างอิงคลาสไหน"
          caption="explorer · structure matrix"
          className="w-[26%] shrink-0 justify-center"
          fit="contain"
          priority
        />
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "1180ms" } as React.CSSProperties}
        className="mt-[clamp(0.5rem,1.8svh,1rem)] flex-none text-[clamp(0.875rem,1.15vw,1.1875rem)] leading-[1.6] text-faint"
      >
        17 ภาษา · 11 เฟรมเวิร์กที่อ่าน route ได้ · 0 การเรียกเน็ตตอนใช้งาน
      </p>
    </Frame>
  );
}
