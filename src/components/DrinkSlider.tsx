import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { DRINKS, buildWhatsAppUrl } from '@/data/bloomy';

export default function DrinkSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % DRINKS.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + DRINKS.length) % DRINKS.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const drink = DRINKS[current];

  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-950/20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="relative aspect-[16/10] sm:aspect-[16/8] lg:aspect-[16/7]">
        {DRINKS.map((d, i) => (
          <div
            key={d.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={d.image} alt={d.name} className="h-full w-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/30 to-transparent" />
          </div>
        ))}

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 sm:p-10 lg:p-12">
            <div className="max-w-lg">
              {drink.badge && (
                <span className="mb-3 inline-block rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-slate">
                  {drink.badge}
                </span>
              )}
              <h3 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-shadow-lg">
                {drink.name}
              </h3>
              <p className="mt-1 text-lg font-medium text-gold-300">{drink.tagline}</p>
              <p className="mt-3 hidden max-w-md text-sm leading-relaxed text-white/80 sm:block">
                {drink.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <a
                  href={buildWhatsAppUrl(`Hello Bloomy Drinks! I would like to order ${drink.name}. Please confirm availability and price.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-600 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order via WhatsApp
                </a>
                <span className="font-display text-2xl font-bold text-white">From {drink.priceFrom}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label="Previous drink"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label="Next drink"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 right-6 flex gap-2">
        {DRINKS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-gold-400' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to drink ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
