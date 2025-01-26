"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Target,
  ClipboardList,
  Calendar,
  Clock,
  BarChart,
  Scale,
  Download,
  ChevronRight,
  ChevronLeft,
  Settings,
} from "lucide-react";
import Navbar from "@/components/global/navbar";
import YoutubeEmbed from "@/components/global/youtube-embed";
import ContactUs from "@/components/blog/contact-us";

interface Question {
  id: string;
  label: string;
  type: "input" | "textarea" | "checkbox" | "rating" | "list";
  subQuestions?: Question[];
  listItems?: number;
}

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  questions: Question[];
}

const formSections: Section[] = [
  {
    id: "goal-setting",
    title: "Goal Setting",
    icon: Settings,
    questions: [
      {
        id: "million-dollar",
        label: "If you won $1 million today, what would you do differently?",
        type: "textarea",
      },
      {
        id: "six-months",
        label: "If you learned you only had 6 months to live, what would you:",
        type: "textarea",
        subQuestions: [
          {
            id: "stop-doing",
            label: "Stop doing?",
            type: "textarea",
          },
          {
            id: "start-doing",
            label: "Start doing more of?",
            type: "textarea",
          },
          {
            id: "spend-time",
            label: "Who would you spend time with?",
            type: "textarea",
          },
        ],
      },
      {
        id: "no-fail",
        label:
          "If you knew you could not fail, what one great thing would you attempt?",
        type: "textarea",
      },
    ],
  },
  {
    id: "core-goals",
    title: "Core Goals",
    icon: Target,
    questions: [
      {
        id: "personal-goals",
        label: "List your top 3-5 personal/family goals:",
        type: "list",
        listItems: 5,
      },
      {
        id: "business-goals",
        label: "List your top 3-5 professional goals:",
        type: "list",
        listItems: 5,
      },
      {
        id: "development-goals",
        label: "List your top 3-5 self-improvement goals:",
        type: "list",
        listItems: 5,
      },
    ],
  },
  {
    id: "action-planning",
    title: "Action Planning",
    icon: ClipboardList,
    questions: [
      {
        id: "master-plan",
        label: "Select your #1 goal from each category above:",
        type: "input",
        subQuestions: [
          {
            id: "personal-priority",
            label: "Personal/Family:",
            type: "input",
          },
          {
            id: "professional-priority",
            label: "Professional:",
            type: "input",
          },
          {
            id: "development-priority",
            label: "Self-Development:",
            type: "input",
          },
        ],
      },
    ],
  },
  {
    id: "daily-planning",
    title: "Daily Planning ",
    icon: Calendar,
    questions: [
      {
        id: "abcde-method",
        label: "Create your daily to-do list using the ABCDE method:",
        type: "list",
        subQuestions: [
          {
            id: "must-do",
            label: "A (Must do):",
            type: "list",
            listItems: 3,
          },
          {
            id: "should-do",
            label: "B (Should do):",
            type: "list",
            listItems: 3,
          },
          {
            id: "nice-do",
            label: "C (Nice to do):",
            type: "list",
            listItems: 3,
          },
          {
            id: "delegate",
            label: "D (Delegate):",
            type: "list",
            listItems: 3,
          },
          {
            id: "eliminate",
            label: "E (Eliminate):",
            type: "list",
            listItems: 3,
          },
        ],
      },
    ],
  },
  {
    id: "time-analysis",
    title: "Time Analysis",
    icon: Clock,
    questions: [
      {
        id: "time-log",
        label: "Time Log Exercise (Track for one week)",
        type: "input",
        subQuestions: [
          { id: "6-8", label: "6:00 AM - 8:00 AM:", type: "input" },
          { id: "8-10", label: "8:00 AM - 10:00 AM:", type: "input" },
          { id: "10-12", label: "10:00 AM - 12:00 PM:", type: "input" },
          { id: "12-2", label: "12:00 PM - 2:00 PM:", type: "input" },
          { id: "2-4", label: "2:00 PM - 4:00 PM:", type: "input" },
          { id: "4-6", label: "4:00 PM - 6:00 PM:", type: "input" },
          { id: "6-8pm", label: "6:00 PM - 8:00 PM:", type: "input" },
          { id: "8-10pm", label: "8:00 PM - 10:00 PM:", type: "input" },
        ],
      },
    ],
  },
  {
    id: "productivity",
    title: "Productivity ",
    icon: BarChart,
    questions: [
      {
        id: "key-areas",
        label: "List the core functions of your job:",
        type: "list",
        listItems: 5,
      },
      {
        id: "performance-rating",
        label: "Rate your current performance in each (1-10):",
        type: "list",
        listItems: 5,
      },
    ],
  },
  {
    id: "balance",
    title: "Balance",
    icon: Scale,
    questions: [
      {
        id: "life-balance",
        label: "Rate each area (1-10):",
        type: "rating",
        subQuestions: [
          { id: "health", label: "Health & Fitness:", type: "input" },
          { id: "family", label: "Family & Relationships:", type: "input" },
          { id: "career", label: "Career & Work:", type: "input" },
          { id: "financial", label: "Financial Security:", type: "input" },
          { id: "personal", label: "Personal Growth:", type: "input" },
          { id: "spiritual", label: "Spiritual Development:", type: "input" },
          { id: "recreation", label: "Recreation & Fun:", type: "input" },
        ],
      },
    ],
  },
];

