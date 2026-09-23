import Image from "next/image";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import moleMap from "@/public/art/skill-mole-map.jpg";

/**
 * Screen 02 · 2/3 — how Code Archaeologist helps, after the problem.
 *
 * Screen 01 ends on "a skill is the runner's map", and the problem before this
 * screen is the runner guessing. This screen says who draws the map: the mole
 * from the cover digs through old code — curly-brace fossils, tangled cables,
 * stone tablets of source — and hands an orange map to the same robot runner,
 * a plaster on its forehead from the wall on 01.
 *
 * It keeps screen 01's layout on purpose — picture left, words right, the
 * answer in the orange marker three seconds in — so the two cartoons read as
 * one story told in two frames.
 *
 * An earlier version drew the same idea as four tiles (code → mole → map →
 * AI); the cartoon replaced it once it existed. Before that, the same calls
 * tangled and then laid out, which was accurate and did not say what the
 * thing is.
 *
 * The art is 2000 × 1116, shown whole.
 */
export function What({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="flex min-h-0 items-center gap-[clamp(1.5rem,3.5vw,4rem)]">
        <Image
          src={moleMap}
          alt="การ์ตูนตุ่นนักโบราณคดีขุดดินเจอฟอสซิลโค้ด แล้วยื่นแผนที่สีส้มให้หุ่นยนต์นักวิ่งที่มีพลาสเตอร์ติดหน้าผาก ตุ่นพูดว่า แผนที่มาแล้ว หุ่นยนต์ตอบว่า ขอบคุณครับ"
          priority
          data-enter
          style={{ "--enter-delay": "120ms" } as React.CSSProperties}
          className="h-auto w-[56%] shrink-0 rounded-[clamp(0.75rem,1.1vw,1.5rem)]"
        />

        <div className="min-w-0 flex-1">
          <h2
            data-enter
            style={{ "--enter-delay": "420ms" } as React.CSSProperties}
            className="text-[clamp(1.25rem,2.3vw,2.75rem)] leading-[1.3] font-semibold tracking-[-0.02em] text-ink"
          >
            {/* One phrase per line, held whole, as on screen 01. */}
            <span className="block whitespace-nowrap">Code Archaeologist</span>
            <span className="block whitespace-nowrap">ขุดอ่านโค้ดทุกไฟล์</span>
          </h2>
          {/* The answer, in the same marker and at the same moment as 01. */}
          <p
            data-enter
            style={{ "--enter-delay": "900ms" } as React.CSSProperties}
            className="mt-[clamp(1rem,3.5svh,2.25rem)] text-[clamp(1.25rem,2.3vw,2.75rem)] leading-[1.3] font-semibold tracking-[-0.02em] whitespace-nowrap text-ink"
          >
            <span
              data-mark
              style={{ "--mark-delay": "3000ms" } as React.CSSProperties}
              className="-mx-[0.25em] rounded-[0.2em] px-[0.25em] py-[0.05em] box-decoration-clone"
            >
              แล้ววาดเป็นแผนที่ให้ AI
            </span>
          </p>
          <p
            data-enter
            style={{ "--enter-delay": "1200ms" } as React.CSSProperties}
            className="mt-[clamp(1rem,3.5svh,2.25rem)] text-[clamp(1.0625rem,1.5vw,1.625rem)] leading-[1.45] text-muted"
          >
            ทั้งคนและ AI เปิดอ่านแผนที่ชุดเดียวกัน
          </p>
        </div>
      </div>
    </Frame>
  );
}
