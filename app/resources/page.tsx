import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { resources } from '@/data/resources';

export const metadata: Metadata = {
  title: 'Calibration Resources — Compliance & Buyer Guides',
  description:
    'Practical calibration guides from an A2LA-accredited lab: AS9100, ISO 13485 & FDA 21 CFR calibration requirements, calibration cost factors, and how often to calibrate instruments.',
  alternates: { canonical: '/resources' },
};

export default function ResourcesPage() {
  const categories = ['Compliance', 'Buyer Guides'] as const;

  return (
    <>
      <Breadcrumbs items={[{ name: 'Resources', href: '/resources' }]} />
      <PageHero
        eyebrow="Resources"
        title="Calibration guidance you can take into an audit."
        lead="Written by the lab, not a content farm: what the standards actually require, what things cost, and how to run intervals you can defend."
      />

      <div className="container-site max-w-4xl space-y-12 pb-16">
        {/* Featured reference hub */}
        <Link
          href="/resources/calibration-resource"
          className="group block rounded-lg border-2 border-navy-700 bg-navy-800 p-6 transition hover:border-accent-500 sm:p-8"
        >
          <p className="eyebrow !text-accent-400">Reference Desk</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white group-hover:text-accent-400">
            Calibration Resource: Glossary, Conversions & Basics →
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel-200">
            A searchable metrology glossary, computationally verified conversion charts
            (pressure, torque, length, temperature), the full fraction→decimal→mm table,
            and calibration service levels explained. Built to bookmark.
          </p>
        </Link>

        {categories.map((cat) => (
          <section key={cat}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-steel-500">{cat}</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {resources
                .filter((r) => r.category === cat)
                .map((r) => (
                  <Link
                    key={r.slug}
                    href={`/resources/${r.slug}`}
                    className="group rounded-lg border border-steel-200 p-6 transition hover:border-accent-500 hover:shadow-md"
                  >
                    <p className="font-mono text-xs text-steel-500">{r.readMinutes} min read</p>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy-800 group-hover:text-accent-600">
                      {r.title} →
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-steel-600">
                      {r.lead}
                    </p>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>

      <CTASection
        heading="Questions a guide can't answer?"
        body="Call the lab — a metrologist picks up. Or send your equipment list and compliance requirements for a quote within one business day."
      />
    </>
  );
}
