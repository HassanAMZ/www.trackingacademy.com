import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import { subWeeks, format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Improved type definitions
interface ConversionData {
  week: number;
  shopifyConversions: number;
  ga4Conversions: number;
  date: string;
}

interface ConversionChartProps {
  title?: string;
  beforeRange: { min: number; max: number };
  afterRange: { min: number; max: number };
  data?: ConversionData[];
}

const ConversionChart: React.FC<ConversionChartProps> = ({
  title = "Conversion Tracking Comparison",
  beforeRange,
  afterRange,
  data: customData,
}) => {
  // Default data if no custom data provided
  const defaultConversionData: ConversionData[] = useMemo(() => {
    const currentDate = new Date();
    return [
      {
        week: 1,
        shopifyConversions: 18,
        ga4Conversions: 6,
        date: format(subWeeks(currentDate, 9), "MMM d"),
      },
      {
        week: 2,
        shopifyConversions: 16,
        ga4Conversions: 7,
        date: format(subWeeks(currentDate, 8), "MMM d"),
      },
      {
        week: 3,
        shopifyConversions: 18,
        ga4Conversions: 8,
        date: format(subWeeks(currentDate, 7), "MMM d"),
      },
      {
        week: 4,
        shopifyConversions: 17,
        ga4Conversions: 5,
        date: format(subWeeks(currentDate, 6), "MMM d"),
      },
      {
        week: 5,
        shopifyConversions: 19,
        ga4Conversions: 14,
        date: format(subWeeks(currentDate, 5), "MMM d"),
      },
      {
        week: 6,
        shopifyConversions: 20,
        ga4Conversions: 18,
        date: format(subWeeks(currentDate, 4), "MMM d"),
      },
      {
        week: 7,
        shopifyConversions: 17,
        ga4Conversions: 16,
        date: format(subWeeks(currentDate, 3), "MMM d"),
      },
      {
        week: 8,
        shopifyConversions: 15,
        ga4Conversions: 14,
        date: format(subWeeks(currentDate, 2), "MMM d"),
      },
      {
        week: 9,
        shopifyConversions: 19,
        ga4Conversions: 18,
        date: format(subWeeks(currentDate, 1), "MMM d"),
      },
      {
        week: 10,
        shopifyConversions: 20,
        ga4Conversions: 18,
        date: format(currentDate, "MMM d"),
      },
    ];
  }, []);

  const chartData = customData || defaultConversionData;

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" label={{ value: "Week" }} tickMargin={10} />
            <YAxis
              domain={[0, "dataMax + 5"]}
              label={{
                value: "Conversions",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              formatter={(value: number) => [`${value} conversions`, ""]}
              labelClassName="font-bold"
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
              }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <ReferenceArea
              y1={beforeRange.min}
              y2={beforeRange.max}
              x1={chartData[0].date}
              x2={chartData[4].date}
              strokeOpacity={0.3}
              fill="#ff6b6b"
              fillOpacity={0.1}
            />
            <Line
              type="monotone"
              dataKey="shopifyConversions"
              name="Shopify Conversions"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="ga4Conversions"
              name="GA4 Conversions"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ConversionChart;
