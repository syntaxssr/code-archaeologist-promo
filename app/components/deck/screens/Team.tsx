import Image from "next/image";
import { Fragment } from "react";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import photo from "@/public/art/team-dig.jpg";

/** Copied from the skill's README. */
const INSTALL = "npx github:non-nattawut/Code-Archaeologist-LLM-Agent-Skill --harness claude";

/**
 * Screen 06 — the team, and the end of the run.
 *
 * The last screen, so it carries both the faces and the line to leave with; it
 * stays up through the judges' questions. The close used to be a screen of its
 * own after this one, and was folded in on 24 September so the run ends on the
 * people who built the thing.
 *
 * Left, one photograph of the two of us at a dig, dressed for the name, with
 * each name directly under the person it belongs to — so the room pairs a face
 * with a name without working it out. No roles: the names are enough. Right,
 * the claim the run was rebuilt around, the answer in the orange marker three
 * seconds in as on every screen before it, and under it the install command,
 * verbatim, in a tile of its own so it reads as something to type.
 *
 * Each name sits in a column 27% of the photo wide, the two side by side and
 * centred, which puts their centres at 36.5% and 63.5% across — where the two
 * people stand in the photo. If the photo is replaced, measure again. Each name
 * is English and the nickname Thai, on lines of their own, so no line mixes the
 * two scripts.
 *
 * The photo is 2000 × 1116.
 */
const people = [
  { first: "Peerapon", last: "Chanthachaem", nick: "บาส" },
  { first: "Nattawut", last: "Rodthong", nick: "อุด้ง" },
];

export function Team({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <div className="flex min-h-0 items-center gap-[clamp(1.5rem,3.5vw,4rem)]">
        <figure className="flex w-[56%] shrink-0 flex-col">
          <Image
            src={photo}
            alt="Peerapon (บาส) ใส่หมวกเฟดอร่าและแจ็กเก็ตหนัง ชี้ไปที่ Nattawut (อุด้ง) ที่ใส่หมวกกันแดดและถือแว่นขยายส่องเศษภาชนะ ยืนอยู่ในหลุมขุดค้นโบราณคดี"
            priority
            data-enter
            style={{ "--enter-delay": "120ms" } as React.CSSProperties}
            className="h-auto w-full rounded-[clamp(0.75rem,1.1vw,1.5rem)]"
          />
          <figcaption className="mt-[clamp(0.75rem,2.4svh,1.5rem)] flex justify-center">
            {people.map((p, n) => (
              <div
                key={p.first}
                data-enter
                style={{ "--enter-delay": `${420 + n * 160}ms` } as React.CSSProperties}
                className="w-[27%] text-center"
              >
                <p className="text-[clamp(1.0625rem,1.6vw,1.75rem)] leading-[1.2] font-semibold tracking-[-0.01em] text-ink">
                  <span className="block">{p.first}</span>
                  <span className="block">{p.last}</span>
                </p>
                <p className="mt-[clamp(0.2rem,0.7svh,0.45rem)] text-[clamp(1rem,1.3vw,1.5rem)] leading-[1.4] text-muted">
                  {p.nick}
                </p>
              </div>
            ))}
          </figcaption>
        </figure>

        <div className="min-w-0 flex-1">
          <h2
            data-enter
            style={{ "--enter-delay": "900ms" } as React.CSSProperties}
            className="text-[clamp(1.25rem,2.3vw,2.75rem)] leading-[1.3] font-semibold tracking-[-0.02em] text-ink"
          >
            {/* One phrase per line, held whole, as on screens 01 to 04. */}
            <span className="block whitespace-nowrap">เปิดโปรเจกต์ที่ไม่เคยเห็น</span>
            <span className="mt-[clamp(0.25rem,1svh,0.6rem)] block whitespace-nowrap">
              <span
                data-mark
                style={{ "--mark-delay": "3000ms" } as React.CSSProperties}
                className="-mx-[0.25em] rounded-[0.2em] px-[0.25em] py-[0.05em] box-decoration-clone"
              >
                แล้วเข้าใจได้ตั้งแต่วันแรก
              </span>
            </span>
          </h2>

          <div
            data-enter
            style={{ "--enter-delay": "1400ms" } as React.CSSProperties}
            className="mt-[clamp(1.25rem,4svh,2.75rem)] rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2 px-[clamp(0.875rem,1.4vw,1.75rem)] py-[clamp(0.75rem,2svh,1.25rem)]"
          >
            {/* Breaks at a space or after the slash first; mid-token only if a
                piece is still wider than the tile. */}
            <p className="font-mono text-[clamp(1rem,1.05vw,1.25rem)] leading-[1.5] [overflow-wrap:anywhere] text-ink">
              {INSTALL.split("/").map((piece, n) => (
                <Fragment key={n}>
                  {n > 0 ? "/" : null}
                  {n > 0 ? <wbr /> : null}
                  {piece}
                </Fragment>
              ))}
            </p>
          </div>
          <p
            data-enter
            style={{ "--enter-delay": "1600ms" } as React.CSSProperties}
            className="mt-[clamp(0.5rem,1.4svh,0.9rem)] text-[clamp(1rem,1.2vw,1.375rem)] leading-[1.45] text-muted"
          >
            <span className="inline-block">ติดตั้งคำสั่งเดียว ·</span>{" "}
            <span className="inline-block">ใช้ได้กับ Claude, Cursor, Windsurf และ Zed</span>
          </p>
        </div>
      </div>
    </Frame>
  );
}
