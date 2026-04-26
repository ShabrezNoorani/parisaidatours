# Paris Aida Tours

## Changelog
- **Prompt 1** — Full project scaffold: Homepage, Tours, Tour Detail (with Bokun/Calendly booking), About, Contact, 404. Tour brain in lib/tours.ts, site config in lib/site.ts. Bokun and Calendly scripts load once globally via lazy strategy.
- **Prompt 2** — Added .gitignore (fixes 100MB GitHub push error). Fixed Bokun calendar URLs (experience-calendar not experience). Updated Bokun button IDs. Updated social media links (Instagram, Facebook, X, LinkedIn, TikTok, Google). Homepage now shows only 3 Bokun tours. Updated group sizes per tour.
- **Prompt 4** — Fixed Next.js 15 async params type error (params must be Promise).**Prompt 5** — Fixed Bokun drawer (page blur on desktop, inline on mobile above footer). Fixed Calendly URL. Fixed all 6 social media links. Lightened navy color. Fixed mobile fixed bottom bar.
Prompt 6 — Replaced Bokun popup with custom right-side drawer. Desktop: Book Now opens a panel that slides in from the right with Bokun calendar inside an iframe, rest of page blurs behind it. Mobile: fixed bottom bar + inline iframe calendar above More Tours section.
