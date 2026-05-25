import ProductPage from '@/components/ProductPage';
import { getProduct } from '@/data/products';
import type { Metadata } from 'next';

const product = getProduct('the-pantry');

export const metadata: Metadata = {
  title: `${product.number} — ${product.name} | House Vellum`,
  description: product.blurb,
};

export default function Page() {
  return <ProductPage product={product} />;
}
