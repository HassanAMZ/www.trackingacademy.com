"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calculator,
  DollarSign,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";
import { TrackingComparisonTable } from "../global/tracking-solutions-comparison";
import Container from "../ui/container";

interface CalculatorInputs {
  adSpend: number;
  revenueBefore: number;
  revenueAfter: number;
}

interface CalculationResult {
  month: number;
  revenueLost: number;
  revenueLossPercent: number;
  revenueAfterRestrictions: number;
  cumulativeRevenueLost: number;
}

interface CalculatorConfig {
  title: string;
  description: string;
  industry: string;
  urgencyMessage: string;
}

interface CalculatorProps {
  config: CalculatorConfig;
}

interface StepConfig {
  key: string;
  title: string;
  description: string;
  min: number;
  max: number;
  step: number;
  format: (value: number) => string;
}

export default function RevenueCalculator({ config }: CalculatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [inputs, setInputs] = useState<CalculatorInputs>({
    adSpend: 5000,
    revenueBefore: 25000,
    revenueAfter: 15000,
  });

  const revenueSteps: StepConfig[] = [
    {
      key: "adSpend",
      title: "Monthly Ad Spend",
      description: "How much do you spend on advertising each month?",
      min: 1000,
      max: 100000,
      step: 500,
      format: (value: number) => `$${value.toLocaleString()}`,
    },
    {
      key: "revenueBefore",
      title: "Monthly Revenue Before Restrictions",
      description: "What was your average monthly revenue before restrictions?",
      min: 5000,
      max: 500000,
      step: 1000,
      format: (value: number) => `$${value.toLocaleString()}`,
    },
    {
      key: "revenueAfter",
      title: "Monthly Revenue After Restrictions",
      description: "What's your current monthly revenue after restrictions?",
      min: 1000,
      max: 500000,
      step: 1000,
      format: (value: number) => `$${value.toLocaleString()}`,
    },
  ];

  const calculations = useMemo(() => {
    const results: CalculationResult[] = [];
    let cumulativeRevenueLost = 0;

    for (let month = 1; month <= 12; month++) {
      // Assume revenue continues to decline at 5% per month due to compounding effects
      const revenueAfterRestrictions =
        month === 1 ? inputs.revenueAfter : inputs.revenueAfter * Math.pow(0.95, month - 1);

      const revenueLost = inputs.revenueBefore - revenueAfterRestrictions;
      const revenueLossPercent = (revenueLost / inputs.revenueBefore) * 100;

      // Fix: Add the current month's loss to the cumulative total
      cumulativeRevenueLost += revenueLost;

      results.push({
        month,
        revenueLost,
        revenueLossPercent,
        revenueAfterRestrictions,
        cumulativeRevenueLost, // This now correctly accumulates each month's loss
      });
    }
    return results;
  }, [inputs]);

  const summaryData = useMemo(() => {
    const quarter = calculations.slice(0, 3);
    const halfYear = calculations.slice(0, 6);
    const fullYear = calculations;

    return {
      quarter: {
        revenueLost: quarter.reduce((sum, r) => sum + r.revenueLost, 0),
        avgRevenueLoss: quarter.reduce((sum, r) => sum + r.revenueLossPercent, 0) / 3,
      },
      halfYear: {
        revenueLost: halfYear.reduce((sum, r) => sum + r.revenueLost, 0),
        avgRevenueLoss: halfYear.reduce((sum, r) => sum + r.revenueLossPercent, 0) / 6,
      },
      fullYear: {
        revenueLost: fullYear.reduce((sum, r) => sum + r.revenueLost, 0),
        avgRevenueLoss: fullYear.reduce((sum, r) => sum + r.revenueLossPercent, 0) / 12,
      },
      monthlyLoss: inputs.revenueBefore - inputs.revenueAfter,
      lossPercentage: ((inputs.revenueBefore - inputs.revenueAfter) / inputs.revenueBefore) * 100,
      roiImpact: ((inputs.revenueBefore - inputs.revenueAfter) / inputs.adSpend) * 100,
    };
  }, [calculations, inputs]);

  const handleSliderChange = (value: number[]) => {
    const currentStepConfig = revenueSteps[currentStep];
    setInputs((prev) => ({ ...prev, [currentStepConfig.key]: value[0] }));
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentStep < revenueSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResults(true);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = Number.parseFloat(value) || 0;
    setInputs((prev) => ({ ...prev, [field]: numValue }));
  };

  const resetCalculator = () => {
    setCurrentStep(0);
    setShowResults(false);
    setInputs({
      adSpend: 5000,
      revenueBefore: 25000,
      revenueAfter: 15000,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(num);
  };

  if (!showResults) {
    const currentStepConfig = revenueSteps[currentStep];
    const currentValue = inputs[currentStepConfig.key as keyof CalculatorInputs];

    return (
      <div className="min-h-screen bg-background">
        <Container className="py-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Calculator className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                {config.industry}
              </Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground">{config.title}</h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">{config.description}</p>
          </div>

          {/* Progress Bar */}
          <div className="mx-auto mb-12 max-w-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {revenueSteps.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(((currentStep + 1) / revenueSteps.length) * 100)}% Complete
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-secondary">
              <div
                className="h-2 rounded-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / revenueSteps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="mx-auto max-w-2xl">
            <Card
              className={`border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                isTransitioning ? "scale-95 transform opacity-0" : "scale-100 transform opacity-100"
              }`}
            >
              <CardHeader className="pb-8 text-center">
                <CardTitle className="mb-2 text-2xl">{currentStepConfig.title}</CardTitle>
                <CardDescription className="text-lg">
                  {currentStepConfig.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Current Value Display */}
                <div className="text-center">
                  <div className="mb-2 text-5xl font-bold text-primary transition-all duration-300">
                    {currentStepConfig.format(currentValue)}
                  </div>
                </div>

                {/* Slider */}
                <div className="space-y-6">
                  <Slider
                    value={[currentValue]}
                    onValueChange={handleSliderChange}
                    max={currentStepConfig.max}
                    min={currentStepConfig.min}
                    step={currentStepConfig.step}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{currentStepConfig.format(currentStepConfig.min)}</span>
                    <span>{currentStepConfig.format(currentStepConfig.max)}</span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    disabled={currentStep === 0 || isTransitioning}
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={isTransitioning}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                  >
                    {currentStep === revenueSteps.length - 1 ? "Calculate Results" : "Next"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </div>
    );
  }

  // Results View
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Calculator className="h-8 w-8 text-primary" />
            <Badge variant="secondary" className="text-sm">
              {config.industry}
            </Badge>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground">{config.title}</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">{config.description}</p>
        </div>

        <div className="mx-auto space-y-8">
          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                  <span className="text-sm font-medium text-destructive">Monthly Revenue Loss</span>
                </div>
                <div className="text-3xl font-bold text-destructive">
                  {formatCurrency(summaryData.monthlyLoss)}
                </div>
              </CardContent>
            </Card>
            <Card className="border-orange-500/20 bg-orange-500/5">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-600">Loss Percentage</span>
                </div>
                <div className="text-3xl font-bold text-orange-600">
                  {formatNumber(summaryData.lossPercentage)}%
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Annual Revenue Loss</span>
                </div>
                <div className="text-3xl font-bold text-primary">
                  {formatCurrency(summaryData.fullYear.revenueLost)}
                </div>
              </CardContent>
            </Card>
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent-foreground" />
                  <span className="text-sm font-medium text-accent-foreground">ROI Impact</span>
                </div>
                <div className="text-3xl font-bold text-accent-foreground">
                  {formatNumber(summaryData.roiImpact)}%
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Detailed Results Table */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Monthly Revenue Loss Analysis</CardTitle>
                <CardDescription>
                  Month-by-month breakdown of revenue loss over 12 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Month</TableHead>
                        <TableHead className="text-right">Revenue Before</TableHead>
                        <TableHead className="text-right">Revenue After</TableHead>
                        <TableHead className="text-right">Monthly Loss</TableHead>
                        <TableHead className="hidden text-right md:table-cell">Loss %</TableHead>
                        <TableHead className="hidden text-right md:table-cell">
                          Cumulative Loss
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {calculations.map((calc, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">M{calc.month}</TableCell>
                          <TableCell className="text-right text-green-600">
                            {formatCurrency(inputs.revenueBefore)}
                          </TableCell>
                          <TableCell className="text-right text-orange-600">
                            {formatCurrency(calc.revenueAfterRestrictions)}
                          </TableCell>
                          <TableCell className="text-right font-medium text-destructive">
                            {formatCurrency(calc.revenueLost)}
                          </TableCell>
                          <TableCell className="hidden text-right text-destructive md:table-cell">
                            {formatNumber(calc.revenueLossPercent)}%
                          </TableCell>
                          <TableCell className="hidden text-right font-bold text-destructive md:table-cell">
                            {formatCurrency(calc.cumulativeRevenueLost)}
                          </TableCell>
                        </TableRow>
                      ))}

                      {/* Summary Rows */}
                      <TableRow className="border-t-2 border-t-primary/20 bg-muted/50">
                        <TableCell className="font-bold text-primary">Total Year</TableCell>
                        <TableCell className="text-right font-bold text-green-600">
                          {formatCurrency(inputs.revenueBefore * 12)}
                        </TableCell>
                        <TableCell className="text-right font-bold text-orange-600">
                          {formatCurrency(
                            calculations.reduce(
                              (sum, calc) => sum + calc.revenueAfterRestrictions,
                              0,
                            ),
                          )}
                        </TableCell>
                        <TableCell className="text-right text-lg font-bold text-destructive">
                          {formatCurrency(summaryData.fullYear.revenueLost)}
                        </TableCell>
                        <TableCell className="hidden text-right font-bold text-destructive md:table-cell">
                          {formatNumber(summaryData.fullYear.avgRevenueLoss)}%
                        </TableCell>
                        <TableCell className="hidden text-right text-lg font-bold text-destructive md:table-cell">
                          {formatCurrency(summaryData.fullYear.revenueLost)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Calculator Inputs
                </CardTitle>
                <CardDescription>Adjust your revenue metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="adSpend">Monthly Ad Spend (USD)</Label>
                  <Input
                    id="adSpend"
                    type="number"
                    value={inputs.adSpend}
                    onChange={(e) => handleInputChange("adSpend", e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="revenueBefore">Revenue Before Restrictions (USD)</Label>
                  <Input
                    id="revenueBefore"
                    type="number"
                    value={inputs.revenueBefore}
                    onChange={(e) => handleInputChange("revenueBefore", e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="revenueAfter">Revenue After Restrictions (USD)</Label>
                  <Input
                    id="revenueAfter"
                    type="number"
                    value={inputs.revenueAfter}
                    onChange={(e) => handleInputChange("revenueAfter", e.target.value)}
                    className="text-lg"
                  />
                </div>
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="w-full bg-transparent"
                >
                  Start Over
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Urgency Message */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                <div>
                  <h3 className="mb-2 font-semibold text-destructive">The Cost of Inaction</h3>
                  <p className="text-destructive/90">
                    {config.urgencyMessage ||
                      "Every month you delay action, your revenue loss compounds. Take action now to protect your business growth."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
      <TrackingComparisonTable />
    </div>
  );
}
