import BookAMeetingPage from "@/app/contact/book-a-meeting/page";
import Auditarousel from "@/components/audit/audit-carousal";
import AuditReport from "@/components/audit/audit-report";
import MeetingCalender from "@/components/contact/meeting-calender";
import ServiceHero from "@/components/service/service-hero";
import Container from "@/components/ui/container";
import auditReports from "@/data/audit-report";
import { services } from "@/data/services";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ audit: string }>;
}) {
  const { audit: auditId } = await params;

  console.log(auditId);
  // Find the audit report by ID
  const auditReport = auditReports.find(
    (report) => report.id.toLowerCase() === auditId.toLowerCase(),
  );

  if (!auditReport) {
    notFound();
  }

  return (
    <>
      <Container className="space-y-6">
        <AuditReport report={auditReport} />
      </Container>

      <div className="w-full max-w-full py-12">
        <Container className="flex max-w-4xl flex-col items-center space-y-6 pb-12 text-center">
          <h1>Trusted by 1,000+ for Their Audits</h1>
          <h4 className="text-muted-foreground max-w-3xl">
            See exactly how we identified tracking issues for brands and the
            measurable impact on their ROAS, conversion rates, and scaling
            success.
          </h4>
        </Container>
        <Auditarousel auditReports={auditReports} />
      </div>

      <div className="w-full max-w-full py-12">
        <Container className="flex max-w-4xl flex-col items-center space-y-6 pb-12 text-center">
          <h1>Fix Your Tracking Issues</h1>
          <h4 className="text-muted-foreground max-w-3xl">
            Book a quick 30min call with us to see how we can help you fix your
            tracking issues and Help you make more money from your exisitng ads.
          </h4>
        </Container>
        <MeetingCalender />
      </div>
    </>
  );
}
