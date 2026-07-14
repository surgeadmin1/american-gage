import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Calibration FAQ: Turnaround, Pickup Routes, Accreditation',
  description:
    'Answers about American Gage calibration services: turnaround times, free SoCal pickup and delivery routes, on-site minimums, NIST traceability, A2LA accreditation, and repairs.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lead="Logistics, turnaround, accreditation, and everything in between. If your question isn't here, call the lab. A human answers."
      />

      <div className="container-site max-w-3xl pb-20">
        <div className="divide-y divide-steel-200 rounded-lg border border-steel-200">
          {faqs.map((f) => (
            <details key={f.question} className="group px-6 py-4 open:bg-navy-50/50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-navy-800 [&::-webkit-details-marker]:hidden">
                {f.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-accent-500 transition-transform group-open:rotate-45"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-steel-700">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <CTASection
        heading="Still have a question?"
        body="Call (657) 216-2600 during business hours (Monday through Friday, 7:30 AM to 4:00 PM), or send a message and we'll respond within one business day."
      />
    </>
  );
}
