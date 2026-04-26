import { SEO } from '@/lib/seo';
import { SITE } from '@/lib/site';
import LegalLayout from '@/components/legal/LegalLayout';
import { terms } from '@/content/terms';

export default function Terms() {
  return (
    <>
      <SEO
        title={`Terms of Service · ${SITE.name}`}
        description={`The terms that govern your use of ${SITE.name}.`}
        path="/terms"
      />
      <LegalLayout doc={terms} />
    </>
  );
}
