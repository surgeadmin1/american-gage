import { NextResponse } from 'next/server';
import { emailShell, infoTable, dataTable, sectionHeading, noteBlock } from '@/lib/emailLayout';

/**
 * Quote form handler — sends submissions via Resend (https://resend.com).
 *
 * Env vars (set in Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY  (required) — API key from the Resend dashboard
 *   QUOTE_FROM      (optional) — verified sender, e.g. "American Gage <quotes@americangage.com>"
 *                                 Defaults to Resend's test sender, which only delivers
 *                                 to the Resend account owner's email — fine for testing,
 *                                 must be changed before launch.
 *   QUOTE_TO        (optional) — override recipient for testing.
 *
 * Routing: everything goes to customerservice@. If any equipment line's
 * service mentions repair/eval, repair@ is CC'd.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? '';
const FROM = process.env.QUOTE_FROM ?? 'American Gage <no-reply@mail.americangage.com>';
// Recipient list — comma-separated. QUOTE_TO env var overrides (e.g. for testing).
const TO = (process.env.QUOTE_TO ??
  'Rwilliamson@americangage.com, sales@americangage.com, info@americangage.com, jerome@americangage.com, nick@surgedm.com')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const REPAIR_CC = 'repair@americangage.com';

// Attachments: Resend caps the whole request at 40 MB; stay well under it.
const MAX_TOTAL_ATTACHMENT_BYTES = 20 * 1024 * 1024;

function field(data: FormData, name: string): string {
  const v = data.get(name);
  return typeof v === 'string' ? v.trim() : '';
}

export async function POST(req: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Form backend not configured (missing RESEND_API_KEY).' },
      { status: 500 }
    );
  }

  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form submission.' }, { status: 400 });
  }

  const firstName = field(data, 'first_name');
  const lastName = field(data, 'last_name');
  const company = field(data, 'company');
  const email = field(data, 'email');
  const phone = field(data, 'phone');
  const street = field(data, 'street');
  const city = field(data, 'city');
  const state = field(data, 'state');
  const zip = field(data, 'zip');
  const delivery = field(data, 'delivery');
  const message = field(data, 'message');
  const equipmentList = field(data, 'equipment_list');

  if (!firstName || !lastName || !company || !email || !equipmentList) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const itemCount = equipmentList.split('\n').filter(Boolean).length;
  const hasRepair = /repair|eval/i.test(equipmentList);

  // Collect attachments (base64 for Resend's JSON API)
  const attachments: { filename: string; content: string }[] = [];
  let totalBytes = 0;
  for (const entry of data.getAll('attachment')) {
    if (!(entry instanceof File) || !entry.name || entry.size === 0) continue;
    totalBytes += entry.size;
    if (totalBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { error: 'Attachments too large — please keep total under 20 MB.' },
        { status: 400 }
      );
    }
    const buf = Buffer.from(await entry.arrayBuffer());
    attachments.push({ filename: entry.name, content: buf.toString('base64') });
  }

  const address = [street, city, state, zip].filter(Boolean).join(', ');

  // Parse structured equipment for a proper columned table (falls back to text).
  type Eq = { manufacturer?: string; model?: string; description?: string; quantity?: string; service?: string; interval?: string; customerId?: string; tolerance?: string; notes?: string };
  let equipmentRows: Eq[] = [];
  try {
    const parsed = JSON.parse(field(data, 'equipment_json'));
    if (Array.isArray(parsed)) equipmentRows = parsed;
  } catch {
    /* fall back to text list below */
  }

  const text = [
    `QUOTE REQUEST — ${company}`,
    '',
    `Name:      ${firstName} ${lastName}`,
    `Company:   ${company}`,
    `Email:     ${email}`,
    `Phone:     ${phone}`,
    `Address:   ${address || '—'}`,
    `Logistics: ${delivery || '—'}`,
    '',
    `EQUIPMENT (${itemCount} item${itemCount === 1 ? '' : 's'}):`,
    equipmentList,
    '',
    `Notes: ${message || '—'}`,
    attachments.length ? `Attachments: ${attachments.map((a) => a.filename).join(', ')}` : '',
  ]
    .filter((l) => l !== '')
    .join('\n');

  const contactTable = infoTable([
    { label: 'Name', value: `${firstName} ${lastName}` },
    { label: 'Company', value: company },
    { label: 'Email', value: email, isLink: 'email' },
    { label: 'Phone', value: phone, isLink: 'tel' },
    { label: 'Address', value: address },
    { label: 'Logistics', value: delivery },
  ]);

  const equipmentTable = equipmentRows.length
    ? dataTable(
        ['#', 'Item', 'Qty', 'Customer ID', 'Accuracy / Tolerance', 'Service', 'Interval', 'Notes'],
        equipmentRows.map((r, i) => [
          String(i + 1),
          [r.manufacturer, r.model].filter(Boolean).join(' ') +
            (r.description ? ` — ${r.description}` : ''),
          r.quantity || '1',
          r.customerId || '—',
          r.tolerance || '—',
          r.service || '—',
          r.interval || '—',
          r.notes || '—',
        ])
      )
    : dataTable(['#', 'Item'], equipmentList.split('\n').filter(Boolean).map((l, i) => [String(i + 1), l.replace(/^\d+\.\s*/, '')]));

  const inner = `
    ${sectionHeading('Contact')}
    ${contactTable}
    ${sectionHeading(`Equipment (${itemCount})`)}
    ${equipmentTable}
    ${sectionHeading('Notes')}
    ${noteBlock(message)}
    ${attachments.length ? sectionHeading('Attachments') + noteBlock(attachments.map((a) => a.filename).join(', ')) : ''}
  `;

  const html = emailShell({ tag: 'Quote Request', title: `${company} — ${itemCount} item${itemCount === 1 ? '' : 's'}`, inner });

  const payload: Record<string, unknown> = {
    from: FROM,
    to: TO,
    reply_to: email,
    subject: `[Website] Quote request: ${company} (${itemCount} item${itemCount === 1 ? '' : 's'})`,
    text,
    html,
  };
  if (hasRepair) payload.cc = [REPAIR_CC];
  if (attachments.length) payload.attachments = attachments;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('Resend error:', res.status, detail);
    return NextResponse.json({ error: 'Failed to send.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
