import { Message } from "./Chat";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import { Zoomable } from "./Zoomable";
import graph from "@/public/shots/explorer-graph.png";

/**
 * Screen 02 · 3/3 — what comes out, last step of "what Code Archaeologist is".
 *
 * It closes the chat the problem screen opened. อุด้ง asks Uni the same
 * question again; this time Uni answers from the map, and names all four
 * places — the two it missed before in the same orange marker that showed
 * them missing. Beside the chat is the map itself: the real explorer, so the
 * room sees the map is a thing on disk and not only a drawing in a cartoon.
 *
 * The chat is illustrative, as on the problem screen; the explorer is a real
 * capture of the sample repository, and its caption says so, so nobody takes
 * it for a map of the discount system in the chat. The caption also credits
 * tree-sitter by name — the team wants the library credited rather than the
 * bare term "AST".
 *
 * An earlier version showed four captures (explorer, a note, health, security
 * findings) side by side. It was all real and too much to read; the demo shows
 * the rest.
 */
export function Output({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="grid min-h-0 grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center gap-[clamp(1.5rem,3.5vw,4rem)]">
        {/* The chat, asked again. Its type size is set once here. */}
        <div className="flex flex-col gap-[clamp(0.5rem,1.6svh,1rem)] text-[clamp(1.0625rem,1.75vw,2rem)]">
          {/* Thai has no spaces between words, so each phrase is held whole
              and lines break only between phrases. */}
          <Message from="us" delay={500} width="max-w-[86%]">
            <span className="inline-block">ถามใหม่อีกรอบ</span>{" "}
            <span className="inline-block">ถ้าแก้ส่วนคิดส่วนลด</span>{" "}
            <span className="inline-block">กระทบตรงไหน? 🤔</span>
          </Message>
          <Message from="ai" delay={1400} width="max-w-[86%]">
            <span className="block whitespace-nowrap">ดูจากแผนที่แล้ว กระทบ 4 ที่ครับ 🗺️</span>
            <span className="block whitespace-nowrap">ตะกร้า · ใบเสร็จ</span>
            {/* The two it missed last time, marked in the orange that showed
                them missing. */}
            <span className="block whitespace-nowrap">
              <span
                data-mark
                style={{ "--mark-delay": "2600ms" } as React.CSSProperties}
                className="-mx-[0.1em] rounded-[0.2em] px-[0.1em] font-semibold box-decoration-clone"
              >
                อีเมลยืนยัน · รายงานยอดขาย
              </span>
            </span>
          </Message>
          <Message from="us" delay={3400} width="max-w-[86%]">
            ครบจริง! 🎉
          </Message>
        </div>

        {/* The map itself: a real capture, shown whole, with a button in its
            corner to open it over the whole stage — at this size the map is
            evidence, not something anyone can read. */}
        <figure
          data-enter
          style={{ "--enter-delay": "900ms" } as React.CSSProperties}
          className="flex min-w-0 flex-col"
        >
          <Zoomable
            src={graph}
            alt="explorer.html แสดงแผนที่การเรียกของ repo ตัวอย่าง แต่ละจุดคือเมธอด เส้นคือการเรียก"
            className="h-auto w-full rounded-[clamp(0.75rem,1.1vw,1.5rem)]"
          />
          <figcaption className="mt-[clamp(0.4rem,1.2svh,0.8rem)] text-[clamp(1rem,1.1vw,1.25rem)] leading-[1.4] text-muted">
            แผนที่จริงใน explorer · สแกนด้วย tree-sitter · repo ตัวอย่าง
          </figcaption>
        </figure>
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "4200ms" } as React.CSSProperties}
        className="mt-[clamp(1.25rem,4svh,3rem)] text-center text-[clamp(1.125rem,2vw,2.25rem)] leading-[1.45] font-semibold text-ink"
      >
        ตอบจากแผนที่ ไม่ใช่การเดา — คนก็เปิดดูแผนที่เดียวกันได้เอง
      </p>
    </Frame>
  );
}
