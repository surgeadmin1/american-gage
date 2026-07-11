import Link from 'next/link';
import { site } from '@/lib/site';

export default function CTASection({
  heading = 'Get a quote within one business day.',
  body = 'Send your equipment list — manufacturer, model, serial, and any compliance regimes your customers reference. We come back with scope confirmation, pricing, and turnaround.',
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy-800">
      <div className="container-site flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="gauge-ticks mb-4" aria-hidden="true" />
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
          <p className="mt-3 text-steel-200">{body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
          <a href={site.phoneHref} className="btn-ghost-light">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
