import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl } from '@/data/bloomy';
import { type Page } from '@/hooks/useRouter';

const PAGE_MESSAGES: Record<Page, string> = {
  home: 'Hello Bloomy Drinks! I would like to place an order / inquire about event catering for my event.',
  menu: 'Hello Bloomy Drinks! I was browsing your menu and would like to place an order. Please assist.',
  events: 'Hello Bloomy Drinks! I would like to inquire about event catering packages for my upcoming event.',
  about: 'Hello Bloomy Drinks! I would like to learn more about your products and production process.',
  contact: 'Hello Bloomy Drinks! I have a question and would like to get in touch.',
};

interface WhatsAppButtonProps {
  currentPage: Page;
}

export default function WhatsAppButton({ currentPage }: WhatsAppButtonProps) {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setShowTooltip(false);
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 12000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [currentPage]);

  const message = PAGE_MESSAGES[currentPage] ?? PAGE_MESSAGES.home;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {showTooltip && (
        <div className="relative flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-950/15 animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-stone-200 text-stone-500 hover:bg-stone-300"
            aria-label="Close tooltip"
          >
            <X className="h-3 w-3" />
          </button>
          <p className="text-sm font-medium text-stone-700">
            Need drinks for your event? <br />
            <span className="font-bold text-emerald-600">Chat with us now!</span>
          </p>
        </div>
      )}

      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-600/40 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 animate-pulse-ring"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </a>
    </div>
  );
}
