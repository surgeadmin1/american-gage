import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import {
  blogPosts,
  getPost,
  articlesForPillar,
  pillarOf,
  type BlogPost,
} from '@/data/blog';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function articleSchema(p: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.metaDescription,
    url: `${site.url}/blog/${p.slug}`,
    datePublished: p.date,
    dateModified: p.updated ?? p.date,
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: { '@id': `${site.url}/#business` },
    image: `${site.url}${p.heroImage.src}`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const isPillar = post.type === 'pillar';
  const parent = pillarOf(post);
  const children = isPillar ? articlesForPillar(post.slug) : [];

  const crumbs = [{ name: 'Blog', href: '/blog' }];
  if (parent) crumbs.push({ name: parent.category, href: `/blog/${parent.slug}` });
  crumbs.push({ name: post.title, href: `/blog/${post.slug}` });

  const schema = post.faqs?.length
    ? [articleSchema(post), faqSchema(post.faqs)]
    : [articleSchema(post)];

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={crumbs} />

      <article className="container-site max-w-3xl py-10">
        <p className="eyebrow">
          {post.category} · {post.readMinutes} min read
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {post.title}
        </h1>
        <div className="gauge-ticks mt-5" aria-hidden="true" />
        <p className="mt-6 text-lg leading-relaxed text-steel-600">{post.lead}</p>

        {/* Hero image */}
        <figure className="mt-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={post.heroImage.src}
              alt={post.heroImage.alt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
          {post.heroImage.credit && (
            <figcaption className="mt-2 text-xs text-steel-500">{post.heroImage.credit}</figcaption>
          )}
        </figure>

        {parent && (
          <p className="mt-6 rounded-md bg-navy-50 px-4 py-3 text-sm text-steel-600">
            Part of our guide to{' '}
            <Link href={`/blog/${parent.slug}`} className="font-semibold text-accent-600 hover:underline">
              {parent.title}
            </Link>
            .
          </p>
        )}

        <div className="mt-10 space-y-12">
          {post.sections.map((s) => (
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
              {s.image && (
                <figure className="mt-6">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(min-width: 768px) 768px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {s.image.credit && (
                    <figcaption className="mt-2 text-xs text-steel-500">{s.image.credit}</figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}

          {/* Pillar: list its subtopic articles */}
          {isPillar && children.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-bold text-navy-900">In this guide</h2>
              <ul className="mt-5 divide-y divide-steel-200 rounded-lg border border-steel-200">
                {children.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/blog/${c.slug}`}
                      className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-navy-50"
                    >
                      <span className="font-display font-semibold text-navy-800">{c.title}</span>
                      <span aria-hidden="true" className="shrink-0 text-accent-500">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-bold text-navy-900">Common questions</h2>
              <div className="mt-5 divide-y divide-steel-200 rounded-lg border border-steel-200">
                {post.faqs.map((f) => (
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
          )}

          {/* Internal crosslinks */}
          <nav aria-label="Related pages" className="rounded-lg border border-steel-200 bg-navy-50/60 p-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
              Related on americangage.com
            </h2>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {post.internalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-medium text-navy-700 hover:text-accent-600">
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* External authoritative sources */}
          {post.externalLinks.length > 0 && (
            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-steel-500">
                Authoritative sources
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {post.externalLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-navy-700 hover:text-accent-600"
                    >
                      {l.label} <span className="text-steel-400">({l.source}) ↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>

      <CTASection
        heading="Put this into practice."
        body="Send your equipment list and the compliance regimes your customers reference — we'll come back with scope, pricing, and turnaround."
      />
    </>
  );
}
