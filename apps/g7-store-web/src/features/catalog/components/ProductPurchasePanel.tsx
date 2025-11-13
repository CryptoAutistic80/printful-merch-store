'use client';

import { useState } from 'react';
import { Product, ProductVariant } from '@g7/shared-types';
import { useCart } from '../../cart/hooks/useCart';

interface Props {
  product: Product;
}

export function ProductPurchasePanel({ product }: Props) {
  const { addItem } = useCart();
  const [variant, setVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState(1);

  function handleAdd() {
    addItem({ productSlug: product.slug, variantId: variant.id, quantity });
  }

  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
      <h1 className="text-4xl font-semibold text-white">{product.name}</h1>
      <p className="text-sm uppercase tracking-[0.3em] text-white/50">{product.heroTagline}</p>
      <p className="text-base text-white/70">{product.description}</p>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Select size</p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((variantOption) => (
            <button
              key={variantOption.id}
              type="button"
              onClick={() => setVariant(variantOption)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] ${
                variantOption.id === variant.id
                  ? 'border-accent/60 bg-accent/20 text-white'
                  : 'border-white/10 text-white/60'
              }`}
            >
              {variantOption.label}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Quantity</p>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
          className="w-24 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white"
        />
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="w-full rounded-full border border-accent/50 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
      >
        Add to cart
      </button>
      <ul className="list-disc space-y-2 pl-6 text-sm text-white/60">
        {product.features?.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
