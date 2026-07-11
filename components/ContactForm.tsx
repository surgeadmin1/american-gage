'use client';

import { useState } from 'react';

/**
 * Form backend: set NEXT_PUBLIC_FORM_ENDPOINT in Vercel env vars
 * (e.g. a Formspree endpoint like https://formspree.io/f/xxxxxxx).
 * Until it's set, the form falls back to a pre-filled email.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '';

const intents = [
  'New calibration quote',
  'Schedule a pickup',
  'On-site calibration',
  'Repair estimate',
  'Supplier qualification packet',
  'General question',
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORM_ENDPOINT) {
      // Fallback: open a pre-filled email
      const subject = encodeURIComponent(`[Website] ${data.get('intent')} — ${data.get('company')}`);
      const bodyText = encodeURIComponent(
        `Name: ${data.get('name')}\nCompany: ${data.get('company')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
      );
      window.location.href = `mailto:customerservice@americangage.com?subject=${subject}&body=${bodyText}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-lg border border-navy-200 bg-navy-50 p-8 text-center">
        <p className="font-display text-xl font-bold text-navy-900">Message received.</p>
        <p className="mt-2 text-steel-600">
          We respond to quote requests within one business day. Need it faster? Call{' '}
          <a href="tel:+16572162600" className="font-semibold text-accent-600">
            (657) 216-2600
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">Name *</span>
          <input required name="name" autoComplete="name" className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">Company *</span>
          <input required name="company" autoComplete="organization" className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">Email *</span>
          <input required type="email" name="email" autoComplete="email" className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">Phone *</span>
          <input required type="tel" name="phone" autoComplete="tel" className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">How can we help? *</span>
        <select required name="intent" className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20">
          {intents.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">
          Message — include manufacturer, model & serial for quotes *
        </span>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="e.g. Mitutoyo 500-196-30 caliper (SN 12345) ×3, Fluke 87V DMM (SN 67890) ×2 — ISO 13485 supplier requirements, need accredited certs with data."
          className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20"
        />
      </label>
      <p className="text-xs text-steel-500">
        Have a long equipment list? Email your spreadsheet directly to{' '}
        <a href="mailto:customerservice@americangage.com" className="font-semibold text-accent-600 hover:underline">
          customerservice@americangage.com
        </a>
        .
      </p>
      <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p role="alert" className="text-sm font-medium text-red-600">
          Something went wrong — please call (657) 216-2600 or email us directly.
        </p>
      )}
    </form>
  );
}
