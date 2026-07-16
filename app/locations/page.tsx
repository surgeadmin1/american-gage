import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';
import { pickupRoutes } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Areas — Calibration Across Southern California',
  description:
    'American Gage provides A2LA-accredited calibration across Southern California with free pickup routes: Orange County (Mon & Wed), Los Angeles County (Tue & Thu), Inland Empire (Fri).',
  alternates: { canonical: '/locations' },
};

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Service Areas', href: '/locations' }]} />
      <PageHero
        eyebrow="Service Areas"
        title="One accredited lab. Routes across Southern California."
        lead="Every instrument is calibrated at our A2LA-accredited laboratory in Placentia — and our vans bring the lab to you, with free scheduled pickup and delivery across the region."
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
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
                <h2 className="flex items-baseline justify-between gap-2 font-display text-lg font-bold text-navy-800 group-hover:text-accent-600">
                  {loc.shortName}
                  <span aria-hidden="true" className="text-accent-500 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </h2>
                <p className="mt-1.5 font-mono text-xs text-steel-500">{loc.proximity.routeDays}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTASection
        heading="Not on a route? Ask anyway."
        body="We regularly accommodate SoCal facilities outside the standard routes — and mail-in calibration is available nationwide for gage blocks and hand tools."
      />
    </>
  );
}
