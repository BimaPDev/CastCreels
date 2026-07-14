import { Camera, Sparkles, LineChart, type LucideIcon } from "lucide-react";
import Section from "../Section";

type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    num: "01",
    icon: Camera,
    title: "Snap",
    body: "Take a photo of your catch right from CastCreel — or import from your camera roll.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Auto-log",
    body: "AI identifies the species, estimates length, and stamps the moment with weather, tide, and moon.",
  },
  {
    num: "03",
    icon: LineChart,
    title: "Predict",
    body: "Your personal model surfaces the best time, place, and technique for your next outing.",
  },
];

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title={
        <>
          Three taps from{" "}
          <em className="italic text-amber-deep dark:text-amber">cast</em> to
          forecast.
        </>
      }
      intro="No spreadsheets, no manual entry. CastCreel quietly records what you'd otherwise forget — then turns it into edge."
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map(({ num, icon: Icon, title, body }) => (
          <li
            key={num}
            className="relative rounded-xl border border-ink/10 bg-card p-7   dark:border-cream/10 dark:bg-carddark"
          >
            <span
              className="font-display text-6xl leading-none text-amber/40 dark:text-amber/35"
              aria-hidden="true"
            >
              {num}
            </span>
            <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-cream dark:bg-cream/90 dark:text-ink">
              <Icon className="h-5 w-5 bg-" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-2xl text-ink dark:text-cream">
              {title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70 dark:text-cream/75">
              {body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
