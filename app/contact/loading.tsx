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

      {/* Contact Form */}
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="space-y-6">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-12 w-full bg-primary" />
        </div>
      </div>
    </main>
  );
}
