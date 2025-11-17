import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { MusicPlayer } from '../../features/music/components/MusicPlayer';

const auroraTexture =
  'radial-gradient(circle at 10% 20%, rgba(47, 199, 187, 0.22), transparent 45%), radial-gradient(circle at 80% 0%, rgba(235, 208, 227, 0.2), transparent 55%), radial-gradient(circle at 50% 80%, rgba(248, 131, 121, 0.18), transparent 60%)';

const quickFacts = [
  {
    label: 'Roots & Stage Name',
    detail:
      'Sophia Louise Wackerman was born in Australia, raised in Long Beach, and performs as Sophia James to honor her brother James, who lives with fragile X syndrome.',
  },
  {
    label: 'Family Band Energy',
    detail:
      'Her mom, Naomi Star, toured as a vocalist and her dad, Chad Wackerman, drums worldwide—music theory and jam sessions were literally the family dinner table.',
  },
  {
    label: 'Primary Instruments',
    detail:
      'Voice first, then piano, guitar, and production chops developed through UCLA’s global jazz program and a cappella life with the ScatterTones.',
  },
];

const songwritingHighlights = [
  'American Idol Season 18 introduced her soulful rock tone to national TV, landing her in the Top 11.',
  'Post-Idol, she wrote for Ratatouille – The TikTok Musical, Disney’s Hamster & Gretel, upcoming Phineas and Ferb episodes, and served as musical director for the short film Cold Cold Man.',
  'Her catalog blends irregular time signatures with jazz harmonies and candid lyrics—think Adele-level power filtered through DIY sci-fi feelings.',
  'Studio time isn’t her only lab; she engineers tracks in bedrooms, stages, and TikTok drafts to keep experimenting with sound.',
];

const discography = [
  {
    year: '2021',
    title: 'Stand Beneath the Sky',
    description:
      'Debut EP lacing blues, jazz, and lo-fi textures. “For Once I Can Say” radiates love, “Sixty Years” wrestles with uncertainty, and closer “The Rain” is pure ethereal glow.',
    tracks: ['Somebody New', 'For Once I Can Say', 'Sixty Years', 'The Rain'],
  },
  {
    year: '2022',
    title: 'Lines on the Freeway',
    description:
      'A raw alternative diary. “Still…” and “Floodgates” pour heartbreak into sweeping piano, while “Let Me Go” and “I Wasn’t Made to Be in Love” dissect the ache of not fitting in.',
    tracks: ['Still…', 'Floodgates', 'Let Me Go', "I Wasn't Made to Be in Love"],
  },
  {
    year: '2024',
    title: 'Clockwork EP',
    description:
      'Time as a coping mechanism. Written during her senior year, the record toggles between circular and linear rhythms to process grief, adulthood, and awe.',
    tracks: ['Circadian Rhythm', 'First Time Around', 'Clockwork', 'Heat Death (The End of Everything)', 'Vega', 'Valerie (live)'],
  },
  {
    year: '2025',
    title: 'So Unfair (single)',
    description:
      'A sleek alt-pop cut released 1 Oct 2025 that seeded the Group 7 experiment. Slick drums, vulnerable lyrics, and proof that persistence beats algorithms.',
    tracks: ['So Unfair'],
  },
];

const experimentHighlights = [
  {
    title: 'Seven-post science drop',
    detail:
      'On 17 Oct 2025 she uploaded seven TikToks in a row, tagging each as Group 1–7. The finale declared “you’re in Group 7, welcome,” making followers feel chosen by the feed itself.',
  },
  {
    title: 'Millions of signals',
    detail:
      'Video 7 cleared 17M views, brought in ~100K followers, and sent “So Unfair” to ~75K Spotify streams in days. Malala Yousafzai, the 49ers, and half of TikTok shouted out their membership.',
  },
  {
    title: 'Quantity over perfection',
    detail:
      'Sophia told WIRED and Vulture the tactic was a chaotic experiment—but it worked because community members amplified the mantra “elite but welcoming.”',
  },
];

const fanPillars = [
  {
    title: 'Original merch ethos',
    detail:
      'Members design neon, cosmic-themed merch with their own sketches, typography, and code. No scans, no copied art—just original responses to the spark she lit.',
  },
  {
    title: 'Lore zines + notes',
    detail:
      'Fans circulate handmade lore zines retelling Sophia’s journey and pair them with notes that redirect attention to her current releases.',
  },
  {
    title: 'Elite but welcoming',
    detail: 'The mantra guides how we host: velvet-rope energy with open arms so new listeners feel chosen while the core community keeps things humble.',
  },
];

