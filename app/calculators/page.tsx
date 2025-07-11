import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import getOffersData from "@/utils/getOffersData"; // Ensure this path is correct
import Link from "next/link";

export default async function Page() {
  const calculators = await getOffersData("app/calculators");
  return (
    <div>
      <Navbar />{" "}
      <h3 className="container-primary py-6 text-center text-3xl font-bold">
        Active GPT Bots for calculators Team
      </h3>
      <Container className="container-primary py-4">
        <div className="space-y-4">
          {calculators.map((calculator) => (
            <Button asChild key={calculator.id}>
              <Link href={`/calculators/${calculator.slug}`}>{calculator.title}</Link>
            </Button>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
