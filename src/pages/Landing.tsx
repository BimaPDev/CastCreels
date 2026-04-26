import { SEO } from '@/lib/seo';
import { mobileAppSchema, organizationSchema } from '@/lib/jsonld';
import { SITE } from '@/lib/site';
import Hero from '@/components/landing/Hero';
import FeatureGrid from '@/components/landing/FeatureGrid';
import HowItWorks from '@/components/landing/HowItWorks';
import CtaStrip from '@/components/landing/CtaStrip';

export default function Landing() {
  return (
    <>
      <SEO
        title={`${SITE.name} — ${SITE.tagline}`}
        description={SITE.description}
        path="/"
        jsonLd={[organizationSchema(), mobileAppSchema()]}
      />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <CtaStrip />
    </>
  );
}

export const Head = () => null;
