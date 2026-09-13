import PageHeader from '@/components/PageHeader';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import { useReveal } from '@/hooks/useReveal';
import { Leaf, ShieldCheck, Award, Heart, MapPin, Sparkles } from 'lucide-react';

const STORY_POINTS = [
  {
    icon: Leaf,
    title: 'Rooted in Nature',
    text: 'Every Bloomy drink starts with 100% natural ingredients sourced from local Nigerian markets. No preservatives, no artificial flavours just pure, honest refreshment.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Production',
    text: 'Our production facility in Kano follows strict food safety standards. Every batch is prepared in a sanitised environment, bottled with care, and quality-checked before delivery.',
  },
  {
    icon: Award,
    title: 'World-Class Quality',
    text: "We've taken the authentic Naija Zobo and elevated it to world-class standards. Our recipes are perfected through years of testing and our customers taste the difference.",
  },
  {
    icon: Heart,
    title: 'Community First',
    text: 'Bloomy Drinks is proudly Kano-born and Kano-based. We support local suppliers, employ local talent, and give back to the community that made us who we are.',
  },
];

const VALUES = [
  { label: '100% Natural', value: 'No preservatives, ever' },
  { label: 'Hygienic', value: 'Strict food safety standards' },
  { label: 'Local', value: 'Kano-born, Kano-proud' },
  { label: 'Trusted', value: '500+ satisfied customers' },
];

const PRODUCTION_IMAGE =
  'https://images.pexels.com/photos/8851226/pexels-photo-8851226.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200';

export default function AboutPage() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <>
      <PageHeader
        title="About Bloomy Drinks"
        subtitle="Naija roots. World-class taste. Born in Kano, crafted with nature, trusted by hundreds of happy customers across Northern Nigeria."
      />

      {/* Brand story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-brand-950/10">
              <img
                src={PRODUCTION_IMAGE}
                alt="Natural drink preparation"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
                <Sparkles className="h-3.5 w-3.5" /> Our Story
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate sm:text-4xl">
                From Kano Kitchen to World-Class Brand
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-600">
                Bloomy Drinks started with a simple belief: that the natural, handcrafted drinks of Naija
                deserve to be celebrated on the world stage. What began as a small operation in Kano has
                grown into a trusted local brand serving hundreds of customers and events across the region.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Every bottle we produce carries our promise 100% natural ingredients, ultra-hygienic
 preparation, and authentic Nigerian flavours crafted to world-class standards. That's the Bloomy way.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4">
                {VALUES.map((v) => (
                  <div key={v.label} className="rounded-xl bg-surface p-4">
                    <p className="font-display text-sm font-bold text-brand-600">{v.label}</p>
                    <p className="mt-0.5 text-xs text-stone-500">{v.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story points */}
      <section ref={ref} className={`reveal ${revealed ? 'revealed' : ''} bg-surface py-16 lg:py-24`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-subtitle">Four pillars that define the Bloomy Drinks promise.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STORY_POINTS.map((point, i) => (
              <div
                key={point.title}
                className="flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-700/20">
                  <point.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-base font-bold text-slate">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Verification badges */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-12">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <ShieldCheck className="h-3.5 w-3.5" /> Verification & Standards
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-slate sm:text-3xl">
                Committed to Quality You Can Trust
              </h2>
              <p className="mt-3 text-sm text-stone-500">
                We maintain the highest standards of food safety and hygiene in every batch we produce.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, title: 'NAFDAC Standards', text: 'Produced in compliance with Nigerian food and drug regulations.' },
                { icon: Leaf, title: 'All-Natural', text: 'No artificial preservatives, colours, or flavours in any product.' },
                { icon: Award, title: 'Quality Assured', text: 'Every batch is quality-checked before it leaves our facility.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center rounded-2xl bg-surface p-5 text-center">
                  <item.icon className="h-8 w-8 text-brand-500" />
                  <h3 className="mt-3 font-display text-sm font-bold text-slate">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Location strip */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-800 py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-5">
          <MapPin className="mx-auto h-10 w-10 text-gold-300" />
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Based in Kano, Nigeria</h2>
          <p className="mt-2 text-white/80">Serving Kano and surrounding areas with ice-cold delivery.</p>
        </div>
      </section>
    </>
  );
}
