/**
 * Tier-4/5 informational content — compliance guides and buyer guides.
 * These target "informational → RFQ" keywords and AI-assistant answers.
 * General guidance only; readers are pointed to their own registrar/QA for
 * interpretation. Facts about American Gage must match lib/site.ts & data files.
 */

export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
};

export type ResourceArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Compliance' | 'Buyer Guides';
  readMinutes: number;
  lead: string;
  sections: ResourceSection[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
};

export const resources: ResourceArticle[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'as9100-calibration-requirements',
    title: 'AS9100 Calibration Requirements, Explained',
    metaTitle: 'AS9100 Calibration Requirements (Clause 7.1.5) — A Practical Guide | American Gage',
    metaDescription:
      'What AS9100 actually requires for calibration: clause 7.1.5 monitoring & measuring resources, traceability, calibration records, and what customer auditors check. From an A2LA-accredited lab.',
    category: 'Compliance',
    readMinutes: 6,
    lead:
      'AS9100 doesn’t tell you how often to calibrate a caliper — it tells you to prove your measurements can be trusted. This guide walks through what clause 7.1.5 requires, what aerospace customer auditors actually check, and how to keep your calibration program off the findings list.',
    sections: [
      {
        heading: 'Where calibration lives in AS9100',
        paragraphs: [
          'AS9100 (Rev D) addresses calibration in clause 7.1.5, “Monitoring and Measuring Resources.” The requirement is outcome-driven: when you use measurement to verify product conformity, the measuring equipment must be suitable, maintained, and — where measurement traceability is required — calibrated or verified at planned intervals against standards traceable to national or international standards. Where no such standard exists, the basis used must be recorded.',
          'The clause also requires equipment to be identified (so its calibration status is knowable), safeguarded from adjustments that would invalidate results, and protected from damage. And critically: when equipment is found out of tolerance, you must assess the validity of previous measurements made with it and take appropriate action on any product affected — the “reverse traceability” exercise auditors love to probe.',
        ],
      },
      {
        heading: 'What aerospace customer auditors actually check',
        paragraphs: [
          'Registrar and customer-quality audits rarely stop at “is there a sticker.” Common threads they pull: whether the calibration certificate shows traceability and data (not just PASS), whether intervals are justified rather than arbitrary, whether out-of-tolerance conditions triggered a documented impact assessment, and whether the calibration supplier itself is competent.',
          'That last point is where supplier selection matters. ISO/IEC 17025 accreditation is the recognized evidence of a calibration lab’s competence, and many aerospace primes flow down requirements referencing ANSI/NCSL Z540.3 — which brings decision rules and false-accept risk into play. Certificates from American Gage document as-found/as-left data, measurement uncertainty, NIST traceability, and the Z540.3 decision rule with test uncertainty ratio (TUR), under A2LA accreditation (certificate 4296.01).',
        ],
      },
      {
        heading: 'A checklist that survives an AS9100 audit',
        paragraphs: ['A calibration program that holds up typically has these elements in place:'],
        bullets: [
          'A controlled equipment list with unique IDs, locations, and calibration status',
          'Documented intervals with a rationale (manufacturer guidance, usage, as-found history)',
          'Certificates with data, uncertainty, and traceability from an ISO/IEC 17025-accredited supplier',
          'A documented out-of-tolerance / impact-assessment procedure — with records showing it was actually used',
          'Safeguards against unauthorized adjustment (seals, restricted menus)',
          'Recall / due-date tracking so nothing measures product while overdue',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does AS9100 require an ISO 17025 accredited calibration supplier?',
        answer:
          'AS9100 itself requires traceable calibration and competent processes; many aerospace customers and primes contractually require ISO/IEC 17025-accredited suppliers, and auditors treat accreditation as the standard evidence of competence. Check your customer flow-downs — and using an accredited lab removes the argument entirely.',
      },
      {
        question: 'What happens if an instrument is found out of tolerance?',
        answer:
          'Clause 7.1.5 requires you to determine whether previous measurement results were affected and take appropriate action — which can mean re-inspecting product back to the last good calibration. As-found data on your certificates is what makes that assessment possible.',
      },
      {
        question: 'How are calibration intervals set under AS9100?',
        answer:
          'The standard requires calibration at planned intervals but leaves the interval to you — justified by manufacturer guidance, usage severity, and as-found history. Shortening intervals for tools that repeatedly drift, and documenting why, is exactly what auditors want to see.',
      },
    ],
    relatedLinks: [
      { label: 'Aerospace & Defense industry page', href: '/industries#aerospace-defense' },
      { label: 'Our accreditations (A2LA scope, Z540.3)', href: '/accreditations' },
      { label: 'Dimensional calibration', href: '/capabilities/dimensional' },
      { label: 'Torque wrench calibration', href: '/torque-wrench-calibration' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'iso-13485-calibration-requirements',
    title: 'ISO 13485 Calibration Requirements for Medical Device Manufacturers',
    metaTitle: 'ISO 13485 Calibration Requirements (Clause 7.6) — Practical Guide | American Gage',
    metaDescription:
      'How ISO 13485:2016 clause 7.6 treats calibration: documented procedures, traceable standards, records, and out-of-tolerance handling — plus what notified-body auditors check.',
    category: 'Compliance',
    readMinutes: 6,
    lead:
      'For a medical device manufacturer, calibration isn’t a maintenance chore — it’s part of the objective evidence that your device meets its specifications. Here’s what ISO 13485:2016 requires, and how notified-body auditors test it.',
    sections: [
      {
        heading: 'Clause 7.6: control of monitoring and measuring equipment',
        paragraphs: [
          'ISO 13485:2016 clause 7.6 requires you to determine what monitoring and measurement you need, and to control the equipment that performs it under documented procedures — a stricter posture than ISO 9001, which no longer mandates documented procedures the same way. Equipment must be calibrated or verified at specified intervals (or before use) against measurement standards traceable to international or national standards; where no such standard exists, the basis must be recorded.',
          'The clause continues: equipment must be adjusted as necessary, identified so its calibration status can be determined, safeguarded from adjustments that would invalidate results, and protected from damage during handling and storage. Records of calibration results must be maintained — and under clause 4.2.5, retrievable for your retention period.',
        ],
      },
      {
        heading: 'Out-of-tolerance: where audits get uncomfortable',
        paragraphs: [
          'When equipment is found nonconforming, clause 7.6 requires you to assess the validity of previous measuring results and take appropriate action on the equipment and any product affected. In practice, a notified-body auditor will pick an out-of-tolerance event from your records and walk the trail: was the impact assessed? Was affected product evaluated? Is there a record?',
          'That trail is only walkable if your calibration certificates contain as-found data. A certificate that says “calibrated” without readings leaves you unable to determine how far out the instrument was — and therefore unable to complete the assessment the standard requires. Every American Gage certificate reports as-found/as-left data with measurement uncertainty and NIST traceability, under A2LA ISO/IEC 17025 accreditation.',
        ],
      },
      {
        heading: 'FDA alignment',
        paragraphs: [
          'US manufacturers typically satisfy FDA expectations in the same program: FDA’s device requirements (21 CFR 820, moving to alignment with ISO 13485 under the Quality Management System Regulation) similarly demand calibrated equipment, traceable standards, documented procedures, and remedial action when equipment is out of specification. One well-designed calibration program serves both masters — and your supplier’s accredited certificates are the backbone of it.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does ISO 13485 require calibration before every use?',
        answer:
          'No — it requires calibration or verification at specified intervals, or prior to use, as you define in your procedures. Most manufacturers use scheduled intervals with interim checks for critical equipment.',
      },
      {
        question: 'What records does ISO 13485 require for calibration?',
        answer:
          'Records of calibration and verification results must be maintained (clauses 7.6 and 4.2.5) — in practice: certificates with data, the standards used and their traceability, environmental conditions where relevant, and evidence of your out-of-tolerance assessments.',
      },
      {
        question: 'Do notified bodies expect ISO 17025-accredited calibration suppliers?',
        answer:
          'Accreditation is the accepted evidence that your calibration supplier is competent and its results traceable — and supplier controls under ISO 13485 clause 7.4 make you responsible for that competence. An accredited lab’s scope and certificate number make the qualification file straightforward.',
      },
    ],
    relatedLinks: [
      { label: 'Medical Device industry page', href: '/industries#medical-device' },
      { label: 'Pipette calibration (ISO 8655)', href: '/pipette-calibration' },
      { label: 'Scale & balance calibration', href: '/scale-calibration' },
      { label: 'Our accreditations', href: '/accreditations' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'fda-21-cfr-part-211-calibration-requirements',
    title: 'FDA 21 CFR Part 211 Calibration Requirements for Pharma & Biotech',
    metaTitle: '21 CFR Part 211 Calibration Requirements (§211.68 & §211.160) | American Gage',
    metaDescription:
      'What FDA’s drug GMP regulations require for calibration: §211.68 equipment controls, §211.160(b)(4) lab instrument calibration, records, and 483 pitfalls — explained by an accredited lab.',
    category: 'Compliance',
    readMinutes: 5,
    lead:
      'FDA’s drug GMPs mention calibration in few words but inspect it in depth. Here’s where calibration lives in 21 CFR Part 211, what investigators cite on 483s, and how to build records that close the conversation.',
    sections: [
      {
        heading: 'The two clauses that matter',
        paragraphs: [
          '§211.68 (automatic, mechanical, and electronic equipment) requires that equipment used in manufacturing, processing, packing, and holding be routinely calibrated, inspected, or checked according to a written program designed to assure proper performance — with written records of those checks maintained.',
          '§211.160(b)(4) covers the laboratory: instruments, apparatus, gauges, and recording devices must be calibrated at suitable intervals in accordance with an established written program containing specific directions, schedules, limits for accuracy and precision, and provisions for remedial action when limits are not met — and instruments not meeting specifications must not be used.',
        ],
      },
      {
        heading: 'What shows up on 483s',
        paragraphs: [
          'Common calibration observations follow the regulation’s own words: no written program or one lacking accuracy limits; intervals with no rationale; calibrations performed but not documented; out-of-tolerance results without remedial action or product-impact evaluation; and instruments used past their due dates.',
          'The pattern to notice: FDA doesn’t just want calibration done — it wants a written program with limits and a documented response when those limits are exceeded. Certificates with as-found/as-left data, uncertainty, and NIST traceability are what make “remedial action” assessable. That’s the format every American Gage certificate follows, under A2LA ISO/IEC 17025:2017 accreditation (certificate 4296.01).',
        ],
      },
      {
        heading: 'Typical GMP calibration workload',
        paragraphs: ['In pharma and biotech facilities, the instruments under Part 211 programs usually include:'],
        bullets: [
          'Balances and scales (with weight sets on their own cycle)',
          'Pipettes and liquid handling (ISO 8655 methods)',
          'Temperature devices — chambers, freezers, incubators, dataloggers, probes',
          'Pressure gauges and transmitters on process and utilities',
          'pH, conductivity, and analytical bench instruments',
          'Timers, tachometers, and packaging-line devices',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does 21 CFR Part 211 specify calibration intervals?',
        answer:
          'No — it requires “suitable intervals” under a written program you define and justify. Manufacturer guidance, usage, and as-found history are the accepted bases; the interval rationale should be documented.',
      },
      {
        question: 'What must a Part 211 calibration record show?',
        answer:
          'Enough to demonstrate the written program was followed: the instrument, standards used and traceability, results against your accuracy limits (as-found/as-left), who performed it and when — and remedial action records when limits were exceeded.',
      },
      {
        question: 'Can we use an outside calibration lab under FDA GMPs?',
        answer:
          'Yes — outside labs are standard practice. You remain responsible for supplier qualification, which is why an accredited lab’s A2LA scope, certificate format, and quality documentation matter to your vendor file.',
      },
    ],
    relatedLinks: [
      { label: 'Biotech & Pharma industry page', href: '/industries#biotech-pharma' },
      { label: 'Validation (IQ/OQ/PQ) services', href: '/services#validation' },
      { label: 'Pipette calibration', href: '/pipette-calibration' },
      { label: 'Temperature & humidity calibration', href: '/capabilities/temperature-humidity' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'calibration-services-cost',
    title: 'How Much Does Instrument Calibration Cost?',
    metaTitle: 'How Much Does Calibration Cost? Honest Pricing Factors | American Gage',
    metaDescription:
      'What drives instrument calibration pricing: discipline, accreditation level, data requirements, turnaround, and logistics — with the real on-site minimums we publish. No games.',
    category: 'Buyer Guides',
    readMinutes: 5,
    lead:
      'Almost no calibration lab publishes prices — which makes budgeting feel like guesswork. Here’s an honest breakdown of what actually drives calibration cost, the numbers we do publish, and how to get a firm quote fast.',
    sections: [
      {
        heading: 'The five factors that set the price',
        paragraphs: ['Calibration pricing is mostly a function of technician time and reference-standard cost. Five things move it:'],
        bullets: [
          'Instrument complexity — a caliper takes minutes; an 8.5-digit DMM or spectrum analyzer runs a long automated procedure',
          'Service level — accredited calibration with full data and uncertainty costs more than a traceable verification without data, because more points and more documentation are involved',
          'Condition — instruments needing repair, cleaning, or adjustment before they’ll pass add bench time (our repair estimates never exceed 50% of replacement cost)',
          'Turnaround — standard 7–10 business days is baseline; expedited 24/48/72-hour service carries a fee',
          'Logistics — our SoCal pickup routes are free, which quietly removes a cost most providers bury in shipping',
        ],
      },
      {
        heading: 'The numbers we publish',
        paragraphs: [
          'On-site calibration carries published minimums: $275 for dimensional/mechanical work, $400 for electrical, and $800 for RF, plus round-trip travel at $1.80 per mile ($65 minimum). In-lab pricing is quoted per instrument because the same model can need different service levels — but quotes come back quickly, itemized, with no obligation.',
          'One honest caution when comparing quotes: a low per-item price for a certificate without data isn’t comparable to an accredited certificate with as-found/as-left readings and uncertainty. If your auditors expect data — AS9100, ISO 13485, and FDA-regulated programs generally do — price the service level your quality system actually needs.',
        ],
      },
      {
        heading: 'How to get an exact number fast',
        paragraphs: [
          'Send your equipment list — manufacturer, model, quantity, and any compliance requirements your customers reference — through our quote form or to customerservice@americangage.com. We return scope confirmation, itemized pricing, and turnaround within one to two business days. Bundling a full toolroom onto one pickup usually beats piecemeal sends.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why don’t calibration labs publish full price lists?',
        answer:
          'Because identical instruments can need different service levels, ranges, and data packages — a price list either overcharges simple work or undercharges complex work. Publishing the factors and quoting itemized within a day is the honest middle ground.',
      },
      {
        question: 'Is accredited calibration worth the extra cost?',
        answer:
          'If your quality system faces AS9100, ISO 13485, IATF 16949, or FDA audits — yes, because certificates without data can fail to support out-of-tolerance assessments. For non-audited uses, a traceable verification may be sufficient. We’ll tell you which fits when you quote.',
      },
      {
        question: 'Does pickup and delivery really cost nothing?',
        answer:
          'Within our scheduled SoCal routes, yes — Orange County Mon & Wed, LA County Tue & Thu, Inland Empire Fri, free in both directions.',
      },
    ],
    relatedLinks: [
      { label: 'Request a quote', href: '/contact' },
      { label: 'Rush & expedited calibration', href: '/rush-calibration' },
      { label: 'Our services', href: '/services' },
      { label: 'Service areas & routes', href: '/locations' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-often-should-instruments-be-calibrated',
    title: 'How Often Should Instruments Be Calibrated?',
    metaTitle: 'Calibration Frequency Guide: How Often to Calibrate Instruments | American Gage',
    metaDescription:
      'Typical calibration intervals by instrument — calipers, micrometers, torque wrenches, multimeters, balances, pressure gauges, pipettes — and how to justify your own intervals.',
    category: 'Buyer Guides',
    readMinutes: 6,
    lead:
      'The honest answer is “it depends” — but auditors won’t accept that, and neither should you. Here are the typical starting intervals used across industry, and the method for tuning them into intervals you can defend.',
    sections: [
      {
        heading: 'Typical starting intervals by instrument',
        paragraphs: [
          'No regulation dictates these numbers — they’re common industry practice, the starting point most quality systems use before adjusting for their own usage and as-found history:',
        ],
        table: {
          headers: ['Instrument', 'Typical interval', 'Shorten when…'],
          rows: [
            ['Calipers & micrometers', '12 months', 'heavy daily use, abrasive environments'],
            ['Gage blocks (working sets)', '12 months', 'daily wringing, shop-floor use'],
            ['Gage blocks (master sets)', '12–24 months', 'frequent use as working masters'],
            ['Thread & plug gages', '6–12 months', 'high-volume checking (wear-driven)'],
            ['Torque wrenches', '12 months or ~5,000 cycles', 'safety-critical joints, daily production'],
            ['Multimeters (handheld)', '12 months', 'critical measurements, harsh service'],
            ['Analytical balances', '12 months + interim checks', 'GMP criticality, environment shifts'],
            ['Pressure gauges', '12 months', 'process-critical, pulsating service'],
            ['Pipettes', '3–12 months', 'high throughput, critical assays'],
            ['Environmental chambers', '12 months (mapping per SOP)', 'validation requirements'],
            ['Surface plates', '12 months', 'concentrated wear, high traffic'],
          ],
        },
      },
      {
        heading: 'How to defend an interval to an auditor',
        paragraphs: [
          'Standards from AS9100 to ISO 13485 to 21 CFR Part 211 all say the same thing in different words: intervals must be planned and justified, not arbitrary. The accepted justification triangle is manufacturer guidance, usage severity, and — most persuasively — your own as-found history.',
          'The method: start at the typical interval, then read your certificates. If an instrument arrives in tolerance cycle after cycle, you have documented grounds to extend. If it arrives out of tolerance, shorten the interval — and complete the out-of-tolerance impact assessment your standard requires. This is why certificates with as-found data matter: without them, interval adjustment is guesswork you can’t defend.',
        ],
      },
      {
        heading: 'Never calibrate on the calendar alone',
        paragraphs: [
          'Calendar intervals assume normal service. Recalibrate early after events that break that assumption: a drop or impact, exposure outside rated conditions, repair or adjustment, readings that disagree with a second instrument, or before starting a high-stakes job like a first-article inspection. A quick verification costs little; a quarter of suspect measurements costs plenty.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is there a legal requirement to calibrate annually?',
        answer:
          'Generally no — regulations and standards require planned, justified intervals rather than a fixed period. Annual is simply the most common starting point, adjusted with as-found history.',
      },
      {
        question: 'Can calibration intervals be extended?',
        answer:
          'Yes, when documented as-found history shows the instrument consistently arrives in tolerance. Extend deliberately, one step at a time, with records — that paper trail is what makes the extension audit-proof.',
      },
      {
        question: 'What if an instrument is overdue?',
        answer:
          'Stop using it for acceptance measurements until calibrated. If it was used while overdue, treat results as suspect and assess impact — same exercise as an out-of-tolerance finding.',
      },
    ],
    relatedLinks: [
      { label: 'Caliper calibration', href: '/caliper-calibration' },
      { label: 'Torque wrench calibration', href: '/torque-wrench-calibration' },
      { label: 'Pipette calibration', href: '/pipette-calibration' },
      { label: 'Request a quote', href: '/contact' },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
