import Link from 'next/link';

const pillars = [
  {
    label: 'Care-first infrastructure',
    description:
      'We reinvest every cart into building tools that mend the internet: human-moderated feeds, conversation rooms with context, and surprise meetups that feel like family reunions.',
  },
  {
    label: 'Grassroots funding loop',
    description:
      'No venture decks, no algorithms to impress. Merch becomes mutual aid—fueling stipends, creator residencies, and the slow, deliberate design that protects nuance.',
  },
  {
    label: 'Always-on belonging',
    description:
      'Group 7 is a signal that you still believe in an internet where strangers become friends. The badge is a quiet invitation to sit with us, laugh with us, and build with us.',
  },
];

const commitments = [
  {
    title: 'We build without permission',
    detail: 'Sophia sparked the experiment, but we are the ones carrying it. The mission is now collective stewardship, not celebrity fandom.',
  },
  {
    title: 'We practice radical transparency',
    detail: 'Inventory, timelines, and platform features stay open-sourced in spirit. Every hoodie sold maps directly to tangible work: servers, studios, and support.',
  },
  {
    title: 'We design for softness',
    detail: 'Kind typography, rounded interactions, and gentle motion cues remind us that the internet can feel like a hug instead of a nudge.',
  },
  {
    title: 'We pledge reciprocity',
    detail: 'Those who show up receive more than merch; they get voice notes, studio invites, and the chance to help craft the next drop.',
  },
];

export default function MissionPage() {
  return (
    <div className="relative space-y-14 pb-16">

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#1B1740]/90 via-[#151132]/95 to-[#080614]/95 p-10 shadow-[0_30px_80px_rgba(2,3,31,0.6)] backdrop-blur-2xl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(47,199,187,0.25),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(248,131,121,0.14),_transparent_60%)]" />
        </div>
        <div className="relative z-10 space-y-6 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Mission Manifesto</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Group 7 is the merch-powered movement for human internet energy</h1>
          <p className="text-base text-white/75 md:text-lg">
            Everywhere online we hear the same thing: people are done being pushed into algorithmic echo chambers. They crave something
            different—spaces that feel human, connective, loving. That&apos;s why every piece of Group 7 merch matters. Each tee, hoodie, or
            sticker is fuel for a social media future built on real community infrastructure, not clicks. If you believe in launching a
            platform that treats people like people, this is how you help build it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[#2FC7BB] px-7 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#041218] shadow-[0_18px_45px_rgba(47,199,187,0.45)] transition hover:-translate-y-0.5"
            >
              Gear up the mission
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:border-white/60"
            >
              Join community ops
            </Link>
          </div>
        </div>
      </section>

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#0B051E]/90 via-[#050313]/95 to-[#020008]/95 p-8 shadow-[0_25px_80px_rgba(1,1,21,0.6)] backdrop-blur-2xl md:p-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(245,214,99,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(310deg,rgba(111,27,58,0.18),transparent_65%)]" />
        </div>
        <div className="relative z-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.label} className="rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/10 via-transparent to-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.5em] text-[#F5D663]/90">Pillar</p>
              <h2 className="pt-3 text-2xl font-semibold text-white">{pillar.label}</h2>
              <p className="pt-3 text-sm text-white/70">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#130826]/95 via-[#09051A]/95 to-[#04000B]/97 p-8 shadow-[0_30px_80px_rgba(3,0,20,0.65)] backdrop-blur-2xl md:p-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(235,208,227,0.12),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(47,199,187,0.15),transparent_60%)]" />
        </div>
        <div className="relative z-10 space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Field notes</p>
            <h2 className="text-3xl font-semibold text-white">How we keep the flame alive</h2>
            <p className="text-base text-white/70 md:text-lg">
              Sophia started the spark, but the electricity is collective now. These commitments protect the warmth and ensure every sale fans
              the flame instead of feeding the algorithm.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {commitments.map((commitment) => (
              <article key={commitment.title} className="rounded-[1.75rem] border border-white/15 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">{commitment.title}</h3>
                <p className="pt-2 text-sm text-white/70">{commitment.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-panel rounded-[3rem] border border-white/15 bg-gradient-to-br from-[#201c44]/95 via-[#09061C]/97 to-[#05000D]/97 p-10 text-center shadow-[0_30px_80px_rgba(3,0,20,0.75)] backdrop-blur-2xl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[conic-gradient(from_120deg,_rgba(47,199,187,0.05),_rgba(248,131,121,0.08),_transparent_60%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Call to gather</p>
          <h2 className="text-3xl font-semibold md:text-4xl">If you&apos;re wearing Group 7, you&apos;re carrying the mission</h2>
          <p className="text-base text-white/70 md:text-lg">
            Wear the gear to signal softness. Share the story to signal defiance. Upload your moments so the next member knows they&apos;re
            already loved. The movement is as tangible as the fabric and as infinite as the friends we haven&apos;t met yet.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[#2FC7BB] px-8 py-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#041218] shadow-[0_15px_40px_rgba(47,199,187,0.45)] transition hover:-translate-y-0.5"
            >
              Shop the mission
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:border-white/60"
            >
              Volunteer time
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
