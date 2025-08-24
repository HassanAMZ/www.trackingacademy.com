import MeetingCalendar from "@/components/contact/meeting-calender";
import Container from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ caseStudy: string }>;
}): Promise<Metadata> {
  const { caseStudy: caseStudyId } = await params;

  const caseStudyData =
    caseStudies.find((study) => study.id.toLowerCase() === caseStudyId.toLowerCase()) || null;

  if (!caseStudyData) {
    return {
      title: "Case Study Not Found | TrackingAcademy",
      description:
        "The requested case study could not be found. Please check the URL and try again.",
      keywords: [
        "case study not found",
        "tracking academy case studies",
        "tracking case studies",
        "analytics case studies",
      ],
      authors: [
        {
          name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
        },
      ],
      creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
      publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      alternates: {
        canonical: "/case-study/not-found",
      },
    };
  }

  // Generate dynamic keywords based on available data
  const dynamicKeywords = [
    "tracking case study",
    "analytics case study",
    "conversion tracking case study",
    "tracking academy case study",
    "health & wellness tracking",
    "ROAS improvement case study",
    `${caseStudyData.plan} plan case study`,
    `${caseStudyData.owner} case study`,
  ];

  // Add platform-specific keywords
  if (caseStudyData.platforms) {
    caseStudyData.platforms.forEach((platform) => {
      dynamicKeywords.push(`${platform} case study`);
    });
  }

  // Add technology-specific keywords
  if (caseStudyData.technologies) {
    caseStudyData.technologies.forEach((tech) => {
      dynamicKeywords.push(`${tech} case study`);
    });
  }

  // Add accuracy and recovery keywords
  if (caseStudyData.analytics) {
    dynamicKeywords.push(
      `${caseStudyData.analytics.accuracy}% accuracy case study`,
      `${caseStudyData.analytics.recoveredFromAdBlockersPercentage}% ad blocker recovery`,
      `${caseStudyData.analytics.recoveredFromTrackingPreventionPercentage}% tracking prevention recovery`,
    );
  }

  return {
    title: `${caseStudyData.title} | TrackingAcademy Case Study`,
    description: caseStudyData.description,
    keywords: dynamicKeywords,
    authors: [
      {
        name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
      },
    ],
    creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
    publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/case-study/${caseStudyId}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      title: `${caseStudyData.title} | TrackingAcademy Case Study`,
      description: caseStudyData.description,
      images: [
        {
          url: caseStudyData.imageUrl || "/images/social-sharing.png",
          width: 1200,
          height: 630,
          alt: `${caseStudyData.title} - TrackingAcademy Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudyData.title} | TrackingAcademy Case Study`,
      description: caseStudyData.description,
      images: [caseStudyData.imageUrl || "/images/social-sharing.png"],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
    },
    alternates: {
      canonical: `/case-study/${caseStudyId}`,
    },
  };
}

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <Container className="py-24">
        <MeetingCalendar />
      </Container>
    </>
  );
}
