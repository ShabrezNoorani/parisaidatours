import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy text-center px-5">
      <div>
        <h1 className="font-heading text-6xl md:text-8xl text-gold mb-4">404</h1>
        <p className="text-cream/60 text-lg mb-8">This page seems to have wandered off the path.</p>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
