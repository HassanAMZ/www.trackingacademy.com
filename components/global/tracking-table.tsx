"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface TrackingData {
  date: string;
  before: number;
  after: number;
}

const generateTrackingData = (numEntries: number): TrackingData[] => {
  const today = new Date();
  return Array.from({ length: numEntries }, (_, i) => {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() - (i + 1) * 7);
    return {
      date: currentDate.toISOString().split("T")[0],
      before: Math.floor(Math.random() * 15) + 60,
      after: Math.floor(Math.random() * 5) + 95,
    };
  }).reverse();
};

const calculateAverage = (
  data: TrackingData[]
): { avgBefore: string; avgAfter: string } => {
  const total = data.reduce(
    (acc, entry) => ({
      before: acc.before + entry.before,
      after: acc.after + entry.after,
    }),
    { before: 0, after: 0 }
  );
  const dataLength = data.length;
  return {
    avgBefore: (total.before / dataLength).toFixed(2),
    avgAfter: (total.after / dataLength).toFixed(2),
  };
};

const TrackingTable: React.FC = () => {
  const [trackingData, setTrackingData] = useState<TrackingData[]>([]);
  const [averages, setAverages] = useState<{
    avgBefore: string;
    avgAfter: string;
  }>({ avgBefore: "0", avgAfter: "0" });

  useEffect(() => {
    const generatedData = generateTrackingData(10);
    setTrackingData(generatedData);
    setAverages(calculateAverage(generatedData));
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl border text-sm flex">
      <table className="w-full">
        <thead>
          <tr className="m-0 p-0 even:bg-muted">
            <th className="px-2 py-3 text-left font-bold">Date</th>
            <th className="px-2 py-3 text-left font-bold">Before</th>
            <th className="px-2 py-3 text-left font-bold">
              <strong className="text-primary">Precision Track</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {trackingData.map((data, index) => (
            <tr
              key={data.date}
              className={cn(
                "m-0 whitespace-nowrap p-0 even:bg-muted",
                index < trackingData.length - 3 && "hidden lg:table-row"
              )}
            >
              <td className="px-2 py-3 text-left">{data.date}</td>
              <td className="px-2 py-3 text-left">{data.before}%</td>
              <td className="px-2 py-3 text-left">{data.after}%</td>
            </tr>
          ))}
          <tr className="m-0 p-0 even:bg-muted">
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
                className="absolute -left-8 -top-12 fill-primary"
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
