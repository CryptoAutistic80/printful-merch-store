import Link from 'next/link';
import { products } from '@g7/shared-products';
import { ProductGrid } from '../../features/catalog/components/ProductGrid';
import { CategoryNav } from '../../features/catalog/components/CategoryNav';

const capsules = [
  {
    title: 'Orientation kit',
    description: `Protocol Tee + Resonant Hoodie + Field Cap. Dress like you just stepped out of Sophia's Group 7 meetup.`,
    href: '/shop#catalog',
    tag: 'Featured capsule',
  },
  {
    title: 'Cosmic basics',
    description: 'Tees and hoodies in neon-friendly blanks. Swap Printful variants and colorways without touching layout code.',
    href: '/category/tee',
    tag: 'Tees & hoodies',
  },
  {
    title: 'Loop-machine essentials',
    description: 'Accessories like the Datapath Sling keep your rig + lyric cards close for live algorithm hacks.',
    href: '/category/accessory',
    tag: 'Accessories',
  },
];

export const metadata = {
  title: 'Shop — Group 7 Supply',
};

export default function ShopPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-[#050315] via-[#0b0421] to-[#04020a] p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">Group 7 Supply</p>
        <div className="mt-4 space-y-5">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">The shop built for algorithm rebels</h1>
          <p className="text-base text-white/70 md:text-lg">
            Every item pulls from the shared Printful library so drops stay synced between this Next.js front end and the Nest API. Swap a SKU,
            press publish, and the landing page, cart, and fulfilment layer all update in lockstep.
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
          <h2 className="text-3xl font-semibold text-white">Ready for Printful fulfilment</h2>
          <p className="text-sm text-white/70">
            The data lives in <code className="rounded bg-black/40 px-2 py-0.5 text-white/80">libs/shared-products</code>. Add or update entries
            when new Sophia James drops go live.
          </p>
        </header>
        <CategoryNav />
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
