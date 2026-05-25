import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    slug: 'the-library',
    number: 'No. I',
    name: 'The Library',
    notes: 'Tobacco, Vanilla, Leather',
    img: '/products/the-library.jpg',
  },
  {
    slug: 'the-garden',
    number: 'No. II',
    name: 'The Garden',
    notes: 'Lavender, Eucalyptus, Linen',
    img: '/products/the-garden.jpg',
  },
  {
    slug: 'the-pantry',
    number: 'No. III',
    name: 'The Pantry',
    notes: 'Oats, Honey, Cream',
    img: '/products/the-pantry.jpg',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="grid md:grid-cols-2 min-h-[calc(100vh-73px)]">
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 bg-cream order-2 md:order-1">
          <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-8">Est. 2026 · Fishers, Indiana</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wider text-ink mb-6 leading-[1.05]">
            HOUSE<br />VELLUM
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-ink/70 mb-10">
            Six weeks. By hand.
          </p>
          <p className="text-base text-ink/80 mb-10 max-w-md leading-relaxed">
            Slow-cured tallow soap, wrapped in vellum paper, sealed in oxblood wax. Three small bars. Available July 2026.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/shop"
              className="inline-block border border-oxblood text-oxblood text-xs tracking-[0.25em] uppercase px-8 py-3.5 hover:bg-oxblood hover:text-cream transition-colors"
            >
              The Library
            </Link>
            <Link
              href="/our-house"
              className="text-xs tracking-[0.25em] uppercase text-ink/60 hover:text-oxblood transition-colors"
            >
              Our House →
            </Link>
          </div>
        </div>
        <div className="relative h-[65vh] md:h-auto order-1 md:order-2">
          <Image
            src="/hero/hero-2.jpg"
            alt="A bar of House Vellum soap wrapped in vellum paper and sealed in oxblood wax"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Brand thesis */}
      <section className="bg-cream py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-8">A small apothecary</p>
          <p className="font-serif text-2xl md:text-3xl text-ink leading-[1.4]">
            Most modern personal care is fast, synthetic, and disposable.
            <br className="hidden md:block" />
            <span className="text-oxblood"> House Vellum is the opposite.</span>
          </p>
          <div className="w-16 h-px bg-kraft mx-auto mt-12" />
          <p className="text-base text-ink/70 mt-12 leading-relaxed max-w-2xl mx-auto">
            Every bar is rendered from real beef tallow, slow-cured for six weeks, wrapped by hand in translucent vellum paper, and sealed with oxblood wax. The old way of making things produced better results. We are doing it again, on purpose, in 2026.
          </p>
        </div>
      </section>

      {/* The triptych */}
      <section className="bg-cream pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-4">The Library · Inaugural Three</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">No. I, II, III</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {products.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-kraft/10">
                  <Image
                    src={p.img}
                    alt={`${p.number} · ${p.name}`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="font-serif text-xs tracking-[0.25em] text-kraft uppercase mb-2">{p.number}</p>
                <h3 className="font-serif text-2xl text-ink mb-2 group-hover:text-oxblood transition-colors">{p.name}</h3>
                <p className="text-sm text-ink/60 italic mb-3">{p.notes}</p>
                <p className="text-xs tracking-[0.25em] uppercase text-oxblood">Available July 2026</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our House teaser */}
      <section className="bg-ink text-cream py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] order-2 md:order-1">
            <Image
              src="/atmospheric/workshop.jpg"
              alt="The House Vellum workshop in Fishers, Indiana"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-serif text-xs tracking-[0.3em] text-cream/50 uppercase mb-6">Our House</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-[1.15]">
              Made by a thirteen-year-old<br />
              <span className="italic text-cream/70">and his mother.</span>
            </h2>
            <p className="text-cream/80 leading-relaxed mb-10 text-base">
              House Vellum is the work of Lukas and his mother. They render tallow, pour soap, and press wax seals from a small kitchen in Fishers, Indiana. Not venture-backed. Not theatre. Just the old way of making things, done on purpose.
            </p>
            <Link
              href="/our-house"
              className="inline-block border border-cream text-cream text-xs tracking-[0.25em] uppercase px-8 py-3.5 hover:bg-cream hover:text-ink transition-colors"
            >
              The Story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
