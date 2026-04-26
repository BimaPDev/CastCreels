/* Pure-SVG store badges sized to ~140-160px wide for nav/CTA placement.
 * No external assets; render in current text color so they tint with theme. */

export function AppStoreBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 156 52"
      className={className}
      role="img"
      aria-label="Download on the App Store"
    >
      <rect x="0.5" y="0.5" width="155" height="51" rx="9" fill="currentColor" />
      <g fill="var(--badge-fg, #EAE4D7)">
        <path d="M28.7 26.4c0-2.7 2.2-4 2.3-4.1-1.3-1.8-3.2-2.1-3.9-2.1-1.6-.2-3.2.9-4 .9-.8 0-2.1-.9-3.5-.9-1.8 0-3.5 1-4.4 2.7-1.9 3.3-.5 8.1 1.4 10.8.9 1.3 2 2.7 3.4 2.7 1.4-.1 1.9-.9 3.5-.9 1.6 0 2.1.9 3.5.9 1.5 0 2.4-1.3 3.3-2.6 1-1.5 1.5-3 1.5-3-.1 0-2.9-1.1-2.9-4.4zM26.1 18.6c.7-.9 1.2-2.1 1.1-3.4-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.4z"/>
        <text x="44" y="22" fontFamily="Public Sans, sans-serif" fontSize="8" fontWeight="500">Download on the</text>
        <text x="44" y="38" fontFamily="Public Sans, sans-serif" fontSize="16" fontWeight="700" letterSpacing="-0.3">App Store</text>
      </g>
    </svg>
  );
}

export function PlayStoreBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 168 52"
      className={className}
      role="img"
      aria-label="Get it on Google Play"
    >
      <rect x="0.5" y="0.5" width="167" height="51" rx="9" fill="currentColor" />
      <g>
        <path
          d="M14.7 14.5c-.4.4-.6 1.1-.6 1.9v19.2c0 .9.2 1.5.6 1.9l.1.1L26 26.1v-.2L14.7 14.5z"
          fill="var(--badge-play-1, #E85D33)"
        />
        <path
          d="M30 30 26 26v-.1l4-4 .1.1 4.7 2.7c1.3.8 1.3 2 0 2.7L30 30z"
          fill="var(--badge-play-2, #C94A26)"
        />
        <path
          d="M30 30l-4-4-11.3 11.3c.5.5 1.2.5 2.1.1L30 30z"
          fill="var(--badge-play-3, #8B8678)"
        />
        <path
          d="M30 22l-13.2-7.5c-.9-.5-1.6-.4-2.1.1L26 25.9l4-3.9z"
          fill="var(--badge-play-4, #6B6558)"
        />
      </g>
      <g fill="var(--badge-fg, #EAE4D7)">
        <text x="48" y="22" fontFamily="Public Sans, sans-serif" fontSize="8" fontWeight="500">GET IT ON</text>
        <text x="48" y="38" fontFamily="Public Sans, sans-serif" fontSize="16" fontWeight="700" letterSpacing="-0.3">Google Play</text>
      </g>
    </svg>
  );
}
