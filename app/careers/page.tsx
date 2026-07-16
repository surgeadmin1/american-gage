import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CareersForm from '@/components/CareersForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Careers — Calibration Technician Jobs in Placentia, CA',
  description:
    'Join American Gage, an A2LA-accredited calibration laboratory in Placentia, CA serving Southern California since 1968. Now hiring calibration technicians across all disciplines.',
  alternates: { canonical: '/careers' },
};

const highlights = [
  {
    title: 'Learn a real trade',
    body: 'Metrology is a skill that stays in demand across aerospace, medical device, and defense. Train hands-on across eight disciplines — from gage blocks to RF racks — instead of being siloed into one bench.',
  },
  {
    title: 'A lab, not a call center',
    body: 'We’re a single 8,000 sq ft facility, not a national chain. You’ll know every customer account, work directly with the lab manager, and see how your work keeps SoCal manufacturers audit-ready.',
  },
  {
    title: 'Stability since 1968',
    body: 'Over one million calibrations performed for Southern California’s regulated industries. Calibration doesn’t go out of style — instruments always need to be right.',
  },
];

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Careers', href: '/careers' }]} />
      <PageHero
        eyebrow="Careers"
        title="Do work where being exactly right is the whole job."
        lead="American Gage is always looking for sharp, detail-obsessed people — especially calibration technicians. Experienced metrologists and mechanically-minded beginners alike: if you like instruments, tolerances, and getting it right, we want to hear from you."
      />

      {/* Why AG */}
      <section className="container-site grid gap-6 pb-16 md:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.title} className="rounded-lg border border-steel-200 p-6">
            <div className="gauge-ticks mb-4 !w-16" aria-hidden="true" />
            <h2 className="font-display text-lg font-bold text-navy-800">{h.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">{h.body}</p>
          </div>
        ))}
      </section>

      {/* Featured role */}
      <section className="border-y border-steel-200 bg-navy-50">
        <div className="container-site grid items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Now Hiring</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Calibration Technician
            </h2>
            <p className="mt-4 leading-relaxed text-steel-700">
              Calibrate, maintain, and troubleshoot precision measurement equipment in our
              discipline-specific labs — dimensional hand tools, electrical and RF
              instruments, temperature and humidity, pressure, mass, pipettes, force and
              torque, and gas flow. You’ll perform calibrations against NIST-traceable
              standards, record as-found/as-left data, and work to the requirements of our
              ISO/IEC 17025:2017 accreditation.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-steel-700">
              {[
                'All experience levels considered — from military metrology (PMEL/TMDE) and ASQ-certified veterans to trainable entry-level candidates',
                'Full-time, on-site at our Placentia, CA laboratory (some on-site customer work by van — clean driving record a plus)',
                'Attention to detail, documentation discipline, and comfort with computers required',
              ].map((li) => (
                <li key={li} className="flex items-baseline gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  {li}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-steel-500">
              Not a technician? We also welcome applications for driver/logistics and
              customer service roles — use the same form.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/dimensional-height-gauge-surface-plate.webp"
              alt="American Gage calibration technician working at a granite surface plate in the dimensional lab"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="container-site max-w-3xl py-16">
        <p className="eyebrow">Apply</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
          Application
        </h2>
        <p className="mt-3 text-steel-600">
          Takes about three minutes. A resume is required — PDF or Word. Questions? Call{' '}
          <a href={site.phoneHref} className="font-semibold text-accent-600 hover:underline">
            {site.phone}
          </a>{' '}
          during business hours.
        </p>
        <div className="mt-8">
          <CareersForm />
        </div>
      </section>
    </>
  );
}
