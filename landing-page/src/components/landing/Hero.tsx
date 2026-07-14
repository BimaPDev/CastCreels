import { ArrowRight } from "lucide-react";
import StoreBadges from "../StoreBadges";
import WaitlistForm from "../WaitlistForm";
import WaveDivider from "../icons/WaveDivider";
import PhoneMock from "./PhoneMock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl dark:bg-amber/15" />
        <div className="absolute right-[-120px] top-[40%] h-[420px] w-[420px] rounded-full bg-moss/15 blur-3xl dark:bg-moss/10" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:pb-32">
        <div className="lg:col-span-7 animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-deep dark:border-cream/15 dark:bg-carddark/80 dark:text-amber">
            <span
              className="h-1.5 w-1.5 rounded-full bg-amber"
              aria-hidden="true"
            />
            <span>Catch</span>
            <span className="text-ink/30 dark:text-cream/30" aria-hidden="true">
              ·
            </span>
            <span className="text-teal">Score</span>
            <span className="text-ink/30 dark:text-cream/30" aria-hidden="true">
              ·
            </span>
            <span className="text-sand">Connect</span>
          </p>
          <h1 className="font-display text-[44px] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl dark:text-cream">
            Snap your catch.
            <span className="block italic text-amber-deep dark:text-amber">
              We'll do the rest.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 dark:text-cream/80">
            CastCreel identifies the species, measures the size, and captures
            the conditions — then learns when and where you'll bite next.
          </p>

          <div className="mt-8 flex flex-col items-center gap-6">
            <StoreBadges />
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink/55 dark:text-cream/55">
              <WaveDivider className="w-12" />
              Or get early-access updates
              <WaveDivider className="w-12" />
            </div>
            <WaitlistForm />
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink/65 dark:text-cream/70">
            <li className="inline-flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-amber" aria-hidden="true" />
              AI species ID with confidence
            </li>
            <li className="inline-flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-amber" aria-hidden="true" />
              Conditions captured automatically
            </li>
            <li className="inline-flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-amber" aria-hidden="true" />
              Predictions for your next outing
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
