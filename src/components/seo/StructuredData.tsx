import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/constants/seo';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Organization' | 'BreadcrumbList' | 'Product';
  data: Record<string, unknown>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  const structuredData = { ...baseData, ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function LocalBusinessStructuredData() {
  return (
    <StructuredData
      type="LocalBusiness"
      data={{
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/og-image-default.jpg`,
        telephone: '+61-2-XXXX-XXXX',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'TBD',
          addressLocality: 'TBD',
          addressRegion: 'NSW',
          postalCode: 'TBD',
          addressCountry: 'AU',
        },
        areaServed: [
          'AU',
          'NSW',
        ],
        sameAs: [],
      }}
    />
  );
}

export function OrganizationStructuredData() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        description: SITE_DESCRIPTION,
        sameAs: [],
      }}
    />
  );
}
