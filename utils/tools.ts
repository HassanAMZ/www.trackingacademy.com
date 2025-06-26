import { BookMarked, BriefcaseBusiness, Clock, LinkIcon } from "lucide-react";

// Define the icon type
interface IconType {
  icon: React.ElementType;
}

// Define the tool descriptions type
interface ToolDescriptions {
  [key: string]: string;
}

// Define the mapping for icons with the IconType
export const iconMap: { [key: string]: React.ElementType } = {
  "business-metrics-calculator": BriefcaseBusiness,
  "utm-builder": LinkIcon,
  "utm-validator": BookMarked,
  "time-managment": Clock,
};

// Define the descriptions for the tools using ToolDescriptions type
export const toolDescriptions: ToolDescriptions = {
  "utm-builder":
    "Build UTM parameters for Google Ads, Facebook Ads, TikTok, or custom campaigns all in one place",
  "utm-validator": "Validate and analyze your UTM parameters to ensure proper tracking setup",
  "time-managment": "Track and manage time across different projects and tasks",
  "business-metrics-calculator":
    "Check to see if your Business is Ready to Scale using Advanced Business Metrics Calculator",
};
