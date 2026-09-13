import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_DISPLAY, buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '@/data/bloomy';
import { NAV_ITEMS, type Page } from '@/hooks/useRouter';
import { DRINKS } from '@/data/bloomy';

interface FooterProps {
  onNavigate: (p: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-brand-950 text-white/70">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-gold-400 to-brand-500" />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">
                <img src="logo.jpg" alt="Bloomy Drinks" className="h-8 w-8 rounded-full object-cover" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-white">Bloomy Drinks</p>
                <p className="text-xs text-white/50">bloomydrinks.ng</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Naija roots. World-class taste. 100% natural, handcrafted local drinks
              made fresh in Kano, Nigeria.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, href: 'https://instagram.com/bloomydrinks.ng' },
                { Icon: Facebook, href: 'https://www.facebook.com/umaymah.tajuddeen' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-brand-400 hover:bg-brand-800 hover:text-white"
                  aria-label="Social media link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-sm transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Drinks */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Our Drinks</h3>
            <ul className="mt-4 space-y-2.5">
              {DRINKS.map((drink) => (
                <li key={drink.id}>
                  <button
                    onClick={() => onNavigate('menu')}
                    className="text-sm transition-colors hover:text-gold-300"
                  >
                    {drink.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-sm">Kano, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-sm transition-colors hover:text-gold-300">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <div className="text-sm">
                  <p>Mon – Sat: 8:00 AM – 8:00 PM</p>
                  <p>Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </li>
            </ul>
            <a
              href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-emerald-700"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Bloomy Drinks (bloomydrinks.ng). All rights reserved.
          </p>
          <p className="text-xs text-white/50">Made with love in Kano, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}