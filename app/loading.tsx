import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Minimal Navbar */}
      <div className="border-b p-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-16 text-center">
        <Skeleton className="mx-auto mb-4 h-12 w-96" />
        <Skeleton className="mx-auto mb-8 h-6 w-80" />
        <Skeleton className="mx-auto h-12 w-48" />
      </div>

      {/* Content Grid */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
