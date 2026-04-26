import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import type { LegalSection } from '@/content/types';

export default function TableOfContents({ sections }: { sections: LegalSection[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/55 dark:text-cream/55">
        Contents
      </p>
      <ol className="space-y-1.5">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={cn(
                'group flex items-baseline gap-2 rounded-md py-1 pr-2 transition-colors duration-200 cursor-pointer',
                active === s.id
                  ? 'text-amber-deep dark:text-amber'
                  : 'text-ink/65 hover:text-ink dark:text-cream/65 dark:hover:text-cream',
              )}
            >
              <span className="font-mono text-[10px] tabular-nums text-ink/40 dark:text-cream/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="leading-snug">{s.heading}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
