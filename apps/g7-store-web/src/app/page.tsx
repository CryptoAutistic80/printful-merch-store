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
    <div className="space-y-12">
      <Hero />
      <MusicPlayer />

      <section className="rounded-[2.25rem] border border-white/5 bg-gradient-to-br from-[#070112] via-[#04071c] to-[#080114] p-8">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Why We&apos;re Building</p>
          <h2 className="font-display text-3xl font-semibold text-white">Every purchase builds the internet we want to hang out in</h2>
          <p className="text-sm text-white/70 md:text-base">Group 7 is for people who crave connection over clicks. When you gear up, that energy turns into engineers, creators, and ops teams crafting an alternative to algorithmic isolation.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {whyWeBuild.map((step) => (
            <div key={step.step} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">{step.step}</div>
              <h3 className="pt-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="pt-2 text-sm text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-[#04021a] via-[#050123] to-[#010009] p-8 md:p-12">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">The Vision</p>
          <h2 className="text-3xl font-semibold text-white">Merch is the runway for our people-first platform</h2>
          <p className="text-base text-white/70">
            We&apos;re launching a social layer where care beats clicks. Instead of raising from investors who would optimize for ads, we&apos;re choosing you. Here&apos;s what your wardrobe is funding.
          </p>
        </header>
        <ol className="grid gap-6 md:grid-cols-2">
          {theVision.map((entry) => (
            <li key={entry.era} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-black/30 p-6 shadow-[0_15px_45px_rgba(0,0,0,0.4)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">{entry.era}</p>
              <h3 className="pt-2 text-xl font-semibold text-white">{entry.quote}</h3>
              <p className="pt-3 text-sm text-white/70">{entry.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-[2rem] border border-white/5 bg-gradient-to-br from-[#05001b] via-[#02000e] to-[#010005] px-6 py-8 md:px-12">
        <div className="flex flex-col gap-2 pb-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Infrastructure Partners</p>
          <h2 className="text-2xl font-semibold text-white">Building the human internet takes a crew</h2>
          <p className="text-sm text-white/70">
            These partners keep quality high while we focus on mission—ethical production, intentional commerce, and creative strategy that honors the people wearing the merch.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {infrastructurePartners.map((partner) => (
            <article key={partner.name} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-[#0b0325]/40 to-transparent p-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/20 text-base font-semibold text-ink">
                {partner.initials}
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.35em] text-accent/70">{partner.tag}</p>
                <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                <p className="text-sm text-white/70">{partner.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <MerchSpotlight />

      <section className="rounded-[2.5rem] border border-dashed border-white/15 bg-black/30 p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Community Hub</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s prove the internet can feel loving again</h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            If you&apos;re tired of being reduced to a data point, wear the resistance. Every Group 7 item is a vote for social platforms that protect nuance, invite care, and still feel electric. The faster we sell out, the faster we can launch the features, meetups, and creator funds that flip the script on what social media can be.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-accent/60 bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-accent/40 transition hover:-translate-y-0.5"
            >
              Shop to Support
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white/50"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
