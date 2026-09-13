import { ArrowRight, Calendar, Star, Leaf } from 'lucide-react';
import { type Page } from '@/hooks/useRouter';

const HERO_IMAGE =
  'https://images.pexels.com/photos/33284162/pexels-photo-33284162.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600';

interface HeroProps {
  onNavigate: (p: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-950">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Freshly poured ice-cold Zobo drink"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-brand-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/30" />
      </div>

      {/* Decorative floating elements */}
      <div className="pointer-events-none absolute right-[8%] top-[20%] hidden h-32 w-32 rounded-full bg-gold-400/20 blur-3xl lg:block" />
      <div className="pointer-events-none absolute right-[30%] top-[60%] hidden h-40 w-40 rounded-full bg-brand-400/20 blur-3xl lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-16 lg:px-8">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Leaf className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-white">100% Natural · Made Fresh in Kano, Nigeria</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-shadow-lg sm:text-5xl lg:text-7xl animate-fade-up">
            Naija Roots.
            <br />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 bg-clip-text text-transparent">
              World-Class Taste.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 text-shadow animate-fade-up sm:text-xl" style={{ animationDelay: '0.1s' }}>
            100% Natural, handcrafted Zobo, Ginger-Lemonade, Watermelon Refresh &amp; Nature's Tango 
            made fresh daily with premium natural ingredients in Kano, Nigeria.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <button onClick={() => onNavigate('menu')} className="btn-gold group">
              Explore Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate('events')}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <Calendar className="h-4 w-4" />
              Book Drinks for Event
            </button>
          </div>

          {/* Mini stats */}
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="mt-1 text-sm text-white/70">500+ Happy Customers</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <p className="font-display text-2xl font-bold text-white">6</p>
              <p className="text-sm text-white/70">Signature Drinks</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <p className="font-display text-2xl font-bold text-white">100%</p>
              <p className="text-sm text-white/70">Natural Ingredients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
