'use client';

import { Product } from '@g7/shared-types';

const storeUrl = process.env.NEXT_PUBLIC_STORE_URL ?? 'https://store.groupseven.life';

interface Props {
  product: Product;
}

export function ProductPurchasePanel({ product }: Props) {
  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
      <h1 className="text-4xl font-semibold text-white">{product.name}</h1>
      <p className="text-sm uppercase tracking-[0.3em] text-white/50">{product.heroTagline}</p>
      <p className="text-base text-white/70">{product.description}</p>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Variants</p>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
          {product.variants.map((variantOption) => (
            <span key={variantOption.id} className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
              {variantOption.label}
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm text-white/70">
        Purchasing now happens on Spring (Teespring) at store.groupseven.life. Sizes and colors map 1:1 with the options listed
        above.
      </p>
      <a
        href={storeUrl}
        target="_blank"
        rel="noreferrer"
        className="block w-full rounded-full border border-accent/50 bg-accent px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white hover:-translate-y-0.5"
      >
        Shop on Spring
      </a>
      <ul className="list-disc space-y-2 pl-6 text-sm text-white/60">
        {product.features?.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
