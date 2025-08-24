import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main>
      {/* Navbar Skeleton */}
      <header className="w-full pt-4 pb-2 lg:text-sm">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-24 rounded-full" /> {/* Logo */}
              <div className="hidden gap-4 lg:flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-20 rounded-md" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" /> {/* Theme Toggle */}
              <Skeleton className="h-8 w-32 rounded-md" /> {/* CTA */}
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Section Skeleton */}
      <Container className="space-y-8 py-12">
        <Skeleton className="mx-auto h-6 w-56 lg:mx-0" /> {/* Eyebrow */}
        <div className="mx-auto max-w-5xl space-y-4 lg:mx-0">
          <Skeleton className="mx-auto h-12 w-full max-w-3xl lg:mx-0" /> {/* Heading */}
          <Skeleton className="mx-auto h-6 w-full max-w-xl lg:mx-0" /> {/* Subheading */}
        </div>
        <div className="mx-auto max-w-3xl lg:mx-0">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2 lg:flex-row">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 lg:justify-start">
          <Skeleton className="h-12 w-56 rounded-md" />
          <Skeleton className="h-12 w-40 rounded-md" />
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          {/* Avatar Group */}
          <Skeleton className="h-12 w-48 rounded-full" />
          {/* Client Count Text */}
          <div className="space-y-2 text-center lg:text-left">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
        <Skeleton className="h-64 w-full rounded-xl" /> {/* Supporting component / carousel */}
      </Container>
    </main>
  );
}
