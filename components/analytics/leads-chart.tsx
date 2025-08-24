"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface LeadsChartProps {
  data: Array<{ date: string; count: number }>;
  detailed?: boolean;
}

export function LeadsChart({ data, detailed = false }: LeadsChartProps) {
  const chartConfig = {
    leads: {
      label: "Leads",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <ChartContainer config={chartConfig} className={detailed ? "min-h-[400px]" : "min-h-[300px]"}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="date" className="text-muted-foreground" fontSize={12} />
          <YAxis className="text-muted-foreground" fontSize={12} />
          <ChartTooltip
            content={<ChartTooltipContent />}
            labelFormatter={(value) => `Date: ${value}`}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke="var(--color-leads)"
            strokeWidth={2}
            dot={{ fill: "var(--color-leads)", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "var(--color-leads)", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
