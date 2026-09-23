import Image from "next/image";
import type { ReactNode } from "react";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import udong from "@/public/art/avatar-udong.webp";

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
 * The bubbles are drawn the way a phone draws them — blue for us, grey for
 * the reply, each with the little curled tail at its bottom corner — so the
 * screen reads as a chat before a word of it is read. They arrive in the order
 * of a conversation, then the reality line,
 * and last the orange marker sweeps across what the AI missed — the same
 * marker as the answer on screen 01.
 *
 * Each side has an avatar, as a phone shows them, and a name above the bubble.
 * The one asking is อุด้ง, from the team, in an archaeologist's pith helmet. The
 * AI is "Uni" — Japanese for sea urchin — a black sea urchin with a spiky halo:
 * a friendly send-up of the spiky logos AI assistants wear, and of every one
 * of them that has answered this question too confidently. It is drawn here,
 * not borrowed, and names no real product.
 *
 * An earlier version drew one orange dot with a question mark at the end of
 * every line; it was accurate and too abstract to read.
 */
/**
 * A chat bubble with the tail a phone draws at its bottom corner. The tail is
 * its own shape in the bubble's colour, set half outside the corner, rather
 * than a cut-out in the page colour — the page has a grid on it, and a patch
 * of plain white would show.
 */
function Bubble({ side, children }: { side: "sent" | "received"; children: ReactNode }) {
  const sent = side === "sent";
  return (
    <p
      className={`relative rounded-[1.1em] px-[0.8em] py-[0.45em] leading-[1.35] ${
        sent ? "rounded-br-[0.3em] bg-chat-sent text-white" : "rounded-bl-[0.3em] bg-chat-received text-ink"
      }`}
    >
      {children}
      <svg
        viewBox="0 0 20 20"
        aria-hidden
        className={`absolute bottom-0 h-[0.9em] w-[0.9em] ${
          sent ? "-right-[0.42em] text-chat-sent" : "-left-[0.42em] -scale-x-100 text-chat-received"
        }`}
      >
        <path d="M0 0H8V6C8 13 12 17.5 20 20C12 21 5 19.5 0 16Z" fill="currentColor" />
      </svg>
    </p>
  );
}

/** Avatars are sized in em, so they scale with the chat's type. */
const avatar = "size-[2em] flex-none rounded-full";

function PersonAvatar() {
  return <Image src={udong} alt="" aria-hidden priority className={`${avatar} object-cover`} />;
}

/** The speaker's name over a bubble, the way a group chat labels it. */
function Name({ children, align }: { children: ReactNode; align: "left" | "right" }) {
  return (
    <span
      className={`mb-[0.35em] text-[max(1rem,0.55em)] leading-none text-muted ${align === "left" ? "ml-[0.9em]" : "mr-[0.9em]"}`}
    >
      {children}
    </span>
  );
}

/** Rounded, because the server and the browser can disagree in the last digit
 *  of Math.cos, and React will not patch a mismatched attribute. */
const at = (v: number) => Math.round(v * 100) / 100;

/** Uni: a black sea urchin — a round body, a ring of spines, two eyes. */
function UrchinAvatar() {
  const spines = Array.from({ length: 18 }, (_, n) => (n * Math.PI * 2) / 18);
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={avatar}>
      <circle cx="20" cy="20" r="20" className="fill-chat-received" />
      <g className="stroke-ink" strokeWidth="1.8" strokeLinecap="round">
        {spines.map((a) => (
          <line
            key={a}
            x1={at(20 + Math.cos(a) * 8)}
            y1={at(21 + Math.sin(a) * 8)}
            x2={at(20 + Math.cos(a) * 15.5)}
            y2={at(21 + Math.sin(a) * 15.5)}
          />
        ))}
      </g>
      <circle cx="20" cy="21" r="9" className="fill-ink" />
      <circle cx="16.6" cy="19.6" r="2.3" fill="#fff" />
      <circle cx="23.4" cy="19.6" r="2.3" fill="#fff" />
      <circle cx="17.1" cy="20.1" r="1.1" className="fill-ink" />
      <circle cx="23.9" cy="20.1" r="1.1" className="fill-ink" />
    </svg>
  );
}

/**
 * The exchange: asked, answered with confidence, pushed once, and "fixed" with
 * the same confidence — still missing two places. Emoji carry each speaker's
 * mood, the way people actually write in a chat. Every message carries its
 * speaker's name, so the room never has to work out who said what.
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
          says the rest. */}
      {/* The chat's type size is set once here; bubbles and avatars are in em. */}
      <div className="flex flex-col gap-[clamp(0.5rem,1.6svh,1rem)] text-[clamp(1.125rem,2vw,2.25rem)]">
        {chat.map((m) =>
          m.from === "us" ? (
            <div
              key={m.text}
              data-enter
              style={{ "--enter-delay": `${m.delay}ms` } as React.CSSProperties}
              className="flex items-end justify-end gap-[0.7em]"
            >
              <div className="flex max-w-[72%] flex-col items-end">
                <Name align="right">อุด้ง</Name>
                <Bubble side="sent">{m.text}</Bubble>
              </div>
              <PersonAvatar />
            </div>
          ) : (
            <div
              key={m.text}
              data-enter
              style={{ "--enter-delay": `${m.delay}ms` } as React.CSSProperties}
              className="flex items-end gap-[0.7em]"
            >
              <UrchinAvatar />
              <div className="flex max-w-[72%] flex-col items-start">
                <Name align="left">Uni · AI</Name>
                <Bubble side="received">{m.text}</Bubble>
              </div>
            </div>
          ),
        )}
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
