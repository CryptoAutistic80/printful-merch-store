'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const AMAZON_TRACK_URL =
  'https://music.amazon.co.uk/albums/B0FQKTPM57?trackAsin=B0FQKV46N3&ref=dm_sh_658e-9d3a-1414-13dc-17dfa';
const AMAZON_SAMPLE_PROXY =
  'https://d2usgkmxlnua9y.cloudfront.net/?location=aHR0cHM6Ly9tdXNpYy5hbWF6b24uY28udWsvZ2V0U2FtcGxlVHJhY2svQjBGUUtWNDZOMw%3D%3D&deviceType=AVA4O27YBJZ05&entityType=TRACK&entityId=B0FQKV46N3';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const tryPlay = async () => {
      try {
        await audio.play();
      } catch {
        // Browsers often block autoplay with sound, which is fine—the player stays interactive.
      }
    };

    if (audio.paused) {
      void tryPlay();
    }
  }, []);

  return (
    <section className="rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-[#06000f] via-[#07021c] to-[#020108] px-6 py-10 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-center">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3">
            <Image
              src="https://m.media-amazon.com/images/I/21wyfghGvQL._SY240_.jpg"
              alt="So Unfair cover art"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Group 7 anthem</p>
            <div>
              <h3 className="text-2xl font-semibold">So Unfair</h3>
              <p className="text-base text-white/70">Sophia James · Amazon Music preview</p>
            </div>
            <p className="text-sm text-white/70">
              The single that powered seven TikToks after Sophia declared, &quot;If you&apos;re watching this, you&apos;re in Group 7.&quot; Listen for the
              lyric &quot;I&apos;m on the record but you put me on the B-side&quot; while the landing visuals pulse in sync.
            </p>
            <a
              href={AMAZON_TRACK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white/60"
            >
              Listen on Amazon Music
            </a>
          </div>
        </div>
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/50 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.45)]">
          <audio
            ref={audioRef}
            src={AMAZON_SAMPLE_PROXY}
            controls
            loop
            autoPlay
            preload="auto"
            className="w-full rounded-2xl border border-white/10 bg-black/60 p-3 text-white"
          >
            <track kind="captions" label="No captions" />
          </audio>
        </div>
      </div>
    </section>
  );
}
