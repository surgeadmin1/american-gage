'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function StickyQuote() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrolledPast = window.scrollY > 600;
      // Hide near the page bottom so we never overlap the CTA band / footer,
      // which carry their own quote buttons.
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
      className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Link href="/contact" className="btn-primary !px-4 !py-2.5 shadow-xl sm:!px-6 sm:!py-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <span className="sm:hidden">Get a Quote</span>
        <span className="hidden sm:inline">Request a Quote</span>
      </Link>
    </div>
  );
}
