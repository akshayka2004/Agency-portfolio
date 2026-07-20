/**
 * Canonical origin for the site, used by metadataBase, sitemap.xml and robots.txt.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — set this in Vercel to the real custom domain.
 *   2. The Vercel production URL, so preview and pre-domain deploys are still correct.
 *   3. localhost, for `next dev`.
 *
 * Keeping this out of the source means pointing the site at a new domain is an
 * environment change, not a code change.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProduction = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
