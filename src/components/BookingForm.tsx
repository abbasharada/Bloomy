import { useState, type FormEvent } from 'react';
import { Calendar, User, Phone, Users, FileText, Send, CheckCircle2, MapPin } from 'lucide-react';
import { EVENT_TYPES, buildWhatsAppUrl } from '@/data/bloomy';
import { useReveal } from '@/hooks/useReveal';

export default function BookingForm() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: EVENT_TYPES[0],
    guestCount: '',
    eventDate: '',
    location: '',
    requests: '',
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello Bloomy Drinks! I would like to book event catering.\n\n*Name:* ${form.name}\n*Phone/WhatsApp:* ${form.phone}\n*Event Type:* ${form.eventType}\n*Estimated Guests:* ${form.guestCount}\n*Event Date:* ${form.eventDate}\n*Location:* ${form.location || 'TBD'}\n*Special Requests:* ${form.requests || 'None'}`;
    window.open(buildWhatsAppUrl(message), '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    'w-full rounded-xl border border-stone-200 bg-surface px-4 py-3 text-sm text-slate transition-colors placeholder:text-stone-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200';

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-brand-950/10">
      <div className="grid lg:grid-cols-5">
        {/* Left info panel */}
        <div className="relative flex flex-col justify-center bg-gradient-to-br from-brand-600 to-brand-950 p-8 text-white lg:col-span-2 lg:p-10">
          <div className="pointer-events-none absolute right-4 top-4 h-24 w-24 rounded-full bg-gold-400/10 blur-2xl" />
          <h2 className="font-display text-2xl font-extrabold leading-tight lg:text-3xl">
            Book Drinks for Your Event
          </h2>
          <p className="mt-2 text-sm text-gold-300">Fast confirmation via WhatsApp</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Fill out the form and we'll send your details straight to our WhatsApp for fast confirmation
            and a personalised quote — typically within minutes.
          </p>
          <div className="mt-6 space-y-2.5">
            {[
              'Fast WhatsApp response',
              'Custom packages for any budget',
              'Delivery across Kano & surrounds',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-6 lg:col-span-3 lg:p-8">
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
              <User className="h-3.5 w-3.5" /> Full Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="e.g. Aisha Mohammed"
              className={inputClass}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
                <Phone className="h-3.5 w-3.5" /> Phone / WhatsApp
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="e.g. 0809 393 8844"
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
                <Users className="h-3.5 w-3.5" /> Guest Count
              </label>
              <input
                type="number"
                required
                min="1"
                value={form.guestCount}
                onChange={(e) => handleChange('guestCount', e.target.value)}
                placeholder="e.g. 200"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
                <Calendar className="h-3.5 w-3.5" /> Event Type
              </label>
              <select
                value={form.eventType}
                onChange={(e) => handleChange('eventType', e.target.value)}
                className={inputClass}
              >
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
                <Calendar className="h-3.5 w-3.5" /> Event Date
              </label>
              <input
                type="date"
                required
                value={form.eventDate}
                onChange={(e) => handleChange('eventDate', e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
              <MapPin className="h-3.5 w-3.5" /> Event Location (Kano/Environs)
            </label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="e.g. Nassarawa GRA, Kano"
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
              <FileText className="h-3.5 w-3.5" /> Special Requests
            </label>
            <textarea
              rows={3}
              value={form.requests}
              onChange={(e) => handleChange('requests', e.target.value)}
              placeholder="e.g. Custom labels, specific drink mix, delivery time, venue address..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition-all hover:bg-emerald-700 hover:shadow-xl active:translate-y-0"
          >
            {submitted ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Opening WhatsApp...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send via WhatsApp
              </>
            )}
          </button>

          {submitted && (
            <p className="text-center text-sm text-emerald-700">
              Your details are being sent to WhatsApp. If it doesn't open, check your popup blocker.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
