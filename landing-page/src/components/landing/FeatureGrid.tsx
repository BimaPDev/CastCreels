import { Sparkles, CloudSun, Compass, BookOpen, type LucideIcon } from 'lucide-react';
import Section from '../Section';

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: Sparkles,
    title: 'AI species ID',
    body: 'Photograph any catch and CastCreel returns the species with a confidence reading — even rare ones.',
  },
  {
    icon: CloudSun,
    title: 'Conditions auto-captured',
    body: 'Weather, tide, moon phase, and water temperature are recorded the instant you log your catch.',
  },
  {
    icon: Compass,
    title: 'Smart predictions',
    body: 'Personal AI suggests the best time, place, and technique for your next outing — based on your own data.',
  },
  {
    icon: BookOpen,
    title: 'CreelDex & community',
    body: 'Collect species, level up, and share your field journal with friends and seasonal leaderboards.',
  },
];

export default function FeatureGrid() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title={
        <>
          Built for the way you actually <em className="italic text-amber-deep dark:text-amber">fish</em>.
        </>
      }
      intro="A catch log shouldn't feel like paperwork. CastCreel handles species ID, environmental context, and pattern recognition — so you can focus on the line."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="group relative rounded-xl border border-ink/10 bg-card p-6 shadow-card transition-shadow duration-200 hover:shadow-raised dark:border-cream/10 dark:bg-carddark"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-amber-soft text-amber-deep dark:bg-amber/20 dark:text-amber">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink dark:text-cream">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70 dark:text-cream/75">
              {body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
