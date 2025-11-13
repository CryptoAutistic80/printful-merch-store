import Image from 'next/image';
import { notFound } from 'next/navigation';
import { findProductBySlug, products } from '@g7/shared-products';
import { ProductPurchasePanel } from '../../../../features/catalog/components/ProductPurchasePanel';

interface Params {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: Params) {
  const product = findProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        {product.images.map((image) => (
          <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image src={image} alt={product.name} fill className="object-cover" />
          </div>
        ))}
      </div>
      <ProductPurchasePanel product={product} />
    </div>
  );
}
