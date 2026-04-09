'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/tours', label: 'Tours' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt={siteConfig.name} className="h-12 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream/80 hover:text-gold transition-colors duration-300 font-body text-sm tracking-wider uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/tours" className="btn-primary text-xs">
            Book a Tour
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-gold/10">
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-cream/80 hover:text-gold transition-colors font-body text-lg tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tours"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
