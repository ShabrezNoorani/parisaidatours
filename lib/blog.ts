// BLOG BRAIN — all blog posts live here
// Change anything once → updates on blog listing + individual post pages

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  image: string;
  date: string;
  readTime: string;
  category: string;
  relatedTourSlug?: string;
  relatedTourTitle?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogs(): BlogPost[] {
  return blogPosts;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'visiting-notre-dame-may-2026',
    title: 'Visiting Notre-Dame in May 2026 — Everything You Need to Know',
    excerpt: 'Notre-Dame de Paris has reopened in all her glory. May 2026 is one of the best times to visit — here is your complete guide to making the most of it.',
    image: '/images/tours/notre-dame.jpg',
    date: 'May 2, 2026',
    readTime: '6 min read',
    category: 'Travel Tips',
    relatedTourSlug: 'notre-dame-interior',
    relatedTourTitle: 'Inside Notre-Dame with State Licensed Guide',
    seoTitle: 'Visiting Notre-Dame in May 2026 — Complete Guide | Paris Aida Tours',
    seoDescription: 'Planning to visit Notre-Dame de Paris in May 2026? Read our complete guide — opening hours, tips, what to see, and how to book a private guided tour.',
    content: `
      <p>Notre-Dame de Paris reopened to the world in December 2024 after five extraordinary years of restoration. In May 2026, she stands more breathtaking than ever — and spring is one of the finest times to experience her.</p>

      <h2>Why May Is Perfect for Notre-Dame</h2>
      <p>May brings long days, soft golden light, and fewer summer crowds than July or August. The cathedral's newly restored interior glows in the afternoon sun streaming through the rose windows, and the gardens of the Île de la Cité are in full bloom around her.</p>
      <p>Average temperatures in Paris in May sit comfortably between 12°C and 20°C — warm enough to walk the island before and after your visit, cool enough to fully enjoy the interior without the heat of peak summer.</p>

      <h2>What Was Restored</h2>
      <p>The restoration that followed the devastating April 2019 fire was one of the most ambitious cultural projects in modern French history. Over 2,000 craftspeople — stonecutters, glassmakers, carpenters — worked across five years to return the cathedral to life.</p>
      <p>The nave has been cleaned to a luminous pale stone that most living visitors had never seen before. The great organ, with its 8,000 pipes, has been fully restored and plays again. The spire, rebuilt using the original 19th-century designs by Viollet-le-Duc, has risen once more above the Paris skyline.</p>

      <h2>Practical Tips for May 2026</h2>
      <p><strong>Book in advance.</strong> Entry to Notre-Dame is free, but timed entry slots fill quickly — especially on weekends and public holidays. May 8th (Victory in Europe Day) and May 29th (Ascension) are national holidays and draw large crowds.</p>
      <p><strong>Arrive early.</strong> The first entry slots of the morning (opening time) offer the calmest, most atmospheric experience. Late afternoon light through the west rose window is also spectacular.</p>
      <p><strong>Go with a guide.</strong> The restored interior is magnificent, but without context it is easy to miss the stories layered into every stone, window, and chapel. A licensed guide transforms a visit into an experience.</p>

      <h2>Book a Private Guided Tour</h2>
      <p>Our Notre-Dame interior tour is led by Aida, a French state-licensed guide with 8+ years of experience and a deep personal connection to the cathedral's history. Groups are limited to 5 people — truly private, available in English and French.</p>
    `,
  },
  {
    slug: 'louvre-without-crowds-guide',
    title: 'How to Experience the Louvre Without the Crowds in 2026',
    excerpt: 'The Louvre sees over 9 million visitors a year. Here is how to see the Mona Lisa, Venus de Milo, and the greatest collection in the world — without the overwhelm.',
    image: '/images/tours/louvre.jpg',
    date: 'April 18, 2026',
    readTime: '7 min read',
    category: 'Insider Tips',
    relatedTourSlug: 'louvre-express',
    relatedTourTitle: 'Louvre Express — Private Tour',
    seoTitle: 'How to Visit the Louvre Without Crowds in 2026 | Paris Aida Tours',
    seoDescription: 'Avoid the Louvre crowds in 2026. Insider tips on timing, entry, and what to prioritise — plus how a private guided tour transforms the experience.',
    content: `
      <p>Nine million visitors a year. Thirty-five thousand works of art. Seventy-two thousand square metres of galleries. The Louvre is one of the greatest institutions humanity has ever built — and one of the most overwhelming to navigate alone.</p>

      <h2>The Problem With the Louvre</h2>
      <p>Most visitors follow the same path: they queue at the Pyramid, pick up a map, search for the Mona Lisa, find themselves in a crowd fifteen deep, take a photo of a tiny painting surrounded by phone screens, and leave feeling oddly empty. They saw the Louvre. They didn't experience it.</p>

      <h2>The Best Times to Visit in 2026</h2>
      <p><strong>Wednesday and Friday evenings</strong> are the Louvre's hidden secret — the museum stays open until 9:45pm, and crowds thin dramatically after 6pm. The galleries take on an entirely different quality in the evening light.</p>
      <p><strong>First thing in the morning</strong> on Tuesday, Thursday, or Saturday gives you the best of the daytime experience. Arrive at opening time and head directly to the Denon wing — you can reach the Winged Victory and the Mona Lisa room before the tour groups descend.</p>
      <p><strong>Avoid Sundays, Wednesdays, and school holidays</strong> if crowd-aversion is your priority. The Louvre is free for under-18s and EU residents under 26, which draws large school groups on these days.</p>

      <h2>What to Prioritise</h2>
      <p>You cannot see the entire Louvre in a day. Do not try. Instead, choose a wing and a theme. The Denon wing holds the Italian and French masterpieces — Mona Lisa, The Wedding at Cana, Caravaggio. The Sully wing holds the medieval Louvre foundations and Egyptian antiquities. The Richelieu wing is often the quietest and holds extraordinary Flemish and Dutch painting.</p>

      <h2>Why a Guide Changes Everything</h2>
      <p>A private licensed guide doesn't just point at paintings — she gives you a strategic route, context that makes the art come alive, and the ability to ask questions freely. Our Louvre Express tour covers the absolute highlights in 2 focused hours: Mona Lisa, Winged Victory, Venus de Milo, and the Galerie d'Apollon — without a wasted step.</p>
    `,
  },
  {
    slug: 'montmartre-hidden-secrets',
    title: 'Montmartre Beyond Sacré-Cœur — The Hidden Village Paris',
    excerpt: 'Most visitors only see Sacré-Cœur. The real Montmartre — vineyards, secret staircases, artist studios — is a ten-minute walk away and almost entirely undiscovered.',
    image: '/images/tours/montmartre.jpg',
    date: 'April 5, 2026',
    readTime: '5 min read',
    category: 'Neighbourhood Guides',
    relatedTourSlug: 'montmartre-private',
    relatedTourTitle: 'Private Montmartre Tour',
    seoTitle: 'Montmartre Hidden Secrets — Beyond Sacré-Cœur | Paris Aida Tours',
    seoDescription: 'Discover the real Montmartre. Hidden vineyards, secret staircases, and the streets where Picasso and Van Gogh once lived — a guide by a local Paris expert.',
    content: `
      <p>Every day, thousands of visitors climb the steps to Sacré-Cœur, take their photographs of the white dome and the Paris panorama spread below, and then descend again — having seen almost none of the real Montmartre.</p>

      <h2>The Village Above the City</h2>
      <p>Montmartre was not absorbed into Paris until 1860. Before that it was a separate village — rural, bohemian, and fiercely independent. That village spirit never entirely left. The cobblestone lanes behind the basilica still feel more like a provincial town than the capital of France.</p>
      <p>The area that gave birth to Impressionism, Cubism, and the cancan — where Picasso painted Les Demoiselles d'Avignon, where Van Gogh lived with his brother Theo, where Toulouse-Lautrec captured the nightlife of the Moulin Rouge — is largely unchanged in its bones.</p>

      <h2>The Vineyard</h2>
      <p>Most Parisians have never visited it. The Clos Montmartre — tucked behind the Musée de Montmartre on Rue des Saules — is the last working vineyard within the city of Paris. Its 2,000 vines produce around 800 bottles a year, auctioned each October at a famous harvest festival.</p>
      <p>The vineyard is best seen with a guide who can explain its history and place it in the context of the neighbourhood around it.</p>

      <h2>The Secret Staircases</h2>
      <p>Montmartre is built on a hill, and over the centuries the neighbourhood developed a network of outdoor staircases, hidden passages, and winding lanes that most visitors never find. Some offer views that rival or surpass the official viewpoints. None appear on standard tourist maps.</p>

      <h2>The Artist Studios</h2>
      <p>The Bateau-Lavoir — a ramshackle building on Place Émile Goudeau — was home to Picasso, Modigliani, and Apollinaire in the early 20th century. It was here that Cubism was born. The building still stands, still used by artists, and is completely unmarked on most visitor maps.</p>

      <h2>Come With a Local</h2>
      <p>Our private Montmartre tour takes you through all of this — the vineyard, the secret staircases, the artist studios, the quietest squares — at your pace, with your family only. No strangers, no group, no rushing.</p>
    `,
  },
  {
    slug: 'ile-de-la-cite-heart-of-paris',
    title: 'Île de la Cité — The Island Where Paris Was Born',
    excerpt: 'Two thousand years of history on an island smaller than a village. The Île de la Cité is the beating heart of Paris — and most visitors barely scratch its surface.',
    image: '/images/tours/ile-de-la-cite.jpg',
    date: 'March 22, 2026',
    readTime: '5 min read',
    category: 'History',
    relatedTourSlug: 'ile-de-la-cite',
    relatedTourTitle: 'Île de la Cité Walking Tour',
    seoTitle: 'Île de la Cité — The Heart of Paris | Paris Aida Tours',
    seoDescription: 'Discover the Île de la Cité — where Paris was born 2,000 years ago. Sainte-Chapelle, the Conciergerie, Notre-Dame, and the hidden stories of the island.',
    content: `
      <p>If Paris has a beating heart, it is the Île de la Cité — a teardrop-shaped island in the Seine, smaller than many city blocks, that has been the centre of French civilisation for over two thousand years.</p>

      <h2>Where It All Began</h2>
      <p>Around 250 BC, a Celtic tribe called the Parisii settled on the island, drawn by its natural defences and its position on the river trade route. The Romans conquered them in 52 BC, built their own city on top, and called it Lutetia. The island has been continuously inhabited ever since.</p>
      <p>By the Middle Ages it was the most densely populated place in Europe — tens of thousands of people crammed onto an island barely 600 metres wide. The medieval city was eventually cleared by Baron Haussmann in the 19th century to make way for the grand administrative buildings that stand today.</p>

      <h2>Sainte-Chapelle</h2>
      <p>Built by Louis IX between 1242 and 1248, Sainte-Chapelle is one of the supreme achievements of Gothic architecture. Its upper chapel is almost entirely made of glass — 1,113 panels of 13th-century stained glass telling the story of the Bible in light and colour. It was built to house a fragment of the Crown of Thorns, which Louis had purchased for three times the cost of the chapel's construction.</p>

      <h2>The Conciergerie</h2>
      <p>Once a royal palace, later a prison, the Conciergerie is where Marie Antoinette spent her final months before her execution in 1793. Her cell has been preserved. The building's medieval halls — the largest surviving example of secular medieval architecture in France — are extraordinary.</p>

      <h2>The Flower Market</h2>
      <p>The Marché aux Fleurs on Place Louis Lépine has been selling flowers on the island since 1808. On Sundays it becomes a bird market. It is one of the most Parisian things in Paris — and almost no tourists ever find it.</p>
    `,
  },
  {
    slug: 'paris-in-may-2026-guide',
    title: 'Paris in May 2026 — The Complete Visitor Guide',
    excerpt: 'May is arguably the finest month to visit Paris. Long days, blooming chestnuts, café terraces full of life, and the city at its most beautiful. Here is everything you need to know.',
    image: '/images/hero-paris.jpg',
    date: 'May 10, 2026',
    readTime: '8 min read',
    category: 'Travel Tips',
    seoTitle: 'Paris in May 2026 — Complete Visitor Guide | Paris Aida Tours',
    seoDescription: 'Everything you need to know about visiting Paris in May 2026. Weather, events, tips, what to see, and how to make the most of spring in the most beautiful city in the world.',
    content: `
      <p>May is, by many measures, the best month to visit Paris. The horse-chestnut trees on the Champs-Élysées are in full white bloom. The terraces of the city's ten thousand cafés are alive from morning to late evening. The light is long and golden. And the city has not yet reached the frenetic pace of the high summer season.</p>

      <h2>Weather in May</h2>
      <p>May in Paris is reliably pleasant. Average daytime temperatures range from 14°C to 20°C, with longer warm stretches increasingly common. Rain is possible — this is northern France — but showers tend to be short and are as often as not followed by brilliant sunshine. Pack a light jacket and a compact umbrella and you will be fine.</p>
      <p>The days are long: sunrise by 6:15am and sunset after 9pm by the end of the month. This gives you extraordinary value from your time — long evenings to walk the Seine, explore Montmartre, or sit on a terrace as the city glows in the last light.</p>

      <h2>Key Dates in May 2026</h2>
      <p><strong>May 1 — Fête du Travail (Labour Day).</strong> A national holiday. Most shops are closed but museums are open. Lily of the valley (muguet) is sold on every corner — a beautiful Parisian tradition.</p>
      <p><strong>May 8 — Victory in Europe Day.</strong> Another national holiday. Ceremonies at the Arc de Triomphe in the morning.</p>
      <p><strong>Mid-May — French Open (Roland Garros).</strong> One of the four Grand Slam tennis tournaments begins in the last week of May, bringing a festive atmosphere to the 16th arrondissement.</p>
      <p><strong>May 29 — Ascension.</strong> Public holiday. A good day to visit quieter monuments and avoid busy commercial areas.</p>

      <h2>What to See in May</h2>
      <p><strong>Notre-Dame de Paris.</strong> Now fully restored and more magnificent than most living visitors have ever seen her. May's soft light through the rose windows is extraordinary. Book a private guided tour to understand the restoration story fully.</p>
      <p><strong>Versailles gardens.</strong> The fountains at Versailles run on weekend afternoons in May, with musical accompaniment — the Grandes Eaux Musicales. The gardens in spring are at their absolute finest.</p>
      <p><strong>Montmartre.</strong> The wisteria that climbs the walls of the Musée de Montmartre is in full bloom in May. The vineyards are green. The light on the white dome of Sacré-Cœur at dusk is unlike anything else in Europe.</p>
      <p><strong>The Seine at sunset.</strong> Take a walk from the Pont de la Tournelle to the Pont des Arts as the sun sets — golden light on the water, Notre-Dame to your left, the Left Bank to your right. This is Paris at its most Paris.</p>

      <h2>Practical Tips</h2>
      <p>Book popular attractions in advance — Notre-Dame, Versailles, and the Louvre all require timed entry tickets that sell out days ahead in May. If you plan to visit with a private guide, your guide will often handle access as part of the tour.</p>
      <p>The Paris Métro is your friend. A carnet of 10 tickets (or a Navigo Easy card loaded with tickets) covers any journey for a flat fare. Taxis and Uber are plentiful but traffic in central Paris in May can be slow.</p>
      <p>Reserve restaurants for dinner. The best neighbourhood bistros in the Marais, Saint-Germain, and Montmartre fill up on warm May evenings. A reservation made a day or two in advance is usually sufficient — unlike August, when the entire city books out.</p>

      <h2>Book a Tour With Aida</h2>
      <p>May is one of our busiest months. If you are planning a private guided tour — Notre-Dame, the Louvre, Montmartre, or a full day at Versailles — we recommend booking as early as possible to secure your preferred date and time.</p>
    `,
  },
  {
    slug: 'versailles-complete-guide-2026',
    title: 'Versailles in 2026 — How to Visit the Palace Like a Guest, Not a Tourist',
    excerpt: 'Versailles receives 15 million visitors a year. Here is how to experience the Hall of Mirrors, the Royal Apartments, and Marie Antoinette\'s estate as they were meant to be seen.',
    image: '/images/tours/versailles.jpg',
    date: 'March 10, 2026',
    readTime: '7 min read',
    category: 'Day Trips',
    relatedTourSlug: 'versailles-private',
    relatedTourTitle: 'Versailles Private Tour',
    seoTitle: 'How to Visit Versailles in 2026 | Paris Aida Tours',
    seoDescription: 'The complete guide to visiting Versailles in 2026 — how to avoid crowds, what to see, and why a private guided tour transforms the experience entirely.',
    content: `
      <p>Fifteen million visitors a year. Versailles is the most visited monument in France and one of the most visited in the world. And yet, somehow, most of those visitors leave feeling slightly disappointed — having seen the rooms but missed the story.</p>

      <h2>The Scale of Versailles</h2>
      <p>The Palace of Versailles covers 63,154 square metres of floor space. The gardens extend over 800 hectares. There are 2,300 rooms, 67 staircases, and over 6,000 paintings. A visitor walking every open gallery at a brisk pace without stopping would take the better part of a day.</p>
      <p>The key is not to try to see everything. The key is to see the right things, with someone who can explain why they matter.</p>

      <h2>The Hall of Mirrors</h2>
      <p>The Grande Galerie — the Hall of Mirrors — is one of the supreme interiors in Western architecture. Built between 1678 and 1686, it stretches 73 metres along the western façade of the palace. Seventeen arched windows face the gardens; opposite each, a mirrored arch reflects both the gardens and the painted ceiling above.</p>
      <p>The ceiling paintings by Charles Le Brun depict the military victories of Louis XIV. The hall was the scene of the proclamation of the German Empire in 1871 and the signing of the Treaty of Versailles in 1919. It is, in the truest sense, a room where history happened.</p>

      <h2>The Royal Apartments</h2>
      <p>The King's and Queen's State Apartments are among the most lavishly decorated rooms in Europe. Each room in the King's Apartment is dedicated to a planet — the Salon of Venus, the Salon of Diana, the Salon of Mars, the Salon of Apollo — and was used for specific court rituals that structured every hour of Louis XIV's public day.</p>

      <h2>Marie Antoinette's Private Estate</h2>
      <p>The Petit Trianon and the Hameau de la Reine — Marie Antoinette's private retreat within the Versailles gardens — are far less visited than the main palace and far more intimate. The Hameau is a working model farm the Queen had built to escape court life, complete with a dairy, a mill, and a lake. It is one of the strangest and most fascinating places in France.</p>

      <h2>Getting There From Paris</h2>
      <p>The RER C train runs from central Paris (Saint-Michel–Notre-Dame, Invalides, Champ de Mars–Tour Eiffel) to Versailles-Château-Rive Gauche station in approximately 40 minutes. Our Versailles tour includes transport coordination — we arrange the logistics so you simply enjoy the journey.</p>
    `,
  },
];
