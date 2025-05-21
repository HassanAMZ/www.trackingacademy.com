import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Database, MessageSquare } from "lucide-react";
import { Badge } from "../ui/badge";

export function SolutionsSection() {
  return (
    <section className="container space-y-16 py-24" id="solutions">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          We help <span className="text-primary">high-growth</span> businesses
          build bespoke data measurement systems
        </h2>
        <p className="text-muted-foreground text-xl">
          and always-updated, action-ready reporting dashboards
        </p>
      </div>{" "}
      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Database className="text-primary h-8 w-8" />
              <h3 className="text-xl font-bold">DATA GENERATION</h3>
              <p className="text-muted-foreground">
                Integration, cleaning, and storage
              </p>
            </div>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <BarChart3 className="text-primary h-8 w-8" />
              <h3 className="text-xl font-bold">DATA VISUALIZATION</h3>
              <p className="text-muted-foreground">
                Your plan vs. your outcomes and leading indicators
              </p>
            </div>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <MessageSquare className="text-primary h-8 w-8" />
              <h3 className="text-xl font-bold">DATA COMMUNICATION</h3>
              <p className="text-muted-foreground">
                Strategy, optimization, and improvement
              </p>
            </div>
          </CardContent>
        </Card>
      </div>{" "}
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "SaaS",
          "Multisite Networks",
          "Ecommerce",
          "Infoproducts",
          "Custom made",
        ].map((category) => (
          <Badge key={category} variant="secondary" className="text-sm">
            {category}
          </Badge>
        ))}
      </div>
    </section>
  );
}
