import Link from 'next/link';

export const metadata = { title: 'Order complete — Group 7 Life' };

export default function OrderCompletePage() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">Transmission received</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Orders now complete on Spring</h1>
      <p className="mt-4 text-white/70">
        Checkout, payment, and fulfillment now live entirely on our Spring (Teespring) storefront. Return there for receipts,
        shipping updates, or order lookup. This app focuses on the Group 7 community hub.
      </p>
      <Link href="/shop" className="mt-8 inline-block rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em]">
        Back to shop
      </Link>
    </div>
  );
}
