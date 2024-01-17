// lib/google/client.ts
import { BetaAnalyticsDataClient } from "@google-analytics/data";

// Ensure that the environment variable is correctly parsed
const credential = process.env.NEXT_PUBLIC_GOOGLE_APPLICATION_CREDENTIALS
 ? JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_APPLICATION_CREDENTIALS)
 : null;

export const analyticsDataClient = new BetaAnalyticsDataClient({
 projectId: credential.project_id,
 credentials: {
  client_email: credential.client_email,
  private_key: credential.private_key,
 },
});
