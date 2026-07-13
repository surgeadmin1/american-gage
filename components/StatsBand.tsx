const stats = [
  { value: 'Since 1968', label: 'Serving SoCal manufacturers' },
  { value: 'A2LA', label: 'ISO/IEC 17025:2017 accredited' },
  { value: '8,000 sq ft', label: 'Climate-controlled labs' },
  { value: '7–10 days', label: 'Standard turnaround' },
];

export default function StatsBand() {
  return (
    <section aria-label="Company statistics" className="border-y border-steel-200 bg-navy-50">
      <div className="container-site grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-mono text-2xl font-semibold text-navy-800 sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-steel-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
