import React from "react";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";

export default function VercelAnalytics() {
 const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

 return <>{isProduction && <Analytics />}</>;
}
