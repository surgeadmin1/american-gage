'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { capabilities } from '@/data/capabilities';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/capabilities', label: 'Capabilities', hasMenu: true },
  { href: '/industries', label: 'Industries' },
  { href: '/accreditations', label: 'Accreditations' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-steel-200 bg-white/95 backdrop-blur">
      {/* Utility bar */}
      <div className="hidden bg-navy-800 text-white sm:block">
        <div className="container-site flex items-center justify-between py-1.5 text-xs">
          <p className="font-mono tracking-wide">
            A2LA Accredited · ISO/IEC 17025:2017 · Cert #{site.a2laCertNumber}
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="font-semibold hover:text-accent-400">
              {site.phone}
            </a>
            <a
              href={site.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400"
            >
              Customer Portal ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-site grid grid-cols-[2.5rem_1fr_2.5rem] items-center py-3 lg:flex lg:justify-between lg:gap-6">
        {/* Invisible spacer mirrors the hamburger width so the logo is truly centered on mobile */}
        <div className="w-10 lg:hidden" aria-hidden="true" />
        <Link
          href="/"
          aria-label="American Gage home"
          className="shrink-0 justify-self-center lg:justify-self-auto"
        >
          <Image
            src="/images/american-gage-logo.png"
            alt="American Gage logo"
            width={220}
            height={101}
            priority
            className="h-14 w-auto lg:h-16"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className={`rounded px-3 py-2 font-display text-sm font-semibold transition hover:text-accent-600 ${
                  pathname.startsWith(link.href) ? 'text-accent-600' : 'text-navy-800'
                }`}
              >
                {link.label}
              </Link>
              {link.hasMenu && (
                <div className="invisible absolute left-0 top-full z-50 w-64 rounded-b-md border border-t-2 border-steel-200 border-t-accent-500 bg-white opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="py-2">
                    {capabilities.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/capabilities/${c.slug}`}
                          className="block px-4 py-2 text-sm text-steel-700 transition hover:bg-navy-50 hover:text-navy-800"
                        >
                          {c.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn-primary ml-3 !px-5 !py-2.5">
            Request a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className="rounded p-2 text-navy-800 lg:hidden"
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-steel-200 bg-white lg:hidden">
          <ul className="container-site divide-y divide-steel-100 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-display font-semibold text-navy-800"
                >
                  {link.label}
                </Link>
                {link.hasMenu && (
                  <ul className="pb-2 pl-4">
                    {capabilities.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/capabilities/${c.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-sm text-steel-600"
                        >
                          {c.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="space-y-2.5 py-3">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full">
                Request a Quote
              </Link>
              <a href={site.phoneHref} className="btn-secondary w-full">
                Call {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
