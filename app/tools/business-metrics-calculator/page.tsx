"use client";

import {
  MetricInput,
  MoneyUsagePieChart,
  ProjectionChart,
  ProjectionTable,
} from "@/components/tools/metrics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  BusinessParams,
  DEFAULT_BUSINESS_PARAMS,
  calculateBusinessMetrics,
} from "@/utils/business-calculator";
import { BarChart, Settings } from "lucide-react";
import React, { useMemo, useState } from "react";

const BusinessGrowthCalculator: React.FC = () => {
  const [yearsToProject, setYearsToProject] = useState<string>("10");
  const [growthRate, setGrowthRate] = useState<string>("0.1");
  const [customParams, setCustomParams] = useState<BusinessParams>(
    DEFAULT_BUSINESS_PARAMS,
  );

  const metrics = useMemo(() => {
    const months = Math.max(1, parseInt(yearsToProject) * 12 || 0);
    const rate = Math.max(0, Math.min(1, parseFloat(growthRate) || 0));
    return calculateBusinessMetrics(months, rate, customParams);
  }, [yearsToProject, growthRate, customParams]);

  const initialMetrics = metrics[0];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart className="mr-2 h-6 w-6" />
          Business Growth Projection Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium">
                Years to Project
              </label>
              <Input
                type="number"
                value={yearsToProject}
                onChange={(e) => setYearsToProject(e.target.value || "1")}
                placeholder="Enter number of years"
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium">
                Annual Growth Rate
              </label>
              <Input
                type="number"
                max="1"
                value={growthRate}
                onChange={(e) => setGrowthRate(e.target.value || "0")}
                placeholder="Enter growth rate (e.g., 0.1 for 10%)"
                className="w-full"
              />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-6">
                  <Settings className="mr-2 h-4 w-4" />
                  Customize Parameters
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Customize Business Parameters</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(customParams).map(([key, value]) => (
                    <MetricInput
                      key={key}
                      label={key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                      value={value}
                      onChange={(newValue) =>
                        setCustomParams({
                          ...customParams,
                          [key]: newValue || 0,
                        })
                      }
                    />
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
            <ProjectionChart
              data={metrics.map((m, i) => ({
                ...m,
                year: `Year ${Math.floor(i / 12)}`,
                income: Math.round(m.income),
                expenses: Math.round(m.expenses),
                netProfit: Math.round(m.netProfit),
                contracts: Math.round(m.contracts),
                projects: Math.round(m.projects),
                employees: Math.round(m.employees),
              }))}
              title="Business Growth Projections"
            />
            <MoneyUsagePieChart
              income={initialMetrics.income}
              expenses={initialMetrics.expenses}
              marketing={initialMetrics.marketing}
              operations={initialMetrics.operations}
            />
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Projection Milestones</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ProjectionTable metrics={metrics} />
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessGrowthCalculator;
