import { useState, useEffect, useCallback } from 'react';

export type Page = 'home' | 'menu' | 'events' | 'about' | 'contact';

const PAGE_MAP: Record<string, Page> = {
  '': 'home',
  '/': 'home',
  '/menu': 'menu',
  '/events': 'events',
  '/about': 'about',
  '/contact': 'contact',
};

export function useRouter() {
  const [page, setPage] = useState<Page>(() => {
    const hash = window.location.hash.replace('#', '');
    return PAGE_MAP[hash] ?? 'home';
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setPage(PAGE_MAP[hash] ?? 'home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((p: Page) => {
    window.location.hash = p === 'home' ? '/' : `/${p}`;
  }, []);

  return { page, navigate };
}

export const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Menu', page: 'menu' },
  { label: 'Events', page: 'events' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
];
