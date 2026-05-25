import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { products } from '@/data/products';
import NotifyForm from './NotifyForm';

type ProductPageProps = {
  product: Product;
};

export default function ProductPage({ product }: ProductPageProps) {
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <main className="bg-cream">
      <article className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <nav className="mb-12 text-xs tracking-[0.25em] uppercase text-ink/50">
          <Link href="/" className="hover:text-oxblood transition-colors">House</Link>
          <span className="mx-3">/</span>
          <Link href="/shop" className="hover:text-oxblood transition-colors">The Library</Link>
          <span className="mx-3">/</span>
          <span className="text-oxblood">{product.number}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="relative aspect-[4/5] bg-kraft/10 sticky top-24">
            <Image
              src={product.image}
              alt={`${product.number} — ${product.name}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="pt-4">
            <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-4">
              {product.number}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-ink mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="font-serif italic text-lg text-oxblood mb-10">
              {product.notes}
            </p>

            <p className="text-base text-ink/80 leading-relaxed mb-10">
              {product.prose}
            </p>

            <div className="border-t border-kraft/30 pt-8 mb-8">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-serif text-2xl text-ink">{product.price}</span>
                <span className="text-xs tracking-[0.25em] uppercase text-oxblood">
                  Available {product.available}
                </span>
              </div>
              <p className="text-xs text-ink/50 italic">
                Six-week slow cure. Wrapped in vellum paper, sealed in oxblood wax.
              </p>
            </div>

            <div className="mb-12">
              <NotifyForm productName={product.name} />
            </div>

            <details className="border-t border-kraft/30 pt-6 group">
              <summary className="text-xs tracking-[0.25em] uppercase text-ink/60 cursor-pointer hover:text-oxblood transition-colors flex items-center justify-between">
                <span>Ingredients</span>
                <span className="text-kraft group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-ink/70 leading-relaxed mt-4 italic">
                {product.ingredients}
              </p>
            </details>

            <details className="border-t border-kraft/30 pt-6 mt-4 group">
              <summary className="text-xs tracking-[0.25em] uppercase text-ink/60 cursor-pointer hover:text-oxblood transition-colors flex items-center justify-between">
                <span>The cure</span>
                <span className="text-kraft group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-ink/70 leading-relaxed mt-4">
                Most artisan soap is cured for four weeks. House Vellum cures for six. The extra two weeks give a harder bar that lasts longer in the dish, lathers more cleanly, and finishes smoother on the skin. There is no shortcut to this — only the wait.
              </p>
            </details>
          </div>
        </div>
      </article>

      {/* Other soaps */}
      <section className="border-t border-kraft/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-10 text-center">
            Also in the library
          </p>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {others.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group block">
                <div className="relative aspect-[3/2] mb-5 overflow-hidden bg-kraft/10">
                  <Image
                    src={p.image}
                    alt={`${p.number} — ${p.name}`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="font-serif text-xs tracking-[0.25em] text-kraft uppercase mb-1">{p.number}</p>
                <h3 className="font-serif text-2xl text-ink group-hover:text-oxblood transition-colors">{p.name}</h3>
                <p className="text-sm text-ink/60 italic">{p.notes}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
