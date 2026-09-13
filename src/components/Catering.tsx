import {
  Heart,
  Baby,
  Building2,
  BookOpen,
  PartyPopper,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { CATERING_SERVICES, buildWhatsAppUrl } from '@/data/bloomy';
import { useReveal } from '@/hooks/useReveal';
import { type Page } from '@/hooks/useRouter';

const ICONS: Record<string, typeof Heart> = {
  ring: Heart,
  baby: Baby,
  mosque: Sparkles,
  book: BookOpen,
  building: Building2,
  party: PartyPopper,
};

const CATERING_IMAGE =
  'https://images.pexels.com/photos/37939838/pexels-photo-37939838.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

const HIGHLIGHTS = [
  'Premium customised bottles with your event label',
  'Chilled setup & ice-cold delivery to your venue',
  'Bulk packages for 50–1000+ guests',
  'On-time delivery across Kano & surrounding areas',
];

interface CateringProps {
  onNavigate: (p: Page) => void;
}

export default function Catering({ onNavigate }: CateringProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const headerReveal = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[5%] bottom-[10%] h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div ref={headerReveal.ref} className={`reveal ${headerReveal.revealed ? 'revealed' : ''} mx-auto max-w-2xl text-center`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-300">
            <Sparkles className="h-3.5 w-3.5" /> Catering & Bulk Contracts
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Making Your Events Unforgettable
          </h2>
          <p className="mt-2 font-display text-lg font-medium text-gold-300">Amsar Kwangilar Taronku</p>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            From intimate gatherings to grand celebrations — premium, natural refreshments
            delivered ice-cold to your event across Kano.
          </p>
        </div>

        {/* Image + highlights */}
        <div ref={ref} className={`reveal ${revealed ? 'revealed' : ''} mt-14 grid items-center gap-10 lg:grid-cols-2`}>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-950/50">
            <img
              src={CATERING_IMAGE}
              alt="Nigerian traditional celebration event"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent" />
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-white">Catering Value Proposition</h3>
            <ul className="mt-5 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onNavigate('events')}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-sm font-bold text-slate shadow-lg shadow-gold-600/20 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              View Event Packages
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATERING_SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Heart;
            return (
              <CateringCard key={i} icon={Icon} title={service.title} hausaTitle={service.hausaTitle} description={service.description} index={i} />
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('events')}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
          >
            <BookOpen className="h-4 w-4" />
            Go to Event Booking Portal
          </button>
        </div>
      </div>
    </section>
  );
}

function CateringCard({
  icon: Icon,
  title,
  hausaTitle,
  description,
  index,
}: {
  icon: typeof Heart;
  title: string;
  hausaTitle: string;
  description: string;
  index: number;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'revealed' : ''} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold-400/30 hover:bg-white/10`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="font-display text-lg font-bold text-white">{title}</h4>
      <p className="mt-0.5 text-sm font-semibold text-gold-300">{hausaTitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
    </div>
  );
}
