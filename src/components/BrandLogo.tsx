import logoUrl from '@/assets/logo.jpg';

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={logoUrl}
      alt="Bloomy Drinks — Kano, Nigeria"
      className={compact ? 'h-11 w-auto object-contain' : 'h-16 w-auto object-contain'}
    />
  );
}
