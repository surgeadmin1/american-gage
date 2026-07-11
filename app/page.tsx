import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import StatsBand from '@/components/StatsBand';
import CTASection from '@/components/CTASection';
import { capabilities } from '@/data/capabilities';
import { blurMap } from '@/data/blur';
import { site, pickupRoutes } from '@/lib/site';

export const metadata: Metadata = {
  title: 'American Gage | A2LA ISO 17025 Accredited Calibration Lab — Placentia, CA',
  description:
    'A2LA ISO/IEC 17025:2017 accredited calibration lab in Placentia, CA serving aerospace, medical device, biotech & defense manufacturers since 1968. Free SoCal pickup & delivery. (657) 216-2600.',
  alternates: { canonical: '/' },
};

const services = [
  {
    title: 'Laboratory Calibration',
    href: '/services#laboratory',
    description:
      '8,000 sq ft of discipline-specific, environmentally controlled labs in Placentia. Standard 5–7 day turnaround, expedited 24/48/72-hour options.',
  },
  {
    title: 'On-Site Calibration',
    href: '/services#on-site',
    description:
      'Our technicians come to you with NIST-traceable standards — no production downtime, no shipping risk. After-hours and weekend emergency calls available.',
  },
  {
    title: 'Free Pickup & Delivery',
    href: '/services#pickup-delivery',
    description:
      'Scheduled routes across Orange County, LA County, and the Inland Empire. Your equipment rides with our drivers, not a courier.',
  },
  {
    title: 'Repair & Refurbishment',
    href: '/services#repair',
    description:
      'Dimensional tool repair with stocked OEM parts, surface plate resurfacing, hardness tester and electrical repair — estimates never exceed 50% of replacement cost.',
  },
];

