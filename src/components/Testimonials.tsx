import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/bloomy';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-gold-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-[15%] h-48 w-48 rounded-full bg-brand-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-700">
            <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" /> Customer Reviews
          </span>
          <h2 className="section-title mt-4">Loved Across Kano</h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear what our customers have to say.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${revealed ? 'revealed' : ''} mt-12`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-brand-950/8">
            <div className="pointer-events-none absolute right-8 top-6 text-brand-100">
              <Quote className="h-20 w-20" />
            </div>

            <div className="relative p-8 sm:p-12">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === current
                      ? 'block opacity-100'
                      : 'pointer-events-none absolute inset-0 hidden opacity-0'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="h-5 w-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="mt-5 font-display text-lg leading-relaxed text-stone-700 sm:text-xl">
                    "{t.text}"
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 font-display text-lg font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate">{t.name}</p>
                      <p className="text-sm text-stone-400">{t.location}</p>
                      {t.event && (
                        <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                          {t.event}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-brand-500' : 'w-2 bg-brand-200 hover:bg-brand-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-600 transition-all hover:bg-brand-50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-600 transition-all hover:bg-brand-50"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
