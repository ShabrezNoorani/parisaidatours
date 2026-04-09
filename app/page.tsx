import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { tours } from '@/lib/tours';
import TourCard from '@/components/TourCard';
import { Star, Shield, Heart, MapPin } from 'lucide-react';

export default function HomePage() {
  const featured = tours.filter((t) => t.bookingType === 'bokun');

  return (
    <>
      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background — replace with real image */}
        <div className="absolute inset-0 bg-navy">
          <img
            src="/images/hero-paris.jpg"
            alt="Paris skyline"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <div className="gold-line mx-auto mb-6" />
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream font-medium leading-tight mb-6">
            {siteConfig.tagline}
          </h1>
          <p className="font-body text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Private tours of Paris with Aida — a state-licensed guide with 8+ years of experience bringing the city's stories to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn-primary">
              Explore Our Tours
            </Link>
            <Link href="/contact" className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-navy">
              Plan Your Visit
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-12 bg-gold/40" />
        </div>
      </section>

      {/* ─── FEATURED TOURS ───────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-5xl text-navy mb-4">
              Our Tours
            </h2>
            <p className="text-navy/60 max-w-xl mx-auto">
              Each tour is led personally by Aida, ensuring an intimate and authentic experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/tours" className="btn-outline">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────── */}
      <section className="section-padding bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-5xl text-cream mb-4">
              Why Paris Aida Tours
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Licensed Guide', desc: 'French state-licensed with 8+ years of experience and deep local knowledge.' },
              { icon: Heart, title: 'Personal Touch', desc: 'Small groups and private tours mean you get a real connection, not a crowd.' },
              { icon: Star, title: '5-Star Reviews', desc: 'Hundreds of happy visitors who left Paris with stories, not just photos.' },
              { icon: MapPin, title: 'Hidden Paris', desc: 'Go beyond the guidebook — discover the streets, stories and secrets locals love.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl text-cream mb-2">{item.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="gold-line mb-4" />
            <h2 className="font-heading text-3xl md:text-5xl text-navy mb-6">
              Meet Aida
            </h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              Aida is a French state-licensed tour guide who has been sharing her love of Paris for over 8 years. Born and raised with a deep connection to the city's history and culture, she brings warmth, expertise, and a personal touch to every tour.
            </p>
            <p className="text-navy/70 leading-relaxed mb-4">
              Whether it's the soaring vaults of Notre-Dame, the hidden lanes of Montmartre, or the grandeur of Versailles — Aida doesn't just show you the sights. She tells you the stories that make Paris unforgettable.
            </p>
            <Link href="/about" className="btn-outline">
              Read More About Aida
            </Link>
          </div>
          <div className="relative">
            <img
              src="/images/aida-portrait.jpg"
              alt="Aida — Your Paris Guide"
              className="w-full rounded-sm shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-gold/30" />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────── */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-5xl text-navy mb-4">
              What Our Guests Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: 'Aida made Notre-Dame come alive with her stories. The best tour we\'ve ever taken in Europe!', name: 'Sarah M.', from: 'New York, USA' },
              { text: 'We booked the Montmartre tour and it was magical. Aida took us to places we would never have found on our own.', name: 'James & Lucy', from: 'London, UK' },
              { text: 'A truly personal and unforgettable experience. Aida\'s knowledge and warmth made our Paris trip special.', name: 'Takeshi H.', from: 'Tokyo, Japan' },
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 border border-navy/5">
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-navy/70 text-sm leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
                <div>
                  <p className="text-navy font-body font-semibold text-sm">{review.name}</p>
                  <p className="text-navy/40 text-xs">{review.from}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────── */}
      <section className="section-padding bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl text-cream mb-6">
            Ready to Discover the Real Paris?
          </h2>
          <p className="text-cream/60 mb-10">
            Let Aida show you the Paris that most visitors never see. Book your private tour today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn-primary">
              Browse Tours
            </Link>
            <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className="btn-whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
