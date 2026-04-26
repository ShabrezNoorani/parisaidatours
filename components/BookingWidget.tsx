'use client';

import { useEffect, useRef, useState } from 'react';
import { Tour } from '@/lib/tours';
import { siteConfig } from '@/lib/site';
import { X, MessageCircle } from 'lucide-react';

interface BookingWidgetProps {
  tour: Tour;
}

// ─── BOKUN WIDGET ──────────────────────────────────────────────
function BokunWidget({ tour }: { tour: Tour }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  const widgetUrl = `https://widgets.bokun.io/online-sales/${siteConfig.bokun.channelUUID}/experience-calendar/${tour.bokunExperienceId}?partialView=1`;

  // Toggle body blur class when Bokun desktop drawer opens/closes
  useEffect(() => {
    const handleBokunOpen = () => {
      document.body.classList.add('bokun-open');
    };
    const handleBokunClose = () => {
      document.body.classList.remove('bokun-open');
    };

    // Bokun fires these custom events when the drawer opens/closes
    window.addEventListener('bokun:open', handleBokunOpen);
    window.addEventListener('bokun:close', handleBokunClose);

    // Fallback: watch for Bokun iframe appearing in DOM
    const observer = new MutationObserver(() => {
      const bokunFrame = document.querySelector(
        'iframe[src*="bokun"], .BokunWidget, [class*="bokun-overlay"]'
      );
      if (bokunFrame) {
        document.body.classList.add('bokun-open');
      } else {
        document.body.classList.remove('bokun-open');
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('bokun:open', handleBokunOpen);
      window.removeEventListener('bokun:close', handleBokunClose);
      observer.disconnect();
      document.body.classList.remove('bokun-open');
    };
  }, []);

  // Scroll to mobile calendar when it opens
  useEffect(() => {
    if (mobileOpen && mobileRef.current) {
      setTimeout(() => {
        mobileRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [mobileOpen]);

  return (
    <>
      {/* ── DESKTOP: Sticky sidebar ─────────────────────────── */}
      <div className="hidden lg:block sticky top-28">
        <div className="bg-white border border-navy/10 shadow-xl rounded-sm overflow-hidden">
          {/* Price header */}
          <div className="bg-navy px-6 py-5 text-center">
            {tour.originalPrice && (
              <span className="text-cream/40 text-sm line-through mr-2">
                {tour.currency}{tour.originalPrice}
              </span>
            )}
            <span className="text-gold font-heading text-4xl font-semibold">
              {tour.currency}{tour.price}
            </span>
            <span className="text-cream/50 text-sm ml-1">/ person</span>
          </div>

          {/* Details */}
          <div className="px-6 py-5 border-b border-navy/5 space-y-2 text-sm text-navy/60">
            <div className="flex justify-between">
              <span>Duration</span>
              <span className="text-navy font-medium">{tour.duration}</span>
            </div>
            <div className="flex justify-between">
              <span>Group size</span>
              <span className="text-navy font-medium">{tour.groupSize}</span>
            </div>
          </div>

          {/* Book Now button — Bokun triggers from this */}
          <div className="px-6 py-5">
            <button
              className="bokunButton btn-primary w-full text-center block"
              id={tour.bokunButtonId}
              data-src={widgetUrl}
              data-testid="widget-book-button"
            >
              Book Now
            </button>
            <p className="text-center text-navy/40 text-xs mt-3">
              ✓ Free cancellation available
            </p>
            <p className="text-center text-navy/40 text-xs mt-1">
              ✓ Instant confirmation
            </p>
          </div>

          {/* WhatsApp fallback */}
          <div className="px-6 pb-5">
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 text-sm text-navy/50 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={16} />
              Questions? WhatsApp us
            </a>
          </div>
        </div>
      </div>

      {/* ── MOBILE: Fixed bottom bar ────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy/10 shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            {tour.originalPrice && (
              <span className="text-navy/40 text-xs line-through mr-1">
                {tour.currency}{tour.originalPrice}
              </span>
            )}
            <span className="text-navy font-heading text-2xl font-semibold">
              {tour.currency}{tour.price}
            </span>
            <span className="text-navy/50 text-xs ml-1">/ person</span>
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="btn-primary text-sm px-6 py-3"
          >
            {mobileOpen ? 'Close' : 'Book Now'}
          </button>
        </div>
      </div>

      {/* ── MOBILE: Inline calendar panel (appears above "More Tours") ── */}
      {mobileOpen && (
        <div
          ref={mobileRef}
          className="lg:hidden mb-6 bg-white border border-gold/20 rounded-sm overflow-hidden shadow-lg"
          id="mobile-booking-panel"
        >
          <div className="bg-navy px-5 py-4 flex items-center justify-between">
            <span className="text-gold font-heading text-lg">Select a Date</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-cream/60 hover:text-cream transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4">
            <button
              className="bokunButton btn-primary w-full text-center block"
              id={`mobile_${tour.bokunButtonId}`}
              data-src={widgetUrl}
              data-testid="widget-book-button"
            >
              Select Date &amp; Book
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ─── CALENDLY WIDGET ───────────────────────────────────────────
function CalendlyWidget({ tour }: { tour: Tour }) {
  const url = tour.calendlyUrl || siteConfig.calendly.baseUrl;

  return (
    <>
      {/* Desktop: sticky sidebar with embedded Calendly */}
      <div className="hidden lg:block sticky top-28">
        <div className="bg-white border border-navy/10 shadow-xl rounded-sm overflow-hidden">
          <div className="bg-navy px-6 py-5 text-center">
            <span className="text-gold font-heading text-4xl font-semibold">
              {tour.currency}{tour.price}
            </span>
            <span className="text-cream/50 text-sm ml-1">/ person</span>
          </div>
          <div className="px-4 py-4 border-b border-navy/5">
            <p className="text-center text-navy/60 text-sm">
              This tour is customised for you. Book a free 30-min consultation below.
            </p>
          </div>
          <div
            className="calendly-inline-widget"
            data-url={url}
            style={{ minWidth: '280px', height: '420px' }}
          />
        </div>
      </div>

      {/* Mobile: fixed bottom bar → opens Calendly in new tab */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy/10 shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <span className="text-navy font-heading text-2xl font-semibold">
              From {tour.currency}{tour.price}
            </span>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener"
            className="btn-primary text-sm px-6 py-3"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </>
  );
}

// ─── ENQUIRE WIDGET ────────────────────────────────────────────
function EnquireWidget({ tour }: { tour: Tour }) {
  return (
    <div className="hidden lg:block sticky top-28">
      <div className="bg-white border border-navy/10 shadow-xl rounded-sm p-6 text-center">
        <p className="text-navy/60 text-sm mb-4">
          Interested? Get in touch and we'll plan something special for you.
        </p>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener"
          className="btn-whatsapp w-full block text-center"
        >
          WhatsApp Us
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="btn-outline w-full block text-center mt-3"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ───────────────────────────────────────────────
export default function BookingWidget({ tour }: BookingWidgetProps) {
  if (tour.bookingType === 'bokun') return <BokunWidget tour={tour} />;
  if (tour.bookingType === 'calendly') return <CalendlyWidget tour={tour} />;
  return <EnquireWidget tour={tour} />;
}
