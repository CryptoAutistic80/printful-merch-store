'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@g7/core/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/community', label: 'Community' },
  { href: '/mission', label: 'Mission' },
  { href: '/sophia', label: 'Sophia' },
];

const mobileNavItems = [...navItems, { href: 'https://store.groupseven.life', label: 'Shop the Group 7 store', key: 'mobile-store' }];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
        <div className="flex items-center gap-3">
          <Link
            href="https://store.groupseven.life"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white transition hover:border-white/40"
          >
            Shop the Group 7 store
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/5 px-4 py-4 md:hidden">
          {mobileNavItems.map((item) => {
            const isExternal = item.href.startsWith('http');
            return (
              <Link
                key={'key' in item ? item.key : item.href}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className={cn(
                  'rounded-2xl border border-white/10 px-4 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition',
                  pathname === item.href && !isExternal && 'border-white/40 text-white',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
