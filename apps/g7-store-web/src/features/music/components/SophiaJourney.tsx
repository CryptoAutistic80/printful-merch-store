const timeline = [
  {
    id: 'childhood',
    stage: 'Childhood Frequencies',
    period: 'Garage pianos & choir risers',
    headline: 'Before any cameras, the James household was already a neon rehearsal room.',
    story:
      'Family jam sessions and community theater rehearsals felt like open-invite workshops. She taped neon stars over her keyboard, wrote lyrics across margins, and chased every modulation until it glowed—rituals we still mimic when mocking up merch.',
    quote: '“If the stage lights feel elite, make sure the door feels welcoming.”',
    gradient: 'linear-gradient(135deg, #4215ff 0%, #5d3bff 45%, #0e0f29 100%)',
  },
  {
    id: 'idol',
    stage: 'American Idol Era',
    period: 'Broadcast glow, national vote',
    headline: 'Prime-time TV made the fandom official—even if Sophia stayed impossibly human.',
    story:
      'She translated diary pages to camera-ready arrangements, gifting handmade lyric cards to bandmates so things never felt corporate. Those broadcasts are why half of us found each other in the first place.',
    quote: '“Elite but welcoming means telling the nation a secret and inviting them to sing along.”',
    gradient: 'linear-gradient(135deg, #ff46c3 0%, #ff8a65 50%, #220631 100%)',
  },
  {
    id: 'indie',
    stage: 'Indie Pivot',
    period: 'Living-room studios & Bandcamp drops',
    headline: 'Post-Idol, Sophia doubled down on tactile, DIY world-building.',
    story:
      'She pressed limited vinyl with handwritten liner notes, traded merch for poetry, and built a modular crew of string players, beat scientists, and muralists. That ethos gave Group 7 permission to be weird, tactile, and wildly inviting too.',
    quote: '“The more DIY we went, the more the music felt like a constellation you could actually touch.”',
    gradient: 'linear-gradient(135deg, #32f5ff 0%, #2fa7ff 45%, #04253f 100%)',
  },
  {
    id: 'group7',
    stage: 'Group 7 Experiment',
    period: 'Now — Nx stack & Protocol showroom',
    headline: 'Her experiments sparked our unofficial merch lab—the rest is community folklore.',
    story:
      'We watched Sophia blend music narrative with tech prototypes, so we mirrored the approach with Nx, Next.js, and a Spring-hosted store. She keeps the “elite but welcoming” mantra alive; we keep the merch table stocked in her honor.',
    quote: '“This experiment lets me dream at neon scale without losing the handwritten lyric texture.”',
    gradient: 'linear-gradient(135deg, #d75bff 0%, #6f6bff 50%, #090918 100%)',
  },
];

const lyricTextureSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
  <defs>
    <pattern id="scribble" width="160" height="160" patternUnits="userSpaceOnUse">
      <path d="M0 30 Q 40 0 80 30 T 160 30" stroke="rgba(255,255,255,0.12)" stroke-width="2" fill="none" stroke-linecap="round" />
      <path d="M-40 90 Q 0 60 40 90 T 120 90" stroke="rgba(255,255,255,0.09)" stroke-width="1.5" fill="none" stroke-linecap="round" />
      <text x="20" y="140" font-family="'Patrick Hand', 'Comic Sans MS', cursive" font-size="20" fill="rgba(255,255,255,0.1)">la / la</text>
    </pattern>
  </defs>
  <rect width="160" height="160" fill="url(#scribble)" />
</svg>`;

const lyricTexture = `url("data:image/svg+xml,${encodeURIComponent(lyricTextureSvg)}")`;

export function SophiaJourney() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">Timeline</p>
        <h2 className="text-3xl font-semibold text-white">Sophia’s Journey</h2>
        <p className="text-base text-white/70">
          The moments that shaped her voice, each stamped with neon gradients, analog scribbles, and that playful “elite but
          welcoming” promise. It’s pure storytelling—our merch stays 100% original to Group 7.
        </p>
      </div>
      <ol className="space-y-6">
        {timeline.map((node, index) => (
          <li key={node.id} className="relative">
            <div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 p-6 md:p-10"
              style={{
                backgroundImage: `${node.gradient}, radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 50%), ${lyricTexture}`,
                backgroundBlendMode: 'screen, screen, normal',
              }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl space-y-2">
                  <p className="text-xs uppercase tracking-[0.5em] text-white/70">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="text-2xl font-semibold text-white">{node.stage}</h3>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">{node.period}</p>
                  <p className="text-lg text-white/90">{node.headline}</p>
                  <p className="text-base text-white/80">{node.story}</p>
                </div>
                <blockquote className="max-w-sm rounded-2xl border border-white/20 bg-black/20 p-6 text-sm italic text-white/90 shadow-lg shadow-black/40">
                  <span className="text-white/60">{node.quote}</span>
                </blockquote>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
