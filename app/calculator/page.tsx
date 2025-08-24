import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/container";
import getCalculatorData from "@/utils/getCalculatorData";
import { Calculator, DollarSign, TrendingDown, Users } from "lucide-react";
import Link from "next/link";

const getCalculatorIcon = (type: string) => {
  switch (type) {
    case "lead":
      return <Users className="h-6 w-6" />;
    case "agency":
      return <TrendingDown className="h-6 w-6" />;
    case "revenue":
      return <DollarSign className="h-6 w-6" />;
    default:
      return <Calculator className="h-6 w-6" />;
  }
};

const getCalculatorTypeLabel = (type: string) => {
  switch (type) {
    case "lead":
      return "Lead Impact";
    case "agency":
      return "Agency Impact";
    case "revenue":
      return "Revenue Loss";
    default:
      return "Calculator";
  }
};

const getCalculatorTypeColor = (type: string) => {
  switch (type) {
    case "lead":
      return "bg-blue-100 text-blue-800";
    case "agency":
      return "bg-purple-100 text-purple-800";
    case "revenue":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default async function Page() {
  const calculators = getCalculatorData();
  return (
    <div>
      <Navbar />
      <Container className="space-y-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold">Business Calculators</h1>
          <p className="text-muted-foreground">
            Calculate the financial impact of advertising restrictions on your business
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <Card key={calculator.id} className="py-6 shadow-md transition-shadow hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {/* <div className="text-primary">{getCalculatorIcon(calculator.type)}</div> */}
                    <div>
                      <CardTitle className="text-lg">{calculator.title}</CardTitle>
                      <CardDescription className="mt-1">{calculator.industry}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getCalculatorTypeColor(calculator.type)} variant="outline">
                    {getCalculatorTypeLabel(calculator.type)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{calculator.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Key Benefits:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Understand your financial impact</li>
                    <li>• Plan recovery strategies</li>
                    <li>• Make data-driven decisions</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <Button size="sm" asChild>
                  <Link href={`/calculator/${calculator.slug}`} className="flex items-center">
                    Use Calculator
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
