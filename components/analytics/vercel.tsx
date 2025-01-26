import { Analytics } from "@vercel/analytics/react";

export default function VercelAnalytics() {
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

  return <>{isProduction && <Analytics />}</>;
}
