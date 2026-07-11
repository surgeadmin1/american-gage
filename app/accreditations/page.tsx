import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import JumpNav from '@/components/JumpNav';
import CTASection from '@/components/CTASection';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Accreditations — A2LA ISO/IEC 17025:2017, Cert #4296.01',
  description:
    'American Gage holds ISO/IEC 17025:2017 accreditation through A2LA (certificate 4296.01), with ANSI/NCSL Z540-1 and Z540.3 compliance and NIST traceability on every measurement.',
  alternates: { canonical: '/accreditations' },
};

const jumpLinks = [
  { id: 'iso-17025', label: 'ISO/IEC 17025' },
  { id: 'z540', label: 'ANSI/NCSL Z540' },
  { id: 'nist', label: 'NIST Traceability' },
  { id: 'certificates', label: 'Your Certificate' },
  { id: 'supplier-packets', label: 'Supplier Packets' },
];

export default function AccreditationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Accreditations', href: '/accreditations' }]} />
      <PageHero
        eyebrow="Accreditations"
        title="The paperwork that makes your paperwork hold up."
        lead="When an FDA inspector, notified-body auditor, or AS9100 customer-quality reviewer examines your calibration records, what they're really checking is the accreditation your lab operates under. Here is ours — with the scope PDF one click away."
      />

      <JumpNav links={jumpLinks} />

      <div className="container-site max-w-4xl space-y-20 py-16">
        <section id="iso-17025">
          <div className="flex flex-col items-start gap-8 sm:flex-row">
            <Image
              src="/images/a2la-accredited-4296-01.jpg"
              alt="A2LA Accredited symbol for American Gage, certificate number 4296.01"
              width={160}
              height={136}
              className="w-32 shrink-0"
            />
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                ISO/IEC 17025:2017 — Accredited by A2LA
              </h2>
              <dl className="mt-5 grid gap-x-10 gap-y-3 font-mono text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-steel-500">Accreditation body</dt>
                  <dd className="text-navy-800">A2LA (American Association for Laboratory Accreditation)</dd>
                </div>
                <div>
                  <dt className="text-steel-500">Certificate number</dt>
                  <dd className="text-navy-800">{site.a2laCertNumber}</dd>
                </div>
                <div>
                  <dt className="text-steel-500">Standard</dt>
                  <dd className="text-navy-800">ISO/IEC 17025:2017</dd>
                </div>
                <div>
                  <dt className="text-steel-500">Scope</dt>
                  <dd className="text-navy-800">
                    Dimensional · Electrical · Mass · Mechanical · Pressure & Flow ·
                    Temperature & Humidity · Pipette
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-steel-700">
            ISO/IEC 17025 is the international standard for the competence of calibration and
            testing laboratories. Accreditation means an independent body — in our case,
            A2LA — has verified that we operate a documented quality system, use traceable
            measurement standards, calculate measurement uncertainty correctly, and issue
            certificates that meet international expectations. For most regulated work —
            AS9100, ISO 13485, IATF 16949, FDA 21 CFR — ISO 17025 accreditation is the
            qualifying evidence your calibration supplier has to bring.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.a2laScopeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download Current A2LA Scope (PDF)
            </a>
            <a href={site.a2laDirectoryUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Verify in A2LA Directory
            </a>
          </div>
        </section>

        <section id="z540">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            ANSI/NCSL Z540 Compliance
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            American Gage operates in compliance with both editions of the ANSI/NCSL Z540
            series:
          </p>
          <ul className="mt-5 space-y-4">
            <li className="border-l-2 border-accent-500 pl-5">
              <p className="font-display font-bold text-navy-800">ANSI/NCSL Z540-1-1994</p>
              <p className="mt-1 text-sm text-steel-600">
                “Calibration Laboratories and Measuring and Test Equipment — General
                Requirements.”
              </p>
            </li>
            <li className="border-l-2 border-accent-500 pl-5">
              <p className="font-display font-bold text-navy-800">ANSI/NCSL Z540.3-2006</p>
              <p className="mt-1 text-sm text-steel-600">
                “Requirements for the Calibration of Measuring and Test Equipment” —
                including the documented decision rule and test uncertainty ratio (TUR) that
                DoD primes, defense contractors, and most aerospace customers require on
                every certificate.
              </p>
            </li>
          </ul>
          <p className="mt-6 leading-relaxed text-steel-700">
            Every certificate we issue documents the TUR and the decision rule applied,
            supporting the false-accept risk analysis Z540.3-compliant customers run on
            incoming calibration evidence.
          </p>
        </section>

        <section id="nist">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            NIST Traceability
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            Every measurement we issue connects, through an unbroken chain of calibrations,
            to a U.S. national standard at the National Institute of Standards and
            Technology. The chain carries a stated uncertainty at each link, is documented on
            every certificate, and is what makes our calibration evidence acceptable to FDA,
            AS9100, ISO 13485, and Z540.3-driven audits worldwide.
          </p>
        </section>

        <section id="certificates">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            What every certificate includes
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <ul className="mt-6 grid gap-x-8 gap-y-2 text-sm leading-relaxed text-steel-700 sm:grid-cols-2">
            {[
              'Instrument ID — manufacturer, model, serial, asset tag',
              'As-found readings before any adjustment',
              'As-left readings after calibration',
              'Measurement uncertainty (GUM; ISO 8655-7 for pipettes)',
              'Reference standards used + NIST traceability chain',
              'Environmental conditions during calibration',
              'Technician identity',
              'Calibration date + recommended due date',
              'Decision rule per Z540.3, with TUR documented',
            ].map((item) => (
              <li key={item} className="flex items-baseline gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-steel-600">
            This format supports FDA inspection (21 CFR Parts 211 and 820), AS9100
            customer-quality audits, ISO 13485 notified-body audits, Nadcap pyrometry
            reviews, and IATF 16949 supplier-qualification audits. Certificates are also
            accessible online through our{' '}
            <a href={site.portalUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent-600 hover:underline">
              customer portal
            </a>.
          </p>
        </section>

        <section id="supplier-packets">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Supplier-qualification packets
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-6 leading-relaxed text-steel-700">
            Qualifying us as a supplier should take you an afternoon, not a month. Our
            standard packet includes the current A2LA scope of accreditation, certificate of
            insurance (additional insureds added on request), an ISO 9001 customer letter on
            request, and quality-manual excerpts. Send the qualification template your
            procurement team uses — we fill it out and return it.
          </p>
        </section>
      </div>

      <CTASection
        heading="Need our scope for a supplier file?"
        body="Download the current A2LA scope PDF above, or request the full supplier-qualification packet — we return filled templates promptly."
      />
    </>
  );
}
