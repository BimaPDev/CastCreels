/**
 * Single source of truth for site-wide config. Override these for production.
 */
export const SITE = {
  name: 'CastCreel',
  tagline: 'Your AI-powered fishing field journal.',
  description:
    'Snap a catch and CastCreel identifies the species, measures the size, and learns when and where you will bite next. A modern field journal for anglers.',
  url: 'https://castcreel.com',
  ogImage: '/og-image.png',
  twitter: '@castcreel',
  email: 'castcreel@gmail.com',
  appStoreUrl: 'https://apps.apple.com/app/castcreel/id000000000',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.castcreel',
  waitlistEndpoint: '', // Set to your ESP form endpoint to wire up real signup.
} as const;
