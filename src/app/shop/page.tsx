import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Library — Shop | House Vellum',
  description:
    'Three inaugural soap bars from House Vellum: The Library, The Garden, and The Pantry. Available July 2026.',
};

export default function ShopPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-16 text-center">
        <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-6">The Library</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6 leading-tight">
          The Inaugural Three
        </h1>
        <p className="font-serif italic text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed">
          Three soaps, slow-cured six weeks, wrapped by hand. The first chapter of a small apothecary that will grow with us.
        </p>
        <div className="w-16 h-px bg-kraft mx-auto mt-12" />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {products.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className="group block">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-kraft/10">
                <Image
                  src={p.image}
                  alt={`${p.number} — ${p.name}`}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase text-oxblood">
                  {p.available}
                </div>
              </div>
              <p className="font-serif text-xs tracking-[0.25em] text-kraft uppercase mb-2">{p.number}</p>
              <h2 className="font-serif text-2xl text-ink mb-2 group-hover:text-oxblood transition-colors">{p.name}</h2>
              <p className="text-sm text-ink/60 italic mb-3">{p.notes}</p>
              <p className="text-sm text-ink/70 mb-4 leading-relaxed">{p.blurb}</p>
              <div className="flex items-baseline justify-between border-t border-kraft/20 pt-3">
                <span className="font-serif text-lg text-ink">{p.price}</span>
                <span className="text-xs tracking-[0.25em] uppercase text-oxblood group-hover:underline">View →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
