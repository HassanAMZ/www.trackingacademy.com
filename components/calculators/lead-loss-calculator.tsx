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
import { sendGTMEvent } from "@next/third-parties/google";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calculator,
  DollarSign,
  TrendingDown,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import TrackingSolutionsComparison from "../global/tracking-solutions-comparison";
import Container from "../ui/container";

interface CalculatorInputs {
  adSpend: number;
  leadsBefore: number;
  leadsAfter: number;
  conversionRate: number;
  avgRevenuePerBuyer: number;
}

interface CalculationResult {
  month: number;
  leadsLost: number;
  leadLossPercent: number;
  clientsLost: number;
  clientLossPercent: number;
  revenueLost: number;
  leadsAfterRestrictions: number;
  cumulativeRevenueLost: number;
}

export interface CalculatorConfig {
  title: string;
  description: string;
  leadLabel: string;
  clientLabel: string;
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

export default function CalculatorComponent({ config }: CalculatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [inputs, setInputs] = useState<CalculatorInputs>({
    adSpend: 5000,
    leadsBefore: 100,
    leadsAfter: 60,
    conversionRate: 25,
    avgRevenuePerBuyer: 2000,
  });

  useEffect(() => {
    sendGTMEvent({
      event: "gtm_custom_event",
      datalayer_event_name: "business_calculator_loaded",
    });
  }, []);

  const businessSteps: StepConfig[] = [
    {
      key: "adSpend",
      title: "Monthly Ad Spend",
      description: "How much do you spend on advertising each month?",
      min: 1000,
      max: 50000,
      step: 250,
      format: (value: number) => `$${value.toLocaleString()}`,
    },
    {
      key: "leadsBefore",
      title: `${config.leadLabel} Before Restrictions`,
      description: `How many ${config.leadLabel.toLowerCase()} were you generating monthly before restrictions?`,
      min: 10,
      max: 5000,
      step: 5,
      format: (value: number) => value.toString(),
    },
    {
      key: "leadsAfter",
      title: `${config.leadLabel} After Restrictions`,
      description: `How many ${config.leadLabel.toLowerCase()} are you getting now in month 1?`,
      min: 5,
      max: 5000,
      step: 5,
      format: (value: number) => value.toString(),
    },
    {
      key: "conversionRate",
      title: "Conversion Rate",
      description: `What percentage of ${config.leadLabel.toLowerCase()} convert to paying customers?`,
      min: 5,
      max: 80,
      step: 1,
      format: (value: number) => `${value}%`,
    },
    {
      key: "avgRevenuePerBuyer",
      title: "Average Revenue per Customer",
      description: `What's the average revenue you generate per ${config.clientLabel.toLowerCase()}?`,
      min: 100,
      max: 10000,
      step: 100,
      format: (value: number) => `$${value.toLocaleString()}`,
    },
  ];

  const calculations = useMemo(() => {
    const results: CalculationResult[] = [];
    const totalPotentialClients = inputs.leadsBefore * (inputs.conversionRate / 100);
    let cumulativeRevenueLost = 0;

    for (let month = 1; month <= 12; month++) {
      const leadsAfterRestrictions =
        month === 1 ? inputs.leadsAfter : inputs.leadsAfter * Math.pow(0.9, month - 1);
      const leadsLost = inputs.leadsBefore - leadsAfterRestrictions;
      const leadLossPercent = (leadsLost / inputs.leadsBefore) * 100;
      const clientsLost = leadsLost * (inputs.conversionRate / 100);
      const clientLossPercent = (clientsLost / totalPotentialClients) * 100;
      const revenueLost = clientsLost * inputs.avgRevenuePerBuyer;

      cumulativeRevenueLost += revenueLost;

      results.push({
        month,
        leadsLost,
        leadLossPercent,
        clientsLost,
        clientLossPercent,
        revenueLost,
        leadsAfterRestrictions,
        cumulativeRevenueLost,
      });
    }
    return results;
  }, [inputs]);

  const summaryData = useMemo(() => {
    const quarter = calculations.slice(0, 3);
    const revenueBefore =
      inputs.leadsBefore * (inputs.conversionRate / 100) * inputs.avgRevenuePerBuyer;
    const revenueNow =
      inputs.leadsAfter * (inputs.conversionRate / 100) * inputs.avgRevenuePerBuyer;

    return {
      quarter: {
        leadsLost: quarter.reduce((sum, r) => sum + r.leadsLost, 0),
        clientsLost: quarter.reduce((sum, r) => sum + r.clientsLost, 0),
        revenueLost: quarter.reduce((sum, r) => sum + r.revenueLost, 0),
        avgLeadLoss: quarter.reduce((sum, r) => sum + r.leadLossPercent, 0) / 3,
        avgClientLoss: quarter.reduce((sum, r) => sum + r.clientLossPercent, 0) / 3,
      },
      fullYear: {
        revenueLost: calculations.reduce((sum, calc) => sum + calc.revenueLost, 0),
      },
      revenueBefore,
      revenueNow,
    };
  }, [calculations, inputs]);

  const handleSliderChange = (value: number[]) => {
    const currentStepConfig = businessSteps[currentStep];
    setInputs((prev) => ({ ...prev, [currentStepConfig.key]: value[0] }));
  };

  const handleNext = async () => {
    if (currentStep === 0) {
      // Fire start event on first step
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "business_calculator_start",
      });
    }

