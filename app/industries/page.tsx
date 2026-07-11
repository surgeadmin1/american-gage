import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import JumpNav from '@/components/JumpNav';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Industries Served — Aerospace, Medical Device, Biotech, Defense',
  description:
    'Calibration for regulated industries in Southern California: AS9100 aerospace & defense, ISO 13485 medical device, FDA 21 CFR pharma & biotech, electronics & semiconductor manufacturers.',
  alternates: { canonical: '/industries' },
};

const jumpLinks = [
  { id: 'aerospace-defense', label: 'Aerospace & Defense' },
  { id: 'medical-device', label: 'Medical Device' },
  { id: 'biotech-pharma', label: 'Biotech & Pharma' },
  { id: 'electronics', label: 'Electronics & Semiconductor' },
  { id: 'manufacturing', label: 'General Manufacturing' },
];

type Industry = {
  id: string;
  name: string;
  standards: string[];
  body: string[];
  capabilities: { label: string; href: string }[];
};

const industries: Industry[] = [
  {
    id: 'aerospace-defense',
    name: 'Aerospace & Defense',
    standards: ['AS9100', 'Nadcap / AMS 2750', 'ANSI/NCSL Z540.3', 'DoD supplier requirements'],
    body: [
      'American Gage was founded in 1968 supporting Orange County aerospace manufacturing, and aerospace remains in our DNA. When your customer-quality reviewer checks calibration evidence for a Nadcap-flagged process, our certificates hold up: every one documents the decision rule and test uncertainty ratio (TUR) that Z540.3-driven aerospace and defense customers require.',
      'We perform AMS 2750 temperature uniformity surveys on ovens and furnaces, calibrate the dimensional workload that dominates machine shops — gage blocks, thread gages, micrometers, indicators — and note ITAR status on quotes when your program requires it.',
    ],
    capabilities: [
      { label: 'Dimensional', href: '/capabilities/dimensional' },
      { label: 'Force & Torque', href: '/capabilities/force-torque' },
      { label: 'Temperature (AMS 2750 surveys)', href: '/capabilities/temperature-humidity' },
      { label: 'Pressure', href: '/capabilities/pressure' },
    ],
  },
  {
    id: 'medical-device',
    name: 'Medical Device',
    standards: ['ISO 13485', 'FDA 21 CFR Part 820', 'Notified-body audits'],
    body: [
      'Medical device quality managers need calibration suppliers whose evidence survives notified-body audits and FDA inspections. Our A2LA-accredited certificates document as-found/as-left data, measurement uncertainty, and unbroken NIST traceability — the package your supplier-qualification file needs.',
      'We calibrate the full medical device manufacturing workload, from dimensional inspection tools to environmental chambers, and supply standard supplier-qualification packets (A2LA scope, COI, quality-manual excerpts) on request.',
    ],
    capabilities: [
      { label: 'Dimensional', href: '/capabilities/dimensional' },
      { label: 'Temperature & Humidity', href: '/capabilities/temperature-humidity' },
      { label: 'Electrical', href: '/capabilities/electrical' },
      { label: 'Mass & Balances', href: '/capabilities/mass' },
    ],
  },
  {
    id: 'biotech-pharma',
    name: 'Biotechnology & Pharmaceutical',
    standards: ['FDA 21 CFR Part 211', 'GMP / GxP', 'USP', 'ISO 8655'],
    body: [
      'From pipettes calibrated to ISO 8655 (gravimetric and photometric) to balance calibration in a mass lab held to ±0.5 °C, we support the daily metrology load of GMP facilities. Our Kaye validator systems extend that support into full IQ/OQ/PQ qualification of chambers, freezers, and process equipment.',
      'GMP-trained process technicians are available for on-site work and staffing placements, and our validation and process-troubleshooting services help you resolve deviations before they become findings.',
    ],
    capabilities: [
      { label: 'Pipettes', href: '/capabilities/pipettes' },
      { label: 'Mass & Balances', href: '/capabilities/mass' },
      { label: 'Temperature & Humidity', href: '/capabilities/temperature-humidity' },
      { label: 'Validation (IQ/OQ/PQ)', href: '/services#validation' },
    ],
  },
  {
    id: 'electronics',
    name: 'Electronics, RF & Semiconductor',
    standards: ['ISO/IEC 17025 evidence', 'IPC / J-STD environments'],
    body: [
      'Our electrical lab runs Fluke MET/CAL automated procedures against precision reference standards, calibrating everything from 8.5-digit bench multimeters to spectrum analyzers, network analyzers, and signal generators in our RF racks.',
      'For semiconductor and process tools, our molbloc/molbox gas-flow bench calibrates mass flow controllers with live setpoint control — a capability few independent SoCal labs offer.',
    ],
    capabilities: [
      { label: 'Electrical & RF', href: '/capabilities/electrical' },
      { label: 'Gas Flow / MFCs', href: '/capabilities/flow' },
      { label: 'Temperature & Humidity', href: '/capabilities/temperature-humidity' },
    ],
  },
  {
    id: 'manufacturing',
    name: 'General & Discrete Manufacturing',
    standards: ['ISO 9001', 'IATF 16949 supplier requirements'],
    body: [
      'Machine shops and discrete manufacturers across Southern California use us as their single calibration source: calipers and micrometers on the Monday pickup route, surface plates resurfaced in place, torque wrenches verified before the next audit.',
      'No minimum account size, no call center — the same lab manager answers the phone whether you send five instruments a year or five hundred.',
    ],
    capabilities: [
      { label: 'Dimensional', href: '/capabilities/dimensional' },
      { label: 'Force & Torque', href: '/capabilities/force-torque' },
      { label: 'Pressure', href: '/capabilities/pressure' },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Industries', href: '/industries' }]} />
      <PageHero
        eyebrow="Industries"
        title="Built for regulated manufacturers — and the audits that come with them."
        lead="Different industries audit calibration differently. AS9100 reviewers look for Z540.3 decision rules. FDA inspectors trace 21 CFR records. Notified bodies check ISO 13485 supplier files. We speak all of them."
      />

      <JumpNav links={jumpLinks} />

      <div className="container-site max-w-4xl space-y-20 py-16">
        {industries.map((ind) => (
          <section key={ind.id} id={ind.id}>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">{ind.name}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ind.standards.map((s) => (
                <li key={s} className="rounded-full bg-navy-50 px-3 py-1 font-mono text-xs text-navy-800">
                  {s}
                </li>
              ))}
            </ul>
            {ind.body.map((p, i) => (
              <p key={i} className="mt-5 leading-relaxed text-steel-700">
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              {ind.capabilities.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-md border border-steel-300 px-4 py-2 text-sm font-medium text-navy-800 transition hover:border-accent-500 hover:text-accent-600"
                >
                  {c.label} →
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CTASection
        heading="Your auditor has requirements. So do we."
        body="Send the supplier-qualification template your procurement team uses — we fill it out and return it with the current A2LA scope, COI, and quality-manual excerpts."
      />
    </>
  );
}
