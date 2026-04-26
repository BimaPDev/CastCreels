import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SITE_URL = process.env.SITE_URL || 'https://castcreel.com';
const ROUTES = ['/', '/support', '/privacy', '/terms'];
const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r === '/' ? '' : r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r === '/' ? '1.0' : '0.7'}</priority>
  </url>`,
).join('\n')}
</urlset>
`;

const out = resolve(process.cwd(), 'dist', 'sitemap.xml');
writeFileSync(out, xml);
console.log(`sitemap.xml → ${out}`);
