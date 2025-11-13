import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-ink to-slate px-6 py-16 md:px-12">
      <div className="relative z-10 max-w-2xl space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Group 7 Supply</p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
          Apparel for the initiated.
        </h1>
        <p className="text-base text-white/70 md:text-lg">
          Built on the rituals of drops, tuned for the founders, designers, and tacticians who live in dark UI all day.
          Ultra-limited silhouettes with Printful + Stripe integration already wired.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            className="rounded-full border border-accent/50 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-accent/40"
            href="/shop"
          >
            Enter the protocol
          </a>
          <a className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/70" href="#catalog">
            Explore catalogue
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center md:flex">
        <div className="relative h-72 w-72 rotate-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <Image
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
            alt="Hero mockup"
            fill
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="rounded-2xl object-cover"
          />
          <div className="absolute -left-6 top-10 h-24 w-24 rounded-2xl border border-white/10 bg-ink/80 p-3 text-xs text-white/70">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em]">Drop 07</p>
            <p className="text-sm font-semibold">Signal Field</p>
          </div>
        </div>
      </div>
    </section>
  );
}
