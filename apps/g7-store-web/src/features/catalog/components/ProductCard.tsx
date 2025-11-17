'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@g7/shared-types';
import { formatCurrency } from '@g7/core/utils';

const storeUrl = process.env.NEXT_PUBLIC_STORE_URL ?? 'https://store.groupseven.life';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <article className="group rounded-3xl border border-white/5 bg-slate/80 p-5 transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent" />
        <div className="absolute left-4 top-4 text-[0.6rem] uppercase tracking-[0.3em] text-white/60">{product.category}</div>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold tracking-tight text-white">{product.name}</h3>
        <p className="text-sm text-white/70">{product.description}</p>
        <div className="flex items-center justify-between pt-4 text-sm text-white/80">
          <span>{formatCurrency(product.basePrice)}</span>
          <div className="flex gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
            {product.tags?.slice(0, 2).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 pt-4">
          <Link
            href={storeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/30"
          >
            Shop on Spring
          </Link>
          <Link
            href={`/product/${product.slug}`}
            className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
