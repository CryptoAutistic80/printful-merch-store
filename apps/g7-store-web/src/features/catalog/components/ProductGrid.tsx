import { Product } from '@g7/shared-types';
import { ProductCard } from './ProductCard';

interface Props {
  products: Product[];
}

export function ProductGrid({ products }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
