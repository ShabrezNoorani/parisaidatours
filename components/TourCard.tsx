// REUSABLE TOUR CARD — use this everywhere: homepage, tours page, blog, related tours.
// It reads from the tours brain. If you change price/badge/title there, it updates here.
import Link from 'next/link';
import { Tour } from '@/lib/tours';
import { Clock, Users } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Link href={`/tours/${tour.slug}`} className="group block">
      <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-navy/5">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
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
          {/* Price Tag */}
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
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-xl text-navy group-hover:text-gold transition-colors duration-300 mb-2">
            {tour.shortTitle}
          </h3>
          <p className="text-navy/60 text-sm leading-relaxed mb-4 line-clamp-2">
            {tour.description}
          </p>
          <div className="flex items-center gap-4 text-navy/40 text-xs">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {tour.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users size={14} /> {tour.groupSize}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
