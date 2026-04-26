import { blogPosts, getBlogBySlug } from '@/lib/blog';
import { getTourBySlug } from '@/lib/tours';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Clock, ArrowRight, ArrowLeft, CalendarCheck } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const relatedTour = post.relatedTourSlug ? getTourBySlug(post.relatedTourSlug) : null;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[360px]">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
        </div>
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-4xl mx-auto px-5 md:px-8 pb-12 w-full">
            <span className="inline-block text-gold font-body text-xs tracking-widest uppercase mb-3">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-cream max-w-3xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-cream/50 text-sm mt-4">
              <span>{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Article content */}
          <article className="lg:col-span-2">
            <div className="gold-line mb-8" />
            {/* Render HTML content */}
            <div
              className="prose-article"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {/* Back to blog */}
            <div className="mt-12 pt-8 border-t border-navy/10">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-navy/50 hover:text-navy transition-colors text-sm"
              >
                <ArrowLeft size={16} /> Back to Journal
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Related tour CTA */}
            {relatedTour && (
              <div className="sticky top-28">
                <div className="bg-white border border-navy/10 shadow-xl rounded-sm overflow-hidden mb-6">
                  <div className="bg-navy px-6 py-5">
                    <p className="text-gold/70 font-body text-xs tracking-widest uppercase mb-1">
                      Book This Experience
                    </p>
                    <h3 className="font-heading text-xl text-cream">
                      {relatedTour.shortTitle}
                    </h3>
                  </div>
                  <div className="p-6">
                    <img
                      src={relatedTour.image}
                      alt={relatedTour.shortTitle}
                      className="w-full h-40 object-cover rounded-sm mb-4"
                    />
                    <p className="text-navy/60 text-sm leading-relaxed mb-4">
                      {relatedTour.description}
                    </p>
                    {!relatedTour.hidePrice && (
                      <p className="text-navy font-heading text-2xl font-semibold mb-4">
                        {relatedTour.currency}{relatedTour.price}
                        <span className="text-navy/40 text-sm font-body ml-1">/ person</span>
                      </p>
                    )}
                    <Link
                      href={`/tours/${relatedTour.slug}`}
                      className="btn-primary w-full block text-center flex items-center justify-center gap-2"
                    >
                      <CalendarCheck size={16} />
                      {relatedTour.bookingType === 'bokun' ? 'Book Now' : 'Enquire & Book'}
                    </Link>
                  </div>
                </div>

                {/* About Aida */}
                <div className="bg-white border border-navy/10 rounded-sm p-6">
                  <div className="gold-line mb-4" />
                  <h4 className="font-heading text-lg text-navy mb-2">About Aida</h4>
                  <p className="text-navy/60 text-sm leading-relaxed mb-4">
                    French state-licensed guide with 8+ years of experience bringing Paris to life for visitors from around the world.
                  </p>
                  <Link href="/about" className="flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all">
                    Meet Aida <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
