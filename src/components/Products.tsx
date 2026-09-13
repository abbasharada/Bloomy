import { MessageCircle, Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { DRINKS, buildWhatsAppUrl, type DrinkProduct } from '@/data/bloomy';
import { useReveal } from '@/hooks/useReveal';
import { type Page } from '@/hooks/useRouter';

const accentMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  hibiscus: {
    bg: 'bg-ruby-50',
    text: 'text-ruby-700',
    border: 'border-ruby-200',
    badge: 'bg-ruby-700 text-white',
  },
  gold: {
    bg: 'bg-gold-50',
    text: 'text-gold-700',
    border: 'border-gold-200',
    badge: 'bg-gold-600 text-white',
  },
  ruby: {
    bg: 'bg-ruby-50',
    text: 'text-ruby-700',
    border: 'border-ruby-200',
    badge: 'bg-ruby-700 text-white',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    badge: 'bg-emerald-700 text-white',
  },
};

function DrinkCard({ drink, index }: { drink: DrinkProduct; index: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const [selectedSize, setSelectedSize] = useState(drink.sizes[0]);
  const accent = accentMap[drink.accentColor] ?? accentMap.hibiscus;

  const orderMessage = `Hello Bloomy Drinks! I would like to order ${drink.name} (${selectedSize}). Please confirm availability and price. Thank you!`;

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'revealed' : ''} group relative flex flex-col overflow-hidden rounded-3xl border border-stone-200/60 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-950/10`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
        {drink.badge && (
          <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-lg ${accent.badge}`}>
            {drink.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-4">
          <p className="text-sm font-medium text-white/90">{drink.tasteNotes}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-bold text-slate">{drink.name}</h3>
          {drink.hausaName && (
            <span className={`text-sm font-medium ${accent.text}`}>{drink.hausaName}</span>
          )}
        </div>
        <p className={`text-sm font-semibold ${accent.text}`}>{drink.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">{drink.description}</p>

        {/* Ingredients */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {drink.ingredients.map((ing) => (
            <span
              key={ing}
              className={`rounded-full ${accent.bg} ${accent.text} px-2.5 py-1 text-xs font-medium`}
            >
              {ing}
            </span>
          ))}
        </div>

        {/* Size selector */}
        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-400">Select Size</p>
          <div className="flex gap-2">
            {drink.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 rounded-lg border py-2 text-xs font-semibold transition-all ${
                  selectedSize === size
                    ? `${accent.border} ${accent.bg} ${accent.text}`
                    : 'border-stone-200 text-stone-500 hover:border-stone-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto pt-5">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-xs text-stone-400">From</span>
            <span className="font-display text-2xl font-bold text-slate">{drink.priceFrom}</span>
          </div>
          <a
            href={buildWhatsAppUrl(orderMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition-all hover:bg-emerald-700 hover:shadow-xl"
          >
            <MessageCircle className="h-4 w-4" />
            Order via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

interface ProductsProps {
  onNavigate?: (p: Page) => void;
  compact?: boolean;
}

export default function Products({ compact = false }: ProductsProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-surface py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-gold-400 to-emerald-600" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {!compact && (
          <div ref={ref} className={`reveal ${revealed ? 'revealed' : ''} mx-auto max-w-2xl text-center`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              <Plus className="h-3.5 w-3.5" /> Our Refreshing Menu
            </span>
            <h2 className="section-title mt-4">
              Crafted with Nature, <br className="hidden sm:block" />Served with Pride
            </h2>
            <p className="section-subtitle">
              Every bottle is handcrafted fresh with premium natural ingredients — no preservatives, no shortcuts.
              Just pure, authentic Naija flavour.
            </p>
          </div>
        )}

        {/* Grid */}
        <div className={`${compact ? '' : 'mt-14'} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          {DRINKS.map((drink, i) => (
            <DrinkCard key={drink.id} drink={drink} index={i} />
          ))}
        </div>

        {!compact && (
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-stone-500">Can't decide? Try our variety pack all six signature drinks.</p>
            <a
              href={buildWhatsAppUrl('Hello Bloomy Drinks! I would like to order a variety pack with all six signature drinks. Please share pricing. Thank you!')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Order Variety Pack
            </a>
          </div>
        )}
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-stone-400">
          {['Fresh Daily', 'No Preservatives', 'Hygienically Packaged', 'Chilled Delivery'].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-600" /> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
