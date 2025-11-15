import Link from 'next/link';
import { Hero } from '../features/catalog/components/Hero';
import { MerchSpotlight } from '../features/catalog/components/MerchSpotlight';
import { MusicPlayer } from '../features/music/components/MusicPlayer';

const whyWeBuild = [
  {
    step: '01',
    title: 'Digital platforms',
    description:
      `Building community spaces requires robust platforms—comment walls, event hubs, creator collaboration tools. Every purchase funds the infrastructure that lets Group 7's connect and create together.`,
  },
  {
    step: '02',
    title: 'Real-world events',
    description:
      'From meetups to showcases, bringing the Group 7\'s together offline takes venues, logistics, and resources. Merch sales directly enable these gatherings where the community comes alive.',
  },
  {
    step: '03',
    title: 'Community resources',
    description:
      'Supporting creators, amplifying voices, and building the "Group 7\'s" brand identity requires ongoing investment. Your purchases power the tools and resources that make this movement sustainable.',
  },
  {
    step: '04',
    title: 'Sustainable growth',
    description:
      `A real community hub isn't built overnight. It needs consistent infrastructure, maintenance, and evolution. Every piece of Group 7 merch you buy is an investment in building something greater—together.`,
  },
];

const theVision = [
  {
    era: 'Platform infrastructure',
    quote: 'Digital spaces for connection',
    description:
      'Building comment walls, creator collaboration tools, and event hubs requires ongoing platform development and maintenance. Your merch purchases directly fund these digital spaces where Group 7\'s can connect.',
  },
  {
    era: 'Event production',
    quote: 'Real-world community gatherings',
    description:
      'From local meetups to larger showcases, bringing the community together offline requires venues, logistics, and production resources. Every sale enables more opportunities for Group 7\'s to gather.',
  },
  {
    era: 'Brand building',
    quote: 'The "Group 7\'s" identity',
    description:
      'Creating a unique community brand takes consistent investment in design, content, and storytelling. Your support helps build the "Group 7\'s" identity that makes this movement recognizable and meaningful.',
  },
  {
    era: 'Sustainable funding',
    quote: 'Merch enables the vision',
    description:
      'A viable community hub needs sustainable revenue streams. Group 7 attire and accessories aren\'t just products—they\'re the mechanism that funds infrastructure, events, and resources for building something greater.',
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
          <h2 className="font-display text-3xl font-semibold text-white">Every purchase funds community infrastructure</h2>
          <p className="text-sm text-white/70 md:text-base">Building a real community hub for Group 7 requires infrastructure, resources, and sustainable funding. Here&apos;s how your support makes it happen.</p>
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
          <h2 className="text-3xl font-semibold text-white">How merch sales fund community building</h2>
          <p className="text-base text-white/70">
            Building a real community hub requires infrastructure, resources, and sustainable funding. Here&apos;s how your purchases directly contribute to making the Group 7&apos;s vision a reality.
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
          <h2 className="text-2xl font-semibold text-white">Building the community hub together</h2>
          <p className="text-sm text-white/70">
            These partners enable the infrastructure that makes the Group 7 community hub possible—from platform development to sustainable operations.
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
          <h2 className="mt-3 text-3xl font-semibold text-white">Your purchases fund the infrastructure we&apos;re building</h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Every Group 7 item you buy directly contributes to building a real community hub—platforms for connection, event spaces for gathering, and resources for creators. We&apos;re shaping comment walls, collaboration tools, and offline meetups that bring the Group 7&apos;s together. Your support makes this vision possible.
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
