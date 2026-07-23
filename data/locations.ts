/**
 * SEO location pages ("service area" pages).
 *
 * These pages are intentionally NOT linked from the main nav or footer — they
 * exist to rank for "[calibration keyword] + [city]" searches. They are
 * discoverable via sitemap.xml, the /locations hub, and cross-links between
 * neighboring pages. Keyword targets come from the July 2026 keyword research
 * spreadsheet (SERP-audited priorities).
 *
 * ACCURACY: distances/drive times are approximate from the lab at
 * 1131 S Richfield Rd, Placentia. Route days must match lib/site.ts.
 */

export type LocationPage = {
  slug: string;
  name: string;
  shortName: string;
  kind: 'city' | 'county' | 'region' | 'state';
  /**
   * When true, this is a nationwide mail-in service-area page (outside the
   * SoCal free-pickup footprint). The template swaps pickup-route messaging
   * for ship-in / mail-in messaging, and the proximity band shows the
   * service model, inbound shipping, and turnaround instead of drive time.
   */
  nationalMailIn?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  heroImage: { src: string; alt: string; credit: string };
  /** Approximate distance/drive from the Placentia lab (SoCal), or mail-in facts */
  proximity: { distance: string; drive: string; routeDays: string };
  sections: { heading: string; paragraphs: string[] }[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  neighbors: string[]; // slugs
  /** Optional authoritative external links (rendered target=_blank rel=noopener). */
  externalLinks?: { label: string; href: string; source: string }[];
};

export const locations: LocationPage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'orange-county',
    name: 'Orange County, California',
    shortName: 'Orange County',
    kind: 'county',
    metaTitle: 'Calibration Services in Orange County, CA | A2LA ISO 17025 Lab | American Gage',
    metaDescription:
      'A2LA-accredited calibration lab based IN Orange County — not a satellite office. Free pickup routes Mon & Wed, 7–10 day turnaround. Dimensional, electrical, pressure, temperature & more. (657) 216-2600.',
    h1: 'Calibration Services in Orange County',
    lead:
      'Most “Orange County” calibration providers are satellite offices of labs headquartered somewhere else. American Gage has calibrated from inside Orange County since 1968 — an 8,000 sq ft, A2LA-accredited laboratory in Placentia with free pickup and delivery routes running through the county every Monday and Wednesday.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1628961434939-30a5179c7e0d?q=80&w=1600&auto=format&fit=crop',
      alt: 'Aerial view of the Orange County, California coastline',
      credit: 'Ariel Blanco / Unsplash',
    },
    proximity: {
      distance: 'Our lab is in Placentia — north Orange County',
      drive: 'Most OC cities within 30 minutes',
      routeDays: 'Monday & Wednesday — free pickup & delivery',
    },
    sections: [
      {
        heading: 'An Orange County calibration lab, not an Orange County sales office',
        paragraphs: [
          'When your quality system needs a calibration supplier, the difference between a lab and a drop point matters. Instruments sent through a national chain’s local office typically ship to another state, wait in a national queue, and come back on the chain’s schedule. Everything we calibrate is calibrated here — at 1131 S Richfield Rd in Placentia — by technicians you can call directly.',
          'That’s how we’ve operated since 1968, when American Gage opened as a dimensional lab serving Orange County’s aerospace machine shops. Over one million calibrations later, the lab covers nine disciplines in discipline-specific, environmentally controlled rooms: dimensional, electrical and RF, temperature and humidity, pressure, mass, pipettes, force and torque, gas flow, and vibration.',
        ],
      },
      {
        heading: 'Built for Orange County’s regulated manufacturers',
        paragraphs: [
          'Orange County’s manufacturing economy is dominated by exactly the industries that audit calibration hardest: aerospace and defense suppliers working to AS9100 and Nadcap, medical device manufacturers under ISO 13485 and FDA 21 CFR 820, biotech and pharma labs following GMP, and electronics builders. Every certificate we issue documents as-found/as-left data, measurement uncertainty, NIST traceability, and the ANSI/NCSL Z540.3 decision rule with TUR — the evidence package those audits ask for.',
          'We hold ISO/IEC 17025:2017 accreditation through A2LA (certificate 4296.01), comply with ANSI/NCSL Z540-1 and Z540.3, and operate a quality system compliant with ISO 10012 and applicable portions of AS9100, IATF 16949, ISO 13485, and FDA 21 CFR requirements.',
        ],
      },
      {
        heading: 'Free pickup and delivery across the county',
        paragraphs: [
          'Our vans run scheduled routes through Orange County every Monday and Wednesday — Anaheim, Fullerton, Irvine, Santa Ana, Brea, Yorba Linda, and everywhere between. Your instruments ride with our drivers, not a parcel courier, and standard turnaround is 7–10 business days with 24/48/72-hour expedited options. Walk-in drop-offs are welcome at the Placentia lab during business hours.',
          'Need calibration at your facility instead? On-site service covers the county with NIST-traceable standards, including after-hours and weekend emergency calls.',
        ],
      },
    ],
    industries: ['Aerospace & Defense (AS9100, Nadcap)', 'Medical Device (ISO 13485, FDA)', 'Biotech & Pharma (GMP)', 'Electronics & RF', 'Machine Shops & Discrete Manufacturing'],
    faqs: [
      {
        question: 'Where is your Orange County calibration lab located?',
        answer:
          'At 1131 S Richfield Rd, Placentia, CA 92870 — in north Orange County, just off the 57 and 91 freeways. Drop-offs are welcome Monday–Friday, 7:30 AM to 4:00 PM.',
      },
      {
        question: 'Do you offer free pickup and delivery in Orange County?',
        answer:
          'Yes — scheduled routes run through Orange County every Monday and Wednesday at no charge. Call (657) 216-2600 or email customerservice@americangage.com to get on a route.',
      },
      {
        question: 'Is American Gage ISO 17025 accredited?',
        answer:
          'Yes. American Gage is accredited to ISO/IEC 17025:2017 by A2LA under certificate 4296.01, and complies with ANSI/NCSL Z540-1 and Z540.3. The current scope of accreditation PDF is available on our Accreditations page.',
      },
      {
        question: 'What turnaround should I expect?',
        answer:
          'Standard turnaround is 7–10 business days. Expedited 24, 48, and 72-hour service is available for a fee, and on-site calibration can be scheduled at your Orange County facility.',
      },
    ],
    neighbors: ['anaheim', 'fullerton', 'irvine', 'santa-ana', 'placentia', 'brea', 'yorba-linda'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'anaheim',
    name: 'Anaheim, California',
    shortName: 'Anaheim',
    kind: 'city',
    metaTitle: 'Calibration Services in Anaheim, CA | A2LA Accredited Lab Next Door | American Gage',
    metaDescription:
      'A2LA ISO 17025 calibration lab minutes from Anaheim — free pickup every Mon & Wed. Calipers, multimeters, pressure gauges, torque wrenches & more. Since 1968. (657) 216-2600.',
    h1: 'Calibration Services in Anaheim',
    lead:
      'American Gage’s laboratory sits in Placentia, directly bordering Anaheim — your instruments travel minutes, not states. Free pickup and delivery runs through Anaheim every Monday and Wednesday.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1584522274402-b4d0f4765750?q=80&w=1600&auto=format&fit=crop',
      alt: 'Anaheim Convention Center illuminated in blue and red at dusk',
      credit: 'Dex Ezekiel / Unsplash',
    },
    proximity: {
      distance: '≈6 miles from downtown Anaheim',
      drive: '10–15 minutes from most of the city',
      routeDays: 'Monday & Wednesday — free pickup & delivery',
    },
    sections: [
      {
        heading: 'The calibration lab next door to Anaheim',
        paragraphs: [
          'Anaheim is more than a tourism town — it’s one of Orange County’s largest industrial bases, from the manufacturing corridors along the 57 and 91 to the Anaheim Canyon business district. Those shops run on calibrated instruments: calipers and micrometers on inspection benches, torque wrenches on assembly lines, pressure gauges and multimeters in maintenance carts.',
          'Our A2LA-accredited lab is minutes away in neighboring Placentia. That proximity is practical, not just geographic: same-week drop-offs, free route pickup twice a week, and a technician you can actually call when a certificate raises a question. Since 1968, Anaheim manufacturers have been part of our home territory.',
        ],
      },
      {
        heading: 'What Anaheim companies send us',
        paragraphs: [
          'The heaviest Anaheim workload is dimensional — calipers, micrometers, indicators, gage blocks, thread gages — followed by electrical test equipment, torque tools, and pressure instruments. All eight of our disciplines are available with ISO/IEC 17025:2017 accredited certificates including as-found/as-left data, uncertainty, and NIST traceability.',
        ],
      },
    ],
    industries: ['Aerospace Suppliers', 'Machine Shops', 'Electronics Manufacturing', 'Food & Beverage Processing', 'Facilities & Maintenance'],
    faqs: [
      {
        question: 'How close is your lab to Anaheim?',
        answer:
          'Our laboratory is at 1131 S Richfield Rd, Placentia — Placentia directly borders Anaheim, and most Anaheim facilities are a 10–15 minute drive away.',
      },
      {
        question: 'Do you pick up instruments in Anaheim?',
        answer:
          'Yes — free scheduled pickup and delivery runs through Anaheim every Monday and Wednesday. You can also drop off any weekday between 7:30 AM and 4:00 PM.',
      },
      {
        question: 'Can you calibrate on-site at our Anaheim facility?',
        answer:
          'Yes. On-site calibration with NIST-traceable standards is available throughout Anaheim — we recommend booking about 3–4 weeks ahead. After-hours and weekend emergency service is available.',
      },
    ],
    neighbors: ['orange-county', 'placentia', 'fullerton', 'santa-ana'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'fullerton',
    name: 'Fullerton, California',
    shortName: 'Fullerton',
    kind: 'city',
    metaTitle: 'Calibration Services in Fullerton, CA | ISO 17025 Accredited | American Gage',
    metaDescription:
      'Calibration lab bordering Fullerton: A2LA ISO/IEC 17025 accredited, free Mon & Wed pickup routes, 7–10 day turnaround, on-site service. Serving Fullerton manufacturers since 1968.',
    h1: 'Calibration Services in Fullerton',
    lead:
      'Fullerton’s manufacturers have an accredited calibration lab in the neighboring city: American Gage in Placentia, roughly five miles east, with free pickup through Fullerton every Monday and Wednesday since — well, longer than most quality managers have been quality managers.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1736044900051-386192eb5847?q=80&w=1600&auto=format&fit=crop',
      alt: 'Palm tree against a Fullerton, California building on a clear day',
      credit: 'Spencer DeMera / Unsplash',
    },
    proximity: {
      distance: '≈5 miles from downtown Fullerton',
      drive: '10–15 minutes',
      routeDays: 'Monday & Wednesday — free pickup & delivery',
    },
    sections: [
      {
        heading: 'Fullerton’s local option for accredited calibration',
        paragraphs: [
          'Fullerton has a deep manufacturing bench — aerospace and defense suppliers, food processing, electronics, and the machine shops that support them — but most calibration providers treat it as a stop on the way to somewhere else. We’re headquartered one city over. Instruments from Fullerton reach our Placentia laboratory in minutes and come back on a 7–10 business day standard turnaround with fully accredited certificates.',
          'Every certificate carries as-found/as-left readings, measurement uncertainty, NIST traceability, and the Z540.3 decision rule — the documentation AS9100 customer audits and FDA-regulated quality systems expect from a supplier.',
        ],
      },
      {
        heading: 'Nine disciplines, one stop',
        paragraphs: [
          'Dimensional hand tools, electrical and RF test equipment, temperature and humidity, pressure, mass and balances, pipettes, force and torque, and gas flow — all calibrated in-house at our A2LA-accredited facility (certificate 4296.01). We also repair dimensional tools with stocked OEM parts and resurface granite surface plates on-site.',
        ],
      },
    ],
    industries: ['Aerospace & Defense Suppliers', 'Food Processing', 'Electronics', 'Machine Shops', 'Cal State Fullerton Research Labs'],
    faqs: [
      {
        question: 'Do you serve Fullerton with pickup and delivery?',
        answer:
          'Yes — Fullerton is on our free Monday & Wednesday Orange County route. Our lab is about five miles from downtown Fullerton in Placentia.',
      },
      {
        question: 'Can Fullerton companies drop off instruments?',
        answer:
          'Absolutely — the lab at 1131 S Richfield Rd, Placentia accepts drop-offs Monday–Friday, 7:30 AM to 4:00 PM. Include a PO or packing list.',
      },
      {
        question: 'What accreditation do your certificates carry?',
        answer:
          'ISO/IEC 17025:2017 accredited by A2LA, certificate 4296.01, with ANSI/NCSL Z540-1 and Z540.3 compliance and NIST-traceable calibration where the discipline allows.',
      },
    ],
    neighbors: ['orange-county', 'placentia', 'anaheim', 'brea'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'irvine',
    name: 'Irvine, California',
    shortName: 'Irvine',
    kind: 'city',
    metaTitle: 'Calibration Services in Irvine, CA | Medical Device & Aerospace | American Gage',
    metaDescription:
      'A2LA ISO 17025 calibration for Irvine medical device, biotech & aerospace companies. Free Mon & Wed pickup, pipette & dimensional specialists, audit-ready certificates. (657) 216-2600.',
    h1: 'Calibration Services in Irvine',
    lead:
      'Irvine concentrates more medical device, biotech, and aerospace engineering than almost anywhere in California — industries where calibration evidence gets audited line by line. American Gage delivers audit-ready, A2LA-accredited calibration with free pickup through Irvine every Monday and Wednesday.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1628961434457-8c271a350754?q=80&w=1600&auto=format&fit=crop',
      alt: 'Aerial view over Irvine, California with mountains in the distance',
      credit: 'Ariel Blanco / Unsplash',
    },
    proximity: {
      distance: '≈20 miles from the Irvine Spectrum area',
      drive: '25–30 minutes via the 55/5',
      routeDays: 'Monday & Wednesday — free pickup & delivery',
    },
    sections: [
      {
        heading: 'Calibration for Irvine’s regulated industries',
        paragraphs: [
          'An ISO 13485 audit doesn’t care how impressive your product is — it cares whether the micrometer that inspected it has a certificate that stands up. Irvine’s medical device manufacturers, biotech labs, and aerospace suppliers send us exactly that workload: inspection tools, environmental chambers, balances, pipettes, torque drivers, and electrical test equipment.',
          'Certificates document as-found/as-left data, measurement uncertainty, NIST traceability, and the Z540.3 decision rule with TUR. For pipette-heavy labs, we calibrate to ISO 8655 with both gravimetric and photometric methods — up to fully accredited 3×10 data — in an environmentally controlled life-science lab.',
        ],
      },
      {
        heading: 'How Irvine companies work with us',
        paragraphs: [
          'Most Irvine clients use the free Monday & Wednesday route — our driver collects instruments at your dock and returns them calibrated, typically in 7–10 business days. For chambers, ovens, and equipment that can’t travel, on-site calibration and uniformity surveys come to you. Supplier-qualification packets (A2LA scope, COI, quality documentation) are returned promptly for your vendor files.',
        ],
      },
    ],
    industries: ['Medical Device (ISO 13485)', 'Biotech & Pharma (GMP)', 'Aerospace & Defense', 'Semiconductor & Electronics', 'University & Research Labs'],
    faqs: [
      {
        question: 'Do you serve Irvine businesses with pickup?',
        answer:
          'Yes — Irvine is on our free Monday & Wednesday Orange County route. Our A2LA-accredited lab is about 25–30 minutes away in Placentia.',
      },
      {
        question: 'Can you support ISO 13485 supplier qualification?',
        answer:
          'Yes. We provide the current A2LA scope of accreditation (certificate 4296.01), certificates with full data and uncertainty, and completed supplier-qualification packets for your vendor files.',
      },
      {
        question: 'Do you calibrate pipettes for Irvine biotech labs?',
        answer:
          'Yes — ISO 8655 pipette calibration with gravimetric and photometric methods, from standard 2×4 service up to accredited 3×10 data, plus preventive maintenance and repair.',
      },
      {
        question: 'Can you calibrate temperature equipment at our Irvine facility?',
        answer:
          'Yes — on-site temperature and humidity calibration, plus oven and chamber uniformity surveys, scheduled around your production.',
      },
    ],
    neighbors: ['orange-county', 'santa-ana', 'anaheim'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'santa-ana',
    name: 'Santa Ana, California',
    shortName: 'Santa Ana',
    kind: 'city',
    metaTitle: 'Calibration Services in Santa Ana, CA | A2LA ISO 17025 Lab | American Gage',
    metaDescription:
      'Accredited calibration for Santa Ana manufacturers — free Mon & Wed pickup routes, 7–10 day turnaround, dimensional to RF. A2LA ISO/IEC 17025 cert 4296.01. Call (657) 216-2600.',
    h1: 'Calibration Services in Santa Ana',
    lead:
      'Santa Ana is Orange County’s seat and one of its densest manufacturing cities. American Gage has served its shops from 15 minutes up the road since 1968 — with free pickup and delivery through Santa Ana every Monday and Wednesday.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1632334052524-43741bdb7cc1?q=80&w=1600&auto=format&fit=crop',
      alt: 'Historic tower building in Santa Ana, California',
      credit: 'Dylan Andersen / Unsplash',
    },
    proximity: {
      distance: '≈12 miles from downtown Santa Ana',
      drive: '15–20 minutes via the 55/91',
      routeDays: 'Monday & Wednesday — free pickup & delivery',
    },
    sections: [
      {
        heading: 'Serving Santa Ana’s industrial core',
        paragraphs: [
          'From the industrial blocks around Dyer Road to the shops off Grand Avenue, Santa Ana runs on machining, metal fabrication, electronics, and medical device production. That mix generates a steady calibration load: dimensional inspection tools, torque wrenches, pressure gauges, scales, and bench electrical equipment.',
          'We calibrate all of it under one A2LA ISO/IEC 17025:2017 accreditation (certificate 4296.01), in discipline-specific labs at our Placentia facility. Certificates arrive audit-ready: as-found/as-left data, uncertainty, NIST traceability, and the Z540.3 decision rule documented.',
        ],
      },
      {
        heading: 'Logistics that fit a production schedule',
        paragraphs: [
          'Free route pickup rolls through Santa Ana Mondays and Wednesdays; standard turnaround is 7–10 business days with expedited options at 24, 48, or 72 hours. Repairs ride along too — dimensional tool repair with stocked OEM parts, hardness tester service, and surface plate resurfacing at your facility or ours.',
        ],
      },
    ],
    industries: ['Metal Fabrication & Machining', 'Medical Device', 'Electronics', 'Aerospace Suppliers', 'Government & Municipal Labs'],
    faqs: [
      {
        question: 'How far is your lab from Santa Ana?',
        answer:
          'About 12 miles — a 15–20 minute drive from downtown Santa Ana to our lab at 1131 S Richfield Rd, Placentia.',
      },
      {
        question: 'Is pickup really free for Santa Ana companies?',
        answer:
          'Yes — Santa Ana is on our standard Monday & Wednesday Orange County route at no charge, whether you send five instruments or five hundred.',
      },
      {
        question: 'What if we need something back fast?',
        answer:
          'Expedited 24, 48, and 72-hour turnaround is available for a fee, and walk-in drop-offs at the Placentia lab are welcome any weekday 7:30 AM – 4:00 PM.',
      },
    ],
    neighbors: ['orange-county', 'irvine', 'anaheim'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'placentia',
    name: 'Placentia, California',
    shortName: 'Placentia',
    kind: 'city',
    metaTitle: 'Calibration Lab in Placentia, CA | American Gage — Est. 1968',
    metaDescription:
      'American Gage IS Placentia’s calibration lab — 8,000 sq ft, A2LA ISO 17025 accredited, at 1131 S Richfield Rd. Walk-in drop-offs welcome Mon–Fri. (657) 216-2600.',
    h1: 'Calibration Lab in Placentia',
    lead:
      'Searching for a calibration lab in Placentia? You found the actual one. American Gage’s 8,000 sq ft, A2LA-accredited laboratory is at 1131 S Richfield Rd — walk-in drop-offs welcome every weekday.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1644118956196-06e072513216?q=80&w=1600&auto=format&fit=crop',
      alt: 'View over north Orange County, California with mountains in the background',
      credit: 'Spencer DeMera / Unsplash',
    },
    proximity: {
      distance: 'We’re located in Placentia',
      drive: 'Drop-offs welcome Mon–Fri, 7:30 AM – 4:00 PM',
      routeDays: 'Monday & Wednesday — free OC pickup & delivery',
    },
    sections: [
      {
        heading: 'Placentia’s own accredited metrology lab',
        paragraphs: [
          'American Gage has operated in north Orange County since 1968 and calls Placentia home — nine discipline-specific, environmentally controlled laboratories accredited to ISO/IEC 17025:2017 by A2LA (certificate 4296.01). For Placentia businesses, that means accredited calibration with zero shipping: drop instruments off on your way in, pick them up on the way home.',
          'Local shops use us for the full range — dimensional hand tools, electrical test equipment, pressure gauges, torque wrenches, scales and balances — plus repairs, with parts stocked for major brands like Mitutoyo and Starrett.',
        ],
      },
    ],
    industries: ['Machine Shops', 'Aerospace Suppliers', 'Facilities & Maintenance', 'Neighboring OC Manufacturers'],
    faqs: [
      {
        question: 'Can I just walk in with my instruments?',
        answer:
          'Yes — drop-offs are welcome at 1131 S Richfield Rd, Placentia, Monday–Friday 7:30 AM to 4:00 PM. Just include a PO or packing list with your equipment.',
      },
      {
        question: 'What does American Gage calibrate?',
        answer:
          'Nine disciplines in-house: dimensional, electrical & RF, temperature & humidity, pressure, mass, pipettes, force & torque, gas flow, and vibration — plus repair services and on-site calibration.',
      },
    ],
    neighbors: ['orange-county', 'anaheim', 'fullerton', 'yorba-linda', 'brea'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'brea',
    name: 'Brea, California',
    shortName: 'Brea',
    kind: 'city',
    metaTitle: 'Calibration Services in Brea, CA | Accredited Lab 10 Minutes Away | American Gage',
    metaDescription:
      'A2LA ISO 17025 calibration lab ~4 miles from Brea. Free Mon & Wed pickup, walk-in drop-offs, 7–10 day turnaround. Dimensional, electrical, pressure & more. (657) 216-2600.',
    h1: 'Calibration Services in Brea',
    lead:
      'Brea’s industrial parks are about ten minutes from our door. American Gage — A2LA-accredited, in Placentia since 1968 — picks up in Brea every Monday and Wednesday, free.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1568321431819-bb00accbca4a?q=80&w=1600&auto=format&fit=crop',
      alt: 'Cityscape view over north Orange County under a cloudy sky',
      credit: 'T M / Unsplash',
    },
    proximity: {
      distance: '≈4 miles from central Brea',
      drive: 'About 10 minutes via the 57',
      routeDays: 'Monday & Wednesday — free pickup & delivery',
    },
    sections: [
      {
        heading: 'Next-door calibration for Brea manufacturers',
        paragraphs: [
          'Brea’s business parks along the 57 corridor house electronics firms, precision manufacturers, and distribution operations — all of which carry instruments that need documented, traceable calibration. Our laboratory sits one city south in Placentia: close enough that many Brea clients simply drop off on their commute.',
          'Everything is calibrated in-house under our A2LA ISO/IEC 17025:2017 accreditation (certificate 4296.01), with as-found/as-left data, uncertainty, and NIST traceability on every certificate. Standard turnaround runs 7–10 business days, with expedited options when a line is down.',
        ],
      },
    ],
    industries: ['Electronics', 'Precision Manufacturing', 'Oil & Energy Services', 'Distribution & Logistics QA'],
    faqs: [
      {
        question: 'How close are you to Brea?',
        answer:
          'About 4 miles — roughly a 10 minute drive down the 57 to our lab at 1131 S Richfield Rd, Placentia.',
      },
      {
        question: 'Do Brea companies get free pickup?',
        answer:
          'Yes — Brea is on the free Monday & Wednesday Orange County route. Walk-in drop-offs are also welcome any weekday.',
      },
    ],
    neighbors: ['orange-county', 'placentia', 'fullerton', 'yorba-linda'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'yorba-linda',
    name: 'Yorba Linda, California',
    shortName: 'Yorba Linda',
    kind: 'city',
    metaTitle: 'Calibration Services in Yorba Linda, CA | Lab Minutes Away | American Gage',
    metaDescription:
      'Yorba Linda’s nearest A2LA ISO 17025 calibration lab — bordering Placentia, free Mon & Wed pickup, drop-offs welcome. Since 1968. Call (657) 216-2600.',
    h1: 'Calibration Services in Yorba Linda',
    lead:
      'Yorba Linda borders Placentia — which makes American Gage the calibration lab around the corner. Free pickup runs through Yorba Linda every Monday and Wednesday, and drop-offs take minutes.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1647058674210-af84449de93a?q=80&w=1600&auto=format&fit=crop',
      alt: 'The Richard Nixon Presidential Library in Yorba Linda, California',
      credit: 'Sven Piper / Unsplash',
    },
    proximity: {
      distance: '≈3 miles from central Yorba Linda',
      drive: '5–10 minutes',
      routeDays: 'Monday & Wednesday — free pickup & delivery',
    },
    sections: [
      {
        heading: 'The lab around the corner',
        paragraphs: [
          'Yorba Linda’s businesses — from light manufacturing and labs to contractors and facilities teams — don’t need to ship instruments across the country for accredited calibration. Our A2LA-accredited laboratory (ISO/IEC 17025:2017, certificate 4296.01) is minutes away across the Placentia line, calibrating everything from calipers and torque wrenches to pressure gauges, scales, and electrical test equipment since 1968.',
          'Use the free Monday & Wednesday route, or drop instruments at 1131 S Richfield Rd any weekday between 7:30 AM and 4:00 PM. Standard turnaround is 7–10 business days.',
        ],
      },
    ],
    industries: ['Light Manufacturing', 'Contractors & Field Service', 'Facilities & Maintenance', 'Neighboring OC Industry'],
    faqs: [
      {
        question: 'Where do Yorba Linda companies drop off instruments?',
        answer:
          'At our lab: 1131 S Richfield Rd, Placentia, CA 92870 — about 5–10 minutes from most of Yorba Linda. Weekdays 7:30 AM to 4:00 PM, with a PO or packing list.',
      },
      {
        question: 'Is there a minimum order for pickup?',
        answer:
          'No minimum account size — the Monday & Wednesday route serves Yorba Linda free whether you send one torque wrench or a full toolroom.',
      },
    ],
    neighbors: ['orange-county', 'placentia', 'brea', 'anaheim'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'los-angeles',
    name: 'Los Angeles, California',
    shortName: 'Los Angeles',
    kind: 'region',
    metaTitle: 'Calibration Services in Los Angeles, CA | Free Tue & Thu Pickup | American Gage',
    metaDescription:
      'A2LA ISO 17025 accredited calibration serving Los Angeles County — free pickup routes every Tuesday & Thursday, 7–10 day turnaround, on-site service. Est. 1968. (657) 216-2600.',
    h1: 'Calibration Services in Los Angeles',
    lead:
      'American Gage runs free pickup and delivery routes through Los Angeles County every Tuesday and Thursday — bringing LA manufacturers the same A2LA-accredited, single-lab service Orange County has used since 1968.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=1600&auto=format&fit=crop',
      alt: 'Downtown Los Angeles skyline under blue sky',
      credit: 'Pedro Marroquin / Unsplash',
    },
    proximity: {
      distance: 'LA County routes from our Placentia lab',
      drive: '≈30 miles from downtown LA',
      routeDays: 'Tuesday & Thursday — free pickup & delivery',
    },
    sections: [
      {
        heading: 'One accredited lab for LA’s instrument fleet',
        paragraphs: [
          'Los Angeles County holds one of the largest manufacturing bases in America — aerospace and defense, medical device, food production, entertainment technology, and thousands of machine shops. Much of that equipment ends up shipped out of state by national calibration chains. Ours stays in Southern California: every instrument is calibrated at our 8,000 sq ft laboratory in Placentia, under ISO/IEC 17025:2017 accreditation from A2LA (certificate 4296.01).',
          'Free routes run through LA County every Tuesday and Thursday. Your equipment rides with our drivers both directions, standard turnaround is 7–10 business days, and expedited 24/48/72-hour service is available when production can’t wait.',
        ],
      },
      {
        heading: 'On-site calibration across Los Angeles',
        paragraphs: [
          'For chambers, ovens, surface plates, and production equipment that shouldn’t travel, our technicians calibrate on-site anywhere in LA County with NIST-traceable standards — including AMS 2750 temperature uniformity surveys for aerospace heat-treat operations and after-hours emergency calls when a line is down.',
        ],
      },
    ],
    industries: ['Aerospace & Defense (AS9100, Nadcap)', 'Medical Device & Biotech', 'Food & Beverage Production', 'Entertainment Technology', 'Metal Fabrication & Machining'],
    faqs: [
      {
        question: 'Do you really pick up for free in Los Angeles?',
        answer:
          'Yes — scheduled routes cover Los Angeles County every Tuesday and Thursday at no charge. Call (657) 216-2600 or email customerservice@americangage.com to get on a route.',
      },
      {
        question: 'Where does the calibration actually happen?',
        answer:
          'Everything is calibrated in-house at our 8,000 sq ft, A2LA-accredited laboratory in Placentia — about 30 miles from downtown LA. Nothing is forwarded to out-of-state labs.',
      },
      {
        question: 'Can you do on-site calibration in LA County?',
        answer:
          'Yes — on-site service covers LA County, including AMS 2750 oven/furnace surveys, with about 3–4 weeks scheduling lead time and emergency after-hours options.',
      },
    ],
    neighbors: ['orange-county', 'anaheim', 'santa-ana'],
  },

  /* ================================================================== */
  /* NATIONWIDE MAIL-IN SERVICE AREAS                                   */
  /* States, major metros, and manufacturing hubs served by ship-in.    */
  /* ================================================================== */

  /* ---- STATES ---- */
  {
    slug: 'california',
    name: 'California',
    shortName: 'California',
    kind: 'state',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in California | A2LA ISO 17025 Lab | American Gage',
    metaDescription:
      'A2LA-accredited (ISO/IEC 17025) calibration lab serving all of California. Local pickup across Southern California and fast mail-in service statewide. Dimensional, electrical, pressure, temperature & more.',
    h1: 'Calibration Services Across California',
    lead:
      'American Gage has calibrated for California manufacturers since 1968 from our lab in Placentia. Southern California companies get free scheduled pickup; the rest of the state — the Bay Area, Sacramento, the Central Valley, and beyond — ships in and gets the same A2LA-accredited certificates with fast turnaround.',
    heroImage: {
      src: '/images/american-gage-facility.jpg',
      alt: 'The American Gage A2LA-accredited calibration laboratory serving California',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Statewide — SoCal pickup + mail-in',
      drive: 'Free SoCal routes; prepaid ship-in elsewhere',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'One accredited lab for California’s toughest industries',
        paragraphs: [
          'California concentrates the exact industries that audit calibration hardest: aerospace and defense across Southern California and the Central Coast, semiconductors and electronics in Silicon Valley, biotech and medical device in the Bay Area and San Diego, and precision machining throughout. American Gage covers nine calibration disciplines under A2LA ISO/IEC 17025 accreditation (certificate 4296.01), with certificates documenting as-found/as-left data, measurement uncertainty, NIST traceability, and the Z540.3 decision rule.',
          'Southern California customers use our free pickup and delivery routes; companies elsewhere in California ship instruments to Placentia and receive them back on a 7–10 business day standard turnaround, with expedited options when a line is down.',
        ],
      },
      {
        heading: 'How mail-in calibration works from anywhere in California',
        paragraphs: [
          'Send us your equipment list — manufacturer, model, serial, and any compliance regimes your customers reference — and we confirm scope, pricing, and turnaround within one to two business days. Pack and ship (we can advise on inbound shipping), we calibrate in our environmentally controlled labs, and your instruments come back with full certificates. Nothing is sub-contracted to another lab.',
        ],
      },
    ],
    industries: ['Aerospace & Defense (AS9100, Nadcap)', 'Semiconductors & Electronics', 'Medical Device & Biotech (ISO 13485, FDA)', 'Pharmaceutical (GMP)', 'Precision Machining'],
    faqs: [
      {
        question: 'Do you serve Northern California?',
        answer:
          'Yes — Northern California, the Bay Area, Sacramento, and the Central Valley are served by mail-in calibration. Ship your instruments to our Placentia lab and we return them with A2LA-accredited certificates, typically in 7–10 business days.',
      },
      {
        question: 'Is mail-in calibration the same accreditation as local service?',
        answer:
          'Identical. Every instrument is calibrated in the same A2LA-accredited Placentia lab under certificate 4296.01, whether it arrives by our pickup route or by freight from across the state.',
      },
    ],
    neighbors: ['orange-county', 'los-angeles', 'san-jose'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'NIST calibration programs', href: 'https://www.nist.gov/calibrations', source: 'NIST' },
    ],
  },

  {
    slug: 'texas',
    name: 'Texas',
    shortName: 'Texas',
    kind: 'state',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Texas | A2LA ISO 17025 Mail-In Lab | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration by mail-in for Texas manufacturers — aerospace, energy, semiconductors, and defense. Full data certificates, fast turnaround, no sub-contracting.',
    h1: 'Calibration Services for Texas Manufacturers',
    lead:
      'From the aerospace and defense corridor around Fort Worth to the energy instrumentation of Houston and the semiconductor fabs near Austin, Texas runs on measurement. American Gage provides A2LA-accredited calibration to Texas companies by mail-in, with certificates built to satisfy the toughest customer audits.',
    heroImage: {
      src: '/images/american-gage-team-lab.jpg',
      alt: 'American Gage metrologists calibrating instruments for Texas manufacturers',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Built for the industries that define Texas manufacturing',
        paragraphs: [
          'Texas concentrates aerospace and defense (the Fort Worth aviation cluster and its supply chain), oil, gas, and petrochemical instrumentation across Houston and the Gulf Coast, and a fast-growing semiconductor and electronics base around Austin and Dallas. Each of those sectors audits calibration hard — AS9100 flow-downs, process instrumentation traceability, and tight tolerances on precision parts.',
          'American Gage answers all three with A2LA ISO/IEC 17025 accreditation across nine disciplines, and certificates documenting as-found/as-left data, measurement uncertainty, NIST traceability, and the ANSI/NCSL Z540.3 decision rule — the evidence package Texas quality managers hand to their auditors.',
        ],
      },
      {
        heading: 'Mail-in calibration, minus the national-chain queue',
        paragraphs: [
          'Unlike a national chain that ships your instruments through a shared queue in another state, American Gage is a single independent lab where you can reach the technician doing the work. Send your equipment list, ship to Placentia, and get instruments back on a 7–10 business day standard turnaround with expedited options. Everything is calibrated in-house — never forwarded.',
        ],
      },
    ],
    industries: ['Aerospace & Defense (AS9100)', 'Oil, Gas & Petrochemical', 'Semiconductors & Electronics', 'Automotive & Heavy Equipment', 'Medical Device'],
    faqs: [
      {
        question: 'How do Texas companies use a California calibration lab?',
        answer:
          'By mail-in. You ship instruments to our Placentia lab, we calibrate them under A2LA accreditation, and we return them — typically within 7–10 business days. Many Texas manufacturers prefer a single accredited independent lab over a national chain’s shared queue.',
      },
      {
        question: 'Can you meet AS9100 and Z540.3 requirements for Texas aerospace suppliers?',
        answer:
          'Yes. Our certificates document data, measurement uncertainty, NIST traceability, and the ANSI/NCSL Z540.3 decision rule under A2LA ISO/IEC 17025 accreditation — confirm your specific measurements against our scope and we’ll advise on turnaround.',
      },
    ],
    neighbors: ['houston', 'phoenix'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'NIST calibration programs', href: 'https://www.nist.gov/calibrations', source: 'NIST' },
    ],
  },

  {
    slug: 'arizona',
    name: 'Arizona',
    shortName: 'Arizona',
    kind: 'state',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Arizona | A2LA ISO 17025 Mail-In Lab | American Gage',
    metaDescription:
      'A2LA-accredited calibration for Arizona’s semiconductor, aerospace, and defense manufacturers by mail-in. Full-data ISO/IEC 17025 certificates with fast, reliable turnaround.',
    h1: 'Calibration Services for Arizona Manufacturers',
    lead:
      'Arizona has become one of the country’s most important semiconductor and aerospace-defense hubs. American Gage supports Phoenix, Tucson, and the wider state with A2LA-accredited mail-in calibration and certificates that stand up to semiconductor and defense audits alike.',
    heroImage: {
      src: '/images/american-gage-lab-work.jpg',
      alt: 'Precision calibration work supporting Arizona semiconductor and aerospace manufacturers',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Semiconductors, aerospace, and defense',
        paragraphs: [
          'Arizona’s manufacturing base leans heavily on semiconductor fabrication expanding around Phoenix, established aerospace and defense in both Phoenix and Tucson, and a deep electronics supply chain. These industries live and die by measurement traceability — from dimensional and electrical calibration to the pressure, temperature, and RF instrumentation behind fabs and defense electronics.',
          'American Gage covers all nine disciplines under A2LA ISO/IEC 17025 accreditation, with certificates documenting data, uncertainty, NIST traceability, and the Z540.3 decision rule — and an automated RF/microwave capability for high-frequency work.',
        ],
      },
      {
        heading: 'Ship-in service that keeps proximity to your neighbors',
        paragraphs: [
          'Arizona sits close enough to Southern California that inbound freight to our Placentia lab is quick, and standard turnaround runs 7–10 business days with expedited options. Send your equipment list; we confirm scope and pricing in one to two business days, calibrate in-house, and return your instruments with full certificates.',
        ],
      },
    ],
    industries: ['Semiconductors & Electronics', 'Aerospace & Defense (AS9100)', 'Medical Device', 'Electronics Manufacturing', 'Precision Machining'],
    faqs: [
      {
        question: 'Do you serve Phoenix and Tucson?',
        answer:
          'Yes — both, plus the wider state, by mail-in calibration. Instruments ship to our Placentia lab and return with A2LA-accredited certificates, typically within 7–10 business days.',
      },
      {
        question: 'Can you calibrate RF and microwave instruments for semiconductor and defense work?',
        answer:
          'Yes — American Gage operates automated RF/microwave calibration capability. Send the model and the parameters/frequencies you need verified and we’ll confirm scope and turnaround.',
      },
    ],
    neighbors: ['phoenix', 'california', 'texas'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'NIST time & frequency', href: 'https://www.nist.gov/pml/time-and-frequency-division', source: 'NIST' },
    ],
  },

  {
    slug: 'washington',
    name: 'Washington',
    shortName: 'Washington',
    kind: 'state',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Washington State | ISO 17025 Mail-In | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration for Washington’s aerospace and technology manufacturers by mail-in. Full-data certificates for AS9100 aerospace supply chains.',
    h1: 'Calibration Services for Washington Manufacturers',
    lead:
      'Washington is aerospace country — Boeing and a deep tier of AS9100 suppliers around the Puget Sound, alongside a strong technology and medical-device base. American Gage delivers A2LA-accredited mail-in calibration with the documented, traceable certificates aerospace primes expect.',
    heroImage: {
      src: '/images/american-gage-facility.jpg',
      alt: 'American Gage laboratory serving Washington aerospace and technology manufacturers',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Serving the Puget Sound aerospace supply chain',
        paragraphs: [
          'Washington’s manufacturing economy centers on aerospace — a prime and a dense network of AS9100-certified suppliers around Seattle and the Puget Sound — plus aviation MRO, technology hardware, and medical device. These customers require calibration certificates with as-found/as-left data, measurement uncertainty, NIST traceability, and the ANSI/NCSL Z540.3 decision rule.',
          'American Gage provides exactly that across nine disciplines under A2LA ISO/IEC 17025 accreditation (certificate 4296.01), so Washington suppliers can drop our certificates straight into their quality records.',
        ],
      },
      {
        heading: 'Reliable mail-in turnaround',
        paragraphs: [
          'Send your equipment list, ship to our Placentia lab, and receive instruments back on a 7–10 business day standard turnaround with expedited options for critical items. Everything is calibrated in-house by technicians you can reach directly — no national-chain queue, no forwarding to another facility.',
        ],
      },
    ],
    industries: ['Aerospace & Defense (AS9100)', 'Aviation MRO', 'Technology & Electronics', 'Medical Device', 'Precision Machining'],
    faqs: [
      {
        question: 'Do you serve Seattle and the Puget Sound?',
        answer:
          'Yes — Seattle, Tacoma, Everett, and the wider Puget Sound aerospace corridor by mail-in calibration. Instruments ship to Placentia and return with A2LA-accredited certificates, typically within 7–10 business days.',
      },
      {
        question: 'Are your certificates accepted by aerospace primes?',
        answer:
          'Our certificates document data, uncertainty, NIST traceability, and the Z540.3 decision rule under A2LA ISO/IEC 17025 accreditation — the evidence aerospace primes and their flow-downs typically require. Confirm your specific measurements against our scope.',
      },
    ],
    neighbors: ['seattle', 'california'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'SAE AS9100 standard', href: 'https://www.sae.org/standards/content/as9100d/', source: 'SAE' },
    ],
  },

  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    shortName: 'Massachusetts',
    kind: 'state',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Massachusetts | ISO 17025 Mail-In | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration for Massachusetts biotech, medical device, and defense-electronics manufacturers by mail-in. Full-data certificates, fast turnaround.',
    h1: 'Calibration Services for Massachusetts Manufacturers',
    lead:
      'Massachusetts is a powerhouse of biotech, medical device, and defense electronics, from the Cambridge/Boston life-sciences cluster to the state’s established defense contractors. American Gage supports them with A2LA-accredited mail-in calibration and certificates built for ISO 13485 and defense audits.',
    heroImage: {
      src: '/images/american-gage-team-lab.jpg',
      alt: 'American Gage technicians calibrating instruments for Massachusetts life-sciences and defense manufacturers',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Life sciences, medical device, and defense electronics',
        paragraphs: [
          'The Massachusetts economy runs on life sciences and biotech (the Cambridge/Boston corridor), medical-device manufacturing under ISO 13485 and FDA 21 CFR 820, and defense electronics. These industries demand calibration with rigorous documentation — pipette and balance calibration for labs, temperature and humidity mapping for storage, and electrical/RF for defense electronics.',
          'American Gage covers all of it across nine disciplines under A2LA ISO/IEC 17025 accreditation, with certificates documenting data, uncertainty, NIST traceability, and decision rules that satisfy medical-device and defense audits.',
        ],
      },
      {
        heading: 'Coast-to-coast mail-in, done right',
        paragraphs: [
          'Distance is not a barrier for mail-in calibration. Send your equipment list, ship instruments to our Placentia lab, and receive them back with full certificates on a 7–10 business day standard turnaround. For temperature/humidity chamber mapping and other on-site-only work, contact us to discuss coverage.',
        ],
      },
    ],
    industries: ['Biotech & Life Sciences', 'Medical Device (ISO 13485, FDA)', 'Defense Electronics', 'Pharmaceutical (GMP)', 'Precision Instruments'],
    faqs: [
      {
        question: 'Do you serve Boston and Cambridge labs?',
        answer:
          'Yes — the Boston/Cambridge life-sciences cluster and the wider state by mail-in. Pipettes, balances, data loggers, and electronic instruments ship to our Placentia lab and return with A2LA-accredited certificates.',
      },
      {
        question: 'Can you support ISO 13485 medical-device requirements?',
        answer:
          'Yes. Our certificates document as-found/as-left data, uncertainty, and traceability under A2LA ISO/IEC 17025 accreditation — the evidence ISO 13485 and FDA audits look for. See our ISO 13485 guide for detail.',
      },
    ],
    neighbors: ['boston'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'FDA 21 CFR Part 820', href: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/cfrsearch.cfm?cfrpart=820', source: 'FDA' },
    ],
  },

  {
    slug: 'michigan',
    name: 'Michigan',
    shortName: 'Michigan',
    kind: 'state',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Michigan | ISO 17025 Mail-In Lab | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration for Michigan automotive, tooling, and defense manufacturers by mail-in. Certificates aligned with IATF 16949 measurement control.',
    h1: 'Calibration Services for Michigan Manufacturers',
    lead:
      'Michigan is the heart of American automotive manufacturing and its tooling, die, and ground-vehicle defense supply chains. American Gage supports Michigan companies with A2LA-accredited mail-in calibration and certificates that align with IATF 16949 measurement-control expectations.',
    heroImage: {
      src: '/images/american-gage-lab-work.jpg',
      alt: 'Dimensional calibration supporting Michigan automotive and tooling manufacturers',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Automotive, tooling, and defense',
        paragraphs: [
          'Michigan’s manufacturing base is dominated by automotive (OEMs and a vast IATF 16949 supplier tier around Detroit), precision tooling and die, and defense ground-vehicle work. Dimensional calibration — calipers, micrometers, gauge blocks, thread and ring/plug gauges — is the backbone here, alongside torque tools for assembly and force instruments for materials testing.',
          'American Gage covers dimensional, mass, force and torque, and the rest of the nine disciplines under A2LA ISO/IEC 17025 accreditation, with data-and-uncertainty certificates that support IATF 16949 measurement-system requirements.',
        ],
      },
      {
        heading: 'Mail-in calibration for the supplier tier',
        paragraphs: [
          'Send your equipment list, ship to our Placentia lab, and get instruments back on a 7–10 business day standard turnaround with expedited options. As an independent accredited lab, we give you direct technician access and consolidate multiple disciplines with one supplier — simpler supplier-quality records than juggling several vendors.',
        ],
      },
    ],
    industries: ['Automotive (IATF 16949)', 'Tooling & Die', 'Defense (Ground Vehicles)', 'Heavy Equipment', 'Precision Machining'],
    faqs: [
      {
        question: 'Do your certificates support IATF 16949?',
        answer:
          'Yes. IATF 16949 expects controlled, traceable calibration and that external labs’ scope covers the required measurements. Our A2LA ISO/IEC 17025 certificates document data, uncertainty, and traceability — pair them with your MSA/gauge R&R program.',
      },
      {
        question: 'Do you serve the Detroit metro?',
        answer:
          'Yes — Detroit and the wider Michigan automotive supply chain by mail-in calibration, with instruments returned typically within 7–10 business days.',
      },
    ],
    neighbors: ['texas'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'IATF 16949 (global oversight)', href: 'https://www.iatfglobaloversight.org', source: 'IATF' },
    ],
  },

  /* ---- METROS ---- */
  {
    slug: 'san-jose',
    name: 'San Jose & Silicon Valley, California',
    shortName: 'San Jose',
    kind: 'city',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in San Jose & Silicon Valley | ISO 17025 | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration for Silicon Valley semiconductor, electronics, and hardware R&D companies by mail-in. Electrical, RF, dimensional & more with full-data certificates.',
    h1: 'Calibration Services in San Jose & Silicon Valley',
    lead:
      'Silicon Valley builds the world’s most advanced electronics and hardware, and every one of those products depends on precise measurement. American Gage supports San Jose and the wider Bay Area tech corridor with A2LA-accredited mail-in calibration — including automated RF/microwave capability for high-frequency work.',
    heroImage: {
      src: '/images/american-gage-reception.jpg',
      alt: 'American Gage laboratory serving San Jose and Silicon Valley electronics companies',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Calibration for the electronics and hardware capital',
        paragraphs: [
          'San Jose and Silicon Valley concentrate semiconductor design and manufacturing, electronics, and the hardware R&D labs of the world’s largest technology companies. Their calibration needs skew electrical and RF — multimeters, oscilloscopes, sources, DAQ systems, and RF/microwave instruments — alongside dimensional and environmental work for hardware and reliability testing.',
          'American Gage covers all of it under A2LA ISO/IEC 17025 accreditation, and runs automated RF/microwave calibration that produces complete, repeatable certificates without the long lead times manual RF work incurs.',
        ],
      },
      {
        heading: 'Mail-in from the Bay Area to our SoCal lab',
        paragraphs: [
          'Ship your instruments to Placentia and get them back on a 7–10 business day standard turnaround, with expedite options for R&D schedules that cannot wait. Send your equipment list and we confirm scope, pricing, and turnaround within one to two business days — and you deal with an actual technician, not a ticketing queue.',
        ],
      },
    ],
    industries: ['Semiconductors', 'Electronics & Hardware', 'Technology R&D', 'Medical Device', 'Telecommunications'],
    faqs: [
      {
        question: 'Can you calibrate RF and microwave test equipment?',
        answer:
          'Yes — American Gage operates automated RF/microwave calibration capability suited to Silicon Valley’s high-frequency test instruments. Send the model and parameters/frequencies and we’ll confirm scope and turnaround.',
      },
      {
        question: 'How fast can you turn around R&D instruments?',
        answer:
          'Standard turnaround is 7–10 business days, with expedited options when a development schedule is on the line. Ask about expedite when you send your equipment list.',
      },
    ],
    neighbors: ['california', 'los-angeles'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'NIST electrical metrology', href: 'https://www.nist.gov/pml/applied-electrical-metrology', source: 'NIST' },
    ],
  },

  {
    slug: 'houston',
    name: 'Houston, Texas',
    shortName: 'Houston',
    kind: 'city',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Houston, TX | ISO 17025 Mail-In | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration for Houston energy, petrochemical, and aerospace instrumentation by mail-in. Pressure, temperature, electrical & more with full-data certificates.',
    h1: 'Calibration Services in Houston',
    lead:
      'Houston runs on process instrumentation — energy, oil and gas, petrochemical, and the aerospace work anchored by NASA. American Gage supports Houston companies with A2LA-accredited mail-in calibration, with deep pressure and temperature capability for process and safety instrumentation.',
    heroImage: {
      src: '/images/onsite-multimeter-fleet.webp',
      alt: 'Instrumentation calibrated by American Gage for Houston energy and aerospace industries',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Pressure, temperature, and the instrumentation of energy',
        paragraphs: [
          'Houston’s energy, oil-and-gas, and petrochemical sectors depend on pressure gauges and transducers, temperature sensors, and the safety instrumentation that keeps facilities running within limits — plus the aerospace work around NASA’s Johnson Space Center. Calibration here is about traceable pressure and temperature above all, backed by full documentation.',
          'American Gage brings deep pressure capability (deadweight/pressure-balance references and precision controllers) and temperature calibration under A2LA ISO/IEC 17025 accreditation, with certificates documenting data, uncertainty, and NIST traceability.',
        ],
      },
      {
        heading: 'Mail-in service for process instruments',
        paragraphs: [
          'Send your equipment list — including ranges and any hazardous-area or process specifics — and we confirm scope, pricing, and turnaround within one to two business days. Ship to Placentia, we calibrate in-house, and instruments return on a 7–10 business day standard turnaround with expedite options.',
        ],
      },
    ],
    industries: ['Oil, Gas & Petrochemical', 'Energy & Power', 'Aerospace (NASA supply chain)', 'Process Manufacturing', 'Instrumentation'],
    faqs: [
      {
        question: 'What pressure ranges can you calibrate?',
        answer:
          'American Gage maintains pressure capability from low-pressure controllers to high-pressure comparators, traceable to NIST. Send the instrument model and full-scale range and we’ll confirm coverage against our scope.',
      },
      {
        question: 'Do you serve the greater Houston area?',
        answer:
          'Yes — Houston and the Gulf Coast by mail-in calibration. Instruments ship to our Placentia lab and return with A2LA-accredited certificates, typically within 7–10 business days.',
      },
    ],
    neighbors: ['texas', 'phoenix'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'NIST pressure & thermodynamic metrology', href: 'https://www.nist.gov/pml/thermodynamic-metrology', source: 'NIST' },
    ],
  },

  {
    slug: 'boston',
    name: 'Boston, Massachusetts',
    shortName: 'Boston',
    kind: 'city',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Boston, MA | ISO 17025 Mail-In | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration for Boston and Cambridge biotech, medical device, and research labs by mail-in. Pipettes, balances, data loggers & more with full-data certificates.',
    h1: 'Calibration Services in Boston & Cambridge',
    lead:
      'The Boston–Cambridge corridor is one of the world’s densest concentrations of biotech, life sciences, and medical-device innovation. American Gage supports its labs and manufacturers with A2LA-accredited mail-in calibration for the pipettes, balances, and environmental instruments that research and production depend on.',
    heroImage: {
      src: '/images/american-gage-team-lab.jpg',
      alt: 'American Gage laboratory calibrating instruments for Boston biotech and medical-device labs',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Calibration for life sciences and medical device',
        paragraphs: [
          'Boston and Cambridge host biotech and pharmaceutical research, medical-device manufacturing under ISO 13485 and FDA 21 CFR 820, and a deep bench of academic and clinical labs. The calibration needs cluster around pipettes (gravimetric and photometric), analytical balances, temperature and humidity monitoring, and data loggers for sample and storage integrity.',
          'American Gage calibrates all of these under A2LA ISO/IEC 17025 accreditation, with certificates documenting as-found/as-left data, uncertainty, and traceability — the evidence life-sciences and medical audits require.',
        ],
      },
      {
        heading: 'Coast-to-coast mail-in for lab instruments',
        paragraphs: [
          'Distance is no obstacle for pipettes, balances, and loggers. Send your equipment list, ship to our Placentia lab, and receive instruments back with full certificates on a 7–10 business day standard turnaround. For chamber mapping and other on-site-only work, contact us to discuss coverage.',
        ],
      },
    ],
    industries: ['Biotech & Life Sciences', 'Medical Device (ISO 13485, FDA)', 'Pharmaceutical (GMP)', 'Academic & Clinical Research', 'Precision Instruments'],
    faqs: [
      {
        question: 'Do you calibrate pipettes by mail-in?',
        answer:
          'Yes — pipettes ship well and are a common mail-in item. We perform gravimetric and photometric pipette calibration under A2LA accreditation and return them with full data, typically within 7–10 business days.',
      },
      {
        question: 'Can you support our ISO 13485 quality system?',
        answer:
          'Yes. Our certificates document data, uncertainty, and traceability under ISO/IEC 17025 accreditation — the evidence ISO 13485 and FDA audits look for. See our ISO 13485 guide for detail.',
      },
    ],
    neighbors: ['massachusetts'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'FDA 21 CFR Part 820', href: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/cfrsearch.cfm?cfrpart=820', source: 'FDA' },
    ],
  },

  {
    slug: 'seattle',
    name: 'Seattle, Washington',
    shortName: 'Seattle',
    kind: 'city',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Seattle, WA | ISO 17025 Mail-In | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration for Seattle and Puget Sound aerospace and technology manufacturers by mail-in. Full-data certificates for AS9100 supply chains.',
    h1: 'Calibration Services in Seattle & the Puget Sound',
    lead:
      'Seattle and the Puget Sound anchor one of the largest aerospace manufacturing clusters in the world, surrounded by aviation MRO, technology hardware, and medical device. American Gage supports them with A2LA-accredited mail-in calibration and the documented certificates aerospace primes require.',
    heroImage: {
      src: '/images/american-gage-facility.jpg',
      alt: 'American Gage laboratory serving Seattle and Puget Sound aerospace manufacturers',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Aerospace-grade calibration for the Puget Sound',
        paragraphs: [
          'The Seattle region’s aerospace supply chain — the prime plus its dense tier of AS9100 suppliers, aviation MRO, and precision machining — needs calibration with as-found/as-left data, measurement uncertainty, NIST traceability, and the ANSI/NCSL Z540.3 decision rule. Dimensional and torque calibration dominate, with electrical and pressure close behind.',
          'American Gage covers nine disciplines under A2LA ISO/IEC 17025 accreditation (certificate 4296.01), so Seattle suppliers get certificates that satisfy prime flow-downs on the first pass.',
        ],
      },
      {
        heading: 'Dependable mail-in turnaround',
        paragraphs: [
          'Send your equipment list, ship to our Placentia lab, and receive instruments back on a 7–10 business day standard turnaround, with expedited options for AOG-style urgency. Everything is calibrated in-house by technicians you can reach directly.',
        ],
      },
    ],
    industries: ['Aerospace & Defense (AS9100)', 'Aviation MRO', 'Technology & Electronics', 'Medical Device', 'Precision Machining'],
    faqs: [
      {
        question: 'Do you serve the whole Puget Sound region?',
        answer:
          'Yes — Seattle, Everett, Tacoma, and the surrounding aerospace corridor by mail-in calibration, with instruments returned typically within 7–10 business days.',
      },
      {
        question: 'Are your certificates accepted by aerospace primes?',
        answer:
          'Our certificates document data, uncertainty, NIST traceability, and the Z540.3 decision rule under A2LA ISO/IEC 17025 accreditation — the evidence primes and their flow-downs require. Confirm your measurements against our scope.',
      },
    ],
    neighbors: ['washington', 'california'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'SAE AS9100 standard', href: 'https://www.sae.org/standards/content/as9100d/', source: 'SAE' },
    ],
  },

  {
    slug: 'wichita',
    name: 'Wichita, Kansas',
    shortName: 'Wichita',
    kind: 'city',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Wichita, KS | Aviation ISO 17025 Mail-In | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration for Wichita — the Air Capital — aviation manufacturers by mail-in. Dimensional, torque, and full-data certificates for AS9100 aerospace.',
    h1: 'Calibration Services in Wichita — the Air Capital',
    lead:
      'Wichita calls itself the Air Capital of the World for good reason — it is one of the densest aircraft-manufacturing clusters anywhere. American Gage supports Wichita’s aviation manufacturers and their AS9100 supply chain with A2LA-accredited mail-in calibration and fully documented certificates.',
    heroImage: {
      src: '/images/american-gage-lab-work.jpg',
      alt: 'Precision dimensional calibration supporting Wichita aviation manufacturers',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Built for aviation manufacturing',
        paragraphs: [
          'Wichita’s economy is aviation — major airframe and business-jet manufacturing and a deep tier of AS9100-certified suppliers and machine shops. That means heavy demand for dimensional calibration (calipers, micrometers, gauge blocks, thread and ring/plug gauges), torque tools for safety-critical fastening, and force instruments for testing.',
          'American Gage covers dimensional, force and torque, and the rest of the nine disciplines under A2LA ISO/IEC 17025 accreditation, with certificates documenting data, uncertainty, NIST traceability, and the Z540.3 decision rule — exactly what aviation audits demand.',
        ],
      },
      {
        heading: 'Mail-in calibration for the aviation supply chain',
        paragraphs: [
          'Send your equipment list, ship to our Placentia lab, and receive instruments back on a 7–10 business day standard turnaround with expedited options. As an independent accredited lab, we consolidate multiple disciplines with one supplier and give you direct technician access — no national-chain queue.',
        ],
      },
    ],
    industries: ['Aviation Manufacturing', 'Aerospace & Defense (AS9100)', 'Machine Shops', 'Precision Machining', 'Metal Fabrication'],
    faqs: [
      {
        question: 'Do you calibrate torque wrenches for aircraft assembly?',
        answer:
          'Yes — torque wrenches and screwdrivers are calibrated across their range in the direction of use, with as-found/as-left data and uncertainty. Safety-critical fastening is exactly where that documented data matters most.',
      },
      {
        question: 'How does mail-in work for a Wichita shop?',
        answer:
          'Ship your instruments to our Placentia lab; we calibrate in-house under A2LA accreditation and return them, typically within 7–10 business days. Send your equipment list first and we confirm scope, pricing, and turnaround.',
      },
    ],
    neighbors: ['texas'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'ISO 6789 (hand torque tools)', href: 'https://www.iso.org', source: 'ISO' },
    ],
  },

  {
    slug: 'phoenix',
    name: 'Phoenix, Arizona',
    shortName: 'Phoenix',
    kind: 'city',
    nationalMailIn: true,
    metaTitle: 'Calibration Services in Phoenix, AZ | ISO 17025 Mail-In | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited calibration for Phoenix semiconductor, aerospace, and electronics manufacturers by mail-in. Electrical, RF, dimensional & more with full-data certificates.',
    h1: 'Calibration Services in Phoenix',
    lead:
      'Phoenix has become a national center for semiconductor fabrication and a long-established aerospace and electronics hub. American Gage supports Phoenix-area manufacturers with A2LA-accredited mail-in calibration, including automated RF/microwave capability for high-frequency work.',
    heroImage: {
      src: '/images/american-gage-reception.jpg',
      alt: 'American Gage laboratory serving Phoenix semiconductor and aerospace manufacturers',
      credit: 'American Gage laboratory, Placentia CA',
    },
    proximity: {
      distance: 'Nationwide mail-in & freight',
      drive: 'Prepaid inbound shipping available',
      routeDays: '7–10 business days; expedite available',
    },
    sections: [
      {
        heading: 'Semiconductors, aerospace, and electronics',
        paragraphs: [
          'Phoenix’s manufacturing base spans rapidly expanding semiconductor fabrication, established aerospace and defense, and a broad electronics supply chain. These sectors need electrical and RF calibration — multimeters, oscilloscopes, sources, DAQ, and RF/microwave — alongside dimensional, pressure, and temperature work for fabs and precision manufacturing.',
          'American Gage covers all nine disciplines under A2LA ISO/IEC 17025 accreditation and runs automated RF/microwave calibration for complete, repeatable high-frequency certificates.',
        ],
      },
      {
        heading: 'Fast mail-in from a nearby lab',
        paragraphs: [
          'Arizona’s proximity to Southern California keeps inbound freight quick. Send your equipment list, ship to our Placentia lab, and receive instruments back on a 7–10 business day standard turnaround with expedited options — calibrated in-house, never forwarded.',
        ],
      },
    ],
    industries: ['Semiconductors', 'Aerospace & Defense (AS9100)', 'Electronics Manufacturing', 'Medical Device', 'Precision Machining'],
    faqs: [
      {
        question: 'Do you serve the greater Phoenix metro?',
        answer:
          'Yes — Phoenix, Chandler, Tempe, Mesa, and the wider metro by mail-in calibration, with instruments returned typically within 7–10 business days.',
      },
      {
        question: 'Can you calibrate RF/microwave and high-resolution electrical instruments?',
        answer:
          'Yes — American Gage operates automated RF/microwave capability and calibrates precision electrical instruments. Send the model and parameters and we’ll confirm scope and turnaround.',
      },
    ],
    neighbors: ['arizona', 'california', 'houston'],
    externalLinks: [
      { label: 'Verify our A2LA accreditation', href: 'https://a2la.org', source: 'A2LA' },
      { label: 'NIST electrical metrology', href: 'https://www.nist.gov/pml/applied-electrical-metrology', source: 'NIST' },
    ],
  },

];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
