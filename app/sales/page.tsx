import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import getOffersData from "@/utils/getOffersData"; // Ensure this path is correct

export default async function Page() {
  const sales = await getOffersData("app/sales");
  return (
    <div>
      <Navbar />

      <h3 className="container-primary py-6 text-center text-3xl font-bold">
        Active GPT Bots for Sales & Marketing Team
      </h3>
      <Container className="container-primary py-4">
        <div className="space-y-4">
          {sales.map((sale) => (
            <Button asChild key={sale.id}>
              <Link href={`/sales/${sale.slug}`}>{sale.title}</Link>
            </Button>
          ))}
        </div>
      </Container>
    </div>
  );
}
