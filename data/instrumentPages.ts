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

/* ==================== P2 spokes ==================== */

instrumentPages.push(
  {
    slug: 'multimeter-calibration',
    name: 'Multimeter Calibration',
    metaTitle: 'Multimeter Calibration in Orange County, CA | Fluke, Keysight & More | American Gage',
    metaDescription:
      'Accredited multimeter & DMM calibration with Fluke MET/CAL automated procedures and reference standards to 8.5 digits. Free OC/LA pickup, 7–10 day turnaround. A2LA ISO 17025.',
    h1: 'Multimeter Calibration in Orange County',
    lead:
      'From the handheld Fluke on a maintenance cart to 8.5-digit bench DMMs, American Gage calibrates multimeters with automated Fluke MET/CAL procedures — uncertainty calculated at every point, firmware-level adjustment where supported.',
    image: {
      src: '/images/dc-voltage-fluke-8845a.webp',
      alt: 'DC voltage calibration of a Fluke 8845A precision multimeter at American Gage',
    },
    capabilitySlug: 'electrical',
    sections: [
      {
        heading: 'Automated procedures, not spot checks',
        paragraphs: [
          'Our electrical laboratory runs the Fluke MET/CAL automated calibration system with a current procedure subscription. For multimeters that means every function and range gets exercised per the manufacturer’s procedure — DC/AC voltage, current, resistance, frequency — with measurement uncertainty computed at each test point and adjustments performed at firmware level where the instrument supports it.',
          'Certificates document as-found/as-left readings across functions, uncertainty, NIST traceability, and the Z540.3 decision rule with TUR — the record an auditor can actually follow.',
        ],
      },
      {
        heading: 'Fleet-friendly logistics',
        paragraphs: [
          'Maintenance departments send DMMs by the case: free pickup routes run through Orange County Monday and Wednesday, LA County Tuesday and Thursday, and the Inland Empire Friday, with 7–10 business day standard turnaround. Handhelds, bench meters, clamp meters, and insulation testers ride the same cycle — and on-site electrical calibration is available when the fleet can’t leave.',
        ],
      },
    ],
    specs: [
      { label: 'Automation', value: 'Fluke MET/CAL procedures' },
      { label: 'Reference DMMs', value: 'up to 8.5 digits' },
      { label: 'Turnaround', value: '7–10 business days (expedited available)' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Handheld digital multimeters',
      'Bench DMMs (6.5 & 8.5 digit)',
      'Clamp meters',
      'Insulation testers / meggers',
      'Analog multimeters',
      'Process meters & loop calibrators',
    ],
    faqs: [
      {
        question: 'How often should a multimeter be calibrated?',
        answer:
          'Manufacturers typically specify 12 months; many quality systems match that, tightening to 6 months for meters used in critical measurements. We calibrate to your interval and report as-found data so you can tune it.',
      },
      {
        question: 'Do you calibrate all multimeter brands?',
        answer:
          'Yes — Fluke, Keysight/Agilent, Tektronix, BK Precision, Extech, and most others, using manufacturer procedures through MET/CAL where available.',
      },
      {
        question: 'Can you adjust an out-of-tolerance meter, not just report it?',
        answer:
          'Yes — where the instrument supports adjustment, we adjust at firmware level and document both as-found and as-left readings on the certificate.',
      },
    ],
    related: ['pressure-gauge-calibration', 'torque-wrench-calibration', 'scale-calibration'],
  },
  {
    slug: 'scale-calibration',
    name: 'Scale & Balance Calibration',
    metaTitle: 'Scale & Balance Calibration in Orange County, CA | ASTM Class 1 Lab | American Gage',
    metaDescription:
      'Accredited balance and scale calibration backed by ASTM/OIML Class 1 mass standards to 25 kg and a ±0.5 °C mass lab. Free OC/LA pickup or on-site. A2LA ISO 17025 cert 4296.01.',
    h1: 'Scale & Balance Calibration in Orange County',
    lead:
      'An analytical balance is only as honest as the weights that check it. American Gage maintains ASTM/OIML Class 1 mass standards — calibrated in our own ±0.5 °C mass laboratory on Mettler comparators — and brings that traceability to your scales and balances.',
    image: {
      src: '/images/mass-lab-class-1-weights.webp',
      alt: 'Class 1 stainless weight sets under glass domes in the American Gage mass laboratory',
    },
    capabilitySlug: 'mass',
    sections: [
      {
        heading: 'Traceability that starts in a real mass lab',
        paragraphs: [
          'Our mass laboratory runs four Mettler comparators in a room held to ±0.5 °C and ±5 %RH, accredited for ASTM and OIML Class 1 weights up to 25 kg. Those standards anchor every balance and scale calibration we perform — from 0.01 mg analytical balances in pharma labs to bench and floor scales on production lines.',
          'Balance calibration checks what your SOP cares about: repeatability, linearity across the range, eccentricity (corner load), and as-found/as-left readings with uncertainty — documentation that satisfies GMP, ISO 13485, and ISO 9001 audits.',
        ],
      },
      {
        heading: 'In our lab or at your bench',
        paragraphs: [
          'Analytical balances usually shouldn’t travel — so we come to them. On-site balance calibration covers Orange County and LA County with Class 1 standards; transportable scales can ride the free pickup routes instead (OC Mon & Wed, LA Tue & Thu, Inland Empire Fri). Your weight sets can be calibrated in our mass lab on the same cycle.',
        ],
      },
    ],
    specs: [
      { label: 'Mass standards', value: 'ASTM / OIML Class 1 to 25 kg' },
      { label: 'Mass lab environment', value: '±0.5 °C / ±5 %RH' },
      { label: 'Service', value: 'In-lab or on-site at your facility' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Analytical balances',
      'Precision / top-loading balances',
      'Bench scales',
      'Floor & platform scales',
      'Weight sets (calibrated in our mass lab)',
      'Moisture analyzers (weighing function)',
    ],
    faqs: [
      {
        question: 'Do you calibrate balances on-site?',
        answer:
          'Yes — analytical and precision balances are best calibrated in place, and our technicians cover Orange County and LA County with Class 1 mass standards. Book about two weeks ahead.',
      },
      {
        question: 'Can you calibrate our weight sets too?',
        answer:
          'Yes — weight sets are calibrated in our environmentally controlled mass laboratory on Mettler comparators, accredited for ASTM/OIML Class 1 up to 25 kg.',
      },
      {
        question: 'What does a balance calibration certificate include?',
        answer:
          'Repeatability, linearity, and eccentricity results with as-found/as-left data, measurement uncertainty, the standards used, environmental conditions, and NIST traceability.',
      },
    ],
    related: ['pipette-calibration', 'multimeter-calibration', 'pressure-gauge-calibration'],
  },
  {
    slug: 'surface-plate-calibration',
    name: 'Surface Plate Calibration & Resurfacing',
    metaTitle: 'Surface Plate Calibration & Resurfacing | On-Site in SoCal | American Gage',
    metaDescription:
      'Granite surface plate calibration and resurfacing — on-site across Orange County & LA, small plates lapped in-lab to ±0.0001 in. A2LA ISO 17025 dimensional lab since 1968.',
    h1: 'Surface Plate Calibration & Resurfacing',
    lead:
      'Every measurement made on a granite plate inherits that plate’s flatness. American Gage calibrates surface plates and resurfaces them — on-site for plates that stay put, in-lab lapping to ±0.0001 in for smaller plates.',
    image: {
      src: '/images/dimensional-height-gauge-surface-plate.webp',
      alt: 'Granite surface plate in use for dimensional calibration at American Gage',
    },
    capabilitySlug: 'dimensional',
    sections: [
      {
        heading: 'Calibration and correction, not just a report',
        paragraphs: [
          'Surface plate calibration verifies flatness against the grade your quality system requires. When a plate has worn out of grade — and working plates do, especially in the well-traveled center — we don’t just report it: small granite plates are lapped in our shop to ±0.0001 in, and larger plates are resurfaced on-site at your facility to the desired grade.',
          'Badly pitted or severely worn plates get a straight answer: if economical resurfacing can’t recover the grade, we’ll recommend factory regrinding or replacement rather than sell you a service that won’t hold.',
        ],
      },
      {
        heading: 'Scheduled around your inspection department',
        paragraphs: [
          'On-site plate work is scheduled to minimize downtime for your inspection area — typically with about two weeks lead time across Orange County and Los Angeles County. Pair plate calibration with the height gages, indicators, and gage blocks that live on it, and the whole inspection station comes due together.',
        ],
      },
    ],
    specs: [
      { label: 'In-lab lapping (small plates)', value: 'to ±0.0001 in' },
      { label: 'Larger plates', value: 'Resurfaced on-site to desired grade' },
      { label: 'Coverage', value: 'Orange County & Los Angeles County' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Granite surface plates (all grades)',
      'Inspection bench plates',
      'Layout plates',
      'Toolroom plates',
    ],
    faqs: [
      {
        question: 'How often should surface plates be calibrated?',
        answer:
          'Annual calibration is typical for working plates, with high-use inspection plates sometimes checked every 6 months. Wear concentrates where work happens, so usage matters more than age.',
      },
      {
        question: 'Can you resurface our plate without removing it?',
        answer:
          'Yes — larger plates are resurfaced on-site at your facility to the desired grade. Small plates can come to our shop for lapping to ±0.0001 in.',
      },
      {
        question: 'What if the plate can’t be recovered?',
        answer:
          'We tell you. Badly pitted or out-of-tolerance plates that can’t be economically resurfaced get a recommendation for factory regrinding or replacement — not a superficial pass.',
      },
    ],
    related: ['gage-block-calibration', 'caliper-calibration', 'micrometer-calibration'],
  },
  {
    slug: 'thread-gage-calibration',
    name: 'Thread Gage Calibration',
    metaTitle: 'Thread Gage Calibration | Rings & Plugs | A2LA Accredited | American Gage',
    metaDescription:
      'Thread ring and thread plug gage calibration in an A2LA ISO 17025 dimensional lab — est. 1968, serving aerospace and precision manufacturers. Free SoCal pickup or nationwide mail-in.',
    h1: 'Thread Gage Calibration',
    lead:
      'Thread rings and plugs are pass/fail tools with no display to sanity-check them — calibration is the only thing standing between a worn gage and a rejected lot. American Gage has calibrated thread gages for aerospace and precision manufacturers since 1968.',
    image: {
      src: '/images/american-gage-team-lab.jpg',
      alt: 'The American Gage facility, home of the dimensional calibration laboratory since 1968',
    },
    capabilitySlug: 'dimensional',
    nationalMailIn: true,
    sections: [
      {
        heading: 'Why worn thread gages are expensive',
        paragraphs: [
          'A worn GO plug quietly accepts oversized threads; a worn ring passes parts your customer will reject. Because thread gages wear with every use and give no warning, quality systems put them on calibration intervals — and AS9100 customer audits check that those intervals hold. We verify thread gages against NIST-traceable standards in our temperature-controlled dimensional laboratory and report as-found condition with uncertainty.',
          'Working masters and setting plugs can be calibrated alongside the working gages they check, keeping the whole chain consistent.',
        ],
      },
      {
        heading: 'Local routes or nationwide mail-in',
        paragraphs: [
          'Thread gage sets ship easily: SoCal shops use the free pickup routes (Orange County Mon & Wed, LA Tue & Thu, Inland Empire Fri), and shops elsewhere mail sets to our Placentia laboratory with a PO or packing list. Standard turnaround is 7–10 business days.',
        ],
      },
    ],
    specs: [
      { label: 'Types', value: 'Thread rings, thread plugs, setting plugs' },
      { label: 'Standards', value: 'NIST-traceable, temperature-controlled lab' },
      { label: 'Logistics', value: 'Free SoCal routes · nationwide mail-in' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Thread plug gages (GO / NO-GO)',
      'Thread ring gages',
      'Setting plugs',
      'Plain plug & ring gages',
      'Pin gage sets',
    ],
    faqs: [
      {
        question: 'How often should thread gages be calibrated?',
        answer:
          'Interval by usage: heavily used working gages often run 6–12 months, while setting masters can run longer. Tracking as-found wear over cycles is the best way to set intervals that hold up in an audit.',
      },
      {
        question: 'Do you calibrate plain plug and ring gages too?',
        answer:
          'Yes — plain plugs, rings, and pin gage sets are core dimensional workload, calibrated in the same lab on the same cycle.',
      },
      {
        question: 'Can out-of-state shops send thread gages?',
        answer:
          'Yes — mail sets to American Gage, 1131 S Richfield Rd, Placentia, CA 92870 with a PO or packing list, and we return-ship when calibration is complete.',
      },
    ],
    related: ['gage-block-calibration', 'caliper-calibration', 'surface-plate-calibration'],
  },
  {
    slug: 'force-gauge-calibration',
    name: 'Force Gauge Calibration',
    metaTitle: 'Force Gauge Calibration Service | Dead-Weight Reference | American Gage',
    metaDescription:
      'Force gauge and push-pull gauge calibration against dead-weight standards — the reference method with the best available uncertainties. A2LA ISO 17025 lab, free SoCal pickup.',
    h1: 'Force Gauge Calibration Service',
    lead:
      'Force calibration at American Gage is performed against dead-weight standards — gravity acting on known mass, the reference method that delivers the best uncertainties available — in the mechanical laboratory we’ve run since 1968.',
    image: {
      src: '/images/force-calibration-stand.webp',
      alt: 'Force gauge under test on a calibration stand in the American Gage mechanical laboratory',
    },
    capabilitySlug: 'force-torque',
    sections: [
      {
        heading: 'Dead weights, because force starts with mass',
        paragraphs: [
          'Force references built on load cells inherit those cells’ drift. Dead-weight calibration ties your force gauge directly to mass and gravity — the primary approach — which is why our force work is performed against dead-weight standards. Certificates report as-found/as-left readings through the range, measurement uncertainty, NIST traceability, and the Z540.3 decision rule.',
          'Typical workload includes digital and mechanical force gauges, push-pull gauges, crimp testers, and tension/compression instruments used everywhere from medical device assembly validation to wire-harness production.',
        ],
      },
      {
        heading: 'Simple logistics, honest repair calls',
        paragraphs: [
          'Force gauges travel well: free SoCal pickup routes (OC Mon & Wed, LA Tue & Thu, Inland Empire Fri) or nationwide mail-in, with 7–10 business day standard turnaround. Instruments that arrive damaged or drifting get an evaluation first — and per our standing policy, repair estimates never exceed 50% of replacement cost.',
        ],
      },
    ],
    specs: [
      { label: 'Reference', value: 'Dead-weight standards' },
      { label: 'Types', value: 'Digital & mechanical, tension & compression' },
      { label: 'Turnaround', value: '7–10 business days (expedited available)' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Digital force gauges',
      'Mechanical force gauges',
      'Push-pull gauges',
      'Crimp & tension testers',
      'Compression meters',
    ],
    faqs: [
      {
        question: 'Why does dead-weight calibration matter for force gauges?',
        answer:
          'Dead weights derive force directly from calibrated mass and gravity rather than from another sensor, minimizing the uncertainty stacked into your gauge’s calibration — meaningful when your tolerance is tight.',
      },
      {
        question: 'Do you calibrate force test stands too?',
        answer:
          'We calibrate the force gauges and instruments that mount in test stands; ask us about your specific stand configuration when you request a quote.',
      },
    ],
    related: ['torque-wrench-calibration', 'hardness-tester-calibration', 'scale-calibration'],
  },
  {
    slug: 'hardness-tester-calibration',
    name: 'Hardness Tester Calibration & Repair',
    metaTitle: 'Hardness Tester Calibration & Repair in California | American Gage',
    metaDescription:
      'Hardness tester calibration and repair from an A2LA ISO 17025 California lab — Rockwell-type bench testers and portables, serving heat-treat and machining operations. (657) 216-2600.',
    h1: 'Hardness Tester Calibration & Repair in California',
    lead:
      'A hardness tester that drifts sends bad material downstream with a passing grade. American Gage both calibrates and repairs hardness testers — one of the few Southern California labs handling the full service in-house since 1968.',
    image: {
      src: '/images/american-gage-facility.jpg',
      alt: 'The American Gage calibration laboratory in Placentia, California',
    },
    capabilitySlug: 'force-torque',
    sections: [
      {
        heading: 'Calibration plus the repair nobody else wants to do',
        paragraphs: [
          'Hardness testers are mechanical instruments with wear parts — and most calibration providers will verify one but won’t fix it. We do both: verification of your tester’s performance, and repair service for major hardness tester types when wear or damage is behind the drift. Per our standing policy, repair estimates never exceed 50% of the cost of a new unit.',
          'That matters to heat-treat operations under Nadcap and machine shops certifying material condition to customer specs, where an unreliable tester means quarantined product.',
        ],
      },
      {
        heading: 'Serving California’s metal-working base',
        paragraphs: [
          'Bench testers are heavy and sensitive to moves, so many customers pair tester service with our on-site visits across Orange County and Los Angeles County. Portable testers ride the free pickup routes. Either way, certificates document as-found/as-left condition with NIST traceability under our A2LA ISO/IEC 17025:2017 accreditation.',
        ],
      },
    ],
    specs: [
      { label: 'Service', value: 'Calibration + repair, one lab' },
      { label: 'Repair policy', value: 'Estimates never exceed 50% of new cost' },
      { label: 'Coverage', value: 'In-lab, on-site OC & LA, mail-in portables' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Bench hardness testers (Rockwell-type)',
      'Portable hardness testers',
      'Durometers',
      'Test blocks (verification)',
    ],
    faqs: [
      {
        question: 'Do you repair hardness testers or just calibrate them?',
        answer:
          'Both — repair and calibration for major hardness tester types, so a drifting tester can be corrected and certified in one cycle instead of bouncing between vendors.',
      },
      {
        question: 'Can you service our bench tester on-site?',
        answer:
          'Yes — bench testers often shouldn’t travel, and our technicians cover Orange County and LA County on-site. Portables can use the free pickup routes instead.',
      },
    ],
    related: ['force-gauge-calibration', 'torque-wrench-calibration', 'surface-plate-calibration'],
  },
  {
    slug: 'rush-calibration',
    name: 'Rush & Expedited Calibration',
    metaTitle: 'Same-Week & Rush Calibration in Orange County | 24/48/72-Hr | American Gage',
    metaDescription:
      'Line down or audit tomorrow? Expedited 24, 48 & 72-hour calibration from a local A2LA ISO 17025 lab in Placentia — drop off today, walk-ins welcome. Call (657) 216-2600.',
    h1: 'Rush & Expedited Calibration in Orange County',
    lead:
      'Audits don’t reschedule and production lines don’t wait. American Gage offers expedited 24, 48, and 72-hour calibration from our Placentia laboratory — and because we’re local, “rush” can start with a drop-off this afternoon, not a shipping label.',
    image: {
      src: '/images/onsite-multimeter-fleet.webp',
      alt: 'American Gage technician working through a fleet of instruments',
    },
    capabilitySlug: 'electrical',
    sections: [
      {
        heading: 'What “rush” looks like at a local lab',
        paragraphs: [
          'National providers quote rush service in shipping days. Ours starts when you walk in: bring instruments to 1131 S Richfield Rd in Placentia any weekday between 7:30 AM and 4:00 PM, tell us the deadline, and we’ll confirm what’s achievable on a 24, 48, or 72-hour expedite before you leave the counter. Expedited service carries a fee — the certificate carries everything else: full as-found/as-left data, uncertainty, and NIST traceability under our A2LA ISO/IEC 17025 accreditation. A rushed calibration is still a complete one.',
          'When equipment can’t come to us, after-hours and weekend emergency on-site calls are available across Orange County and LA County.',
        ],
      },
      {
        heading: 'The audit-week playbook',
        paragraphs: [
          'Most rush requests are audit-driven: an overdue sticker discovered during prep, or a surveillance audit moved up. Call (657) 216-2600 with the list — manufacturer, model, and due date — and we’ll triage what needs accredited data versus verification, confirm turnaround per item, and get your records defensible before the auditor signs in.',
        ],
      },
    ],
    specs: [
      { label: 'Expedite tiers', value: '24 / 48 / 72 hours (fee applies)' },
      { label: 'Walk-ins', value: 'Mon–Fri 7:30 AM – 4:00 PM, Placentia' },
      { label: 'Emergency on-site', value: 'After-hours & weekends available' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Audit-prep batches (mixed disciplines)',
      'Line-down replacement instruments',
      'Incoming-inspection tools',
      'New equipment needing first calibration',
    ],
    faqs: [
      {
        question: 'How fast can you actually turn a calibration around?',
        answer:
          'Expedited tiers are 24, 48, and 72 hours for a fee, subject to scope and workload — call (657) 216-2600 and we’ll confirm per instrument before you commit.',
      },
      {
        question: 'Is a rush calibration less thorough?',
        answer:
          'No — expedited work follows the same procedures and produces the same accredited certificate with as-found/as-left data and uncertainty. The fee buys queue position, not shortcuts.',
      },
      {
        question: 'Can you come to us in an emergency?',
        answer:
          'Yes — after-hours and weekend emergency on-site calls are available across Orange County and Los Angeles County.',
      },
    ],
    related: ['multimeter-calibration', 'caliper-calibration', 'pressure-gauge-calibration'],
  }
);

/* ==================== P3 brand-modifier pages ====================
 * Nominative use of manufacturer names (we calibrate/repair their products).
 * Each page carries an independence disclaimer — American Gage is not
 * affiliated with or endorsed by these manufacturers.
 */

instrumentPages.push(
  {
    slug: 'mitutoyo-calibration',
    name: 'Mitutoyo Instrument Calibration',
    metaTitle: 'Mitutoyo Calibration Service | Calipers, Micrometers, Indicators | American Gage',
    metaDescription:
      'Calibration and repair for Mitutoyo calipers, micrometers, indicators & height gages — OEM repair parts in stock. A2LA ISO 17025 lab in Placentia, CA. Free SoCal pickup, mail-in nationwide.',
    h1: 'Mitutoyo Instrument Calibration & Repair',
    lead:
      'Mitutoyo tools dominate Southern California toolrooms — and they dominate our dimensional lab’s daily workload. American Gage calibrates Mitutoyo calipers, micrometers, indicators, and height gages with OEM repair parts on the shelf, so a failed tool gets fixed, not just flagged.',
    image: {
      src: '/images/dimensional-height-gauge-surface-plate.webp',
      alt: 'Dimensional calibration on a granite surface plate at American Gage',
    },
    capabilitySlug: 'dimensional',
    sections: [
      {
        heading: 'Why shops send us their Mitutoyo tools',
        paragraphs: [
          'Since 1968, dimensional hand tools have been our founding discipline — and for decades that has meant Mitutoyo above all other nameplates. Every tool is cleaned and lubricated as part of calibration, verified against NIST-traceable standards in a temperature-controlled lab, and returned with as-found/as-left data, uncertainty, and the Z540.3 decision rule documented under our A2LA ISO/IEC 17025:2017 accreditation (certificate 4296.01).',
          'Because we stock Mitutoyo repair parts, common failures — worn jaws, sticking rails, dead cells, damaged thimbles — are typically repaired and re-calibrated in the same 7–10 business day cycle. Minor repairs and battery replacement are included with calibration.',
        ],
      },
      {
        heading: 'Coverage across the Mitutoyo catalog',
        paragraphs: [
          'Digimatic and mechanical calipers to 60 in, OD/ID/depth micrometers, indicators and test indicators, height gages, bore gages, depth gages, and micrometer standards. SoCal customers ride the free pickup routes (Orange County Mon & Wed, LA Tue & Thu, Inland Empire Fri); shops elsewhere mail in.',
          'American Gage is an independent calibration laboratory. Mitutoyo is a trademark of its respective owner; we are not affiliated with or endorsed by the manufacturer — we simply calibrate and repair their instruments every working day.',
        ],
      },
    ],
    specs: [
      { label: 'Repair parts', value: 'Mitutoyo OEM parts stocked' },
      { label: 'Included', value: 'Cleaning, lube, minor repair, batteries' },
      { label: 'Logistics', value: 'Free SoCal routes · nationwide mail-in' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Digimatic & dial calipers',
      'OD / ID / depth micrometers',
      'Indicators & test indicators',
      'Height gages & Digimatic height gages',
      'Bore gages',
      'Micrometer standards & gage blocks',
    ],
    faqs: [
      {
        question: 'Do you use genuine Mitutoyo parts for repairs?',
        answer:
          'We stock OEM repair parts for Mitutoyo tools, so common wear items are replaced with manufacturer parts during the same calibration cycle.',
      },
      {
        question: 'Is your Mitutoyo calibration accredited?',
        answer:
          'Yes — calibrations are performed under our A2LA ISO/IEC 17025:2017 accreditation (certificate 4296.01) with as-found/as-left data and measurement uncertainty.',
      },
      {
        question: 'Are you affiliated with Mitutoyo?',
        answer:
          'No — American Gage is an independent A2LA-accredited laboratory. We calibrate and repair Mitutoyo instruments daily but are not affiliated with or endorsed by the manufacturer.',
      },
    ],
    related: ['starrett-calibration', 'caliper-calibration', 'micrometer-calibration'],
    nationalMailIn: true,
  },
  {
    slug: 'starrett-calibration',
    name: 'Starrett Instrument Calibration',
    metaTitle: 'Starrett Calibration Service | Micrometers, Calipers, Indicators | American Gage',
    metaDescription:
      'Calibration and repair for Starrett precision tools — micrometers, calipers, indicators, squares — with OEM parts stocked. A2LA ISO 17025 lab, free SoCal pickup, nationwide mail-in.',
    h1: 'Starrett Instrument Calibration & Repair',
    lead:
      'Starrett tools outlive careers — when they’re maintained. American Gage calibrates and repairs Starrett precision instruments with OEM parts in stock, keeping the mics and indicators your shop trusts inside tolerance and in service.',
    image: {
      src: '/images/american-gage-team-lab.jpg',
      alt: 'Technicians at work in the American Gage dimensional calibration laboratory',
    },
    capabilitySlug: 'dimensional',
    sections: [
      {
        heading: 'Old-school tools, modern evidence',
        paragraphs: [
          'A 30-year-old Starrett micrometer can still measure beautifully — but your auditor needs more than faith. We verify Starrett instruments against NIST-traceable standards in our temperature-controlled dimensional lab and document as-found/as-left readings, uncertainty, and the Z540.3 decision rule under A2LA ISO/IEC 17025:2017 accreditation (certificate 4296.01).',
          'Cleaning and lubrication are part of every calibration, minor repairs are included for most tools, and we stock Starrett repair parts — so well-made instruments keep earning their keep instead of retiring over a worn part.',
        ],
      },
      {
        heading: 'What we service',
        paragraphs: [
          'Micrometers of every configuration, dial and electronic calipers, dial indicators and back-plungers, height gages, squares, protractors, and rules. Free SoCal pickup routes or nationwide mail-in, standard 7–10 business day turnaround.',
          'American Gage is an independent calibration laboratory. Starrett is a trademark of its respective owner; we are not affiliated with or endorsed by the manufacturer.',
        ],
      },
    ],
    specs: [
      { label: 'Repair parts', value: 'Starrett OEM parts stocked' },
      { label: 'Included', value: 'Cleaning, lube, minor repair' },
      { label: 'Logistics', value: 'Free SoCal routes · nationwide mail-in' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'OD / ID / depth micrometers',
      'Dial & electronic calipers',
      'Dial indicators & back-plunger indicators',
      'Height gages',
      'Combination squares & protractors',
      'Precision rules & tape measures',
    ],
    faqs: [
      {
        question: 'Can you repair older Starrett tools?',
        answer:
          'Usually yes — we stock Starrett parts and repair worn mechanisms during the calibration cycle. If a repair would exceed 50% of replacement cost, we tell you honestly.',
      },
      {
        question: 'Do vintage tools get the same certificate?',
        answer:
          'Yes — every instrument gets the same accredited certificate with as-found/as-left data, uncertainty, and NIST traceability, regardless of age.',
      },
      {
        question: 'Are you affiliated with Starrett?',
        answer:
          'No — American Gage is an independent A2LA-accredited laboratory that calibrates and repairs Starrett instruments; we are not affiliated with or endorsed by the manufacturer.',
      },
    ],
    related: ['mitutoyo-calibration', 'micrometer-calibration', 'caliper-calibration'],
    nationalMailIn: true,
  },
  {
    slug: 'fluke-calibration',
    name: 'Fluke Instrument Calibration',
    metaTitle: 'Fluke Calibration Service | DMMs, Clamp Meters, Process Tools | American Gage',
    metaDescription:
      'Calibration for Fluke multimeters, clamp meters, process calibrators & thermal tools using Fluke MET/CAL automated procedures. A2LA ISO 17025 lab in Placentia, CA. Free SoCal pickup.',
    h1: 'Fluke Instrument Calibration',
    lead:
      'Our electrical laboratory runs on Fluke-built reference systems and MET/CAL automation — which makes calibrating your Fluke handhelds, bench meters, and process calibrators genuinely native territory.',
    image: {
      src: '/images/dc-voltage-fluke-8845a.webp',
      alt: 'DC voltage calibration of a Fluke 8845A precision multimeter at American Gage',
    },
    capabilitySlug: 'electrical',
    sections: [
      {
        heading: 'Calibrated the way the manufacturer intended',
        paragraphs: [
          'We maintain a current Fluke MET/CAL procedure subscription, so Fluke instruments are calibrated with automated, manufacturer-derived procedures: every function and range exercised, uncertainty computed at each point, and firmware-level adjustment performed where the instrument supports it. Certificates carry as-found/as-left data, uncertainty, NIST traceability, and the Z540.3 decision rule under A2LA ISO/IEC 17025:2017 accreditation (certificate 4296.01).',
          'The workload spans the Fluke catalog we all carry: 87V and other handheld DMMs, clamp meters, insulation testers, process calibrators and loop tools, bench multimeters, and thermal instruments (IR thermometers verified on our Fluke 4180/4181 calibrators).',
        ],
      },
      {
        heading: 'Fleets welcome',
        paragraphs: [
          'Maintenance and facilities teams send Fluke meters by the case — free pickup routes cover Orange County (Mon & Wed), LA County (Tue & Thu), and the Inland Empire (Fri), with 7–10 business day turnaround and 24/48/72-hour expedites when a crew is waiting on its meters.',
          'American Gage is an independent calibration laboratory. Fluke is a trademark of its respective owner; we are not affiliated with or endorsed by the manufacturer — we use their standards, run their procedures, and calibrate their instruments every day.',
        ],
      },
    ],
    specs: [
      { label: 'Procedures', value: 'Fluke MET/CAL automated (current subscription)' },
      { label: 'Reference DMMs', value: 'up to 8.5 digits' },
      { label: 'Turnaround', value: '7–10 business days (expedited available)' },
      { label: 'Accreditation', value: 'A2LA ISO/IEC 17025:2017 · #4296.01' },
    ],
    itemsWeSee: [
      'Handheld DMMs (87V, 170/110 series & more)',
      'Clamp meters',
      'Insulation testers (1500 series)',
      'Process calibrators & loop tools (7xx series)',
      'Bench multimeters (8845A/8846A)',
      'IR thermometers & thermal tools',
    ],
    faqs: [
      {
        question: 'Do you calibrate Fluke meters to manufacturer specifications?',
        answer:
          'Yes — via Fluke MET/CAL automated procedures under a current subscription, testing each function and range against the manufacturer’s specifications with uncertainty computed per point.',
      },
      {
        question: 'Can you adjust a Fluke meter that’s drifted?',
        answer:
          'Yes — where the instrument supports it, adjustment is performed at firmware level and documented with both as-found and as-left data.',
      },
      {
        question: 'Are you affiliated with Fluke?',
        answer:
          'No — American Gage is an independent A2LA-accredited laboratory. We use Fluke reference standards and procedures extensively, but we are not affiliated with or endorsed by the manufacturer.',
      },
    ],
    related: ['multimeter-calibration', 'pressure-gauge-calibration', 'rush-calibration'],
  }
);

export function getInstrumentPage(slug: string) {
  return instrumentPages.find((p) => p.slug === slug);
}
