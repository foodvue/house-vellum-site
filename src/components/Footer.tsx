import Link from 'next/link';
import Sigil from './Sigil';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <Sigil size="sm" variant="cream" />
              <span className="font-serif text-base tracking-[0.25em] text-cream">HOUSE VELLUM</span>
            </Link>
            <p className="text-sm text-cream/60 font-serif italic">Six weeks. By hand.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-cream/40 mb-5">The House</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="hover:text-cream transition-colors">Shop</Link></li>
              <li><Link href="/our-house" className="hover:text-cream transition-colors">Our House</Link></li>
              <li><Link href="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-cream/40 mb-5">Made in</h4>
            <p className="text-sm leading-relaxed">
              Fishers, Indiana<br />
              <span className="text-cream/50">Slow-cured six weeks.</span>
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-cream/10 text-xs text-cream/40 flex flex-col md:flex-row md:justify-between gap-2">
          <span>© 2026 House Vellum. All rights reserved.</span>
          <span className="tracking-widest">EST. 2026</span>
        </div>
      </div>
    </footer>
  );
}
