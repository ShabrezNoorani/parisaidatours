import { getAllBlogs } from '@/lib/blog';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Journal — Paris Travel Tips & Guides',
  description: 'Expert Paris travel guides, insider tips, and neighbourhood stories from a state-licensed Paris guide. Notre-Dame, Louvre, Montmartre, Versailles and more.',
};

export default function BlogPage() {
  const posts = getAllBlogs();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 text-center">
        <div className="gold-line mx-auto mb-4" />
        <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">Journal</h1>
        <p className="text-cream/60 max-w-xl mx-auto">
          Insider guides, travel tips, and stories from a licensed Paris expert.
        </p>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-lg overflow-hidden border border-navy/5 hover:shadow-xl transition-shadow duration-500">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-body font-semibold px-3 py-1 uppercase tracking-wider">
                    Featured
                  </span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-gold font-body text-xs tracking-widest uppercase mb-3">
                    {featured.category}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-navy/60 text-sm leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-navy/40 text-xs mb-6">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={13} /> {featured.readTime}</span>
                  </div>
                  <span className="flex items-center gap-2 text-gold font-body text-sm font-semibold group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Rest of posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white border border-navy/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-navy/80 backdrop-blur-sm text-gold text-xs font-body px-3 py-1 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg text-navy mb-3 group-hover:text-gold transition-colors duration-300 flex-1">
                      {post.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-navy/40 text-xs pt-4 border-t border-navy/5">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
