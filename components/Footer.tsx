import { siteConfig } from '@/lib/site';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  Star
} from 'lucide-react';

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

          {/* Contact & Social */}
          <div>
            <h4 className="text-gold font-heading text-xl mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={16} /> {siteConfig.contact.email}
              </a>
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={16} /> {siteConfig.contact.phoneDisplay}
              </a>
              
              <div className="pt-2">
                <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-3">Follow Us</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener"
                    className="text-cream/50 hover:text-gold transition-colors text-xs flex items-center gap-1">
                    <Instagram size={16} /> Instagram
                  </a>
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener"
                    className="text-cream/50 hover:text-gold transition-colors text-xs flex items-center gap-1">
                    <Facebook size={16} /> Facebook
                  </a>
                  <a href={siteConfig.social.twitter} target="_blank" rel="noopener"
                    className="text-cream/50 hover:text-gold transition-colors text-xs flex items-center gap-1">
                    <Twitter size={16} /> X / Twitter
                  </a>
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener"
                    className="text-cream/50 hover:text-gold transition-colors text-xs flex items-center gap-1">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a href={siteConfig.social.tiktok} target="_blank" rel="noopener"
                    className="text-cream/50 hover:text-gold transition-colors text-xs flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
                    TikTok
                  </a>
                  <a href={siteConfig.social.google} target="_blank" rel="noopener"
                    className="text-cream/50 hover:text-gold transition-colors text-xs flex items-center gap-1">
                    <Star size={16} /> Google Reviews
                  </a>
                </div>
              </div>
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
