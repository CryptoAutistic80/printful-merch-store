import Link from 'next/link';
import { products } from '@g7/shared-products';
import { ProductGrid } from '../../features/catalog/components/ProductGrid';
import { CategoryNav } from '../../features/catalog/components/CategoryNav';

const capsules = [
  {
    title: 'Orientation kit',
    description: `Protocol Tee + Resonant Hoodie + Field Cap—the uniform for members building the Group 7 social hub together.`,
    href: '/shop#catalog',
    tag: 'Featured capsule',
  },
  {
    title: 'Cosmic basics',
    description: 'Every tee and hoodie pumps resources back into event production, platform dev, and creator support.',
    href: '/category/tee',
    tag: 'Tees & hoodies',
  },
  {
    title: 'Loop-machine essentials',
    description: 'Accessories that keep you stage-ready while funding the tools and gathering spaces Group 7’s rely on.',
    href: '/category/accessory',
    tag: 'Accessories',
  },
];

export const metadata = {
  title: 'Shop — Group 7 Life',
};

export default function ShopPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-[#050315] via-[#0b0421] to-[#04020a] p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">Group 7 Life</p>
        <div className="mt-4 space-y-5">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Sales fuel the Group 7 social hub</h1>
          <p className="text-base text-white/70 md:text-lg">
            This catalog is the funding engine for everything teased on the landing page—platforms for comment walls, IRL orientations, and
            the creator tools that keep Group 7&apos;s connected. Every checkout turns into more budget for a vibrant community HQ.
          </p>
          <p className="text-base text-white/70 md:text-lg">
            Because the products live in the shared Printful library, we can swap SKUs, colors, and sizing on the fly while keeping fulfilment
            synced with the Nest API. That agility lets us reinvest profits immediately into growth.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white/80 transition hover:border-white/60"
          >
            Back to landing
          </Link>
          <Link
            href="/community"
            className="rounded-full border border-accent/60 bg-accent/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:-translate-y-0.5"
          >
            Join the waitlist
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {capsules.map((capsule) => (
          <Link
            key={capsule.title}
            href={capsule.href}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/30"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">{capsule.tag}</p>
            <h2 className="pt-2 text-2xl font-semibold text-white">{capsule.title}</h2>
            <p className="pt-2 text-sm text-white/70">{capsule.description}</p>
            <span className="mt-4 inline-flex text-xs uppercase tracking-[0.35em] text-accent">View drop →</span>
          </Link>
        ))}
      </section>

      <section id="catalog" className="space-y-5">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Live catalog</p>
          <h2 className="text-3xl font-semibold text-white">Every product keeps the lights on</h2>
          <p className="text-sm text-white/70">
            The data lives in <code className="rounded bg-black/40 px-2 py-0.5 text-white/80">libs/shared-products</code>, so updating a single entry
            immediately refreshes the storefront and the Printful-backed operations. That tight loop means each sale quickly becomes funding for
            the social hub infrastructure we&apos;re building for Group 7&apos;s.
          </p>
        </header>
        <CategoryNav />
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