const timeline = [
  { date: '1 Sept 1999', milestone: 'Born in Australia before moving to Long Beach at age five to grow up in a house of working musicians.' },
  { date: '2004', milestone: 'Started piano and vocal lessons with her mom; soon added guitar and songwriting notebooks.' },
  { date: '2020', milestone: 'Auditioned for American Idol Season 18, landed in the Top 20/11th overall, and doubled down on the name Sophia James.' },
  { date: '2021', milestone: 'Released Stand Beneath the Sky, proving the family’s jazz DNA could lean lo-fi without losing warmth.' },
  { date: '2022', milestone: 'Dropped Lines on the Freeway and expanded her writing credits across musicals and short films.' },
  { date: '19 Apr 2024', milestone: 'Clockwork EP arrived as a concept record about time, chaos, and persistence.' },
  { date: '1 Oct 2025', milestone: 'So Unfair released as a standalone single with sleek alt-pop production.' },
  { date: '17 Oct 2025', milestone: 'Group 7 TikTok experiment invited anyone watching video seven into a “secret” cohort.' },
  { date: '21 Oct 2025', milestone: 'ABC News, WIRED, Vulture, Her Campus, and more documented the movement’s virality.' },
];

const socialLinks = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@sophiajamesmusic',
    description: 'Home of the Group 7 experiment (865K+ followers). Replace the data-video-id in TikTok’s embed snippet to feature the viral post.',
  },
  { label: 'Linktree', href: 'https://linktr.ee/sophiajamesmusic', description: 'Central hub for Spotify, Apple Music, Substack, Shopify merch, and charitable links.' },
  { label: 'Spotify', href: 'https://open.spotify.com/artist/0S8h5BgU984wgKqeFTig84', description: '298K+ monthly listeners and counting.' },
  { label: 'Substack', href: 'https://sophiajames.substack.com', description: 'Essays, behind-the-scenes stories, and warm dispatches about crafting songs.' },
  { label: 'Shopify merch', href: 'https://sophiajamesmusic.myshopify.com', description: 'Her official store—support it whenever you can.' },
];

const tiktokVideoId = process.env.NEXT_PUBLIC_TIKTOK_VIDEO_ID ?? '7306404809639286062';
const tiktokVideoUrl =
  process.env.NEXT_PUBLIC_TIKTOK_VIDEO_URL ?? `https://www.tiktok.com/@sophiajamesmusic/video/${tiktokVideoId}`;

export const metadata: Metadata = {
  title: 'Sophia — Group 7 Life',
  description:
    'Fan-built dossier celebrating Sophia James, the Group 7 experiment, and the neon community that now directs attention back to her songs.',
};

