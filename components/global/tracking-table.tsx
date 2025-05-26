import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Container from "../ui/container";

interface TrackingData {
  date: string;
  before: number;
  after: number;
}

interface TrackingTableProps {
  rows?: number;
}

// Predefined tracking data
const trackingData: TrackingData[] = [
  // { date: "2024-12-01", before: 62, after: 96 },
  { date: "2024-12-08", before: 64, after: 97 },
  { date: "2024-12-15", before: 55, after: 95 },
  { date: "2024-12-22", before: 63, after: 98 },
  { date: "2024-12-29", before: 42, after: 99 },
  { date: "2025-01-05", before: 66, after: 96 },
  { date: "2025-01-12", before: 47, after: 97 },
  { date: "2025-01-19", before: 71, after: 95 },
  { date: "2025-01-26", before: 64, after: 98 },
  { date: "2025-02-03", before: 45, after: 99 },
];

// Simple calculation function
const calculateStats = (data: TrackingData[]) => {
  const avgBefore =
    data.reduce((sum, item) => sum + item.before, 0) / data.length;
  const avgAfter =
    data.reduce((sum, item) => sum + item.after, 0) / data.length;
  const improvement = avgAfter - avgBefore;
  const improvementPercent = (improvement / avgBefore) * 100;

  return {
    avgBefore: Number(avgBefore.toFixed(1)),
    avgAfter: Number(avgAfter.toFixed(1)),
    improvement,
    improvementPercent: Number(improvementPercent.toFixed(1)),
  };
};

// Enhanced table row component
const TableRow: React.FC<{
  data: TrackingData;
  isLast?: boolean;
  isVisible?: boolean;
}> = ({ data, isLast, isVisible = true }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const improvement = data.after - data.before;

  return (
    <tr
      className={`border-secondary-foreground/10 hover:bg-background/10 border-b transition-colors duration-150 ${!isVisible ? "hidden lg:table-row" : ""} ${isLast ? "border-b-0" : ""} `}
    >
      <td className="px-4 py-3 text-sm font-medium">{formatDate(data.date)}</td>
      <td className="text-secondary-foreground/80 px-4 py-3 text-sm">
        {data.before}%
      </td>
      <td className="text-destructive px-4 py-3 text-sm font-semibold">
        <div className="flex items-center gap-2">{data.after}%</div>
      </td>
      <td className="text-primary px-4 py-3 text-sm font-semibold">
        <div className="flex items-center gap-2">+{improvement}%</div>
      </td>
    </tr>
  );
};

// Main component
const TrackingTable: React.FC<TrackingTableProps> = ({ rows }) => {
  const displayedData = rows ? trackingData.slice(0, rows) : trackingData;
  const stats = calculateStats(displayedData);

  return (
    <div>
      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg border p-4 shadow-sm">
          <div className="text-secondary-foreground mb-1 text-sm font-medium">
            Before Average:
          </div>
          <div className="text-2xl font-bold">{stats.avgBefore}%</div>
        </div>
        <div className="rounded-lg border p-4 shadow-sm">
          <div className="text-secondary-foreground mb-1 text-sm font-medium">
            After Average:
          </div>
          <div className="text-destructive text-2xl font-bold">
            {stats.avgAfter}%
          </div>
        </div>
        <div className="rounded-lg border p-4 shadow-sm">
          <div className="text-secondary-foreground mb-1 text-sm font-medium">
            Before vs After:
          </div>
          <div className="text-primary text-2xl font-bold">
            +{stats.improvement.toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="mb-6 overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b px-6 py-4">
          <h3 className="text-lg font-semibold">Weekly Performance Data</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Before
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  After
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Improvement
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((data, index) => (
                <TableRow
                  key={data.date}
                  data={data}
                  isLast={index === displayedData.length - 1}
                  isVisible={index >= displayedData.length - 1 || index < 3}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Row */}
        <div className="border-t px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Overall Average</span>
            <div className="flex gap-8 text-sm">
              <span className="font-medium">
                Before: <span className="font-bold">{stats.avgBefore}%</span>
              </span>
              <span className="text-destructive font-medium">
                After: <span className="font-bold">{stats.avgAfter}%</span>
              </span>
              <span className="text-primary font-medium">
                Improvement:{" "}
                <span className="font-bold">
                  +{stats.improvement.toFixed(1)}%
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
    </div>
  );
};

export default TrackingTable;
