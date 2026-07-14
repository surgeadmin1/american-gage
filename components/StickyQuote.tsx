'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';

/**
 * Sticky conversion bar — slim, full-width, pinned to the bottom of the
 * viewport with the two highest-value CTAs (quote + call). Appears after the
 * visitor scrolls past the hero; hides near the page bottom, where the CTA
 * band and footer carry their own buttons.
 */
export default function StickyQuote() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrolledPast = window.scrollY > 600;
      const nearBottom =
        window.innerHeight + window.scrollY > document.body.scrollHeight - 700;
      setVisible(scrolledPast && !nearBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname === '/contact') return null;

  return (
    <div
      role="complementary"
      aria-label="Quick contact"
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <div className="border-t border-white/10 bg-navy-950/95 shadow-[0_-4px_20px_rgba(5,20,38,0.35)] backdrop-blur">
        <div className="container-site flex items-center justify-between gap-3 py-2.5">
          <p className="hidden font-mono text-xs text-steel-300 md:block">
            A2LA Accredited · Free SoCal pickup · Quotes within one business day
          </p>
          <div className="flex w-full items-center gap-2.5 md:w-auto">
            <Link
              href="/contact"
              className="btn-primary flex-1 !px-4 !py-2.5 md:flex-none sm:!px-6"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
              <span className="sm:hidden">Get a Quote</span>
              <span className="hidden sm:inline">Request a Quote</span>
            </Link>
            <a
              href={site.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/40 px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition hover:border-accent-400 hover:text-accent-400 md:flex-none"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">{site.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
