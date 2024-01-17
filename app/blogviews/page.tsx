import React, { Suspense } from "react";
import { analyticsDataClient } from "../lib/google/client";

// Fetching data function
async function fetchPageViews() {
 const [response] = await analyticsDataClient.runReport({
  property: `properties/${process.env.NEXT_PUBLIC_GA4_PROPERTY_ID}`,
  dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
  dimensions: [{ name: "pagePath" }],
  metrics: [{ name: "pageviews" }],
  dimensionFilter: {
   filter: {
    fieldName: "pagePath",
    stringFilter: { value: "/blog" },
   },
  },
 });
 if (!response.rows) {
  return 0;
 }
 return response.rows.reduce((sum, row) => {
  if (row.metricValues && row.metricValues[0]?.value) {
   return sum + parseInt(row.metricValues[0].value, 10);
  } else {
   return sum;
  }
 }, 0);
}

// Server Component for fetching data
export default async function Page() {
 const views = await fetchPageViews();
 console.log(views);

 return (
  <Suspense fallback={<div>Loading...</div>}>
   <div>{views}</div>
  </Suspense>
 );
}
