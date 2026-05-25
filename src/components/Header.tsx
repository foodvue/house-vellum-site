import Link from 'next/link';
import Sigil from './Sigil';

export default function Header() {
  return (
    <header className="bg-cream border-b border-kraft/20 sticky top-0 z-50 backdrop-blur-sm bg-cream/95">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0">
          <Sigil size="sm" />
          <span className="hidden sm:inline font-serif text-base tracking-[0.25em] text-ink whitespace-nowrap">HOUSE VELLUM</span>
        </Link>
        <nav className="flex items-center gap-5 md:gap-8 text-xs md:text-sm tracking-wider text-ink/70 uppercase">
          <Link href="/shop" className="hover:text-oxblood transition-colors">Shop</Link>
          <Link href="/our-house" className="hover:text-oxblood transition-colors whitespace-nowrap">Our House</Link>
          <Link href="/contact" className="hover:text-oxblood transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
