import { NextResponse } from 'next/server';

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
const FROM = process.env.QUOTE_FROM ?? 'American Gage Website <onboarding@resend.dev>';
const TO = process.env.QUOTE_TO ?? 'customerservice@americangage.com';
const REPAIR_CC = 'repair@americangage.com';

// Attachments: Resend caps the whole request at 40 MB; stay well under it.
const MAX_TOTAL_ATTACHMENT_BYTES = 20 * 1024 * 1024;

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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

  const rowsHtml = equipmentList
    .split('\n')
    .filter(Boolean)
    .map((line) => `<li style="margin:0 0 6px;">${esc(line)}</li>`)
    .join('');

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1a2430;max-width:640px;">
    <h2 style="color:#0e3a66;margin:0 0 4px;">Quote request — ${esc(company)}</h2>
    <p style="margin:0 0 16px;color:#666;">Submitted from americangage.com</p>
    <table cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
      <tr><td style="padding-right:16px;color:#666;">Name</td><td><strong>${esc(firstName)} ${esc(lastName)}</strong></td></tr>
      <tr><td style="padding-right:16px;color:#666;">Company</td><td>${esc(company)}</td></tr>
      <tr><td style="padding-right:16px;color:#666;">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      <tr><td style="padding-right:16px;color:#666;">Phone</td><td>${esc(phone)}</td></tr>
      <tr><td style="padding-right:16px;color:#666;">Address</td><td>${esc(address || '—')}</td></tr>
      <tr><td style="padding-right:16px;color:#666;">Logistics</td><td>${esc(delivery || '—')}</td></tr>
    </table>
    <h3 style="color:#0e3a66;margin:20px 0 8px;">Equipment (${itemCount})</h3>
    <ol style="margin:0;padding-left:20px;">${rowsHtml}</ol>
    <h3 style="color:#0e3a66;margin:20px 0 8px;">Notes</h3>
    <p style="margin:0;white-space:pre-wrap;">${esc(message || '—')}</p>
  </div>`;

  const payload: Record<string, unknown> = {
    from: FROM,
    to: [TO],
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
