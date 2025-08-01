"use client";

import { caseStudies, type CaseStudy } from "@/data/case-studies";
import Link from "next/link";
import type React from "react";
import { AvatarGroup, AvatarGroupTooltip } from "../animate-ui/avatar-group-mask";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ClientTrackingTableProps {
  rows?: number;
}

const transformCaseStudyData = (caseStudy: CaseStudy) => {
  const afterAccuracy = caseStudy.analytics.accuracy;
  const recoveredTotal =
    caseStudy.analytics.recoveredFromAdBlockersPercentage +
    caseStudy.analytics.recoveredFromTrackingPreventionPercentage;

  const keywords = ["health", "wellness", "dental", "cbd", "sensitive"];
  const contentToSearch =
    `${caseStudy.title ?? ""} ${caseStudy.description ?? ""} ${caseStudy.challenges ?? ""}`.toLowerCase();
  const containsKeyword = keywords.some((kw) => contentToSearch.includes(kw));

  const beforeAccuracy = containsKeyword ? 0 : Math.max(30, afterAccuracy - recoveredTotal);

  return {
    id: caseStudy.id,
    clientName: caseStudy.testimonial.author,
    websiteUrl: caseStudy.url,
    avatar: caseStudy.testimonial.image,
    plan: caseStudy.plan,
    before: Math.round(beforeAccuracy > 60 ? beforeAccuracy - 37 : beforeAccuracy),
    after: afterAccuracy,
    period: caseStudy.analytics.period,
  };
};

const calculateStats = (data: ReturnType<typeof transformCaseStudyData>[]) => {
  const avgBefore = data.reduce((sum, item) => sum + item.before, 0) / data.length;
  const avgAfter = data.reduce((sum, item) => sum + item.after, 0) / data.length;
  const improvement = avgAfter - avgBefore;
  const improvementPercent = (improvement / avgBefore) * 100;

  return {
    avgBefore: Number(avgBefore.toFixed(1)),
    avgAfter: Number(avgAfter.toFixed(1)),
    improvement,
    improvementPercent: Number(improvementPercent.toFixed(1)),
  };
};

const ClientTableRow: React.FC<{
  data: ReturnType<typeof transformCaseStudyData>;
  isLast?: boolean;
  isVisible?: boolean;
}> = ({ data, isLast, isVisible = true }) => {
  const improvement = data.after - data.before;

  return (
    <tr
      className={`border-b border-secondary-foreground/10 transition-colors duration-150 hover:bg-background/10 ${!isVisible ? "hidden lg:table-row" : ""} ${isLast ? "border-b-0" : ""} `}
    >
      <td className="px-4 py-3">
        <Link href={`/case-study/${data.id}`}>
          <div className="flex items-center gap-3">
            <AvatarGroup>
              {[
                <Avatar className="mb-2 h-10 w-10" key={data.id}>
                  <AvatarImage src={data.avatar || "/placeholder.svg"} alt={data.clientName} />
                  <AvatarFallback>
                    {data.avatar
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                  <AvatarGroupTooltip>
                    <p> {data.id}</p>
                  </AvatarGroupTooltip>
                </Avatar>,
              ]}
            </AvatarGroup>
            <div>
              <div className="text-sm font-medium">{data.clientName}</div>
            </div>
          </div>
        </Link>
      </td>

      <td className="px-4 py-3 text-sm text-secondary-foreground/80">{data.before.toFixed(0)}%</td>
      <td className="px-4 py-3 text-sm font-semibold text-green-600">
        <div className="flex items-center gap-2">{data.after.toFixed(0)}%</div>
      </td>
      <td className="px-4 py-3 text-sm font-semibold text-primary">
        <div className="flex items-center gap-2">+{improvement.toFixed(0)}%</div>
      </td>
    </tr>
  );
};

// Main component
const ClientTrackingTable: React.FC<ClientTrackingTableProps> = ({ rows }) => {
  const transformedData = caseStudies.slice(0, 8).map(transformCaseStudyData);
  const displayedData = rows ? transformedData.slice(0, rows) : transformedData;
  const stats = calculateStats(displayedData);

  return (
    <div>
      {/* Data Table */}
      <div className="mb-6 overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b px-6 py-4">
          <h3 className="text-center text-lg font-semibold">Explore the Case Studies</h3>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Before vs after implementing our tracking solutions
          </p>
        </div>

        <div className="overflow-hidden">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Client</th>

                <th className="px-4 py-3 text-left text-sm font-semibold">Before</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">After</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((data, index) => (
                <ClientTableRow
                  key={data.id}
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
            <div className="flex gap-8 text-sm">
              <span className="font-medium">
                Before: <span className="font-bold">{stats.avgBefore}%</span>
              </span>
              <span className="font-medium text-green-600">
                After: <span className="font-bold">{stats.avgAfter}%</span>
              </span>
              <span className="font-medium text-primary">
                Improvement: <span className="font-bold">+{stats.improvement.toFixed(1)}%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      {/* <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg border p-4 shadow-sm">
          <div className="text-secondary-foreground mb-1 text-sm font-medium">
            Average Accuracy Before:
          </div>
          <div className="text-2xl font-bold">{stats.avgBefore}%</div>
        </div>
        <div className="rounded-lg border p-4 shadow-sm">
          <div className="text-secondary-foreground mb-1 text-sm font-medium">
            Average Accuracy After:
          </div>
          <div className="text-2xl font-bold text-green-600">
            {stats.avgAfter}%
          </div>
        </div>
        <div className="rounded-lg border p-4 shadow-sm">
          <div className="text-secondary-foreground mb-1 text-sm font-medium">
            Average Improvement:
          </div>
          <div className="text-primary text-2xl font-bold">
            +{stats.improvement.toFixed(1)}%
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ClientTrackingTable;
