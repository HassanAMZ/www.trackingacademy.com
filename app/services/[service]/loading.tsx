import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-12 text-center">
        <Skeleton className="mx-auto mb-4 h-12 w-96" />
        <Skeleton className="mx-auto mb-8 h-6 w-80" />
        <Skeleton className="mx-auto h-16 w-48" />
      </div>

      {/* Service Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />

          <Skeleton className="h-8 w-48" />
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-lg border p-4">
                <Skeleton className="mb-2 h-6 w-24" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>

          <Skeleton className="mx-auto h-12 w-48" />
        </div>
      </div>
    </main>
  );
}
