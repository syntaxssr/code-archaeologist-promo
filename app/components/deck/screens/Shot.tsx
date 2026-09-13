import Image, { type StaticImageData } from "next/image";

/**
 * A real screenshot, framed.
 *
 * The deck's rule is that archaeology lives in the logic and never in the
 * pictures — which left the pictures to be drawn. These are not drawn: they are
 * the tool's own window, captured from `explorer.html` running on the sample
 * repository. That makes them the only images on the deck that are evidence
 * rather than illustration, so they get the plainest possible frame: a hairline,
 * the raised ground, and a mono caption that says what is being looked at.
 *
 * Nothing is cropped to flatter it. If the tool's window has an empty panel,
 * the empty panel is in the picture.
 */
export function Shot({
  src,
  alt,
  caption,
  className = "",
  priority = false,
  fit = "cover",
  frame = "fill",
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  /** "cover" fills the frame and lets the edge clip; "contain" shows all of it. */
  fit?: "cover" | "contain";
  /** "fill" takes the space it is given; "aspect" takes the image's own shape. */
  frame?: "fill" | "aspect";
}) {
  // A tall shot in a wide slot leaves a band of empty ground beside it, so it
  // can ask for a frame shaped like the image instead. Only safe when the image
  // is taller than its slot — a wide one would overflow the row.
  const framed =
    frame === "aspect"
      ? {
          className: "min-h-0 w-auto max-w-full flex-1 self-center",
          style: { aspectRatio: src.width / src.height },
        }
      : { className: "min-h-0 flex-1", style: undefined };

  return (
    <figure className={`flex min-h-0 flex-col ${className}`}>
      <div
        style={framed.style}
        className={`${framed.className} overflow-hidden border border-rule bg-sheet-raised`}
      >
        <Image
          src={src}
          alt={alt}
          priority={priority}
          className={`h-full w-full ${
            fit === "contain"
              ? "object-contain object-center"
              : "object-cover object-left-top"
          }`}
        />
      </div>
      {caption ? (
        <figcaption className="mt-[clamp(0.4rem,1.1svh,0.7rem)] font-mono text-[clamp(0.6875rem,0.9vw,0.9375rem)] tracking-[0.1em] text-faint uppercase">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
