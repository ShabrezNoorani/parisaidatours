import { siteConfig } from '@/lib/site';
import Link from 'next/link';
import { Award, Heart, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Aida',
  description: 'Meet Aida — your state-licensed Paris tour guide with 8+ years of experience bringing the city to life.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 text-center">
        <div className="gold-line mx-auto mb-4" />
        <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">Meet Aida</h1>
        <p className="text-cream/60 max-w-xl mx-auto">
          Your state-licensed guide to the real Paris.
        </p>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img src="/images/aida-portrait.jpg" alt="Aida" className="w-full rounded-sm shadow-lg" />
          </div>
          <div>
            <div className="gold-line mb-4" />
            <h2 className="font-heading text-3xl text-navy mb-6">Bonjour, I'm Aida</h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              For over 8 years, I've been a French state-licensed tour guide, sharing the history, architecture, and hidden stories of Paris with visitors from all over the world.
            </p>
            <p className="text-navy/70 leading-relaxed mb-4">
              I believe the best way to experience Paris is through the eyes of someone who truly knows and loves the city. My tours are personal, intimate, and designed to give you memories — not just photos.
            </p>
            <p className="text-navy/70 leading-relaxed mb-8">
              Whether it's the gothic majesty of Notre-Dame, the artistic soul of Montmartre, or the royal splendour of Versailles, I'll take you beyond the surface and into the stories that make Paris the most fascinating city in the world.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, label: 'State Licensed', value: 'Official French Guide' },
                { icon: Clock, label: 'Experience', value: '8+ Years' },
                { icon: Heart, label: 'Tours Given', value: 'Hundreds' },
                { icon: MapPin, label: 'Based In', value: 'Paris, France' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white border border-navy/5">
                  <stat.icon size={24} className="text-gold mx-auto mb-2" />
                  <p className="text-navy font-body font-semibold text-sm">{stat.value}</p>
                  <p className="text-navy/40 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
            Let's Explore Paris Together
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn-primary">Browse Tours</Link>
            <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className="btn-whatsapp">WhatsApp Me</a>
          </div>
        </div>
      </section>
    </>
  );
}
