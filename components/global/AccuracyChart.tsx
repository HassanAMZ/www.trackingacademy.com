"use client";

import React, { useEffect, useState } from "react";
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
import { format, subWeeks } from "date-fns";
import { ChartContainer } from "@/components/ui/charts"; // Assuming you're using ShadCN for layout

interface ConversionChartProps {
  beforeNumber: number; // Shopify range lower end
  afterNumber: number; // GA4 range lower end
}

// Define the fixed conversion data
const fixedConversionData = [
  { week: 1, shopifyConversions: 18, ga4Conversions: 6 },
  { week: 2, shopifyConversions: 16, ga4Conversions: 7 },
  { week: 3, shopifyConversions: 18, ga4Conversions: 8 },
  { week: 4, shopifyConversions: 17, ga4Conversions: 5 },
  { week: 5, shopifyConversions: 19, ga4Conversions: 14 },
  { week: 6, shopifyConversions: 20, ga4Conversions: 18 },
  { week: 7, shopifyConversions: 17, ga4Conversions: 16 },
  { week: 8, shopifyConversions: 15, ga4Conversions: 14 },
  { week: 9, shopifyConversions: 19, ga4Conversions: 18 },
  { week: 10, shopifyConversions: 20, ga4Conversions: 18 },
];

const generateDateLabels = () => {
  const labels = [];
  const currentDate = new Date();

  // Generate 10 dates, going back 1 week each time
  for (let i = 0; i < 10; i++) {
    const date = subWeeks(currentDate, i);
    labels.unshift(format(date, "MMM d, yyyy")); // Format to "Month Day, Year"
  }

  return labels;
};

const ConversionChart: React.FC<ConversionChartProps> = ({
  beforeNumber,
  afterNumber,
}) => {
  const [conversionData, setConversionData] = useState<any[]>([]);
  const [dateLabels, setDateLabels] = useState<string[]>([]);

  useEffect(() => {
    // Set fixed conversion data
    setConversionData(fixedConversionData);
    const labels = generateDateLabels();
    setDateLabels(labels);
  }, []);

  return (
    <ChartContainer className="min-h-[200px] w-full p-4" config={{}}>
      <>
        <h2 className="text-center text-lg font-semibold">
          Event Conversion Progression Over 10 Weeks
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={conversionData}
            margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="week"
              label={{
                value: "Weeks",
                position: "insideBottomRight",
                offset: -5,
              }}
            />
            <YAxis
              domain={[0, 25]} // Adjust Y-axis for conversion values
              label={{
                value: "Conversions",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              formatter={(value: number) => `${value.toFixed(0)} conversions`}
            />
            <Legend />
            <ReferenceArea
              y1={beforeNumber - 5}
              y2={beforeNumber + 5}
              x1={0}
              x2={4}
              strokeOpacity={0.3}
              fill="red" // Highlight Shopify range before GA4 converges
            />
            {/* Remove Green Background (Removed any GA4 reference area) */}
            <Line
              type="monotone"
              dataKey="shopifyConversions"
              name="Shopify Conversions"
              stroke="#2563eb" // Blue line for Shopify
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="ga4Conversions"
              name="GA4 Conversions"
              stroke="#10b981" // Green line for GA4
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    </ChartContainer>
  );
};

export default ConversionChart;
