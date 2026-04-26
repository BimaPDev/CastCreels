import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { LogoMark, LogoLockup } from './icons/Wordmark';
import ThemeToggle from './ThemeToggle';
import { Button } from './Button';

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/support', label: 'Support' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={cn(
          'pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5',
          scrolled
            ? 'border-ink/10 bg-paper/85 shadow-card backdrop-blur-md dark:border-cream/10 dark:bg-bgdark/85'
            : 'border-transparent bg-paper/40 backdrop-blur dark:bg-bgdark/40',
        )}
        aria-label="Primary"
      >
        <Link
          to="/"
          className="cursor-pointer rounded-md focus-visible:outline-amber"
          aria-label="CastCreel — Home"
        >
          <LogoLockup className="hidden h-8 w-auto sm:block" />
          <LogoMark className="block h-7 w-auto sm:hidden" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                to={l.href}
                className="inline-flex h-9 items-center rounded-md px-3 text-[14px] font-medium text-ink/80 transition-colors duration-200 hover:bg-ink/5 hover:text-ink dark:text-cream/80 dark:hover:bg-cream/10 dark:hover:text-cream cursor-pointer"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button as="a" href="/#get-the-app" size="sm" className="hidden sm:inline-flex">
            Get the app
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-card text-ink lg:hidden cursor-pointer dark:border-cream/15 dark:bg-carddark dark:text-cream"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-2xl border border-ink/10 bg-paper/95 p-2 shadow-card backdrop-blur-md lg:hidden dark:border-cream/10 dark:bg-bgdark/95">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-[15px] font-medium text-ink/85 hover:bg-ink/5 dark:text-cream/85 dark:hover:bg-cream/10 cursor-pointer"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
