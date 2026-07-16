'use client';

import { useMemo, useState } from 'react';
import type { GlossaryTerm } from '@/data/calibrationReference';

export default function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState('');

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? terms.filter(
          (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
        )
      : terms;
    const groups = new Map<string, GlossaryTerm[]>();
    for (const t of [...filtered].sort((a, b) => a.term.localeCompare(b.term))) {
      const letter = t.term[0].toUpperCase();
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter)!.push(t);
    }
    return groups;
  }, [terms, query]);

  const letters = [...grouped.keys()];

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="relative block w-full max-w-md">
          <span className="sr-only">Search glossary</span>
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
            placeholder="Search: uncertainty, TUR, traceability…"
            className="w-full rounded-md border border-steel-300 py-2.5 pl-10 pr-4 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20"
          />
        </label>
        <p className="font-mono text-xs text-steel-500">{terms.length} terms, written by our lab — not scraped.</p>
      </div>

      {!query && (
        <nav aria-label="Glossary alphabet" className="mt-6 flex flex-wrap gap-1">
          {letters.map((l) => (
            <a
              key={l}
              href={`#term-${l}`}
              className="flex h-8 w-8 items-center justify-center rounded font-mono text-xs font-semibold text-navy-700 transition hover:bg-navy-700 hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>
      )}

      <div className="mt-8 space-y-10">
        {letters.length === 0 && (
          <p className="text-steel-500">No matching terms — try a shorter search.</p>
        )}
        {letters.map((letter) => (
          <section key={letter} id={`term-${letter}`} aria-label={`Terms starting with ${letter}`}>
            <h3 className="border-b-2 border-accent-500 pb-1 font-display text-xl font-bold text-navy-800">
              {letter}
            </h3>
            <dl className="mt-4 space-y-5">
              {grouped.get(letter)!.map((t) => (
                <div key={t.term}>
                  <dt className="font-display font-bold text-navy-800">{t.term}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-steel-700">{t.definition}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
