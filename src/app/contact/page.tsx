import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | House Vellum',
  description: 'Write to House Vellum. Fishers, Indiana.',
};

export default function ContactPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <p className="font-serif text-xs tracking-[0.3em] text-kraft uppercase mb-6">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-8 leading-tight">
            Write to us.
          </h1>
          <p className="text-base text-ink/80 leading-relaxed mb-12 max-w-md">
            We read every note. Wholesale inquiries, press, and small questions are all welcome. We answer within a few days. Often the same one.
          </p>

          <div className="space-y-8">
            <div>
              <p className="font-serif text-xs tracking-[0.3em] uppercase text-kraft mb-2">By post</p>
              <a
                href="mailto:hello@housevellum.com"
                className="font-serif text-2xl text-ink hover:text-oxblood transition-colors"
              >
                hello@housevellum.com
              </a>
            </div>

            <div>
              <p className="font-serif text-xs tracking-[0.3em] uppercase text-kraft mb-2">Made in</p>
              <p className="text-ink leading-relaxed">
                Fishers, Indiana<br />
                <span className="text-ink/60 italic">No visiting hours yet. The kitchen is busy curing.</span>
              </p>
            </div>

            <div>
              <p className="font-serif text-xs tracking-[0.3em] uppercase text-kraft mb-2">Wholesale</p>
              <p className="text-ink/70 text-sm leading-relaxed max-w-md">
                If you stock a small apothecary, gift shop, or men&apos;s grooming store and the brand suits you, please write. We are taking a short list of partners for the inaugural three.
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] md:sticky md:top-24">
          <Image
            src="/atmospheric/vintage-bottles.jpg"
            alt="The House Vellum apothecary"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </main>
  );
}
