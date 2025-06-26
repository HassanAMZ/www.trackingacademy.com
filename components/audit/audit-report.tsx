"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Shield,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import LoomEmbed from "../global/loom-embed";
import YoutubeEmbed from "../global/youtube-embed";

// Utility functions
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
      return "destructive" as const;
    case "analytics":
      return "secondary" as const;
    case "functional":
      return "default" as const;
    case "social media":
      return "outline" as const;
    default:
      return "secondary" as const;
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

// Score Circle Component
function ScoreCircle({
  score,
  maxScore,
  size = "small",
  label,
}: {
  score: number;
  maxScore: number;
  size?: "small" | "large";
  label?: string;
}) {
  const percentage = (score / maxScore) * 100;
  const isLarge = size === "large";
  const radius = isLarge ? 58 : 45;
  const strokeWidth = isLarge ? 8 : 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  const color = percentage >= 80 ? "#22c55e" : percentage >= 60 ? "#eab308" : "#ef4444";

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative">
        <svg className={`${isLarge ? "h-32 w-32" : "h-24 w-24"} -rotate-90 transform`}>
          <circle
            cx={isLarge ? "64" : "48"}
            cy={isLarge ? "64" : "48"}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx={isLarge ? "64" : "48"}
            cy={isLarge ? "64" : "48"}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${isLarge ? "text-4xl" : "text-2xl"} font-bold`}>{score}</span>
          <span className="text-muted-foreground text-sm">
            {isLarge ? `out of ${maxScore}` : `/${maxScore}`}
          </span>
        </div>
      </div>
      {label && (
        <div className="text-center">
          <div className="text-sm font-medium">{label}</div>
        </div>
      )}
    </div>
  );
}

// Enhanced Table Row Component
function TrackerTableRow({ tracker, index }: { tracker: any; index: number }) {
  return (
    <TableRow className="group hover:bg-muted/50 border-muted/30 border-b transition-all duration-200">
      <TableCell className="py-4">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm" />
          <span className="group-hover:text-primary font-medium transition-colors">
            {tracker.name}
          </span>
        </div>
      </TableCell>
      <TableCell className="py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 text-xs font-bold text-white shadow-sm">
            {tracker.provider.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium">{tracker.provider}</span>
        </div>
      </TableCell>
      <TableCell className="py-4">
        <Badge
          variant={getCategoryBadgeVariant(tracker.category)}
          className="flex w-fit items-center gap-1 shadow-sm"
        >
          {getCategoryIcon(tracker.category)}
          {tracker.category}
        </Badge>
      </TableCell>
      <TableCell className="py-4">
        <div className="text-muted-foreground flex items-center gap-2">
          <Database className="h-3 w-3" />
          <span className="text-sm">{tracker.dataSentTo}</span>
        </div>
      </TableCell>
      <TableCell className="py-4">
        <Badge variant="outline" className="text-xs font-medium">
          {tracker.trackingMethod}
        </Badge>
      </TableCell>
      <TableCell className="py-4">
        <div className="flex items-center gap-2">
          {tracker.isTransparent ? (
            <div className="flex items-center gap-1 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-xs font-medium">Transparent</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-red-600">
              <XCircle className="h-4 w-4" />
              <span className="text-xs font-medium">Hidden</span>
            </div>
          )}
          {tracker.canImprove && tracker.improvementLink && (
            <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10 h-6 w-6 p-0">
              <a href={tracker.improvementLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
}

// Data Visualization Cards (replacing charts)
function DataCard({
  title,
  value,
  description,
  color,
  icon: Icon,
}: {
  title: string;
  value: number;
  description: string;
  color: string;
  icon: any;
}) {
  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold" style={{ color }}>
              {value}
            </p>
            <p className="text-muted-foreground mt-1 text-xs">{description}</p>
          </div>
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="h-6 w-6" style={{ color }} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AuditReport({ report }: AuditReportProps) {
  const scorePercentage = (report.overallScore.score / report.overallScore.maxScore) * 100;

  // Calculate category scores
  const categoryScores = {
    analytics:
      report.categoryScores.find((cat) => cat.name.toLowerCase().includes("analytics"))?.score || 0,
    ads: report.categoryScores.find((cat) => cat.name.toLowerCase().includes("ads"))?.score || 0,
    pageSpeed:
      report.categoryScores.find((cat) => cat.name.toLowerCase().includes("page speed"))?.score ||
      0,
    cookie:
      report.categoryScores.find((cat) => cat.name.toLowerCase().includes("cookie"))?.score || 0,
  };

  // Calculate distributions
  const trackersByCategory = report.trackers.reduce(
    (acc, tracker) => {
      acc[tracker.category] = (acc[tracker.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const cookiesByLifetime = report.trackingCookies.reduce(
    (acc, cookie) => {
      acc[cookie.lifetime] = (acc[cookie.lifetime] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <Card className="border-2">
        <CardHeader className="pb-4 text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Shield className="h-6 w-6" />
            Tracking Audit Report
          </CardTitle>
          <CardDescription className="text-base">
            {report.id}'s overall health score and key metrics
            <br />
            <p className="text-muted-foreground text-sm">
              {new Date(report.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
            {/* Overall Score */}
            <div className="flex flex-col items-center space-y-4">
              <ScoreCircle
                score={report.overallScore.score}
                maxScore={report.overallScore.maxScore}
                size="large"
              />
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
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <ScoreCircle score={categoryScores.analytics} maxScore={100} label="Analytics" />
              <ScoreCircle score={categoryScores.ads} maxScore={100} label="Ads" />
              <ScoreCircle score={categoryScores.cookie} maxScore={100} label="Cookies" />
              <ScoreCircle score={categoryScores.pageSpeed} maxScore={100} label="Page Speed" />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-3">
            <DataCard
              title="Tracking Technologies"
              value={report.trackers.length}
              description="Found on your website"
              color="#f97316"
              icon={TrendingUp}
            />
            <DataCard
              title="Tracking Cookies"
              value={report.trackingCookies.length}
              description="Detected and analyzed"
              color="#3b82f6"
              icon={Cookie}
            />
            <DataCard
              title="Improvement Actions"
              value={report.recommendedActions.length}
              description="Opportunities identified"
              color="#8b5cf6"
              icon={AlertTriangle}
            />
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

      {/* Enhanced Trackers Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trackers Found ({report.trackers.length})
          </CardTitle>
          <CardDescription>Third-party trackers detected on your website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-muted/50 overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30 hover:bg-muted/30">
                  <TableHead className="text-foreground font-semibold">Name</TableHead>
                  <TableHead className="text-foreground font-semibold">Provider</TableHead>
                  <TableHead className="text-foreground font-semibold">Category</TableHead>
                  <TableHead className="text-foreground font-semibold">Data Sent To</TableHead>
                  <TableHead className="text-foreground font-semibold">Method</TableHead>
                  <TableHead className="text-foreground font-semibold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {report.trackers.map((tracker, index) => (
                  <TrackerTableRow key={index} tracker={tracker} index={index} />
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
          <div className="border-muted/50 overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30 hover:bg-muted/30">
                  <TableHead className="text-foreground font-semibold">Name</TableHead>
                  <TableHead className="text-foreground font-semibold">Provider</TableHead>
                  <TableHead className="text-foreground font-semibold">Category</TableHead>
                  <TableHead className="text-foreground font-semibold">Data Sent To</TableHead>
                  <TableHead className="text-foreground font-semibold">Lifetime</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {report.trackingCookies.map((cookie, index) => (
                  <TableRow
                    key={index}
                    className="group hover:bg-muted/50 border-muted/30 border-b transition-all duration-200"
                  >
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <Cookie className="h-4 w-4 text-amber-500" />
                        <span className="group-hover:text-primary font-medium transition-colors">
                          {cookie.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 text-xs font-bold text-white shadow-sm">
                          {cookie.provider.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-medium">{cookie.provider}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant={getCategoryBadgeVariant(cookie.category)}
                        className="flex w-fit items-center gap-1 shadow-sm"
                      >
                        {getCategoryIcon(cookie.category)}
                        {cookie.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="text-muted-foreground flex items-center gap-2">
                        <Database className="h-3 w-3" />
                        <span className="text-sm">{cookie.dataSentTo}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <Badge variant="secondary" className="text-xs font-medium shadow-sm">
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
          <div className="border-muted/50 overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30 hover:bg-muted/30">
                  <TableHead className="text-foreground font-semibold">Name</TableHead>
                  <TableHead className="text-foreground font-semibold">Provider</TableHead>
                  <TableHead className="text-foreground font-semibold">Category</TableHead>
                  <TableHead className="text-foreground font-semibold">Transfer Size</TableHead>
                  <TableHead className="text-foreground font-semibold">Blocking Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {report.trackingScripts.map((script, index) => (
                  <TableRow
                    key={index}
                    className="group hover:bg-muted/50 border-muted/30 border-b transition-all duration-200"
                  >
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-sm" />
                        <span className="group-hover:text-primary font-medium transition-colors">
                          {script.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 text-xs font-bold text-white shadow-sm">
                          {script.provider.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-medium">{script.provider}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant={getCategoryBadgeVariant(script.category)}
                        className="flex w-fit items-center gap-1 shadow-sm"
                      >
                        {getCategoryIcon(script.category)}
                        {script.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full shadow-sm"
                          style={{
                            backgroundColor: script.transferSizeColor || "#6b7280",
                          }}
                        />
                        <span
                          style={{ color: script.transferSizeColor }}
                          className="text-sm font-medium"
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
                          className="text-sm font-medium"
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
            <Alert key={action.id} className="border-l-4 border-l-orange-500">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="flex items-center justify-between">
                <span>{action.title}</span>
                <Badge variant="outline" className="border-green-200 bg-green-50 text-green-600">
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
