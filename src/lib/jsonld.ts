import { SITE } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    sameAs: [SITE.twitter ? `https://twitter.com/${SITE.twitter.replace('@', '')}` : null].filter(
      Boolean,
    ),
  };
}

export function mobileAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: SITE.name,
    operatingSystem: 'iOS, Android',
    applicationCategory: 'LifestyleApplication',
    description: SITE.description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: SITE.url,
    image: `${SITE.url}${SITE.ogImage}`,
  };
}
