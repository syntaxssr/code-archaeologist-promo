import Image from "next/image";
import type { ReactNode } from "react";
import udong from "@/public/art/avatar-udong.webp";

/**
 * The chat the section "what Code Archaeologist is" is told in: the problem
 * screen asks, and the results screen asks again. Both draw the same two
 * people with the same bubbles, so the second exchange reads as the same
 * conversation, not a new one.
 *
 * The bubbles are drawn the way a phone draws them — blue for us, grey for the
 * reply, each with the little curled tail at its bottom corner — so a screen
 * reads as a chat before a word of it is read. Everything is sized in em, so
 * the type size set on the chat's container scales the whole thing.
 *
 * The one asking is อุด้ง, from the team, in an archaeologist's pith helmet. The
 * AI is "Uni" — Japanese for sea urchin — a black sea urchin with a spiky halo:
 * a friendly send-up of the spiky logos AI assistants wear. It is drawn here,
 * not borrowed, and names no real product.
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
 * One message: avatar, name and bubble, on the speaker's side. Every message
 * carries its speaker's name, so the room never has to work out who said what.
 */
export function Message({
  from,
  delay,
  width = "max-w-[72%]",
  children,
}: {
  from: "us" | "ai";
  /** When it arrives after the screen goes live, in ms. */
  delay: number;
  /** How wide a bubble may grow, as a Tailwind max-width class. */
  width?: string;
  children: ReactNode;
}) {
  const us = from === "us";
  return (
    <div
      data-enter
      style={{ "--enter-delay": `${delay}ms` } as React.CSSProperties}
      className={`flex items-end gap-[0.7em] ${us ? "justify-end" : ""}`}
    >
      {us ? null : <UrchinAvatar />}
      <div className={`flex ${width} flex-col ${us ? "items-end" : "items-start"}`}>
        <Name align={us ? "right" : "left"}>{us ? "อุด้ง" : "Uni · AI"}</Name>
        <Bubble side={us ? "sent" : "received"}>{children}</Bubble>
      </div>
      {us ? <PersonAvatar /> : null}
    </div>
  );
}
