import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts } from '@g7/shared-products';
import { formatCurrency } from '@g7/core/utils';

const featuredProducts = getFeaturedProducts(3);

export function MerchSpotlight() {
  return (
    <section className="space-y-8 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-[#06030d] via-[#090320] to-[#05030c] p-8 md:p-12">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">Orientation kit</p>
        <h2 className="text-3xl font-semibold text-white">Printful-ready merch spotlight</h2>
        <p className="text-base text-white/70">
          Featured products pull directly from the shared Printful data layer. Slot in fresh SKUs and the hero stack updates without touching
          layout code.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <article key={product.slug} className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 text-[0.55rem] uppercase tracking-[0.35em] text-white/70">{product.category}</div>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent/70">{product.heroTagline}</p>
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              </div>
              <p className="text-sm text-white/70">{product.description}</p>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{formatCurrency(product.basePrice)}</span>
                <span>{product.variants.length} Printful variants</span>
              </div>
            </div>
            <div className="mt-auto flex gap-3 pt-4">
              <Link
                href={`/product/${product.slug}`}
                className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-white/50"
              >
                View details
              </Link>
              <Link
                href="/shop"
                className="rounded-full border border-accent/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-accent/20"
              >
                Shop
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-white/20 px-6 py-4 text-sm text-white/70">
        <p>Need to swap items? Update <code className="rounded bg-black/40 px-2 py-0.5 text-white/80">libs/shared-products</code> and every page stays in sync.</p>
        <Link href="/shop" className="text-xs uppercase tracking-[0.35em] text-accent transition hover:text-white">
          Browse full catalog →
        </Link>
      </div>
    </section>
  );
}
