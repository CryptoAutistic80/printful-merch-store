import type { Metadata } from 'next';
import Link from 'next/link';

const promises = [
  {
    title: 'Orientation HQ is simmering',
    copy: 'We are prototyping a comment wall, duet surface, and badge board that mirrors how Group 7 plays on TikTok—bold, chaotic, welcoming.',
  },
  {
    title: 'No filler updates',
    copy: 'Expect one concise email when the experience is ready plus optional invites to IRL pop-ups like the Antelope pub pilot.',
  },
];

export const metadata: Metadata = {
  title: 'Community — Group 7 Life',
  description: 'A neon, no-frills coming soon page for the Group 7 community drop.',
};

export default function CommunityPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#050316] via-[#07011c] to-[#020107] p-10 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">Coming soon</p>
        <div className="mt-6 space-y-5">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Orientation HQ is almost here</h1>
          <p className="text-base text-white/80 md:text-lg">
            Think cosmic comment wall meets merch concierge. We just aren&apos;t shipping it until the playful exclusivity feels perfect. Until
            then, this page holds space for the hype.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <Link
            href="mailto:singularityshiftai@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white/60"
          >
            Join the waitlist
          </Link>
          <span className="rounded-full border border-dashed border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Private beta
          </span>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {promises.map((promise) => (
          <article key={promise.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">{promise.title}</h2>
            <p className="pt-3 text-sm text-white/70">{promise.copy}</p>
          </article>
        ))}
        <article className="rounded-3xl border border-dashed border-white/20 bg-black/40 p-6 text-center md:col-span-2">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Need to talk sooner?</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">singularityshiftai@gmail.com</h3>
          <p className="mt-2 text-sm text-white/70">
            Send your TikTok handle, ideas, or orientation scripts—we&apos;ll fold the best ones into the build.
          </p>
        </article>
      </section>
    </div>
  );
}
