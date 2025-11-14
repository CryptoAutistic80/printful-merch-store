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
    <section className="rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-ink to-ink/60 px-6 py-10 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-center">
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://m.media-amazon.com/images/I/21wyfghGvQL._SY240_.jpg"
              alt="So Unfair cover art"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Protocol soundtrack</p>
            <div>
              <h3 className="text-2xl font-semibold">So Unfair</h3>
              <p className="text-base text-white/70">Sophia James · Amazon Music preview</p>
            </div>
            <p className="text-sm text-white/70">
              We loop the official Amazon Music preview to keep the showroom humming—hit play if your browser blocks
              autoplay.
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
        <div className="w-full max-w-md">
          <audio
            ref={audioRef}
            src={AMAZON_SAMPLE_PROXY}
            controls
            loop
            autoPlay
            preload="auto"
            className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 text-white"
          >
            <track kind="captions" label="No captions" />
          </audio>
        </div>
      </div>
    </section>
  );
}
