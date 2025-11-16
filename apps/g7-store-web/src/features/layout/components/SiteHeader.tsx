'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@g7/core/utils';
import { useCart } from '../../cart/hooks/useCart';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/community', label: 'Community' },
  { href: '/mission', label: 'Mission' },
  { href: '/sophia', label: 'Sophia' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { totalQuantity } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.4em] text-white/70">
          G7 LIFE
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors',
                pathname === item.href && 'text-white',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/cart"
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white"
        >
          Cart ({totalQuantity})
        </Link>
      </div>
    </header>
  );
}
