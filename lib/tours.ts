// TOURS BRAIN — Single source of truth for every tour.
// Change a price, title, badge, or sale here → updates on every page, card, blog reference.
import { siteConfig } from './site';

export type BookingType = 'bokun' | 'calendly' | 'enquire';

export interface Tour {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number; // Set this to show a strikethrough sale price
  currency: string;
  image: string;
  highlights: string[];
  includes: string[];
  meetingPoint: string;
  bookingType: BookingType;
  bokunButtonId?: string;
  bokunExperienceId?: string;
  calendlyUrl?: string;
  featured: boolean;
  category: string;
  badge?: string; // e.g. "Best Seller", "New", "20% Off"
}

// Helper to get a tour by slug
export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

// Helper to get featured tours
export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured);
}

// Helper to get tours by category
export function getToursByCategory(category: string): Tour[] {
  return tours.filter((t) => t.category === category);
}

// Helper to get related tours (same category, excluding current)
export function getRelatedTours(slug: string, limit = 3): Tour[] {
  const current = getTourBySlug(slug);
  if (!current) return tours.slice(0, limit);
  return tours
    .filter((t) => t.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}

export const tours: Tour[] = [
  // ─── BOKUN TOURS (direct booking with calendar widget) ─────
  {
    slug: 'notre-dame-interior',
    title: 'Inside Notre-Dame with State Licensed Guide',
    shortTitle: 'Notre-Dame Interior',
    description: 'Step inside the newly reopened Notre-Dame Cathedral with a state-licensed guide. Available in French and English. Discover 860 years of history, architecture, and the incredible restoration.',
    longDescription: 'Experience the breathtaking interior of Notre-Dame de Paris, reopened after years of meticulous restoration following the 2019 fire. Your state-licensed guide Aida will walk you through the nave, explain the stunning rose windows, the medieval craftsmanship, and share the dramatic story of the cathedral\'s rescue and rebirth. This tour is available in French and English.',
    duration: '1.5 hours',
    groupSize: 'Max 5 people — truly private',
    price: 65,
    currency: '€',
    image: '/images/tours/notre-dame.jpg',
    highlights: [
      'Skip-the-line access to Notre-Dame interior',
      'Available in French and English',
      'State-licensed guide with 8+ years experience',
      'Stories of the 2019 fire and restoration',
      'The stunning rose windows explained',
      'Small group for a personal experience',
    ],
    includes: ['Licensed guide', 'Skip-the-line entry', 'Headsets for clear audio'],
    meetingPoint: 'Parvis Notre-Dame – Place Jean-Paul II',
    bookingType: 'bokun',
    bokunButtonId: 'bokun_d90f7fb1_2e7c_4665_9369_f9a430df4477',
    bokunExperienceId: '1180489',
    featured: true,
    category: 'Monuments',
    badge: 'Best Seller',
  },
  {
    slug: 'louvre-express',
    title: 'Louvre Express — Private Tour of the World\'s Greatest Museum',
    shortTitle: 'Louvre Express',
    description: 'See the Mona Lisa, Venus de Milo, and the crown jewels of the Louvre in a focused 2-hour private tour.',
    longDescription: 'The Louvre is overwhelming — 35,000 works across 72,735 square metres. This express private tour cuts through the noise. Aida takes you straight to the masterpieces: the Mona Lisa, Winged Victory, Venus de Milo, and the Galerie d\'Apollon. You leave feeling like you truly experienced the Louvre.',
    duration: '2 hours',
    groupSize: 'Max 6 people',
    price: 75,
    currency: '€',
    image: '/images/tours/louvre.jpg',
    highlights: [
      'See Mona Lisa, Venus de Milo, Winged Victory',
      'Strategic route — no wasted time',
      'Private licensed guide just for your group',
      'Stories behind the world\'s greatest art',
    ],
    includes: ['Licensed guide', 'Museum entry not included — book separately'],
    meetingPoint: 'Pyramid entrance, Cour Napoléon',
    bookingType: 'bokun',
    bokunButtonId: 'bokun_aea5e323_78f8_4f38_a533_a3590daca354',
    bokunExperienceId: '1188396',
    featured: true,
    category: 'Museums',
  },
  {
    slug: 'montmartre-private',
    title: 'Private Montmartre Tour — Hidden Streets, Artists & the Real Village Paris',
    shortTitle: 'Montmartre',
    description: 'Wander the cobblestone lanes of Montmartre with a local expert. Discover hidden vineyards, artist studios, and the bohemian soul of Paris.',
    longDescription: 'Montmartre is Paris at its most romantic and rebellious. Aida takes you beyond Sacré-Cœur into hidden lanes where Picasso, Modigliani, and Van Gogh once lived. Discover the last vineyard in Paris, secret staircases, and the story of how this hilltop became the birthplace of modern art.',
    duration: '2 hours',
    groupSize: 'Private — your family only',
    price: 60,
    currency: '€',
    image: '/images/tours/montmartre.jpg',
    highlights: [
      'Hidden streets tourists never find',
      'The last vineyard in Paris',
      'Sacré-Cœur and panoramic views',
      'Picasso, Van Gogh & bohemian history',
      'Local café recommendations included',
    ],
    includes: ['Licensed guide', 'Walking tour — comfortable shoes recommended'],
    meetingPoint: 'Métro Abbesses, exit stairs',
    bookingType: 'bokun',
    bokunButtonId: 'bokun_06b21202_ff3f_4b26_9e56_178e8f842880',
    bokunExperienceId: '1188388',
    featured: true,
    category: 'Walking Tours',
    badge: 'Popular',
  },

  // ─── CALENDLY TOURS (consultation/custom booking) ──────────
  {
    slug: 'ile-de-la-cite',
    title: 'Île de la Cité — The Heart of Paris Walking Tour',
    shortTitle: 'Île de la Cité',
    description: 'Explore the island where Paris was born. From Notre-Dame to Sainte-Chapelle, uncover 2,000 years of history on this intimate walking tour.',
    longDescription: 'The Île de la Cité is where Paris began over 2,000 years ago. On this private walking tour, Aida guides you through the island\'s layered history — from the Roman foundations to the medieval marvels of Sainte-Chapelle and the Conciergerie, to the flower market and hidden courtyards most visitors walk right past.',
    duration: '2 hours',
    groupSize: 'Up to 8 people',
    price: 55,
    currency: '€',
    image: '/images/tours/ile-de-la-cite.jpg',
    highlights: [
      'Where Paris was born — 2,000 years of history',
      'Sainte-Chapelle\'s stunning stained glass',
      'The Conciergerie and Marie Antoinette\'s cell',
      'Hidden courtyards and the flower market',
      'Perfect combined with Notre-Dame tour',
    ],
    includes: ['Licensed guide', 'Entry fees not included'],
    meetingPoint: 'Pont Neuf, statue of Henri IV',
    bookingType: 'calendly',
    calendlyUrl: 'https://calendly.com/admin-parisaidatours/30min',
    featured: false,
    category: 'Walking Tours',
  },
  {
    slug: 'walking-tours-paris',
    title: 'Custom Walking Tours in Paris',
    shortTitle: 'Walking Tours',
    description: 'Design your perfect Paris walk. Choose your neighbourhood, your pace, your interests — Aida builds the tour around you.',
    longDescription: 'Every visitor experiences Paris differently. This fully customisable walking tour lets you choose what matters to you — whether it\'s art, food, history, architecture, or hidden gems. Tell Aida your interests and she\'ll craft a route that feels personal, unhurried, and unforgettable.',
    duration: 'Flexible (2-4 hours)',
    groupSize: 'Up to 10 people',
    price: 70,
    currency: '€',
    image: '/images/tours/walking-paris.jpg',
    highlights: [
      'Fully customised to your interests',
      'Choose your neighbourhood and pace',
      'Perfect for families, couples, or solo travellers',
      'Local restaurant and café tips included',
      'Flexible timing and meeting point',
    ],
    includes: ['Licensed guide', 'Customised route planning'],
    meetingPoint: 'Flexible — agreed during consultation',
    bookingType: 'calendly',
    calendlyUrl: 'https://calendly.com/admin-parisaidatours/30min',
    featured: false,
    category: 'Walking Tours',
    badge: 'Custom',
  },
  {
    slug: 'versailles-private',
    title: 'Versailles — Palace, Gardens & Royal History',
    shortTitle: 'Versailles',
    description: 'A full-day private experience at the Palace of Versailles. Skip the crowds and explore the Hall of Mirrors, royal apartments, and the vast gardens with your own guide.',
    longDescription: 'Versailles is more than a palace — it\'s the story of absolute power, revolution, and breathtaking beauty. Aida takes you through the Hall of Mirrors, the King\'s and Queen\'s apartments, and out into the magnificent gardens. This is a full-day experience with transport coordination and a pace that lets you truly absorb the grandeur.',
    duration: 'Full day (5-6 hours)',
    groupSize: 'Up to 6 people',
    price: 150,
    currency: '€',
    image: '/images/tours/versailles.jpg',
    highlights: [
      'Hall of Mirrors and Royal Apartments',
      'The vast gardens and Grand Trianon',
      'Marie Antoinette\'s private estate',
      'Transport coordination from Paris',
      'Full-day experience with flexible pace',
    ],
    includes: ['Licensed guide', 'Transport coordination', 'Entry fees not included'],
    meetingPoint: 'Arranged during consultation',
    bookingType: 'calendly',
    calendlyUrl: 'https://calendly.com/admin-parisaidatours/30min',
    featured: true,
    category: 'Day Trips',
    badge: 'Premium',
  },
];
