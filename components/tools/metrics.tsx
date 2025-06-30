import React from "react";
import { DollarSign, Target, Users } from "lucide-react";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BusinessMetrics } from "@/utils/business-calculator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

interface ProjectionTableProps {
  metrics: BusinessMetrics[];
}
const MILESTONES = [
  { label: "Initial", months: 0 },
  { label: "3 Months", months: 3 },
  { label: "6 Months", months: 6 },
  { label: "1 Year", months: 12 },
  { label: "2 Years", months: 24 },
  { label: "3 Years", months: 36 },
  { label: "5 Years", months: 60 },
];

export const ProjectionTable: React.FC<ProjectionTableProps> = ({ metrics }) => {
  const formatNumber = (num: number) => Math.round(num).toLocaleString();

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="bg-background sticky left-0">Milestone</TableHead>
          <TableHead>Income</TableHead>
          <TableHead>Expenses</TableHead>
          <TableHead>Net Profit</TableHead>
          <TableHead className="hidden sm:table-cell">LTGP</TableHead>
          <TableHead className="hidden sm:table-cell">CAC</TableHead>
          <TableHead>Contracts</TableHead>
          <TableHead className="hidden md:table-cell">Projects</TableHead>
          <TableHead className="hidden md:table-cell">Employees</TableHead>
          <TableHead className="hidden md:table-cell">Team Leads</TableHead>
          <TableHead className="hidden md:table-cell">2nd Level</TableHead>
          <TableHead className="hidden md:table-cell">3rd Level</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {MILESTONES.map(({ label, months }) => {
          const milestone = metrics[Math.min(months, metrics.length - 1)];
          if (!milestone) return null;
          return (
            <TableRow key={label} className="">
              <TableCell className="bg-background sticky left-0">{label}</TableCell>
              <TableCell>${formatNumber(milestone.income)}</TableCell>
              <TableCell>${formatNumber(milestone.expenses)}</TableCell>
              <TableCell>${formatNumber(milestone.netProfit)}</TableCell>
              <TableCell className="hidden sm:table-cell">
                ${formatNumber(milestone.ltgp)}
              </TableCell>
              <TableCell className="hidden sm:table-cell">${formatNumber(milestone.cac)}</TableCell>
              <TableCell>{formatNumber(milestone.contracts)}</TableCell>
              <TableCell className="hidden md:table-cell">
                {formatNumber(milestone.projects)}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {formatNumber(milestone.employees)}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {formatNumber(milestone.teamLeads)}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {formatNumber(milestone.secondLevelLeaders)}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {formatNumber(milestone.thirdLevelLeaders)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

interface MilestoneMetricsProps {
  metrics: BusinessMetrics[];
}

export const MetricItem: React.FC<{
  label: string;
  value: string | number;
}> = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-muted-foreground text-sm">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export const MetricInput: React.FC<{
  label: string;
  value: number;
  onChange: (value: number) => void;
}> = ({ label, value, onChange }) => (
  <div>
    <label className="mb-1 block text-sm font-medium">{label}</label>
    <Input
      type="number"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full"
    />
  </div>
);

export const MetricCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <Card className="p-4">
    <div className="flex items-center space-x-2">
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </div>
    <div className="mt-4 space-y-2">{children}</div>
  </Card>
);

export const ProjectionChart: React.FC<{
  data: any[];
  title: string;
}> = ({ data, title }) => (
  <Card className="p-4">
    <div className="mb-4 flex items-center space-x-2">
      <h3 className="font-semibold">{title}</h3>
    </div>
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" interval={Math.floor(data.length / 10)} />
          <YAxis yAxisId="left" tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(value) => `${Math.round(value)}`}
          />
          <Tooltip
            formatter={(value: number, name: string) => {
              if (["income", "expenses", "netProfit"].includes(name)) {
                return [`$${Math.round(value).toLocaleString()}`, name];
              }
              return [Math.round(value), name];
            }}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="income"
            stroke="hsl(var(--primary))"
            name="Income"
            dot={false}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="expenses"
            stroke="hsl(var(--destructive))"
            name="Expenses"
            dot={false}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="netProfit"
            stroke="hsl(var(--secondary))"
            name="Net Profit"
            dot={false}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="contracts"
            stroke="hsl(var(--accent))"
            name="Contracts"
            dot={false}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="employees"
            stroke="hsl(var(--muted))"
            name="Employees"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

export const MoneyUsagePieChart: React.FC<{
  income: number;
  expenses: number;
  marketing: number;
  operations: number;
}> = ({ income, expenses, marketing, operations }) => {
  const netProfit = income - expenses;
  const data = [
    { name: "Net Profit", value: netProfit },
    { name: "Marketing", value: marketing },
    { name: "Operations", value: operations },
    { name: "Other Expenses", value: expenses - marketing - operations },
  ];

  const COLORS = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))",
    "hsl(var(--accent))",
    "hsl(var(--muted))",
  ];

  return (
    <Card className="p-4">
      <div className="mb-4 flex items-center space-x-2">
        <h3 className="font-semibold">Money Usage</h3>
      </div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number | string) =>
                typeof value === "number" ? Math.round(value).toLocaleString() : value
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
interface MilestoneMetricsProps {
  metrics: BusinessMetrics[];
}

export const MilestoneMetrics: React.FC<MilestoneMetricsProps> = ({ metrics }) => {
  const getMilestoneMetrics = (months: number) => {
    return metrics[Math.min(months, metrics.length - 1)];
  };

  return (
    <div className="space-y-8">
      {MILESTONES.map(({ label, months }) => {
        const milestone = getMilestoneMetrics(months);
        if (!milestone) return null;
        return (
          <div key={label} className="space-y-4">
            <h3 className="text-lg font-semibold">{label}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <MetricCard
                title="Financial Metrics"
                icon={<DollarSign className="text-primary h-4 w-4" />}
              >
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Income</span>
                    <span className="font-medium">
                      ${Math.round(milestone.income).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Expenses</span>
                    <span className="font-medium">
                      ${Math.round(milestone.expenses).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Marketing</span>
                    <span className="font-medium">
                      ${Math.round(milestone.marketing).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Operations</span>
                    <span className="font-medium">
                      ${Math.round(milestone.operations).toLocaleString()}
                    </span>
                  </div>
                </div>
              </MetricCard>{" "}
              <MetricCard
                title="Business Metrics"
                icon={<Target className="text-secondary h-4 w-4" />}
              >
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Contracts</span>
                    <span className="font-medium">{Math.round(milestone.contracts)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Projects</span>
                    <span className="font-medium">{Math.round(milestone.projects)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">CAC</span>
                    <span className="font-medium">${Math.round(milestone.cac)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">LTV:CAC</span>
                    <span className="font-medium">{Math.round(milestone.ltvCac * 100) / 100}</span>
                  </div>
                </div>
              </MetricCard>{" "}
              <MetricCard title="Team Metrics" icon={<Users className="text-accent h-4 w-4" />}>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Employees</span>
                    <span className="font-medium">{Math.round(milestone.employees)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">Team Leads</span>
                    <span className="font-medium">{Math.round(milestone.teamLeads)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">2nd Level Leaders</span>
                    <span className="font-medium">{Math.round(milestone.secondLevelLeaders)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">3rd Level Leaders</span>
                    <span className="font-medium">{Math.round(milestone.thirdLevelLeaders)}</span>
                  </div>
                </div>
              </MetricCard>
            </div>
          </div>
        );
      })}
    </div>
  );
};
