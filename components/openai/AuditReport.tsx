import { z } from "zod";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Text from "@/components/ui/text";

interface AuditReportProps {
  report: {
    overview: {
      projectGoals: string;
      summary: string;
      criticalIssues: string[];
    };
    todoList: string[];
    detailedReport: {
      issue: string;
      evidence: string;
      consequences: string;
      solution: string;
    }[];
    summary: {
      keyIssues: string[];
      nextSteps: string[];
    };
  };
}

export function AuditReport({ report }: AuditReportProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Text variant="headingMd" className="mb-2">
                Project Goals
              </Text>
              <Text>{report.overview.projectGoals}</Text>
            </div>
            <div>
              <Text variant="headingMd" className="mb-2">
                Summary
              </Text>
              <Text>{report.overview.summary}</Text>
            </div>
            <div>
              <Text variant="headingMd" className="mb-2">
                Critical Issues
              </Text>
              <ul className="list-disc pl-6">
                {report.overview.criticalIssues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Action Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {report.todoList.map((todo, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`todo-${index}`} />
                <label htmlFor={`todo-${index}`} className="text-sm">
                  {todo}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Audit Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {report.detailedReport.map((item, index) => (
              <div
                key={index}
                className="space-y-4 pb-4 border-b last:border-b-0"
              >
                <div className="space-y-2">
                  <Text variant="headingSm" className="font-medium">
                    Issue {index + 1}
                  </Text>
                  <Text>{item.issue}</Text>
                </div>
                <div className="space-y-2">
                  <Text variant="headingSm" className="font-medium">
                    Evidence
                  </Text>
                  <Text>{item.evidence}</Text>
                </div>
                <div className="space-y-2">
                  <Text variant="headingSm" className="font-medium">
                    Consequences
                  </Text>
                  <Text>{item.consequences}</Text>
                </div>
                <div className="space-y-2">
                  <Text variant="headingSm" className="font-medium">
                    Solution
                  </Text>
                  <Text>{item.solution}</Text>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Text variant="headingMd" className="mb-2">
                Key Issues
              </Text>
              <ul className="list-disc pl-6">
                {report.summary.keyIssues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
            <div>
              <Text variant="headingMd" className="mb-2">
                Next Steps
              </Text>
              <ul className="list-disc pl-6">
                {report.summary.nextSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
