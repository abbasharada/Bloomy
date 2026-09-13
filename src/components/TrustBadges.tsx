import { Leaf, ShieldCheck, Truck, Heart } from 'lucide-react';
import { TRUST_BADGES } from '@/data/bloomy';
import { useReveal } from '@/hooks/useReveal';

const ICONS: Record<string, typeof Leaf> = {
  leaf: Leaf,
  shield: ShieldCheck,
  truck: Truck,
  heart: Heart,
};

export default function TrustBadges() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <Leaf className="h-3.5 w-3.5" /> Why Choose Bloomy?
          </span>
          <h2 className="section-title mt-4">The Bloomy Promise</h2>
          <p className="section-subtitle">
            We don't compromise on quality, hygiene, or taste. Here's what sets us apart.
          </p>
        </div>

        <div ref={ref} className={`reveal ${revealed ? 'revealed' : ''} mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {TRUST_BADGES.map((badge, i) => {
            const Icon = ICONS[badge.icon] ?? Leaf;
            return (
              <div
                key={badge.title}
                className="group flex flex-col items-center rounded-2xl bg-surface p-7 text-center shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-950/8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-700/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-base font-bold text-slate">{badge.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
