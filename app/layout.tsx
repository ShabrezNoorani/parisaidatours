import type { Metadata } from 'next';
import Script from 'next/script';
import { siteConfig } from '@/lib/site';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — Cormorant Garamond + Jost */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Navigation */}
        <Navigation />
        
        <main>{children}</main>
        
        {/* Footer */}
        <Footer />

        {/* Bokun — loads ONCE globally, lazy after page is interactive */}
        <Script
          src={`${siteConfig.bokun.loaderScript}?bookingChannelUUID=${siteConfig.bokun.channelUUID}`}
          strategy="lazyOnload"
        />

        {/* Calendly — loads ONCE globally, lazy */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== 'undefined' && (window as any).Calendly?.initInlineWidgets) {
              (window as any).Calendly.initInlineWidgets();
            }
          }}
        />
      </body>
    </html>
  );
}
