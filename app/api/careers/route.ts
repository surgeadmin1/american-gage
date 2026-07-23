import { NextResponse } from 'next/server';
import { emailShell, infoTable, sectionHeading, noteBlock } from '@/lib/emailLayout';

/**
 * Careers application handler — sends submissions via Resend (https://resend.com).
 *
 * Env vars (set in Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY  (required) — shared with the quote route
 *   CAREERS_FROM    (optional) — verified sender, e.g. "American Gage Careers <careers@americangage.com>"
 *                                 Defaults to Resend's test sender (delivers only to the
 *                                 Resend account owner) — change before launch.
 *   CAREERS_TO      (optional) — recipient inbox for applications. Defaults to
 *                                 customerservice@americangage.com. Point at a hiring
 *                                 address (e.g. careers@ or hr@) when one exists.
 *
 * A resume attachment is required by the form; this route also enforces it.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? '';
const FROM = process.env.CAREERS_FROM ?? 'American Gage Careers <no-reply@mail.americangage.com>';
// Recipient list — comma-separated. CAREERS_TO env var overrides (e.g. for testing).
const TO = (process.env.CAREERS_TO ??
  'Rwilliamson@americangage.com, sales@americangage.com, info@americangage.com, rarnold@americangage.com, jerome@americangage.com, nick@surgedm.com')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const MAX_TOTAL_ATTACHMENT_BYTES = 20 * 1024 * 1024;

function field(data: FormData, name: string): string {
  const v = data.get(name);
  return typeof v === 'string' ? v.trim() : '';
}

export async function POST(req: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Careers backend not configured (missing RESEND_API_KEY).' },
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
  const email = field(data, 'email');
  const phone = field(data, 'phone');
  const location = field(data, 'location');
  const position = field(data, 'position');
  const experience = field(data, 'experience');
  const certifications = field(data, 'certifications');
  const workAuth = field(data, 'work_auth');
  const message = field(data, 'message');
  const disciplines = data.getAll('disciplines').filter((d): d is string => typeof d === 'string');

  if (!firstName || !lastName || !email || !phone || !position) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // Resume attachment (required)
  const attachments: { filename: string; content: string }[] = [];
  let totalBytes = 0;
  for (const entry of data.getAll('resume')) {
    if (!(entry instanceof File) || !entry.name || entry.size === 0) continue;
    totalBytes += entry.size;
    if (totalBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { error: 'Resume too large — please keep it under 20 MB.' },
        { status: 400 }
      );
    }
    const buf = Buffer.from(await entry.arrayBuffer());
    attachments.push({ filename: entry.name, content: buf.toString('base64') });
  }

  if (attachments.length === 0) {
    return NextResponse.json({ error: 'A resume attachment is required.' }, { status: 400 });
  }

  const text = [
    `JOB APPLICATION — ${position}`,
    '',
    `Name:          ${firstName} ${lastName}`,
    `Email:         ${email}`,
    `Phone:         ${phone}`,
    `Location:      ${location || '—'}`,
    `Position:      ${position}`,
    `Experience:    ${experience || '—'}`,
    `Disciplines:   ${disciplines.length ? disciplines.join(', ') : '—'}`,
    `Certifications:${certifications ? ` ${certifications}` : ' —'}`,
    `U.S. work auth: ${workAuth || '—'}`,
    '',
    `About: ${message || '—'}`,
    '',
    `Resume: ${attachments.map((a) => a.filename).join(', ')}`,
  ].join('\n');

  const inner = `
    ${sectionHeading('Applicant')}
    ${infoTable([
      { label: 'Name', value: `${firstName} ${lastName}` },
      { label: 'Email', value: email, isLink: 'email' },
      { label: 'Phone', value: phone, isLink: 'tel' },
      { label: 'Location', value: location },
      { label: 'Position', value: position },
      { label: 'Experience', value: experience },
      { label: 'Disciplines', value: disciplines.length ? disciplines.join(', ') : '' },
      { label: 'Certifications', value: certifications },
      { label: 'U.S. work auth', value: workAuth },
    ])}
    ${sectionHeading('About the applicant')}
    ${noteBlock(message)}
    ${sectionHeading('Resume')}
    ${noteBlock(attachments.map((a) => a.filename).join(', ') + '  (attached to this email)')}
  `;

  const html = emailShell({ tag: 'Job Application', title: `${position} — ${firstName} ${lastName}`, inner });

  const payload: Record<string, unknown> = {
    from: FROM,
    to: TO,
    reply_to: email,
    subject: `[Careers] ${position}: ${firstName} ${lastName}`,
    text,
    html,
    attachments,
  };

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
    console.error('Resend error (careers):', res.status, detail);
    return NextResponse.json({ error: 'Failed to send.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
