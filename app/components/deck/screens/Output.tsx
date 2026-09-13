import { Frame } from "./Frame";
import { Shot } from "./Shot";
import type { ScreenProps } from "./index";
import health from "@/public/shots/health-panel.png";
import security from "@/public/shots/security-findings.png";

/**
 * Screen 07 — what comes out.
 *
 * This screen used to be a six-row register of what the tool produces. It read
 * as a claim, in small type, at the back of a hall. The tool's own panels say
 * the same thing and are not a claim: the census counts files, functions and
 * links; the security tab names a file and a line for every finding.
 *
 * So the words shrink to the three artefacts and the two panels carry the
 * proof. The one sentence that survives is the one the panels cannot say for
 * themselves — that every number on them can be traced back to a line of code.
 */
const artefacts: [string, string][] = [
  ["แผนที่ 2 ชุด", "โครงสร้าง และ การไหล"],
  ["โน้ต 1 ใบ", "ต่อ 1 คลาส หรือ 1 เมธอด"],
  ["ไฟล์เดียว", "explorer.html · ไม่ต้องต่อเน็ต"],
];

export function Output({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.5rem,3.6vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        ทุกตัวเลขที่มันตอบ ชี้กลับไปที่บรรทัดได้
      </h2>

      <div className="mt-[clamp(1rem,3svh,2rem)] flex min-h-0 flex-1 items-stretch justify-between gap-[clamp(1.25rem,3vw,3rem)]">
        <dl className="flex w-[24%] shrink-0 flex-col justify-center border-t border-rule">
          {artefacts.map(([k, th], n) => (
            <div
              key={k}
              data-enter
              style={{ "--enter-delay": `${360 + n * 150}ms` } as React.CSSProperties}
              className="border-b border-rule py-[clamp(0.6rem,2svh,1.2rem)]"
            >
              <dt className="text-[clamp(1.125rem,1.7vw,1.75rem)] font-medium text-ink">{k}</dt>
              <dd className="mt-1 text-[clamp(0.875rem,1.15vw,1.1875rem)] leading-[1.45] text-muted">
                {th}
              </dd>
            </div>
          ))}
        </dl>

        <Shot
          src={health}
          alt="แผงซ้ายของ explorer แสดงคะแนนสุขภาพ 68 จาก 100 เกรด D และสำมะโนของโค้ดเบส"
          caption="census · health"
          className="w-[20%] shrink-0"
          fit="contain"
          priority
        />

        <Shot
          src={security}
          alt="แท็บ security ของ explorer แสดงช่องโหว่ 4 รายการ แต่ละรายการบอกไฟล์และเลขบรรทัด"
          caption="security · file : line"
          className="w-[24%] shrink-0"
          fit="contain"
          priority
        />
      </div>
    </Frame>
  );
}
