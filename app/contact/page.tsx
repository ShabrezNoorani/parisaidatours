import { siteConfig } from '@/lib/site';
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Paris Aida Tours. WhatsApp, email, or book a consultation directly.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 text-center">
        <div className="gold-line mx-auto mb-4" />
        <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">Get in Touch</h1>
        <p className="text-cream/60 max-w-xl mx-auto">
          Have a question or want to plan a custom tour? Reach out — Aida would love to hear from you.
        </p>
      </section>

      {/* Contact cards */}
      <section className="section-padding bg-cream pb-0">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener"
            className="bg-white p-8 border border-navy/5 hover:border-gold/30 transition-colors text-center group"
          >
            <MessageCircle size={32} className="text-[#25D366] mx-auto mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">WhatsApp</h3>
            <p className="text-navy/60 text-sm">Quick response — usually within the hour</p>
            <p className="text-gold font-body font-semibold text-sm mt-4">{siteConfig.contact.phoneDisplay}</p>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="bg-white p-8 border border-navy/5 hover:border-gold/30 transition-colors text-center group"
          >
            <Mail size={32} className="text-gold mx-auto mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">Email</h3>
            <p className="text-navy/60 text-sm">For detailed enquiries and group bookings</p>
            <p className="text-gold font-body font-semibold text-sm mt-4">{siteConfig.contact.email}</p>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="bg-white p-8 border border-navy/5 hover:border-gold/30 transition-colors text-center group"
          >
            <Phone size={32} className="text-gold mx-auto mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">Call</h3>
            <p className="text-navy/60 text-sm">Available during Paris business hours</p>
            <p className="text-gold font-body font-semibold text-sm mt-4">{siteConfig.contact.phoneDisplay}</p>
          </a>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener"
            className="bg-white p-8 border border-navy/5 hover:border-gold/30 transition-colors text-center group"
          >
            <Instagram size={32} className="text-gold mx-auto mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">Instagram</h3>
            <p className="text-navy/60 text-sm">See Paris through Aida's lens</p>
            <p className="text-gold font-body font-semibold text-sm mt-4">@paris.aida.tours</p>
          </a>
        </div>
      </section>

      {/* Calendly section */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3">
              Book Directly With Aida
            </h2>
            <p className="text-navy/60 max-w-lg mx-auto">
              Select a time for a free 30-minute consultation. We'll discuss your interests, group size, and build the perfect Paris experience for you.
            </p>
          </div>

          {/* Urgency nudge */}
          <div className="bg-gold/10 border border-gold/20 rounded-sm px-6 py-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-navy font-body font-semibold text-sm">
                🗓 Limited slots available in May 2026
              </p>
              <p className="text-navy/60 text-xs mt-0.5">
                Spring is our busiest season — early booking recommended
              </p>
            </div>
            <span className="text-gold font-body text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
              Free · No commitment
            </span>
          </div>

          {/* Calendly inline widget */}
          <div className="bg-white border border-navy/10 shadow-lg rounded-sm overflow-hidden">
            <div className="bg-navy px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-gold font-heading text-xl">Schedule a Consultation</p>
                <p className="text-cream/50 text-xs mt-0.5">30 minutes · Free · Zoom or WhatsApp</p>
              </div>
              <div className="text-right">
                <p className="text-cream/40 text-xs">Prefer to message?</p>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="text-[#25D366] text-xs font-semibold hover:underline"
                >
                  WhatsApp us →
                </a>
              </div>
            </div>
            <div
              className="calendly-inline-widget"
              data-url={`${siteConfig.calendly.baseUrl}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=C9A84C`}
              style={{ minWidth: '280px', height: '650px' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
