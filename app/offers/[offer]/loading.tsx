import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main>
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-8">
        <Container className="max-w-6xl space-y-6 text-center md:space-y-12">
          {/* Hero Title Skeleton */}
          <div className="space-y-2">
            <Skeleton className="mx-auto h-12 w-full max-w-4xl" />
            <Skeleton className="mx-auto h-12 w-3/4" />
          </div>

          {/* Subtitle Skeleton */}
          <div className="space-y-2">
            <Skeleton className="mx-auto h-8 w-full max-w-3xl" />
            <Skeleton className="mx-auto h-8 w-2/3" />
          </div>

          {/* Video Skeleton */}
          <div className="mx-auto max-w-4xl">
            <Skeleton className="aspect-video w-full rounded-lg" />
          </div>

          {/* CTA Button Skeleton */}
          <Skeleton className="mx-auto h-16 w-full max-w-md rounded-lg" />
        </Container>
      </section>

      {/* Process Section Skeleton */}
      <Container className="max-w-6xl space-y-6 pt-4 pb-12 md:space-y-12">
        <Separator />

        {/* Process Title Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-10 w-full max-w-3xl" />
          <Skeleton className="h-10 w-1/2" />
        </div>

        {/* Process Steps Skeleton */}
        <div className="grid max-w-5xl gap-12">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col gap-6">
              <Skeleton className="h-8 w-64" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button Skeleton */}
        <Skeleton className="mx-auto h-16 w-full max-w-md rounded-lg" />

        <Separator />
      </Container>

      {/* Case Studies Section Skeleton */}
      <section>
        <Container className="max-w-6xl space-y-12 py-8">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-10 w-80" />
            <Skeleton className="mx-auto h-6 w-full max-w-3xl" />
          </div>
        </Container>

        {/* Case Study Cards Skeleton */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="py-8">
            <Container className="max-w-6xl">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <Skeleton className="h-10 w-32" />
                </div>
                <Skeleton className="aspect-video w-full rounded-lg" />
              </div>
            </Container>
          </div>
        ))}

        <Container>
          <Skeleton className="mx-auto h-16 w-full max-w-md rounded-lg" />
        </Container>
      </section>

      {/* Testimonials Section Skeleton */}
      <section className="py-16">
        <Container>
          <div className="mb-12 space-y-4 text-center">
            <Skeleton className="mx-auto h-10 w-96" />
            <Skeleton className="mx-auto h-6 w-full max-w-4xl" />
          </div>

          {/* Testimonial Grid Skeleton */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="space-y-4 rounded-lg border p-6">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Skeleton key={star} className="h-4 w-4" />
                  ))}
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Calendar Section Skeleton */}
      <section className="bg-gradient-to-b from-primary to-primary/80 py-16">
        <Container className="max-w-4xl space-y-8 text-center">
          <div className="space-y-4">
            <Skeleton className="mx-auto h-10 w-96 bg-primary-foreground/20" />
            <Skeleton className="mx-auto h-6 w-full max-w-2xl bg-primary-foreground/20" />
          </div>

          {/* Calendar Skeleton */}
          <div className="mx-auto max-w-2xl">
            <Skeleton className="h-96 w-full rounded-lg bg-primary-foreground/20" />
          </div>
        </Container>
      </section>

      {/* Final Testimonials Section Skeleton */}
      <section className="py-16">
        <Container>
          <div className="mb-12 space-y-4 text-center">
            <Skeleton className="mx-auto h-10 w-96" />
            <Skeleton className="mx-auto h-6 w-full max-w-4xl" />
          </div>

          {/* Additional Testimonial Grid Skeleton */}
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-4 rounded-lg border p-6">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Skeleton key={star} className="h-4 w-4" />
                  ))}
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Skeleton className="mx-auto h-16 w-full max-w-md rounded-lg" />
        </Container>
      </section>
    </main>
  );
}
