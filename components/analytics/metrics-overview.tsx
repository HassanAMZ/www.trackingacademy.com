import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Target, TrendingUp, Users } from "lucide-react";

interface MetricsOverviewProps {
  data: {
    leads: { total: number };
    conversions: { total: number };
    conversionRate: number;
  };
  loading: boolean;
}

export function MetricsOverview({ data, loading }: MetricsOverviewProps) {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="mb-2 h-4 w-3/4 rounded bg-muted"></div>
                <div className="h-8 w-1/2 rounded bg-muted"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const metrics = [
    {
      title: "Total Leads",
      value: data.leads.total.toLocaleString(),
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Total Conversions",
      value: data.conversions.total.toLocaleString(),
      icon: ShoppingCart,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      title: "Conversion Rate",
      value: `${data.conversionRate.toFixed(2)}%`,
      icon: Target,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Lead to Sale Ratio",
      value:
        data.leads.total > 0
          ? `1:${Math.round(data.leads.total / Math.max(data.conversions.total, 1))}`
          : "N/A",
      icon: TrendingUp,
      color: "text-muted-foreground",
      bgColor: "bg-muted/10",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <div className={`rounded-full p-2 ${metric.bgColor}`}>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
