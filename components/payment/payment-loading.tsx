import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export function PaymentLoading() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Loading...</h1>
        <div className="max-w-md mx-auto space-y-4">
          <Skeleton className="h-4 w-3/4 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
          <Skeleton className="h-4 w-2/3 mx-auto" />
        </div>
      </div>
    </div>
  );
}
