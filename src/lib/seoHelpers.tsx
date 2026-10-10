import { SITE_URL, SITE_NAME } from '@/constants/seo';

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: Record<string, unknown>;
}

export function generateSeoMetaTags(metadata: SeoMetadata) {
  const {
    title,
    description,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard = 'summary_large_image',
  } = metadata;

  const fullUrl = canonicalUrl || ogUrl || SITE_URL;
  const ogImageUrl = ogImage || `${SITE_URL}/og-image-default.jpg`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </>
  );
}

export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function getSeoMetadata(
  path: string,
  pageMetadata: Partial<SeoMetadata>
): SeoMetadata {
  const { title, description, ...rest } = pageMetadata;
  if (!title || !description) {
    throw new Error(`pageMetadata must have title and description`);
  }
  return {
    title,
    description,
    canonicalUrl: getCanonicalUrl(path),
    ogUrl: getCanonicalUrl(path),
    ...rest,
  };
}
