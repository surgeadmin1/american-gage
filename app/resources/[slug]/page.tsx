import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';
import { resources, getResource } from '@/data/resources';
import { site } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) return {};
  return {
    title: { absolute: article.metaTitle },
    description: article.metaDescription,
    alternates: { canonical: `/resources/${article.slug}` },
  };
}

function articleSchema(a: NonNullable<ReturnType<typeof getResource>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.metaDescription,
    url: `${site.url}/resources/${a.slug}`,
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: { '@id': `${site.url}/#business` },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) notFound();

  const others = resources.filter((r) => r.slug !== article.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={[articleSchema(article), faqSchema(article.faqs)]} />
      <Breadcrumbs
        items={[
          { name: 'Resources', href: '/resources' },
          { name: article.title, href: `/resources/${article.slug}` },
        ]}
      />

      <article className="container-site max-w-3xl py-10">
        <p className="eyebrow">
          {article.category} · {article.readMinutes} min read
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {article.title}
        </h1>
        <div className="gauge-ticks mt-5" aria-hidden="true" />
        <p className="mt-6 text-lg leading-relaxed text-steel-600">{article.lead}</p>

        <div className="mt-4 rounded-md bg-navy-50 px-4 py-3 text-xs leading-relaxed text-steel-600">
          General guidance from the metrologists at American Gage — an A2LA ISO/IEC
          17025:2017 accredited laboratory (cert #{site.a2laCertNumber}). For interpretation
          specific to your registration or filings, consult your registrar, notified body,
          or quality/regulatory team.
        </div>

        <div className="mt-10 space-y-12">
          {article.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl font-bold text-navy-900">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-steel-700">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-4 space-y-2 text-steel-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-baseline gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {s.table && (
                <div className="mt-5 overflow-x-auto rounded-lg border border-steel-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-navy-800 text-left text-white">
                        {s.table.headers.map((h) => (
                          <th key={h} scope="col" className="px-4 py-3 font-display">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-steel-100">
                      {s.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, i) => (
                            <td
                              key={i}
                              className={`px-4 py-2.5 ${i === 0 ? 'font-medium text-navy-800' : i === 1 ? 'font-mono text-navy-700' : 'text-steel-600'}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {/* FAQs */}
          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">Common questions</h2>
            <div className="mt-5 divide-y divide-steel-200 rounded-lg border border-steel-200">
              {article.faqs.map((f) => (
                <details key={f.question} className="group px-6 py-4 open:bg-navy-50/50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-navy-800 [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span aria-hidden="true" className="shrink-0 text-accent-500 transition-transform group-open:rotate-45">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-steel-700">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related links */}
          <nav aria-label="Related pages" className="rounded-lg border border-steel-200 bg-navy-50/60 p-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
              Related on americangage.com
            </h2>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {article.relatedLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-medium text-navy-700 hover:text-accent-600">
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* More resources */}
          {others.length > 0 && (
            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-steel-500">
                More guides
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/resources/${o.slug}`} className="font-medium text-navy-700 hover:text-accent-600">
                      {o.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>

      <CTASection
        heading="Put this into practice."
        body="Send your equipment list with the compliance regimes that apply — we'll confirm service levels, pricing, and turnaround within one business day."
      />
    </>
  );
}
