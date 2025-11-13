import { notFound } from 'next/navigation';
import { listProductsByCategory } from '@g7/shared-products';
import { Category } from '@g7/shared-types';
import { ProductGrid } from '../../../../features/catalog/components/ProductGrid';
import { CategoryNav } from '../../../../features/catalog/components/CategoryNav';

const allowed: Category[] = ['tee', 'hoodie', 'hat', 'accessory'];

export function generateStaticParams() {
  return allowed.map((category) => ({ category }));
}

type ParamsPromise = Promise<{ category: Category }>;

export default async function CategoryPage({ params }: { params: ParamsPromise }) {
  const { category } = await params;

  if (!allowed.includes(category)) {
    notFound();
  }

  const products = listProductsByCategory(category);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Category</p>
        <h1 className="text-3xl font-semibold text-white">{category}</h1>
      </div>
      <CategoryNav activeCategory={category} />
      <ProductGrid products={products} />
    </div>
  );
}
