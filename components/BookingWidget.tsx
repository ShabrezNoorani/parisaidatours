'use client';
import { useState, useEffect } from 'react';
import { Tour } from '@/lib/tours';
import { siteConfig } from '@/lib/site';

interface BookingWidgetProps {
  tour: Tour;
}

export default function BookingWidget({ tour }: BookingWidgetProps) {
  const [showMobileCalendar, setShowMobileCalendar] = useState(false);

  // BOKUN booking
  if (tour.bookingType === 'bokun' && tour.bokunButtonId && tour.bokunExperienceId) {
    const widgetUrl = `https://widgets.bokun.io/online-sales/${siteConfig.bokun.channelUUID}/experience-calendar/${tour.bokunExperienceId}?partialView=1`;

    return (
      <>
        {/* Desktop: Sticky sidebar card */}
        <div className="hidden lg:block sticky top-24">
          <div className="bg-white border border-navy/10 rounded-sm p-6 shadow-lg">
            <div className="text-center mb-4">
              {tour.originalPrice && (
                <span className="text-navy/40 text-sm line-through mr-2">
                  {tour.currency}{tour.originalPrice}
                </span>
              )}
              <span className="text-navy font-heading text-3xl font-semibold">
                {tour.currency}{tour.price}
              </span>
              <span className="text-navy/50 text-sm ml-1">/ person</span>
            </div>
            <button
              className="bokunButton btn-primary w-full text-center"
              id={tour.bokunButtonId}
              data-src={widgetUrl}
              data-testid="widget-book-button"
            >
              Book Now
            </button>
            <p className="text-center text-navy/40 text-xs mt-3">Free cancellation available</p>
          </div>
        </div>

        {/* Mobile: Fixed bottom bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-navy/10 p-4 z-30 flex items-center justify-between shadow-2xl">
          <div>
            <span className="text-navy font-heading text-2xl font-semibold">
              {tour.currency}{tour.price}
            </span>
            <span className="text-navy/50 text-sm ml-1">/ person</span>
          </div>
          <button
            onClick={() => setShowMobileCalendar(true)}
            className="btn-primary text-xs"
          >
            Book Now
          </button>
        </div>

        {/* Mobile: Inline Bokun calendar that appears when Book Now is tapped */}
        {showMobileCalendar && (
          <div className="lg:hidden mt-8 mb-32 border border-gold/20 rounded-sm p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-heading text-lg text-navy">Select a Date</h3>
              <button
                onClick={() => setShowMobileCalendar(false)}
                className="text-navy/40 hover:text-navy text-sm"
              >
                Close
              </button>
            </div>
            <button
              className="bokunButton btn-primary w-full text-center"
              id={`mobile_${tour.bokunButtonId}`}
              data-src={widgetUrl}
              data-testid="widget-book-button"
            >
              Select Date & Book
            </button>
          </div>
        )}
      </>
    );
  }

  // CALENDLY booking
  if (tour.bookingType === 'calendly') {
    return (
      <>
        {/* Desktop: Sticky sidebar */}
        <div className="hidden lg:block sticky top-24">
          <div className="bg-white border border-navy/10 rounded-sm p-6 shadow-lg">
            <div className="text-center mb-4">
              <span className="text-navy font-heading text-3xl font-semibold">
                {tour.currency}{tour.price}
              </span>
              <span className="text-navy/50 text-sm ml-1">/ person</span>
            </div>
            <p className="text-center text-navy/60 text-sm mb-4">
              This tour is customised for you. Book a free consultation to get started.
            </p>
            <div
              className="calendly-inline-widget"
              data-url={tour.calendlyUrl || siteConfig.calendly.baseUrl}
              style={{ minWidth: '280px', height: '400px' }}
            />
          </div>
        </div>

        {/* Mobile: Fixed bottom bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-navy/10 p-4 z-30 flex items-center justify-between shadow-2xl">
          <div>
            <span className="text-navy font-heading text-2xl font-semibold">
              From {tour.currency}{tour.price}
            </span>
          </div>
          <a
            href={tour.calendlyUrl || siteConfig.calendly.baseUrl}
            target="_blank"
            rel="noopener"
            className="btn-primary text-xs"
          >
            Book Consultation
          </a>
        </div>
      </>
    );
  }

  // ENQUIRE fallback
  return (
    <div className="hidden lg:block sticky top-24">
      <div className="bg-white border border-navy/10 rounded-sm p-6 shadow-lg text-center">
        <p className="text-navy/60 text-sm mb-4">
          Interested in this tour? Get in touch and we'll plan something perfect for you.
        </p>
        <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className="btn-whatsapp w-full block text-center">
          WhatsApp Us
        </a>
        <a href={`mailto:${siteConfig.contact.email}`} className="btn-outline w-full block text-center mt-3">
          Email Us
        </a>
      </div>
    </div>
  );
}
