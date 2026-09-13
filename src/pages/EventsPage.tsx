import PageHeader from '@/components/PageHeader';
import EventCalculator from '@/components/EventCalculator';
import BookingForm from '@/components/BookingForm';
import { useReveal } from '@/hooks/useReveal';
import {
  Heart,
  Baby,
  Sparkles,
  BookOpen,
  Building2,
  PartyPopper,
  CheckCircle2,
} from 'lucide-react';
import { CATERING_SERVICES } from '@/data/bloomy';

const ICONS: Record<string, typeof Heart> = {
  ring: Heart,
  baby: Baby,
  mosque: Sparkles,
  book: BookOpen,
  building: Building2,
  party: PartyPopper,
};

const PACKAGES = [
  {
    name: 'Intimate Package',
    hausaName: 'Karamin Taron',
    bottles: '50–100 bottles',
    features: ['Choice of 2 drinks', 'Standard bottles', 'Chilled delivery', 'Free setup'],
    price: 'From ₦25,000',
    popular: false,
  },
  {
    name: 'Celebration Package',
    hausaName: 'Taron Biki',
    bottles: '100–300 bottles',
    features: ['Choice of 4 drinks', 'Customised labels', 'Chilled delivery + setup', 'Dedicated coordinator'],
    price: 'From ₦55,000',
    popular: true,
  },
  {
    name: 'Grand Event Package',
    hausaName: 'Babban Taron',
    bottles: '300–1000+ bottles',
    features: ['All 6 signature drinks', 'Premium custom labels', 'On-site staff & setup', 'Priority delivery'],
    price: 'Custom Quote',
    popular: false,
  },
];

export default function EventsPage() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <>
      <PageHeader
        title="Event Catering Contracts"
        hausaSubtitle="Kwangilar Taronku"
        subtitle="Premium, natural refreshments for weddings, naming ceremonies, religious celebrations, graduations, corporate events and private parties across Kano."
      />

      {/* Service type cards */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">Events We Cater For</h2>
            <p className="section-subtitle">Every celebration deserves pure, natural refreshment.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATERING_SERVICES.map((service, i) => {
              const Icon = ICONS[service.icon] ?? Heart;
              return (
                <div
                  key={i}
                  className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-950/8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate">{service.title}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-brand-600">{service.hausaTitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-500">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">Catering Packages</h2>
            <p className="section-subtitle">Transparent pricing with automatic bulk discounts.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative overflow-hidden rounded-3xl border-2 p-7 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.popular
                    ? 'border-brand-500 bg-brand-50 shadow-xl shadow-brand-500/10'
                    : 'border-stone-200 bg-white shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-slate">{pkg.name}</h3>
                <p className="text-sm font-medium text-brand-600">{pkg.hausaName}</p>
                <p className="mt-4 font-display text-3xl font-extrabold text-slate">{pkg.price}</p>
                <p className="mt-1 text-sm text-stone-400">{pkg.bottles}</p>
                <ul className="mt-5 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section ref={ref} className={`reveal ${revealed ? 'revealed' : ''} bg-surface py-16 lg:py-24`}>
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="section-title">Estimate Your Event Cost</h2>
            <p className="section-subtitle">
              Use our interactive calculator to get an instant estimate. Adjust the slider, pick your drink,
              and send straight to WhatsApp.
            </p>
          </div>
          <EventCalculator />
        </div>
      </section>

      {/* Booking form */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="section-title">Event Booking Portal</h2>
            <p className="section-subtitle">
              Fill out the form below and we'll send your details straight to WhatsApp for fast confirmation.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