    setIsTransitioning(true);

    setTimeout(() => {
      if (currentStep < businessSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Fire completed event
        sendGTMEvent({
          event: "gtm_custom_event",
          datalayer_event_name: "business_calculator_completed",
        });
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
      leadsBefore: 100,
      leadsAfter: 60,
      conversionRate: 25,
      avgRevenuePerBuyer: 2000,
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
    const currentStepConfig = businessSteps[currentStep];
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
                Step {currentStep + 1} of {businessSteps.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(((currentStep + 1) / businessSteps.length) * 100)}% Complete
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-secondary">
              <div
                className="h-2 rounded-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / businessSteps.length) * 100}%` }}
              ></div>
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
                    {currentStep === businessSteps.length - 1 ? "Calculate Results" : "Next"}
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

        <Container className="grid gap-8">
          {/* Results Section */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-destructive" />
                    <span className="text-sm font-medium text-destructive">
                      Year 1 Revenue Loss
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-destructive">
                    {formatCurrency(calculations.reduce((sum, calc) => sum + calc.revenueLost, 0))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {config.clientLabel} Lost (Year)
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {formatNumber(calculations.reduce((sum, calc) => sum + calc.clientsLost, 0))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-accent-foreground" />
                    <span className="text-sm font-medium text-accent-foreground">
                      Avg Lead Loss %
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-accent-foreground">
                    {(() => {
                      const totalLeadsLost = calculations.reduce(
                        (sum, calc) => sum + calc.leadsLost,
                        0,
                      );
                      const totalLeadsBefore = calculations.reduce(
                        (sum, calc) => sum + calc.leadsAfterRestrictions,
                        0,
                      );
                      return totalLeadsLost > 0
                        ? formatNumber((totalLeadsLost / (totalLeadsLost + totalLeadsBefore)) * 100)
                        : "0";
                    })()}
                    %
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Detailed Results Table */}
            <Card>
              <CardHeader className="md:text-center">
                <CardTitle>Monthly Revenue Impact Analysis</CardTitle>
                <CardDescription>
                  Month-by-month breakdown of revenue loss and business impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="">Month</TableHead>
                        <TableHead className="hidden text-right md:table-cell">
                          {config.leadLabel} Before
                        </TableHead>
                        <TableHead className="hidden text-right md:table-cell">
                          {config.leadLabel} After
                        </TableHead>
                        <TableHead className="text-right">{config.leadLabel} Lost</TableHead>
                        <TableHead className="hidden text-right md:table-cell">
                          {config.clientLabel} Lost
                        </TableHead>
                        <TableHead className="hidden text-right md:table-cell">
                          Revenue Before
                        </TableHead>
                        <TableHead className="hidden text-right md:table-cell">
                          Revenue After
                        </TableHead>
                        <TableHead className="text-right">Revenue Lost</TableHead>
                        <TableHead className="hidden text-right md:table-cell">
                          Cumulative Loss
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {calculations.slice(0, 12).map((calc, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">M{calc.month}</TableCell>
                          <TableCell className="hidden text-right md:table-cell">
                            {formatNumber(inputs.leadsBefore)}
                          </TableCell>
                          <TableCell className="hidden text-right md:table-cell">
                            {formatNumber(calc.leadsAfterRestrictions)}
                          </TableCell>
                          <TableCell className="text-right text-destructive">
                            {formatNumber(calc.leadsLost)}
                          </TableCell>
                          <TableCell className="hidden text-right text-destructive md:table-cell">
                            {formatNumber(calc.clientsLost)}
                          </TableCell>
                          <TableCell className="hidden text-right text-green-600 md:table-cell">
                            {formatCurrency(summaryData.revenueBefore)}
                          </TableCell>
                          <TableCell className="hidden text-right text-orange-600 md:table-cell">
                            {formatCurrency(
                              calc.leadsAfterRestrictions *
                                (inputs.conversionRate / 100) *
                                inputs.avgRevenuePerBuyer,
                            )}
                          </TableCell>
                          <TableCell className="text-right font-medium text-destructive">
                            {formatCurrency(calc.revenueLost)}
                          </TableCell>
                          <TableCell className="hidden text-right font-bold text-destructive md:table-cell">
                            {formatCurrency(calc.cumulativeRevenueLost)}
                          </TableCell>
                        </TableRow>
                      ))}

                      {/* Summary Rows */}
                      <TableRow className="border-t-2 border-t-muted bg-muted/30">
                        <TableCell className="font-bold">Q1 Total</TableCell>
                        <TableCell className="hidden text-right font-medium md:table-cell">
                          {formatNumber(inputs.leadsBefore * 3)}
                        </TableCell>
                        <TableCell className="hidden text-right font-medium md:table-cell">
                          {formatNumber(
                            calculations
                              .slice(0, 3)
                              .reduce((sum, calc) => sum + calc.leadsAfterRestrictions, 0),
                          )}
                        </TableCell>
                        <TableCell className="text-right font-bold text-destructive">
                          {formatNumber(
                            calculations.slice(0, 3).reduce((sum, calc) => sum + calc.leadsLost, 0),
                          )}
                        </TableCell>
                        <TableCell className="hidden text-right font-bold text-destructive md:table-cell">
                          {formatNumber(
                            calculations
                              .slice(0, 3)
                              .reduce((sum, calc) => sum + calc.clientsLost, 0),
                          )}
                        </TableCell>
                        <TableCell className="hidden text-right font-medium text-green-600 md:table-cell">
                          {formatCurrency(summaryData.revenueBefore * 3)}
                        </TableCell>
                        <TableCell className="hidden text-right font-medium text-orange-600 md:table-cell">
                          {formatCurrency(
                            calculations
                              .slice(0, 3)
                              .reduce(
                                (sum, calc) =>
                                  sum +
                                  calc.leadsAfterRestrictions *
                                    (inputs.conversionRate / 100) *
                                    inputs.avgRevenuePerBuyer,
                                0,
                              ),
                          )}
                        </TableCell>
                        <TableCell className="text-right font-bold text-destructive">
                          {formatCurrency(
                            calculations
                              .slice(0, 3)
                              .reduce((sum, calc) => sum + calc.revenueLost, 0),
                          )}
                        </TableCell>
                        <TableCell className="hidden text-right text-lg font-bold text-destructive md:table-cell">
                          {formatCurrency(calculations[2].cumulativeRevenueLost)}
                        </TableCell>
                      </TableRow>

                      <TableRow className="bg-muted/30">
                        <TableCell className="font-bold">Q1-Q2</TableCell>
                        <TableCell className="hidden text-right font-medium md:table-cell">
                          {formatNumber(inputs.leadsBefore * 6)}
                        </TableCell>
                        <TableCell className="hidden text-right font-medium md:table-cell">
                          {formatNumber(
                            calculations
                              .slice(0, 6)
                              .reduce((sum, calc) => sum + calc.leadsAfterRestrictions, 0),
                          )}
                        </TableCell>
                        <TableCell className="text-right font-bold text-destructive">
                          {formatNumber(
                            calculations.slice(0, 6).reduce((sum, calc) => sum + calc.leadsLost, 0),
                          )}
                        </TableCell>
                        <TableCell className="hidden text-right font-bold text-destructive md:table-cell">
                          {formatNumber(
                            calculations
                              .slice(0, 6)
                              .reduce((sum, calc) => sum + calc.clientsLost, 0),
                          )}
                        </TableCell>
                        <TableCell className="hidden text-right font-medium text-green-600 md:table-cell">
                          {formatCurrency(summaryData.revenueBefore * 6)}
                        </TableCell>
                        <TableCell className="hidden text-right font-medium text-orange-600 md:table-cell">
                          {formatCurrency(
                            calculations
                              .slice(0, 6)
                              .reduce(
                                (sum, calc) =>
                                  sum +
                                  calc.leadsAfterRestrictions *
                                    (inputs.conversionRate / 100) *
                                    inputs.avgRevenuePerBuyer,
                                0,
                              ),
                          )}
                        </TableCell>
                        <TableCell className="text-right font-bold text-destructive">
                          {formatCurrency(
                            calculations
                              .slice(0, 6)
                              .reduce((sum, calc) => sum + calc.revenueLost, 0),
                          )}
                        </TableCell>
                        <TableCell className="hidden text-right font-bold text-destructive md:table-cell">
                          {formatCurrency(calculations[5].cumulativeRevenueLost)}
                        </TableCell>
                      </TableRow>

                      <TableRow className="border-t-2 border-t-primary/20 bg-muted/50">
                        <TableCell className="font-bold text-primary">Full Year</TableCell>
                        <TableCell className="hidden text-right font-bold text-primary md:table-cell">
                          {formatNumber(inputs.leadsBefore * 12)}
                        </TableCell>
                        <TableCell className="hidden text-right font-bold text-primary md:table-cell">
                          {formatNumber(
                            calculations.reduce(
                              (sum, calc) => sum + calc.leadsAfterRestrictions,
                              0,
                            ),
                          )}
                        </TableCell>
                        <TableCell className="text-right text-lg font-bold text-destructive">
                          {formatNumber(
                            calculations.reduce((sum, calc) => sum + calc.leadsLost, 0),
                          )}
                        </TableCell>
                        <TableCell className="hidden text-right text-lg font-bold text-destructive md:table-cell">
                          {formatNumber(
                            calculations.reduce((sum, calc) => sum + calc.clientsLost, 0),
                          )}
                        </TableCell>
                        <TableCell className="hidden text-right font-bold text-green-600 md:table-cell">
                          {formatCurrency(summaryData.revenueBefore * 12)}
                        </TableCell>
                        <TableCell className="hidden text-right font-bold text-orange-600 md:table-cell">
                          {formatCurrency(
                            calculations.reduce(
                              (sum, calc) =>
                                sum +
                                calc.leadsAfterRestrictions *
                                  (inputs.conversionRate / 100) *
                                  inputs.avgRevenuePerBuyer,
                              0,
                            ),
                          )}
                        </TableCell>
                        <TableCell className="text-right text-lg font-bold text-destructive">
                          {formatCurrency(
                            calculations.reduce((sum, calc) => sum + calc.revenueLost, 0),
                          )}
                        </TableCell>
                        <TableCell className="hidden text-right text-lg font-bold text-destructive md:table-cell">
                          {formatCurrency(calculations[11].cumulativeRevenueLost)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Input Section */}
          <Container className="max-w-lg">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Calculator Inputs
                </CardTitle>
                <CardDescription>
                  Enter your current advertising and conversion metrics
                </CardDescription>
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
                  <Label htmlFor="leadsBefore">{config.leadLabel} Before Restrictions</Label>
                  <Input
                    id="leadsBefore"
                    type="number"
                    value={inputs.leadsBefore}
                    onChange={(e) => handleInputChange("leadsBefore", e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="leadsAfter">
                    {config.leadLabel} After Restrictions (Month 1)
                  </Label>
                  <Input
                    id="leadsAfter"
                    type="number"
                    value={inputs.leadsAfter}
                    onChange={(e) => handleInputChange("leadsAfter", e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="conversionRate">Conversion Rate (%)</Label>
                  <Input
                    id="conversionRate"
                    type="number"
                    value={inputs.conversionRate}
                    onChange={(e) => handleInputChange("conversionRate", e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="avgRevenuePerBuyer">
                    Average Revenue per {config.clientLabel.split(" ")[1]} (USD)
                  </Label>
                  <Input
                    id="avgRevenuePerBuyer"
                    type="number"
                    value={inputs.avgRevenuePerBuyer}
                    onChange={(e) => handleInputChange("avgRevenuePerBuyer", e.target.value)}
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
          </Container>
        </Container>
      </Container>
      <TrackingSolutionsComparison />
    </div>
  );
}
