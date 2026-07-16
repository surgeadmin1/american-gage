import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { locations, getLocation } from '@/data/locations';
import { capabilities } from '@/data/capabilities';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: { absolute: loc.metaTitle },
    description: loc.metaDescription,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

const labPhotos = [
  {
    src: '/images/dimensional-height-gauge-surface-plate.webp',
    alt: 'American Gage technician calibrating a height gauge on a granite surface plate',
  },
  {
    src: '/images/electrical-calibration-bench.webp',
    alt: 'Electrical calibration bench with precision reference standards at American Gage',
  },
  {
    src: '/images/onsite-multimeter-fleet.webp',
    alt: 'American Gage technician calibrating a fleet of multimeters during on-site service',
  },
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const neighbors = loc.neighbors
    .map((n) => getLocation(n))
    .filter((n): n is NonNullable<typeof n> => Boolean(n));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Calibration Services — ${loc.shortName}`,
            description: loc.metaDescription,
            url: `${site.url}/locations/${loc.slug}`,
          }),
          faqSchema(loc.faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: 'Service Areas', href: '/locations' },
          { name: loc.shortName, href: `/locations/${loc.slug}` },
        ]}
      />

      {/* Hero */}
      <div className="container-site grid items-center gap-10 py-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Service Area · {loc.kind === 'city' ? 'City' : loc.kind === 'county' ? 'County' : 'Region'}</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {loc.h1}
          </h1>
          <div className="gauge-ticks mt-5" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-steel-600">{loc.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a href={site.phoneHref} className="btn-secondary">
              Call {site.phone}
            </a>
          </div>
        </div>
        <figure>
          <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
            <Image
              src={loc.heroImage.src}
              alt={loc.heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-1.5 text-right font-mono text-[11px] text-steel-400">
            Photo: {loc.heroImage.credit}
          </figcaption>
        </figure>
      </div>

      {/* Proximity band */}
      <section aria-label="Location logistics" className="border-y border-steel-200 bg-navy-50">
        <div className="container-site grid gap-6 py-8 sm:grid-cols-3">
          {[
            { label: 'Distance', value: loc.proximity.distance },
            { label: 'Drive time', value: loc.proximity.drive },
            { label: 'Route days', value: loc.proximity.routeDays },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-xs uppercase tracking-wider text-steel-500">{item.label}</p>
              <p className="mt-1 font-display font-semibold text-navy-800">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Body sections */}
      <div className="container-site max-w-3xl space-y-12 py-14">
        {loc.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">{s.heading}</h2>
            <div className="gauge-ticks mt-4" aria-hidden="true" />
            {s.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 leading-relaxed text-steel-700">
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* Industries */}
        <section>
          <h2 className="font-display text-2xl font-bold text-navy-900">
            Industries we serve in {loc.shortName}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {loc.industries.map((ind) => (
              <li key={ind} className="rounded-full bg-navy-50 px-4 py-1.5 text-sm text-navy-800">
                {ind}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Lab photo strip */}
      <section aria-label="Inside the laboratory" className="bg-navy-900">
        <div className="container-site py-14">
          <p className="eyebrow !text-accent-400">The Lab Behind the Routes</p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold text-white sm:text-3xl">
            Where {loc.shortName} instruments actually get calibrated.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {labPhotos.map((p) => (
              <div key={p.src} className="relative aspect-[3/2] overflow-hidden rounded-lg">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-steel-300">
            8,000 sq ft of discipline-specific, environmentally controlled laboratories in
            Placentia — accredited to ISO/IEC 17025:2017 by A2LA, certificate #
            {site.a2laCertNumber}. Nothing is forwarded to out-of-state labs.
          </p>
        </div>
      </section>

      {/* Capabilities links */}
      <section className="container-site py-14">
        <h2 className="font-display text-2xl font-bold text-navy-900">
          Calibration capabilities available to {loc.shortName} companies
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/capabilities/${c.slug}`}
                className="block rounded-md border border-steel-200 px-4 py-3 text-sm font-medium text-navy-800 transition hover:border-accent-500 hover:text-accent-600"
              >
                {c.shortName} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQs */}
      <section className="border-t border-steel-200 bg-navy-50/50">
        <div className="container-site max-w-3xl py-14">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            {loc.shortName} calibration FAQs
          </h2>
          <div className="mt-6 divide-y divide-steel-200 rounded-lg border border-steel-200 bg-white">
            {loc.faqs.map((f) => (
              <details key={f.question} className="group px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-navy-800 [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <span aria-hidden="true" className="shrink-0 text-accent-500 transition-transform group-open:rotate-45">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-steel-700">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      {neighbors.length > 0 && (
        <section className="container-site py-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-steel-500">
            Nearby service areas
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {neighbors.map((n) => (
              <li key={n.slug}>
                <Link href={`/locations/${n.slug}`} className="font-medium text-navy-700 hover:text-accent-600">
                  Calibration in {n.shortName} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <CTASection
        heading={`Need calibration in ${loc.shortName}?`}
        body={`Send your equipment list and we'll confirm scope, pricing, and turnaround within one business day — with free pickup on the ${loc.proximity.routeDays.split(' — ')[0]} route.`}
      />
    </>
  );
}
