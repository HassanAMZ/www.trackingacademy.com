"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface TrackingData {
  date: string;
  before: number;
  after: number;
}

// Predefined tracking data
const trackingData: TrackingData[] = [
  { date: "2024-12-01", before: 62, after: 96 },
  { date: "2024-12-08", before: 64, after: 97 },
  { date: "2024-12-15", before: 61, after: 95 },
  { date: "2024-12-22", before: 63, after: 98 },
  { date: "2024-12-29", before: 65, after: 99 },
  { date: "2025-01-05", before: 66, after: 96 },
  { date: "2025-01-12", before: 67, after: 97 },
  { date: "2025-01-19", before: 62, after: 95 },
  { date: "2025-01-26", before: 64, after: 98 },
  { date: "2025-02-03", before: 63, after: 99 },
];

// Precomputed averages
const averages = { avgBefore: "63.7", avgAfter: "96.7" };

const TrackingTable: React.FC<{ rows?: number }> = ({ rows }) => {
  // Limit the number of rows to display based on the `rows` prop
  const displayedData = rows ? trackingData.slice(0, rows) : trackingData;

  return (
    <div className="flex w-full overflow-hidden rounded-xl border text-sm">
      <table className="w-full">
        <thead>
          <tr className="even:bg-muted m-0 p-0">
            <th className="px-2 py-3 text-left font-bold">Date</th>
            <th className="px-2 py-3 text-left font-bold">Before</th>
            <th className="px-2 py-3 text-left font-bold">
              <strong className="text-primary">Precision Track</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((data, index) => (
            <tr
              key={data.date}
              className={cn(
                "even:bg-muted m-0 p-0 whitespace-nowrap",
                index < displayedData.length - 1 && "hidden lg:table-row",
              )}
            >
              <td className="px-2 py-3 text-left">{data.date}</td>
              <td className="px-2 py-3 text-left">{data.before}%</td>
              <td className="px-2 py-3 text-left">{data.after}%</td>
            </tr>
          ))}
          <tr className="even:bg-muted m-0 p-0">
            <td className="px-2 py-3 text-left font-bold">Average</td>
            <td className="px-2 py-3 text-left font-bold">
              {averages.avgBefore}%
            </td>
            <td className="relative px-2 py-3 text-left font-bold">
              {averages.avgAfter}%
              <svg
                width="130"
                height="130"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1240 600"
                className="fill-primary absolute -top-12 -left-8"
              >
                <path d="M460.3 531c-106.7-3.3-217.2-12.7-315.6-56.5C88 448.7 32.7 394.4 37 327.8c3.2-36 29-64 53.5-88.3C191.8 144.2 332.1 108 465.9 86.2c164-25.2 332-22.5 495.8 2.7 15.7.9 175 34.4 136.2 49.7 73.3 30.4 139 103 86.1 181.7-32.6 46.3-85.7 73.2-135.4 97.6C963 457 870.8 479.5 779 498.6c-104.8 21.1-211.5 35-318.5 32.5Zm28.5-16.5c155.2 2.7 623.7-69.6 687.7-223.9 28.8-82.1-66-134.7-132.5-153a1727.2 1727.2 0 0 0-139-33.7c-6.6-1.8-18.7-1-17.8-10.6-216.3-22.4-493-11.6-689 89.6-56.6 31.2-163.8 103-138.7 178.2 13.4 45.7 52 79.2 94 98.8 105 45.6 222.2 53.2 335.3 54.6Z"></path>
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TrackingTable;
