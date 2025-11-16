import type { Metadata } from 'next';
import { SophiaJourney } from '../../features/music/components/SophiaJourney';
import { MusicPlayer } from '../../features/music/components/MusicPlayer';

const auroraTexture =
  'radial-gradient(circle at 10% 20%, rgba(47, 199, 187, 0.22), transparent 45%), radial-gradient(circle at 80% 0%, rgba(235, 208, 227, 0.2), transparent 55%), radial-gradient(circle at 50% 80%, rgba(248, 131, 121, 0.18), transparent 60%)';

export const metadata: Metadata = {
  title: 'Sophia — Group 7 Life',
  description:
    'Unofficial Group 7 Life fan dossier highlighting Sophia James as the origin of the collective. All merch is original Group 7 art made to champion her music.',
};

export default function SophiaPage() {
  return (
    <div className="space-y-16">
      <section
        className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#1B1740]/90 via-[#151132]/95 to-[#080614]/95 px-6 py-12 shadow-[0_30px_80px_rgba(2,3,31,0.6)] backdrop-blur-2xl md:px-16"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(27,23,64,0.9) 0%, rgba(8,6,20,0.92) 100%), ${auroraTexture}` }}
      >
        <div className="relative space-y-10">
          <div className="space-y-4 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Community field guide</p>
            <h1 className="text-4xl font-semibold md:text-5xl">Sophia James</h1>
            <p className="text-lg text-white/80 md:text-xl">
              This is a community-built dossier celebrating Sophia as the founder spark for Group 7. It’s unofficial, it’s admiration-only, and it
              exists so fans discover her music while we design our own neon merch drops around the lore she inspired.
            </p>
          </div>
          <blockquote className="max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-6 text-base italic text-white/90 shadow-[0_0_60px_rgba(124,58,237,0.35)]">
            “I wanted everything to feel <span className="font-semibold">‘elite but welcoming’</span>—like the velvet rope is glowing, yet everyone
            gets a wristband.”
          </blockquote>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-black/30 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Why we stan</p>
              <p className="text-2xl font-semibold">Choir kid → Cosmic captain</p>
              <p className="text-sm text-white/70">Her family tapes and jazz charts taught us to keep things soulful.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-black/30 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Moment of ignition</p>
              <p className="text-2xl font-semibold">American Idol signal boost</p>
              <p className="text-sm text-white/70">That prime-time spotlight is why the Group 7 community exists.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-black/30 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Important note</p>
              <p className="text-2xl font-semibold">Original Group 7-only merch</p>
              <p className="text-sm text-white/70">No scans, samples, or copied art—every drop is our own design language.</p>
            </article>
          </div>
          <p className="text-xs text-white/50">
            Group 7 Life is not affiliated with Sophia, American Idol, or any label. She’s featured solely because she founded the experiment, and
            the merch you see is entirely our community’s creation.
          </p>
        </div>
      </section>

      <SophiaJourney />

      <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0B051E]/90 via-[#060314]/95 to-[#04000C]/95 p-8 shadow-[0_25px_80px_rgba(1,1,21,0.6)] backdrop-blur-2xl md:p-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Community drop lab</p>
            <h2 className="text-3xl font-semibold">How the fan collective keeps it glowing</h2>
            <p className="text-base text-white/80">
              We remix Sophia’s influence into Group 7-themed merch using our own sketches, typography, and cosmic palettes. Nothing is copied from
              Sophia—our work simply keeps attention on her catalog and the community she inspired.
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2FC7BB]" />
                <span>Design assets are born in-house—sketched, coded, and textured by Group 7 volunteers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#EBD0E3]" />
                <span>Each drop includes a lore zine retelling the timeline you just scrolled through.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#F88379]" />
                <span>Every release ships with a fan note pointing listeners back to Sophia’s latest tracks.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-white/80">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Unofficial status</p>
              <p className="text-lg">
                Group 7 Life is a community-operated fan effort. We don’t speak for Sophia, and we don’t reproduce her handwriting, lyrics, or art.
                We simply channel her origin story into our own Group 7 motifs.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-white/80">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Quote</p>
              <p className="text-lg italic">
                “Elite but welcoming isn’t corporate—it’s friends trading glitter pens, code snippets, and bulk blanks.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <MusicPlayer />
    </div>
  );
}
