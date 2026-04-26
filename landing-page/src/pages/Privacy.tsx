import { SEO } from '@/lib/seo';
import { SITE } from '@/lib/site';
import LegalLayout from '@/components/legal/LegalLayout';
import { privacy } from '@/content/privacy';

export default function Privacy() {
  return (
    <>
      <SEO
        title={`Privacy Policy · ${SITE.name}`}
        description={`How ${SITE.name} collects, uses, and protects your information.`}
        path="/privacy"
      />
      <LegalLayout doc={privacy} />
    </>
  );
}
