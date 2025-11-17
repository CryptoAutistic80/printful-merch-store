import type { Metadata } from 'next';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './global.css';
import { AppProviders } from './providers';
import { SiteHeader } from '../features/layout/components/SiteHeader';
import { SpaceBackground } from '../features/layout/components/SpaceBackground';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-display' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Group 7 Life',
  description: 'Printful-powered merch stack built with Nx, Next.js, and Nest.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-ink text-white">
        <AppProviders>
          <div className="relative isolate min-h-screen overflow-hidden">
            <SpaceBackground />
            <SiteHeader />
            <main className="mx-auto max-w-6xl space-y-12 px-4 py-10 lg:py-16">{children}</main>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
