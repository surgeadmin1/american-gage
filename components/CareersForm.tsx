'use client';

import { useState } from 'react';

/**
 * Careers application form.
 *
 * Backend: set NEXT_PUBLIC_CAREERS_FORM_ENDPOINT in Vercel (separate Formspree
 * form from the quote wizard so applications land in their own inbox).
 * Resume attachment is REQUIRED — because of that, there is no mailto fallback
 * for submission; without an endpoint we prompt the applicant to email their
 * resume directly instead.
 */
const CAREERS_ENDPOINT = process.env.NEXT_PUBLIC_CAREERS_FORM_ENDPOINT ?? '';

const POSITIONS = [
  'Calibration Technician — Dimensional',
  'Calibration Technician — Electrical / RF',
  'Calibration Technician — Temperature / Pressure / Flow',
  'Calibration Technician — Life Science / Pipettes',
  'Calibration Technician — General / Entry Level',
  'Driver / Logistics',
  'Customer Service / Admin',
  'Other',
];

const EXPERIENCE = [
  'No calibration experience — willing to learn',
  '1–3 years',
  '3–5 years',
  '5–10 years',
  '10+ years',
];

const DISCIPLINES = [
  'Dimensional',
  'Electrical / RF',
  'Temperature & Humidity',
  'Pressure / Flow',
  'Mass / Balances',
  'Pipettes / Life Science',
];

const inputCls =
  'w-full rounded-md border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20';

export default function CareersForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!CAREERS_ENDPOINT) {
      // No backend configured — resumes can't ride a mailto link, so direct the
      // applicant to email it with their details pre-filled in the subject.
      const subject = encodeURIComponent(
        `[Application] ${data.get('position')}: ${data.get('first_name')} ${data.get('last_name')}`
      );
      const bodyText = encodeURIComponent(
        `Name: ${data.get('first_name')} ${data.get('last_name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nLocation: ${data.get('location')}\nPosition: ${data.get('position')}\nExperience: ${data.get('experience')}\nDisciplines: ${data.getAll('disciplines').join(', ') || '—'}\nCertifications: ${data.get('certifications') || '—'}\nAuthorized to work in the U.S.: ${data.get('work_auth')}\n\n${data.get('message') || ''}\n\n*** PLEASE ATTACH YOUR RESUME TO THIS EMAIL BEFORE SENDING ***`
      );
      window.location.href = `mailto:customerservice@americangage.com?subject=${subject}&body=${bodyText}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(CAREERS_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-lg border border-navy-200 bg-navy-50 p-8 text-center">
        <p className="font-display text-xl font-bold text-navy-900">Application received.</p>
        <p className="mt-2 text-steel-600">
          Thanks for your interest in joining the lab. We review every application and will
          reach out if there’s a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">First name *</span>
          <input required name="first_name" autoComplete="given-name" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">Last name *</span>
          <input required name="last_name" autoComplete="family-name" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">Email *</span>
          <input required type="email" name="email" autoComplete="email" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">Phone *</span>
          <input required type="tel" name="phone" autoComplete="tel" className={inputCls} />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">City / State *</span>
        <input
          required
          name="location"
          placeholder="e.g. Anaheim, CA"
          autoComplete="address-level2"
          className={inputCls}
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">
            Position applying for *
          </span>
          <select required name="position" className={inputCls}>
            {POSITIONS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">
            Calibration / metrology experience *
          </span>
          <select required name="experience" className={inputCls}>
            {EXPERIENCE.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset>
        <legend className="mb-2 block text-sm font-medium text-navy-800">
          Disciplines you’ve worked in <span className="font-normal text-steel-500">(check all that apply)</span>
        </legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {DISCIPLINES.map((d) => (
            <label
              key={d}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-steel-200 px-3 py-2 text-sm text-steel-700 transition has-[:checked]:border-navy-700 has-[:checked]:bg-navy-50 has-[:checked]:text-navy-900"
            >
              <input type="checkbox" name="disciplines" value={d} className="accent-accent-500" />
              {d}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">
          Certifications & training
          <span className="font-normal text-steel-500"> (optional — ASQ CCT, PMEL/TMDE, ISO 17025 experience…)</span>
        </span>
        <input name="certifications" className={inputCls} />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">
          Are you authorized to work in the United States? *
        </span>
        <select required name="work_auth" className={inputCls}>
          <option>Yes</option>
          <option>No</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">
          Tell us about yourself <span className="font-normal text-steel-500">(optional)</span>
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Why calibration? What kind of work do you want to grow into?"
          className={inputCls}
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">Resume *</span>
        <input
          required
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="w-full rounded-md border border-steel-300 px-3 py-2.5 text-sm file:mr-3 file:rounded file:border-0 file:bg-navy-50 file:px-3 file:py-1.5 file:font-display file:text-xs file:font-semibold file:uppercase file:text-navy-800"
        />
        <span className="mt-1 block text-xs text-steel-500">PDF or Word document.</span>
      </label>

      <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
        {status === 'sending' ? 'Submitting…' : 'Submit Application'}
      </button>
      {status === 'error' && (
        <p role="alert" className="text-sm font-medium text-red-600">
          Something went wrong — please email your resume to customerservice@americangage.com.
        </p>
      )}
    </form>
  );
}
