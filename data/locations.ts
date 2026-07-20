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
  kind: 'city' | 'county' | 'region';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  heroImage: { src: string; alt: string; credit: string };
  /** Approximate distance/drive from the Placentia lab */
  proximity: { distance: string; drive: string; routeDays: string };
  sections: { heading: string; paragraphs: string[] }[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  neighbors: string[]; // slugs
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
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
