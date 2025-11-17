import type { Metadata } from 'next';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './global.css';
import { AppProviders } from './providers';
import { SiteHeader } from '../features/layout/components/SiteHeader';
import { SpaceBackground } from '../features/layout/components/SpaceBackground';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-display' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });
const siteUrl = 'https://groupseven.life';
const siteName = 'Group 7 Life';
const siteTitle = `${siteName} — Community merch fueling the Group Seven Life collective`;
const siteDescription =
  'Group 7 Life is a Printful-powered merch collective funding kinder digital spaces, in-person gatherings, and creator resources for the Group Seven Life community.';
const gaMeasurementId = 'G-G1J9F131CF';
const siteKeywords = [
  'Group 7 Life',
  'Group Seven Life',
  'community merch',
  'Printful storefront',
  'creator collective',
  'Spring shop',
  'kinder tech',
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  alternates: { canonical: '/' },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/seo/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Group 7 Life community merch collage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/seo/twitter-card.jpg'],
  },
  icons: {
    icon: [
      { url: '/seo/favicon.ico' },
      { url: '/seo/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/seo/favicon.svg', type: 'image/svg+xml' },
      { url: '/seo/web-app-manifest-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/seo/web-app-manifest-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/seo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/seo/favicon.ico'],
  },
  manifest: '/seo/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-ink text-white">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `,
          }}
        />
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
