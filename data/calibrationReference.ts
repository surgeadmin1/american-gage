/**
 * Calibration Resource hub — glossary, verified conversion tables, and a
 * calibration primer. All definitions are ORIGINAL text (do not copy
 * competitor glossaries). All conversion factors verified computationally.
 */

export type GlossaryTerm = { term: string; definition: string };

export const glossary: GlossaryTerm[] = [
  { term: 'A2LA', definition: 'The American Association for Laboratory Accreditation — an independent, internationally recognized accreditation body that assesses calibration and testing laboratories against ISO/IEC 17025. American Gage is A2LA-accredited under certificate 4296.01.' },
  { term: 'Accreditation', definition: 'Formal recognition by an independent body that a laboratory is competent to perform specific calibrations. Accreditation covers a defined scope — always check the lab’s scope document, not just the logo.' },
  { term: 'Accuracy', definition: 'How close a measurement is to the true value of the quantity being measured. Often confused with precision, which describes agreement among repeated measurements rather than closeness to truth.' },
  { term: 'Adjustment', definition: 'Physically or electronically altering an instrument so its indication matches the reference standard. A calibration measures; an adjustment corrects. As-found data captures the state before adjustment.' },
  { term: 'AMS 2750', definition: 'The aerospace specification governing pyrometry — temperature sensors, instrumentation, and uniformity surveys for heat-treating equipment. Nadcap heat-treat audits are built around it.' },
  { term: 'As-found data', definition: 'The readings an instrument produced when it arrived for calibration, before any adjustment or repair. Essential for out-of-tolerance impact assessments and for justifying calibration intervals.' },
  { term: 'As-left data', definition: 'The readings an instrument produced at the end of calibration, after any adjustment. Together with as-found data, it documents what changed on the bench.' },
  { term: 'Bias', definition: 'A consistent, systematic offset between an instrument’s indication and the true value — as opposed to random scatter. Bias can often be corrected by adjustment; random error cannot.' },
  { term: 'Calibration', definition: 'Comparing an instrument’s indications to a reference standard of known, traceable value under controlled conditions, and documenting the results. Calibration itself does not necessarily include adjustment.' },
  { term: 'Calibration certificate', definition: 'The documented output of a calibration: instrument identity, standards used and their traceability, environmental conditions, results (ideally as-found/as-left with uncertainty), the decision rule applied, and who performed the work.' },
  { term: 'Calibration due date', definition: 'The date after which an instrument should not be used for acceptance measurements until recalibrated. Measurements made with an overdue instrument are treated as suspect in most quality systems.' },
  { term: 'Calibration interval', definition: 'The planned period between calibrations. Standards require intervals to be justified — typically by manufacturer guidance, usage severity, and the instrument’s documented as-found history.' },
  { term: 'CMC (Calibration and Measurement Capability)', definition: 'The smallest measurement uncertainty a laboratory can achieve for a given parameter and range, as listed on its scope of accreditation. CMCs are what you compare when evaluating labs.' },
  { term: 'Coverage factor (k)', definition: 'The multiplier applied to combined standard uncertainty to produce expanded uncertainty at a stated confidence level. k=2 corresponds to approximately 95% confidence and is the industry default.' },
  { term: 'Deadweight tester', definition: 'A primary-method standard that generates force or pressure from calibrated masses under gravity. Dead weights minimize inherited sensor error, which is why they deliver the best available uncertainties.' },
  { term: 'Decision rule', definition: 'The documented method for declaring pass or fail when measurement uncertainty is taken into account — required by ISO/IEC 17025:2017 and central to ANSI/NCSL Z540.3 compliance.' },
  { term: 'Drift', definition: 'Gradual change in an instrument’s indication over time, independent of use conditions. Drift between calibrations is the core argument for keeping intervals honest.' },
  { term: 'Error (of measurement)', definition: 'The difference between an instrument’s indication and the reference value. Reported on certificates point by point; distinct from uncertainty, which quantifies doubt about the reference itself.' },
  { term: 'First article inspection (FAI)', definition: 'Complete verification of the first part produced by a new or changed process, common in aerospace (AS9102). FAIs depend on inspection instruments with current, traceable calibration.' },
  { term: 'Gage block', definition: 'A precision length standard with lapped, wringable faces, used to calibrate and set dimensional instruments. Working sets are verified against masters; each block should be reported individually with uncertainty.' },
  { term: 'Gage R&R', definition: 'A study of measurement-system variation split into repeatability (same operator) and reproducibility (between operators). Calibration controls instrument error; gage R&R evaluates the whole measurement process.' },
  { term: 'Guard banding', definition: 'Tightening acceptance limits by some or all of the measurement uncertainty to reduce the risk of falsely accepting an out-of-tolerance instrument. A common way to implement a decision rule.' },
  { term: 'Hysteresis', definition: 'When an instrument reads differently approaching the same value from above versus below — common in pressure gauges and force instruments. Good procedures exercise the instrument in both directions.' },
  { term: 'ILAC MRA', definition: 'The mutual recognition arrangement among international accreditation bodies. Because A2LA is a signatory, accredited certificates from American Gage are recognized by auditors worldwide.' },
  { term: 'In-tolerance', definition: 'A calibration result where the instrument’s error at each test point falls within its specified limits, per the applied decision rule.' },
  { term: 'IQ / OQ / PQ', definition: 'Installation, Operational, and Performance Qualification — the staged validation protocol used for equipment in pharmaceutical and medical device environments, often executed with calibrated data loggers and validator systems.' },
  { term: 'ISO 8655', definition: 'The international standard for piston-operated volumetric apparatus — pipettes, burettes, dispensers — defining test methods (gravimetric and photometric), test volumes, and error limits.' },
  { term: 'ISO/IEC 17025', definition: 'The international standard for the competence of calibration and testing laboratories, covering technical methods, traceability, uncertainty, impartiality, and quality management. Accreditation to 17025 is the accepted proof a calibration supplier is competent.' },
  { term: 'Linearity', definition: 'How consistently an instrument’s error behaves across its range. A balance may be perfect at mid-range and out at full capacity — which is why calibrations test multiple points.' },
  { term: 'Measurand', definition: 'The specific quantity being measured — not the instrument, but the thing: the DC voltage at 10 V, the torque at 50 lbf·ft, the mass of the 1 kg weight.' },
  { term: 'Metrology', definition: 'The science of measurement, covering units, standards, methods, and uncertainty. Calibration is applied metrology.' },
  { term: 'NIST', definition: 'The National Institute of Standards and Technology — the U.S. national metrology institute that maintains the national measurement standards to which calibrations in the United States are traced.' },
  { term: 'Nominal value', definition: 'The stated or intended value of a standard or artifact — the “1.0000 in” engraved on a gage block. Calibration reports the deviation from nominal with uncertainty.' },
  { term: 'Nonconformance report (NCR)', definition: 'The quality record raised when equipment or product fails requirements — including when an instrument is found out of tolerance and its measurement history needs assessment.' },
  { term: 'Out-of-tolerance (OOT)', definition: 'A calibration result where the instrument exceeded its error limits. Standards require assessing whether measurements made since the last good calibration were affected, and acting on any impacted product.' },
  { term: 'Precision', definition: 'The agreement among repeated measurements — tight scatter. An instrument can be precise and still inaccurate if every reading shares the same bias.' },
  { term: 'Primary standard', definition: 'A standard realized from fundamental definitions or primary methods (fixed-point cells, deadweight force) rather than calibrated against another artifact of the same kind. Sits at the top of the traceability chain below national standards.' },
  { term: 'Range', definition: 'The span of values an instrument is designed to measure. Calibrations test points distributed across the range — and “limited calibration” restricts certification to part of it.' },
  { term: 'Reference standard', definition: 'The highest-accuracy standard a laboratory holds for a given quantity, used to calibrate its working standards. Reference standards are themselves calibrated up the traceability chain.' },
  { term: 'Repeatability', definition: 'Variation in results when the same operator measures the same item with the same instrument under the same conditions in quick succession. The floor of measurement performance.' },
  { term: 'Reproducibility', definition: 'Variation in results when conditions change — different operators, days, or laboratories. Larger than repeatability, and the honest measure of real-world consistency.' },
  { term: 'Resolution', definition: 'The smallest change an instrument can display or detect. Resolution limits precision but does not guarantee accuracy — a 6-digit meter can be confidently wrong.' },
  { term: 'Reverse traceability', definition: 'Identifying every measurement, product, or lot an instrument touched since its last good calibration — the exercise triggered when that instrument is found out of tolerance.' },
  { term: 'Scope of accreditation', definition: 'The official document listing exactly which parameters, ranges, and uncertainties (CMCs) a lab is accredited for. If a measurement isn’t on the scope, it isn’t accredited — full stop.' },
  { term: 'Sensitivity', definition: 'The ratio of an instrument’s output change to the input change that caused it — how strongly the instrument responds to the measurand.' },
  { term: 'Span', definition: 'The difference between the upper and lower limits of an instrument’s range. Process instruments are often specified and calibrated as percent-of-span.' },
  { term: 'SPRT', definition: 'Standard Platinum Resistance Thermometer — the interpolation instrument of the international temperature scale (ITS-90) and the reference thermometer class used in high-accuracy temperature laboratories.' },
  { term: 'Stability', definition: 'An instrument’s ability to hold its performance over time. Stability history — visible in successive as-found results — is the evidence base for extending calibration intervals.' },
  { term: 'Tolerance', definition: 'The permissible limits of error for an instrument or a manufactured feature. Calibration determines whether the instrument is inside its tolerance; uncertainty determines how sure you can be.' },
  { term: 'Traceability', definition: 'An unbroken, documented chain of calibrations connecting a measurement to national or international standards, with stated uncertainty at every link. The property that makes a certificate mean something.' },
  { term: 'Transfer standard', definition: 'A standard used to carry a value from one place or level to another — for example, a precision digital multimeter used to move a voltage value from the reference lab to a working bench.' },
  { term: 'Triple point of water', definition: 'The condition where water coexists as solid, liquid, and vapor — exactly 0.01 °C by definition. Realized in sealed cells, it anchors practical temperature calibration.' },
  { term: 'TUR (Test Uncertainty Ratio)', definition: 'The ratio between the tolerance being tested and the uncertainty of the calibration process testing it. A 4:1 TUR is the traditional benchmark; ANSI/NCSL Z540.3 requires managing false-accept risk when it can’t be met.' },
  { term: 'Type A / Type B evaluation', definition: 'The two ways uncertainty components are quantified: Type A from statistical analysis of repeated measurements, Type B from other knowledge — specifications, certificates, physics.' },
  { term: 'Uncertainty (of measurement)', definition: 'A quantified estimate of the doubt in a measurement result, combining contributions from standards, environment, method, and instrument. Reported on accredited certificates, usually expanded at k=2 (~95% confidence).' },
  { term: 'Uncertainty budget', definition: 'The itemized accounting of every uncertainty contributor in a measurement — standards, resolution, environment, repeatability — combined into the reported value. Accredited labs maintain one per measurement type.' },
  { term: 'Verification', definition: 'Confirming an instrument meets specified requirements — a pass/fail check against tolerance. Related to but narrower than calibration, which quantifies the instrument’s actual errors.' },
  { term: 'Working standard', definition: 'The standard used for day-to-day calibrations on the bench, periodically calibrated against the laboratory’s reference standards.' },
  { term: 'Z540 (ANSI/NCSL)', definition: 'The U.S. national standards for calibration programs: Z540-1 (laboratory and program requirements) and Z540.3 (calibration of measuring and test equipment, including decision rules and false-accept risk). Widely flowed down in defense and aerospace contracts.' },
  { term: 'Zero error', definition: 'An instrument’s indication when the input is genuinely zero. Simple to check, commonly drifting, and the first thing a good procedure verifies.' },
];

