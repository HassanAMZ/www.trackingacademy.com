"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AuditReportProps } from "@/data/audit-report";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  Code,
  Cookie,
  Database,
  ExternalLink,
  Eye,
  EyeOff,
  PieChart,
  Shield,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import LoomEmbed from "../global/loom-embed";
import YoutubeEmbed from "../global/youtube-embed";
import Container from "../ui/container";

export function getScoreColor(score: number, maxScore: number) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "text-green-600";
  if (percentage >= 60) return "text-yellow-600";
  return "text-red-600";
}

function getCategoryBadgeVariant(category: string) {
  switch (category.toLowerCase()) {
    case "advertising":
    case "advertisement":
      return "destructive";
    case "analytics":
      return "secondary";
    case "functional":
      return "default";
    case "social media":
      return "outline";
    default:
      return "secondary";
  }
}

function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "advertising":
    case "advertisement":
      return <Eye className="h-3 w-3" />;
    case "analytics":
      return <BarChart3 className="h-3 w-3" />;
    case "functional":
      return <Zap className="h-3 w-3" />;
    case "social media":
      return <Activity className="h-3 w-3" />;
    default:
      return <Database className="h-3 w-3" />;
  }
}

export default function AuditReport({ report }: AuditReportProps) {
  const scorePercentage =
    (report.overallScore.score / report.overallScore.maxScore) * 100;

  // Prepare chart data
  const categoryChartData = report.categoryScores.map((category) => ({
    name: category.name,
    score: category.score,
    fill:
      category.score >= 80
        ? "var(--chart-1)"
        : category.score >= 60
          ? "var(--chart-2)"
          : "var(--chart-3)",
  }));

  const categoryChartConfig = {
    score: {
      label: "Score (%)",
      color: "var(--chart-1)",
    },
  };

  // Tracker distribution by category
  const trackersByCategory = report.trackers.reduce(
    (acc, tracker) => {
      acc[tracker.category] = (acc[tracker.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const trackerDistributionData = Object.entries(trackersByCategory).map(
    ([category, count], index) => ({
      category,
      count,
      fill: `var(--chart-${(index % 5) + 1})`,
    }),
  );

  const trackerDistributionConfig = {
    count: {
      label: "Number of Trackers",
    },
  };

  // Cookie lifetime analysis
  const cookieLifetimeData = report.trackingCookies.reduce(
    (acc, cookie) => {
      const lifetime = cookie.lifetime;
      acc[lifetime] = (acc[lifetime] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const cookieLifetimeChartData = Object.entries(cookieLifetimeData).map(
    ([lifetime, count]) => ({
      lifetime,
      count,
      fill: "var(--chart-4)",
    }),
  );

  const cookieLifetimeConfig = {
    count: {
      label: "Number of Cookies",
      color: "var(--chart-4)",
    },
  };

  // Script performance data
  const scriptPerformanceData = report.trackingScripts.map((script, index) => ({
    name: script.name,
    transferSize: Number.parseInt(script.transferSize.replace(/[^\d]/g, "")),
    blockingTime: Number.parseInt(script.blockingTime.replace(/[^\d]/g, "")),
    provider: script.provider,
    fill: `var(--chart-${(index % 5) + 1})`,
  }));

  const scriptPerformanceConfig = {
    transferSize: {
      label: "Transfer Size (KB)",
      color: "var(--chart-1)",
    },
    blockingTime: {
      label: "Blocking Time (ms)",
      color: "var(--chart-2)",
    },
  };
  // Find individual category scores for the summary donuts
  const analyticsScore =
    report.categoryScores.find((cat) =>
      cat.name.toLowerCase().includes("analytics"),
    )?.score || 0;
  const adsScore =
    report.categoryScores.find((cat) => cat.name.toLowerCase().includes("ads"))
      ?.score || 0;
  const pageSpeedScore =
    report.categoryScores.find((cat) =>
      cat.name.toLowerCase().includes("page speed"),
    )?.score || 0;
  const cookieScore =
    report.categoryScores.find((cat) =>
      cat.name.toLowerCase().includes("cookie lifetime"),
    )?.score || 0;

  // Donut chart component for the summary
  function ScoreDonut({
    score,
    maxScore,
    label,
    color,
  }: {
    score: number;
    maxScore: number;
    label: string;
    color: string;
  }) {
    const percentage = (score / maxScore) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
    console.log(score, maxScore, percentage);
    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="relative">
          <svg className="h-24 w-24 -rotate-90 transform">
            <circle
              cx="48"
              cy="48"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="48"
              cy="48"
              r="45"
              stroke={color}
              strokeWidth="6"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{score}</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm font-medium">{label}</div>
          <div className="text-muted-foreground text-xs">out of {maxScore}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Shield className="h-6 w-6" />
            Executive Summary
          </CardTitle>
          <CardDescription>
            Your website's overall health score and key metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
            {/* Overall Score Circle */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <svg className="h-32 w-32 -rotate-90 transform">
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke={
                      scorePercentage >= 80
                        ? "#22c55e"
                        : scorePercentage >= 60
                          ? "#eab308"
                          : "#ef4444"
                    }
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(scorePercentage / 100) * 364} 364`}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">
                    {report.overallScore.score}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    out of {report.overallScore.maxScore}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">Overall Score</div>
                <Badge
                  variant={
                    report.overallScore.status === "Good"
                      ? "default"
                      : report.overallScore.status === "Fair"
                        ? "secondary"
                        : "destructive"
                  }
                  className="mt-1"
                >
                  {report.overallScore.status}
                </Badge>
              </div>
            </div>

            {/* Category Scores */}
            <div className="flex flex-wrap justify-center gap-6">
              <ScoreDonut
                score={analyticsScore}
                maxScore={100}
                label="Analytics"
                color="#22c55e"
              />
              <ScoreDonut
                score={adsScore}
                maxScore={100}
                label="Ads"
                color="#ef4444"
              />
              <ScoreDonut
                score={cookieScore}
                maxScore={100}
                label="Cookie Lifetime"
                color="#3b82f6"
              />
              <ScoreDonut
                score={pageSpeedScore}
                maxScore={100}
                label="Page Speed"
                color="#3b82f6"
              />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {report.trackers.length}
              </div>
              <div className="text-muted-foreground text-sm">
                Tracking Technologies Found
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {report.trackingCookies.length}
              </div>
              <div className="text-muted-foreground text-sm">
                Tracking Cookies Detected
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {report.recommendedActions.length}
              </div>
              <div className="text-muted-foreground text-sm">
                Improvement Opportunities
              </div>
            </div>
          </div>

          {/* Video Embed */}
          {report?.embedId?.loom ? (
            <div className="mt-6">
              <LoomEmbed embedId={report.embedId.loom} className="!p-0" />
            </div>
          ) : report?.embedId?.youtube ? (
            <div className="mt-6">
              <YoutubeEmbed embedId={report.embedId.youtube} className="!p-0" />
            </div>
          ) : null}
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Tracker Distribution Chart */}
        <Card className="hidden lg:block">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Tracker Distribution
            </CardTitle>
            <CardDescription>Breakdown of trackers by category</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={trackerDistributionData}
                    dataKey="count"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    strokeWidth={2}
                  >
                    {trackerDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Script Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Script Performance
            </CardTitle>
            <CardDescription>
              Transfer size vs blocking time for tracking scripts
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  data={scriptPerformanceData}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    type="number"
                    dataKey="transferSize"
                    name="Transfer Size"
                    unit="KB"
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    type="number"
                    dataKey="blockingTime"
                    name="Blocking Time"
                    unit="ms"
                    tickLine={false}
                    axisLine={false}
                  />
                  <ZAxis type="number" range={[60, 400]} />
                  <ChartTooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-background rounded-lg border p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-muted-foreground text-[0.70rem] uppercase">
                                  Script
                                </span>
                                <span className="text-muted-foreground font-bold">
                                  {data.name}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-muted-foreground text-[0.70rem] uppercase">
                                  Provider
                                </span>
                                <span className="font-bold">
                                  {data.provider}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-muted-foreground text-[0.70rem] uppercase">
                                  Transfer Size
                                </span>
                                <span className="text-muted-foreground font-bold">
                                  {data.transferSize} KB
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-muted-foreground text-[0.70rem] uppercase">
                                  Blocking Time
                                </span>
                                <span className="font-bold">
                                  {data.blockingTime} ms
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter dataKey="blockingTime" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Cookie Lifetime Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5" />
              Cookie Lifetime Distribution
            </CardTitle>
            <CardDescription>
              Analysis of cookie retention periods
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cookieLifetimeChartData}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="lifetime"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="count" radius={8} fill="var(--chart-4)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Trackers Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trackers Found ({report.trackers.length})
          </CardTitle>
          <CardDescription>
            Third-party trackers detected on your website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Provider</TableHead>
                  <TableHead className="font-semibold">Category</TableHead>
                  <TableHead className="font-semibold">Data Sent To</TableHead>
                  <TableHead className="font-semibold">Method</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {report.trackers.map((tracker, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-muted/30 border-muted/30 border-b transition-colors"
                  >
                    <TableCell className="py-4 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        {tracker.name}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-600 text-xs font-bold text-white">
                          {tracker.provider.charAt(0).toUpperCase()}
                        </div>
                        {tracker.provider}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant={getCategoryBadgeVariant(tracker.category)}
                        className="flex w-fit items-center gap-1"
                      >
                        {getCategoryIcon(tracker.category)}
                        {tracker.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <Database className="text-muted-foreground h-3 w-3" />
                        {tracker.dataSentTo}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge variant="outline" className="text-xs">
                        {tracker.trackingMethod}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        {tracker.isTransparent ? (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-xs font-medium">
                              Transparent
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-red-600">
                            <XCircle className="h-4 w-4" />
                            <span className="text-xs font-medium">Hidden</span>
                          </div>
                        )}
                        {tracker.canImprove && tracker.improvementLink && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="h-6 w-6 p-0"
                          >
                            <a
                              href={tracker.improvementLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Tracking Cookies Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cookie className="h-5 w-5" />
            Tracking Cookies ({report.trackingCookies.length})
          </CardTitle>
          <CardDescription>Cookies used for tracking purposes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Provider</TableHead>
                  <TableHead className="font-semibold">Category</TableHead>
                  <TableHead className="font-semibold">Data Sent To</TableHead>
                  <TableHead className="font-semibold">Lifetime</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {report.trackingCookies.map((cookie, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-muted/30 border-muted/30 border-b transition-colors"
                  >
                    <TableCell className="py-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Cookie className="h-3 w-3 text-amber-500" />
                        {cookie.name}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 text-xs font-bold text-white">
                          {cookie.provider.charAt(0).toUpperCase()}
                        </div>
                        {cookie.provider}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant={getCategoryBadgeVariant(cookie.category)}
                        className="flex w-fit items-center gap-1"
                      >
                        {getCategoryIcon(cookie.category)}
                        {cookie.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <Database className="text-muted-foreground h-3 w-3" />
                        {cookie.dataSentTo}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <Badge variant="secondary" className="text-xs">
                          {cookie.lifetime}
                        </Badge>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Tracking Scripts Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Tracking Scripts ({report.trackingScripts.length})
          </CardTitle>
          <CardDescription>
            JavaScript tracking scripts and their performance impact
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Provider</TableHead>
                  <TableHead className="font-semibold">Category</TableHead>
                  <TableHead className="font-semibold">Transfer Size</TableHead>
                  <TableHead className="font-semibold">Blocking Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {report.trackingScripts.map((script, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-muted/30 border-muted/30 border-b transition-colors"
                  >
                    <TableCell className="py-4 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        {script.name}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-blue-600 text-xs font-bold text-white">
                          {script.provider.charAt(0).toUpperCase()}
                        </div>
                        {script.provider}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant={getCategoryBadgeVariant(script.category)}
                        className="flex w-fit items-center gap-1"
                      >
                        {getCategoryIcon(script.category)}
                        {script.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{
                            backgroundColor:
                              script.transferSizeColor || "#6b7280",
                          }}
                        />
                        <span
                          style={{ color: script.transferSizeColor }}
                          className="font-medium"
                        >
                          {script.transferSize}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <Clock
                          className="h-3 w-3"
                          style={{
                            color: script.blockingTimeColor || "#6b7280",
                          }}
                        />
                        <span
                          style={{ color: script.blockingTimeColor }}
                          className="font-medium"
                        >
                          {script.blockingTime}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Recommended Actions
          </CardTitle>
          <CardDescription>Steps to improve your privacy score</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {report.recommendedActions.map((action) => (
            <Alert key={action.id}>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="flex items-center justify-between">
                <span>{action.title}</span>
                <Badge variant="outline" className="text-green-600">
                  +{action.scoreImprovement} points
                </Badge>
              </AlertTitle>
              <AlertDescription>
                <div className="mt-2 flex flex-wrap gap-1">
                  {action.categories.map((category, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
