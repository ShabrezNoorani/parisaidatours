// ALL TOURS PAGE with category filter
'use client';
import { useState } from 'react';
import { tours } from '@/lib/tours';
import TourCard from '@/components/TourCard';

export default function ToursPage() {
  const categories = ['All', ...Array.from(new Set(tours.map((t) => t.category)))];
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? tours : tours.filter((t) => t.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 text-center">
        <div className="gold-line mx-auto mb-4" />
        <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">Our Tours</h1>
        <p className="text-cream/60 max-w-xl mx-auto">
          From iconic monuments to hidden streets — find the perfect way to experience Paris.
        </p>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-sm tracking-wider uppercase px-5 py-2 transition-all duration-300 ${
                  active === cat
                    ? 'bg-gold text-navy'
                    : 'bg-white text-navy/60 border border-navy/10 hover:border-gold/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tour Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
