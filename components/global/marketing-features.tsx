"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

// Main Marketing Features Component
export default function MarketingFeatures() {
  return (
    <div className="bg-background text-foreground py-16 md:py-24">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Stop losing money to blocked cookies,
            <br />
            trackers & poor AI modeling
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <FeatureCard
              title="Track Every Sale—Policy-Safe"
              description="Recover the conversions your ad account is starving for. 95%+ accuracy with zero policy violations—even for restricted niches."
              element={<BeforeAfterCards />}
            />
            {/* Feature 2 */}
            <FeatureCard
              title="Works Even If You're Banned or Blocked"
              description="Built specifically for blacklisted or throttled niches—health, finance, personal development & more. No sketchy workarounds."
              element={<AdPerformanceCard />}
            />
            {/* Feature 3 */}
            <FeatureCard
              title="95%+ Accuracy Without Code or UTMs"
              description="No coding. No clunky UTM parameters. Just crystal-clear attribution powered by 360° first-party tracking and AI enrichment."
              element={<TrackingTable />}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 4 */}
            <FeatureCard
              title="Send Clean Data to Every Platform"
              description="One-click integration to Facebook, Google, TikTok, and more. We inject compliant data directly into your ad accounts."
              element={<PlatformIntegration />}
            />
            {/* Feature 5 */}
            <FeatureCard
              title="Your Ads Finally Optimize Again"
              description="With clean event data, Facebook's algorithm can actually do its job again—boosting ROAS and cutting wasted ad spend by up to 30%."
              element={<MetricsDisplay />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
type FeatureCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  element?: React.ReactNode;
  className?: string;
};

function FeatureCard({
  title,
  description,
  imageSrc,
  element,
  className,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "rounded-lg bg-card p-6 flex flex-col shadow-md h-full transition-all duration-300",
        isHovered && "shadow-lg transform translate-y-[-4px]",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <div className="overflow-hidden rounded-lg aspect-square bg-primary/5 relative">
          {element ? (
            <div className="w-full h-full flex items-center justify-center">
              {element}
            </div>
          ) : imageSrc ? (
            <Image
              width={400}
              height={400}
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              className={cn(
                "object-cover w-full h-full transition-transform duration-300",
                isHovered && "scale-105",
              )}
            />
          ) : null}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

// Before After Cards Component
function BeforeAfterCards() {
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute transition-all duration-500 ease-out transform",
          animate ? "-translate-x-12 -rotate-6" : "translate-x-0 rotate-0",
          isHovered && "scale-110 -translate-x-16 -rotate-12",
        )}
      >
        <Card
          title="Before"
          value="55"
          label="Sales Tracked"
          percentage="40%"
          isPositive={false}
          colorClass="bg-destructive/10 border-destructive/50"
          textColorClass="text-destructive"
        />
      </div>
      <div
        className={cn(
          "absolute transition-all duration-500 ease-out transform",
          animate ? "translate-x-12 rotate-6" : "translate-x-0 rotate-0",
          isHovered && "scale-110 translate-x-16 rotate-12",
        )}
      >
        <Card
          title="After"
          value="96"
          label="Sales Tracked"
          percentage="95%"
          isPositive={true}
          colorClass="bg-success/10 border-success/50"
          textColorClass="text-success"
        />
      </div>
    </div>
  );
}

type CardProps = {
  title: string;
  value: string;
  label: string;
  percentage: string | number;
  isPositive: boolean;
  colorClass: string;
  textColorClass: string;
};

function Card({
  title,
  value,
  label,
  percentage,
  isPositive,
  colorClass,
  textColorClass,
}: CardProps) {
  return (
    <div
      className={cn("rounded-lg shadow-md p-4 w-32 bg-card border", colorClass)}
    >
      <div className="text-xs font-medium mb-1">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="flex items-center mt-2">
        {isPositive && <ArrowUp className="h-3 w-3 mr-1" />}
        <span className={cn("text-xs font-medium", textColorClass)}>
          {percentage}
        </span>
      </div>
    </div>
  );
}

