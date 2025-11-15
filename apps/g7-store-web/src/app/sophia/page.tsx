import type { Metadata } from 'next';
import { SophiaJourney } from '../../features/music/components/SophiaJourney';
import { MusicPlayer } from '../../features/music/components/MusicPlayer';

export const metadata: Metadata = {
  title: 'Sophia — Group 7 Life',
  description:
    'Unofficial Group 7 Life fan dossier highlighting Sophia James as the origin of the collective. All merch is original Group 7 art made to champion her music.',
};

const auroraTexture =
  'radial-gradient(circle at 10% 20%, rgba(255, 163, 236, 0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(71, 168, 255, 0.35), transparent 55%), radial-gradient(circle at 50% 80%, rgba(110, 231, 183, 0.2), transparent 60%)';

export default function SophiaPage() {
  return (
    <div className="space-y-16">
      <section
        className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#05020c] px-6 py-12 md:px-16"
        style={{ backgroundImage: `linear-gradient(135deg, #05020c 0%, #110022 55%, #04050d 100%), ${auroraTexture}` }}
      >
        <div className="absolute inset-0 opacity-40 mix-blend-screen" aria-hidden>
          <div className="absolute inset-y-0 left-1/2 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]" />
        </div>
        <div className="relative space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Community field guide</p>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">Sophia James</h1>
            <p className="text-lg text-white/80 md:text-xl">
              This is a community-built dossier celebrating Sophia as the founder spark for Group 7. It’s unofficial, it’s
              admiration-only, and it exists so fans discover her music while we design our own neon merch drops around the
              lore she inspired.
            </p>
          </div>
          <blockquote className="max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-6 text-base italic text-white/90 shadow-[0_0_60px_rgba(124,58,237,0.35)]">
            “I wanted everything to feel <span className="font-semibold">‘elite but welcoming’</span>—like the velvet rope is
            glowing, yet everyone gets a wristband.”
          </blockquote>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Why we stan</p>
              <p className="text-2xl font-semibold text-white">Choir kid → Cosmic captain</p>
              <p className="text-sm text-white/70">Her family tapes and jazz charts taught us to keep things soulful.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Moment of ignition</p>
              <p className="text-2xl font-semibold text-white">American Idol signal boost</p>
              <p className="text-sm text-white/70">That prime-time spotlight is why the Group 7 community exists.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Important note</p>
              <p className="text-2xl font-semibold text-white">Original Group 7-only merch</p>
              <p className="text-sm text-white/70">No scans, samples, or copied art—every drop is our own design language.</p>
            </div>
          </div>
          <p className="text-xs text-white/50">
            Group 7 Life is not affiliated with Sophia, American Idol, or any label. She’s featured solely because she
            founded the experiment, and the merch you see is entirely our community’s creation.
          </p>
        </div>
      </section>

      <SophiaJourney />

      <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#03070f] via-[#0c1f2f] to-[#06030c] p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Community drop lab</p>
            <h2 className="text-3xl font-semibold text-white">How the fan collective keeps it glowing</h2>
            <p className="text-base text-white/80">
              We remix Sophia’s influence into Group 7-themed merch using our own sketches, typography, and cosmic palettes.
              Nothing is copied from Sophia—our work simply keeps attention on her catalog and the community she inspired.
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>Design assets are born in-house—sketched, coded, and textured by Group 7 volunteers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span>Each drop includes a lore zine retelling the timeline you just scrolled through.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                <span>Every release ships with a fan note pointing listeners back to Sophia’s latest tracks.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-white/80">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Unofficial status</p>
              <p className="text-lg">
                Group 7 Life is a community-operated fan effort. We don’t speak for Sophia, and we don’t reproduce her
                handwriting, lyrics, or art. We simply channel her origin story into our own Group 7 motifs.
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
