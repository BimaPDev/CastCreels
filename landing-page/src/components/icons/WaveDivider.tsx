import { cn } from '@/lib/cn';

export default function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      className={cn('block h-3 w-24 text-ink/30 dark:text-cream/30', className)}
      viewBox="0 0 96 12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    >
      <path d="M2 6 q 6 -6 12 0 t 12 0 t 12 0 t 12 0 t 12 0 t 12 0 t 12 0" />
    </svg>
  );
}
