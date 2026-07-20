/**
 * Shared email HTML builder — a clean, branded, table-based layout that renders
 * consistently across Gmail/Outlook/Apple Mail. All styles are inline (email
 * clients strip <style> blocks). Used by the quote and careers API routes.
 */

const NAVY = '#0e3a66';
const ACCENT = '#f26a1b';
const INK = '#1a2430';
const MUTE = '#6b7480';
const LINE = '#e2e6ea';
const SOFT = '#f4f6f8';

export const esc = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export type Row = { label: string; value: string; isLink?: 'email' | 'tel' };

/** A bordered label/value table (the "spec sheet" look). */
export function infoTable(rows: Row[]): string {
  const body = rows
    .map((r, i) => {
      const bg = i % 2 === 0 ? '#ffffff' : SOFT;
      let val = esc(r.value || '—');
      if (r.value && r.isLink === 'email') val = `<a href="mailto:${esc(r.value)}" style="color:${NAVY};text-decoration:none;">${esc(r.value)}</a>`;
      if (r.value && r.isLink === 'tel') val = `<a href="tel:${esc(r.value.replace(/[^\d+]/g, ''))}" style="color:${NAVY};text-decoration:none;">${esc(r.value)}</a>`;
      return `<tr>
        <td style="background:${bg};padding:10px 14px;border:1px solid ${LINE};color:${MUTE};font-size:13px;width:170px;vertical-align:top;">${esc(r.label)}</td>
        <td style="background:${bg};padding:10px 14px;border:1px solid ${LINE};color:${INK};font-size:14px;vertical-align:top;"><strong>${val}</strong></td>
      </tr>`;
    })
    .join('');
  return `<table cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;width:100%;margin:0 0 8px;">${body}</table>`;
}

/** A multi-column data table (e.g. equipment lines). */
export function dataTable(headers: string[], rows: string[][]): string {
  const head = headers
    .map(
      (h) =>
        `<th align="left" style="background:${NAVY};color:#fff;padding:9px 12px;font-size:12px;letter-spacing:.02em;border:1px solid ${NAVY};">${esc(h)}</th>`
    )
    .join('');
  const body = rows
    .map((cells, i) => {
      const bg = i % 2 === 0 ? '#ffffff' : SOFT;
      const tds = cells
        .map(
          (c, ci) =>
            `<td style="background:${bg};padding:9px 12px;border:1px solid ${LINE};color:${ci === 0 ? NAVY : INK};font-size:13px;vertical-align:top;${ci === 0 ? 'font-weight:700;width:34px;text-align:center;' : ''}">${esc(c)}</td>`
        )
        .join('');
      return `<tr>${tds}</tr>`;
    })
    .join('');
  return `<table cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;width:100%;margin:0 0 8px;">
    <thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

export function sectionHeading(text: string): string {
  return `<h3 style="margin:22px 0 10px;color:${NAVY};font-size:15px;letter-spacing:.02em;text-transform:uppercase;border-bottom:2px solid ${ACCENT};padding-bottom:6px;">${esc(text)}</h3>`;
}

export function noteBlock(text: string): string {
  return `<div style="background:${SOFT};border:1px solid ${LINE};border-radius:6px;padding:12px 14px;color:${INK};font-size:14px;line-height:1.55;white-space:pre-wrap;">${esc(text || '—')}</div>`;
}

/**
 * Wrap inner HTML in the branded shell: navy header + eyebrow + title, padded
 * card body, and a footer. `tag` is the little pill (e.g. "Quote Request").
 */
export function emailShell(opts: { tag: string; title: string; inner: string }): string {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#eef1f4;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(opts.title)}</div>
  <table cellpadding="0" cellspacing="0" role="presentation" width="100%" style="background:#eef1f4;padding:24px 0;">
    <tr><td align="center">
      <table cellpadding="0" cellspacing="0" role="presentation" width="640" style="width:640px;max-width:92%;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(10,20,38,.08);font-family:Arial,Helvetica,sans-serif;">
        <!-- header -->
        <tr><td style="background:${NAVY};padding:22px 28px;">
          <div style="color:#ffffff;font-size:22px;font-weight:800;letter-spacing:.01em;">AMERICAN GAGE</div>
          <div style="color:#9db6d2;font-size:12px;margin-top:3px;letter-spacing:.03em;">A2LA ISO/IEC 17025:2017 Accredited &middot; Cert #4296.01</div>
        </td></tr>
        <!-- title strip -->
        <tr><td style="padding:20px 28px 0;">
          <span style="display:inline-block;background:${ACCENT};color:#fff;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:4px;">${esc(opts.tag)}</span>
          <h2 style="margin:12px 0 2px;color:${NAVY};font-size:20px;">${esc(opts.title)}</h2>
          <p style="margin:0 0 4px;color:${MUTE};font-size:12px;">Submitted from americangage.com</p>
        </td></tr>
        <!-- body -->
        <tr><td style="padding:14px 28px 26px;">${opts.inner}</td></tr>
        <!-- footer -->
        <tr><td style="background:${SOFT};padding:16px 28px;border-top:1px solid ${LINE};">
          <p style="margin:0;color:${MUTE};font-size:12px;line-height:1.5;">American Gage &middot; 1131 S Richfield Rd, Placentia, CA 92870 &middot; (657) 216-2600<br/>Reply directly to this email to respond to the sender.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  </body></html>`;
}
