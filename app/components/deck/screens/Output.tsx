import Image, { type StaticImageData } from "next/image";
import { Frame } from "./Frame";
import type { ScreenProps } from "./index";
import graph from "@/public/shots/explorer-graph.png";
import health from "@/public/shots/health-panel.png";
import security from "@/public/shots/security-findings.png";

/**
 * Screen 04 — what comes out, and who reads it.
 *
 * The screen the run is built to reach. The pitch no longer leads with what the
 * scan costs; it leads with what a developer opens afterwards. So the screen is
 * the artefacts themselves, at the size they deserve: the explorer fills the
 * wide tile, and the three things you can do inside it sit beside it.
 *
 * Everything here is the tool's own window on the sample repository, not a
 * drawing — which is what lets the screen make its claim with one sentence
 * instead of six rows of text.
 *
 * The note tile has no capture yet. It is drawn as an empty slot on purpose:
 * an obviously missing picture is honest, and a stand-in that looks finished
 * would be on stage before anyone noticed it was invented.
 */
const tileBase = "overflow-hidden rounded-[clamp(0.75rem,1.1vw,1.5rem)] bg-sheet-2";

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-[clamp(0.35rem,1svh,0.65rem)] font-mono text-[clamp(1rem,0.95vw,1.0625rem)] tracking-[0.14em] text-faint uppercase">
      {children}
    </figcaption>
  );
}

function ShotTile({
  src,
  alt,
  caption,
  delay,
  className = "",
  fit = "cover",
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
  delay: number;
  className?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <figure
      data-enter
      style={{ "--enter-delay": `${delay}ms` } as React.CSSProperties}
      className={`flex min-h-0 flex-col ${className}`}
    >
      <div className={`${tileBase} min-h-0 flex-1`}>
        <Image
          src={src}
          alt={alt}
          priority
          className={`h-full w-full ${fit === "contain" ? "object-contain object-center" : "object-cover object-left-top"}`}
        />
      </div>
      <Caption>{caption}</Caption>
    </figure>
  );
}

export function Output({ slide }: ScreenProps) {
  return (
    <Frame slide={slide}>
      <h2
        data-enter
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        className="flex-none text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink"
      >
        สแกนเสร็จ เปิดอ่านได้ทันที
      </h2>

      {/* Two of the tool's panels are tall and narrow, so they get columns of
          their own rather than short slots that would shrink them to nothing.
          Every shot is shown whole: nothing is cropped to flatter it. */}
      <div className="mt-[clamp(0.75rem,2.4svh,1.75rem)] flex min-h-0 flex-1 gap-[clamp(0.625rem,1vw,1.25rem)]">
        <div className="flex min-h-0 w-[50%] shrink-0 flex-col gap-[clamp(0.625rem,1vw,1.25rem)]">
          <ShotTile
            src={graph}
            alt="explorer.html แสดงกราฟการเรียกของโค้ดเบสตัวอย่าง แต่ละจุดคือเมธอด เส้นคือการเรียก"
            caption="explorer.html · flow map"
            delay={360}
            fit="contain"
            className="min-h-0 flex-[1.7]"
          />

          {/* No capture yet — drawn as an empty slot rather than invented. */}
          <figure
            data-enter
            style={{ "--enter-delay": "520ms" } as React.CSSProperties}
            className="flex min-h-0 flex-1 flex-col"
          >
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-[clamp(0.25rem,0.8svh,0.5rem)] rounded-[clamp(0.75rem,1.1vw,1.5rem)] border-2 border-dashed border-rule px-[1rem] text-center">
              <p className="text-[clamp(1rem,1.3vw,1.5rem)] leading-[1.4] text-ink">โน้ต 1 ใบ ต่อ 1 เมธอด</p>
              <p className="font-mono text-[clamp(1rem,0.95vw,1.0625rem)] tracking-[0.14em] text-faint uppercase">
                screenshot pending
              </p>
            </div>
            <Caption>markdown · wikilink</Caption>
          </figure>
        </div>

        <ShotTile
          src={health}
          alt="แผงสุขภาพของ explorer แสดงคะแนนรวมและสำมะโนของโค้ดเบส"
          caption="health · census"
          delay={660}
          fit="contain"
          className="min-h-0 flex-1"
        />

        <ShotTile
          src={security}
          alt="แท็บ security ของ explorer แต่ละรายการบอกไฟล์และเลขบรรทัด"
          caption="security · file : line"
          delay={800}
          fit="contain"
          className="min-h-0 flex-1"
        />
      </div>

      <p
        data-enter
        style={{ "--enter-delay": "1000ms" } as React.CSSProperties}
        className="mt-[clamp(0.625rem,2svh,1.25rem)] flex-none text-[clamp(1.0625rem,1.6vw,1.75rem)] leading-[1.4] text-muted"
      >
        ทุกตัวเลข ชี้กลับไปที่บรรทัดได้
      </p>
    </Frame>
  );
}
