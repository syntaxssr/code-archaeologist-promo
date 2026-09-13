import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 03 · 1/3 — where this sits.
 *
 * The day has several teams and several shapes of answer. Before anything can
 * be said about ours, the room needs to know which shape it is — otherwise a
 * judge spends the demo waiting for an app to appear.
 *
 * The list names forms, never teams. Which form is better is not the claim;
 * which form ours is, is.
 */
const forms = ["แอปใหม่", "เว็บใหม่", "แชตบอตผู้ช่วย", "ศูนย์รวมเครื่องมือ", "โมเดลที่รันในองค์กร"];

export function Category({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-ink"
      >
        ของที่แต่ละทีมเอามาวันนี้ มีหลายรูปแบบ
      </h2>

      <ul className="mt-[clamp(1.25rem,3.5svh,2.25rem)] border-t border-rule">
        {forms.map((f, n) => (
          <li
            key={f}
            data-enter
            style={{ "--enter-delay": `${340 + n * 120}ms` } as React.CSSProperties}
            className="border-b border-rule py-[clamp(0.5rem,1.6svh,1rem)] text-[clamp(1.0625rem,1.5vw,1.625rem)] leading-[1.35] text-faint"
          >
            {f}
          </li>
        ))}
        <li
          data-enter
          style={{ "--enter-delay": "980ms" } as React.CSSProperties}
          className="flex flex-wrap items-baseline gap-x-[clamp(1rem,2vw,2rem)] gap-y-1 border-b border-rule py-[clamp(0.6rem,2svh,1.25rem)]"
        >
          <span className="text-[clamp(1.5rem,3vw,2.75rem)] leading-[1.2] font-semibold text-ink">
            skill
          </span>
          <span className="font-mono text-[clamp(0.8125rem,1.05vw,1.125rem)] tracking-[0.14em] text-traced-deep uppercase">
            ← ของเรา
          </span>
        </li>
      </ul>

      <p
        data-enter
        style={{ "--enter-delay": "1140ms" } as React.CSSProperties}
        className="mt-[clamp(0.875rem,2.4svh,1.5rem)] max-w-[62ch] text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.6] text-muted"
      >
        ไม่ได้สร้างเครื่องมือใหม่ —{" "}
        <span className="text-ink">สอนเครื่องมือที่บริษัทมีอยู่แล้ว</span>
      </p>
    </Frame>
  );
}
