import { notFound } from 'next/navigation';
import { listProductsByCategory } from '@g7/shared-products';
import { Category } from '@g7/shared-types';
import { ProductGrid } from '../../../../features/catalog/components/ProductGrid';
import { CategoryNav } from '../../../../features/catalog/components/CategoryNav';

interface Params {
  params: {
    category: Category;
  };
}

const allowed: Category[] = ['tee', 'hoodie', 'hat', 'accessory'];

export function generateStaticParams() {
  return allowed.map((category) => ({ category }));
}

export default function CategoryPage({ params }: Params) {
  if (!allowed.includes(params.category)) {
    notFound();
  }

  const products = listProductsByCategory(params.category);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Category</p>
        <h1 className="text-3xl font-semibold text-white">{params.category}</h1>
      </div>
      <CategoryNav activeCategory={params.category} />
      <ProductGrid products={products} />
    </div>
  );
}
