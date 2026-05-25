import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://housevellum.com'),
  title: 'House Vellum · Six weeks. By hand.',
  description:
    'Handmade tallow soap, slow-cured for six weeks and sealed by hand. Made in Fishers, Indiana.',
  openGraph: {
    title: 'House Vellum',
    description: 'Six weeks. By hand.',
    type: 'website',
    url: 'https://housevellum.com',
    siteName: 'House Vellum',
    images: [
      {
        url: '/og/og-card.jpg',
        width: 1200,
        height: 630,
        alt: 'House Vellum · handmade tallow soap, sealed in oxblood wax',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Vellum',
    description: 'Six weeks. By hand.',
    images: ['/og/og-card.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
