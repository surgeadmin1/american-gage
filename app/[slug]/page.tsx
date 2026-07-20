import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { instrumentPages, getInstrumentPage } from '@/data/instrumentPages';
import { getCapability } from '@/data/capabilities';
import { site, pickupRoutes } from '@/lib/site';

/**
 * Top-level exact-match-slug SEO pages (e.g. /torque-wrench-calibration).
 * Only slugs defined in data/instrumentPages.ts are generated; anything else 404s.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return instrumentPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getInstrumentPage(slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function InstrumentSeoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getInstrumentPage(slug);
  if (!page) notFound();

  const hub = getCapability(page.capabilitySlug);
  const related = page.related
    .map((r) => getInstrumentPage(r))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: page.name,
            description: page.metaDescription,
            url: `${site.url}/${page.slug}`,
          }),
          faqSchema(page.faqs),
        ]}
      />
      <Breadcrumbs items={[{ name: page.name, href: `/${page.slug}` }]} />

      {/* Hero */}
      <div className="container-site grid items-center gap-10 py-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">{page.nationalMailIn ? 'Nationwide Service' : 'Calibration Service'}</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {page.h1}
          </h1>
          <div className="gauge-ticks mt-5" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-steel-600">{page.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a href={site.phoneHref} className="btn-secondary">
              Call {site.phone}
            </a>
          </div>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
          <Image
            src={page.image.src}
            alt={page.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Specs band */}
      <section aria-label="Service specifications" className="border-y border-steel-200 bg-navy-50">
        <div className="container-site grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {page.specs.slice(0, 4).map((s) => (
            <div key={s.label}>
              <p className="font-mono text-xs uppercase tracking-wider text-steel-500">{s.label}</p>
              <p className="mt-1 font-display font-semibold text-navy-800">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <div className="container-site grid gap-12 py-14 lg:grid-cols-[1fr_320px]">
        <div className="max-w-3xl space-y-12">
          {page.sections.map((s) => (
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

          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">What we see most</h2>
            <ul className="mt-5 grid gap-x-8 gap-y-1.5 text-sm text-steel-700 sm:grid-cols-2">
              {page.itemsWeSee.map((i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {page.name} FAQs
            </h2>
            <div className="mt-5 divide-y divide-steel-200 rounded-lg border border-steel-200">
              {page.faqs.map((f) => (
                <details key={f.question} className="group px-6 py-4 open:bg-navy-50/50">
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
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-lg border border-steel-200 bg-navy-50 p-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
              {page.nationalMailIn ? 'Mail-In & Local Routes' : 'Free Pickup Routes'}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-steel-700">
              {pickupRoutes.map((r) => (
                <li key={r.area} className="flex justify-between gap-3 border-b border-steel-200/60 pb-2">
                  <span>{r.area}</span>
                  <span className="font-mono text-xs text-navy-700">{r.days}</span>
                </li>
              ))}
            </ul>
            {page.nationalMailIn && (
              <p className="mt-3 text-xs leading-relaxed text-steel-600">
                Outside SoCal? Ship to {site.address.street}, {site.address.city},{' '}
                {site.address.state} {site.address.zip} with a PO or packing list.
              </p>
            )}
            <Link href="/contact" className="btn-primary mt-5 w-full">
              Request a Quote
            </Link>
          </div>

          {hub && (
            <div className="rounded-lg border border-steel-200 p-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
                Full discipline
              </h2>
              <p className="mt-2 text-sm text-steel-600">
                This service is part of our {hub.shortName.toLowerCase()} laboratory.
              </p>
              <Link
                href={`/capabilities/${hub.slug}`}
                className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline"
              >
                {hub.name} →
              </Link>
            </div>
          )}

          {related.length > 0 && (
            <nav aria-label="Related services" className="rounded-lg border border-steel-200 p-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
                Related services
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/${r.slug}`} className="text-steel-600 transition hover:text-accent-600">
                      {r.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>
      </div>

      <CTASection
        heading={`Need ${page.name.toLowerCase()}?`}
        body="Send your list — manufacturer, model, quantity — and we'll return scope, pricing, and turnaround within one to two business days."
        image={page.image.src}
      />
    </>
  );
}
