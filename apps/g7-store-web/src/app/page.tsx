import { Hero } from '../features/catalog/components/Hero';
import { MusicPlayer } from '../features/music/components/MusicPlayer';

const orientationSteps = [
  {
    step: '01',
    title: 'Signal Check',
    description:
      'Ops captains audit your vibe, your stack, and your reason for orbiting Group 7. Submit your TikTok handle, align your intent.',
  },
  {
    step: '02',
    title: 'Orientation Loop',
    description:
      'A micro-cohort walk-through with prompts, glyph drills, and merch fit testing so the elite-but-open energy stays coherent.',
  },
  {
    step: '03',
    title: 'Algorithm Pact',
    description: 'Lock in the TikTok experiment schedule, pick your content archetype, and wire Stripe + Printful for instant fulfilment.',
  },
];

const hackLabCards = [
  {
    title: 'Prompt Mapping',
    description: 'We choreograph Group 7 TikTok hooks, pairing product lore with algorithm-friendly storytelling beats.',
    stat: '12 hooks',
  },
  {
    title: 'Creator Sim Loops',
    description: 'Rapid-fire rehearsal sessions filmed on lo-fi rigs to test cadence, music beds, and call-to-action speed.',
    stat: '4 sprints',
  },
  {
    title: 'Fulfilment Telemetry',
    description: 'Printful + Stripe dashboards stay pinned so every viral spike gets captured with zero manual intervention.',
    stat: '0 drops missed',
  },
];

const socialProof = [
  { label: 'Group 7', caption: 'Orientation Core' },
  { label: 'TikTok', caption: 'Algorithm Arena' },
  { label: 'Printful', caption: 'Production Ally' },
  { label: 'Stripe', caption: 'Commerce Backbone' },
];

export default function Index() {
  return (
    <div className="space-y-12">
      <Hero />

      <section className="rounded-[2rem] border border-white/5 bg-gradient-to-br from-ink/70 via-ink/40 to-slate/60 p-8">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Group 7 Orientation</p>
          <h2 className="font-display text-3xl font-semibold text-white">Stepper through the welcome ritual</h2>
          <p className="text-sm text-white/70 md:text-base">Elite-but-open energy looks like process. Here&apos;s how you get drafted into the field team.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {orientationSteps.map((step) => (
            <div key={step.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">{step.step}</div>
              <h3 className="pt-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="pt-2 text-sm text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-[2rem] border border-white/5 bg-gradient-to-br from-slate/60 via-ink/50 to-indigo-950 p-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Algorithm Hack Lab</p>
          <h2 className="font-display text-3xl font-semibold text-white">Group 7 TikTok experiment stack</h2>
          <p className="text-sm text-white/70 md:text-base">
            Group 7 is treating TikTok like a living lab. Cards below describe the modules we run before we unleash the next drop.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {hackLabCards.map((card) => (
            <div key={card.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs uppercase tracking-[0.4em] text-white/50">{card.stat}</div>
              <h3 className="pt-3 text-xl font-semibold text-white">{card.title}</h3>
              <p className="pt-2 text-sm text-white/70">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[1.75rem] border border-white/5 bg-white/5 px-6 py-6 md:px-12">
        <div className="flex flex-col gap-1 pb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Signal Boost</p>
          <h2 className="text-2xl font-semibold text-white">Trusted orbit</h2>
        </div>
        <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
          {socialProof.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6">
              <p className="font-display text-xl text-white">{item.label}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <MusicPlayer />
    </div>
  );
}
