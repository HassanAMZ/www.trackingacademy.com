import Auditarousel from "@/components/audit/audit-carousal";
import { ServiceCard } from "@/components/pricing/pricing-vertical";
import ServiceHero from "@/components/service/service-hero";
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
import Container from "@/components/ui/container";
import { Progress } from "@/components/ui/progress";
import auditReports from "@/data/audit-report";
import { services } from "@/data/services";
import { ArrowRight, CalendarDays, ExternalLink } from "lucide-react";
import Link from "next/link";
import BookAMeetingPage from "../contact/book-a-meeting/page";

// Transform audit reports to display format with mock dates
const audits = auditReports.map((report, index) => ({
  id: report.id,
  date: report.date,
  domain: report.domain,
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
      return "bg-destructive";
    case "success":
      return "bg-destructive";
    default:
      return "bg-destructive";
  }
};

const getTextColor = (color: string) => {
  switch (color) {
    case "destructive":
      return "text-destructive";
    case "warning":
      return "text-destructive";
    case "success":
      return "text-primary";
    default:
      return "text-destructive";
  }
};

export default function AuditsPage() {
  return (
    <Container className="space-y-8 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold">Website Audits</h1>
        <p className="text-muted-foreground">
          Comprehensive analysis of your website's tracking and analytics
          implementation
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {audits.map((audit) => (
          <Card
            key={audit.id}
            className="shadow-md transition-shadow hover:shadow-lg"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="truncate text-xl" title={audit.domain}>
                    {audit.id}
                  </CardTitle>
                  <CardDescription className="mt-1 flex items-center">
                    <CalendarDays className="mr-1 h-4 w-4" />
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
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Score</span>
                  <span
                    className={`text-lg font-bold ${getTextColor(audit.statusColor)}`}
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
                <h4 className="mb-2 text-sm font-medium">Category Scores</h4>
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

      <div className="w-full max-w-full py-12">
        <Container className="flex max-w-4xl flex-col items-center space-y-6 pb-12 text-center">
          <h1>Trusted by 1,000+ for Their Audits</h1>
          <h4 className="text-muted-foreground max-w-3xl">
            See exactly how we identified tracking issues for brands and the
            measurable impact on their ROAS, conversion rates, and scaling
            success.
          </h4>
        </Container>
        <Auditarousel auditReports={auditReports} />
      </div>

      <div className="w-full max-w-full py-12">
        <Container className="flex max-w-4xl flex-col items-center space-y-6 pb-12 text-center">
          <h1>Fix Your Tracking Issues</h1>
          <h4 className="text-muted-foreground max-w-3xl">
            Book a quick 30min call with us to see how we can help you fix your
            tracking issues and Help you make more money from your exisitng ads.
          </h4>
        </Container>
        <BookAMeetingPage />
      </div>
    </Container>
  );
}
