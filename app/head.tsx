import GTMAnalytics from "@/components/analytics/GTMAnalytics";
import VercelAnalytics from "@/components/analytics/VercelAnalytics";

export default function Head() {
 return (
  <>
   <title>ShahzadaAliHassan - Top Rated Web Analyst</title>
   <meta content='width=device-width, initial-scale=1' name='viewport' />
   <meta name='description' content='Created by ShahzadaAliHassan' />
   <link rel='icon' href='/favicon.ico' />

   <GTMAnalytics />
   <VercelAnalytics />
  </>
 );
}
