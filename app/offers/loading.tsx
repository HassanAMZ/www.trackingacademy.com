import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <div>
      <Navbar />
      <h3 className="container-primary py-6 text-center text-3xl font-bold">Funnels</h3>
      <Container className="container-primary py-4">
        <div className="space-y-4">
          {/* Skeleton placeholders for loading buttons */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"
            />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
