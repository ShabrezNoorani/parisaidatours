import Link from 'next/link';
import { Tour } from '@/lib/tours';
import { Clock, Users, CalendarCheck, MessageCircle } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const isBookable = tour.bookingType === 'bokun';
  const isCalendly = tour.bookingType === 'calendly';

  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-navy/5 flex flex-col">
      {/* Image */}
      <Link href={`/tours/${tour.slug}`} className="block relative h-56 overflow-hidden flex-shrink-0">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Badge */}
        {tour.badge && (
          <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-body font-semibold px-3 py-1 uppercase tracking-wider">
            {tour.badge}
          </span>
        )}
        {/* Price tag — only show if not hidePrice */}
        {!tour.hidePrice && (
          <div className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur-sm px-4 py-2">
            {tour.originalPrice && (
              <span className="text-cream/50 text-xs line-through mr-2">
                {tour.currency}{tour.originalPrice}
              </span>
            )}
            <span className="text-gold font-heading text-xl font-semibold">
              {tour.currency}{tour.price}
            </span>
            <span className="text-cream/60 text-xs ml-1">/ person</span>
          </div>
        )}
        {/* "Enquire for price" badge for no-price tours */}
        {tour.hidePrice && (
          <div className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur-sm px-4 py-2">
            <span className="text-gold font-body text-xs tracking-wider uppercase">Enquire for Price</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/tours/${tour.slug}`}>
          <h3 className="font-heading text-xl text-navy group-hover:text-gold transition-colors duration-300 mb-2">
            {tour.shortTitle}
          </h3>
        </Link>
        <p className="text-navy/60 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {tour.description}
        </p>
        <div className="flex items-center gap-4 text-navy/40 text-xs mb-5">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} /> {tour.groupSize}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-auto">
          {/* Primary CTA */}
          {isBookable ? (
            <Link
              href={`/tours/${tour.slug}`}
              className="btn-primary flex-1 text-center text-xs flex items-center justify-center gap-2"
            >
              <CalendarCheck size={15} />
              Book Now
            </Link>
          ) : (
            <a
              href="https://calendly.com/admin-parisaidatours/30min"
              target="_blank"
              rel="noopener"
              className="btn-primary flex-1 text-center text-xs flex items-center justify-center gap-2"
            >
              <CalendarCheck size={15} />
              Enquire &amp; Book
            </a>
          )}

          {/* Secondary — always show "Learn More" */}
          <Link
            href={`/tours/${tour.slug}`}
            className="btn-outline flex-1 text-center text-xs flex items-center justify-center gap-2"
          >
            Learn More
          </Link>
        </div>

        {/* WhatsApp nudge for Calendly tours */}
        {isCalendly && (
          <a
            href="https://wa.me/33745562718"
            target="_blank"
            rel="noopener"
            className="mt-3 flex items-center justify-center gap-2 text-xs text-navy/40 hover:text-[#25D366] transition-colors"
          >
            <MessageCircle size={13} />
            Or WhatsApp us for a custom quote
          </a>
        )}
      </div>
    </div>
  );
}
