import Link from 'next/link';
import { products } from '@g7/shared-products';
import { ProductGrid } from '../../features/catalog/components/ProductGrid';
import { CategoryNav } from '../../features/catalog/components/CategoryNav';

const capsules = [
  {
    title: 'Orientation kit',
    description: 'Signature tee + hoodie + cap so you can wear the flag while we finish the digital HQ.',
    href: '/shop#catalog',
    tag: 'Featured capsule',
  },
  {
    title: 'Cosmic basics',
    description: 'Daily uniforms for people who want softer feeds, slower rooms, and community-led events.',
    href: '/category/tee',
    tag: 'Tees & hoodies',
  },
  {
    title: 'Signal boosters',
    description: 'Accessories that spread the story IRL and bankroll the creator stipends keeping Group 7 alive.',
    href: '/category/accessory',
    tag: 'Accessories',
  },
];

const fundingLoops = [
  { title: 'Merch equals membership', detail: 'Every checkout says “I want kinder tech” louder than any algorithm could.' },
  { title: 'Inventory stays agile', detail: 'Printful sync lets us ship fast while we reinvest profits into human-moderated spaces.' },
  { title: 'Transparency by default', detail: 'We publish drop data in libs/shared-products so anyone can track what powers the build.' },
];

const rallyStatements = [
  'Sophia sparked the signal; we keep it resonating.',
  'Grassroots merch beats ad-funded surveillance.',
  'Wearable protest is still protest.',
];

export const metadata = {
  title: 'Shop — Group 7 Life',
};

export default function ShopPage() {
  return (
    <div className="relative space-y-12 pb-12">
      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#1B1740]/90 via-[#151132]/95 to-[#080614]/95 p-8 shadow-[0_30px_80px_rgba(2,3,31,0.55)] backdrop-blur-2xl md:p-12">
        <div className="space-y-6 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Merch is the mission</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Wear the proof that we&apos;re building a human internet</h1>
          <p className="text-base text-white/80 md:text-lg">
            Everywhere online we hear the same thing: people are done being pushed into algorithmic echo chambers. They crave something
            different—spaces that feel human, connective, loving. That&apos;s why every piece of Group 7 merch matters. Each tee, hoodie, or sticker
            is fuel for a social media future built on real community infrastructure, not clicks.
          </p>
          <p className="text-base text-white/70">
            When you check out, you&apos;re not buying swag—you&apos;re co-funding engineers, moderators, and pop-up houses. It&apos;s the cleanest way to
            say you believe in launching a platform that treats people like people.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/mission"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white/60"
            >
              Read the manifesto
            </Link>
            <Link
              href="#catalog"
              className="inline-flex items-center justify-center rounded-full bg-[#2FC7BB] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#041218] shadow-[0_18px_45px_rgba(47,199,187,0.45)] transition hover:-translate-y-0.5"
            >
              Browse drops
            </Link>
          </div>
        </div>
      </section>

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#0B051E]/90 via-[#060314]/95 to-[#04000C]/95 p-6 shadow-[0_20px_70px_rgba(1,1,21,0.55)] backdrop-blur-2xl md:p-10">
        <div className="grid gap-4 md:grid-cols-3">
          {capsules.map((capsule) => (
            <Link
              key={capsule.title}
              href={capsule.href}
              className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 via-transparent to-black/30 p-5 shadow-[0_15px_35px_rgba(2,0,23,0.45)] transition hover:-translate-y-1 hover:border-white/40"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">{capsule.tag}</p>
              <h2 className="pt-3 text-2xl font-semibold text-white">{capsule.title}</h2>
              <p className="pt-2 text-sm text-white/70">{capsule.description}</p>
              <span className="mt-4 inline-flex text-xs uppercase tracking-[0.3em] text-accent">View drop →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#130826]/95 via-[#09051A]/95 to-[#04000B]/97 p-8 shadow-[0_25px_80px_rgba(3,0,20,0.65)] backdrop-blur-2xl md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Why this store matters</p>
            <h2 className="text-3xl font-semibold">Every collection powers people, not clicks</h2>
            <p className="text-sm text-white/70 md:text-base">
              Because the catalog lives in a shared Printful library, we can swap colors, sizing, and SKU mixes instantly. That elasticity is
              how we keep the lights on for community ops without outside investors.
            </p>
            <div className="space-y-4">
              {fundingLoops.map((loop) => (
                <article key={loop.title} className="rounded-[1.5rem] border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#F5D663]">{loop.title}</p>
                  <p className="pt-2 text-sm text-white/70">{loop.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[2rem] border border-dashed border-white/25 bg-black/30 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Rally cries</p>
            <ul className="space-y-3 text-sm text-white/75 md:text-base">
              {rallyStatements.map((statement) => (
                <li key={statement} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {statement}
                </li>
              ))}
            </ul>
            <Link
              href="/community"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:border-white/60"
            >
              Tell us what to build next
            </Link>
          </div>
        </div>
      </section>

      <section id="catalog" className="soft-panel space-y-6 rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#06030d] via-[#090320] to-[#05030c] p-8 shadow-[0_25px_70px_rgba(2,0,25,0.6)] backdrop-blur-2xl md:p-12">
        <header className="space-y-3 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Live catalog</p>
          <h2 className="text-3xl font-semibold">Every product keeps the lights on</h2>
          <p className="text-sm text-white/70">
            The data lives in <code className="rounded bg-black/40 px-2 py-0.5 text-white/80">libs/shared-products</code>, so editing one entry immediately
            refreshes the storefront, fulfillment, and ops. That tight loop is how grassroots funding scales care.
          </p>
        </header>
        <CategoryNav />
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
