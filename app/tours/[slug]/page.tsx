import { tours, getTourBySlug, getRelatedTours } from '@/lib/tours';
import { siteConfig } from '@/lib/site';
import BookingWidget from '@/components/BookingWidget';
import TourCard from '@/components/TourCard';
import { Clock, Users, MapPin, Check } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: tour.title,
    description: tour.description,
  };
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const related = getRelatedTours(slug, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-5 md:px-8 pb-12 w-full">
            {tour.badge && (
              <span className="inline-block bg-gold text-navy text-xs font-body font-semibold px-3 py-1 uppercase tracking-wider mb-4">
                {tour.badge}
              </span>
            )}
            <h1 className="font-heading text-3xl md:text-5xl text-cream max-w-3xl">{tour.title}</h1>
            <div className="flex flex-wrap gap-6 mt-4 text-cream/60 text-sm">
              <span className="flex items-center gap-2"><Clock size={16} /> {tour.duration}</span>
              <span className="flex items-center gap-2"><Users size={16} /> {tour.groupSize}</span>
              <span className="flex items-center gap-2"><MapPin size={16} /> {tour.meetingPoint}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Booking Sidebar */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="gold-line mb-6" />
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-4">About This Tour</h2>
            <p className="text-navy/70 leading-relaxed mb-8">{tour.longDescription}</p>

            <h3 className="font-heading text-xl text-navy mb-4">Tour Highlights</h3>
            <ul className="space-y-3 mb-8">
              {tour.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-navy/70 text-sm">
                  <Check size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl text-navy mb-4">What&apos;s Included</h3>
            <ul className="space-y-2 mb-8">
              {tour.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-navy/70 text-sm">
                  <Check size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl text-navy mb-4">Meeting Point</h3>
            <p className="text-navy/70 text-sm flex items-center gap-2">
              <MapPin size={16} className="text-gold" /> {tour.meetingPoint}
            </p>
          </div>

          {/* Booking Widget */}
          <div>
            <BookingWidget tour={tour} />
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {related.length > 0 && (
        <section className="section-padding bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="gold-line mx-auto mb-4" />
              <h2 className="font-heading text-3xl text-navy">More Tours Like This</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="lg:hidden h-24" />
    </>
  );
}
