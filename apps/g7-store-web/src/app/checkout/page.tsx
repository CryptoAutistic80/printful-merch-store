import { CheckoutForm } from '../../features/checkout/components/CheckoutForm';
import { CartSummary } from '../../features/cart/components/CartSummary';

export const metadata = { title: 'Checkout — Group 7 Supply' };

export default function CheckoutPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h1 className="mb-4 text-3xl font-semibold text-white">Secure checkout</h1>
        <CheckoutForm />
      </div>
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Review</p>
        <CartSummary />
      </div>
    </div>
  );
}
