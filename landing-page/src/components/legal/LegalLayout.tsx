import type { ReactNode } from 'react';
import type { LegalDoc } from '@/content/types';
import TableOfContents from './TableOfContents';
import WaveDivider from '../icons/WaveDivider';

/**
 * Renders the body of a legal section. Supports a tiny markdown-ish subset so
 * content authors can stay in plain strings:
 *
 *   ### Sub-heading              → <h3>
 *   - bullet item                → <ul><li>...</li></ul> (consecutive lines)
 *   {{TODO: note}}               → highlighted placeholder card
 *   anything else                → <p>
 *
 * Paragraphs are separated by blank lines.
 */
function renderBody(body: string) {
  const lines = body.split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (trimmed.startsWith('### ')) {
      blocks.push(<h3 key={key++}>{trimmed.slice(4)}</h3>);
      i += 1;
      continue;
    }

    if (trimmed.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i += 1;
      }
      blocks.push(
        <ul key={key++}>
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>,
      );
      continue;
    }

    const todoMatch = /^\{\{TODO:\s*(.*)\}\}$/.exec(trimmed);
    if (todoMatch) {
      blocks.push(
        <aside
          key={key++}
          className="my-3 flex items-start gap-3 rounded-lg border border-dashed border-amber/50 bg-amber-soft/40 px-4 py-3 text-[15px] text-ink/80 not-prose dark:border-amber/40 dark:bg-amber/10 dark:text-cream/80"
        >
          <span className="mt-0.5 inline-flex h-5 items-center rounded-full bg-amber/20 px-2 text-[10px] font-semibold uppercase tracking-wider text-amber-deep dark:text-amber">
            TODO
          </span>
          <p className="m-0">{todoMatch[1]}</p>
        </aside>,
      );
      i += 1;
      continue;
    }

    const paragraphLines: string[] = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t || t.startsWith('### ') || t.startsWith('- ') || /^\{\{TODO:/.test(t)) break;
      paragraphLines.push(t);
      i += 1;
    }
    if (paragraphLines.length) {
      blocks.push(<p key={key++}>{paragraphLines.join(' ')}</p>);
    }
  }

  return blocks;
}

export default function LegalLayout({ doc }: { doc: LegalDoc }) {
  return (
    <div className="px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-deep dark:text-amber">
            <span className="h-px w-6 bg-amber-deep/60 dark:bg-amber/60" aria-hidden="true" />
            Legal
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl dark:text-cream">
            {doc.title}
          </h1>
          <p className="mt-4 text-sm text-ink/60 dark:text-cream/60">
            Last updated: <span className="font-medium text-ink/80 dark:text-cream/80">{doc.lastUpdated}</span>
          </p>
          <div className="mt-6 max-w-2xl rounded-xl border border-ink/10 bg-card p-5 text-[15px] leading-relaxed text-ink/80 dark:border-cream/10 dark:bg-carddark dark:text-cream/80">
            {doc.intro}
          </div>
          <WaveDivider className="mt-8" />
        </header>

        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <TableOfContents sections={doc.sections} />
            </div>
          </aside>

          <article className="lg:col-span-9">
            <div className="prose prose-lg max-w-prose dark:prose-invert">
              {doc.sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-display">{s.heading}</h2>
                  {renderBody(s.body)}
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
