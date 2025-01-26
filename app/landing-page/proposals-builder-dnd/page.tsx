import { Suspense } from "react";
import { ProposalList } from "./proposal-list";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProposalsPage() {
  return (
    <div className="space-y-8">
      <Suspense fallback={<ProposalListSkeleton />}>
        <ProposalList />
      </Suspense>
    </div>
  );
}

function ProposalListSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-10 w-[150px]" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full" />
        ))}
      </div>
    </div>
  );
}
