export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-8">
          Est. 2026
        </p>

        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-oxblood flex items-center justify-center">
            <span className="font-serif text-3xl text-oxblood">
              V
            </span>
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl tracking-wider text-ink mb-6">
          HOUSE VELLUM
        </h1>

        <p className="font-serif italic text-lg text-ink/70 mb-12">
          Six weeks. By hand.
        </p>

        <div className="w-12 h-px bg-kraft mx-auto mb-12" />

        <p className="text-sm text-ink/60 mb-2">
          Launching Spring 2026.
        </p>
        <p className="text-xs text-ink/50">
          A small house of handmade tallow goods.
        </p>
      </div>
    </main>
  );
}
