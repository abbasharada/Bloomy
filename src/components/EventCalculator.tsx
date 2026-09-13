import { useState } from 'react';
import { Users, CupSoda, Calculator, Send, Check } from 'lucide-react';
import { DRINKS, buildWhatsAppUrl } from '@/data/bloomy';

const PRICE_PER_BOTTLE: Record<string, number> = {
  '35cl': 500,
  '50cl': 700,
  '1 Litre': 1200,
};

const TIERS = [
  { min: 50, max: 100, discount: 0 },
  { min: 101, max: 250, discount: 0.05 },
  { min: 251, max: 500, discount: 0.1 },
  { min: 501, max: 1000, discount: 0.15 },
  { min: 1001, max: Infinity, discount: 0.2 },
];

function getDiscount(qty: number): number {
  const tier = TIERS.find((t) => qty >= t.min && qty <= t.max);
  return tier?.discount ?? 0.2;
}

function formatNaira(n: number): string {
  return '₦' + n.toLocaleString('en-NG');
}

export default function EventCalculator() {
  const [qty, setQty] = useState(100);
  const [drinkId, setDrinkId] = useState(DRINKS[0].id);
  const [bottleSize, setBottleSize] = useState('50cl');

  const drink = DRINKS.find((d) => d.id === drinkId) ?? DRINKS[0];
  const basePrice = PRICE_PER_BOTTLE[bottleSize] ?? 700;
  const discount = getDiscount(qty);
  const subtotal = basePrice * qty;
  const discountAmount = Math.round(subtotal * discount);
  const total = subtotal - discountAmount;

  const sliderMessage = `Hello Bloomy Drinks! I would like an event catering quote:\n\n*Drink:* ${drink.name}\n*Bottle Size:* ${bottleSize}\n*Quantity:* ${qty} bottles\n*Estimated Total:* ${formatNaira(total)}${discount > 0 ? ` (includes ${Math.round(discount * 100)}% bulk discount)` : ''}\n\nPlease confirm final pricing and availability. Thank you!`;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-brand-950/10">
      <div className="grid lg:grid-cols-5">
        {/* Left panel */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-brand-600 to-brand-900 p-8 text-white lg:col-span-2 lg:p-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-300">
            <Calculator className="h-3.5 w-3.5" /> Event Cost Estimator
          </span>
          <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight">
            Estimate Your Event Budget
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Drag the slider to select your guest count. Pick your drink and bottle size to get an
            instant estimate — bulk discounts apply automatically.
          </p>
          <div className="mt-6 space-y-2">
            {TIERS.map((tier) => (
              <div
                key={tier.min}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors ${
                  qty >= tier.min && qty <= tier.max
                    ? 'bg-gold-400/20 text-gold-200 font-bold'
                    : 'text-white/50'
                }`}
              >
                <span>
                  {tier.min}–{tier.max === Infinity ? '1000+' : tier.max} bottles
                </span>
                <span>{Math.round(tier.discount * 100)}% off</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel - calculator */}
        <div className="space-y-6 p-6 lg:col-span-3 lg:p-8">
          {/* Quantity slider */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
                <Users className="h-3.5 w-3.5" /> Number of Bottles
              </label>
              <span className="font-display text-lg font-bold text-brand-600">{qty}</span>
            </div>
            <input
              type="range"
              min="50"
              max="1000"
              step="10"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
            <div className="mt-1 flex justify-between text-[10px] text-stone-400">
              <span>50</span>
              <span>500</span>
              <span>1000+</span>
            </div>
          </div>

          {/* Drink selector */}
          <div>
            <label className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
              <CupSoda className="h-3.5 w-3.5" /> Select Drink
            </label>
            <div className="flex flex-wrap gap-2">
              {DRINKS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDrinkId(d.id)}
                  className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                    drinkId === d.id
                      ? 'border-brand-500 bg-brand-50 text-brand-600'
                      : 'border-stone-200 text-stone-500 hover:border-stone-300'
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* Bottle size */}
          <div>
            <label className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
              <CupSoda className="h-3.5 w-3.5" /> Bottle Size
            </label>
            <div className="flex gap-2">
              {['35cl', '50cl', '1 Litre'].map((size) => (
                <button
                  key={size}
                  onClick={() => setBottleSize(size)}
                  className={`flex-1 rounded-lg border py-2 text-xs font-semibold transition-all ${
                    bottleSize === size
                      ? 'border-brand-500 bg-brand-50 text-brand-600'
                      : 'border-stone-200 text-stone-500 hover:border-stone-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price breakdown */}
          <div className="rounded-2xl bg-surface p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-500">Base price × {qty}</span>
              <span className="font-medium text-slate">{formatNaira(subtotal)}</span>
            </div>
            {discount > 0 && (
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-emerald-600">
                  <Check className="h-3.5 w-3.5" /> Bulk discount ({Math.round(discount * 100)}%)
                </span>
                <span className="font-medium text-emerald-600">−{formatNaira(discountAmount)}</span>
              </div>
            )}
            <div className="mt-3 border-t border-stone-200 pt-3">
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-bold text-slate">Estimated Total</span>
                <span className="font-display text-2xl font-extrabold text-brand-600">
                  {formatNaira(total)}
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={buildWhatsAppUrl(sliderMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition-all hover:bg-emerald-700 hover:shadow-xl"
          >
            <Send className="h-4 w-4" /> Send Estimate to WhatsApp
          </a>
          <p className="text-center text-xs text-stone-400">
            Estimate only final pricing confirmed on WhatsApp. Delivery fees may apply.
          </p>
        </div>
      </div>
    </div>
  );
}
