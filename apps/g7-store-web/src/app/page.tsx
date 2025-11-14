import Link from 'next/link';
import { Hero } from '../features/catalog/components/Hero';
import { MerchSpotlight } from '../features/catalog/components/MerchSpotlight';
import { MusicPlayer } from '../features/music/components/MusicPlayer';

const orientationGuide = [
  {
    step: '01',
    title: 'Group 7 sorting hat',
    description:
      `Sophia dropped seven TikToks on 17 Oct 2025 to "bully the algorithm." If video seven hit your For You Page you were instantly drafted—no gatekeeping, just cosmic fate.`,
  },
  {
    step: '02',
    title: 'Algorithm pact',
    description:
      'The community riffs on her playbook with neon captions, confident one-liners, and creator prompts (#Group7Energy) to keep the in-joke alive while boosting indie art.',
  },
  {
    step: '03',
    title: 'Badge of belonging',
    description:
      'Orientation videos, comment walls, and digital roll calls invite everyone to announce their elite-but-open status. Brands, celebs, and fans alike bragged about joining.',
  },
  {
    step: '04',
    title: 'Offline pulse',
    description:
      `Meetups like the Antelope pub drop in London prove Group 7 isn't just a meme. Any city can light up next—plug Printful SKUs in and show up in person.`,
  },
];

const storyTimeline = [
  {
    era: 'Long Beach roots',
    quote: '"Music and life are synonymous."',
    description:
      'Sophia Louise Wackerman grew up in a musical family, studied jazz at UCLA, and views songwriting as the lens for everything. Loop machines, piano, and absurdist fun anchor her sets.',
  },
  {
    era: 'Idol signal boost',
    quote: 'Top 11 • Fragile X awareness',
    description:
      'During American Idol season 18 she adopted the stage name James to honor her brother and spoke openly about Fragile X. The platform sharpened her storytelling chops.',
  },
  {
    era: 'Independent grit',
    quote: `"We can't control the world, only how much fun we have."`,
    description:
      'After a label deal collapsed she went fully independent, toured with Couch and Ben Barnes, and perfected the solo loop-machine show that now drives the Group 7 vibe.',
  },
  {
    era: 'Group 7 experiment',
    quote: '"Little science experiment."',
    description:
      'Working with producer Alex Bilowitz, she launched "So Unfair" and seven TikToks. Video seven cleared 15.6M views by 21 Oct 2025, proving indie artists can hack algorithms with community.',
  },
];

const partnerAlliance = [
  { name: 'Singularity Shift Ltd', tag: 'Creative studio + ops', description: 'Strategy, storytelling, and orientation design.', initials: 'SS' },
  { name: 'Printful', tag: 'Production + fulfilment', description: 'Dropship partner for every SKU and variant swap.', initials: 'P' },
  { name: 'Stripe', tag: 'Commerce backbone', description: 'Payments + billing so algorithm spikes instantly convert.', initials: 'S' },
];

export default function Index() {
  return (
    <div className="space-y-12">
      <Hero />
      <MusicPlayer />

      <section className="rounded-[2.25rem] border border-white/5 bg-gradient-to-br from-[#070112] via-[#04071c] to-[#080114] p-8">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Group 7 Orientation</p>
          <h2 className="font-display text-3xl font-semibold text-white">How the invite-only joke stays inclusive</h2>
          <p className="text-sm text-white/70 md:text-base">Use the cards as copy blocks or onboarding prompts inside the landing flow.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {orientationGuide.map((step) => (
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
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Sophia James Lore</p>
          <h2 className="text-3xl font-semibold text-white">Story beats to weave across the page</h2>
          <p className="text-base text-white/70">
            The landing page doubles as a primer on the artist so &quot;merch store&quot; never feels disconnected from the indie experiment.
          </p>
        </header>
        <ol className="grid gap-6 md:grid-cols-2">
          {storyTimeline.map((entry) => (
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
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Signal bursts</p>
          <h2 className="text-2xl font-semibold text-white">Singularity Shift + production allies keeping drops alive</h2>
          <p className="text-sm text-white/70">
            These three partners make the Group 7 store feel premium—from the neon concepting to instant fulfilment.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {partnerAlliance.map((partner) => (
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

      <section className="rounded-[2.5rem] border border-dashed border-white/15 bg-black/30 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">Orientation HQ</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Community hub is simmering</h2>
        <p className="mt-3 text-base text-white/70">
          We&apos;re shaping a comment wall + duet feed that mirrors the TikTok chaos. Until then, join the waitlist and keep tagging #Group7Energy.
        </p>
        <Link
          href="/community"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white/50"
        >
          Get notified
        </Link>
      </section>
    </div>
  );
}