/* ---------------- Verified conversion tables ---------------- */

export type RefTable = { id: string; title: string; note?: string; headers: string[]; rows: string[][] };

export const conversionTables: RefTable[] = [
  {
    id: 'pressure',
    title: 'Pressure unit conversions',
    note: 'Factors per NIST SP 811. inH₂O referenced at 4 °C; values rounded to 6 significant figures.',
    headers: ['1 unit =', 'psi', 'kPa', 'bar', 'inH₂O', 'inHg', 'torr (mmHg)'],
    rows: [
      ['1 psi', '1', '6.89476', '0.0689476', '27.6799', '2.03602', '51.7149'],
      ['1 kPa', '0.145038', '1', '0.01', '4.01474', '0.295300', '7.50062'],
      ['1 bar', '14.5038', '100', '1', '401.474', '29.5300', '750.062'],
      ['1 inH₂O', '0.0361273', '0.249082', '0.00249082', '1', '0.0735559', '1.86832'],
      ['1 inHg', '0.491154', '3.38639', '0.0338639', '13.5951', '1', '25.4000'],
      ['1 atm', '14.6959', '101.325', '1.01325', '406.793', '29.9213', '760'],
    ],
  },
  {
    id: 'torque-force',
    title: 'Torque & force conversions',
    note: 'Values rounded to 6 significant figures.',
    headers: ['Convert', 'Multiply by', 'To get'],
    rows: [
      ['lbf·ft', '1.35582', 'N·m'],
      ['lbf·in', '0.112985', 'N·m'],
      ['ozf·in', '0.00706155', 'N·m'],
      ['N·m', '0.737562', 'lbf·ft'],
      ['lbf', '4.44822', 'N'],
      ['kgf', '9.80665', 'N'],
      ['N', '0.224809', 'lbf'],
    ],
  },
  {
    id: 'length',
    title: 'Length conversions',
    note: 'The inch is defined as exactly 25.4 mm.',
    headers: ['Convert', 'Multiply by', 'To get'],
    rows: [
      ['inches', '25.4 (exact)', 'millimeters'],
      ['millimeters', '0.0393701', 'inches'],
      ['feet', '0.3048 (exact)', 'meters'],
      ['meters', '3.28084', 'feet'],
      ['microinches (µin)', '0.0254 (exact)', 'micrometers (µm)'],
      ['micrometers (µm)', '39.3701', 'microinches (µin)'],
    ],
  },
  {
    id: 'temperature',
    title: 'Temperature conversions & fixed points',
    headers: ['Relationship', 'Formula / value'],
    rows: [
      ['Celsius → Fahrenheit', '°F = (°C × 9/5) + 32'],
      ['Fahrenheit → Celsius', '°C = (°F − 32) × 5/9'],
      ['Celsius → Kelvin', 'K = °C + 273.15'],
      ['Absolute zero', '−273.15 °C / −459.67 °F / 0 K'],
      ['Triple point of water', '0.01 °C (exact, by definition)'],
      ['Water boils (1 atm)', '≈100 °C / 212 °F'],
    ],
  },
  {
    id: 'si-prefixes',
    title: 'SI prefixes (the useful ones)',
    headers: ['Prefix', 'Symbol', 'Factor', 'Example in calibration'],
    rows: [
      ['giga', 'G', '10⁹', 'GHz — RF signal generators'],
      ['mega', 'M', '10⁶', 'MΩ — insulation resistance'],
      ['kilo', 'k', '10³', 'kPa — pressure'],
      ['milli', 'm', '10⁻³', 'mV — thermocouple outputs'],
      ['micro', 'µ', '10⁻⁶', 'µm, µin — dimensional; µA — current'],
      ['nano', 'n', '10⁻⁹', 'nm — surface finish, optics'],
      ['pico', 'p', '10⁻¹²', 'pF — capacitance'],
    ],
  },
];

/* ---------------- Service level comparison ---------------- */

export const serviceLevels: RefTable = {
  id: 'service-levels',
  title: 'Calibration service levels compared',
  note: 'Match the level to what your quality system and customers require — the levels mirror the options on our quote form.',
  headers: ['', 'Traceable, no data (Level 1)', 'Traceable Z540, with data (Level 2)', 'Accredited ISO/IEC 17025, with data'],
  rows: [
    ['NIST-traceable standards', '✓', '✓', '✓'],
    ['Certificate issued', '✓', '✓', '✓'],
    ['As-found / as-left readings', '—', '✓', '✓'],
    ['Measurement uncertainty reported', '—', '—', '✓'],
    ['Issued under A2LA accreditation', '—', '—', '✓'],
    ['Typical use', 'Basic compliance, non-critical tools', 'General QA programs needing data', 'AS9100, ISO 13485, FDA & audited programs'],
  ],
};
