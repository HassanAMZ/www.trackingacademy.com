"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  AuditReport,
  CategoryScore as CategoryScoreProps,
} from "@/data/audit-report";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Clock,
  Database,
  ExternalLink,
  Eye,
  Shield,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface AuditReportCarouselProps {
  auditReports: AuditReport[];
  speed?: number;
  itemWidth?: number;
  itemHeight?: number;
  className?: string;
}

// Semantic color utilities
function getScoreColor(score: number, maxScore = 100) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "text-primary";
  if (percentage >= 60) return "text-secondary-foreground";
  return "text-destructive";
}

function getScoreBackground(score: number, maxScore = 100) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "bg-primary/5 border-primary/20";
  if (percentage >= 60) return "bg-secondary/50 border-secondary";
  return "bg-destructive/5 border-destructive/20";
}

function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "analytics":
      return <BarChart3 className="h-4 w-4" />;
    case "ads":
    case "advertising":
      return <Eye className="h-4 w-4" />;
    case "page speed":
      return <Zap className="h-4 w-4" />;
    case "cookie lifetime":
      return <Clock className="h-4 w-4" />;
    default:
      return <Database className="h-4 w-4" />;
  }
}

function getStatusIcon(score: number) {
  if (score >= 80) return <CheckCircle2 className="text-primary h-4 w-4" />;
  if (score >= 60)
    return <AlertTriangle className="text-secondary-foreground h-4 w-4" />;
  return <XCircle className="text-destructive h-4 w-4" />;
}

// Simple Score Circle Component
function ScoreCircle({
  score,
  maxScore,
  size = 100,
}: {
  score: number;
  maxScore: number;
  size?: number;
}) {
  const percentage = (score / maxScore) * 100;
  const radius = (size - 8) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="-rotate-90 transform" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          className="text-muted/30"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          className={`transition-all duration-700 ${getScoreColor(score)}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-foreground text-2xl font-bold">{score}</span>
        <span className="text-muted-foreground text-xs">/{maxScore}</span>
      </div>
    </div>
  );
}

// Category Score Component
function CategoryScore({ category }: { category: CategoryScoreProps }) {
  return (
    <div className="bg-muted/30 hover:bg-muted/50 flex items-center justify-between rounded-lg p-3 transition-colors">
      <div className="flex items-center gap-2">
        <div className="bg-background rounded-md border p-1.5">
          {getCategoryIcon(category.name)}
        </div>
        <span className="text-sm font-medium">{category.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <Progress value={category.score} className="h-2 w-16" />
        <span
          className={`w-8 text-sm font-semibold ${getScoreColor(category.score)}`}
        >
          {category.score}
        </span>
      </div>
    </div>
  );
}

// Metric Card Component
function MetricCard({
  label,
  value,
  icon: Icon,
  variant = "default",
}: {
  label: string;
  value: number;
  icon: any;
  variant?: "default" | "warning" | "danger";
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case "warning":
        return "text-secondary-foreground bg-secondary/50";
      case "danger":
        return "text-destructive bg-destructive/5";
      default:
        return "text-muted-foreground bg-muted/20";
    }
  };

  return (
    <div className="bg-background rounded-lg border p-3 text-center">
      <div className={`mb-2 inline-flex rounded-lg p-2 ${getVariantStyles()}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-foreground text-lg font-bold">{value}</div>
      <div className="text-muted-foreground text-xs">{label}</div>
    </div>
  );
}

export default function AuditReportCarousel({
  auditReports,
  speed = 0.7,
  itemWidth = 380,
  itemHeight = 520,
  className = "",
}: AuditReportCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);

  const items = [...auditReports, ...auditReports, ...auditReports];
  const margin = 20;
  const totalItemWidth = itemWidth + margin;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalItems = auditReports.length;
    const totalWidth = totalItemWidth * totalItems;

    const animate = () => {
      if (!isPaused && carousel) {
        positionRef.current -= speed;

        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current += totalWidth;
        }

        carousel.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, auditReports.length, speed, totalItemWidth]);

  return (
    <div className={` ${className}`}>
      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={carouselRef}
          className="flex"
          style={{
            width: `${items.length * totalItemWidth}px`,
            gap: `${margin}px`,
          }}
        >
          {items.map((report, index) => (
            <Link key={`${report.id}-${index}`} href={`/audit/${report.id}`}>
              <Card
                className={`group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${getScoreBackground(report.overallScore.score)}`}
                style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
              >
                <CardHeader className="pb-4">
                  {/* Status Badge */}
                  <div className="mb-2 flex items-center justify-between">
                    <Badge
                      variant={
                        report.overallScore.score >= 80
                          ? "default"
                          : report.overallScore.score >= 60
                            ? "secondary"
                            : "destructive"
                      }
                      className="flex items-center gap-1"
                    >
                      {getStatusIcon(report.overallScore.score)}
                      {report.overallScore.status}
                    </Badge>
                    <div className="opacity-0 transition-opacity group-hover:opacity-100">
                      <ExternalLink className="text-muted-foreground h-4 w-4" />
                    </div>
                  </div>

                  {/* Domain and Date */}
                  <div className="text-center">
                    <h3 className="text-foreground mb-1 truncate text-lg font-semibold">
                      {report.domain}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {new Date(report.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Score Circle */}
                  <div className="flex justify-center">
                    <ScoreCircle
                      score={report.overallScore.score}
                      maxScore={report.overallScore.maxScore}
                      size={100}
                    />
                  </div>

                  {/* Category Scores */}
                  <div className="space-y-2">
                    {report.categoryScores.map((category, idx) => (
                      <CategoryScore key={idx} category={category} />
                    ))}
                  </div>

                  {/* Metrics Grid */}
                  {/* <div className="grid grid-cols-2 gap-2 pt-2">
                  <MetricCard
                    label="Trackers"
                    value={report.trackers.length}
                    icon={TrendingUp}
                    variant={
                      report.trackers.length > 20
                        ? "danger"
                        : report.trackers.length > 10
                          ? "warning"
                          : "default"
                    }
                  />
                  <MetricCard
                    label="Cookies"
                    value={report.trackingCookies.length}
                    icon={Database}
                    variant={
                      report.trackingCookies.length > 50
                        ? "danger"
                        : report.trackingCookies.length > 25
                          ? "warning"
                          : "default"
                    }
                  />
                  <MetricCard
                    label="Scripts"
                    value={report.trackingScripts.length}
                    icon={Activity}
                    variant={
                      report.trackingScripts.length > 20
                        ? "danger"
                        : report.trackingScripts.length > 10
                          ? "warning"
                          : "default"
                    }
                  />
                  <MetricCard
                    label="Actions"
                    value={report.recommendedActions.length}
                    icon={AlertTriangle}
                    variant={
                      report.recommendedActions.length > 10
                        ? "danger"
                        : report.recommendedActions.length > 5
                          ? "warning"
                          : "default"
                    }
                  />
                </div> */}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
