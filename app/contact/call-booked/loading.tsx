// app/book-a-meeting/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        {/* Success Message */}
        <div className="space-y-4">
          <Skeleton className="h-6 w-72 mx-auto" />
          <Skeleton className="h-8 w-96 mx-auto" />
          <Skeleton className="h-5 w-64 mx-auto" />
        </div>

        {/* Next Steps */}
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-4 border rounded-lg text-left">
              <Skeleton className="h-5 w-24 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <Skeleton className="h-12 w-48 mx-auto" />
      </div>
    </main>
  );
}
