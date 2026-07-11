export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="container-site pb-10 pt-8">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {lead && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-steel-600">{lead}</p>}
      <div className="gauge-ticks mt-6" aria-hidden="true" />
    </div>
  );
}