interface FormData {
  [key: string]: string | string[];
}

const BusinessTimeManagement: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({});
  const [activeSection, setActiveSection] = useState<string>(
    formSections[0].id,
  );

  useEffect(() => {
    const savedData = localStorage.getItem("businessTimeManagement");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (questionId: string, value: string) => {
    const newFormData = { ...formData, [questionId]: value };
    setFormData(newFormData);
    localStorage.setItem("businessTimeManagement", JSON.stringify(newFormData));
  };

  const handleSidebarClick = (sectionId: string, index: number) => {
    setActiveSection(sectionId);
    setCurrentSection(index);
  };

  const renderQuestion = (question: Question, prefix: string = "") => {
    const id = prefix ? `${prefix}-${question.id}` : question.id;

    return (
      <div key={id} className="space-y-4">
        <label className="text-sm font-medium">{question.label}</label>

        {question.type === "textarea" && (
          <Textarea
            value={(formData[id] as string) || ""}
            onChange={(e) => handleInputChange(id, e.target.value)}
            className="h-32"
          />
        )}

        {question.type === "input" && (
          <Input
            value={(formData[id] as string) || ""}
            onChange={(e) => handleInputChange(id, e.target.value)}
          />
        )}

        {question.type === "list" &&
          Array.from({ length: question.listItems || 1 }).map((_, index) => (
            <div key={`${id}-${index + 1}`} className="flex items-center gap-2">
              <span className="text-sm font-medium">{index + 1}.</span>
              <Input
                value={(formData[`${id}-${index + 1}`] as string) || ""}
                onChange={(e) =>
                  handleInputChange(`${id}-${index + 1}`, e.target.value)
                }
              />
            </div>
          ))}

        {question.subQuestions?.map((sq) => (
          <div key={sq.id} className="ml-4">
            {renderQuestion(sq, id)}
          </div>
        ))}
      </div>
    );
  };

  const downloadResponses = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(formData, null, 2)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = "time-management-plan.json";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <main className="flex bg-background">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid gap-3 lg:grid-cols-[2fr,1fr]">
          <Card className="col-span-1 col-start-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {formSections[currentSection].icon &&
                  React.createElement(formSections[currentSection].icon, {
                    className: "h-6 w-6",
                  })}
                {formSections[currentSection].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {formSections[currentSection].questions.map((question) =>
                  renderQuestion(question),
                )}

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentSection((prev) => Math.max(0, prev - 1))
                    }
                    disabled={currentSection === 0}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>

                  {currentSection === formSections.length - 1 ? (
                    <Button onClick={downloadResponses}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Plan
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        setCurrentSection((prev) =>
                          Math.min(formSections.length - 1, prev + 1),
                        )
                      }
                    >
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How to Use UTM Parameters</CardTitle>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed embedId="9MGpL_AmEYM" />
              </CardContent>
            </Card>
            <div className="sticky top-8">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BusinessTimeManagement;
