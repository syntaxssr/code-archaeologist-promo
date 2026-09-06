export function WireframeBlock({
  id,
  index,
  title,
  note,
  children,
}: {
  id: string;
  index: string;
  title: string;
  note?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-dashed border-white/20 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-sm tracking-widest text-white/40">{index}</span>
        <h2 className="mt-2 text-3xl font-bold">{title}</h2>
        {note && <p className="mx-auto mt-3 max-w-xl text-white/50">{note}</p>}
      </div>
      {children && <div className="mx-auto mt-12 max-w-5xl">{children}</div>}
    </section>
  );
}
