"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  ChevronUp,
  Globe,
  LineChart,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Container from "../ui/container";

// Define TypeScript interfaces
interface ClientRequest {
  type: string;
  total: number;
  adBlockers: number;
  trackingPrevention: number;
}

interface BrowserRequest {
  browser: string;
  requests: number;
  recoveredFromAdBlockersPercentage: number;
}

interface Subscription {
  status: string;
  requestsSent: number;
  requestsLimit: number;
  usagePercentage: number;
  renewsIn: number;
  nextPayment: string;
}

interface TrackingPrevention {
  affected: number;
  affectedPercentage: number;
}

interface Analytics {
  period: string;
  totalRequests: number;
  recoveredFromAdBlockers: number;
  recoveredFromAdBlockersPercentage: number;
  recoveredFromTrackingPrevention: number;
  recoveredFromTrackingPreventionPercentage: number;
}

interface Client {
  id: string;
  name: string;
  url: string;
  plan: string;
  subscription: Subscription;
  trackingPrevention: TrackingPrevention;
  analytics: Analytics;
  dataClientRequests: ClientRequest[];
  otherRequests: ClientRequest[];
  botRequests: Array<{
    client: string;
    total: number;
    bot: number;
    botPercentage: number;
  }>;
  browserRequests: BrowserRequest[];
}

