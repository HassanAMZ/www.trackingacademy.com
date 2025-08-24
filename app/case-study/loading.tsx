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

      {/* Case Studies Grid */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Skeleton className="mb-8 h-8 w-48" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-6">
              <Skeleton className="mb-3 h-6 w-32" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="mb-4 h-4 w-3/4" />
              <Skeleton className="h-10 w-24" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
