import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Cloud, Facebook } from "lucide-react";

export default function TrackingSolution() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="text-lg font-medium">Tracking</span>
            <div className="flex gap-2">
              <Facebook className="text-muted-foreground h-6 w-6" />
              <BarChart3 className="text-muted-foreground h-6 w-6" />
              <Cloud className="text-muted-foreground h-6 w-6" />
            </div>
          </div>
          <h1 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            The World Class Tracking & Attribution Solution
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Restore confidence in your FB ad attribution reporting with accurate & actionable
            attribution.
          </p>
        </div>{" "}
        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Feature Cards */}
          <div className="space-y-6">
            <FeatureCard
              title="Save Yourself the Cost of Wrong Decisions"
              description="Accurate data is the fundament of successful advertising. Without it, you're just shooting in the dark."
              checked
            />
            <FeatureCard
              title="Get All Set for a Cookieless Future"
              description="iOS 14 is just the beginning. Third-party cookies are about to disappear. Is your tracking ready?"
              checked
            />
            <FeatureCard
              title="Enjoy a Swift & Professional Setup"
              description="Instead of wasting weeks of work and risking costly setup errors - let our experts do it for you."
              checked
            />
          </div>{" "}
          {/* Right Column - Circular Metrics Display */}
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="relative h-[600px] w-full">
                {/* Center Card - Accuracy */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Card className="bg-primary/10 h-40 w-40">
                    <CardContent className="flex h-full flex-col items-center justify-center">
                      <span className="text-primary text-3xl font-bold">95%</span>
                      <span className="text-primary text-sm">accurate</span>
                    </CardContent>
                  </Card>
                </div>{" "}
                {/* Circular Metric Cards */}
                {[
                  { angle: 0, roas: "4.2", revenue: "$710,000" },
                  { angle: 45, roas: "5.9", revenue: "$400,000" },
                  { angle: 90, roas: "3.8", revenue: "$550,000" },
                  { angle: 135, roas: "6.1", revenue: "$820,000" },
                  { angle: 180, roas: "4.5", revenue: "$630,000" },
                  { angle: 225, roas: "5.2", revenue: "$480,000" },
                  { angle: 270, roas: "3.9", revenue: "$590,000" },
                  { angle: 315, roas: "4.8", revenue: "$670,000" },
                ].map(({ angle, roas, revenue }, index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      transform: `rotate(${angle}deg) translateX(220px) rotate(-${angle}deg)`,
                      top: "50%",
                      left: "50%",
                      marginLeft: "-80px",
                      marginTop: "-48px",
                    }}
                  >
                    <MetricCard title="ROAS" value={roas} revenue={revenue} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  checked = false,
}: {
  title: string;
  description: string;
  checked?: boolean;
}) {
  return (
    <Card className="border-none shadow-xs">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {checked && (
            <div className="mt-1">
              <div className="bg-primary/10 flex h-6 w-6 items-center justify-center rounded-full">
                <svg
                  className="text-primary h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          )}
          <div>
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MetricCard({ title, value, revenue }: { title: string; value: string; revenue: string }) {
  return (
    <Card className="">
      <CardContent className="p-4">
        <div className="space-y-1">
          <p className="text-sm">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <div className="space-y-0.5">
            <p className="text-sm">Revenue</p>
            <p className="text-lg font-semibold">{revenue}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