interface CalculatedRecovery {
  total: number;
  percentage: number;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

interface CaseStudyProps {
  client: Client;
}

// Main component
export default function CaseStudy({ client }: CaseStudyProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "events" | "browsers"
  >("overview");

  // Find top events by total requests
  const topEvents: ClientRequest[] = [...client.dataClientRequests]
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  // Calculate total recovered requests
  const calculatedRecovery: CalculatedRecovery = {
    total:
      client.analytics.recoveredFromTrackingPrevention +
      client.analytics.recoveredFromAdBlockers,
    percentage:
      client.analytics.recoveredFromTrackingPreventionPercentage +
      client.analytics.recoveredFromAdBlockersPercentage,
  };

  // Format large numbers
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  return (
    <Container className="w-full py-8">
      {/* Header with main site info */}
      <Card className="mb-6 overflow-hidden border-none">
        <div className="bg-primary text-primary-foreground p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-1 text-3xl font-bold">{client.name}</h1>
              <div className="text-primary-foreground/80 flex items-center">
                <Globe size={16} className="mr-2" />
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {client.url}
                </a>
              </div>
            </div>
            <Badge variant="secondary" className="px-3 py-1 text-sm">
              {client.plan}
            </Badge>
          </div>
        </div>{" "}
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Subscription usage */}
            <Card className="bg-secondary/10">
              <CardContent className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-muted-foreground text-sm font-medium">
                    Requests Used
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    Renews in {client.subscription.renewsIn} days
                  </Badge>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold">
                    {formatNumber(client.subscription.requestsSent)} /{" "}
                    {formatNumber(client.subscription.requestsLimit)}
                  </span>
                </div>
                <Progress
                  value={client.subscription.usagePercentage}
                  className="h-2"
                />
                <div className="text-muted-foreground mt-1 text-right text-xs">
                  {client.subscription.usagePercentage}% used
                </div>
              </CardContent>
            </Card>{" "}
            {/* Tracking prevention impact */}
            <Card className="bg-secondary/10">
              <CardContent className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-muted-foreground text-sm font-medium">
                    Tracking Prevention
                  </h3>
                  <ShieldAlert size={16} className="text-amber-500" />
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold">
                    {formatNumber(client.trackingPrevention.affected)}
                  </span>
                </div>
                <Progress
                  value={client.trackingPrevention.affectedPercentage}
                  className="h-2"
                />
                <div className="text-muted-foreground mt-1 text-right text-xs">
                  {client.trackingPrevention.affectedPercentage}% affected
                </div>
              </CardContent>
            </Card>{" "}
            {/* Recovered requests */}
            <Card className="bg-secondary/10">
              <CardContent className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-muted-foreground text-sm font-medium">
                    Recovered Requests
                  </h3>
                  <Zap size={16} className="text-green-500" />
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold">
                    {formatNumber(
                      client.analytics.recoveredFromTrackingPrevention,
                    )}
                  </span>
                </div>
                <Progress
                  value={
                    client.analytics.recoveredFromTrackingPreventionPercentage
                  }
                  className="h-2"
                />
                <div className="text-muted-foreground mt-1 text-right text-xs">
                  {client.analytics.recoveredFromTrackingPreventionPercentage}%
                  tracking prevention recovery
                </div>
              </CardContent>
            </Card>{" "}
            {/* AdBlocker recovery */}
            <Card className="bg-secondary/10">
              <CardContent className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-muted-foreground text-sm font-medium">
                    Ad blocker Recovery
                  </h3>
                  <ShieldAlert size={16} className="text-emerald-500" />
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold">
                    {formatNumber(client.analytics.recoveredFromAdBlockers)}
                  </span>
                </div>
                <Progress
                  value={client.analytics.recoveredFromAdBlockersPercentage}
                  className="h-2"
                />
                <div className="text-muted-foreground mt-1 text-right text-xs">
                  {client.analytics.recoveredFromAdBlockersPercentage}% ad
                  blocker recovery
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>{" "}
      {/* Tab Navigation */}
      <div className="mb-6 flex border-b">
        {(["overview", "events", "browsers"] as const).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "border-primary text-primary border-b-2"
                : "text-muted-foreground hover:text-primary"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>{" "}
      {/* Tab Content */}
      {activeTab === "overview" && (
        <OverviewTab
          client={client}
          topEvents={topEvents}
          calculatedRecovery={calculatedRecovery}
        />
      )}
      {activeTab === "events" && <EventsTab client={client} />}
      {activeTab === "browsers" && <BrowsersTab client={client} />}
    </Container>
  );
}

// Overview Tab Component
interface OverviewTabProps {
  client: Client;
  topEvents: ClientRequest[];
  calculatedRecovery: CalculatedRecovery;
}

function OverviewTab({
  client,
  topEvents,
  calculatedRecovery,
}: OverviewTabProps) {
  // Prepare data for results card
  const results = [
    {
      name: "Total Requests",
      value: client.analytics.totalRequests,
      icon: <BarChart3 size={18} className="text-slate-600" />,
    },
    {
      name: "Recovered Requests",
      value: calculatedRecovery.total,
      percentage: calculatedRecovery.percentage,
      icon: <Zap size={18} className="text-green-500" />,
    },
    {
      name: "Ad Blocker Recovery",
      value: client.analytics.recoveredFromAdBlockers,
      percentage: client.analytics.recoveredFromAdBlockersPercentage,
      icon: <ShieldAlert size={18} className="text-emerald-500" />,
    },
    {
      name: "Tracking Prevention Recovery",
      value: client.analytics.recoveredFromTrackingPrevention,
      percentage: client.analytics.recoveredFromTrackingPreventionPercentage,
      icon: <ShieldAlert size={18} className="text-amber-500" />,
    },
  ];

  // Prepare browser data for pie chart
  const browserData = client.browserRequests.map((item) => ({
    name: item.browser,
    value: item.requests,
  }));

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Results Card */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <LineChart size={20} className="text-primary" />
            Recovery Results
          </CardTitle>
          <CardDescription>
            Data from last {client.analytics.period}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {results.map((result, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-secondary/20 rounded-full p-2">
                  {result.icon}
                </div>
                <div>
                  <h3 className="text-muted-foreground mb-1 text-sm font-medium">
                    {result.name}
                  </h3>
                  <p className="text-2xl font-bold">
                    {result.value.toLocaleString()}
                  </p>
                  {result.percentage && (
                    <p className="mt-1 flex items-center text-sm text-green-600">
                      <ChevronUp size={16} />
                      {result.percentage}% recovered
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>{" "}
      {/* Browser Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Browser Distribution</CardTitle>
          <CardDescription>Requests by browser</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={browserData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(1)}%`
                  }
                >
                  {browserData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [
                    value.toLocaleString(),
                    "Requests",
                  ]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>{" "}
      {/* Top Events */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-lg">Top Events</CardTitle>
          <CardDescription>Highest volume tracking events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {topEvents.map((event, index) => (
              <Card key={index} className="bg-secondary/10">
                <CardContent className="p-4">
                  <h3 className="mb-2 text-sm font-medium">{event.type}</h3>
                  <p className="mb-2 text-xl font-bold">
                    {event.total.toLocaleString()}
                  </p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>TP Recovery:</span>
                      <span className="font-medium">
                        {event.trackingPrevention}%
                      </span>
                    </div>
                    <Progress
                      value={event.trackingPrevention}
                      className="h-1"
                    />
                    <div className="mt-2 flex justify-between text-xs">
                      <span>Ad Blocker:</span>
                      <span className="font-medium">{event.adBlockers}%</span>
                    </div>
                    <Progress value={event.adBlockers} className="h-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Events Tab Component
interface EventsTabProps {
  client: Client;
}

function EventsTab({ client }: EventsTabProps) {
  // Get combined data client requests
  const eventData: ClientRequest[] = [...client.dataClientRequests].sort(
    (a, b) => b.total - a.total,
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Event Performance</CardTitle>
          <CardDescription>Recovery rate by event type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={eventData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip
                  formatter={(value: number) => [
                    value.toLocaleString(),
                    "Requests",
                  ]}
                />
                <Legend />
                <Bar dataKey="total" fill="#0088FE" name="Total Requests" />
                <Bar
                  dataKey="trackingPrevention"
                  fill="#00C49F"
                  name="Tracking Prevention Recovery"
                />
                <Bar
                  dataKey="adBlockers"
                  fill="#FFBB28"
                  name="Ad Blocker Recovery"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Browsers Tab Component
interface BrowsersTabProps {
  client: Client;
}

function BrowsersTab({ client }: BrowsersTabProps) {
  const browserData = client.browserRequests.map((item) => ({
    name: item.browser,
    requests: item.requests,
    recovery: item.recoveredFromAdBlockersPercentage,
  }));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Browser Performance</CardTitle>
          <CardDescription>
            Request distribution and recovery by browser
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={browserData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value: number) => [
                    value.toLocaleString(),
                    "Value",
                  ]}
                />
                <Legend />
                <Bar dataKey="requests" fill="#0088FE" name="Requests" />
                <Bar dataKey="recovery" fill="#00C49F" name="Recovery Rate" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
