import { Hero } from '../features/catalog/components/Hero';
import { ProductGrid } from '../features/catalog/components/ProductGrid';
import { CategoryNav } from '../features/catalog/components/CategoryNav';
import { MusicPlayer } from '../features/music/components/MusicPlayer';
import { getFeaturedProducts } from '@g7/shared-products';

export default function Index() {
  const featured = getFeaturedProducts(3);

  return (
    <div className="space-y-12">
      <Hero />
      <MusicPlayer />
      <section id="catalog" className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Current Protocol</p>
            <h2 className="text-2xl font-semibold text-white">Featured Drops</h2>
          </div>
          <CategoryNav />
        </div>
        <ProductGrid products={featured} />
      </section>
    </div>
  );
}
