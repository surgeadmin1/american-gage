'use client';

import { useState } from 'react';

/**
 * Two-step quote wizard (equipment first, contact info second).
 *
 * Form backend: POSTs to our own /api/quote route, which sends via Resend
 * (requires RESEND_API_KEY on Vercel — see app/api/quote/route.ts).
 * NEXT_PUBLIC_FORM_ENDPOINT can still override the endpoint if ever needed.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '/api/quote';

const MANUFACTURERS = [
  'Fluke', 'Keysight', 'Agilent', 'Tektronix', 'Rohde & Schwarz', 'Anritsu', 'BK Precision',
  'Mitutoyo', 'Starrett', 'Brown & Sharpe', 'Interapid', 'SPI', 'Federal', 'Mahr',
  'Mettler Toledo', 'Ohaus', 'Sartorius', 'A&D', 'Rice Lake',
  'Eppendorf', 'Rainin', 'Gilson', 'Thermo Scientific', 'Fisher Scientific',
  'Ashcroft', 'WIKA', 'Druck', 'Additel', 'Rosemount', 'Omega', 'Dwyer',
  'CDI Torque', 'Snap-on', 'Sturtevant Richmont', 'Norbar', 'Chatillon', 'Ametek', 'Imada',
  'Vaisala', 'Testo', 'Extech', 'Alicat', 'MKS', 'Brooks Instrument', 'Kaye',
];

const SERVICES = [
  'Traceable Calibration, no data, Level 1',
  'Traceable Calibration Z540, with data, Level 2',
  'Accredited Calibration ISO/IEC 17025, with data',
];

const INTERVALS = ['1 year', '6 months', '3 months', '2 years', 'Other / not sure'];

const DELIVERY = [
  'Free route pickup (OC / LA / Inland Empire)',
  'I’ll drop it off in Placentia',
  'I’ll ship it',
  'On-site calibration at my facility',
  'Not sure yet',
];

type EquipmentRow = {
  manufacturer: string;
  model: string;
  description: string;
  quantity: string;
  service: string;
  interval: string;
  notes: string;
};

const emptyRow = (): EquipmentRow => ({
  manufacturer: '',
  model: '',
  description: '',
  quantity: '1',
  service: SERVICES[0],
  interval: INTERVALS[0],
  notes: '',
});

const inputCls =
  'w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20';
const labelCls = 'mb-1 block text-xs font-medium text-steel-600';

function equipmentToText(rows: EquipmentRow[]) {
  return rows
    .map(
      (r, i) =>
        `${i + 1}. ${r.manufacturer} ${r.model}${r.description ? ` (${r.description})` : ''} ×${r.quantity} — ${r.service} — interval: ${r.interval}${r.notes ? ` — ${r.notes}` : ''}`
    )
    .join('\n');
}

export default function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [rows, setRows] = useState<EquipmentRow[]>([emptyRow()]);
  const [rowError, setRowError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  // Which row's manufacturer field is showing autocomplete suggestions
  const [suggestFor, setSuggestFor] = useState<number | null>(null);

  function updateRow(i: number, field: keyof EquipmentRow, value: string) {
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, [field]: value } : r)));
  }

  function suggestionsFor(i: number) {
    const q = rows[i]?.manufacturer.trim().toLowerCase();
    if (!q) return [];
    return MANUFACTURERS.filter((m) => m.toLowerCase().includes(q))
      .filter((m) => m.toLowerCase() !== q)
      .slice(0, 5);
  }

  function nextStep() {
    const incomplete = rows.some((r) => !r.manufacturer.trim() && !r.model.trim() && !r.description.trim());
    if (incomplete) {
      setRowError('Each item needs at least a manufacturer, model, or description — or remove the empty row.');
      return;
    }
    setRowError('');
    setStep(2);
    document.getElementById('quote-wizard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const equipment = equipmentToText(rows);
    data.set('equipment_list', equipment);
    data.set('equipment_json', JSON.stringify(rows));

    if (!FORM_ENDPOINT) {
      const files = data.getAll('attachment') as File[];
      const fileNote = files.filter((f) => f.name).length
        ? `\n\nATTACHMENT(S) TO INCLUDE: ${files.map((f) => f.name).join(', ')} (please attach in your email client)`
        : '';
      const subject = encodeURIComponent(
        `[Website] Quote request: ${data.get('company')} (${rows.length} item${rows.length > 1 ? 's' : ''})`
      );
      const bodyText = encodeURIComponent(
        `Name: ${data.get('first_name')} ${data.get('last_name')}\nCompany: ${data.get('company')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nAddress: ${data.get('street')}, ${data.get('city')}, ${data.get('state')} ${data.get('zip')}\nLogistics: ${data.get('delivery')}\n\nEQUIPMENT:\n${equipment}\n\nNotes: ${data.get('message') || '—'}${fileNote}`
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
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-lg border border-navy-200 bg-navy-50 p-8 text-center">
        <p className="font-display text-xl font-bold text-navy-900">Quote request received.</p>
        <p className="mt-2 text-steel-600">
          We review every request and respond within one business day. Need it faster? Call{' '}
          <a href="tel:+16572162600" className="font-semibold text-accent-600">
            (657) 216-2600
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div id="quote-wizard">
      {/* Step indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between font-display text-sm font-semibold">
          <span className={step === 1 ? 'text-navy-900' : 'text-steel-400'}>
            <span className="font-mono text-accent-600">01</span> Equipment Info
          </span>
          <span className={step === 2 ? 'text-navy-900' : 'text-steel-400'}>
            <span className="font-mono text-accent-600">02</span> Your Info
          </span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-steel-100">
          <div
            className="h-full bg-accent-500 transition-all duration-500"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>
      </div>

      {/* ---------- STEP 1: Equipment ---------- */}
      {step === 1 && (
        <div>
          <p className="text-sm text-steel-600">
            Add each item you need calibrated. Not sure about a field? Leave it blank — we’ll
            sort it out. You can also attach an equipment list in step 2.
          </p>

          <div className="mt-5 space-y-4">
            {rows.map((row, i) => (
              <fieldset key={i} className="rounded-lg border border-steel-200 p-4">
                <legend className="px-1.5 font-mono text-xs font-semibold text-steel-500">
                  Item {String(i + 1).padStart(2, '0')}
                </legend>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-6">
                  <div className="col-span-2 sm:col-span-2">
                    <label className={labelCls} htmlFor={`desc-${i}`}>Description</label>
                    <input
                      id={`desc-${i}`}
                      value={row.description}
                      onChange={(e) => updateRow(i, 'description', e.target.value)}
                      placeholder="e.g. Multimeter"
                      className={inputCls}
                    />
                  </div>
                  <div className="relative col-span-2 sm:col-span-2">
                    <label className={labelCls} htmlFor={`mfr-${i}`}>Manufacturer</label>
                    <input
                      id={`mfr-${i}`}
                      value={row.manufacturer}
                      onChange={(e) => {
                        updateRow(i, 'manufacturer', e.target.value);
                        setSuggestFor(i);
                      }}
                      onFocus={() => setSuggestFor(i)}
                      onBlur={() => setTimeout(() => setSuggestFor((s) => (s === i ? null : s)), 150)}
                      placeholder="e.g. Fluke"
                      autoComplete="off"
                      className={inputCls}
                      role="combobox"
                      aria-expanded={suggestFor === i && suggestionsFor(i).length > 0}
                      aria-controls={`mfr-suggest-${i}`}
                    />
                    {suggestFor === i && suggestionsFor(i).length > 0 && (
                      <ul
                        id={`mfr-suggest-${i}`}
                        role="listbox"
                        className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-md border border-steel-200 bg-white shadow-lg"
                      >
                        {suggestionsFor(i).map((m) => (
                          <li key={m} role="option" aria-selected="false">
                            <button
                              type="button"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                updateRow(i, 'manufacturer', m);
                                setSuggestFor(null);
                              }}
                              className="block w-full px-3 py-1.5 text-left text-sm text-steel-700 transition hover:bg-navy-50 hover:text-navy-900"
                            >
                              {m}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="sm:col-span-1">
                    <label className={labelCls} htmlFor={`model-${i}`}>Model</label>
                    <input
                      id={`model-${i}`}
                      value={row.model}
                      onChange={(e) => updateRow(i, 'model', e.target.value)}
                      placeholder="e.g. 87V"
                      className={inputCls}
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className={labelCls} htmlFor={`qty-${i}`}>Qty</label>
                    <input
                      id={`qty-${i}`}
                      type="number"
                      min="1"
                      value={row.quantity}
                      onChange={(e) => updateRow(i, 'quantity', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-3">
                    <label className={labelCls} htmlFor={`svc-${i}`}>Calibration service</label>
                    <select
                      id={`svc-${i}`}
                      value={row.service}
                      onChange={(e) => updateRow(i, 'service', e.target.value)}
                      className={inputCls}
                    >
                      {SERVICES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label className={labelCls} htmlFor={`int-${i}`}>Interval</label>
                    <select
                      id={`int-${i}`}
                      value={row.interval}
                      onChange={(e) => updateRow(i, 'interval', e.target.value)}
                      className={inputCls}
                    >
                      {INTERVALS.map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-2">
                    <label className={labelCls} htmlFor={`notes-${i}`}>Notes</label>
                    <input
                      id={`notes-${i}`}
                      value={row.notes}
                      onChange={(e) => updateRow(i, 'notes', e.target.value)}
                      placeholder="Serial #, tolerance, etc."
                      className={inputCls}
                    />
                  </div>
                </div>
              </fieldset>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setRows((prev) => [...prev, emptyRow()])}
              className="btn-secondary !px-4 !py-2 text-xs"
            >
              + Add another item
            </button>
            {rows.length > 1 && (
              <button
                type="button"
                onClick={() => setRows((prev) => prev.slice(0, -1))}
                className="rounded-md border-2 border-steel-300 px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide text-steel-500 transition hover:border-red-400 hover:text-red-500"
              >
                Remove last item
              </button>
            )}
          </div>

          {rowError && (
            <p role="alert" className="mt-4 text-sm font-medium text-red-600">
              {rowError}
            </p>
          )}

          <button type="button" onClick={nextStep} className="btn-primary mt-8 w-full sm:w-auto">
            Next: Your Info →
          </button>
        </div>
      )}

      {/* ---------- STEP 2: Contact ---------- */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Review */}
          <div className="rounded-lg border border-steel-200 bg-navy-50/60 p-4">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
                Your equipment ({rows.length})
              </h3>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="font-display text-xs font-semibold uppercase tracking-wide text-accent-600 hover:underline"
              >
                ← Edit list
              </button>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-steel-700">
              {rows.map((r, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-steel-400">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <strong className="text-navy-800">
                      {[r.manufacturer, r.model].filter(Boolean).join(' ') || r.description}
                    </strong>
                    {r.description && (r.manufacturer || r.model) ? ` — ${r.description}` : ''} ×{r.quantity}
                    <span className="text-steel-500"> · {r.service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

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
              <span className="mb-1.5 block text-sm font-medium text-navy-800">Company *</span>
              <input required name="company" autoComplete="organization" className={inputCls} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-navy-800">Email *</span>
              <input required type="email" name="email" autoComplete="email" className={inputCls} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-navy-800">Phone *</span>
              <input required type="tel" name="phone" autoComplete="tel" className={inputCls} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-navy-800">Street address</span>
              <input name="street" autoComplete="street-address" className={inputCls} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-navy-800">City *</span>
              <input required name="city" autoComplete="address-level2" className={inputCls} />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy-800">State</span>
                <input name="state" defaultValue="CA" autoComplete="address-level1" className={inputCls} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy-800">ZIP *</span>
                <input required name="zip" autoComplete="postal-code" className={inputCls} />
              </label>
            </div>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy-800">
              How should we get your equipment? *
            </span>
            <select required name="delivery" className={inputCls}>
              {DELIVERY.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy-800">
              Anything else we should know?
            </span>
            <textarea
              name="message"
              rows={4}
              placeholder="Compliance requirements (ISO 13485, AS9100…), ITAR status, deadlines, PO process…"
              className={inputCls}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy-800">
              Attach an equipment list or photos (optional)
            </span>
            <input
              type="file"
              name="attachment"
              multiple
              accept=".jpg,.jpeg,.png,.gif,.pdf,.csv,.doc,.docx,.xls,.xlsx"
              className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm file:mr-3 file:rounded file:border-0 file:bg-navy-50 file:px-3 file:py-1.5 file:font-display file:text-xs file:font-semibold file:uppercase file:text-navy-800"
            />
            <span className="mt-1 block text-xs text-steel-500">
              jpg, png, pdf, csv, doc, xls — we review every line item.
            </span>
          </label>

          <input type="hidden" name="equipment_list" value={equipmentToText(rows)} />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
              {status === 'sending' ? 'Sending…' : 'Get a Quote'}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="font-display text-sm font-semibold text-steel-500 transition hover:text-navy-800"
            >
              ← Back to equipment
            </button>
          </div>
          {status === 'error' && (
            <p role="alert" className="text-sm font-medium text-red-600">
              Something went wrong — please call (657) 216-2600 or email us directly.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
