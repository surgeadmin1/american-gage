import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import StatsBand from '@/components/StatsBand';
import CTASection from '@/components/CTASection';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us — A Calibration Lab Serving SoCal Since 1968',
  description:
    'American Gage has calibrated for Southern California manufacturers since 1968. 8,000 sq ft of discipline-specific labs in Placentia, CA — over one million calibrations performed.',
  alternates: { canonical: '/about' },
};

const timeline = [
  {
    year: '1968',
    text: 'Founded in Orange, CA as a dimensional calibration laboratory supporting the aerospace manufacturing industry.',
  },
  {
    year: '1998',
    text: 'Purchased by the current management, beginning the modern era of the company.',
  },
  {
    year: '2007',
    text: 'Acquired a local calibration laboratory — the turning point that expanded our customer base and capabilities beyond dimensional work.',
  },
  {
    year: 'Today',
    text: 'An 8,000 sq ft, A2LA-accredited facility in Placentia with discipline-specific environmentally controlled labs, serving aerospace, biotech, medical device, defense, electronics, and RF communications manufacturers.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
      <PageHero
        eyebrow={`Est. ${site.founded}`}
        title="Fifty-plus years of getting the measurement right."
        lead="American Gage started with gage blocks and aerospace machine shops. Over one million calibrations later, the mission hasn't changed: measurements your auditors trust, from people who know your name."
      />

      <div className="container-site grid gap-6 pb-16 sm:grid-cols-2 lg:gap-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/american-gage-facility.jpg"
            alt="Exterior of the American Gage calibration facility at 1131 S Richfield Rd, Placentia, California"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/american-gage-reception.jpg"
            alt="American Gage reception desk with backlit AG logo, where customers drop off equipment"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Timeline */}
      <section className="bg-navy-50">
        <div className="container-site py-16">
          <p className="eyebrow">History</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
            From one discipline to eight
          </h2>
          <ol className="mt-10 space-y-8 border-l-2 border-navy-200 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span
                  className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-navy-50 bg-accent-500"
                  aria-hidden="true"
                />
                <p className="font-mono text-sm font-semibold text-accent-600">{t.year}</p>
                <p className="mt-1 max-w-2xl leading-relaxed text-steel-700">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <StatsBand />

      {/* People + compliance */}
      <section className="container-site grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Our People</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Technicians who go deep, not wide
          </h2>
          <p className="mt-5 leading-relaxed text-steel-700">
            Our team brings over 30 years of experience in metrology and process
            calibration, performing thousands of calibrations each month. Because we're a
            single lab — not a national network — our technicians build real familiarity
            with each customer's equipment, tolerances, and audit calendar. That's the
            difference between a calibration vendor and a calibration partner: we help
            customers improve their whole calibration program, not just stamp certificates.
          </p>
        </div>
        <div>
          <p className="eyebrow">Our Compliance</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Accredited, compliant, traceable
          </h2>
          <p className="mt-5 leading-relaxed text-steel-700">
            American Gage is accredited to ISO/IEC 17025:2017 by A2LA (certificate{' '}
            {site.a2laCertNumber}) and complies with ANSI/NCSL Z540-1-1994 and Z540.3-2006.
            Our quality system is compliant with ISO 10012 and applicable portions of
            AS9100, IATF 16949, ISO 13485, and FDA 21 CFR requirements.
          </p>
          <Link href="/accreditations" className="btn-secondary mt-6">
            See Full Accreditation Detail
          </Link>
        </div>
      </section>

      <CTASection
        heading="Meet the lab your instruments deserve."
        body="Drop off during business hours, get on a free pickup route, or send your equipment list for a quote within one business day."
      />
    </>
  );
}
