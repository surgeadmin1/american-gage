import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { pillars, articlesForPillar } from '@/data/blog';

export const metadata: Metadata = {
  title: { absolute: 'Calibration & Metrology Blog | American Gage' },
  description:
    'Practical calibration and metrology guides from an A2LA ISO/IEC 17025 accredited lab: fundamentals, accreditation, measurement uncertainty, compliance, and discipline-specific how-tos.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />
      <PageHero
        eyebrow="Blog"
        title="Calibration, explained by the people who do it."
        lead="Ten in-depth topic hubs and the focused articles beneath them — written by our metrologists to answer the questions quality managers, technicians, and buyers actually ask. No fluff, no filler."
      />

      <div className="container-site space-y-14 pb-16">
        {pillars.map((pillar) => {
          const articles = articlesForPillar(pillar.slug);
          return (
            <section key={pillar.slug} aria-labelledby={`p-${pillar.slug}`}>
              <div className="grid gap-6 rounded-xl border border-steel-200 bg-white p-6 sm:grid-cols-[220px_1fr] sm:p-8">
                <Link
                  href={`/blog/${pillar.slug}`}
                  className="relative block aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={pillar.heroImage.src}
                    alt={pillar.heroImage.alt}
                    fill
                    sizes="(min-width: 640px) 220px, 100vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </Link>
                <div>
                  <p className="eyebrow">{pillar.category}</p>
                  <h2 id={`p-${pillar.slug}`} className="mt-2 font-display text-xl font-bold text-navy-900 sm:text-2xl">
                    <Link href={`/blog/${pillar.slug}`} className="hover:text-accent-600">
                      {pillar.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-steel-600">{pillar.lead}</p>
                  {articles.length > 0 && (
                    <ul className="mt-4 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
                      {articles.map((a) => (
                        <li key={a.slug} className="flex items-baseline gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                          <Link href={`/blog/${a.slug}`} className="font-medium text-navy-700 hover:text-accent-600">
                            {a.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection heading="Have a calibration question we haven't covered?" />
    </>
  );
}
