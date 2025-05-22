import AuditReport from "@/components/audit/audit-report";
import auditReports from "@/data/audit-report";
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
    <div>
      <AuditReport report={auditReport} />
    </div>
  );
}
