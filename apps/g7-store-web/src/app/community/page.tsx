import type { Metadata } from 'next';
import Link from 'next/link';

const timeline = [
  {
    phase: 'Signal',
    timeframe: 'Today',
    title: 'Waitlist intake + vibe check',
    description:
      'Collect the earliest RSVPs, host a single welcome thread, and confirm what the community wants on day one.',
  },
  {
    phase: 'Pulse',
    timeframe: 'Q3 2024',
    title: 'Shared roadmap drops',
    description:
      'Publish a transparent build timeline, tease capsule themes, and invite the list to vote on priorities.',
  },
  {
    phase: 'Launch',
    timeframe: 'Q4 2024',
    title: 'Community Hub opens',
    description:
      'Roll out the real-time feed, ritual calendar, and member badges once the experience feels polished.',
  },
];

export const metadata: Metadata = {
  title: 'Community — Group 7 Supply',
  description: 'A simple, transparent coming soon page for the Group 7 Community Hub.',
};

export default function CommunityPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#040614] via-[#09031c] to-[#030307] p-8 md:p-12">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Coming soon</p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-white md:text-5xl">Group 7 Community Hub</h1>
            <p className="text-base text-white/80 md:text-lg">
              One bold space for friends of Group 7 to collect updates, signal interest, and line up for the first wave.
              Nothing complicated—just a hero moment while the team locks the experience.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="mailto:community@group7.supply"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Join the waitlist
            </Link>
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Private beta
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Timeline</p>
          <h2 className="text-3xl font-semibold text-white">What happens next</h2>
          <p className="text-base text-white/70">
            A lightweight roadmap so visitors know exactly where the hub is headed without digging through lore.
          </p>
        </header>
        <ol className="space-y-4">
          {timeline.map((entry) => (
            <li key={entry.phase} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">{entry.phase}</p>
                  <h3 className="text-2xl font-semibold text-white">{entry.title}</h3>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{entry.timeframe}</p>
              </div>
              <p className="mt-3 text-sm text-white/80">{entry.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-[2.5rem] border border-dashed border-white/20 bg-black/40 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">Stay in the loop</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">We will ping you the second it opens</h2>
        <p className="mt-3 text-base text-white/75">
          Drop your note, send a mood board, or just say you&apos;re in. We will reply with a personal invite when the hub goes live.
        </p>
        <Link
          href="mailto:community@group7.supply"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white hover:bg-white/10"
        >
          Notify me
        </Link>
      </section>
    </div>
  );
}
