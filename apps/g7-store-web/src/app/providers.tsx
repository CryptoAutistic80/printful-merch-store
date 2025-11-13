'use client';

import { CartProvider } from '../features/cart/hooks/useCart';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
