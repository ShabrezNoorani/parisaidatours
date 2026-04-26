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
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
    return () => document.body.classList.remove('drawer-open');
  }, [drawerOpen]);

  const whatsappMessage = encodeURIComponent(
    `Hi Aida! I'm interested in the ${tour.title} tour. Could you tell me more about availability and pricing?`
  );
  const whatsappUrl = `https://wa.me/33745562718?text=${whatsappMessage}`;
  const emailSubject = encodeURIComponent(`Enquiry: ${tour.title}`);
  const emailUrl = `mailto:admin@parisaidatours.com?subject=${emailSubject}`;

  return (
    <>
      {/* ── DESKTOP: Sticky sidebar ─────────────────────────── */}
      <div className="hidden lg:block sticky top-28">
        <div className="bg-white border border-navy/10 shadow-xl rounded-sm overflow-hidden">
          {/* Header */}
          <div className="bg-navy px-6 py-5 text-center">
            <p className="text-gold font-heading text-2xl">Plan Your Tour</p>
            <p className="text-cream/50 text-sm mt-1">Custom & private experience</p>
          </div>

          {/* Urgency */}
          <div className="px-5 py-3 bg-gold/5 border-b border-gold/10 text-center">
            <p className="text-navy font-body text-sm font-semibold">
              🗓 Limited availability in May
            </p>
            <p className="text-navy/50 text-xs mt-0.5">Book early to secure your date</p>
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
            <div className="flex justify-between">
              <span>Price</span>
              <span className="text-navy font-medium">On enquiry</span>
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 py-5 space-y-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className="btn-primary w-full text-center block"
            >
              Enquire Now
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp w-full text-center block text-sm"
            >
              WhatsApp Aida
            </a>
          </div>

          {/* Trust signals */}
          <div className="px-6 pb-5 space-y-1 text-center">
            <p className="text-navy/40 text-xs">✓ Free consultation</p>
            <p className="text-navy/40 text-xs">✓ No payment until confirmed</p>
            <p className="text-navy/40 text-xs">✓ Personalised itinerary</p>
          </div>
        </div>
      </div>

      {/* ── MOBILE: Fixed bottom bar ───────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy/10 shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <p className="text-navy font-heading text-lg font-semibold">Plan Your Tour</p>
            <p className="text-navy/50 text-xs">Custom private experience</p>
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            className="btn-primary text-sm px-6 py-3"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* ── Blur overlay ───────────────────────────────────── */}
      <div
        className={`booking-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* ── Right-side enquiry drawer ──────────────────────── */}
      <div className={`booking-drawer ${drawerOpen ? 'open' : ''}`}>
        {/* Drawer header */}
        <div className="booking-drawer-header">
          <div>
            <p className="text-gold font-heading text-xl">{tour.shortTitle}</p>
            <p className="text-cream/50 text-xs mt-0.5">Private & custom experience</p>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-cream/60 hover:text-cream transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Tour summary */}
          <div className="bg-navy/5 rounded-sm p-4 space-y-2 text-sm">
            <div className="flex justify-between text-navy/70">
              <span>Tour</span>
              <span className="font-medium text-navy">{tour.shortTitle}</span>
            </div>
            <div className="flex justify-between text-navy/70">
              <span>Duration</span>
              <span className="font-medium text-navy">{tour.duration}</span>
            </div>
            <div className="flex justify-between text-navy/70">
              <span>Group</span>
              <span className="font-medium text-navy">{tour.groupSize}</span>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-gold/10 border border-gold/20 rounded-sm px-4 py-3">
            <p className="text-navy font-semibold text-sm">🗓 Limited slots in May 2026</p>
            <p className="text-navy/60 text-xs mt-1">Spring is peak season — early enquiries get priority dates.</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <p className="text-navy font-heading text-lg">How would you like to get in touch?</p>

            {/* Calendly link */}
            <a
              href="https://calendly.com/admin-parisaidatours/30min"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 p-4 bg-white border border-navy/10 rounded-sm hover:border-gold/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy/60 group-hover:text-gold transition-colors"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <p className="text-navy font-semibold text-sm">Book a free consultation</p>
                <p className="text-navy/50 text-xs">30 min · Zoom or WhatsApp · Free</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 p-4 bg-white border border-navy/10 rounded-sm hover:border-[#25D366]/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/10 transition-colors">
                <MessageCircle size={20} className="text-navy/60 group-hover:text-[#25D366] transition-colors" />
              </div>
              <div>
                <p className="text-navy font-semibold text-sm">WhatsApp Aida directly</p>
                <p className="text-navy/50 text-xs">Usually replies within the hour</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={emailUrl}
              className="flex items-center gap-4 p-4 bg-white border border-navy/10 rounded-sm hover:border-gold/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy/60 group-hover:text-gold transition-colors"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p className="text-navy font-semibold text-sm">Send an email</p>
                <p className="text-navy/50 text-xs">admin@parisaidatours.com</p>
              </div>
            </a>
          </div>

          {/* Trust */}
          <div className="border-t border-navy/5 pt-4 space-y-2">
            <p className="text-navy/40 text-xs text-center">✓ Free consultation · No payment until confirmed</p>
            <p className="text-navy/40 text-xs text-center">✓ State-licensed guide · 8+ years experience</p>
          </div>
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
