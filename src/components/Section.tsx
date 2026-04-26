import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  centered?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  bodyClassName,
  centered,
}: Props) {
  return (
    <section
      id={id}
      className={cn('mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24', className)}
    >
      {(eyebrow || title || intro) && (
        <header className={cn('mb-12 sm:mb-16 max-w-2xl', centered && 'mx-auto text-center')}>
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-deep dark:text-amber">
              <span className="h-px w-6 bg-amber-deep/60 dark:bg-amber/60" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink dark:text-cream sm:text-5xl">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-ink/75 dark:text-cream/80">{intro}</p>
          )}
        </header>
      )}
      <div className={bodyClassName}>{children}</div>
    </section>
  );
}
