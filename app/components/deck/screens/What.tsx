import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 03 — what it is.
 *
 * Thirty seconds and one sentence. The judges have to leave the hall able to
 * repeat it, so the screen is almost entirely that sentence, with three facts
 * underneath it in the notation register.
 *
 * No accent. This is the one screen with no evidence on it — it is a
 * definition, and the colour would be decoration.
 */
const facts: [string, string][] = [
  ["SCAN", "AST — โครงสร้าง ไม่ใช่ทุกบรรทัด"],
  ["OUTPUT", "Markdown 1 โน้ตต่อ 1 entity เชื่อมด้วย [[wikilink]]"],
  ["DELIVERY", "explorer.html ไฟล์เดียว ไม่มี server ไม่มี dependency"],
];

export function What({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="max-w-[18ch] text-[clamp(2.5rem,6.8vw,6.5rem)] leading-[1.04] font-semibold tracking-[-0.025em] text-ink"
      >
        เปลี่ยน repo ให้เป็นแผนที่ที่เดินตามได้
      </h2>

      <p
        data-enter
        style={{ "--enter-delay": "380ms" } as React.CSSProperties}
        className="mt-[clamp(1rem,2.6svh,1.75rem)] max-w-[44ch] text-[clamp(1.125rem,1.8vw,1.875rem)] leading-[1.45] text-muted"
      >
        ไม่ใช่กองข้อความให้ค้นหา
      </p>

      <dl className="mt-[clamp(1.75rem,5svh,3.25rem)] grid gap-[clamp(1rem,2.5vw,2.5rem)] border-t border-rule pt-[clamp(1.25rem,3svh,2rem)] sm:grid-cols-3">
        {facts.map(([k, v], n) => (
          <div
            key={k}
            data-enter
            style={{ "--enter-delay": `${640 + n * 140}ms` } as React.CSSProperties}
          >
            <dt className="font-mono text-[clamp(0.8125rem,1vw,1.0625rem)] font-medium tracking-[0.18em] text-faint uppercase">
              {k}
            </dt>
            <dd className="mt-2 text-[clamp(0.9375rem,1.25vw,1.25rem)] leading-[1.55] text-ink">
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </Frame>
  );
}
