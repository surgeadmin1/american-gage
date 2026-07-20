import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { serviceSchema } from '@/lib/schema';
import { capabilities, getCapability } from '@/data/capabilities';
import { instrumentPages } from '@/data/instrumentPages';
import { blurMap } from '@/data/blur';
import { site } from '@/lib/site';

/** Map capability industry labels to /industries anchors */
function industryAnchor(label: string): string {
  const l = label.toLowerCase();
  if (l.includes('aero') || l.includes('defense') || l.includes('automotive')) return 'aerospace-defense';
  if (l.includes('medical')) return 'medical-device';
  if (l.includes('bio') || l.includes('pharma') || l.includes('clinical')) return 'biotech-pharma';
  if (l.includes('electronic') || l.includes('rf') || l.includes('semicond')) return 'electronics';
  return 'manufacturing';
}

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cap = getCapability(slug);
  if (!cap) return {};
  return {
    title: { absolute: cap.metaTitle },
    description: cap.metaDescription,
    alternates: { canonical: `/capabilities/${cap.slug}` },
  };
}

export default async function CapabilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cap = getCapability(slug);
  if (!cap) notFound();

  const others = capabilities.filter((c) => c.slug !== cap.slug);
  const spokes = instrumentPages.filter((p) => p.capabilitySlug === cap.slug);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: cap.name,
          description: cap.metaDescription,
          url: `${site.url}/capabilities/${cap.slug}`,
        })}
      />
      <Breadcrumbs
        items={[
          { name: 'Capabilities', href: '/capabilities' },
          { name: cap.shortName, href: `/capabilities/${cap.slug}` },
        ]}
      />

      <div className="container-site grid gap-12 py-10 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="eyebrow">Capability</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {cap.name}
          </h1>
          <p className="mt-2 font-display text-lg font-medium text-accent-600">{cap.headline}</p>
          <div className="gauge-ticks mt-5" aria-hidden="true" />

          {/* Discipline photo, shown here on mobile, in the sidebar on desktop */}
          <div className="relative mt-6 aspect-[3/2] overflow-hidden rounded-lg lg:hidden">
            <Image
              src={cap.image.src}
              alt={cap.image.alt}
              fill
              sizes="100vw"
              placeholder="blur"
              blurDataURL={blurMap[cap.image.src]}
              className="object-cover"
            />
          </div>

          <p className="mt-6 max-w-2xl leading-relaxed text-steel-700">{cap.intro}</p>

          {/* Key specs */}
          <div className="mt-8 overflow-hidden rounded-lg border border-steel-200">
            <table className="w-full text-sm">
              <caption className="sr-only">Key specifications for {cap.name}</caption>
              <tbody className="divide-y divide-steel-100">
                {cap.specs.map((s) => (
                  <tr key={s.label}>
                    <th scope="row" className="w-1/2 bg-navy-50 px-4 py-3 text-left font-medium text-navy-800">
                      {s.label}
                    </th>
                    <td className="spec px-4 py-3">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Reference equipment */}
          <h2 className="mt-12 font-display text-2xl font-bold text-navy-900">
            Reference standards in this lab
          </h2>
          <ul className="mt-5 space-y-4">
            {cap.equipment.map((e) => (
              <li key={e.name} className="border-l-2 border-accent-500 pl-5">
                <p className="font-display font-bold text-navy-800">{e.name}</p>
                <p className="mt-0.5 text-sm text-steel-600">{e.detail}</p>
              </li>
            ))}
          </ul>

          {/* Instruments */}
          <h2 className="mt-12 font-display text-2xl font-bold text-navy-900">
            Instruments we calibrate
          </h2>
          <ul className="mt-5 grid gap-x-8 gap-y-1.5 text-sm text-steel-700 sm:grid-cols-2">
            {cap.instruments.map((i) => (
              <li key={i} className="flex items-baseline gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-steel-500">
            Representative list. The{' '}
            <a href={site.a2laScopeUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent-600 hover:underline">
              current A2LA scope PDF
            </a>{' '}
            documents accredited ranges and CMC uncertainty at every point.
          </p>

          {/* Hub → spoke links */}
          {spokes.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-2xl font-bold text-navy-900">
                Dedicated {cap.shortName.toLowerCase()} services
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {spokes.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="block rounded-md border border-steel-200 px-4 py-3 text-sm font-medium text-navy-800 transition hover:border-accent-500 hover:text-accent-600"
                    >
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:pt-11">
          <div className="relative hidden aspect-[3/2] overflow-hidden rounded-lg lg:block">
            <Image
              src={cap.image.src}
              alt={cap.image.alt}
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              placeholder="blur"
              blurDataURL={blurMap[cap.image.src]}
              className="object-cover"
            />
          </div>
          <div className="rounded-lg border border-steel-200 bg-navy-50 p-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
              Common industries
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {cap.industries.map((ind) => (
                <li key={ind}>
                  <Link
                    href={`/industries#${industryAnchor(ind)}`}
                    className="block rounded-full border border-navy-200 bg-white px-3 py-1 text-xs text-navy-800 transition hover:border-accent-500 hover:text-accent-600"
                  >
                    {ind}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-6 w-full">
              Request a Quote
            </Link>
            <a href={site.phoneHref} className="mt-3 block text-center font-mono text-sm text-navy-800 hover:text-accent-600">
              or call {site.phone}
            </a>
          </div>
          <nav aria-label="Other capabilities" className="rounded-lg border border-steel-200 p-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
              Other capabilities
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/capabilities/${o.slug}`} className="text-steel-600 transition hover:text-accent-600">
                    {o.shortName} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      <CTASection
        heading={`Need ${cap.shortName.toLowerCase()} calibration?`}
        body="Send your equipment list and we’ll confirm scope, pricing, and turnaround within one to two business days, with free pickup if you’re on a SoCal route."
        image={cap.image.src}
      />
    </>
  );
}
