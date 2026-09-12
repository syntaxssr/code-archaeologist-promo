import type { ReactNode } from "react";
import { Draw } from "./Draw";
import { sheetCount } from "./sheet-index";

/**
 * One entry in the margin register. The split is the sheet's bilingual rule:
 * `ref` and `mono` are Latin notation and are never translated, the way a real
 * record keeps its codes fixed while the interpretive text is in the local
 * language; `title` and `body` are Thai, and carry the meaning.
 */
export type Note = {
  ref: string;
  title: string;
  mono?: string;
  body?: string;
};

export function MarginRegister({ notes }: { notes: Note[] }) {
  return (
    <aside className="border-rule xl:border-l xl:pl-7 2xl:pl-8">
      <p className="font-mono text-base font-medium uppercase tracking-[0.14em] text-faint">
        Notes
      </p>
      <span className="mt-2 block h-px w-full bg-rule xl:hidden" />
      <ol className="mt-3 space-y-4">
        {notes.map((n, i) => (
          <li key={n.ref} data-note style={{ "--note-delay": `${520 + i * 160}ms` } as React.CSSProperties}>
            <p className="font-mono text-base font-medium uppercase tracking-[0.12em] text-traced-deep">
              {n.ref}
            </p>
            <p className="mt-1.5 text-lg font-medium leading-[1.5] text-ink">{n.title}</p>
            {n.mono && (
              <p className="mt-1 font-mono text-base leading-[1.55] break-words text-muted">
                {n.mono}
              </p>
            )}
            {n.body && <p className="mt-1.5 text-lg leading-[1.6] text-muted">{n.body}</p>}
          </li>
        ))}
      </ol>
    </aside>
  );
}

/**
 * A beat of the sheet. Each one is a full screen so the presenter has a
 * discrete stop to pace against, but the grid, the rail and the register run
 * straight through them, so the eye reads one drawing being scrolled rather
 * than seven slides being advanced.
 */
export function Sheet({
  id,
  no,
  titleTh,
  titleEn,
  notes,
  children,
}: {
  id: string;
  no: string;
  titleTh: string;
  titleEn: string;
  notes?: Note[];
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="flex min-h-svh scroll-mt-4 flex-col px-6 pt-[clamp(2.25rem,6svh,4rem)] pb-[clamp(1.5rem,4svh,3rem)] sm:px-10"
    >
      <header className="flex-none">
        <div className="flex items-center gap-5">
          <span className="font-mono text-base font-medium uppercase tracking-[0.14em] text-faint tabular-nums">
            Sheet {no} / {sheetCount}
          </span>
          <span className="h-px flex-1 bg-rule" />
        </div>
        {/* Thai line, hairline, English beneath at a smaller size — the label
            convention of a real bilingual museum caption, applied at every
            scale from section title down to object note. */}
        <h2 className="mt-3.5 text-[clamp(1.875rem,min(3.6vw,5.4svh),3.5rem)] font-semibold leading-[1.18] tracking-[-0.01em] text-ink">
          {titleTh}
        </h2>
        <p className="mt-1.5 font-mono text-lg uppercase tracking-[0.12em] text-muted">
          {titleEn}
        </p>
      </header>

      {/* One trigger per beat, wrapping the drawing and its margin notes
          together — a note that lives outside the trigger never receives
          data-draw-run and would stay invisible. */}
      <Draw
        className={`mt-[clamp(1.5rem,3.7svh,2.5rem)] grid min-h-0 flex-1 gap-9 ${
          notes ? "xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_400px]" : ""
        }`}
      >
        <div className="flex min-h-0 flex-col justify-center">{children}</div>
        {notes && <MarginRegister notes={notes} />}
      </Draw>
    </section>
  );
}
