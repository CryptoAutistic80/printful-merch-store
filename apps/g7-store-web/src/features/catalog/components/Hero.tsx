import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-indigo-950 via-ink to-slate px-6 py-16 md:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_50%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(125,211,252,0.25),transparent_45%)]" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full border border-white/10 bg-white/5 blur-3xl" />
        <div className="absolute -right-16 top-10 hidden h-64 w-64 rounded-full border border-accent/40 bg-gradient-to-br from-accent/30 to-transparent md:block" />
      </div>
      <div className="absolute left-8 top-12 text-[0.65rem] font-semibold uppercase tracking-[0.8em] text-white/10">
        Group•7•Group•7•Group•7•Group•7•
      </div>
      <div className="absolute -right-10 -top-10 hidden h-60 w-60 rounded-full border border-white/20 md:block">
        <div className="absolute inset-0 rounded-full border border-white/20" />
      </div>
      <div className="absolute right-16 top-16 hidden h-32 w-32 rounded-full border border-white/40 md:block">
        <div className="absolute inset-0 rounded-full border border-white/10" />
      </div>
      <div className="absolute -right-12 top-1/3 hidden h-32 w-32 animate-[spin_24s_linear_infinite] rounded-full border border-white/10 md:block">
        <div className="absolute inset-4 rounded-full border border-white/30" />
      </div>
      <div className="relative z-10 max-w-2xl space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">Group 7 Orientation</p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
          Elite-but-open energy for the Group 7 cosmic experiment.
        </h1>
        <p className="text-base text-white/80 md:text-lg">
          Group 7 is running a live orientation: calibrate your signal, sync to the algorithm, and step into an invite-only feel that still beams a welcome to the curious. Every layer is print-ready, fulfilment-locked, and optimized for the TikTok lab we&apos;re about to bend.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            className="rounded-full border border-accent/60 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-accent/40"
            href="/shop"
          >
            Join the orientation
          </a>
          <a className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/70" href="#catalog">
            Read the field notes
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center md:flex">
        <div className="relative h-72 w-72 rotate-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
          <Image
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
            alt="Hero mockup"
            fill
            sizes="(min-width: 1024px) 50vw, 90vw"
            priority
            className="rounded-2xl object-cover"
          />
          <div className="absolute -left-6 top-10 h-24 w-24 rounded-2xl border border-white/10 bg-ink/80 p-3 text-xs text-white/70">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em]">Group 7 Lab</p>
            <p className="text-sm font-semibold">TikTok Pulse</p>
            <p className="text-[0.6rem] text-white/50">Loop 07</p>
          </div>
        </div>
      </div>
    </section>
  );
}
