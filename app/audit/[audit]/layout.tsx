import auditReports from "@/data/audit-report";

export async function generateMetadata({ params }: { params: Promise<{ audit: string }> }) {
  const { audit: auditId } = await params;

  const auditReport = auditReports.find(
    (report) => report.id.toLowerCase() === auditId.toLowerCase(),
  );

  if (!auditReport) {
    return {
      title: "Audit Report Not Found | TrackingAcademy",
      description: "The requested audit report could not be found.",
      alternates: {
        canonical: "/audit/not-found",
      },
    };
  }

  return {
    title: `${auditReport.domain} - Website Audit Report | TrackingAcademy`,
    description: `Comprehensive website audit report for ${auditReport.domain}. Overall score: ${auditReport.overallScore.score}/${auditReport.overallScore.maxScore}. Get insights on trackers, cookies, scripts, and recommended improvements.`,
    keywords: [
      "website audit report",
      "tracking audit",
      "analytics audit",
      "Meta pixel audit",
      "GA4 audit",
      "GTM audit",
      "conversion tracking audit",
      "data collection audit",
      `${auditReport.domain} audit`,
      "marketing analytics audit",
    ],
    authors: [
      {
        name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
      },
    ],
    creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
    publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/audit/${auditId}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      title: `${auditReport.domain} - Website Audit Report | TrackingAcademy`,
      description: `Comprehensive website audit report for ${auditReport.domain}. Overall score: ${auditReport.overallScore.score}/${auditReport.overallScore.maxScore}. Get insights on trackers, cookies, scripts, and recommended improvements.`,
      images: [
        {
          url: "/images/social-sharing.png",
          width: 1200,
          height: 630,
          alt: `${auditReport.domain} - Website Audit Report by TrackingAcademy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${auditReport.domain} - Website Audit Report | TrackingAcademy`,
      description: `Comprehensive website audit report for ${auditReport.domain}. Overall score: ${auditReport.overallScore.score}/${auditReport.overallScore.maxScore}.`,
      images: ["/images/social-sharing.png"],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
    },
    alternates: {
      canonical: `/audit/${auditId}`,
    },
  };
}

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
