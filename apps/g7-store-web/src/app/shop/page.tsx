import { products } from '@g7/shared-products';
import { ProductGrid } from '../../features/catalog/components/ProductGrid';
import { CategoryNav } from '../../features/catalog/components/CategoryNav';

export const metadata = {
  title: 'Shop — Group 7 Supply',
};

export default function ShopPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Catalogue</p>
        <h1 className="text-3xl font-semibold text-white">All products</h1>
        <p className="text-sm text-white/60">Pulled from the shared product library so frontend + backend stay aligned.</p>
      </div>
      <CategoryNav />
      <ProductGrid products={products} />
    </div>
  );
}
