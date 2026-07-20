import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import JumpNav from '@/components/JumpNav';
import CTASection from '@/components/CTASection';
import GlossarySearch from '@/components/GlossarySearch';
import JsonLd from '@/components/JsonLd';
import { glossary, conversionTables, serviceLevels, type RefTable } from '@/data/calibrationReference';
import { fractionChart } from '@/data/fractionChart';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Calibration Resource: Glossary, Conversion Charts & Basics | American Gage' },
  description:
    'Free calibration reference from an A2LA-accredited lab: searchable metrology glossary, verified pressure/torque/length conversion charts, fraction-to-decimal-to-mm table, and calibration service levels explained.',
  alternates: { canonical: '/resources/calibration-resource' },
};

const jumpLinks = [
  { id: 'glossary', label: 'Glossary' },
  { id: 'service-levels', label: 'Service Levels' },
  { id: 'conversions', label: 'Conversions' },
  { id: 'fraction-chart', label: 'Fraction ↔ mm' },
  { id: 'basics', label: 'Calibration 101' },
];

function definedTermSetSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'American Gage Calibration Glossary',
    url: `${site.url}/resources/calibration-resource#glossary`,
    hasDefinedTerm: glossary.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
    })),
  };
}

function Table({ table, firstColHeader = true }: { table: RefTable; firstColHeader?: boolean }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-steel-200">
      <table className="w-full text-sm">
        <caption className="sr-only">{table.title}</caption>
        <thead>
          <tr className="bg-navy-800 text-left text-white">
            {table.headers.map((h, i) => (
              <th key={i} scope="col" className="whitespace-nowrap px-4 py-3 font-display">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-steel-100">
          {table.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`whitespace-nowrap px-4 py-2.5 ${
                    ci === 0 && firstColHeader ? 'font-medium text-navy-800' : 'font-mono text-steel-700'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CalibrationResourcePage() {
  return (
    <>
      <JsonLd data={definedTermSetSchema()} />
      <Breadcrumbs
        items={[
          { name: 'Resources', href: '/resources' },
          { name: 'Calibration Resource', href: '/resources/calibration-resource' },
        ]}
      />
      <PageHero
        eyebrow="Reference"
        title="The calibration reference desk."
        lead="A working reference for quality managers, technicians, and machinists: a metrology glossary written by our lab, conversion charts we verified computationally, and straight answers on how calibration levels work. Bookmark it — it beats scrolling a 72-minute page."
      />

      <JumpNav links={jumpLinks} label="Reference sections" />

      <div className="container-site max-w-4xl space-y-20 py-14">
        {/* Glossary */}
        <section id="glossary">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Calibration & metrology glossary
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <div className="mt-6">
            <GlossarySearch terms={glossary} />
          </div>
        </section>

        {/* Service levels */}
        <section id="service-levels">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            {serviceLevels.title}
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          {serviceLevels.note && <p className="mt-4 text-sm text-steel-600">{serviceLevels.note}</p>}
          <Table table={serviceLevels} />
          <p className="mt-3 text-sm text-steel-600">
            Not sure which level your auditors expect?{' '}
            <Link href="/resources/calibration-services-cost" className="font-semibold text-accent-600 hover:underline">
              Our cost guide explains the trade-off
            </Link>{' '}
            — or ask when you{' '}
            <Link href="/contact" className="font-semibold text-accent-600 hover:underline">
              request a quote
            </Link>
            .
          </p>
        </section>

        {/* Conversions */}
        <section id="conversions">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Conversion charts
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-4 text-sm text-steel-600">
            Every factor below was verified computationally against NIST SP 811 before
            publishing — because a reference chart with math errors is worse than none.
          </p>
          <div className="mt-6 space-y-10">
            {conversionTables.map((t) => (
              <div key={t.id} id={t.id}>
                <h3 className="font-display text-lg font-bold text-navy-800">{t.title}</h3>
                {t.note && <p className="mt-1 text-xs text-steel-500">{t.note}</p>}
                <Table table={t} />
              </div>
            ))}
          </div>
        </section>

        {/* Fraction chart */}
        <section id="fraction-chart">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Fraction → decimal → millimeter chart
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />
          <p className="mt-4 text-sm text-steel-600">
            All 64ths, exact values (1 in = 25.4 mm by definition), decimals to four places.
          </p>
          <div className="mt-6 grid gap-x-6 sm:grid-cols-2">
            {[fractionChart.slice(0, 32), fractionChart.slice(32)].map((half, hi) => (
              <div key={hi} className="mt-4 overflow-hidden rounded-lg border border-steel-200 sm:mt-0">
                <table className="w-full text-sm">
                  <caption className="sr-only">Fraction to decimal to millimeter, part {hi + 1}</caption>
                  <thead>
                    <tr className="bg-navy-800 text-left text-white">
                      <th scope="col" className="px-4 py-2.5 font-display">Fraction</th>
                      <th scope="col" className="px-4 py-2.5 font-display">Inches</th>
                      <th scope="col" className="px-4 py-2.5 font-display">mm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-steel-100">
                    {half.map((r) => (
                      <tr key={r.fraction} className={r.fraction.endsWith('/2') || r.fraction === '1/1' || r.fraction.endsWith('/4') ? 'bg-navy-50/70' : ''}>
                        <td className="px-4 py-1.5 font-medium text-navy-800">{r.fraction}</td>
                        <td className="px-4 py-1.5 font-mono text-steel-700">{r.inches}</td>
                        <td className="px-4 py-1.5 font-mono text-steel-700">{r.mm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        {/* Calibration 101 */}
        <section id="basics">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Calibration 101
          </h2>
          <div className="gauge-ticks mt-4" aria-hidden="true" />

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-display text-lg font-bold text-navy-800">What calibration actually is</h3>
              <p className="mt-2 leading-relaxed text-steel-700">
                Calibration is a documented comparison: your instrument’s readings against a
                reference standard whose value is known through an unbroken, NIST-traceable
                chain. The output is data — how far off the instrument reads at each test
                point — not just a sticker. Adjustment, if the instrument supports and needs
                it, is a separate act that calibration makes visible through as-found and
                as-left readings.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-navy-800">Why it’s worth paying for</h3>
              <p className="mt-2 leading-relaxed text-steel-700">
                Every acceptance decision your instruments make inherits their error. A
                drifted caliper quietly passes bad parts or rejects good ones; a drifted
                torque wrench under- or over-tightens every joint it touches. Calibration is
                the insurance policy on all of it — and when an instrument does turn up out
                of tolerance, as-found data is what lets you scope the damage instead of
                recalling everything it ever measured.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-navy-800">How intervals get set</h3>
              <p className="mt-2 leading-relaxed text-steel-700">
                No law says “annually.” Standards require planned, justified intervals —
                built from manufacturer guidance, how hard the instrument is used, and its
                own as-found history. Instruments that keep arriving in tolerance earn
                longer intervals; instruments that drift earn shorter ones. Our{' '}
                <Link href="/resources/how-often-should-instruments-be-calibrated" className="font-semibold text-accent-600 hover:underline">
                  calibration frequency guide
                </Link>{' '}
                has typical starting intervals by instrument type.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-navy-800">In-house vs. outsourced</h3>
              <p className="mt-2 leading-relaxed text-steel-700">
                Calibrating in-house means owning reference standards (and calibrating
                them), writing and maintaining procedures, training technicians, computing
                uncertainty budgets, and passing audits on all of it — a full metrology
                operation, sensible at high volume. Most manufacturers are better served
                sending instruments to an accredited lab and keeping their engineers on
                product. If you’re weighing it, ask us what your instrument list would
                actually cost both ways; the honest math usually settles it.
              </p>
            </div>
          </div>
        </section>
      </div>

      <CTASection
        heading="Reference desk open, lab door too."
        body="When the chart answers the question but the instrument still needs calibrating: send your list and get scope, pricing, and turnaround within one to two business days."
      />
    </>
  );
}
