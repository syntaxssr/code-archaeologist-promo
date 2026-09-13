import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import { bb, days, udong } from "./token-usage";

/**
 * Screen 12 — the token budget.
 *
 * The company paid for these tokens, so the company gets an account of them.
 * Every number here was counted by `tools/usage.py` from this machine's own
 * Claude Code transcripts; none of it is estimated, and the snapshot date is
 * printed so a stale figure is obvious rather than quiet.
 *
 * The chart shows every day the budget was used, not only the days that went
 * to this project — an account that hides the other spending is not an
 * account. The accent marks the days that went to the challenge, so the room
 * can see the shape of the sprint inside the whole.
 *
 * ณัฐวุฒิ's row stays empty until he runs the same script. A bar drawn from a
 * guess, standing next to bars drawn from a count, would cost more than it
 * shows.
 */
const max = Math.max(...days.map((d) => d.all));
const W = 520;
const H = 150;
const gap = 3;
const bw = (W - gap * (days.length - 1)) / days.length;

const millions = (n: number) => `${(n / 1e6).toFixed(0)} ล้าน`;
const billions = (n: number) => `${(n / 1e9).toFixed(2)} พันล้าน`;

const stats: [string, string, string][] = [
  ["ทั้งหมดที่ใช้ไป", billions(bb.total), `${bb.turns.toLocaleString("en-US")} รอบสนทนา · 25 วันที่ลงมือ`],
  ["ลงกับงานแข่งนี้", millions(bb.workTotal), `${bb.workTurns.toLocaleString("en-US")} รอบ · 4 วัน`],
];

export function Tokens({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-ink"
      >
        บริษัทออก token ให้ — นี่คือบัญชีว่าใช้ไปกับอะไร
      </h2>

      <div className="mt-[clamp(1rem,3svh,2rem)] flex min-h-0 flex-1 items-stretch gap-[clamp(1.5rem,3.5vw,3.5rem)]">
        <dl className="flex w-[30%] shrink-0 flex-col justify-center border-t border-rule">
          {stats.map(([k, v, sub], n) => (
            <div
              key={k}
              data-enter
              style={{ "--enter-delay": `${340 + n * 170}ms` } as React.CSSProperties}
              className="border-b border-rule py-[clamp(0.6rem,2svh,1.25rem)]"
            >
              <dt className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.14em] text-faint uppercase">
                {k}
              </dt>
              <dd className="mt-1 font-mono text-[clamp(1.5rem,2.8vw,2.75rem)] leading-none font-semibold text-traced">
                {v}
              </dd>
              <dd className="mt-2 text-[clamp(0.875rem,1.15vw,1.1875rem)] leading-[1.5] text-muted">
                {sub}
              </dd>
            </div>
          ))}
        </dl>

        <figure
          data-enter
          style={{ "--enter-delay": "700ms" } as React.CSSProperties}
          className="flex min-w-0 flex-1 flex-col justify-center"
        >
          <svg
            viewBox={`0 0 ${W} ${H + 10}`}
            className="h-auto w-full"
            role="img"
            aria-label="กราฟแท่งรายวัน แสดง token ที่ใช้ทุกวันตั้งแต่ 31 กรกฎาคม ถึง 13 กันยายน 2026 โดยวันที่ลงกับงานแข่งถูกเน้นสี"
          >
            {days.map((d, i) => {
              const x = i * (bw + gap);
              const h = (d.all / max) * H;
              const wh = (d.work / max) * H;
              return (
                <g key={d.d}>
                  <rect x={x} y={H - h} width={bw} height={h} fill="var(--rule)" />
                  {wh > 0 && (
                    <rect x={x} y={H - wh} width={bw} height={wh} fill="var(--traced)" />
                  )}
                </g>
              );
            })}
            <line x1="0" y1={H} x2={W} y2={H} stroke="var(--line)" strokeWidth="0.8" />
          </svg>

          <figcaption className="mt-[clamp(0.5rem,1.5svh,0.9rem)] flex flex-wrap items-center gap-x-[clamp(1rem,2vw,2rem)] gap-y-1 font-mono text-[clamp(0.6875rem,0.9vw,0.9375rem)] tracking-[0.1em] text-faint uppercase">
            <span>31 ก.ค. — 13 ก.ย. 2026</span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-4 bg-traced" />
              วันที่ลงกับงานแข่ง
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-4 bg-rule" />
              งานอื่นที่ใช้ token ก้อนเดียวกัน
            </span>
          </figcaption>
        </figure>
      </div>

      <dl
        data-enter
        style={{ "--enter-delay": "1020ms" } as React.CSSProperties}
        className="mt-[clamp(0.75rem,2.2svh,1.25rem)] flex flex-none flex-wrap gap-x-[clamp(1.5rem,3.5vw,3.5rem)] gap-y-1 border-t border-rule pt-[clamp(0.5rem,1.5svh,0.9rem)] text-[clamp(0.9375rem,1.2vw,1.25rem)]"
      >
        <div className="flex items-baseline gap-3">
          <dt className="text-muted">พีรพล · ฝั่งงานนำเสนอ</dt>
          <dd className="font-mono tabular-nums text-ink">{billions(bb.total)}</dd>
        </div>
        <div className="flex items-baseline gap-3">
          <dt className="text-muted">ณัฐวุฒิ · ฝั่ง code</dt>
          <dd className="font-mono text-faint">
            {udong ? billions(udong.total) : "รอข้อมูล — นับด้วยสคริปต์ตัวเดียวกัน"}
          </dd>
        </div>
      </dl>
    </Frame>
  );
}
