import Link from 'next/link';

export const metadata = {
  title: 'Shop — Group 7 Life',
};

const storeUrl = process.env.NEXT_PUBLIC_STORE_URL ?? 'https://store.groupseven.life';

const reasons = [
  {
    title: 'Spring handles checkout',
    detail: 'All payments and fulfillment now run through our Spring (Teespring) storefront so you can check out instantly.',
  },
  {
    title: 'Backend powers community',
    detail: 'Nest stays online for the community hub, creator programs, and member tools—commerce lives off-site.',
  },
  {
    title: 'One link to rule it all',
    detail: 'store.groupseven.life is the single destination for merch drops, while this site tells the story and rallies support.',
  },
];

const commitments = [
  'Every purchase funds moderators, creators, and residencies instead of ad impressions.',
  'Spring’s rails keep payments secure so we can focus on building softer, human-centered rooms.',
  'The embed below always reflects the latest catalog—no more syncing print files or variant IDs in the app.',
];

export default function ShopPage() {
  return (
    <div className="relative space-y-12 pb-12">
      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#1B1740]/90 via-[#151132]/95 to-[#080614]/95 p-8 shadow-[0_30px_80px_rgba(2,3,31,0.55)] backdrop-blur-2xl md:p-12">
        <div className="space-y-6 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Merch is the mission</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Spring is now the home for every Group 7 drop</h1>
          <p className="text-base text-white/80 md:text-lg">
            We’re rerouting all sales to Spring (Teespring) so fulfillment, payments, and tax handling stay fast while we pour our
            backend energy into the community hub. The story and roadmap live here; the cart lives at store.groupseven.life.
          </p>
          <p className="text-base text-white/70">
            Opening the store in a new tab ensures the embed or storefront is always up to date. If you want to help shape the
            hub, hop back here after checkout and tell us what to build next.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={storeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#2FC7BB] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#041218] shadow-[0_18px_45px_rgba(47,199,187,0.45)] transition hover:-translate-y-0.5"
            >
              Open Spring store
            </Link>
            <Link
              href="#spring-embed"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white/60"
            >
              View embed below
            </Link>
          </div>
        </div>
      </section>

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#0B051E]/90 via-[#060314]/95 to-[#04000C]/95 p-6 shadow-[0_20px_70px_rgba(1,1,21,0.55)] backdrop-blur-2xl md:p-10">
        <div className="grid gap-4 md:grid-cols-3">
          {reasons.map((entry) => (
            <article
              key={entry.title}
              className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 via-transparent to-black/30 p-5 shadow-[0_15px_35px_rgba(2,0,23,0.45)]"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">Transition update</p>
              <h2 className="pt-3 text-2xl font-semibold text-white">{entry.title}</h2>
              <p className="pt-2 text-sm text-white/70">{entry.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="spring-embed"
        className="soft-panel space-y-6 rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#06030d] via-[#090320] to-[#05030c] p-8 shadow-[0_25px_70px_rgba(2,0,25,0.6)] backdrop-blur-2xl md:p-12"
      >
        <header className="space-y-3 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Live storefront</p>
          <h2 className="text-3xl font-semibold">Shop the Spring carousel without leaving</h2>
          <p className="text-sm text-white/70">
            This embed is wired directly to our Spring store slug, so updates publish instantly. Prefer a full tab? Use the button
            below to open store.groupseven.life in a new window.
          </p>
          <Link
            href={storeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full border border-white/25 px-6 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white/60"
          >
            Open full storefront
          </Link>
        </header>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_20px_60px_rgba(1,0,22,0.65)]">
          <iframe
            title="Spring storefront embed"
            src="https://embed.creator-spring.com/widget?slug=my-store-10d5eaa&per=20&currency=&page=1&layout=carousel-wide&theme=dark"
            style={{ borderRadius: '24px', border: 'none', width: '100%', height: '420px' }}
            allow="clipboard-write; encrypted-media"
          />
        </div>
      </section>

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#130826]/95 via-[#09051A]/95 to-[#04000B]/97 p-8 shadow-[0_25px_80px_rgba(3,0,20,0.65)] backdrop-blur-2xl md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Commitments</p>
            <h2 className="text-3xl font-semibold">How the new flow supports the mission</h2>
            <p className="text-sm text-white/70 md:text-base">
              The backend now focuses on the community layer, while Spring handles the entire transaction loop. It keeps us nimble
              and transparent while you still get fast shipping.
            </p>
            <div className="space-y-4">
              {commitments.map((line) => (
                <article key={line} className="rounded-[1.5rem] border border-white/15 bg-white/5 p-4">
                  <p className="text-sm text-white/70">{line}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[2rem] border border-dashed border-white/25 bg-black/30 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Need something?</p>
            <ul className="space-y-3 text-sm text-white/75 md:text-base">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Want a new item? Drop it in the community forum.</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Issue with an order? Use the Spring order lookup from your receipt.</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Building ideas? We&apos;re investing saved dev time into member tools.</li>
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
    </div>
  );
}
