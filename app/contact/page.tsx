import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { site, pickupRoutes } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & Request a Quote: Placentia, CA Calibration Lab',
  description:
    'Request a calibration quote from American Gage, with a response within one business day. 1131 S Richfield Rd, Placentia, CA 92870. (657) 216-2600. Free SoCal pickup & delivery.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
      <PageHero
        eyebrow="Contact"
        title="Quotes within one business day. Humans on the phone."
        lead="Send your equipment list: manufacturer, model, serial, ITAR status if applicable, and any compliance regimes your customers reference. We come back with scope confirmation, pricing, and turnaround."
      />

      <div className="container-site grid gap-12 pb-20 lg:grid-cols-[1fr_360px]">
        <div>
          <ContactForm />
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-steel-200 bg-navy-50 p-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
              The Lab
            </h2>
            <address className="mt-3 space-y-2 text-sm not-italic text-steel-700">
              <p>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p>
                <a href={site.phoneHref} className="font-semibold text-navy-800 hover:text-accent-600">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="break-all text-accent-600 hover:underline">
                  {site.email}
                </a>
              </p>
              <p className="font-mono text-xs">{site.hours}</p>
            </address>
            <p className="mt-4 text-xs text-steel-500">
              Drop-offs welcome during business hours. Include a PO or packing list.
            </p>
          </div>

          <div className="rounded-lg border border-steel-200 p-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy-800">
              Free Pickup Routes
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-steel-700">
              {pickupRoutes.map((r) => (
                <li key={r.area} className="flex justify-between gap-4 border-b border-steel-100 pb-2">
                  <span className="font-medium">{r.area}</span>
                  <span className="font-mono text-xs text-navy-700">{r.days}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-steel-200">
            <iframe
              title="Map to American Gage, 1131 S Richfield Rd, Placentia, CA 92870"
              src="https://www.google.com/maps?q=1131+S+Richfield+Rd,+Placentia,+CA+92870&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </>
  );
}
