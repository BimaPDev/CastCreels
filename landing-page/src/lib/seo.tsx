import { Head } from 'vite-react-ssg';
import { SITE } from './site';

type Props = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
};

export function SEO({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.ogImage,
  type = 'website',
  jsonLd,
  noIndex,
}: Props) {
  const url = `${SITE.url}${path === '/' ? '' : path}`;
  const fullImage = image.startsWith('http') ? image : `${SITE.url}${image}`;
  const fullTitle = title.includes(SITE.name) ? title : `${title} · ${SITE.name}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      {SITE.twitter && <meta name="twitter:site" content={SITE.twitter} />}

      {jsonLd &&
        (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
    </Head>
  );
}
