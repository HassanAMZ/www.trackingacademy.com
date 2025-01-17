import { Suspense } from "react";
import { notFound } from "next/navigation";
import { proposalsService } from "@/lib/firebase/proposals";
import { ProposalPreview } from "../proposal-preview";

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const proposal = await proposalsService.getProposalByIdAndPassword(
    (await params).id,
    "",
  );

  if (!proposal) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading preview...</div>}>
      <ProposalPreview proposal={proposal} />
    </Suspense>
  );
}
