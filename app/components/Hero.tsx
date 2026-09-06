export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen scroll-mt-20 flex-col items-center justify-center gap-6 border-b border-dashed border-white/20 px-6 text-center"
    >
      <span className="text-sm tracking-widest text-white/40">00 — Hero</span>
      <h1 className="text-4xl font-bold sm:text-5xl">Code Archaeologist</h1>
      <p className="max-w-xl text-white/50">
        Tagline placeholder — ชื่อโปรเจ็ค + คำโปรยสั้นๆ ตรงนี้
      </p>
      <div className="flex gap-3">
        <span className="rounded-md border border-dashed border-white/30 px-4 py-2 text-sm text-white/60">
          [ ดู Demo ]
        </span>
        <span className="rounded-md border border-dashed border-white/30 px-4 py-2 text-sm text-white/60">
          [ GitHub ]
        </span>
      </div>
    </section>
  );
}
