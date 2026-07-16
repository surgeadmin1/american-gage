/**
 * Tier-2/3 SEO "spoke" pages — one page per instrument-level keyword.
 *
 * Hub-and-spoke: /capabilities/[slug] pages are the discipline hubs; these
 * top-level exact-match-slug pages target "[instrument] calibration" queries
 * (geo-modified for OC/LA where the keyword research calls for it, national
 * mail-in angle for gage blocks). Not linked from main nav — discoverable via
 * sitemap, location pages, and cross-links.
 *
 * ACCURACY: all ranges/specs must match data/capabilities.ts (sourced from the
 * client's verified equipment). Do not invent capability claims.
 */

export type InstrumentPage = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  image: { src: string; alt: string };
  capabilitySlug: string; // parent hub
  sections: { heading: string; paragraphs: string[] }[];
  specs: { label: string; value: string }[];
  itemsWeSee: string[];
  faqs: { question: string; answer: string }[];
  related: string[]; // other instrument page slugs
  nationalMailIn?: boolean;
};

export const instrumentPages: InstrumentPage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'pipette-calibration',
    name: 'Pipette Calibration',
    metaTitle: 'Pipette Calibration in Orange County & Los Angeles | ISO 8655 | American Gage',
    metaDescription:
      'ISO 8655 pipette calibration for OC & LA biotech, pharma and medical device labs — gravimetric & photometric, up to accredited 3×10 data, free lab pickup routes. A2LA ISO 17025 cert 4296.01.',
    h1: 'Pipette Calibration in Orange County & Los Angeles',
    lead:
      'Southern California’s biotech and medical device labs run on pipettes — and on the calibration data behind them. American Gage calibrates single- and multi-channel pipettes to ISO 8655 under A2LA ISO/IEC 17025 accreditation, with free pickup routes through Orange County (Mon & Wed) and LA County (Tue & Thu).',
    image: {
      src: '/images/pipette-photometric-calibration.jpg',
      alt: 'Photometric pipette calibration station in the American Gage life science laboratory',
    },
    capabilitySlug: 'pipettes',
    sections: [
      {
        heading: 'Gravimetric and photometric — matched to your compliance level',
        paragraphs: [
          'Both ISO 8655 methods are available in our environmentally controlled life-science lab: gravimetric verification on analytical balances, and dye-based photometric verification for low volumes and multi-channel heads. Service levels scale with your quality system — from a standard 2×4 As Found / As Left verification up to fully accredited 3×10 / 3×10 data with measurement uncertainty per ISO 8655-7.',
          'For GMP, ISO 13485, and CLIA-adjacent environments, certificates document as-found/as-left readings at each test volume, uncertainty, environmental conditions, and NIST traceability — the package your auditors expect to trace.',
        ],
      },
      {
        heading: 'Built for lab logistics',
        paragraphs: [
          'Pipettes shouldn’t sit in a courier network for two weeks. Our own drivers collect through Orange County every Monday and Wednesday and Los Angeles County every Tuesday and Thursday — free — with standard 7–10 business day turnaround and expedited options. Preventive maintenance and repair (seals, o-rings, pistons) can be handled on the same service, so instruments come back both accurate and healthy.',
        ],
      },
    ],
    specs: [
      { label: 'Method', value: 'Gravimetric & photometric (ISO 8655)' },
      { label: 'Service levels', value: '2×4 standard → 3×10 accredited' },
      { label: 'Uncertainty methodology', value: 'ISO 8655-7' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Single-channel pipettes (fixed & adjustable)',
      'Multi-channel pipettes (8/12-channel)',
      'Electronic / motorized pipettes',
      'Repeaters & dispensers',
      'Bottle-top dispensers',
      'Burettes',
    ],
    faqs: [
      {
        question: 'How often should pipettes be calibrated?',
        answer:
          'Most GMP and ISO 13485 quality systems verify pipettes every 3–12 months depending on usage and criticality; many high-throughput labs add quick interim checks. We calibrate to your SOP’s interval and can recommend one based on as-found history.',
      },
      {
        question: 'Do you offer accredited pipette calibration with data?',
        answer:
          'Yes — up to 3×10 / 3×10 accredited service under our A2LA ISO/IEC 17025:2017 accreditation, with uncertainty calculated per ISO 8655-7 on every test volume.',
      },
      {
        question: 'Can you service pipettes as well as calibrate them?',
        answer:
          'Yes — preventive maintenance and repair are available on the same visit, so out-of-tolerance pipettes can be repaired, re-calibrated, and returned in one cycle.',
      },
    ],
    related: ['caliper-calibration', 'pressure-gauge-calibration'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'torque-wrench-calibration',
    name: 'Torque Wrench Calibration',
    metaTitle: 'Torque Wrench Calibration in Orange County & LA | 0.5 ozf·in–1,000 lbf·ft | American Gage',
    metaDescription:
      'Accredited torque wrench calibration from 0.5 ozf·in to 1,000 lbf·ft with repair parts in stock. Free OC & LA pickup routes, 7–10 day turnaround. A2LA ISO 17025. (657) 216-2600.',
    h1: 'Torque Wrench Calibration in Orange County & Los Angeles',
    lead:
      'From aerospace assembly torque to a maintenance cart’s click wrench, American Gage calibrates torque tools across 0.5 ozf·in to 1,000 lbf·ft — with common repair parts stocked, so a failed wrench doesn’t mean a lost wrench.',
    image: {
      src: '/images/force-calibration-stand.webp',
      alt: 'Force and torque calibration equipment in the American Gage mechanical laboratory',
    },
    capabilitySlug: 'force-torque',
    sections: [
      {
        heading: 'Why torque calibration is the audit item that bites',
        paragraphs: [
          'Torque wrenches drift with use — clutches wear, springs relax, and a wrench that clicked true in January can run several percent out by summer. That’s why AS9100 shops, automotive suppliers under IATF 16949, and safety-critical maintenance programs put torque tools on tight intervals. Our certificates document as-found/as-left readings across the range, measurement uncertainty, NIST traceability, and the Z540.3 decision rule — evidence that stands up when a customer quality engineer pulls your tool records.',
          'Coverage spans 0.5 ozf·in to 1,000 lbf·ft: micro torque screwdrivers, dial and beam wrenches, click wrenches, digital wrenches, torque arms, and torque analyzers.',
        ],
      },
      {
        heading: 'Calibrate and repair in one pass',
        paragraphs: [
          'We stock repair parts for major torque wrench brands. When a wrench arrives out of tolerance or with a worn mechanism, we can repair, adjust, and re-calibrate in the same 7–10 business day cycle — and our repair estimates never exceed 50% of the cost of a new tool. Free pickup runs through Orange County Mondays and Wednesdays and LA County Tuesdays and Thursdays.',
        ],
      },
    ],
    specs: [
      { label: 'Torque range', value: '0.5 ozf·in – 1,000 lbf·ft' },
      { label: 'Repair', value: 'Parts stocked for major brands' },
      { label: 'Turnaround', value: '7–10 business days (expedited available)' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Click-type torque wrenches',
      'Dial & beam torque wrenches',
      'Digital / electronic torque wrenches',
      'Torque screwdrivers',
      'Torque arms & multipliers',
      'Torque calibrators & analyzers',
    ],
    faqs: [
      {
        question: 'How often should torque wrenches be calibrated?',
        answer:
          'Common practice is every 12 months or every 5,000 cycles, whichever comes first — tighter for safety-critical or high-usage tools. Aerospace and automotive customer requirements often dictate the interval; we calibrate to your program.',
      },
      {
        question: 'My torque wrench failed — do I need a new one?',
        answer:
          'Usually not. We stock parts for major brands and repair, adjust, and re-calibrate in one cycle. If a repair would exceed 50% of replacement cost, we tell you straight and recommend replacing it.',
      },
      {
        question: 'Do you pick up torque tools in Orange County and LA?',
        answer:
          'Yes — free scheduled routes: Orange County Monday & Wednesday, Los Angeles County Tuesday & Thursday, Inland Empire Friday. Drop-offs are welcome at our Placentia lab any weekday.',
      },
    ],
    related: ['pressure-gauge-calibration', 'caliper-calibration', 'gage-block-calibration'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'pressure-gauge-calibration',
    name: 'Pressure Gauge Calibration',
    metaTitle: 'Pressure Gauge Calibration in Orange County, CA | Vacuum–10,000 psi | American Gage',
    metaDescription:
      'Pressure gauge & transducer calibration from −14.7 to 10,000 psi at 0.01% of reading or better. A2LA ISO 17025 accredited, free OC/LA pickup. Placentia, CA lab since 1968.',
    h1: 'Pressure Gauge Calibration in Orange County',
    lead:
      'Analog gauges, digital gauges, transducers, transmitters — if it reads pressure, we calibrate it: full vacuum to 10,000 psi against automated reference controllers at 0.01% of reading or better, in our A2LA-accredited Placentia laboratory.',
    image: {
      src: '/images/pressure-high-comparator.jpg',
      alt: 'American Gage technician calibrating on a hydraulic pressure comparator with a precision controller',
    },
    capabilitySlug: 'pressure',
    sections: [
      {
        heading: 'Reference-grade pressure, three ways',
        paragraphs: [
          'The lab runs dedicated reference systems by range: a low-pressure controller for 0–30 inH₂O work at ±0.009% of reading (draft gauges, magnehelics, low-DP instruments), pneumatic controllers covering −14.7 to 2,500 psi at ±0.005% of reading, and hydraulic capability to 10,000 psi. That means your 30 psi sanitary gauge and your 10,000 psi hydraulic gauge both get calibrated against a reference appropriate to the range — not stretched across one instrument’s span.',
          'Certificates carry as-found/as-left points across the dial or range, measurement uncertainty, NIST traceability, and the Z540.3 decision rule — ready for FDA, AS9100, and process-safety audits alike.',
        ],
      },
      {
        heading: 'For plants, shops, and everything with a header',
        paragraphs: [
          'Orange County’s manufacturers send us maintenance-cart gauges by the crate; medical device and pharma plants send transducers and transmitters on validation-driven intervals. Free pickup routes run through Orange County Monday and Wednesday and LA County Tuesday and Thursday, with 7–10 business day standard turnaround. On-site calibration is available for instruments plumbed into your process.',
        ],
      },
    ],
    specs: [
      { label: 'Range', value: '−14.7 to 10,000 psi' },
      { label: 'Pneumatic (to 2,500 psi)', value: '±0.005% of reading' },
      { label: 'Low pressure (0–30 inH₂O)', value: '±0.009% of reading' },
      { label: 'Hydraulic', value: 'to 10,000 psi' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Analog (dial) pressure gauges',
      'Digital pressure gauges',
      'Pressure transducers & transmitters',
      'Differential & magnehelic gauges',
      'Vacuum gauges',
      'Manometers & barometers',
    ],
    faqs: [
      {
        question: 'How accurate is your pressure calibration?',
        answer:
          'Reference controllers deliver ±0.005% of reading on pneumatic ranges to 2,500 psi and ±0.009% of reading on 0–30 inH₂O work — comfortably supporting calibration of gauges from 4:1 TUR down to precision digital standards.',
      },
      {
        question: 'Can you calibrate gauges installed in our process?',
        answer:
          'Yes — on-site pressure calibration is available across Orange County and LA County for instruments that can’t come out of the line, with about two weeks scheduling lead time.',
      },
      {
        question: 'Do you calibrate both liquid-filled and dry gauges?',
        answer:
          'Yes — both, plus digital gauges, transducers, and transmitters, with certificates documenting points across the range and NIST traceability.',
      },
    ],
    related: ['torque-wrench-calibration', 'pipette-calibration', 'micrometer-calibration'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'caliper-calibration',
    name: 'Caliper Calibration',
    metaTitle: 'Caliper Calibration Services | Up to 60 in | Orange County Lab | American Gage',
    metaDescription:
      'Caliper calibration up to 60 in with cleaning, lubrication & minor repair included. Parts stocked for Mitutoyo, Starrett, SPI. A2LA ISO 17025 lab in Placentia — free OC/LA pickup.',
    h1: 'Caliper Calibration Services',
    lead:
      'The caliper is the most-handled instrument in any shop — and the first one auditors pull. American Gage has calibrated calipers since 1968: up to 60 inches, cleaned and lubricated as part of service, with minor repairs and batteries included for most major brands.',
    image: {
      src: '/images/dimensional-height-gauge-surface-plate.webp',
      alt: 'American Gage dimensional laboratory with granite surface plates and precision measuring tools',
    },
    capabilitySlug: 'dimensional',
    sections: [
      {
        heading: 'More than a sticker: what caliper service includes',
        paragraphs: [
          'Every caliper that comes through our dimensional lab is cleaned and lubricated before verification against NIST-traceable length standards in a temperature-controlled environment. Jaws are checked for wear and parallelism, rails for burrs and debris, and readouts verified across the range — OD, ID, depth, and step where applicable. Minor repairs and battery replacement are included for most major brands, and we stock parts for Mitutoyo, Starrett, Interapid, and SPI.',
          'Certificates report as-found/as-left readings with measurement uncertainty and the Z540.3 decision rule — because a caliper certificate that just says “PASS” doesn’t survive an AS9100 or ISO 13485 audit trail question.',
        ],
      },
      {
        heading: 'Volume-friendly for shops',
        paragraphs: [
          'Machine shops send calipers by the tray, and our logistics are built for it: free pickup routes across Orange County (Mon & Wed), LA County (Tue & Thu), and the Inland Empire (Fri), 7–10 business day standard turnaround, and no minimum account size. Digital, dial, and vernier — 6 in bench calipers to 60 in long-jaw instruments.',
        ],
      },
    ],
    specs: [
      { label: 'Capacity', value: 'Up to 60 in' },
      { label: 'Types', value: 'Digital, dial, vernier' },
      { label: 'Included', value: 'Cleaning, lube, minor repair, batteries' },
      { label: 'Parts stocked', value: 'Mitutoyo, Starrett, Interapid, SPI' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Digital calipers',
      'Dial calipers',
      'Vernier calipers',
      'Long-jaw / long-range calipers (to 60 in)',
      'Depth calipers',
    ],
    faqs: [
      {
        question: 'How often should calipers be calibrated?',
        answer:
          'Annually is the most common interval for production calipers, moving to 6 months for heavy-use or critical-inspection tools. Your quality system’s interval governs — we calibrate to it and flag tools whose as-found history suggests shortening it.',
      },
      {
        question: 'What if my caliper fails calibration?',
        answer:
          'Minor repairs are included in service for most major brands, and we stock OEM parts — many failed calipers are repaired, adjusted, and certified in the same visit rather than returned as rejects.',
      },
      {
        question: 'Do you calibrate other hand tools at the same time?',
        answer:
          'Yes — micrometers, indicators, height gages, thread gages, gage blocks, and the rest of the toolroom ride the same pickup and the same 7–10 day cycle.',
      },
    ],
    related: ['micrometer-calibration', 'gage-block-calibration', 'torque-wrench-calibration'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'micrometer-calibration',
    name: 'Micrometer Calibration',
    metaTitle: 'Micrometer Calibration Services | OD, ID & Depth | Orange County Lab | American Gage',
    metaDescription:
      'Accredited micrometer calibration — OD, ID, depth & bench micrometers — with cleaning and minor repair included. A2LA ISO 17025 dimensional lab, free SoCal pickup routes.',
    h1: 'Micrometer Calibration Services',
    lead:
      'When the tolerance is in tenths, the micrometer is the tool that decides — and its calibration is the evidence. American Gage calibrates OD, ID, depth, and bench micrometers in the dimensional discipline we were founded on in 1968.',
    image: {
      src: '/images/american-gage-lab-work.jpg',
      alt: 'The American Gage facility in Placentia, California, home of the dimensional calibration laboratory',
    },
    capabilitySlug: 'dimensional',
    sections: [
      {
        heading: 'Verified where it matters: anvils, screws, and standards',
        paragraphs: [
          'Micrometer calibration in our temperature-controlled dimensional lab checks the instrument where micrometers actually fail: anvil flatness and parallelism, spindle screw accuracy across the range against NIST-traceable length standards, ratchet/friction consistency, and zero. Instruments are cleaned and lubricated as part of service, with minor repairs included for most major brands — and parts stocked for Mitutoyo, Starrett, Interapid, and SPI.',
          'Certificates document as-found/as-left readings at multiple points, measurement uncertainty, and the Z540.3 decision rule with TUR — supporting AS9100, ISO 13485, and IATF 16949 supplier audits.',
        ],
      },
      {
        heading: 'From 0–1 in mics to bench standards',
        paragraphs: [
          'We handle the full micrometer family: OD micrometers (standard and large-frame sets), ID and inside micrometers, depth micrometers, bench micrometers, and specialty anvil types — blade, point, disc, and thread mics. Send them on the free Orange County (Mon & Wed), LA County (Tue & Thu), or Inland Empire (Fri) routes, or drop off in Placentia any weekday.',
        ],
      },
    ],
    specs: [
      { label: 'Types', value: 'OD, ID, depth, bench, specialty-anvil' },
      { label: 'Included', value: 'Cleaning, lube, minor repair' },
      { label: 'Parts stocked', value: 'Mitutoyo, Starrett, Interapid, SPI' },
      { label: 'Turnaround', value: '7–10 business days (expedited available)' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'OD micrometers (digital & mechanical)',
      'Inside / ID micrometers',
      'Depth micrometers',
      'Bench micrometers',
      'Blade, point, disc & thread micrometers',
      'Micrometer standards & setting rods',
    ],
    faqs: [
      {
        question: 'What does a micrometer calibration check?',
        answer:
          'Anvil flatness and parallelism, accuracy across the measuring range against traceable length standards, ratchet consistency, and zero — with as-found/as-left data recorded at each point.',
      },
      {
        question: 'Can you calibrate full micrometer sets?',
        answer:
          'Yes — multi-micrometer sets and their standards are calibrated together so the set travels and returns as one unit.',
      },
      {
        question: 'Do you repair micrometers?',
        answer:
          'Minor repairs are included with calibration for most major brands, and we stock OEM parts for Mitutoyo, Starrett, Interapid, and SPI. Beyond-economical-repair tools get an honest recommendation, not a padded invoice.',
      },
    ],
    related: ['caliper-calibration', 'gage-block-calibration', 'pressure-gauge-calibration'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'gage-block-calibration',
    name: 'Gage Block Calibration',
    metaTitle: 'Gage Block Calibration Service | Nationwide Mail-In | American Gage',
    metaDescription:
      'Gage block calibration from the lab named for it — American Gage, est. 1968. A2LA ISO 17025 accredited, nationwide mail-in service, individual block data with uncertainty. Placentia, CA.',
    h1: 'Gage Block Calibration Service',
    lead:
      'Gage blocks are the foundation every other dimensional measurement stands on — and they’re in our name. American Gage was founded in 1968 as a dimensional calibration laboratory, and gage block calibration remains a core specialty: accredited, documented block-by-block, and available nationwide by mail-in.',
    image: {
      src: '/images/dimensional-height-gauge-surface-plate.webp',
      alt: 'Precision dimensional calibration on a granite surface plate at American Gage',
    },
    capabilitySlug: 'dimensional',
    nationalMailIn: true,
    sections: [
      {
        heading: 'Block-by-block data, not a set-level pass',
        paragraphs: [
          'A gage block set certificate is only useful if it reports each block: deviation from nominal with measurement uncertainty, so you know which blocks to reach for when a stack-up needs to be tight. That’s how we calibrate — every block in the set measured against NIST-traceable standards in our temperature-controlled dimensional laboratory, under A2LA ISO/IEC 17025:2017 accreditation (certificate 4296.01).',
          'Blocks are inspected for burrs, corrosion, and wringing surface condition as part of service, so a returning set is a working set.',
        ],
      },
      {
        heading: 'Mail-in from anywhere in the country',
        paragraphs: [
          'Gage block sets ship safely — which makes our lab available to shops far beyond Southern California. Pack the set, include a PO or packing list, and ship to 1131 S Richfield Rd, Placentia, CA 92870. Sets are special-handling items; plan on a 7–10 business day cycle plus transit, with expedited options if an audit is looming. SoCal customers can use the free pickup routes instead: Orange County Mon & Wed, LA County Tue & Thu, Inland Empire Fri.',
        ],
      },
    ],
    specs: [
      { label: 'Service', value: 'Individual block data with uncertainty' },
      { label: 'Coverage', value: 'Rectangular & square sets, metric & inch' },
      { label: 'Logistics', value: 'Nationwide mail-in · free SoCal routes' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Rectangular gage block sets (inch & metric)',
      'Square gage block sets',
      'Individual master blocks',
      'Wear blocks',
      'Angle blocks & accessories',
    ],
    faqs: [
      {
        question: 'How often should gage blocks be calibrated?',
        answer:
          'Master sets commonly run 12–24 month intervals; working sets used daily on the shop floor usually run 12 months. Usage, environment, and your quality system’s requirements govern — as-found data over a couple of cycles tells you if the interval fits.',
      },
      {
        question: 'Do you report each block individually?',
        answer:
          'Yes — every block is measured and reported with its deviation from nominal and measurement uncertainty, under our A2LA ISO/IEC 17025 accreditation.',
      },
      {
        question: 'How do I ship my set to you?',
        answer:
          'Pack the set securely in its case, include a PO or packing list with your contact info, and ship to American Gage, 1131 S Richfield Rd, Placentia, CA 92870. We’ll confirm receipt and return-ship when calibration is complete.',
      },
      {
        question: 'Can you calibrate the rest of our dimensional tools too?',
        answer:
          'Yes — calipers, micrometers, indicators, height gages, thread and plug gages, and surface plates. Dimensional metrology is the discipline American Gage was founded on in 1968.',
      },
    ],
    related: ['caliper-calibration', 'micrometer-calibration', 'torque-wrench-calibration'],
  },
];

export function getInstrumentPage(slug: string) {
  return instrumentPages.find((p) => p.slug === slug);
}
