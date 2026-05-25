import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our House | House Vellum',
  description:
    'House Vellum is the work of Lukas, thirteen, and his father — a small apothecary in Fishers, Indiana.',
};

export default function OurHousePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-ink">
        <Image
          src="/atmospheric/workshop.jpg"
          alt="The House Vellum workshop"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-6 text-center text-cream">
          <p className="font-serif text-xs tracking-[0.3em] uppercase text-cream/70 mb-6">Our House</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            A small apothecary<br />
            <span className="italic text-cream/80">made by hand.</span>
          </h1>
        </div>
      </section>

      {/* Lukas's story */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-8 text-center">The Maker</p>
          <p className="font-serif text-2xl md:text-3xl text-ink leading-[1.4] mb-12 text-center">
            House Vellum is the work of Lukas, age thirteen, and his father.
          </p>
          <div className="space-y-6 text-base md:text-lg text-ink/80 leading-relaxed">
            <p>
              We render tallow on a small stove in a small kitchen in Fishers, Indiana. We pour soap into wooden molds. We wait six weeks. We wrap each bar in translucent paper and press an oxblood wax seal at the closure.
            </p>
            <p>
              This is not a venture-backed launch. There is no factory. There is no white-label supplier. There is a boy who wanted to learn the old way of making things, and a father who agreed to learn it with him.
            </p>
            <p>
              We named the brand House Vellum because vellum is what important things used to be written on — slow material, made to last centuries, authenticated with a stamped wax seal. We do not pretend it is the nineteenth century. We are admitting that the old way produced better results, and we are doing it again, on purpose, in 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Process — alternating image/text */}
      <section className="bg-cream pb-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/5]">
              <Image
                src="/atmospheric/soap-curing.jpg"
                alt="Bars curing on the shelf"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-4">No. I</p>
              <h2 className="font-serif text-4xl text-ink mb-6">The Cure</h2>
              <p className="text-ink/80 leading-relaxed">
                Most artisan soap is cured for four weeks. House Vellum cures for six. The extra two weeks give a harder bar that lasts longer in the dish, lathers more cleanly, and finishes smoother on the skin. There is no shortcut. Only the wait.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="md:order-2 relative aspect-[4/5]">
              <Image
                src="/atmospheric/cutting-soap.jpg"
                alt="Cutting the cured bars by hand"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:order-1">
              <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-4">No. II</p>
              <h2 className="font-serif text-4xl text-ink mb-6">By Hand</h2>
              <p className="text-ink/80 leading-relaxed">
                Every bar is cut by hand from a single block. No two are identical — the edges vary, the surface bears the trace of the wire, the weight is honest to a tenth of an ounce. We do not sand them smooth. The bar is the record of the making.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/5]">
              <Image
                src="/atmospheric/wax-seal-set.jpg"
                alt="Wax seals and brass stamps"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-4">No. III</p>
              <h2 className="font-serif text-4xl text-ink mb-6">The Seal</h2>
              <p className="text-ink/80 leading-relaxed">
                Each bar is wrapped in translucent vellum paper and closed with oxblood wax pressed by hand. The seal is the signature — pressed warm, cooled hard, broken by you. The unwrapping is the first thing that happens when the soap arrives. We hope you take a moment with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing — CTA */}
      <section className="bg-ink text-cream py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xs tracking-[0.3em] uppercase text-cream/50 mb-6">The Library</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Three soaps. Six weeks. By hand.
          </h2>
          <p className="text-cream/70 leading-relaxed mb-10 max-w-xl mx-auto">
            The inaugural three are available July 2026. Leave us your address and we will write when they are ready.
          </p>
          <Link
            href="/shop"
            className="inline-block border border-cream text-cream text-xs tracking-[0.25em] uppercase px-10 py-3.5 hover:bg-cream hover:text-ink transition-colors"
          >
            The Inaugural Three
          </Link>
        </div>
      </section>
    </main>
  );
}
