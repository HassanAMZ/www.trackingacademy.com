// app/book-a-meeting/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="grid min-h-screen max-w-4xl place-content-center space-y-6 text-center">
      <Skeleton className="mx-auto h-6 w-72" />
      <Skeleton className="mx-auto h-8 w-96" />
      <Skeleton className="mx-auto h-5 w-64" />

      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2 rounded-lg border p-4 shadow-sm">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </Container>
  );
}
