import Image from 'next/image';
import Link from 'next/link';
import { Rubik_Glitch } from 'next/font/google';

const glitch = Rubik_Glitch({ subsets: ['latin'], weight: '400' });

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.75rem] border border-white/5 bg-gradient-to-br from-[#060417] via-[#070019] to-[#020205] px-6 py-14 md:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%)]" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#d946ef]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#0ea5e9]/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">TikTok experiment log</p>
          <div className="space-y-4">
            <h1
              className={`${glitch.className} text-[34px] leading-tight bg-gradient-to-r from-white via-[#c4b5fd] to-[#a5f3fc] bg-[length:200%_200%] bg-clip-text text-transparent animate-[textGradientShift_6s_ease_infinite] md:text-[48px]`}
            >
              Welcome to Group 7 Supply &amp; Community Hub, bending the algorithm to our will.
            </h1>
            <p className="text-base text-white/80 md:text-lg">
              On 17 Oct 2025 Sophia James posted seven TikToks to bully the feed. The seventh clip exploded, crowning everyone who saw it as
              Group 7. We bottled that playful exclusivity into merch, neon rituals, and a sonic React&nbsp;Three hero scene that hums with
              her loop-machine energy.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-accent/60 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-accent/40 transition hover:-translate-y-0.5"
            >
              Shop the Group 7 drop
            </Link>
            <Link
              href="/sophia"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white/70 transition hover:border-white/40"
            >
              Read Sophia&apos;s story
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-xs uppercase tracking-[0.4em] text-white/50">
            <span>Neon cosmic</span>
            <span>Inclusive elite</span>
            <span>Printful-ready</span>
          </div>
        </div>
        <div className="relative mt-8 flex w-full items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 md:mt-0 md:h-[420px] md:flex-1">
          <div className="absolute inset-x-0 top-6 flex justify-center text-[0.55rem] uppercase tracking-[0.6em] text-white/20">
            Group·7·Group·7·Group·7
          </div>
          <div className="relative h-full w-full max-w-lg overflow-hidden rounded-[1.5rem] border border-white/5 bg-black/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="/logos/group-7.png"
              alt="Group 7 monogram"
              fill
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-cover scale-[1.08]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