const differentiators = [
  {
    title: 'You get a lab, not a queue',
    body: 'At national chains your instruments enter a nationwide workflow. Here, the technician calibrating your equipment is a direct phone call away — and knows your account, your tolerances, and your audit schedule.',
  },
  {
    title: 'Audit-ready evidence, every time',
    body: 'Every certificate documents as-found/as-left data, measurement uncertainty, NIST traceability, and the Z540.3 decision rule with TUR — the package FDA, AS9100, and ISO 13485 auditors ask for.',
  },
  {
    title: 'One-stop shop convenience',
    body: 'Calibration, repair, process troubleshooting, AMS 2750 surveys, and IQ/OQ/PQ validation under one roof — so your equipment list doesn’t get split across three vendors.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <Image
          src="/images/dimensional-height-gauge-surface-plate.webp"
          alt="American Gage technician calibrating a height gauge on a granite surface plate"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-900/40" aria-hidden="true" />
        <div className="container-site relative grid items-center gap-12 py-24 sm:py-28 lg:grid-cols-[1fr_340px] lg:py-32">
          <div>
            <p className="eyebrow !text-accent-400">
              A2LA Accredited · ISO/IEC 17025:2017 · Est. {site.founded}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Precision calibration, with a lab that actually knows your name.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-200">
              American Gage has been the calibration supplier of record for Southern
              California’s regulated manufacturers since 1968 — aerospace, medical device,
              biotech, and defense. NIST-traceable on every measurement, with free pickup and
              delivery across SoCal.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/capabilities" className="btn-ghost-light">
                Explore Capabilities
              </Link>
            </div>
            <p className="mt-6 font-mono text-sm text-steel-300">
              Quotes within one business day ·{' '}
              <a href={site.phoneHref} className="text-white underline decoration-accent-500 underline-offset-4 hover:text-accent-400">
                {site.phone}
              </a>
            </p>
          </div>

          {/* Trust panel */}
          <aside className="hidden lg:block" aria-label="Accreditation summary">
            <div className="rounded-lg border border-white/15 bg-navy-950/60 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/a2la-accredited-4296-01.jpg"
                  alt="A2LA Accredited symbol, certificate 4296.01"
                  width={72}
                  height={61}
                  className="h-14 w-auto rounded bg-white p-1"
                />
                <div>
                  <p className="font-display text-sm font-bold text-white">A2LA Accredited</p>
                  <p className="font-mono text-xs text-steel-300">Cert #{site.a2laCertNumber}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm text-steel-200">
                <li className="flex justify-between gap-3">
                  <span>Standard turnaround</span>
                  <span className="font-mono text-white">5–7 days</span>
                </li>
                <li className="flex justify-between gap-3">
                  <span>SoCal pickup routes</span>
                  <span className="font-mono text-white">Free</span>
                </li>
                <li className="flex justify-between gap-3">
                  <span>Calibrations performed</span>
                  <span className="font-mono text-white">1M+</span>
                </li>
              </ul>
              <a
                href={site.a2laScopeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-md border border-white/30 py-2.5 text-center font-display text-xs font-semibold uppercase tracking-wide text-white transition hover:border-accent-400 hover:text-accent-400"
              >
                Download A2LA Scope (PDF)
              </a>
            </div>
          </aside>
        </div>

        {/* Scroll cue */}
        <a
          href="#disciplines"
          aria-label="Scroll to capabilities"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-steel-300 transition hover:text-accent-400 sm:block"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="animate-bounce">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      <StatsBand />

      {/* Capabilities grid */}
      <section id="disciplines" className="container-site py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Eight disciplines. One accredited lab.
          </h2>
          <p className="mt-4 text-steel-600">
            Each measurement discipline runs in its own environmentally controlled
            laboratory — because a mass lab held to ±0.5 °C and a salt bath at 550 °C don’t
            belong in the same room.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <Link
              key={c.slug}
              href={`/capabilities/${c.slug}`}
              className="group overflow-hidden rounded-lg border border-steel-200 bg-white transition hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-navy-50">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurMap[c.image.src]}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="flex items-baseline justify-between gap-2 font-display text-lg font-bold text-navy-800 group-hover:text-accent-600">
                  {c.shortName}
                  <span
                    aria-hidden="true"
                    className="text-accent-500 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </h3>
                <p className="mt-1.5 font-mono text-xs text-steel-500">
                  {c.specs[0].label}: {c.specs[0].value}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-steel-500">
          Don’t see your instrument?{' '}
          <Link href="/capabilities" className="font-semibold text-accent-600 hover:underline">
            Search the full A–Z instrument index →
          </Link>
        </p>
      </section>

      {/* Services */}
      <section className="bg-navy-50">
        <div className="container-site py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              In our lab, at your facility, or door to door.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-lg border border-steel-200 bg-white p-6 transition hover:border-accent-500 hover:shadow-md"
              >
                <h3 className="font-display text-lg font-bold text-navy-800 group-hover:text-accent-600">
                  {s.title} →
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section aria-label="How it works" className="border-b border-steel-200">
        <div className="container-site py-16">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Three steps to audit-ready.
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Send your equipment list',
                body: 'Manufacturer, model, serial — spreadsheet or scribbles, we don’t judge. You get scope confirmation, pricing, and turnaround within one business day.',
              },
              {
                step: '02',
                title: 'We pick up on your route',
                body: 'Our driver collects your instruments on the next scheduled run through your county — or drop off anytime, or book on-site calibration at your facility.',
              },
              {
                step: '03',
                title: 'Certs land in your portal',
                body: 'Calibrated in 5–7 business days with as-found/as-left data, uncertainty, and NIST traceability — delivered back to you and accessible online 24/7.',
              },
            ].map((s) => (
              <li key={s.step} className="relative border-t-2 border-accent-500 pt-5">
                <span className="font-mono text-xs font-semibold text-accent-600">{s.step}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-navy-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Differentiator */}
      <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Why American Gage</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Big-lab accreditation. Small-lab attention.
          </h2>
          <p className="mt-4 leading-relaxed text-steel-600">
            The national calibration chains process enormous volume — which means your
            instruments are one barcode among thousands. We hold the same A2LA ISO/IEC
            17025:2017 accreditation they do, but with over a million calibrations performed
            from one Placentia lab, we deliver something they structurally can’t: a team that
            goes deep on every client’s program.
          </p>
          <dl className="mt-8 space-y-6">
            {differentiators.map((d) => (
              <div key={d.title} className="border-l-2 border-accent-500 pl-5">
                <dt className="font-display font-bold text-navy-800">{d.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-steel-600">{d.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/onsite-multimeter-fleet.webp"
              alt="American Gage technician calibrating a fleet of precision multimeters during an on-site service visit"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 rounded-lg border border-steel-200 bg-white p-5">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
              Free SoCal pickup routes
            </h3>
            <ul className="mt-3 grid gap-1 font-mono text-sm text-steel-600">
              {pickupRoutes.map((r) => (
                <li key={r.area} className="flex justify-between border-b border-steel-100 pb-1">
                  <span>{r.area}</span>
                  <span className="text-navy-700">{r.days}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Accreditation strip */}
      <section className="border-y border-steel-200">
        <div className="container-site flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between">
          <div className="flex items-center gap-6">
            <Image
              src="/images/a2la-accredited-4296-01.jpg"
              alt="A2LA Accredited symbol, certificate 4296.01"
              width={110}
              height={94}
              className="h-20 w-auto"
            />
            <div>
              <p className="font-display font-bold text-navy-900">
                ISO/IEC 17025:2017 · A2LA Certificate #{site.a2laCertNumber}
              </p>
              <p className="mt-1 text-sm text-steel-600">
                ANSI/NCSL Z540-1 & Z540.3 compliant · NIST traceable on every measurement
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={site.a2laScopeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-5 !py-2.5 text-center"
            >
              Download A2LA Scope (PDF)
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
