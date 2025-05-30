import ServiceHero from "@/components/service/service-hero";
import auditReports from "@/data/audit-report";
import { services } from "@/data/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audit: string }>;
}) {
  const { audit: auditId } = await params;

  const auditReport = auditReports.find(
    (report) => report.id.toLowerCase() === auditId.toLowerCase(),
  );

  if (!auditReport) {
    return {
      title: "Audit Report Not Found",
      description: "The requested audit report could not be found.",
    };
  }

  return {
    title: `${auditReport.domain} - Website Audit Report | Tracking Academy`,
    description: `Comprehensive website audit report for ${auditReport.domain}. Overall score: ${auditReport.overallScore.score}/${auditReport.overallScore.maxScore}. Get insights on trackers, cookies, scripts, and recommended improvements.`,
    openGraph: {
      title: `${auditReport.domain} - Website Audit Report | Tracking Academy`,
      description: `Comprehensive website audit report for ${auditReport.domain}. Overall score: ${auditReport.overallScore.score}/${auditReport.overallScore.maxScore}.`,
      images: ["/images/social-sharing.png"],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${auditReport.domain} - Website Audit Report | Tracking Academy`,
      description: `Comprehensive website audit report for ${auditReport.domain}. Overall score: ${auditReport.overallScore.score}/${auditReport.overallScore.maxScore}.`,
      images: ["/images/social-sharing.png"],
    },
  };
}

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
