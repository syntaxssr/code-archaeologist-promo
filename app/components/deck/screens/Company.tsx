import Image from "next/image";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import moleOffice from "@/public/art/company-mole-office.jpg";

/**
 * Screen 04 — ready for work.
 *
 * The third frame of the cartoon story. Screen 01 is the runner without a
 * route, 02 is the mole handing it a map; here the mole digs under the
 * company's own building, behind a locked door, and the runner reads the map
 * at a desk inside. The question a company asks before it lets a tool near its
 * source — does our code leave the building? — is answered by the picture
 * before a word is read.
 *
 * It keeps the layout of 01 and 02 — picture left, words right, the answer in
 * the orange marker three seconds in — so the three cartoons read as one story.
 *
 * The facts, and where they come from:
 *   - local: scanning, building the map and opening the explorer are scripts
 *     and a file on disk, with no network and no vector database (the skill's
 *     README: "100% offline"). See Local.tsx.
 *   - fresh: the map is rebuilt by scripts, so rebuilding it costs no tokens.
 *   - install: one npx command.
 *
 * The small last line is the honest half, kept from Local.tsx: when someone
 * asks the agent a question, the notes it reads do go to the model. So the
 * screen says "scanned on our machine", never "the code never leaves".
 *
 * An earlier version asked the three questions as a table, each with a short
 * answer and a mono tag; it was accurate and read like a form.
 *
 * The art is 2000 × 1116, shown whole.
 */
export function Company({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="flex min-h-0 items-center gap-[clamp(1.5rem,3.5vw,4rem)]">
        <Image
          src={moleOffice}
          alt="การ์ตูนตุ่นนักโบราณคดีขุดอุโมงค์ใต้ตึกบริษัทที่ประตูล็อกกุญแจ เจอฟอสซิลโค้ด ส่วนหุ่นยนต์นักวิ่งนั่งอ่านแผนที่สีส้มอยู่ในห้องทำงานข้างบน ตุ่นพูดว่า ขุดในบ้านเรานี่แหละ"
          priority
          data-enter
          style={{ "--enter-delay": "120ms" } as React.CSSProperties}
          className="h-auto w-[56%] shrink-0 rounded-[clamp(0.75rem,1.1vw,1.5rem)]"
        />

        <div className="min-w-0 flex-1">
          <h2
            data-enter
            style={{ "--enter-delay": "420ms" } as React.CSSProperties}
            className="text-[clamp(1.25rem,2.3vw,2.75rem)] leading-[1.3] font-semibold tracking-[-0.02em] whitespace-nowrap text-ink"
          >
            ตุ่นขุดอยู่ในบ้านเรา
          </h2>
          {/* The answer, in the same marker and at the same moment as 01 and 02. */}
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
              สแกนในเครื่องทั้งหมด
            </span>
          </p>
          {/* Thai has no spaces between words; each phrase is held whole. */}
          <p
            data-enter
            style={{ "--enter-delay": "1200ms" } as React.CSSProperties}
            className="mt-[clamp(1rem,3.5svh,2.25rem)] text-[clamp(1.0625rem,1.5vw,1.625rem)] leading-[1.45] text-muted"
          >
            <span className="inline-block">สแกนใหม่ไม่เสีย token</span>
            {" · "}
            <span className="inline-block">ติดตั้งคำสั่งเดียว</span>
          </p>
          {/* The honest half. */}
          <p
            data-enter
            style={{ "--enter-delay": "1500ms" } as React.CSSProperties}
            className="mt-[clamp(0.5rem,1.6svh,1rem)] text-[clamp(1rem,1.1vw,1.25rem)] leading-[1.45] text-faint"
          >
            <span className="inline-block">ที่ออกไปมีแค่ตอนถาม AI —</span>{" "}
            <span className="inline-block">ส่งเฉพาะโน้ตที่เกี่ยว</span>
          </p>
        </div>
      </div>
    </Frame>
  );
}
