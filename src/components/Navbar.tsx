import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE, PHONE_DISPLAY } from '@/data/bloomy';
import { NAV_ITEMS, type Page } from '@/hooks/useRouter';
import BrandLogo from '@/components/BrandLogo';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (p: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = currentPage === 'home';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || !isHome;

  const handleNav = (p: Page) => {
    onNavigate(p);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid ? 'glass shadow-md shadow-brand-950/5' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 transition-transform hover:scale-[1.03]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-brand-100 animate-logo-glow">
              <img src="/src/assets/logo.jpg" alt="Bloomy Drinks" className="h-8 w-8 rounded-full object-cover" />
            </span>
            <span className="flex flex-col leading-none">
              <span className={`font-display text-lg font-extrabold tracking-tight ${solid ? 'text-slate' : 'text-white'}`}>
                Bloomy Drinks
              </span>
              <span className={`text-[10px] font-medium tracking-wide ${solid ? 'text-stone-400' : 'text-white/70'}`}>
                bloomydrinks.ng
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => handleNav(item.page)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.page
                      ? solid
                        ? 'bg-brand-50 text-brand-600'
                        : 'bg-white/15 text-white'
                      : solid
                        ? 'text-stone-600 hover:bg-brand-50 hover:text-brand-600'
                        : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Phone */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+2348093938844"
              className={`flex items-center gap-1.5 text-sm font-medium ${solid ? 'text-stone-600' : 'text-white/85'}`}
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`rounded-lg p-2 lg:hidden ${solid ? 'text-slate' : 'text-white'}`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-brand-950/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between border-b border-brand-100 px-5 py-4">
              <span className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface ring-1 ring-brand-100">
                  <img src="/src/assets/bloomy-logo.svg" alt="Bloomy Drinks" className="h-7 w-7 rounded-full object-cover" />
                </span>
                <span className="font-display text-lg font-bold text-slate">Bloomy Drinks</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-lg p-2 text-stone-500 hover:bg-brand-50"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 px-4 py-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      currentPage === item.page
                        ? 'bg-brand-50 text-brand-600'
                        : 'text-stone-700 hover:bg-brand-50 hover:text-brand-600'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-auto px-4 pb-6">
              <a
                href="tel:+2348093938844"
                className="mb-3 flex items-center justify-center gap-2 rounded-full border-2 border-brand-200 py-3 text-sm font-bold text-brand-600"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
              <a
                href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full"
              >
                Order Now (WhatsApp)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
