import Link from 'next/link';
import { Hero } from '../features/catalog/components/Hero';
import { MerchSpotlight } from '../features/catalog/components/MerchSpotlight';
import { MusicPlayer } from '../features/music/components/MusicPlayer';

const whyWeBuild = [
  {
    step: '01',
    title: 'Digital platforms',
    description:
      `We’re architecting a home feed that actually feels like home—mod tools, comment walls, and creation spaces designed to break the echo chambers. Merch fuel keeps the servers humming so connection stays human.`,
  },
  {
    step: '02',
    title: 'Real-world events',
    description:
      'Community needs real hugs and high-fives. Sales cover venues, logistics, and storytelling so the Group 7 fam can gather offline and remember what belonging feels like.',
  },
  {
    step: '03',
    title: 'Community resources',
    description:
      'We’re building creator stipends, support channels, and learning resources that amplify voices the algorithm ignores. Each order turns into tools that let people be heard and held.',
  },
  {
    step: '04',
    title: 'Sustainable growth',
    description:
      `Platforms built on ads compromise people. Merch revenue keeps Group 7 autonomous so we can grow slowly, intentionally, and always in service of the humans wearing it.`,
  },
];

const theVision = [
  {
    era: 'Platform infrastructure',
    quote: 'Digital spaces for connection',
    description:
      'Custom feeds, safe discussion rooms, and collaboration studios don’t appear by magic. Merch keeps devs shipping features that make people feel seen instead of sorted.',
  },
  {
    era: 'Event production',
    quote: 'Real-world community gatherings',
    description:
      'We’re planning pop-up houses and creator residencies so the internet fam can meet IRL. Every hoodie powers the logistics that get us together.',
  },
  {
    era: 'Brand building',
    quote: 'The "Group 7\'s" identity',
    description:
      'This isn’t another drop—it’s a flag to rally around. Supporting the brand tells the world there’s appetite for kinder tech, and funds the design systems that shape that identity.',
  },
  {
    era: 'Sustainable funding',
    quote: 'Merch enables the vision',
    description:
      'Ad dollars demand attention, not care. Merch lets us say no to surveillance incentives and yes to building a platform that answers to its people.',
  },
];

const infrastructurePartners = [
  { name: 'Singularity Shift Ltd', tag: 'Creative studio + ops', description: 'Building the community hub vision through strategy, storytelling, and platform design that connects Group 7\'s.', initials: 'SS' },
  { name: 'Printful', tag: 'Production + fulfilment', description: 'Enabling sustainable merch operations so every purchase efficiently funds community infrastructure.', initials: 'P' },
  { name: 'Stripe', tag: 'Commerce backbone', description: 'Powering seamless transactions that convert community support into resources for building the hub.', initials: 'S' },
];

