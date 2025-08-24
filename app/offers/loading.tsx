import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="py-12 text-center bg-gradient-to-b from-primary/5 to-background">
        <Skeleton className="h-12 w-96 mx-auto mb-4" />
        <Skeleton className="h-6 w-80 mx-auto mb-8" />
        <Skeleton className="h-16 w-48 mx-auto" />
      </div>

      {/* Offers Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Skeleton className="h-8 w-48 mb-8" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <Skeleton className="h-6 w-32 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <Skeleton className="h-10 w-24" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
