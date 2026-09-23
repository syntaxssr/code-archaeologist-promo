import Image from "next/image";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import runner from "@/public/art/skill-runner.jpg";

/**
 * Screen 01 — what a skill is.
 *
 * Written for the half of the room that does not write code, and for the
 * brief's own question — how AI was used. The answer is one picture of the
 * words beside it: a strong robot runner charges off the track and into a brick
 * wall, while an orange book marked ทักษะ (skills) stands by the path holding a map
 * titled "the right way" and points at it. Strength was never the problem; the
 * route was. A cartoon, so the room laughs once and remembers it.
 *
 * It replaced a sum of three tiles (AI + Skill = Result) and, before this art,
 * a take on the Creation of Adam that handed the book across. The words are the
 * team's own analogy: the AI is a very good
 * runner who does not know the route, and a skill is the runner's map — not
 * stupidity, just not knowing the way yet. The line under the heading is the
 * answer, so it is set in ink rather than muted. Earlier versions compared the
 * AI to a new hire who does not know the building yet.
 *
 * The picture sits left and the words right, so the eye meets the joke
 * before the sentence that names it. The art is 1376 × 768, shown whole and
 * never past that width. A larger export can lift the cap.
 */
export function Skill({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      {/* Picture left, words right: the room looks at the crash first, then
          reads what it means. */}
      <div className="flex min-h-0 items-center gap-[clamp(1.5rem,3.5vw,4rem)]">
        <Image
          src={runner}
          alt="การ์ตูนหุ่นยนต์นักวิ่งกล้ามโตวิ่งออกนอกลู่ไปชนกำแพงอิฐ ข้างทางมีสมุดสีส้มที่เขียนว่า ทักษะ ถือแผนที่ เส้นทางที่ถูกต้อง ชี้บอกทางที่ถูก"
          priority
          data-enter
          style={{ "--enter-delay": "120ms" } as React.CSSProperties}
          // Width-bound, and never past its own 1376 px, so a projector does
          // not stretch it soft.
          className="h-auto w-[56%] max-w-[1376px] shrink-0 rounded-[clamp(0.75rem,1.1vw,1.5rem)]"
        />

        <div className="min-w-0 flex-1">
          {/* "skill คืออะไร" is the topic in the corner (Frame), so it is not
              repeated here. */}
          <h2
            data-enter
            style={{ "--enter-delay": "420ms" } as React.CSSProperties}
            className="text-[clamp(1.25rem,2.3vw,2.75rem)] leading-[1.3] font-semibold tracking-[-0.02em] text-ink"
          >
            {/* One line each, set by the team: the break is part of the
                sentence, so each line is held whole rather than left to Thai
                line breaking, which may split inside a word. */}
            <span className="block whitespace-nowrap">AI เปรียบเสมือนนักวิ่งที่เก่งมากๆ</span>
            <span className="block whitespace-nowrap">แต่ยังไม่รู้จักเส้นทาง</span>
          </h2>
          {/* The answer, highlighted: ink on an orange marker, the one place on
              the screen the accent is used. */}
          <p
            data-enter
            style={{ "--enter-delay": "900ms" } as React.CSSProperties}
            className="mt-[clamp(1rem,3.5svh,2.25rem)] text-[clamp(1.25rem,2.3vw,2.75rem)] leading-[1.3] font-semibold tracking-[-0.02em] whitespace-nowrap text-ink"
          >
            {/* The marker bleeds past the text by its own padding, so the words
                stay aligned with the lines above. It sweeps in left to right
                three seconds after the screen arrives: the presenter reads the
                runner first, then the highlight lands on the answer. */}
            <span
              data-mark
              style={{ "--mark-delay": "3000ms" } as React.CSSProperties}
              className="-mx-[0.25em] rounded-[0.2em] px-[0.25em] py-[0.05em] box-decoration-clone"
            >
              skill จึงเป็นเหมือนแผนที่สำหรับนักวิ่ง
            </span>
          </p>
        </div>
      </div>
    </Frame>
  );
}
