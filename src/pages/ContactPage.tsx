import { useState, type FormEvent } from 'react';
import PageHeader from '@/components/PageHeader';
import { Phone, MapPin, Clock, Instagram, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_DISPLAY, buildWhatsAppUrl } from '@/data/bloomy';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello Bloomy Drinks! I have a question.\n\n*Name:* ${form.name}\n*Email:* ${form.email || 'N/A'}\n*Phone:* ${form.phone || 'N/A'}\n*Message:* ${form.message}`;
    window.open(buildWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    'w-full rounded-xl border border-stone-200 bg-surface px-4 py-3 text-sm text-slate transition-colors placeholder:text-stone-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200';

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Questions, orders, or event inquiries we're here to help. Reach us by phone, WhatsApp, or fill out the form below."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact info + map */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate sm:text-3xl">Contact Information</h2>
              <p className="mt-3 text-base text-stone-500">
                We're available throughout the week to serve you. Reach out any time.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="group flex items-center gap-4 rounded-2xl bg-surface p-5 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/20 transition-transform group-hover:scale-110">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Call Us</p>
                    <p className="font-display text-lg font-bold text-slate">{PHONE_DISPLAY}</p>
                  </div>
                </a>

                <a
                  href={buildWhatsAppUrl('Hello Bloomy Drinks! I would like to get in touch.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-surface p-5 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-110">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">WhatsApp</p>
                    <p className="font-display text-lg font-bold text-slate">{PHONE_DISPLAY}</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/bloomydrinks.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-surface p-5 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ruby-500 to-gold-600 text-white shadow-lg transition-transform group-hover:scale-110">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Instagram</p>
                    <p className="font-display text-lg font-bold text-slate">@bloomydrinks.ng</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl bg-surface p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/20">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Location</p>
                    <p className="font-display text-lg font-bold text-slate">Hadejia Road, Kano, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-surface p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/20">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Hours</p>
                    <p className="text-sm font-medium text-slate">Mon – Sat: 8AM – 8PM</p>
                    <p className="text-sm text-stone-500">Sunday: 10AM – 6PM</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-6 overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  title="Bloomy Drinks location - Hadejia Road, Kano, Nigeria"
                  src="https://maps.google.com/maps?q=Hadejia+Road,+Kano,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate sm:text-3xl">Send Us a Message</h2>
              <p className="mt-3 text-base text-stone-500">
                Fill out the form and we'll route your message straight to our WhatsApp for a fast reply.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Aisha Mohammed"
                    className={inputClass}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="0809 393 8844"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="How can we help you?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition-all hover:bg-emerald-700 hover:shadow-xl"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send via WhatsApp
                    </>
                  ) }
                </button>
                {submitted && (
                  <p className="text-center text-sm text-emerald-700">
                    Your message is being sent to WhatsApp. If it doesn't open, check your popup blocker.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}