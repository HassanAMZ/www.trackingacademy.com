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
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AuditReportProps } from "@/data/audit-report";
import {
  AlertTriangle,
  CheckCircle,
  Code,
  Cookie,
  ExternalLink,
  Shield,
  TrendingUp,
  XCircle,
} from "lucide-react";
import Container from "../ui/container";

function getScoreColor(score: number, maxScore: number) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "text-green-600";
  if (percentage >= 60) return "text-yellow-600";
  return "text-red-600";
}

function getCategoryBadgeVariant(category: string) {
  switch (category.toLowerCase()) {
    case "advertising":
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

  return (
    <Container className="space-y-8 p-6">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Privacy Audit Report</h1>
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

          <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 lg:grid-cols-4">
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
    </Container>
  );
}
