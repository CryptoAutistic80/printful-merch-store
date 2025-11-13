'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '@g7/core/utils';

export function CartSummary() {
  const { enrichedItems, subtotal, removeItem, updateQuantity } = useCart();

  if (enrichedItems.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate/50 p-8 text-center text-white/60">
        Cart is standing by. Add a product from the <Link href="/shop" className="text-white">catalogue</Link>.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {enrichedItems.map((item) => (
        <div key={`${item.productSlug}-${item.variantId}`} className="flex gap-4 rounded-2xl border border-white/5 p-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-ink/40">
            <Image
              src={item.image}
              alt={item.productName}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <p className="text-base font-semibold text-white">{item.productName}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">{item.variantLabel}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <label className="text-xs uppercase tracking-[0.3em] text-white/40">Qty</label>
              <input
                type="number"
                min={1}
                className="w-16 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-center text-white"
                value={item.quantity}
                onChange={(event) =>
                  updateQuantity(item.productSlug, item.variantId, Number(event.target.value) || 1)
                }
              />
              <button
                type="button"
                className="text-xs uppercase tracking-[0.3em] text-accent"
                onClick={() => removeItem(item.productSlug, item.variantId)}
              >
                Remove
              </button>
              <span className="ml-auto text-sm font-semibold">{formatCurrency(item.price * item.quantity)}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4">
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">Subtotal</span>
        <span className="text-2xl font-semibold text-white">{formatCurrency(subtotal)}</span>
      </div>
    </div>
  );
}
