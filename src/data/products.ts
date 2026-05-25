export type Product = {
  slug: 'the-library' | 'the-garden' | 'the-pantry';
  number: string;
  name: string;
  notes: string;
  image: string;
  blurb: string;
  prose: string;
  ingredients: string;
  price: string;
  available: string;
};

export const products: Product[] = [
  {
    slug: 'the-library',
    number: 'No. I',
    name: 'The Library',
    notes: 'Tobacco, Vanilla, Leather',
    image: '/products/the-library.jpg',
    blurb:
      'The scent of an old reading room — pipe tobacco, vanilla bourbon, and worn leather.',
    prose:
      'Pipe tobacco curling from a worn chair, vanilla rising from the lining of a leather-bound book, the warmth of an afternoon spent indoors. The Library is the darkest of the three — slow, contemplative, and quietly masculine.',
    ingredients:
      'Rendered beef tallow, olive oil, coconut oil, sodium hydroxide, distilled water, tobacco absolute, vanilla bourbon, leather accord.',
    price: '$14',
    available: 'July 2026',
  },
  {
    slug: 'the-garden',
    number: 'No. II',
    name: 'The Garden',
    notes: 'Lavender, Eucalyptus, Linen',
    image: '/products/the-garden.jpg',
    blurb:
      'Walking the herb beds after rain — English lavender, eucalyptus, and cool cotton.',
    prose:
      'Cool English lavender, a hint of eucalyptus from the orchard wall, and the clean cotton of laundry hung in the morning. The Garden is the brightest of the three — alert and herbal, the soap for the first wash of the day.',
    ingredients:
      'Rendered beef tallow, olive oil, coconut oil, sodium hydroxide, distilled water, French lavender essential oil, eucalyptus radiata, white sage.',
    price: '$14',
    available: 'July 2026',
  },
  {
    slug: 'the-pantry',
    number: 'No. III',
    name: 'The Pantry',
    notes: 'Oats, Honey, Cream',
    image: '/products/the-pantry.jpg',
    blurb:
      'The gentlest of the three — colloidal oat, raw honey, and goat’s milk.',
    prose:
      'Colloidal oat suspended in milk, set with raw clover honey, finished with a softness like fresh cream. The Pantry is the warmest of the three — gentle enough for the sensitive, sweet without sugar, the soap a grandmother would have made for everyone in the house.',
    ingredients:
      'Rendered beef tallow, olive oil, coconut oil, sodium hydroxide, distilled water, colloidal oats, raw clover honey, goat’s milk powder, vanilla absolute.',
    price: '$14',
    available: 'July 2026',
  },
];

export function getProduct(slug: Product['slug']): Product {
  const p = products.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown product: ${slug}`);
  return p;
}
