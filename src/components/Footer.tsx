import { Link } from 'react-router-dom';
import { LogoLockup } from './icons/Wordmark';
import WaveDivider from './icons/WaveDivider';
import { SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-paper-deep/40 dark:border-cream/10 dark:bg-bgdark">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <LogoLockup className="h-9 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/70 dark:text-cream/70">
              The AI-powered field journal for modern anglers. Snap a catch, log conditions, and
              learn when you'll bite next.
            </p>
            <WaveDivider className="mt-6" />
          </div>

          <div>
            <h3 className="font-display text-base text-ink dark:text-cream">Product</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/75 dark:text-cream/75">
              <li>
                <Link to="/#features" className="hover:text-amber-deep dark:hover:text-amber transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="hover:text-amber-deep dark:hover:text-amber transition-colors duration-200">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/#get-the-app" className="hover:text-amber-deep dark:hover:text-amber transition-colors duration-200">
                  Get the app
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-ink dark:text-cream">Legal & contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/75 dark:text-cream/75">
              <li>
                <Link to="/privacy" className="hover:text-amber-deep dark:hover:text-amber transition-colors duration-200">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-amber-deep dark:hover:text-amber transition-colors duration-200">
                  Terms
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-amber-deep dark:hover:text-amber transition-colors duration-200"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-ink/60 sm:flex-row sm:items-center dark:border-cream/10 dark:text-cream/60">
          <p>© {year} CastCreel. Made for anglers.</p>
          <p className="font-display italic">Tight lines.</p>
        </div>
      </div>
    </footer>
  );
}
