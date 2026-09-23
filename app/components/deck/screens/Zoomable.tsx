"use client";

import Image, { type StaticImageData } from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { subscribeIndex } from "../deck-data";

/**
 * A picture with a button in its corner that opens it over the whole stage.
 *
 * For captures too detailed to read at the size a screen can give them — the
 * explorer's map most of all. The presenter clicks the corner, the picture
 * fills the stage on a dark ground, and a click anywhere, the close button or
 * Escape puts it back.
 *
 * While it is open it owns the input: clicks, keys and the wheel would
 * otherwise reach the deck and change the screen underneath it — the key and
 * wheel listeners run in the capture phase on window, ahead of the deck's own.
 * It closes by itself if the screen changes anyway (a deep link, the
 * browser's back button).
 *
 * The overlay is portalled to <body> because every screen sits in a transformed
 * box, and a fixed element inside a transform is fixed to that box, not to the
 * viewport.
 */
export function Zoomable({
  src,
  alt,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      // "f" still toggles full screen; everything else stops here.
      if (e.key.toLowerCase() === "f") return;
      e.stopImmediatePropagation();
      if (e.key === "Escape") setOpen(false);
    };
    const onWheel = (e: WheelEvent) => e.stopImmediatePropagation();
    window.addEventListener("keydown", onKey, { capture: true });
    window.addEventListener("wheel", onWheel, { capture: true });
    const unsubscribe = subscribeIndex(() => setOpen(false));
    return () => {
      window.removeEventListener("keydown", onKey, { capture: true });
      window.removeEventListener("wheel", onWheel, { capture: true });
      unsubscribe();
    };
  }, [open]);

  return (
    <div className="relative">
      <Image src={src} alt={alt} priority className={className} />
      <button
        type="button"
        aria-label="ขยายรูปเต็มจอ"
        onClick={(e) => {
          // The deck advances on any click; this one is ours.
          e.stopPropagation();
          setOpen(true);
        }}
        className="absolute top-[clamp(0.5rem,1vw,1rem)] right-[clamp(0.5rem,1vw,1rem)] flex size-[clamp(2.25rem,2.8vw,3.25rem)] cursor-pointer items-center justify-center rounded-full bg-ink/70 text-white transition-colors hover:bg-ink"
      >
        <Maximize2 className="size-[45%]" strokeWidth={2} aria-hidden />
      </button>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              // A portal still bubbles React events to the deck, so every click
              // in here is stopped before it can advance the screen.
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-[clamp(1rem,3vw,3rem)]"
            >
              <Image src={src} alt={alt} className="h-full w-full object-contain" />
              <button
                type="button"
                aria-label="ปิดรูป"
                autoFocus
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                className="absolute top-[clamp(0.75rem,1.5vw,1.5rem)] right-[clamp(0.75rem,1.5vw,1.5rem)] flex size-[clamp(2.5rem,3vw,3.5rem)] cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
              >
                <X className="size-[50%]" strokeWidth={2} aria-hidden />
              </button>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
