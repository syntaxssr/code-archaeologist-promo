import { Message } from "./Chat";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";

/**
 * Screen 02 · 1/3 — the problem, first step of "what Code Archaeologist is".
 *
 * One exchange everyone in the room has had with an AI: ask it about your own
 * code, get a confident answer, push back, get a corrected answer just as
 * confident — and find out later it was still a guess. It is the
 * runner from screen 01 hitting the wall — strong, fast, and not knowing the
 * route — told in the form people actually meet it.
 *
 * The example is in plain words (a discount, a cart, a receipt) so the half of
 * the room that does not write code can follow it. It is illustrative, not a
 * case from a real repository; the presenter should say "for example". If the
 * team supplies its real case (an entity calling a service directly), it
 * belongs here instead.
 *
 * The messages arrive in the order of a conversation, then the reality line,
 * and last the orange marker sweeps across what the AI missed — the same
 * marker as the answer on screen 01. The results screen (3/3) asks the same
 * question again, with the map. The chat itself is drawn in Chat.tsx.
 *
 * An earlier version drew one orange dot with a question mark at the end of
 * every line; it was accurate and too abstract to read.
 */

/**
 * The exchange: asked, answered with confidence, pushed once, and "fixed" with
 * the same confidence — still missing two places. Emoji carry each speaker's
 * mood, the way people actually write in a chat.
 */
const chat: { from: "us" | "ai"; text: string; delay: number }[] = [
  { from: "us", text: "ถ้าแก้ส่วนคิดส่วนลด จะกระทบตรงไหนบ้าง? 🤔", delay: 600 },
  { from: "ai", text: "กระทบแค่หน้าตะกร้าสินค้าครับ แก้ได้เลย 😎", delay: 1500 },
  { from: "us", text: "แน่ใจนะ? แล้วใบเสร็จล่ะ 🤨", delay: 2500 },
  { from: "ai", text: "ขออภัยครับ 🙏 ใบเสร็จด้วย ตอนนี้ครบแล้วครับ ✅", delay: 3400 },
];

export function Pain({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      {/* No heading: the topic bar already says "the problem", and the chat
          says the rest. The chat's type size is set once here. */}
      <div className="flex flex-col gap-[clamp(0.5rem,1.6svh,1rem)] text-[clamp(1.125rem,2vw,2.25rem)]">
        {chat.map((m) => (
          <Message key={m.text} from={m.from} delay={m.delay}>
            {m.text}
          </Message>
        ))}
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "4400ms" } as React.CSSProperties}
        // Centred under the chat: it is neither side of the conversation, it is
        // what the room finds out afterwards.
        className="mt-[clamp(1.25rem,4svh,3rem)] text-center text-[clamp(1.125rem,2vw,2.25rem)] leading-[1.45] font-semibold text-ink"
      >
        ของจริง: ยังมี{" "}
        {/* The marker lands after the line has been read. */}
        <span
          data-mark
          style={{ "--mark-delay": "5200ms" } as React.CSSProperties}
          className="-mx-[0.15em] rounded-[0.2em] px-[0.15em] box-decoration-clone"
        >
          อีเมลยืนยัน และรายงานยอดขาย
        </span>{" "}
        อีก
      </p>
    </Frame>
  );
}
