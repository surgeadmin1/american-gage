'use client';

import { useEffect, useState } from 'react';

export type JumpLink = { id: string; label: string };

export default function JumpNav({ links, label = 'On this page' }: { links: JumpLink[]; label?: string }) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav
      aria-label={label}
      className="sticky top-[4.5rem] z-30 -mx-5 border-b border-steel-200 bg-white/95 backdrop-blur sm:-mx-8 lg:mx-0"
    >
      <div className="relative">
        <ul className="container-site flex gap-1 overflow-x-auto py-2 lg:px-0">
          {links.map((l) => (
            <li key={l.id} className="shrink-0">
              <a
                href={`#${l.id}`}
                className={`block whitespace-nowrap rounded-full px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wide transition ${
                  active === l.id
                    ? 'bg-navy-700 text-white'
                    : 'text-steel-600 hover:bg-navy-50 hover:text-navy-800'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Right-edge fade hints that the pill row scrolls on small screens */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent lg:hidden"
        />
      </div>
    </nav>
  );
}
