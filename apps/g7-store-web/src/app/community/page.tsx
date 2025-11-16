import type { Metadata } from 'next';
import Link from 'next/link';

const notes = [
  {
    title: 'Orientation HQ is simmering',
    copy: 'We are sketching what the next Group 7 gathering place feels like—slow, caring, and free from algorithms.',
  },
  {
    title: 'No filler updates',
    copy: 'You will only hear from us when there is something we can invite you into. Until then, consider this page a quiet beacon.',
  },
];

export const metadata: Metadata = {
  title: 'Community — Group 7 Life',
  description: 'A neon, no-frills coming soon page for the Group 7 community drop.',
};

export default function CommunityPage() {
  return (
    <div className="relative space-y-12 pb-12">

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#1B1740]/90 via-[#151132]/95 to-[#080614]/95 p-10 text-center shadow-[0_25px_80px_rgba(2,3,31,0.55)] backdrop-blur-2xl md:text-left">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(47,199,187,0.25),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(248,131,121,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_60%)]" />
        </div>
        <div className="relative z-10 space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/65">Coming soon</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Orientation HQ is almost here</h1>
          <p className="text-base text-white/80 md:text-lg">
            Think of this as a holding pattern for something gentler than social feeds. We&apos;re moving slowly on purpose so the vibe stays
            intimate, loving, and offline-friendly. Until it&apos;s ready, we&apos;re simply keeping the porch light on.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
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
        </div>
      </section>

      <section className="soft-panel rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#0B051E]/90 via-[#060314]/95 to-[#04000C]/95 p-8 shadow-[0_20px_70px_rgba(1,1,21,0.55)] backdrop-blur-2xl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(235,208,227,0.12),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(47,199,187,0.08),transparent_55%)]" />
        </div>
        <div className="relative z-10 grid gap-6 md:grid-cols-2">
          {notes.map((note) => (
            <article
              key={note.title}
              className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-6 shadow-[0_20px_45px_rgba(1,1,21,0.55)]"
            >
              <h2 className="text-2xl font-semibold text-white">{note.title}</h2>
              <p className="pt-3 text-sm text-white/70">{note.copy}</p>
            </article>
          ))}
          <article className="rounded-[2rem] border border-dashed border-white/20 bg-black/40 p-6 text-center md:col-span-2">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Need to talk sooner?</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">singularityshiftai@gmail.com</h3>
            <p className="mt-2 text-sm text-white/70">
              Send your TikTok handle, ideas, or orientation scripts—we&apos;ll fold the best ones into the build.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
