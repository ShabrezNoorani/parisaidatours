'use client';

import Script from 'next/script';

export default function CalendlyScript() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        const w = window as any;
        if (w.Calendly && typeof w.Calendly.initInlineWidgets === 'function') {
          w.Calendly.initInlineWidgets();
        }
      }}
    />
  );
}
