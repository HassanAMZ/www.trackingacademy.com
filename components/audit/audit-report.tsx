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
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Code,
  Cookie,
  ExternalLink,
  PieChart,
  Shield,
  TrendingUp,
  XCircle,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart as RechartsPieChart,
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Website Audit Report</h1>
        <div className="text-muted-foreground flex items-center justify-center gap-4">
          <span className="font-medium">{report.domain}</span>
          <span>•</span>
          <span>{report.date}</span>
        </div>
      </div>

      {/* Overall Score */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Shield className="h-6 w-6" />
            Overall Score
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div
              className={`text-6xl font-bold ${getScoreColor(report.overallScore.score, report.overallScore.maxScore)}`}
            >
              {report.overallScore.score}
            </div>
            <div className="text-muted-foreground text-2xl">
              out of {report.overallScore.maxScore}
            </div>
            <Badge
              variant={
                report.overallScore.status === "Good"
                  ? "default"
                  : report.overallScore.status === "Fair"
                    ? "secondary"
                    : "destructive"
              }
              className="mt-2"
            >
              {report.overallScore.status}
            </Badge>
          </div>
          <Progress value={scorePercentage} className="h-3" />
          {report?.embedId?.loom ? (
            <LoomEmbed embedId={report.embedId.loom} />
          ) : report?.embedId?.youtube ? (
            <YoutubeEmbed embedId={report.embedId.youtube} />
          ) : null}

          <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {report.categoryScores.map((category, index) => (
              <div key={index} className="rounded-lg border p-8 text-center">
                <div
                  className={`text-2xl font-bold`}
                  style={{ color: category.color }}
                >
                  {category.score}%
                </div>
                <div className="text-muted-foreground mt-1 text-sm">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tracker Distribution Chart */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Category Scores Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Category Performance Analysis
            </CardTitle>
            <CardDescription>
              Detailed breakdown of scores across different categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={categoryChartConfig}>
              <BarChart accessibilityLayer data={categoryChartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="score" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Tracker Distribution
            </CardTitle>
            <CardDescription>Breakdown of trackers by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={trackerDistributionConfig}>
              <RechartsPieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={trackerDistributionData}
                  dataKey="count"
                  nameKey="category"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  {trackerDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </RechartsPieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Script Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Script Performance Analysis
            </CardTitle>
            <CardDescription>
              Transfer size vs blocking time for tracking scripts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={scriptPerformanceConfig}>
              <ScatterChart data={scriptPerformanceData}>
                <CartesianGrid />
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
                              <span className="font-bold">{data.provider}</span>
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
            </ChartContainer>
          </CardContent>
        </Card>

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
          <CardContent>
            <ChartContainer config={cookieLifetimeConfig}>
              <BarChart accessibilityLayer data={cookieLifetimeChartData}>
                <CartesianGrid vertical={false} />
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
                <Bar dataKey="count" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Trackers */}
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Data Sent To</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {report.trackers.map((tracker, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{tracker.name}</TableCell>
                  <TableCell>{tracker.provider}</TableCell>
                  <TableCell>
                    <Badge variant={getCategoryBadgeVariant(tracker.category)}>
                      {tracker.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{tracker.dataSentTo}</TableCell>
                  <TableCell>{tracker.trackingMethod}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {tracker.isTransparent ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600" />
                      )}
                      {tracker.canImprove && tracker.improvementLink && (
                        <Button variant="ghost" size="sm" asChild>
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
        </CardContent>
      </Card>

      {/* Tracking Cookies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cookie className="h-5 w-5" />
            Tracking Cookies ({report.trackingCookies.length})
          </CardTitle>
          <CardDescription>Cookies used for tracking purposes</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Data Sent To</TableHead>
                <TableHead>Lifetime</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {report.trackingCookies.map((cookie, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{cookie.name}</TableCell>
                  <TableCell>{cookie.provider}</TableCell>
                  <TableCell>
                    <Badge variant={getCategoryBadgeVariant(cookie.category)}>
                      {cookie.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{cookie.dataSentTo}</TableCell>
                  <TableCell>{cookie.lifetime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Tracking Scripts */}
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Transfer Size</TableHead>
                <TableHead>Blocking Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {report.trackingScripts.map((script, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{script.name}</TableCell>
                  <TableCell>{script.provider}</TableCell>
                  <TableCell>
                    <Badge variant={getCategoryBadgeVariant(script.category)}>
                      {script.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span style={{ color: script.transferSizeColor }}>
                      {script.transferSize}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span style={{ color: script.blockingTimeColor }}>
                      {script.blockingTime}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
