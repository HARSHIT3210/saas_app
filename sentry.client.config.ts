import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6713b971cd3463ec4a4af7ec2f611b3c@o4509473505476608.ingest.us.sentry.io/4509473507770368",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});