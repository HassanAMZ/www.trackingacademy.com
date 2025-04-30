import { AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Container from "../ui/container";

const GuaranteeSection = () => {
  return (
    <section className="py-16">
      <Container>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <AlertCircle className="text-primary h-12 w-12" />
              <h2>Our "95%+ Accuracy or It's FREE" Guarantee</h2>
              <p className="max-w-xl">
                We're confident that our system will deliver precise, actionable
                data for your Shopify store. If we don't meet our 95% accuracy
                promise, you don't pay a single cent.
              </p>
              <Button size="lg" className="mt-4" asChild>
                <Link href="/contact">
                  Track Smarter. Scale Faster.
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};
export default GuaranteeSection;
