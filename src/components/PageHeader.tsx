import { Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  hausaSubtitle?: string;
}

export default function PageHeader({ title, subtitle, hausaSubtitle }: PageHeaderProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-brand-950 pt-32 pb-16 text-white lg:pt-40 lg:pb-20">
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-48 w-48 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />

      <div ref={ref} className={`reveal ${revealed ? 'revealed' : ''} relative mx-auto max-w-4xl px-5 text-center lg:px-8`}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-300">
          <Sparkles className="h-3.5 w-3.5" /> Bloomy Drinks
        </span>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-shadow-lg">
          {title}
        </h1>
        {hausaSubtitle && (
          <p className="mt-3 font-display text-lg font-medium text-gold-300">{hausaSubtitle}</p>
        )}
        {subtitle && (
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-white/70 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
