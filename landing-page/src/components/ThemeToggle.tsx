import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const KEY = 'cc-theme';

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    if (next) {
      root.classList.add('dark');
      localStorage.setItem(KEY, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(KEY, 'light');
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-card text-ink transition-colors duration-200 hover:bg-paper-deep dark:border-cream/15 dark:bg-carddark dark:text-cream dark:hover:bg-herodark cursor-pointer"
    >
      {mounted && dark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
