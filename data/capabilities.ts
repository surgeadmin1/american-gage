export type Capability = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  image: { src: string; alt: string };
  specs: { label: string; value: string }[];
  equipment: { name: string; detail: string }[];
  instruments: string[];
  industries: string[];
};

export const capabilities: Capability[] = [
  {
    slug: 'dimensional',
    name: 'Dimensional Calibration',
    shortName: 'Dimensional',
    metaTitle: 'Dimensional Calibration Services in Orange County | American Gage',
    metaDescription:
      'A2LA ISO/IEC 17025 accredited dimensional calibration: calipers, micrometers, gage blocks, thread gages, indicators, surface plates. Placentia, CA lab — free SoCal pickup.',
    headline: 'The discipline we were founded on in 1968.',
    intro:
      'American Gage began as a dimensional calibration laboratory supporting aerospace manufacturing in Orange County, and dimensional work remains the highest-volume workload we handle. From a machinist’s calipers to master gage block sets, every hand tool that arrives in our lab is cleaned, lubricated where appropriate, and calibrated against NIST-traceable standards in an environmentally controlled dimensional lab. Minor repairs and battery replacement are included with calibration for most major brands.',
    image: {
      src: '/images/dimensional-height-gauge-surface-plate.webp',
      alt: 'American Gage technician calibrating a height gauge on a granite surface plate in the dimensional lab',
    },
    specs: [
      { label: 'Calipers', value: 'Up to 60 in' },
      { label: 'Surface plate lapping (small plates)', value: 'to ±0.0001 in' },
      { label: 'Repair parts stocked', value: 'Mitutoyo, Starrett, Interapid, SPI' },
    ],
    equipment: [
      { name: 'Master gage block sets', detail: 'NIST-traceable length standards maintained in a temperature-controlled dimensional lab' },
      { name: 'Surface plate resurfacing', detail: 'In-lab lapping of small granite plates to ±0.0001 in; on-site resurfacing for larger plates to the desired class' },
    ],
    instruments: [
      'Gage blocks', 'Ring gages & plug gages', 'Thread rings & thread plugs', 'Calipers',
      'OD / ID / depth micrometers', 'Bench micrometers', 'Bore gages', 'Indicators',
      'Height gages & height masters', 'Angle & radius sets', 'Protractors', 'Optical comparators',
      'Surface plates', 'Levels', 'Blocks, squares & bars', 'Sine plates', 'Thickness gages',
      'Rulers & tape measures',
    ],
    industries: ['Aerospace', 'Defense', 'Discrete Manufacturing', 'Medical Device'],
  },
  {
    slug: 'electrical',
    name: 'Electrical & RF Calibration',
    shortName: 'Electrical / RF',
    metaTitle: 'Electrical & RF Calibration Services | A2LA Accredited | American Gage',
    metaDescription:
      'Accredited electrical calibration: multimeters to 8.5 digits, oscilloscopes, power supplies, spectrum analyzers, signal generators. Fluke MET/CAL automated procedures. Placentia, CA.',
    headline: 'From bench multimeters to RF racks — automated, documented, traceable.',
    intro:
      'Our electrical laboratory runs the Fluke MET/CAL automated calibration system with a current procedure subscription, which means automated calibration routines, firmware-level adjustments where supported, and measurement uncertainty calculated on every point. We calibrate DC/AC voltage, current, resistance, and time & frequency, plus RF and microwave instruments through our dedicated RF racks.',
    image: {
      src: '/images/electrical-calibration-bench.webp',
      alt: 'Electrical calibration bench at American Gage with precision multimeters, current shunt, and racks of signal-generation and measurement standards',
    },
    specs: [
      { label: 'DMM resolution', value: 'up to 8.5 digits' },
      { label: 'Automation', value: 'Fluke MET/CAL procedures' },
      { label: 'Parameters', value: 'V, A, Ω, time & frequency, RF power' },
    ],
    equipment: [
      { name: 'Fluke MET/CAL', detail: 'Automated calibration procedures with built-in uncertainty calculation and firmware-level adjustment support' },
      { name: 'Precision reference standards', detail: 'Multifunction calibrators and 8.5-digit reference multimeters for DC/LF workload' },
    ],
    instruments: [
      'Digital multimeters (to 8.5 digits)', 'Oscilloscopes', 'Power supplies', 'Hipot testers',
      'Spectrum analyzers', 'Network analyzers', 'Signal generators', 'Function generators',
      'Pulse generators', 'Frequency counters', 'Microwave counters', 'Power meters & sensors',
      'Attenuators', 'LCR meters', 'Megohmmeters (meggers)', 'Current probes', 'Voltage probes',
      'Decade boxes', 'Shunts', 'Watt meters', 'Panel meters', 'Transformers & variacs',
      'Communication analyzers', 'Distortion analyzers', 'Logic analyzers', 'Rectifiers',
    ],
    industries: ['Electronics', 'RF Communications', 'Semiconductor', 'Aerospace', 'Defense'],
  },
  {
    slug: 'temperature-humidity',
    name: 'Temperature & Humidity Calibration',
    shortName: 'Temperature & Humidity',
    metaTitle: 'Temperature & Humidity Calibration | −196 to 1000 °C | American Gage',
    metaDescription:
      'Accredited temperature calibration from −196 to 1000 °C with SPRTs and Fluke 1594A Super Thermometers; humidity via Thunder Scientific 2500. Placentia, CA calibration lab.',
    headline: 'A temperature lab built around fixed points, not shortcuts.',
    intro:
      'Our temperature laboratory covers −196 to 1000 °C using a bank of Fluke metrology baths and furnaces, a Triple Point of Water maintenance bath, and liquid-nitrogen fixed-point work at the bottom of the range. Reference SPRTs read by Fluke 1594A Super Thermometers deliver uncertainties as low as ±0.007 °C. The humidity lab generates 10–95 %RH with a Thunder Scientific 2500 two-pressure generator.',
    image: {
      src: '/images/humidity-thunder-scientific-2500.webp',
      alt: 'Thunder Scientific 2500 two-pressure humidity generator running a test in the American Gage humidity lab',
    },
    specs: [
      { label: 'Temperature range', value: '−196 to 1000 °C' },
      { label: 'Best temperature uncertainty', value: 'as low as ±0.007 °C' },
      { label: 'Humidity range', value: '10–95 %RH (Thunder 2500)' },
      { label: 'IR thermometry', value: '−15 to 500 °C' },
    ],
    equipment: [
      { name: 'Fluke 7080 high-precision bath', detail: '−60 to 110 °C' },
      { name: 'Fluke 7341 deep-well bath', detail: '−45 to 150 °C — partial- and full-immersion liquid-in-glass thermometers' },
      { name: 'Fluke 6045 bath', detail: '60 to 400 °C' },
      { name: 'Fluke 6050H salt baths', detail: '180 to 550 °C' },
      { name: 'Fluke 9115A freeze-point furnace', detail: '550 to 1000 °C' },
      { name: 'Fluke 7312 TPW bath', detail: 'Triple Point of Water maintenance for SPRT verification' },
      { name: 'Fluke 1594A Super Thermometers + SPRTs', detail: 'Reference readout chain, uncertainties to ±0.007 °C' },
      { name: 'Fluke 4180 / 4181 IR calibrators', detail: 'Infrared thermometry, −15 to 500 °C' },
      { name: 'Thunder Scientific 2500', detail: 'Two-pressure humidity generator, 10–95 %RH' },
    ],
    instruments: [
      'Thermocouples & RTDs', 'Thermometers (digital & liquid-in-glass)', 'Temperature controllers',
      'Environmental chambers', 'Ovens & freezers', 'Chart recorders', 'Dataloggers',
      'Hygrometers & thermohygrometers', 'Psychrometers', 'Dew point meters', 'Transmitters & transducers',
      'Instrumentation loops', 'Barometers', 'IR thermometers', 'pH / ORP meters', 'Conductivity meters',
    ],
    industries: ['Biotechnology', 'Pharmaceutical', 'Medical Device', 'Aerospace (AMS 2750)'],
  },
  {
    slug: 'pressure',
    name: 'Pressure Calibration',
    shortName: 'Pressure',
    metaTitle: 'Pressure Calibration Services | −14.7 to 10,000 psi | American Gage',
    metaDescription:
      'A2LA accredited pressure calibration from −14.7 to 10,000 psi at 0.01% of reading or better. Gauges, transducers, manometers. Placentia, CA — free SoCal pickup and delivery.',
    headline: 'Vacuum to 10,000 psi, at 0.01% of reading or better.',
    intro:
      'The pressure laboratory spans full vacuum to 10,000 psi with automated pressure controllers as references. Low-pressure work runs on a dedicated 0–30 inH₂O controller at ±0.009% of reading, pneumatic ranges to 2,500 psi at ±0.005% of reading, and hydraulic ranges to 10,000 psi.',
    image: {
      src: '/images/pressure-high-comparator.jpg',
      alt: 'American Gage technician operating a hydraulic pressure comparator with a precision pressure controller in the pressure lab',
    },
    specs: [
      { label: 'Range', value: '−14.7 to 10,000 psi' },
      { label: 'Pneumatic (to 2,500 psi)', value: '±0.005% of reading' },
      { label: 'Low pressure (0–30 inH₂O)', value: '±0.009% of reading' },
      { label: 'Hydraulic (to 10,000 psi)', value: '±0.01% FS per transducer range' },
    ],
    equipment: [
      { name: 'Fluke 7250xi pressure controllers', detail: '−14.7 to 2,500 psi pneumatic, ±0.005% of reading' },
      { name: 'Fluke 7615 hydraulic controller', detail: 'To 10,000 psi across 3,000 / 6,000 / 10,000 psi transducer ranges' },
      { name: 'Fluke (Ruska) 7250LP', detail: '0–30 inH₂O low-pressure controller, ±0.009% of reading' },
    ],
    instruments: [
      'Pressure gauges (analog & digital)', 'Pressure transducers & transmitters', 'Manometers',
      'Digital pressure standards', 'Vacuum gauges', 'Barometers', 'Magnehelic & differential gauges',
    ],
    industries: ['Aerospace', 'Medical Device', 'Pharmaceutical', 'Discrete Manufacturing'],
  },
  {
    slug: 'mass',
    name: 'Mass & Balance Calibration',
    shortName: 'Mass',
    metaTitle: 'Mass Calibration | ASTM Class 1 Weights to 25 kg | American Gage',
    metaDescription:
      'A2LA accredited mass calibration with four Mettler comparators. ASTM/OIML Class 1 capability to 25 kg in a ±0.5 °C controlled mass lab. Placentia, California.',
    headline: 'A dedicated mass lab held to ±0.5 °C — because Class 1 demands it.',
    intro:
      'Mass calibration runs in its own environmentally isolated laboratory on four Mettler mass comparators driven by MCLink software. The room holds ±0.5 °C and ±5 %RH during calibration, with each comparator’s weighing cavity independently monitored. We are accredited for ASTM and OIML Class 1 weights up to 25 kg.',
    image: {
      src: '/images/mass-lab-class-1-weights.webp',
      alt: 'American Gage mass laboratory with Mettler comparators on isolation tables and Class 1 stainless weight sets under glass domes',
    },
    specs: [
      { label: 'Accredited class', value: 'ASTM / OIML Class 1' },
      { label: 'Capacity', value: 'up to 25 kg' },
      { label: 'Lab environment', value: '±0.5 °C / ±5 %RH during cal' },
    ],
    equipment: [
      { name: 'Four Mettler mass comparators', detail: 'Driven by MCLink comparator software' },
      { name: 'Cavity environmental monitoring', detail: 'Each weighing cavity independently monitored and logged during calibration' },
    ],
    instruments: [
      'Mass standards & weight sets', 'Analytical balances', 'Precision scales', 'Industrial scales',
    ],
    industries: ['Pharmaceutical', 'Biotechnology', 'Medical Device', 'Discrete Manufacturing'],
  },
  {
    slug: 'pipettes',
    name: 'Pipette Calibration',
    shortName: 'Pipettes',
    metaTitle: 'Pipette Calibration | ISO 8655 Gravimetric & Photometric | American Gage',
    metaDescription:
      'ISO 17025 accredited, ISO 8655 compliant pipette calibration — gravimetric and photometric methods, single and multi-channel, up to accredited 3×10 data. Placentia, CA.',
    headline: 'ISO 8655 pipette calibration, gravimetric and photometric.',
    intro:
      'We calibrate the full range of liquid-handling instruments to ISO 8655 under our ISO/IEC 17025 accreditation — single-channel and multi-channel pipettes, fixed-volume pipettes, motorized controllers, repeaters, bottle-top dispensers, and burettes. Both gravimetric and photometric methods are available, with service levels from a standard 2×4 As Found / As Left up to fully accredited 3×10 / 3×10 data. Preventive maintenance and repair are available on the same visit.',
    image: {
      src: '/images/pipette-photometric-calibration.jpg',
      alt: 'Photometric pipette calibration station in the American Gage life science lab',
    },
    specs: [
      { label: 'Method', value: 'Gravimetric & photometric (ISO 8655)' },
      { label: 'Service levels', value: '2×4 standard → 3×10 accredited' },
      { label: 'Uncertainty methodology', value: 'ISO 8655-7' },
    ],
    equipment: [
      { name: 'Gravimetric stations', detail: 'Analytical balances in the environmentally controlled life-science lab' },
      { name: 'Photometric station', detail: 'Dye-based photometric verification for low volumes and multi-channel heads' },
    ],
    instruments: [
      'Single-channel pipettes', 'Multi-channel pipettes', 'Fixed-volume pipettes',
      'Electronic / motorized pipettes', 'Repeaters', 'Bottle-top dispensers', 'Burettes',
      'Electronic liquid dispensers',
    ],
    industries: ['Biotechnology', 'Pharmaceutical', 'Medical Device', 'Clinical & Research Labs'],
  },
  {
    slug: 'force-torque',
    name: 'Force & Torque Calibration',
    shortName: 'Force & Torque',
    metaTitle: 'Torque Wrench & Force Calibration Services | American Gage',
    metaDescription:
      'Torque calibration from 0.5 ozf·in to 1,000 lbf·ft and dead-weight force calibration. Torque wrenches, force gauges, hardness testers. A2LA accredited lab in Placentia, CA.',
    headline: 'Dead weights for force. Full range for torque.',
    intro:
      'Torque calibration covers 0.5 ozf·in through 1,000 lbf·ft, and force work is performed against dead-weight standards — the reference method that delivers the best available uncertainties. We stock common repair parts for major torque wrench brands, and we repair and calibrate hardness testers.',
    image: {
      src: '/images/force-calibration-stand.webp',
      alt: 'Force gauge under test on a manual test stand in the American Gage mechanical calibration lab',
    },
    specs: [
      { label: 'Torque range', value: '0.5 ozf·in – 1,000 lbf·ft' },
      { label: 'Force reference', value: 'Dead-weight standards' },
    ],
    equipment: [
      { name: 'Dead-weight force standards', detail: 'Primary-method force calibration for gauges and load instruments' },
      { name: 'Torque calibration systems', detail: 'Coverage from 0.5 ozf·in to 1,000 lbf·ft' },
    ],
    instruments: [
      'Torque wrenches', 'Torque arms', 'Torque calibrators & analyzers', 'Force gauges',
      'Push-pull gauges', 'Compression meters', 'Hardness testers', 'Moisture meters',
      'Tachometers', 'Stroboscopes',
    ],
    industries: ['Aerospace', 'Defense', 'Automotive', 'Discrete Manufacturing'],
  },
  {
    slug: 'flow',
    name: 'Gas Flow Calibration',
    shortName: 'Flow',
    metaTitle: 'Gas Flow & Mass Flow Controller Calibration | American Gage',
    metaDescription:
      'Gas flow calibration with Fluke molbloc/molbox laminar flow standards — 50 SCCM to 2,500 SLM elements, ±0.25% of reading. MFCs, rotameters, flow meters. Placentia, CA.',
    headline: 'molbloc-referenced gas flow, from sccm to thousands of slm.',
    intro:
      'Our gas flow bench is built around the Fluke molbloc/molbox laminar flow measurement system — the same reference used by flow standards labs. Six molbloc elements cover 50 SCCM through 2,500 SLM full scale, with uncertainty of ±0.25% of reading from 10–100% of each element’s range. Mass flow controllers are calibrated with live setpoint control and error mapping.',
    image: {
      src: '/images/flow-molbloc-mfc-bench.webp',
      alt: 'Fluke molbloc laminar flow elements and a mass flow controller under test on the American Gage gas flow calibration bench',
    },
    specs: [
      { label: 'Uncertainty (10–100% FS)', value: '±0.25% of reading' },
      { label: 'Below 10% FS', value: '±0.025% FS' },
      { label: 'Element coverage', value: '50 / 500 SCCM · 5 / 25 / 250 / 2,500 SLM' },
    ],
    equipment: [
      { name: 'Fluke molbloc/molbox system', detail: 'Laminar flow reference with six molbloc elements spanning 50 SCCM to 2,500 SLM' },
    ],
    instruments: [
      'Mass flow controllers (MFCs)', 'Mass flow meters', 'Rotameters', 'Flow meters', 'Flow sensors',
    ],
    industries: ['Semiconductor', 'Biotechnology', 'Aerospace', 'Electronics'],
  },
];

export function getCapability(slug: string) {
  return capabilities.find((c) => c.slug === slug);
}
