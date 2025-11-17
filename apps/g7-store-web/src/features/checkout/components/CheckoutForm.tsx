'use client';

import { useMemo, useState } from 'react';
import { createCheckoutSession } from '../api/createCheckoutSession';
import { useCart } from '../../cart/hooks/useCart';
import { formatCurrency } from '@g7/core/utils';

const initialForm = {
  name: '',
  email: '',
  line1: '',
  line2: '',
  city: '',
  postcode: '',
  countryCode: 'US',
};

export function CheckoutForm() {
  const { items, subtotal, clear } = useCart();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formattedTotal = useMemo(() => formatCurrency(subtotal), [subtotal]);

  const canSubmit =
    items.length > 0 && form.email && form.name && form.line1 && form.city && form.postcode && !isSubmitting;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    try {
      setError(null);
      setIsSubmitting(true);
      const { url } = await createCheckoutSession({
        cart: items,
        customer: form,
      });
      clear();
      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-slate/60 p-8">
      <div className="space-y-6">
        <fieldset className="space-y-3">
          <legend className="text-xs uppercase tracking-[0.3em] text-white/40">Contact</legend>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
        </fieldset>
        <fieldset className="space-y-3">
          <legend className="text-xs uppercase tracking-[0.3em] text-white/40">Shipping</legend>
          <input
            type="text"
            placeholder="Address line"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
            value={form.line1}
            onChange={(event) => setForm((prev) => ({ ...prev, line1: event.target.value }))}
          />
          <input
            type="text"
            placeholder="Address line 2"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
            value={form.line2}
            onChange={(event) => setForm((prev) => ({ ...prev, line2: event.target.value }))}
          />
          <div className="grid gap-3 md:grid-cols-2">
            <input
              type="text"
              placeholder="City"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
              value={form.city}
              onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
            />
            <input
              type="text"
              placeholder="Postal code"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
              value={form.postcode}
              onChange={(event) => setForm((prev) => ({ ...prev, postcode: event.target.value }))}
            />
          </div>
        </fieldset>
      </div>
      {error && <p className="text-sm text-accent">{error}</p>}
      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-full border border-accent/50 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isSubmitting ? 'Redirecting…' : `Proceed (${formattedTotal})`}
      </button>
    </form>
  );
}
