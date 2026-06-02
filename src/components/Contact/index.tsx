'use client';

import { useState } from 'react';

type FormData = { name: string; email: string; message: string };
type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      // TODO: wire up to an email service (Resend, EmailJS, Formspree, etc.)
      await new Promise((r) => setTimeout(r, 800));
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 w-full';

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Contact</h2>
        <p className="text-gray-400 text-center mb-16">Let&apos;s work together</p>

        {status === 'sent' ? (
          <div className="text-center py-12">
            <p className="text-2xl mb-2">Thanks for reaching out!</p>
            <p className="text-gray-400 text-sm">I will get back to you as soon as possible.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-xs text-gray-400 hover:text-white underline transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
