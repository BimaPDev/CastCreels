import StoreBadges from '../StoreBadges';
import WaitlistForm from '../WaitlistForm';
import WaveDivider from '../icons/WaveDivider';

export default function CtaStrip() {
  return (
    <section id="get-the-app" className="px-5 pb-24 sm:px-8">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-ink/10 bg-ink p-10 text-cream shadow-raised sm:p-14 lg:p-16 dark:border-cream/10">
        <div className="paper-grain pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <WaveDivider className="text-cream/40" />
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Start your <em className="italic text-amber">field journal</em>.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-cream/80">
              Free to log unlimited catches. Your data stays yours — anonymized contributions to
              wildlife agencies are always opt-in.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6">
            <StoreBadges />
            <div className="w-full">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
                Or join the waitlist
              </p>
              <WaitlistForm placeholder="you@example.com" buttonLabel="Notify me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