export default function SophiaPage() {
  return (
    <div className="space-y-16">
      <section
        className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#140c2f]/95 via-[#0d0621]/95 to-[#03010c]/95 px-6 py-14 shadow-[0_35px_90px_rgba(4,0,25,0.65)] backdrop-blur-2xl md:px-16"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(27,23,64,0.88) 0%, rgba(8,6,20,0.92) 100%), ${auroraTexture}` }}
      >
        <div className="relative space-y-8 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Group 7 appreciation file</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Sophia James: Musician, scientist, north star</h1>
          <p className="text-lg text-white/80 md:text-xl">
            Group 7 Life is a fan-led community honoring Sophia’s experiment. We don’t copy her art, but we do build lore, merch, and code that keep new ears
            pointed toward her catalog. Consider this the unofficial research packet.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {quickFacts.map((fact) => (
              <article key={fact.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/60">{fact.label}</p>
                <p className="pt-2 text-sm text-white/80">{fact.detail}</p>
              </article>
            ))}
          </div>
          <blockquote className="max-w-4xl rounded-3xl border border-white/15 bg-white/5 p-6 text-base italic text-white/90 shadow-[0_0_60px_rgba(124,58,237,0.35)]">
            “Elite but welcoming means the velvet rope glows, but the wristbands are endless.”
          </blockquote>
          <p className="text-xs text-white/50">
            This site is unofficial and community-run. All imagery is abstract or original; Sophia’s likeness, handwriting, and official merch remain untouched.
          </p>
        </div>
      </section>

      <section className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#0c071d]/95 via-[#070312]/97 to-[#020008]/97 p-8 shadow-[0_30px_80px_rgba(3,0,18,0.65)] backdrop-blur-2xl md:p-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Biography & musical roots</p>
            <h2 className="text-3xl font-semibold">Choir kid energy with scientist curiosity</h2>
            <p className="text-sm text-white/70">
              Sophia started singing and playing piano at five, guided by her mom’s touring vocals and her dad’s jazz drumming charts. UCLA’s global jazz studies
              program sharpened her arranging skills, the ScatterTones polished her harmonies, and American Idol exposed her “soulful and ridiculously strong”
              tone to national TV.
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              {songwritingHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#2FC7BB]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#3c1b5a]/70 via-[#140b2d]/80 to-[#03010d]/95 p-8 text-white shadow-[0_30px_90px_rgba(7,0,35,0.55)]">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Aesthetic inspiration</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/15">
              <Image
                src="/logos/mood.png"
                alt="Group 7 neon cosmic mood board"
                width={900}
                height={640}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <MusicPlayer />

      <section className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#080512]/95 via-[#0f0522]/97 to-[#04000c]/97 p-8 shadow-[0_25px_70px_rgba(2,0,18,0.6)] backdrop-blur-2xl md:p-12">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Discography & evolution</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">From jazz journals to algorithm hacks</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {discography.map((release) => (
            <article key={release.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{release.year}</span>
                <span>Key tracks</span>
              </div>
              <h3 className="pt-2 text-2xl font-semibold">{release.title}</h3>
              <p className="pt-3 text-sm text-white/80">{release.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {release.tracks.map((track) => (
                  <span key={track} className="rounded-full border border-white/20 px-3 py-1">
                    {track}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#15082f]/95 via-[#0b031c]/97 to-[#03000c]/97 p-8 shadow-[0_25px_90px_rgba(4,0,25,0.65)] backdrop-blur-2xl md:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">The Group 7 experiment</p>
            <h2 className="text-3xl font-semibold">TikTok science fair → global fanclub</h2>
            <p className="text-sm text-white/75">
              On 17 Oct 2025, Sophia framed seven TikToks as randomized “groups.” Millions of people happened to catch the seventh post and declared themselves
              members of an elite-yet-welcoming society. What started as an algorithm test is now a community designing merch, funding ops, and lifting her streams.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {experimentHighlights.map((highlight) => (
                <article key={highlight.title} className="rounded-[1.5rem] border border-white/15 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#F5D663]">{highlight.title}</p>
                  <p className="pt-2 text-sm text-white/75">{highlight.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-[2.5rem] border border-dashed border-white/25 bg-white/5 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Fan community manifesto</p>
            {fanPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm font-semibold text-white">{pillar.title}</p>
                <p className="pt-2 text-sm text-white/75">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#08040f]/95 via-[#09031a]/97 to-[#04000c]/97 p-8 shadow-[0_25px_80px_rgba(3,0,20,0.62)] backdrop-blur-2xl md:p-12">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Timeline</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Milestones worth archiving</h2>
        <div className="mt-6 space-y-4">
          {timeline.map((item) => (
            <div key={item.date} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 md:flex-row md:items-center md:gap-6">
              <p className="text-sm font-semibold text-white/80 md:min-w-[120px]">{item.date}</p>
              <p className="text-sm">{item.milestone}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#05030c]/95 via-[#080319]/97 to-[#04000d]/97 p-8 shadow-[0_30px_80px_rgba(2,0,15,0.6)] backdrop-blur-2xl md:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Links & resources</p>
            <h2 className="text-3xl font-semibold">Stay looped in with official touchpoints</h2>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:border-white/40"
                >
                  <span className="text-sm font-semibold text-white">{link.label}</span>
                  <span className="text-sm text-white/75">{link.description}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-black/30 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">TikTok embed</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/60 p-4">
              <blockquote
                className="tiktok-embed"
                cite={tiktokVideoUrl}
                data-video-id={tiktokVideoId}
                style={{ maxWidth: 605, minWidth: 325 }}
              >
                <section>
                  <a target="_blank" rel="noreferrer" title="@sophiajamesmusic" href="https://www.tiktok.com/@sophiajamesmusic">
                    @sophiajamesmusic
                  </a>
                </section>
              </blockquote>
            </div>
            <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
          </div>
        </div>
      </section>

    </div>
  );
}
