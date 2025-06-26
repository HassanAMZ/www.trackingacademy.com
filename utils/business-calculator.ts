export interface BusinessMetrics {
  contracts: number;
  projects: number;
  income: number;
  expenses: number;
  marketing: number;
  operations: number;
  cac: number;
  ltgp: number;
  ltvCac: number;
  employees: number;
  teamLeads: number;
  secondLevelLeaders: number;
  thirdLevelLeaders: number;
  executiveTeam: number;
  ceo: number;
  netProfit: number;
}

export interface BusinessParams {
  clientContracts: number;
  clientProjects: number;
  clientIncome: number;
  clientExpenses: number;
  clientMarketing: number;
  clientOperations: number;
  clientCac: number;
  clientLtgp: number;
  agencyContracts: number;
  agencyProjects: number;
  agencyIncome: number;
  agencyExpenses: number;
  agencyMarketing: number;
  agencyOperations: number;
  agencyCac: number;
  agencyLtgp: number;
  initialEmployees: number;
  employeesPerTeamLead: number;
  teamLeadsPerSecondLevel: number;
  secondLevelPerThirdLevel: number;
  thirdLevelPerExecutive: number;
  executivesPerCEO: number;
}

export const DEFAULT_BUSINESS_PARAMS: BusinessParams = {
  clientContracts: 55,
  clientProjects: 55,
  clientIncome: 25209,
  clientExpenses: 10360,
  clientMarketing: 6185,
  clientOperations: 3219,
  clientCac: 112,
  clientLtgp: 400,
  agencyContracts: 9,
  agencyProjects: 28,
  agencyIncome: 9894,
  agencyExpenses: 1695,
  agencyMarketing: 1012,
  agencyOperations: 1639,
  agencyCac: 112,
  agencyLtgp: 917,
  initialEmployees: 3,
  employeesPerTeamLead: 5,
  teamLeadsPerSecondLevel: 3,
  secondLevelPerThirdLevel: 3,
  thirdLevelPerExecutive: 3,
  executivesPerCEO: 3,
};

export function calculateBusinessMetrics(
  monthsToProject: number,
  growthRate: number,
  params: BusinessParams,
): BusinessMetrics[] {
  const metrics: BusinessMetrics[] = [];

  let currentMetrics = {
    contracts: params.clientContracts + params.agencyContracts,
    projects: params.clientProjects + params.agencyProjects,
    income: params.clientIncome + params.agencyIncome,
    expenses: params.clientExpenses + params.agencyExpenses,
    marketing: params.clientMarketing + params.agencyMarketing,
    operations: params.clientOperations + params.agencyOperations,
    cac:
      (params.clientCac * params.clientContracts + params.agencyCac * params.agencyContracts) /
      (params.clientContracts + params.agencyContracts),
    ltgp:
      (params.clientLtgp * params.clientContracts + params.agencyLtgp * params.agencyContracts) /
      (params.clientContracts + params.agencyContracts),
    ltvCac: 0, // Initialize with 0, will be calculated in the loop
    employees: params.initialEmployees,
    teamLeads: 0,
    secondLevelLeaders: 0,
    thirdLevelLeaders: 0,
    executiveTeam: 0,
    ceo: 0,
    netProfit:
      params.clientIncome + params.agencyIncome - (params.clientExpenses + params.agencyExpenses),
  };

  for (let month = 0; month <= monthsToProject; month++) {
    // Calculate leadership structure
    currentMetrics.teamLeads = Math.floor(currentMetrics.employees / params.employeesPerTeamLead);
    currentMetrics.secondLevelLeaders = Math.floor(
      currentMetrics.teamLeads / params.teamLeadsPerSecondLevel,
    );
    currentMetrics.thirdLevelLeaders = Math.floor(
      currentMetrics.secondLevelLeaders / params.secondLevelPerThirdLevel,
    );
    currentMetrics.executiveTeam = Math.floor(
      currentMetrics.thirdLevelLeaders / params.thirdLevelPerExecutive,
    );
    currentMetrics.ceo = Math.floor(currentMetrics.executiveTeam / params.executivesPerCEO); // Calculate LTV:CAC
    currentMetrics.ltvCac = currentMetrics.ltgp / currentMetrics.cac;
    metrics.push({ ...currentMetrics }); // Apply growth for next month
    const growthFactor = 1 + growthRate;
    currentMetrics.contracts *= growthFactor;
    currentMetrics.projects *= growthFactor;
    currentMetrics.income *= growthFactor;
    currentMetrics.expenses *= growthFactor;
    currentMetrics.marketing *= growthFactor;
    currentMetrics.operations *= growthFactor;
    currentMetrics.employees = Math.ceil(currentMetrics.employees * growthFactor);
    currentMetrics.netProfit = currentMetrics.income - currentMetrics.expenses;
  }

  return metrics;
}
