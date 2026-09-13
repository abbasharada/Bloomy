import { useRouter } from '@/hooks/useRouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import EventsPage from '@/pages/EventsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

export default function App() {
  const { page, navigate } = useRouter();

  return (
    <div className="min-h-screen bg-surface">
      <Navbar currentPage={page} onNavigate={navigate} />
      <main>
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'menu' && <MenuPage onNavigate={navigate} />}
        {page === 'events' && <EventsPage />}
        {page === 'about' && <AboutPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton currentPage={page} />
    </div>
  );
}
