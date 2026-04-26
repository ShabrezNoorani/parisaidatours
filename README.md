# Paris Aida Tours

## Changelog
- **Prompt 1** — Full project scaffold: Homepage, Tours, Tour Detail (with Bokun/Calendly booking), About, Contact, 404. Tour brain in lib/tours.ts, site config in lib/site.ts. Bokun and Calendly scripts load once globally via lazy strategy.
- **Prompt 2** — Added .gitignore (fixes 100MB GitHub push error). Fixed Bokun calendar URLs (experience-calendar not experience). Updated Bokun button IDs. Updated social media links (Instagram, Facebook, X, LinkedIn, TikTok, Google). Homepage now shows only 3 Bokun tours. Updated group sizes per tour.
- **Prompt 4** — Fixed Next.js 15 async params type error (params must be Promise).**Prompt 5** — Fixed Bokun drawer (page blur on desktop, inline on mobile above footer). Fixed Calendly URL. Fixed all 6 social media links. Lightened navy color. Fixed mobile fixed bottom bar.
Prompt 6 — Replaced Bokun popup with custom right-side drawer. Desktop: Book Now opens a panel that slides in from the right with Bokun calendar inside an iframe, rest of page blurs behind it. Mobile: fixed bottom bar + inline iframe calendar above More Tours section.
**Prompt 7** — Updated prices (Notre-Dame €139, Louvre €139, Montmartre €99). Calendly tours now hide price and show "Enquire for Price". Added Calendly URL to all 3 consultation tours. TourCard now shows "Book Now" CTA for Bokun tours and "Enquire & Book" (Calendly link) for consultation tours, plus WhatsApp nudge.
**Prompt 8** — Fixed TypeScript build error: added missing category and hidePrice fields back to Tour interface.
**Prompt 9** — Lightened navy color to #1B2E4F for a warmer, less harsh navy blue across hero and all navy backgrounds.
**Prompt 10** — Added full blog system (lib/blog.ts brain, /blog listing page, /blog/[slug] detail page). 6 blog posts written with SEO metadata, each linked to its tour. Fixed blur overlay color to #1A2A44. Added Calendly inline embed on mobile tour pages. Added prose-article CSS for beautiful blog typography.
**Prompt 11** — Fixed Calendly widget on consultation tour pages: removed €0 price display, added proper "Plan Your Tour" header, added urgency messaging (limited May slots), Calendly inline embed with gold accent color, WhatsApp fallback button. Fixed Calendly re-initialisation on mount.
**Prompt 12** — Added Calendly inline booking widget to contact page with urgency nudge, navy header, and WhatsApp fallback.
