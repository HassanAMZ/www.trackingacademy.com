import { Suspense } from "react";
import { notFound } from "next/navigation";
import { proposalsService } from "@/lib/firebase/proposals";
import { Skeleton } from "@/components/ui/skeleton";
import { ProposalEditor } from "./proposal-editor";

export default async function EditProposalPage({
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
    <Suspense fallback={<ProposalEditorSkeleton />}>
      <ProposalEditor proposal={proposal} />
    </Suspense>
  );
}

function ProposalEditorSkeleton() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-12 w-[300px]" />
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-[100px] w-full" />
        ))}
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-10 w-[100px]" />
        <Skeleton className="h-10 w-[100px]" />
        <Skeleton className="h-10 w-[100px]" />
      </div>
    </div>
  );
}
