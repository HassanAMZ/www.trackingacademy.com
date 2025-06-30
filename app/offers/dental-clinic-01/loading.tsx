import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main>
      {/* Hero Section Skeleton */}
      <section className="py-8 bg-gradient-to-b from-primary/10 to-background">
        <Container className="max-w-6xl text-center md:space-y-12 space-y-6">
          {/* Hero Title Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-12 w-full max-w-4xl mx-auto" />
            <Skeleton className="h-12 w-3/4 mx-auto" />
          </div>

          {/* Video Skeleton */}
          <div className="max-w-4xl mx-auto">
            <Skeleton className="aspect-video w-full rounded-lg" />
          </div>

          {/* Subtitle Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-8 w-full max-w-3xl mx-auto" />
            <Skeleton className="h-8 w-2/3 mx-auto" />
          </div>

          {/* CTA Button Skeleton */}
          <Skeleton className="h-16 w-full max-w-md mx-auto rounded-lg" />
        </Container>
      </section>

      {/* Process Section Skeleton */}
      <Container className="max-w-6xl pb-12 pt-4 md:space-y-12 space-y-6">
        <Separator />

        {/* Process Title Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-10 w-full max-w-3xl" />
          <Skeleton className="h-10 w-1/2" />
        </div>

        {/* Process Steps Skeleton */}
        <div className="grid gap-12 max-w-5xl">
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
        <Skeleton className="h-16 w-full max-w-md mx-auto rounded-lg" />

        <Separator />
      </Container>

      {/* Case Studies Section Skeleton */}
      <section>
        <Container className="max-w-6xl space-y-12 py-8">
          <div className="text-center space-y-4">
            <Skeleton className="h-10 w-80 mx-auto" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
          </div>
        </Container>

        {/* Case Study Cards Skeleton */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="py-8">
            <Container className="max-w-6xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
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
          <Skeleton className="h-16 w-full max-w-md mx-auto rounded-lg" />
        </Container>
      </section>

      {/* Testimonials Section Skeleton */}
      <section className="py-16">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <Skeleton className="h-10 w-96 mx-auto" />
            <Skeleton className="h-6 w-full max-w-4xl mx-auto" />
          </div>

          {/* Testimonial Grid Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="p-6 border rounded-lg space-y-4">
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
      <section className="py-16 bg-gradient-to-b from-primary to-primary/80">
        <Container className="max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-10 w-96 mx-auto bg-primary-foreground/20" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto bg-primary-foreground/20" />
          </div>

          {/* Calendar Skeleton */}
          <div className="max-w-2xl mx-auto">
            <Skeleton className="h-96 w-full rounded-lg bg-primary-foreground/20" />
          </div>
        </Container>
      </section>

      {/* Final Testimonials Section Skeleton */}
      <section className="py-16">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <Skeleton className="h-10 w-96 mx-auto" />
            <Skeleton className="h-6 w-full max-w-4xl mx-auto" />
          </div>

          {/* Additional Testimonial Grid Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 border rounded-lg space-y-4">
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

          <Skeleton className="h-16 w-full max-w-md mx-auto rounded-lg" />
        </Container>
      </section>
    </main>
  );
}
