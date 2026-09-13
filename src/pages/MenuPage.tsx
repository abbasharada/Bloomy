import PageHeader from '@/components/PageHeader';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import { type Page } from '@/hooks/useRouter';

export default function MenuPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <>
      <PageHeader
        title="Our Signature Drinks"
        hausaSubtitle="Shagalgarmarmu"
        subtitle="Six handcrafted, 100% natural beverages — each made fresh with premium ingredients. Select your size and order instantly via WhatsApp."
      />
      <Products compact onNavigate={onNavigate} />
      <Testimonials />
    </>
  );
}
