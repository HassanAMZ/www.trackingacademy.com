import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import getOffersData from "@/utils/getOffersData"; // Ensure this path is correct
import Link from "next/link";

export default async function Page() {
  const operations = await getOffersData("app/funnels/facebook");
  return (
    <div>
      <Navbar /> <h3 className="container-primary py-6 text-center text-3xl font-bold">Funnels</h3>
      <Container className="container-primary py-4">
        <div className="space-y-4">
          {operations.map((operation) => (
            <Button asChild key={operation.id}>
              <Link href={`/funnels/facebook/${operation.slug}`}>{operation.title}</Link>
            </Button>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