export default function Index() {
  return (
    <div className="relative space-y-16 pb-16">

      <Hero />
      <MusicPlayer />

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#1B1740]/90 via-[#1C2541]/90 to-[#09071A]/95 p-8 shadow-[0_25px_80px_rgba(2,3,31,0.55)] backdrop-blur-2xl md:p-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(47,199,187,0.25),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(248,131,121,0.15),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_60%)]" />
        </div>
        <div className="relative z-10 mb-10 flex flex-col gap-2 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Why We&apos;re Building</p>
          <h2 className="font-display text-[32px] leading-tight md:text-4xl">Every purchase builds the internet we want to hang out in</h2>
          <p className="text-base text-white/70 md:max-w-3xl">
            Group 7 is for people who crave connection over clicks. When you gear up, that energy turns into engineers, creators, and ops teams crafting an alternative to algorithmic isolation.
          </p>
        </div>
        <div className="relative z-10 grid gap-6 md:grid-cols-2">
          {whyWeBuild.map((step) => (
            <article
              key={step.step}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-6 shadow-[0_20px_45px_rgba(4,0,15,0.55)] transition hover:border-white/50"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2FC7BB]/20 via-transparent to-[#F88379]/15 blur-3xl" />
                <div className="absolute inset-px rounded-[2rem] border border-white/10" />
              </div>
              <div className="relative flex flex-col gap-3">
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/70">
                  <span>{step.step}</span>
                  <span className="h-1 w-1 rounded-full bg-[#F5D663]" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-[#0B051E]/80 p-8 shadow-[0_20px_70px_rgba(1,1,15,0.55)] backdrop-blur-2xl md:p-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(235,208,227,0.1),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(47,199,187,0.08),transparent_55%)]" />
        </div>
        <div className="relative z-10 space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">The Vision</p>
          <h2 className="text-[32px] font-semibold text-white md:text-4xl">Merch is the runway for our people-first platform</h2>
          <p className="text-base text-white/70">
            We&apos;re launching a social layer where care beats clicks. Instead of raising from investors who would optimize for ads, we&apos;re choosing you. Here&apos;s what your wardrobe is funding.
          </p>
        </div>
        <ol className="relative z-10 mt-10 grid gap-6 md:grid-cols-2">
          {theVision.map((entry, index) => (
            <li
              key={entry.era}
              className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/15 via-white/5 to-black/40 p-6 shadow-[0_25px_55px_rgba(1,1,21,0.65)]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#312E61]/30 via-transparent to-[#F88379]/20 blur-2xl" />
              </div>
              <div className="relative space-y-3">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                  <span className="mr-3 text-white/40">{String(index + 1).padStart(2, '0')}</span>
                  {entry.era}
                </p>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{entry.quote}</h3>
                <p className="text-sm text-white/70">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="soft-panel rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-[#120926]/90 via-[#050315]/90 to-[#050009]/95 px-6 py-8 shadow-[0_25px_60px_rgba(1,0,20,0.6)] md:px-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(245,214,99,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(300deg,rgba(111,27,58,0.18),transparent_65%)]" />
        </div>
        <div className="relative z-10 flex flex-col gap-3 pb-8">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Infrastructure Partners</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Building the human internet takes a crew</h2>
          <p className="text-sm text-white/70 md:text-base">
            These partners keep quality high while we focus on mission—ethical production, intentional commerce, and creative strategy that honors the people wearing the merch.
          </p>
        </div>
        <div className="relative z-10 grid gap-5 md:grid-cols-3">
          {infrastructurePartners.map((partner) => (
            <article
              key={partner.name}
              className="group flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/40"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br from-white/80 to-white/40 text-base font-semibold text-ink">
                  {partner.initials}
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-[#F5D663]">{partner.tag}</p>
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                </div>
              </div>
              <p className="text-sm text-white/70">{partner.description}</p>
              <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40 transition group-hover:opacity-80" />
            </article>
          ))}
        </div>
      </section>

      <MerchSpotlight />

      <section className="soft-panel rounded-[3rem] border border-white/15 bg-gradient-to-br from-[#201c44]/95 via-[#09061C]/97 to-[#05000D]/97 p-8 text-center shadow-[0_30px_80px_rgba(3,0,20,0.75)] backdrop-blur-2xl md:p-14">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[conic-gradient(from_120deg,_rgba(47,199,187,0.05),_rgba(248,131,121,0.08),_transparent_60%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Community Hub</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Let&apos;s prove the internet can feel loving again</h2>
          <p className="mt-5 text-base text-white/70 md:text-lg">
            If you&apos;re tired of being reduced to a data point, wear the resistance. Every Group 7 item is a vote for social platforms that protect nuance, invite care, and still feel electric. The faster we sell out, the faster we can launch the features, meetups, and creator funds that flip the script on what social media can be.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[#2FC7BB] px-8 py-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#041218] shadow-[0_15px_40px_rgba(47,199,187,0.45)] transition hover:-translate-y-0.5"
            >
              Shop to Support
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:border-white/60"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
