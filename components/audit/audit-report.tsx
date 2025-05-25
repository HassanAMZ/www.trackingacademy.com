"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AuditReport } from "@/data/audit-report";
import {
  AlertCircle,
  Code,
  Cookie,
  ExternalLink,
  PieChart,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface AuditReportProps {
  report: AuditReport;
}

export default function AuditReport({ report }: AuditReportProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const getScoreColor = (score: number) => {
    if (score < 40) return "text-destructive";
    if (score < 70) return "text-warning";
    return "text-success";
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case "destructive":
        return "bg-destructive";
      case "warning":
        return "bg-warning";
      case "success":
        return "bg-success";
      default:
        return "bg-primary";
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case "destructive":
        return "text-destructive";
      case "warning":
        return "text-warning";
      case "success":
        return "text-success";
      default:
        return "text-primary";
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Website Audit Report</h1>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium">{report.domain}</span>
        </div>
      </div>

      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="mb-8 grid grid-cols-5">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="trackers" className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>Trackers</span>
          </TabsTrigger>
          <TabsTrigger value="cookies" className="flex items-center gap-2">
            <Cookie className="h-4 w-4" />
            <span>Cookies</span>
          </TabsTrigger>
          <TabsTrigger value="scripts" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>Scripts</span>
          </TabsTrigger>
          <TabsTrigger value="actions" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>Actions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle>Overall Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center">
                  <div className="relative h-48 w-48">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span
                          className={`text-5xl font-bold ${getScoreColor(report.overallScore.score)}`}
                        >
                          {report.overallScore.score}
                        </span>
                        <span className="text-muted-foreground text-2xl">
                          /{report.overallScore.maxScore}
                        </span>
                        <p
                          className={`mt-2 text-lg ${getTextColor(report.overallScore.color)}`}
                        >
                          {report.overallScore.status}
                        </p>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 100 100"
                      className="h-full w-full -rotate-90"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="hsl(var(--muted))"
                        strokeWidth="10"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={`hsl(var(--${report.overallScore.color}))`}
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 40}
                        strokeDashoffset={
                          2 *
                          Math.PI *
                          40 *
                          (1 - report.overallScore.score / 100)
                        }
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle>Category Scores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {report.categoryScores.map((category, index) => (
                    <div key={index}>
                      <div className="mb-1 flex justify-between">
                        <span className="font-medium">{category.name}</span>
                        <span
                          className={`font-medium ${getTextColor(category.color)}`}
                        >
                          {category.score}
                        </span>
                      </div>
                      <Progress
                        value={category.score}
                        className={`h-2 ${getProgressColor(category.color)}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>EU Privacy Rules</CardTitle>
              <CardDescription>
                Important compliance information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">Be aware of EU privacy rules:</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Obtain user consent before using cookies or trackers.</li>
                  <li>Activate trackers only per user preferences.</li>
                  <li>Use cloud servers within the EU.</li>
                  <li>
                    Make sure that sending PII to trackers does not violate your
                    local regulations.
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trackers">
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>
                Trackers Detected ({report.trackers.length})
              </CardTitle>
              <CardDescription>
                Third-party tracking technologies found on your site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Provider</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Data is sent to</TableHead>
                      <TableHead>Tracking method</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {report.trackers.map((tracker, index) => (
                      <TableRow
                        key={index}
                        className={tracker.isTransparent ? "bg-muted/50" : ""}
                      >
                        <TableCell className="font-medium">
                          {tracker.name}
                        </TableCell>
                        <TableCell>{tracker.provider}</TableCell>
                        <TableCell>{tracker.category}</TableCell>
                        <TableCell>{tracker.dataSentTo}</TableCell>
                        <TableCell>{tracker.trackingMethod}</TableCell>
                        <TableCell>
                          {tracker.canImprove ? (
                            <Button size="sm" variant="outline" asChild>
                              <Link
                                href={tracker.improvementLink || "/contact"}
                              >
                                Improve
                              </Link>
                            </Button>
                          ) : (
                            <span className="text-muted-foreground text-sm">
                              {tracker.transparentMessage}
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cookies">
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>
                Tracking Cookies Detected ({report.trackingCookies.length})
              </CardTitle>
              <CardDescription>
                Cookies used for tracking user behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Data is sent to</TableHead>
                      <TableHead>Lifetime</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {report.trackingCookies.map((cookie, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {cookie.name}
                        </TableCell>
                        <TableCell>{cookie.provider}</TableCell>
                        <TableCell>{cookie.category}</TableCell>
                        <TableCell>{cookie.dataSentTo}</TableCell>
                        <TableCell>{cookie.lifetime}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scripts">
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>
                Tracking JavaScript Detected ({report.trackingScripts.length})
              </CardTitle>
              <CardDescription>
                JavaScript files used for tracking and analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Transfer Size</TableHead>
                      <TableHead>Blocking time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {report.trackingScripts.map((script, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {script.name}
                        </TableCell>
                        <TableCell>{script.provider}</TableCell>
                        <TableCell>{script.category}</TableCell>
                        <TableCell
                          className={`text-${script.transferSizeColor}`}
                        >
                          {script.transferSize}
                        </TableCell>
                        <TableCell
                          className={`text-${script.blockingTimeColor}`}
                        >
                          {script.blockingTime}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="actions">
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Recommended Actions</CardTitle>
              <CardDescription>
                Steps to improve your tracking setup and compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Below you can check the recommended guides on how to improve
                your tracking setup. If you have any questions or suggestions,
                please{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                .
              </p>

              <div className="w-full space-y-5">
                {report.recommendedActions.map((action, index) => (
                  <div key={index}>
                    <div className="hover:no-underline">
                      <div className="flex w-full items-center justify-between pr-4">
                        <div className="flex items-center">
                          <div className="mr-4 text-lg font-medium">
                            {action.title}
                          </div>
                          <div className="flex space-x-2">
                            {action.categories.map((category, catIndex) => (
                              <Badge key={catIndex} variant="outline">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-center">
                            <div className="text-muted-foreground text-sm">
                              Score improvement
                            </div>
                            <div className="text-primary text-2xl font-bold">
                              {action.scoreImprovement}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-primary/5 mt-12 rounded-lg p-8 text-center shadow-md">
        <h2 className="mb-2 text-2xl font-bold">
          Would you like to improve your tracking?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl">
          To make your setup even better, contact Tracking Academy and activate
          our powerful tools for server-side tracking.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
          <Link href="/contact">Contact Us For Help</Link>
        </Button>
      </div>
    </div>
  );
}
