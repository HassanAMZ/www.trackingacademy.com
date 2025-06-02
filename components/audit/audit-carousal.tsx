import { AuditReport } from "@/data/audit-report";
import {
  Activity,
  BarChart3,
  Database,
  ExternalLink,
  Eye,
  Shield,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface AuditReportCarouselProps {
  auditReports: AuditReport[];
  speed?: number;
  itemWidth?: number;
  itemHeight?: number;
  className?: string;
}

// Utility functions from your example
function getScoreColor(score: number, maxScore: number = 100) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "text-green-600";
  if (percentage >= 60) return "text-yellow-600";
  return "text-red-600";
}
// Score donut component matching your example
function ScoreDonut({
  score,
  maxScore,
  label,
}: {
  score: number;
  maxScore: number;
  label: string;
}) {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 16;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  const color = getScoreColor(score, maxScore);

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="relative">
        <svg className="h-10 w-10 -rotate-90 transform">
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-muted/20"
          />
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className={`transition-all duration-300 ${color}`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium">{score}</span>
        </div>
      </div>
      <div className="text-center">
        <div className="text-muted-foreground text-xs">{label}</div>
      </div>
    </div>
  );
}

export default function AuditReportCarousel({
  auditReports,
  speed = 0.8,
  itemWidth = 360,
  itemHeight = 480,
  className = "",
}: AuditReportCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);

  // Create infinite loop by triplicating items
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
    <div className={`overflow-hidden ${className}`}>
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
            <div
              key={`${report.id}-${index}`}
              className="group bg-card relative cursor-pointer overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
            >
              {/* Header */}
              <div className="border-b p-4 pb-3">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="text-muted-foreground h-4 w-4" />
                    <span className="text-muted-foreground text-xs">
                      {new Date(report.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="bg-primary text-primary-foreground rounded-full p-1.5 shadow-sm">
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </div>

                <h3 className="text-foreground mb-2 truncate font-medium">
                  {report.domain}
                </h3>

                {/* Overall Score */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-semibold">
                      {report.overallScore.score}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      /{report.overallScore.maxScore}
                    </span>
                  </div>
                  <div
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      report.overallScore.status === "Excellent" ||
                      report.overallScore.status === "Good"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                        : report.overallScore.status === "Fair"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                          : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    {report.overallScore.status}
                  </div>
                </div>
              </div>

              {/* Category Scores */}
              <div className="p-4 pb-3">
                <h4 className="text-foreground mb-3 text-sm font-medium">
                  Category Breakdown
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {report.categoryScores.map((category, idx) => (
                    <ScoreDonut
                      key={idx}
                      score={category.score}
                      maxScore={100}
                      label={category.name}
                    />
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="p-4 pt-0">
                <h4 className="text-foreground mb-3 text-sm font-medium">
                  Issues Detected
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Eye className="text-muted-foreground h-3 w-3" />
                      <span className="text-muted-foreground">Trackers</span>
                    </div>
                    <span className="text-foreground font-medium">
                      {report.trackers.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Database className="text-muted-foreground h-3 w-3" />
                      <span className="text-muted-foreground">Cookies</span>
                    </div>
                    <span className="text-foreground font-medium">
                      {report.trackingCookies.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="text-muted-foreground h-3 w-3" />
                      <span className="text-muted-foreground">Scripts</span>
                    </div>
                    <span className="text-foreground font-medium">
                      {report.trackingScripts.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Zap className="text-muted-foreground h-3 w-3" />
                      <span className="text-muted-foreground">Actions</span>
                    </div>
                    <span className="text-accent-foreground font-medium">
                      {report.recommendedActions.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="absolute right-0 bottom-0 left-0 p-4">
                <div className="bg-primary text-primary-foreground translate-y-2 transform rounded-md py-2 text-center text-sm opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Full Report
                </div>
              </div>

              {/* Subtle Hover Overlay */}
              <div className="bg-accent/5 pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
