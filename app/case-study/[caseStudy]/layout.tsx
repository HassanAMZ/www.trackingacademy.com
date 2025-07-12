import MeetingCalendar from "@/components/contact/meeting-calender";
import Container from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";

export async function generateMetadata({ params }: { params: Promise<{ caseStudy: string }> }) {
  const { caseStudy: caseStudyId } = await params;

  const caseStudyData =
    caseStudies.find((study) => study.id.toLowerCase() === caseStudyId.toLowerCase()) || null;

  if (!caseStudyData) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${caseStudyData.title} | Tracking Academy Case Study`,
    description: caseStudyData.description,
    openGraph: {
      title: `${caseStudyData.title} | Tracking Academy`,
      description: caseStudyData.description,
      images: ["/images/social-sharing.png"],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudyData.title} | Tracking Academy`,
      description: caseStudyData.description,
      images: ["/images/social-sharing.png"],
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
