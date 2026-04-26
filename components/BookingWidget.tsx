'use client';

import { useEffect, useState, useRef } from 'react';
import { Tour } from '@/lib/tours';
import { siteConfig } from '@/lib/site';
import { X, MessageCircle } from 'lucide-react';

interface Props {
  tour: Tour;
}

// ─── BOKUN WIDGET ──────────────────────────────────────────────
function BokunWidget({ tour }: { tour: Tour }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileCalOpen, setMobileCalOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  const iframeSrc = `https://widgets.bokun.io/online-sales/${siteConfig.bokun.channelUUID}/experience-calendar/${tour.bokunExperienceId}?partialView=1`;

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
    return () => document.body.classList.remove('drawer-open');
  }, [drawerOpen]);

  // Scroll to mobile calendar when it opens
  useEffect(() => {
    if (mobileCalOpen && mobileRef.current) {
      setTimeout(() => {
        mobileRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [mobileCalOpen]);

  return (
    <>
      {/* ── DESKTOP: Sticky sidebar card ──────────────────── */}
      <div className="hidden lg:block sticky top-28">
        <div className="bg-white border border-navy/10 shadow-xl rounded-sm overflow-hidden">
          {/* Price */}
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
          <div className="px-6 py-4 border-b border-navy/5 space-y-2 text-sm text-navy/60">
            <div className="flex justify-between">
              <span>Duration</span>
              <span className="text-navy font-medium">{tour.duration}</span>
            </div>
            <div className="flex justify-between">
              <span>Group size</span>
              <span className="text-navy font-medium">{tour.groupSize}</span>
            </div>
          </div>

          {/* Book Now — opens our custom right drawer */}
          <div className="px-6 py-5">
            <button
              onClick={() => setDrawerOpen(true)}
              className="btn-primary w-full text-center block"
            >
              Book Now
            </button>
            <p className="text-center text-navy/40 text-xs mt-3">✓ Free cancellation</p>
            <p className="text-center text-navy/40 text-xs mt-1">✓ Instant confirmation</p>
          </div>

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

      {/* ── MOBILE: Fixed bottom bar ───────────────────────── */}
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
            onClick={() => setMobileCalOpen((v) => !v)}
            className="btn-primary text-sm px-6 py-3"
          >
            {mobileCalOpen ? 'Close' : 'Book Now'}
          </button>
        </div>
      </div>

      {/* ── MOBILE: Inline calendar above "More Tours" ─────── */}
      {mobileCalOpen && (
        <div
          ref={mobileRef}
          className="lg:hidden mb-6 border border-gold/20 rounded-sm overflow-hidden shadow-lg bg-white"
        >
          <div className="bg-navy px-5 py-4 flex items-center justify-between">
            <span className="text-gold font-heading text-lg">Select a Date</span>
            <button
              onClick={() => setMobileCalOpen(false)}
              className="text-cream/60 hover:text-cream transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <iframe
            src={iframeSrc}
            style={{ width: '100%', height: '520px', border: 'none' }}
            title={`Book ${tour.shortTitle}`}
          />
        </div>
      )}

      {/* ── DESKTOP: Blur overlay (covers page behind drawer) ─ */}
      <div
        className={`booking-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* ── DESKTOP: Right-side drawer ─────────────────────── */}
      <div className={`booking-drawer ${drawerOpen ? 'open' : ''}`}>
        {/* Drawer header */}
        <div className="booking-drawer-header">
          <div>
            <p className="text-gold font-heading text-xl">{tour.shortTitle}</p>
            <p className="text-cream/50 text-xs mt-0.5">
              {tour.currency}{tour.price} / person
            </p>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-cream/60 hover:text-cream transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Bokun calendar inside iframe */}
        <iframe
          src={iframeSrc}
          style={{ flex: 1, width: '100%', border: 'none' }}
          title={`Book ${tour.shortTitle}`}
          allow="payment"
        />
      </div>
    </>
  );
}

// ─── CALENDLY WIDGET ───────────────────────────────────────────
function CalendlyWidget({ tour }: { tour: Tour }) {
  const url = tour.calendlyUrl || siteConfig.calendly.baseUrl;

  useEffect(() => {
    // Re-initialise Calendly after component mounts
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidgets();
    }
  }, []);

  return (
    <>
      {/* Desktop sticky sidebar */}
      <div className="hidden lg:block sticky top-28">
        <div className="bg-white border border-navy/10 shadow-xl rounded-sm overflow-hidden">

          {/* Header — no price shown */}
          <div className="bg-navy px-6 py-5 text-center">
            <p className="text-gold font-heading text-2xl">Plan Your Tour</p>
            <p className="text-cream/50 text-sm mt-1">Free 30-min consultation</p>
          </div>

          {/* Urgency nudge */}
          <div className="px-5 py-4 bg-gold/5 border-b border-gold/10 text-center">
            <p className="text-navy font-body text-sm font-semibold">
              🗓 Limited slots available in May
            </p>
            <p className="text-navy/60 text-xs mt-1">
              Book your free consultation — no payment needed
            </p>
          </div>

          {/* Calendly inline embed */}
          <div
            className="calendly-inline-widget"
            data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=C9A84C`}
            style={{ minWidth: '280px', height: '500px' }}
          />

          {/* WhatsApp alternative */}
          <div className="px-6 pb-5 border-t border-navy/5 pt-4">
            <p className="text-center text-navy/50 text-xs mb-3">Prefer to chat first?</p>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp w-full block text-center text-xs"
            >
              WhatsApp Aida
            </a>
          </div>
        </div>
      </div>

      {/* Mobile fixed bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy/10 shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <p className="text-navy font-heading text-lg font-semibold">Plan Your Tour</p>
            <p className="text-navy/50 text-xs">Free 30-min consultation</p>
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
function EnquireWidget() {
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
export default function BookingWidget({ tour }: Props) {
  if (tour.bookingType === 'bokun') return <BokunWidget tour={tour} />;
  if (tour.bookingType === 'calendly') return <CalendlyWidget tour={tour} />;
  return <EnquireWidget />;
}
