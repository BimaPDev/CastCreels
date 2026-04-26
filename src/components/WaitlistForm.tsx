import { useId, useState, type FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

type Props = {
  className?: string;
  label?: string;
  placeholder?: string;
  buttonLabel?: string;
};

export default function WaitlistForm({
  className,
  label = 'Email address',
  placeholder = 'you@example.com',
  buttonLabel = 'Join waitlist',
}: Props) {
  const id = useId();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    const email = String(data.get('email') ?? '').trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      if (SITE.waitlistEndpoint) {
        const res = await fetch(SITE.waitlistEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        // No backend wired yet — succeed locally so the UI still feels alive.
        await new Promise((r) => setTimeout(r, 350));
      }
      setStatus('ok');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  }

  if (status === 'ok') {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 rounded-lg bg-amber-soft/70 px-4 py-3 text-ink dark:bg-amber/20 dark:text-cream',
          className,
        )}
        role="status"
      >
        <Check className="h-4 w-4 text-amber-deep" aria-hidden="true" />
        <span className="text-sm font-medium">Thanks — we'll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn('w-full max-w-md', className)} noValidate>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={id}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={placeholder}
          className="flex-1 h-11 rounded-lg border border-ink/15 bg-card px-4 text-[15px] text-ink placeholder:text-ink/45 outline-none focus:border-amber focus:ring-2 focus:ring-amber/30 dark:border-cream/15 dark:bg-carddark dark:text-cream dark:placeholder:text-cream/45"
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? `${id}-err` : undefined}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-amber px-5 text-[15px] font-semibold text-cream transition-colors duration-200 hover:bg-amber-deep disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === 'submitting' ? 'Submitting…' : buttonLabel}
          {status !== 'submitting' && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>
      {status === 'error' && error && (
        <p id={`${id}-err`} role="alert" className="mt-2 text-sm text-amber-deep">
          {error}
        </p>
      )}
    </form>
  );
}
