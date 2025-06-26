import { Card, CardContent } from "@/components/ui/card";

export function ProblemsSection() {
  return (
    <section className="container space-y-16 py-24">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Most of the analytics setups are{" "}
          <span className="bg-secondary/20 rounded-md px-2">flawed</span> for at least one of these
          reasons:
        </h2>
      </div>{" "}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card/50">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-muted-foreground text-sm font-medium">Data Fragmentation</div>
              <h3 className="text-xl font-bold">Scattered data</h3>
              <p className="text-muted-foreground">
                Scattered and unclean data makes it hard to have a single source of truth.
              </p>
            </div>
          </CardContent>
        </Card>{" "}
        <Card className="bg-card/50">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-muted-foreground text-sm font-medium">Bandwidth Barriers</div>
              <h3 className="text-xl font-bold">Team's at capacity</h3>
              <p className="text-muted-foreground">
                Everyone wants data, but no one has time to build and update the systems to get
                answers.
              </p>
            </div>
          </CardContent>
        </Card>{" "}
        <Card className="bg-card/50">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-muted-foreground text-sm font-medium">Expertise Mismatch</div>
              <h3 className="text-xl font-bold">Knowledge gaps</h3>
              <p className="text-muted-foreground">
                Those who understand the business needs usually don't have all the technical skills
                to measure it.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