// Ad Performance Card Component
function AdPerformanceCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative w-full max-w-[240px] h-64 rounded-lg bg-card border border-border p-4 shadow-lg transform transition-all duration-500",
          animate ? "scale-105" : "scale-100",
          isHovered && "scale-110 shadow-xl",
        )}
      >
        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="white" />
            </svg>
          </div>
          <div className="text-xs text-foreground/70">Ad Set 17</div>
          <div className="px-2 py-0.5 rounded-full bg-success/20 text-success text-xs flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-success mr-1"></span>
            LIVE
          </div>
        </div>

        <div className="absolute top-20 left-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="text-foreground/70 text-sm">ROAS</div>
            <div className="text-foreground font-bold">3.7X</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-foreground/70 text-sm">CPA</div>
            <div className="text-foreground font-bold">CPA</div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 py-2 px-3 bg-success/20 rounded-md flex justify-between items-center">
          <div className="text-foreground/90 text-sm">Revenue</div>
          <div className="text-foreground font-bold">$782.03</div>
        </div>
      </div>
    </div>
  );
}

// Tracking Table Component
function TrackingTable() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRow((prev) => (prev < 4 ? prev + 1 : 0));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const rows = [
    {
      day: "Day 1",
      impressions: 356,
      conversions: 167,
      percentage: "40%",
      colorClass: "text-destructive",
    },
    {
      day: "Day 2",
      impressions: 340,
      conversions: 180,
      colorClass: "text-destructive",
    },
    {
      day: "Day 3",
      impressions: 236,
      conversions: 146,
      colorClass: "text-amber-500",
    },
    {
      day: "Day 4",
      impressions: 355,
      conversions: 344,
      colorClass: "text-success",
    },
    {
      day: "Day 5",
      impressions: 367,
      conversions: 348,
      colorClass: "text-success",
    },
  ];

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "w-full max-w-[240px] rounded-lg bg-card border border-border p-4 shadow-lg transition-all duration-300",
          isHovered && "scale-105 shadow-xl",
        )}
      >
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full flex items-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor" />
          </svg>
          See Every Sale
        </div>

        <table className="w-full text-foreground text-sm">
          <thead>
            <tr className="text-muted-foreground">
              <th className="text-left py-2">Day</th>
              <th className="text-right py-2">Imp.</th>
              <th className="text-right py-2">Conv.</th>
              <th className="text-right py-2">%</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.day}
                className={cn(
                  "border-t border-border",
                  currentRow === index && "bg-muted",
                  isHovered && currentRow === index && "bg-muted/80",
                )}
              >
                <td className="py-2">{row.day}</td>
                <td className="text-right py-2">{row.impressions}</td>
                <td className="text-right py-2">{row.conversions}</td>
                <td className={cn("text-right py-2 font-bold", row.colorClass)}>
                  {Math.round((row.conversions / row.impressions) * 100)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Platform Integration Component
function PlatformIntegration() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const platforms = [
    { name: "Facebook", icon: "facebook" },
    { name: "Google Ads", icon: "google" },
    { name: "TikTok", icon: "tiktok" },
    { name: "Pinterest", icon: "pinterest" },
    { name: "Google Analytics", icon: "analytics" },
    { name: "Twitter", icon: "twitter" },
    { name: "LinkedIn", icon: "linkedin" },
    { name: "Snapchat", icon: "snapchat" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < platforms.length - 1 ? prev + 1 : 0));
    }, 1500);

    return () => clearInterval(interval);
  }, [platforms.length]);

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative w-full max-w-[240px] h-64 rounded-lg bg-card border border-border flex items-center justify-center transition-all duration-300",
          isHovered && "scale-105 shadow-xl",
        )}
      >
        {/* Center node */}
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10 transition-all duration-300">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "transition-transform duration-500",
              isHovered && "rotate-180",
            )}
          >
            <path
              d="M13 10V3L4 14H11V21L20 10H13Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
        </div>

        {/* Platform nodes */}
        {platforms.map((platform, index) => {
          // Calculate position in a circle
          const angle = (index * (2 * Math.PI)) / platforms.length;
          const radius = isHovered ? 90 : 80;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);

          return (
            <div
              key={platform.name}
              className={cn(
                "absolute w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-500",
                (activeIndex === index || isHovered) && "ring-2 ring-primary",
                isHovered && "scale-110",
              )}
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {getPlatformIcon(platform.icon)}
            </div>
          );
        })}

        {/* Connection lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {platforms.map((platform, index) => {
            const angle = (index * (2 * Math.PI)) / platforms.length;
            const radius = isHovered ? 90 : 80;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <line
                key={platform.name}
                x1="50%"
                y1="50%"
                x2={`${x}%`}
                y2={`${y}%`}
                stroke={
                  activeIndex === index
                    ? "hsl(var(--primary))"
                    : "hsl(var(--primary) / 0.3)"
                }
                strokeWidth={activeIndex === index || isHovered ? "2" : "1"}
                strokeDasharray={activeIndex === index || isHovered ? "0" : "4"}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// Metrics Display Component
function MetricsDisplay() {
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative w-full max-w-[240px] h-64 rounded-lg bg-card border border-border p-4 shadow-lg transition-all duration-500",
          animate ? "scale-105" : "scale-100",
          isHovered && "scale-110 shadow-xl",
        )}
      >
        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "transition-transform duration-500",
                isHovered && "rotate-180",
              )}
            >
              <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="absolute top-16 left-4 right-4 flex justify-between">
          <div
            className={cn(
              "bg-muted p-2 rounded-md border-l-2 border-primary transition-all duration-300",
              isHovered && "translate-y-[-4px]",
            )}
          >
            <div className="text-xs text-muted-foreground mb-1">METRIC</div>
            <div className="text-foreground font-bold text-xl">$704.34</div>
          </div>

          <div
            className={cn(
              "bg-muted p-2 rounded-md border-l-2 border-secondary transition-all duration-300",
              isHovered && "translate-y-[-4px]",
            )}
          >
            <div className="text-xs text-muted-foreground mb-1">METRIC</div>
            <div className="text-foreground font-bold text-xl">16.5%</div>
          </div>
        </div>

        <div className="absolute top-36 left-4 right-4 text-center">
          <div
            className={cn(
              "text-foreground font-bold text-2xl transition-all duration-300",
              isHovered && "scale-110",
            )}
          >
            2,305
          </div>
        </div>

        <div className="absolute bottom-8 left-4 right-4 h-16">
          <svg viewBox="0 0 100 30" className="w-full h-full">
            <polyline
              points="0,30 10,25 20,26 30,20 40,15 50,18 60,10 70,12 80,8 90,5 100,7"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              className={animate ? "animate-draw" : ""}
              style={{
                strokeDasharray: 150,
                strokeDashoffset: animate ? 0 : 150,
                transition: "stroke-dashoffset 1.5s ease",
              }}
            />
            {isHovered && (
              <circle
                cx="60"
                cy="10"
                r="3"
                fill="hsl(var(--primary))"
                className="animate-pulse"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

// Helper function to get platform icons
function getPlatformIcon(platform: string) {
  switch (platform) {
    case "facebook":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.59 18.03 20.4 19.6 18.64C21.18 16.88 22.1 14.64 22.1 12.33C22.1 6.53 17.5 2.04 12 2.04Z" />
        </svg>
      );
    case "google":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2 10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41.86 0 1.26.63 1.26 1.44 0 .86-.57 2.09-.86 3.27-.17.98.52 1.84 1.52 1.84 1.78 0 3.16-1.9 3.16-4.58 0-2.4-1.72-4.04-4.19-4.04-2.82 0-4.48 2.1-4.48 4.31 0 .86.28 1.73.74 2.3.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11-1.28-.56-2.02-2.38-2.02-3.85 0-3.16 2.24-6.03 6.56-6.03 3.44 0 6.12 2.47 6.12 5.75 0 3.44-2.13 6.2-5.18 6.2-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03z" />
        </svg>
      );
    case "analytics":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M12 2c-2.76 0-5 2.24-5 5v3.47c-1.19.17-2 .95-2 1.53 0 .34.27.8.74 1.05.17.1.39.14.63.14.36 0 .81-.09 1.24-.5.02-.01.05-.05.09-.08.06.95.19 2.12.5 3.03.95 2.82 2.68 3.36 4.8 3.36s3.85-.54 4.8-3.36c.31-.91.44-2.08.5-3.03.04.03.07.07.09.08.43.41.88.5 1.24.5.24 0 .46-.04.63-.14.47-.25.74-.71.74-1.05 0-.58-.81-1.36-2-1.53V7c0-2.76-2.24-5-5-5zm0 2c1.65 0 3 1.35 3 3v4c0 .28.22.5.5.5s.5-.22.5-.5v-.5c.83.19 1 .35 1 .5 0 .28-.45.5-1 .5-.5 0-.5 1-1 2s-1 2-3 2-2.5-1-3-2-1-2-1-2c-.55 0-1-.22-1-.5 0-.15.17-.31 1-.5V11c0-.28.22-.5.5-.5s.5.22.5.5v.5c0 .28.22.5.5.5s.5-.22.5-.5V7c0-1.65 1.35-3 3-3z" />
        </svg>
      );
    default:
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      );
  }
}
