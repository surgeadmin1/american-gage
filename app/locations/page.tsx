import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';
import { pickupRoutes } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Areas — Calibration in SoCal & Nationwide Mail-In',
  description:
    'American Gage provides A2LA-accredited calibration with free pickup across Southern California (Orange County, LA County, Inland Empire) and fast mail-in service to manufacturers nationwide.',
  alternates: { canonical: '/locations' },
};

const local = locations.filter((l) => !l.nationalMailIn);
const nationwide = locations.filter((l) => l.nationalMailIn);

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Service Areas', href: '/locations' }]} />
      <PageHero
        eyebrow="Service Areas"
        title="One accredited lab. Local routes and nationwide mail-in."
        lead="Every instrument is calibrated at our A2LA-accredited laboratory in Placentia. Southern California gets free scheduled pickup and delivery; the rest of the country ships in and gets the same accredited certificates with fast turnaround."
      />

      <div className="container-site pb-16">
        <div className="mb-10 overflow-hidden rounded-lg border border-steel-200">
          <table className="w-full text-sm">
            <caption className="sr-only">Weekly free pickup routes</caption>
            <thead>
              <tr className="bg-navy-800 text-left text-white">
                <th scope="col" className="px-4 py-3 font-display">Service area</th>
                <th scope="col" className="px-4 py-3 font-display">Free route days</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-steel-100">
              {pickupRoutes.map((r) => (
                <tr key={r.area}>
                  <td className="px-4 py-3 font-medium text-navy-800">{r.area}</td>
                  <td className="px-4 py-3 font-mono text-navy-700">{r.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-xl font-bold text-navy-900">
          Southern California — free pickup & delivery
        </h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {local.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group overflow-hidden rounded-lg border border-steel-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] bg-navy-50">
                <Image
                  src={loc.heroImage.src}
                  alt={loc.heroImage.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="flex items-baseline justify-between gap-2 font-display text-lg font-bold text-navy-800 group-hover:text-accent-600">
                  {loc.shortName}
                  <span aria-hidden="true" className="text-accent-500 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </h3>
                <p className="mt-1.5 font-mono text-xs text-steel-500">{loc.proximity.routeDays}</p>
              </div>
            </Link>
          ))}
        </div>

        {nationwide.length > 0 && (
          <>
            <h2 className="mt-14 font-display text-xl font-bold text-navy-900">
              Nationwide — mail-in calibration
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-steel-600">
              Outside Southern California? Ship your instruments to our Placentia lab for the
              same A2LA-accredited calibration, typically returned in 7–10 business days.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nationwide.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-lg border border-steel-200 px-5 py-4 transition hover:border-accent-500 hover:shadow-sm"
                >
                  <span className="font-display font-semibold text-navy-800 group-hover:text-accent-600">
                    {loc.shortName}
                    <span className="ml-2 font-mono text-[11px] uppercase tracking-wide text-steel-400">
                      {loc.kind === 'state' ? 'State' : 'Metro'}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-accent-500 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <CTASection
        heading="Not on a route? Ask anyway."
        body="We regularly accommodate SoCal facilities outside the standard routes — and mail-in calibration is available nationwide for gage blocks and hand tools."
      />
    </>
  );
}
