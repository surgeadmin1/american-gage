import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Renders a content string that may contain inline markdown-style links:
 *   "…full [dimensional calibration](/capabilities/dimensional) coverage…"
 *
 * Internal links (href starting with "/") render as Next <Link>; external
 * links (http/https) open in a new tab with rel="noopener". Everything else
 * is plain text. Used for body paragraphs and leads so we can place
 * keyword-anchored SEO crosslinks directly in the prose.
 */
const LINK_RE = /\[([^\]]+)\]\((\/[^)]+|https?:\/\/[^)]+)\)/g;

export default function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    if (href.startsWith('/')) {
      parts.push(
        <Link key={key++} href={href} className="font-medium text-accent-600 hover:underline">
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent-600 hover:underline"
        >
          {label}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
