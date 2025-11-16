import Image from 'next/image';
import Link from 'next/link';
import { Rubik_Glitch } from 'next/font/google';

const glitch = Rubik_Glitch({ subsets: ['latin'], weight: '400' });

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-[#201B4B]/95 via-[#151032]/95 to-[#05030E]/95 px-6 py-14 shadow-[0_25px_80px_rgba(6,2,23,0.6)] md:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(47,199,187,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(248,131,121,0.12),_transparent_70%)]" />
        <div className="absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#EBD0E3]/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#2FC7BB]/15 blur-[140px]" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/5 opacity-40 blur-3xl" />
        <div className="absolute left-16 top-10 h-28 w-28 rounded-full border border-white/20 opacity-40 blur-xl" />
      </div>
      <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/65">Building the Group 7&apos;s Community</p>
          <div className="space-y-4">
            <h1
              className={`${glitch.className} text-[34px] leading-tight bg-gradient-to-r from-[#F3EEFF] via-[#D9C6EA] to-[#99EFE4] bg-[length:200%_200%] bg-clip-text text-transparent animate-[textGradientShift_6s_ease_infinite] md:text-[48px]`}
            >
              Welcome to group 7 life - building the foundations
            </h1>
            <p className="text-base text-white/80 md:text-lg">
              Everywhere online we hear the same thing: people are done being pushed into algorithmic echo chambers. They crave something different—spaces that feel human, connective, loving. That&apos;s why every piece of Group 7 merch matters. Each tee, hoodie, or sticker is fuel for a social media future built on real community infrastructure, not clicks. If you believe in launching a platform that treats people like people, this is how you help build it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-accent/60 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-accent/40 transition hover:-translate-y-0.5"
            >
              Support the Hub
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
        <div className="relative mt-8 flex w-full items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-black/40 p-6 backdrop-blur md:mt-0 md:h-[400px] md:flex-1">
          <div className="pointer-events-none absolute -top-10 right-6 h-32 w-32 rounded-full bg-[#F88379]/25 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-12 left-0 h-36 w-36 rounded-full bg-[#2FC7BB]/25 blur-[110px]" />
          <div className="relative flex h-full w-full max-w-lg items-center justify-center rounded-[1.5rem] border border-white/20 bg-[#070513]/70 p-6 shadow-[0_30px_80px_rgba(1,0,20,0.7)]">
            <div className="absolute inset-0 rounded-[1.5rem] border border-white/10 opacity-60" />
            <div className="absolute inset-4 rounded-[1.25rem] border border-white/5 opacity-20" />
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-[#2FC7BB]/20 via-transparent to-[#F88379]/20 p-2">
              <div className="absolute inset-6 rounded-full border border-white/25 opacity-60 blur-lg" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-black/70 shadow-[0_15px_45px_rgba(3,0,22,0.6)]">
                <Image
                  src="/logos/group-7-solo.png"
                  alt="Group 7 emblem"
                  fill
                  sizes="(min-width: 1024px) 16rem, 60vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute left-12 top-10 h-12 w-12 rounded-full border border-white/20 opacity-60 blur-lg" />
            <div className="absolute right-14 bottom-10 h-16 w-16 rounded-full border border-white/20 opacity-40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
