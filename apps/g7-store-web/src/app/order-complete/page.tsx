import Link from 'next/link';

export const metadata = { title: 'Order complete — Group 7 Life' };

export default function OrderCompletePage() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">Transmission received</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Order confirmed</h1>
      <p className="mt-4 text-white/70">
        Stripe handles the payment handshake while Nest triggers Printful fulfillment. This page is wired for when you plug in
        real secrets.
      </p>
      <Link href="/shop" className="mt-8 inline-block rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em]">
        Back to shop
      </Link>
    </div>
  );
}
