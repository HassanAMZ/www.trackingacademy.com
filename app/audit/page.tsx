import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import auditReports from "@/data/audit-report";
import { ArrowRight, CalendarDays, ExternalLink } from "lucide-react";
import Link from "next/link";

// Transform audit reports to display format with mock dates
const audits = auditReports.map((report, index) => ({
  id: report.id,
  domain: report.domain,
  date: `May ${15 + index}, 2025`, // Mock dates - in real app, you'd have actual dates
  score: report.overallScore.score,
  status: report.overallScore.status,
  statusColor: report.overallScore.color,
  categories: report.categoryScores,
}));

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

export default function AuditsPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Website Audits</h1>
        <p className="text-muted-foreground">
          Comprehensive analysis of your website's tracking and analytics
          implementation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audits.map((audit) => (
          <Card
            key={audit.id}
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl truncate" title={audit.domain}>
                    {audit.id}
                  </CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {audit.date}
                  </CardDescription>
                </div>
                <Badge
                  className={getTextColor(audit.statusColor)}
                  variant="outline"
                >
                  {audit.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Overall Score</span>
                  <span
                    className={`font-bold text-lg ${getTextColor(audit.statusColor)}`}
                  >
                    {audit.score}/100
                  </span>
                </div>
                <Progress
                  value={audit.score}
                  className={`h-2 ${getProgressColor(audit.statusColor)}`}
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium mb-2">Category Scores</h4>
                {audit.categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>{category.name}</span>
                    <span className={getTextColor(category.color)}>
                      {category.score}/100
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={`https://${audit.domain}`}
                  target="_blank"
                  className="flex items-center"
                >
                  Visit Site <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={`/audit/${audit.id}`} className="flex items-center">
                  View Report <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-primary/5 rounded-lg p-8 text-center shadow-md">
        <h2 className="text-2xl font-bold mb-2">Need a website audit?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our comprehensive audit will analyze your tracking setup, identify
          issues, and provide actionable recommendations to improve your data
          collection.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
          <Link href="/contact">Request an Audit</Link>
        </Button>
      </div>
    </div>
  );
}
