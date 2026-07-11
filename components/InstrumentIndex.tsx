'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export type IndexedInstrument = { name: string; capability: string; slug: string };

export default function InstrumentIndex({ instruments }: { instruments: IndexedInstrument[] }) {
  const [query, setQuery] = useState('');

  const grouped = useMemo(() => {
    const filtered = instruments.filter((i) =>
      i.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    const groups = new Map<string, IndexedInstrument[]>();
    for (const inst of filtered.sort((a, b) => a.name.localeCompare(b.name))) {
      const letter = /^[a-z]/i.test(inst.name) ? inst.name[0].toUpperCase() : '#';
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter)!.push(inst);
    }
    return groups;
  }, [instruments, query]);

  const letters = [...grouped.keys()];

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="relative block w-full max-w-md">
          <span className="sr-only">Search instruments</span>
          <svg
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel-400"
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: caliper, oscilloscope, pipette…"
            className="w-full rounded-md border border-steel-300 py-2.5 pl-10 pr-4 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20"
          />
        </label>
        <p className="font-mono text-xs text-steel-500">
          {instruments.length} instrument types — full accredited ranges and CMC detail in
          the{' '}
          <a
            href="https://customer.a2la.org/index.cfm?event=directory.getDocument&accreditationPID=C0086F01-07B5-4C75-9DE2-3A922A32AB5A&documentPID=7A3C4A27-E250-46EA-82FA-6E4DD5075307"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent-600 hover:underline"
          >
            A2LA scope PDF ↗
          </a>
        </p>
      </div>

      {/* A–Z jump links */}
      {!query && (
        <nav aria-label="Alphabetical index" className="mt-6 flex flex-wrap gap-1">
          {letters.map((l) => (
            <a
              key={l}
              href={`#index-${l}`}
              className="flex h-8 w-8 items-center justify-center rounded font-mono text-xs font-semibold text-navy-700 transition hover:bg-navy-700 hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>
      )}

      <div className="mt-8 space-y-8">
        {letters.length === 0 && (
          <p className="text-steel-500">
            No matches — but that doesn’t mean we can’t calibrate it.{' '}
            <Link href="/contact" className="font-semibold text-accent-600 hover:underline">
              Ask us directly.
            </Link>
          </p>
        )}
        {letters.map((letter) => (
          <section key={letter} id={`index-${letter}`} aria-label={`Instruments starting with ${letter}`}>
            <h3 className="border-b-2 border-accent-500 pb-1 font-display text-xl font-bold text-navy-800">
              {letter}
            </h3>
            <ul className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
              {grouped.get(letter)!.map((inst) => (
                <li key={`${inst.slug}-${inst.name}`} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-steel-700">{inst.name}</span>
                  <Link
                    href={`/capabilities/${inst.slug}`}
                    className="shrink-0 font-mono text-xs text-accent-600 hover:underline"
                  >
                    {inst.capability}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
