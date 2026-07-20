import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import InstrumentIndex from '@/components/InstrumentIndex';
import { capabilities } from '@/data/capabilities';
import { blurMap } from '@/data/blur';

export const metadata: Metadata = {
  title: 'Calibration Capabilities: A–Z Instrument Index',
  description:
    'Full calibration capabilities of American Gage: dimensional, electrical & RF, temperature & humidity, pressure, mass, pipettes, force & torque, gas flow, and vibration. Search 100+ instrument types.',
  alternates: { canonical: '/capabilities' },
};

/** Match instrument names to dedicated spoke pages for deep internal links */
function serviceHrefFor(name: string): string | undefined {
  const n = name.toLowerCase();
  if (n.includes('pipette')) return '/pipette-calibration';
  if (n.includes('torque wrench')) return '/torque-wrench-calibration';
  if (n.includes('pressure gauge')) return '/pressure-gauge-calibration';
  if (n.includes('caliper')) return '/caliper-calibration';
  if (n.includes('micrometer')) return '/micrometer-calibration';
  if (n.includes('gage block')) return '/gage-block-calibration';
  if (n.includes('multimeter')) return '/multimeter-calibration';
  if (n.includes('balance') || n.includes('scale') || n.includes('mass standard') || n.includes('weight set'))
    return '/scale-calibration';
  if (n.includes('surface plate')) return '/surface-plate-calibration';
  if (n.includes('thread ring') || n.includes('thread plug') || n.includes('ring gage') || n.includes('plug gage'))
    return '/thread-gage-calibration';
  if (n.includes('force gauge') || n.includes('push-pull')) return '/force-gauge-calibration';
  if (n.includes('hardness')) return '/hardness-tester-calibration';
  return undefined;
}

export default function CapabilitiesPage() {
  const indexed = capabilities.flatMap((c) =>
    c.instruments.map((name) => ({
      name,
      capability: c.shortName,
      slug: c.slug,
      serviceHref: serviceHrefFor(name),
    }))
  );

  return (
    <>
      <Breadcrumbs items={[{ name: 'Capabilities', href: '/capabilities' }]} />
      <PageHero
        eyebrow="Capabilities"
        title="Every discipline has its own lab. Every measurement has a traceable chain."
        lead="From gage blocks to spectrum analyzers, our 8,000 sq ft facility runs discipline-specific, environmentally controlled laboratories accredited to ISO/IEC 17025:2017 by A2LA. If you don’t see your instrument below, ask. The list keeps growing."
      />

      {/* Discipline cards */}
      <section className="container-site pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <Link
              key={c.slug}
              href={`/capabilities/${c.slug}`}
              className="group overflow-hidden rounded-lg border border-steel-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] bg-navy-50">
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
                <h2 className="flex items-baseline justify-between gap-2 font-display text-lg font-bold text-navy-800 group-hover:text-accent-600">
                  {c.shortName}
                  <span
                    aria-hidden="true"
                    className="text-accent-500 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </h2>
                <p className="mt-1.5 line-clamp-2 text-sm text-steel-600">{c.headline}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-steel-200 bg-navy-50 p-6">
          <h2 className="font-display font-bold text-navy-800">
            Beyond the nine disciplines
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel-600">
            We also troubleshoot process control systems and instrumentation, perform oven
            and chamber uniformity surveys (including AMS 2750 for aerospace heat treatment),
            and re-program controllers, recorders, and data acquisition systems. Don’t see
            your instrument? Call the lab — the scope keeps growing.
          </p>
        </div>
      </section>

      {/* A–Z index */}
      <section id="instrument-index" className="border-t border-steel-200 bg-white">
        <div className="container-site py-16">
          <p className="eyebrow">Instrument Index</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
            What we calibrate, A to Z
          </h2>
          <div className="mt-8">
            <InstrumentIndex instruments={indexed} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Don’t see your instrument?"
        body="The index above is representative, not exhaustive. Send us the manufacturer and model. If it measures something, odds are we can calibrate it or repair it."
      />
    </>
  );
}
