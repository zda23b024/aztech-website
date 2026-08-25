const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? vercelProductionUrl ?? 'https://aztech.co.tz';
