import Link from 'next/link';
import Image from 'next/image';
import { site, pickupRoutes } from '@/lib/site';
import { capabilities } from '@/data/capabilities';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-steel-200">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/american-gage-logo.png"
            alt="American Gage logo"
            width={200}
            height={92}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed">
            A2LA ISO/IEC 17025:2017 accredited calibration laboratory serving Southern
            California manufacturers since {site.founded}.
          </p>
          <div className="gauge-ticks mt-5" aria-hidden="true" />
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Capabilities
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {capabilities.map((c) => (
              <li key={c.slug}>
                <Link href={`/capabilities/${c.slug}`} className="transition hover:text-accent-400">
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services" className="transition hover:text-accent-400">Services</Link></li>
            <li><Link href="/industries" className="transition hover:text-accent-400">Industries</Link></li>
            <li><Link href="/accreditations" className="transition hover:text-accent-400">Accreditations</Link></li>
            <li><Link href="/about" className="transition hover:text-accent-400">About Us</Link></li>
            <li><Link href="/careers" className="transition hover:text-accent-400">Careers</Link></li>
            <li><Link href="/resources" className="transition hover:text-accent-400">Resources</Link></li>
            <li><Link href="/faq" className="transition hover:text-accent-400">FAQ</Link></li>
            <li><Link href="/contact" className="transition hover:text-accent-400">Contact</Link></li>
            <li>
              <a href={site.portalUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent-400">
                Customer Portal ↗
              </a>
            </li>
            <li>
              <a href={site.a2laScopeUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent-400">
                A2LA Scope of Accreditation (PDF) ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-navy-800 bg-navy-950/50 p-5 sm:-m-5 sm:p-5">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-400">
            Visit or Call
          </h2>
          <address className="mt-4 space-y-2.5 text-sm not-italic">
            <p>
              <a
                href="https://maps.google.com/?q=1131+S+Richfield+Rd,+Placentia,+CA+92870"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-accent-400"
              >
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip} ↗
              </a>
            </p>
            <p>
              <a
                href={site.phoneHref}
                className="font-display text-xl font-bold text-white transition hover:text-accent-400"
              >
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="transition hover:text-accent-400">
                {site.email}
              </a>
            </p>
            <p className="font-mono text-xs">{site.hours}</p>
          </address>
          <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-white">
            Free Pickup Routes
          </h3>
          <ul className="mt-2 space-y-1 font-mono text-xs">
            {pickupRoutes.map((r) => (
              <li key={r.area}>
                {r.days}: {r.area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-steel-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} American Gage. All rights reserved. · A2LA Cert #
            {site.a2laCertNumber}
          </p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent-400"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
