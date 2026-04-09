import { siteConfig } from '@/lib/site';
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Paris Aida Tours. WhatsApp, email, or book a consultation.',
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

      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener"
            className="bg-white p-8 border border-navy/5 hover:border-gold/30 transition-colors group text-center"
          >
            <MessageCircle size={32} className="text-[#25D366] mx-auto mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">WhatsApp</h3>
            <p className="text-navy/60 text-sm">Quick response — usually within the hour</p>
            <p className="text-gold font-body font-semibold text-sm mt-4">{siteConfig.contact.phoneDisplay}</p>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="bg-white p-8 border border-navy/5 hover:border-gold/30 transition-colors group text-center"
          >
            <Mail size={32} className="text-gold mx-auto mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">Email</h3>
            <p className="text-navy/60 text-sm">For detailed enquiries and group bookings</p>
            <p className="text-gold font-body font-semibold text-sm mt-4">{siteConfig.contact.email}</p>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="bg-white p-8 border border-navy/5 hover:border-gold/30 transition-colors group text-center"
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
            className="bg-white p-8 border border-navy/5 hover:border-gold/30 transition-colors group text-center"
          >
            <Instagram size={32} className="text-gold mx-auto mb-4" />
            <h3 className="font-heading text-xl text-navy mb-2">Instagram</h3>
            <p className="text-navy/60 text-sm">See Paris through Aida's lens</p>
            <p className="text-gold font-body font-semibold text-sm mt-4">@aida.douja.hammami</p>
          </a>
        </div>
      </section>
    </>
  );
}
