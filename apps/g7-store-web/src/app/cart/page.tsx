import { CartSummary } from '../../features/cart/components/CartSummary';
import Link from 'next/link';

export const metadata = { title: 'Cart — Group 7 Life' };

export default function CartPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Cart</p>
        <h1 className="text-3xl font-semibold text-white">Loadout</h1>
        <p className="text-sm text-white/60">Everything you add from the shared product library shows here.</p>
      </div>
      <CartSummary />
      <div className="text-right">
        <Link href="/checkout" className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em]">
          Continue to checkout
        </Link>
      </div>
    </div>
  );
}
