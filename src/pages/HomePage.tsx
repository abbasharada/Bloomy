import Hero from '@/components/Hero';
import DrinkSlider from '@/components/DrinkSlider';
import Catering from '@/components/Catering';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import { useReveal } from '@/hooks/useReveal';
import { type Page } from '@/hooks/useRouter';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (p: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <>
      <Hero onNavigate={onNavigate} />

      {/* Drink slider section */}
      <section className="bg-brand-950 pb-20 pt-4 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-300">
              Signature Drinks
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Swipe Through Our Menu
            </h2>
          </div>
          <DrinkSlider />
        </div>
      </section>

      <Catering onNavigate={onNavigate} />
      <TrustBadges />
      <Testimonials />

      {/* CTA band */}
      <section ref={ref} className={`reveal ${revealed ? 'revealed' : ''} bg-gradient-to-r from-brand-600 to-brand-800 py-16 text-center text-white`}>
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Ready to Taste the Bloomy Difference?
          </h2>
          <p className="mt-3 text-white/80">
            Order now or book catering for your next event. Fast delivery across Kano.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button onClick={() => onNavigate('menu')} className="btn-gold group">
              View Full Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate('events')}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            >
              Book Event Catering
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
