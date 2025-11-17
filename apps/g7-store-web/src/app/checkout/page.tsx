import Link from 'next/link';

export const metadata = { title: 'Checkout — Group 7 Life' };

const storeUrl = process.env.NEXT_PUBLIC_STORE_URL ?? 'https://store.groupseven.life';

export default function CheckoutPage() {
  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">Checkout</p>
      <h1 className="text-3xl font-semibold">Checkout now runs on Spring</h1>
      <p className="text-sm text-white/70">
        Payments and fulfillment are handled entirely by our Spring (Teespring) storefront. Tap the link below to complete your
        order there while we keep this site focused on storytelling and the community hub.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href={storeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink shadow-accent/40 transition hover:-translate-y-0.5"
        >
          Go to Spring checkout
        </Link>
        <Link
          href="/shop#spring-embed"
          className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white/60"
        >
          Preview embed
        </Link>
      </div>
    </div>
  );
}
