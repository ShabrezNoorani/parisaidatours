import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { Mail, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/70">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt={siteConfig.name} className="h-16 w-auto mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}. Private tours led by Aida, a state-licensed guide with 8+ years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-heading text-xl mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              {['Tours', 'About', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm hover:text-gold transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-heading text-xl mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={16} /> {siteConfig.contact.email}
              </a>
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={16} /> {siteConfig.contact.phoneDisplay}
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Licensed Tour Guide — Paris, France</p>
        </div>
      </div>
    </footer>
  );
}
