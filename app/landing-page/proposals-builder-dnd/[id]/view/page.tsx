import { Suspense } from "react";
import { notFound } from "next/navigation";
import { proposalsService } from "@/lib/firebase/proposals";
import { ProposalPreview } from "../preview/proposal-preview";

export default async function ViewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ password?: string }>;
}) {
  const proposal = await proposalsService.getProposalByIdAndPassword(
    (await params).id,
    (await searchParams).password || "",
  );

  if (!proposal) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading proposal...</div>}>
      <ProposalPreview proposal={proposal} />
    </Suspense>
  );
}
