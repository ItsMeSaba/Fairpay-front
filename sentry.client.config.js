// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  release: "fairpayRelease",
  dsn: SENTRY_DSN || 'https://fc2006e19d9748c4b0a4b0babb1f30c6@o4504508616998912.ingest.sentry.io/4504508759539712',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  enabled: process.env.NODE_ENV !== 'development'
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
