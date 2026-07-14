import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ServiceIcon from '@/components/ServiceIcon';
import Breadcrumbs from '@/components/Breadcrumbs';
import JumpNav from '@/components/JumpNav';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { serviceSchema } from '@/lib/schema';
import { site, pickupRoutes } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Calibration Services: Lab, On-Site, Pickup & Repair',
  description:
    'ISO 17025 accredited lab calibration with 7–10 day turnaround, on-site calibration across Southern California, free pickup & delivery routes, equipment repair, and IQ/OQ/PQ validation.',
  alternates: { canonical: '/services' },
};

const jumpLinks = [
  { id: 'laboratory', label: 'Laboratory' },
  { id: 'on-site', label: 'On-Site' },
  { id: 'pickup-delivery', label: 'Pickup & Delivery' },
  { id: 'repair', label: 'Repair' },
  { id: 'process', label: 'Process & Surveys' },
  { id: 'validation', label: 'Validation' },
  { id: 'staffing', label: 'Staffing' },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Calibration Services',
          description: metadata.description as string,
          url: `${site.url}/services`,
        })}
      />
      <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />
      <PageHero
        eyebrow="Services"
        title="Calibration on your terms: in our lab, at your line, or door to door."
        lead="Every service below runs under the same A2LA ISO/IEC 17025:2017 accreditation and produces the same audit-ready certificate: as-found/as-left data, uncertainty, NIST traceability, and the Z540.3 decision rule."
      />

      <JumpNav links={jumpLinks} />

      <div className="container-site max-w-4xl space-y-20 py-16">
        {/* Laboratory */}
        <section id="laboratory">
          <h2 className="flex items-center gap-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            <ServiceIcon name="lab" />
            Laboratory Calibration
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            Our Placentia facility houses 8,000 sq ft of laboratories environmentally
            controlled to each measurement discipline’s requirements, running both manual and
            automated verification and calibration with some of the latest metrology
            equipment available.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-steel-200 p-5">
              <h3 className="font-display font-bold text-navy-800">Standard turnaround</h3>
              <p className="spec mt-2">7–10 business days</p>
              <p className="mt-1 text-sm text-steel-600">
                Gage block sets and other special-handling equipment may require additional
                time.
              </p>
            </div>
            <div className="rounded-lg border border-steel-200 p-5">
              <h3 className="font-display font-bold text-navy-800">Expedited service</h3>
              <p className="spec mt-2">24 / 48 / 72-hour options</p>
              <p className="mt-1 text-sm text-steel-600">
                Available for a fee. Contact customer service for pricing and availability.
              </p>
            </div>
          </div>
        </section>

        {/* On-site */}
        <section id="on-site">
          <h2 className="flex items-center gap-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            <ServiceIcon name="onsite" />
            On-Site Calibration
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            When downtime isn’t an option, our technicians come to you, equipped with
            NIST-traceable standards to calibrate at your facility. Our scheduling specialist
            will book a date that works around your production; we recommend reserving about
            two weeks ahead.
          </p>
          <div className="mt-6 overflow-hidden rounded-lg">
            <Image
              src="/images/onsite-multimeter-fleet.webp"
              alt="American Gage technician calibrating a fleet of Fluke 8845A precision multimeters during an on-site visit"
              width={1600}
              height={1200}
              className="w-full object-cover"
            />
          </div>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-steel-700">
            <li className="border-l-2 border-accent-500 pl-4">
              <strong className="text-navy-800">Emergency calls:</strong> after-hours and
              weekend service is available when you’re in a bind.
            </li>
            <li className="border-l-2 border-accent-500 pl-4">
              <strong className="text-navy-800">Service minimums:</strong>{' '}
              <span className="font-mono">$275</span> dimensional/mechanical,{' '}
              <span className="font-mono">$400</span> electrical,{' '}
              <span className="font-mono">$800</span> RF, plus round-trip travel at{' '}
              <span className="font-mono">$1.80/mile</span> (<span className="font-mono">$65</span> minimum).
            </li>
          </ul>
        </section>

        {/* Pickup */}
        <section id="pickup-delivery">
          <h2 className="flex items-center gap-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            <ServiceIcon name="pickup" />
            Free Pickup & Delivery
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            Your instruments ride in our delivery vans with our drivers, not in a courier’s
            parcel stream. Scheduled routes cover the greater Los Angeles area every week:
          </p>
          <div className="mt-6 overflow-hidden rounded-lg border border-steel-200">
            <table className="w-full text-sm">
              <caption className="sr-only">Weekly pickup and delivery routes</caption>
              <thead>
                <tr className="bg-navy-800 text-left text-white">
                  <th scope="col" className="px-4 py-3 font-display">Service area</th>
                  <th scope="col" className="px-4 py-3 font-display">Route days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-100">
                {pickupRoutes.map((r) => (
                  <tr key={r.area}>
                    <td className="px-4 py-3 font-medium text-navy-800">{r.area}</td>
                    <td className="spec px-4 py-3">{r.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-steel-600">
            Email{' '}
            <a href={`mailto:${site.email}`} className="font-semibold text-accent-600 hover:underline">
              {site.email}
            </a>{' '}
            or call{' '}
            <a href={site.phoneHref} className="font-semibold text-accent-600 hover:underline">
              {site.phone}
            </a>{' '}
            to get on a route. Walk-in drop-offs are always welcome. Just include a PO or
            packing list.
          </p>
        </section>

        {/* Repair */}
        <section id="repair">
          <h2 className="flex items-center gap-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            <ServiceIcon name="repair" />
            Repair & Refurbishment
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            We evaluate before we repair, and our estimates never exceed 50% of the new cost
            of the unit. Past that, we’ll tell you the honest answer: it’s beyond economical
            repair.
          </p>
          <dl className="mt-6 space-y-5">
            <div className="border-l-2 border-accent-500 pl-4">
              <dt className="font-display font-bold text-navy-800">Dimensional gage repair</dt>
              <dd className="mt-1 text-sm leading-relaxed text-steel-600">
                Every hand tool is cleaned and lubricated as part of calibration; minor
                repairs and battery replacement are included for most brands. We stock
                replacement parts for Mitutoyo, Starrett, Interapid, SPI, and other major
                manufacturers.
              </dd>
            </div>
            <div className="border-l-2 border-accent-500 pl-4">
              <dt className="font-display font-bold text-navy-800">Surface plate resurfacing</dt>
              <dd className="mt-1 text-sm leading-relaxed text-steel-600">
                Small granite plates are lapped to ±0.0001 in when needed; larger plates are
                resurfaced to the desired class. Badly pitted or out-of-tolerance plates get
                a straight recommendation for factory regrinding.
              </dd>
            </div>
            <div className="border-l-2 border-accent-500 pl-4">
              <dt className="font-display font-bold text-navy-800">Electrical repair</dt>
              <dd className="mt-1 text-sm leading-relaxed text-steel-600">
                Certified repair technicians handle major adjustments and board-level work.
                The evaluation fee is waived when you approve the repair. Reach the repair
                department at{' '}
                <a href={`mailto:${site.repairEmail}`} className="font-semibold text-accent-600 hover:underline">
                  {site.repairEmail}
                </a>.
              </dd>
            </div>
            <div className="border-l-2 border-accent-500 pl-4">
              <dt className="font-display font-bold text-navy-800">Hardness tester repair</dt>
              <dd className="mt-1 text-sm leading-relaxed text-steel-600">
                Repair and calibration service for hardness testers of all major types.
              </dd>
            </div>
          </dl>
        </section>

        {/* Process */}
        <section id="process">
          <h2 className="flex items-center gap-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            <ServiceIcon name="process" />
            Process Troubleshooting & Uniformity Surveys
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            Our process technicians troubleshoot process controls, heaters, ovens, and
            instrumentation to help you comply with GMP, USP, SAE, BAC, Nadcap, AMS 2750, and
            related standards. We perform oven and chamber temperature uniformity surveys
            (including AMS 2750 surveys for aerospace heat-treatment), and re-program
            controllers, recorders, and data acquisition systems.
          </p>
        </section>

        {/* Validation */}
        <section id="validation">
          <h2 className="flex items-center gap-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            <ServiceIcon name="validation" />
            Validation (IQ / OQ / PQ)
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            Built on our Kaye validator systems and advanced temperature & humidity
            laboratory, our validation service supports process and equipment qualification
            end to end: design qualification (DQ), installation qualification (IQ),
            operational qualification (OQ), and performance qualification (PQ), for
            pharmaceutical, biotech, and medical device environments.
          </p>
        </section>

        {/* Staffing */}
        <section id="staffing">
          <h2 className="flex items-center gap-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            <ServiceIcon name="staffing" />
            Calibration Staffing
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            GMP-trained process technicians are available for temporary or permanent on-site
            deployment, whether you need to complete a project, cover scheduled
            maintenance, or supplement your metrology team.{' '}
            <Link href="/contact" className="font-semibold text-accent-600 hover:underline">
              Ask us about staffing →
            </Link>
          </p>
        </section>
      </div>

      <CTASection />
    </>
  );
}
