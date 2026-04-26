import { cn } from '@/lib/cn';
import { SITE } from '@/lib/site';
import { AppStoreBadge, PlayStoreBadge } from './icons/StoreIcons';

type Props = {
  variant?: 'row' | 'stacked';
  className?: string;
};

export default function StoreBadges({ variant = 'row', className }: Props) {
  const wrap =
    variant === 'stacked'
      ? 'flex flex-col gap-3 items-start'
      : 'flex flex-wrap gap-3 items-center';
  return (
    <div className={cn(wrap, className)}>
      <a
        href={SITE.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-ink hover:opacity-90 transition-opacity dark:text-cream cursor-pointer rounded-lg focus-visible:outline-amber"
        aria-label="Download CastCreel on the App Store"
      >
        <AppStoreBadge className="h-12 w-auto" />
      </a>
      <a
        href={SITE.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-ink hover:opacity-90 transition-opacity dark:text-cream cursor-pointer rounded-lg focus-visible:outline-amber"
        aria-label="Get CastCreel on Google Play"
      >
        <PlayStoreBadge className="h-12 w-auto" />
      </a>
    </div>
  );
}
