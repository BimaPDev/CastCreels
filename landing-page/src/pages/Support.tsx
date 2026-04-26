import { Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import WaveDivider from '@/components/icons/WaveDivider';
import { Button } from '@/components/Button';
import { SEO } from '@/lib/seo';
import { SITE } from '@/lib/site';

const supportAreas = [
  {
    title: 'App help',
    description:
      'Questions about catches, trip logs, and day-to-day app usage. Share what happened and what device you are on.',
    icon: MessageSquare,
  },
  {
    title: 'Account & access',
    description:
      'Need help with sign in, account settings, or restoring access? Include the email tied to your CastCreel account.',
    icon: ShieldCheck,
  },
  {
    title: 'Report a bug',
    description:
      'If something is not working, send steps to reproduce, screenshots, and the app version so we can investigate quickly.',
    icon: Mail,
  },
];

export default function Support() {
  return (
    <>
      <SEO
        title={`Support · ${SITE.name}`}
        description={`Need help with ${SITE.name}? Contact support and we will get you back on the water.`}
        path="/support"
      />

      <section className="px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <div className="mx-auto w-full max-w-6xl">
          <header className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-deep dark:text-amber">
              <span className="h-px w-6 bg-amber-deep/60 dark:bg-amber/60" aria-hidden="true" />
              Support
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl dark:text-cream">
              Need a hand with CastCreel?
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/75 dark:text-cream/75">
              We read every message. Send us the details and we will help you get back to logging smarter trips.
            </p>
            <WaveDivider className="mt-8" />
          </header>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {supportAreas.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-ink/10 bg-card p-6 shadow-card dark:border-cream/10 dark:bg-carddark"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber/15 text-amber-deep dark:bg-amber/20 dark:text-amber">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-display text-2xl text-ink dark:text-cream">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75 dark:text-cream/75">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-ink/10 bg-paper-deep/70 p-8 dark:border-cream/10 dark:bg-herodark/60">
            <h2 className="font-display text-3xl text-ink dark:text-cream">Contact support</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75 dark:text-cream/75">
              Email us anytime and include as much context as possible so we can help faster.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button as="a" href={`mailto:${SITE.email}`} size="md">
                Email {SITE.email}
              </Button>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex h-11 items-center rounded-lg border border-ink/15 px-5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-ink/5 dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
