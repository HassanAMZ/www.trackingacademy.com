import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export function PaymentLoading() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center">
        <h1 className="mb-8 text-3xl font-bold">Loading...</h1>
        <div className="mx-auto max-w-md space-y-4">
          <Skeleton className="mx-auto h-4 w-3/4" />
          <Skeleton className="mx-auto h-4 w-1/2" />
          <Skeleton className="mx-auto h-4 w-2/3" />
        </div>
      </div>
    </div>
  );
}
