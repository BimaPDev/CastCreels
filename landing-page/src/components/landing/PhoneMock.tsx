import { Sparkles, MapPin, Thermometer } from 'lucide-react';

/**
 * SVG-and-CSS phone mockup. No external image asset required so the page
 * looks finished out of the box. Drop a real screenshot into /public/images/
 * and swap this for an <img> when you have one.
 */
export default function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-amber/15 blur-2xl dark:bg-amber/10"
        aria-hidden="true"
      />
      <div
        className="relative aspect-[9/19] w-full rotate-[3deg] rounded-[42px] border-[10px] border-ink bg-paper shadow-raised dark:border-cream dark:bg-bgdark"
        role="img"
        aria-label="Preview of CastCreel showing an identified largemouth bass with weather and water conditions"
      >
        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink dark:bg-cream/70" aria-hidden="true" />

        <div className="flex h-full w-full flex-col gap-3 overflow-hidden rounded-[32px] p-4">
          <div className="flex items-center justify-between text-[10px] font-semibold tracking-wide text-ink/70 dark:text-cream/80">
            <span>9:41</span>
            <span>CastCreel</span>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-moss-deep via-moss to-amber-deep" />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay paper-grain" />
            <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="fishGrad" x1="0" x2="1">
                  <stop offset="0" stopColor="#3C2F2F" stopOpacity="0.85" />
                  <stop offset="1" stopColor="#1A1916" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <path
                d="M30 90 Q 60 40, 130 60 Q 165 65, 175 78 Q 165 92, 130 98 Q 60 118, 30 90 Z"
                fill="url(#fishGrad)"
              />
              <path d="M170 78 L 195 60 L 188 80 L 195 100 L 170 82 Z" fill="#1A1916" />
              <circle cx="55" cy="80" r="3" fill="#EAE4D7" />
              <circle cx="55" cy="80" r="1.5" fill="#3C2F2F" />
              <path
                d="M65 95 Q 95 110, 130 92"
                stroke="#EAE4D7"
                strokeOpacity="0.4"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
            <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-semibold text-cream backdrop-blur">
              <Sparkles className="h-3 w-3 text-amber" aria-hidden="true" />
              97% match
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-display text-lg leading-tight text-ink dark:text-cream">
              Largemouth Bass
            </p>
            <p className="text-[11px] italic text-ink/60 dark:text-cream/60">
              Micropterus salmoides
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-ink/10 bg-card p-2.5 text-[10px] dark:border-cream/10 dark:bg-carddark">
              <div className="flex items-center gap-1 text-ink/60 dark:text-cream/60">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                Spot
              </div>
              <div className="mt-0.5 text-[11px] font-semibold text-ink dark:text-cream">
                Lake Tilton · NC
              </div>
            </div>
            <div className="rounded-xl border border-ink/10 bg-card p-2.5 text-[10px] dark:border-cream/10 dark:bg-carddark">
              <div className="flex items-center gap-1 text-ink/60 dark:text-cream/60">
                <Thermometer className="h-3 w-3" aria-hidden="true" />
                Water
              </div>
              <div className="mt-0.5 text-[11px] font-semibold text-ink dark:text-cream">
                64°F · clear
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-amber/30 bg-amber-soft/60 p-2.5 dark:bg-amber/15">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-deep dark:text-amber">
              Best window today
            </p>
            <p className="mt-1 text-[11px] text-ink/80 dark:text-cream/80">
              5:42 – 7:18 pm · Falling tide · Crankbait near submerged timber
            </p>
          </div>

          <div className="flex-1" />
        </div>
      </div>
    </div>
  );
}
