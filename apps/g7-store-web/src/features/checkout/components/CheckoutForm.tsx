'use client';

const storeUrl = process.env.NEXT_PUBLIC_STORE_URL ?? 'https://store.groupseven.life';

export function CheckoutForm() {
  return (
    <div className="space-y-4 rounded-3xl border border-white/10 bg-slate/60 p-8 text-white">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">Spring checkout</p>
      <h2 className="text-2xl font-semibold">Checkout now lives off-site</h2>
      <p className="text-sm text-white/70">
        We removed the in-app form so you can pay directly through Spring (Teespring). The external storefront reflects the
        latest pricing, sizing, and availability.
      </p>
      <a
        href={storeUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center justify-center rounded-full border border-accent/50 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:-translate-y-0.5"
      >
        Go to Spring checkout
      </a>
    </div>
  );
}
