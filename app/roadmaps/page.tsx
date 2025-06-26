import Container from "@/components/ui/container";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Award,
  ChartNoAxesCombined,
  ChartSpline,
  Code,
  Globe,
  Layers,
  PieChart,
  Play,
  Shield,
} from "lucide-react";
import React from "react";

interface roadmapDataProps {
  category: string;
  details: string[];
  icon: React.ElementType;
}

const roadmapData: roadmapDataProps[] = [
  {
    category: "Start Here",
    details: ["Introduction to Web Analytics"],
    icon: Play,
  },
  {
    category: "Web Fundamentals",
    details: [
      "HTML5 structure and semantics",
      "CSS3 for web layout",
      "Responsive web design principles",
      "Browser rendering and DOM manipulation",
    ],
    icon: Globe,
  },
  {
    category: "JavaScript (ES6+)",
    details: [
      "Variables, data types",
      "Functions and scope",
      "Promises and async programming",
      "Object-oriented programming",
      "JSON",
      "APIs",
      "HTTP/HTTPS protocols",
      "Web request lifecycle",
    ],
    icon: Code,
  },
  {
    category: "Tracking Concepts",
    details: [
      "Web analytics fundamentals",
      "Tracking methodologies",
      "Session tracking",
      "User journey mapping",
      "Conversion tracking principles",
    ],
    icon: MagnifyingGlassIcon,
  },
  {
    category: "Metrics and KPIs",
    details: [
      "User acquisition metrics",
      "Engagement metrics",
      "Conversion metrics",
      "Customer lifetime value (CLV)",
      "Funnel analysis",
    ],
    icon: PieChart,
  },
  {
    category: "Tag Managers",
    details: [
      "Interface navigation",
      "Container setup",
      "Tag types",
      "Triggers and variables",
      "Debug mode",
      "Version management",
    ],
    icon: Layers,
  },
  {
    category: "Web Analytics Platforms",
    details: [
      "Google Analytics (Universal & GA4)",
      "Adobe Analytics",
      "Mixpanel",
      "Amplitude",
      "Heap",
      "Piwik PRO",
    ],
    icon: ChartSpline,
  },
  {
    category: "Advanced Analytics Features",
    details: [
      "Custom dimensions",
      "Custom metrics",
      "Enhanced eCommerce tracking",
      "Cross-domain tracking",
      "User ID tracking",
    ],
    icon: ChartNoAxesCombined,
  },
  {
    category: "Client-Side Tracking",
    details: [
      "JavaScript event tracking",
      "Data layer implementation",
      "Custom event creation",
      "Performance optimization",
      "Browser compatibility",
    ],
    icon: Code,
  },
  {
    category: "Server-Side Tracking",
    details: [
      "Server-side tagging",
      "Cloud-based tracking solutions",
      "Reduced client-side load",
      "Enhanced privacy compliance",
      "Performance improvements",
    ],
    icon: Shield,
  },
  {
    category: "Legal Frameworks",
    details: [
      "GDPR compliance",
      "CCPA regulations",
      "PECR guidelines",
      "Cookie consent management",
      "Data protection principles",
    ],
    icon: Shield,
  },
  {
    category: "Privacy Technologies",
    details: [
      "Consent management platforms",
      "Anonymous tracking techniques",
      "Data anonymization",
      "Client-side vs server-side privacy",
    ],
    icon: Shield,
  },
  {
    category: "Data Visualization",
    details: [
      "Google Data Studio",
      "Tableau",
      "Power BI",
      "Advanced reporting techniques",
      "Custom dashboard creation",
    ],
    icon: PieChart,
  },
  {
    category: "Official Certifications",
    details: [
      "Google Analytics Individual Qualification",
      "Adobe Analytics Certification",
      "Google Tag Manager Certification",
      "Tealium Digital Certification",
    ],
    icon: Award,
  },
];

export default function Roadmap() {
  return (
    <Container>
      <div className="flex min-h-screen flex-col">
        <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
          <div className="rounded-lg px-4 text-center md:px-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Web Analytics Roadmap
              </h1>
              <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the essential skills and tools required for mastering web analytics.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-24">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`bg-background grid gap-4 rounded-lg border p-6 ${index == 0 ? "bg-primary" : ""}`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="text-muted-foreground h-6 w-6" />
                  <h3 className="text-xl font-bold">{item.category}</h3>
                </div>
                <ul className={`text-muted-foreground list-inside list-disc`}>
                  {item.details.map((detail, idx) => (
                    <span key={idx} className="text-sm">
                      {detail}
                      {idx == item.details.length - 1 ? "." : ", "}
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
