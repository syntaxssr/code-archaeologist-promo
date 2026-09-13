import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import { bb, days, udong } from "./token-usage";

/**
 * Screen 12 — the token budget.
 *
 * The company paid for these tokens, so the company gets an account of them.
 * Every figure was counted by `tools/usage.py` from the presenter's own Claude
 * Code transcripts; none of it is estimated, and the snapshot date is printed
 * so a stale number is obvious rather than quiet.
 *
 * Scope is this project only, by decision — the same budget paid for other
 * work, and a judging screen is not the place to account for that.
 *
 * The composition line is the part worth saying out loud: almost none of the
 * spend is the model writing. It is the cost of carrying the repository, the
 * design system and the argument in context across four days, which is exactly
 * the cost Code Archaeologist exists to cut.
 *
 * ณัฐวุฒิ's row stays empty until he runs the same script. A bar drawn from a
 * guess, beside bars drawn from a count, would make both worthless.
 */
const max = Math.max(...days.map((d) => d.tokens));
const W = 420;
const H = 118;
const gap = 26;
const bw = (W - gap * (days.length - 1)) / days.length;

const m = (n: number) => `${Math.round(n / 1e6)}`;

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
        <dl className="flex w-[34%] shrink-0 flex-col justify-center border-t border-rule">
          <div
            data-enter
            style={{ "--enter-delay": "340ms" } as React.CSSProperties}
            className="border-b border-rule py-[clamp(0.6rem,2svh,1.25rem)]"
          >
            <dt className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.14em] text-faint uppercase">
              ลงกับงานนี้
            </dt>
            <dd className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-[clamp(2rem,3.6vw,3.5rem)] leading-none font-semibold text-traced tabular-nums">
                {m(bb.total)}
              </span>
              <span className="text-[clamp(1rem,1.5vw,1.625rem)] font-medium text-ink">
                ล้าน token
              </span>
            </dd>
            <dd className="mt-2 text-[clamp(0.875rem,1.15vw,1.1875rem)] leading-[1.5] text-muted">
              {bb.turns.toLocaleString("en-US")} รอบสนทนา · 4 วันที่ลงมือ
            </dd>
          </div>

          <div
            data-enter
            style={{ "--enter-delay": "520ms" } as React.CSSProperties}
            className="border-b border-rule py-[clamp(0.6rem,2svh,1.25rem)]"
          >
            <dt className="font-mono text-[clamp(0.75rem,0.95vw,1rem)] tracking-[0.14em] text-faint uppercase">
              ในนั้นเป็นอะไรบ้าง
            </dt>
            <dd className="mt-2 text-[clamp(0.9375rem,1.25vw,1.3125rem)] leading-[1.6] text-muted">
              <span className="text-ink">0.9 ล้าน</span> คือที่โมเดลเขียน ·{" "}
              <span className="text-ink">348 ล้าน</span> คือบริบทที่อ่านซ้ำ
            </dd>
            <dd className="mt-2 text-[clamp(0.875rem,1.15vw,1.1875rem)] leading-[1.55] text-faint">
              ก้อนที่ Code Archaeologist ตัดทิ้งพอดี
            </dd>
          </div>
        </dl>

        <figure
          data-enter
          style={{ "--enter-delay": "700ms" } as React.CSSProperties}
          className="flex min-w-0 flex-1 flex-col justify-center"
        >
          <svg
            /* the top band leaves room for the value above the tallest bar */
            viewBox={`0 -20 ${W} ${H + 66}`}
            className="h-auto w-full"
            role="img"
            aria-label={`กราฟแท่ง token รายวันของงานนี้: ${days
              .map((d) => `${d.label} ${m(d.tokens)} ล้าน`)
              .join(", ")}`}
          >
            {days.map((d, i) => {
              const x = i * (bw + gap);
              const h = (d.tokens / max) * H;
              return (
                <g key={d.d}>
                  <text
                    x={x + bw / 2}
                    y={H - h - 7}
                    textAnchor="middle"
                    fill="var(--ink)"
                    fontSize="13"
                    fontFamily="var(--font-mono)"
                  >
                    {m(d.tokens)}
                  </text>
                  <rect x={x} y={H - h} width={bw} height={h} fill="var(--traced)" />
                  <text
                    x={x + bw / 2}
                    y={H + 18}
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontSize="12"
                  >
                    {d.label}
                  </text>
                  <text
                    x={x + bw / 2}
                    y={H + 35}
                    textAnchor="middle"
                    fill="var(--faint)"
                    fontSize="10.5"
                    fontFamily="var(--font-mono)"
                  >
                    {d.turns} รอบ
                  </text>
                </g>
              );
            })}
            <line x1="0" y1={H} x2={W} y2={H} stroke="var(--line)" strokeWidth="0.8" />
          </svg>

          <figcaption className="mt-[clamp(0.5rem,1.5svh,0.9rem)] font-mono text-[clamp(0.6875rem,0.9vw,0.9375rem)] tracking-[0.1em] text-faint uppercase">
            ล้าน token ต่อวัน · นับถึง 13 ก.ย. 2026
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
          <dd className="font-mono tabular-nums text-ink">{m(bb.total)} ล้าน</dd>
        </div>
        <div className="flex items-baseline gap-3">
          <dt className="text-muted">ณัฐวุฒิ · ฝั่ง code</dt>
          <dd className="font-mono text-faint">
            {udong ? `${m(udong.total)} ล้าน` : "รอข้อมูล — นับด้วยสคริปต์ตัวเดียวกัน"}
          </dd>
        </div>
      </dl>
    </Frame>
  );
}
