// Commonly used types
type Link = {
  name: string;
  url: string; // Renamed 'link' to 'url' for clarity and consistency
};

type Currency = {
  symbol: string;
  code: string;
  value: number;
};

// Project-related interfaces
export interface ProjectDetails {
  name: string;
  url: string;
  techStack: Link[]; // Changed 'tech_stack' to 'techStack' for camelCase consistency
  timeline: string;
  budget: Currency;
}

// Client-related interfaces
export interface ClientDetails {
  name: string;
  email: string;
  position: string;
  images: Link[];
}

// Business-related interfaces
export interface BusinessDetails {
  email: string;
  phone: string;
  name: string;
  url: string; // Renamed 'link' to 'url' for consistency
  images: Link[];
}

// Result-related interfaces
export interface ResultDetails {
  roas: Currency;
  conversions: Currency;
  testimonial: {
    content: string; // Renamed 'testimonial' to 'content' for clarity
    projectTitle: string; // Renamed 'project_title' to 'projectTitle' for camelCase consistency
  };
}

// Main Client interface
export interface Client {
  id: number;
  projectDetails: ProjectDetails; // Changed 'project_details' to 'projectDetails' for camelCase consistency
  clientDetails: ClientDetails; // Changed 'client_details' to 'clientDetails' for camelCase consistency
  businessDetails: BusinessDetails; // Changed 'business_details' to 'businessDetails' for camelCase consistency
  tags: string[];
  resultDetails: ResultDetails; // Changed 'results_details' to 'resultDetails' for camelCase consistency
}

// Client data
const clients: Client[] = [
  {
    id: 1,
    projectDetails: {
      name: "Job Ready Programmer",
      url: "https://www.jobreadyprogrammer.com/",
      timeline: "10 days",
      budget: {
        symbol: "$",
        code: "USD",
        value: 1000,
      },
      techStack: [
        { name: "Teachable", url: "https://teachable.com/" },
        { name: "WordPress", url: "https://wordpress.com/" },
      ],
    },
    clientDetails: {
      name: "Imtiaz Ahmed",
      email: "imtiazahmad007@gmail.com",
      position: "CEO",
      images: [{ name: "profile", url: "/images/clients/imtiaz-ahmad.jfif" }],
    },
    businessDetails: {
      email: "info@jobreadyprogrammer.com",
      phone: "+17328413286",
      name: "Job Ready Programmer",
      url: "https://www.linkedin.com/in/imtiaz-ahmad-80117324/",
      images: [
        {
          name: "website screenshot",
          url: "/images/clients/website-screenshots/jobreadyprogrammer-mobile.png",
        },
      ],
    },
    tags: ["Subscriptions", "Teachable", "Online Courses"],
    resultDetails: {
      roas: { symbol: "%", code: "percentage", value: 36 },
      conversions: { symbol: "%", code: "percentage", value: 25 },
      testimonial: {
        content:
          "Shahzada's knowledge of everything Google Tag manager is at a very advanced level. He is also easy to communicate with.",
        projectTitle: "Google tag manager and google ads expert needed",
      },
    },
  },
  {
    id: 2,
    projectDetails: {
      name: "Send SevenRooms Events from Google Tag Manager to Google Analytics 4 (GTM - GA4)",
      url: "",
      timeline: "14 days",
      budget: {
        symbol: "$",
        code: "USD",
        value: 250,
      },
      techStack: [
        { name: "Google Tag Manager", url: "https://tagmanager.google.com/" },
        { name: "Google Analytics 4", url: "https://analytics.google.com/" },
      ],
    },
    clientDetails: {
      name: "Matthieu Chauveau",
      email: "",
      position: "Product Manager",
      images: [
        { name: "profile", url: "/images/clients/matthieu-chauveau.jfif" },
      ],
    },
    businessDetails: {
      email: "",
      phone: "+66902213535",
      name: "Mamirose Bangkok",
      url: "https://www.mamirosebangkok.com",
      images: [
        {
          name: "website screenshot",
          url: "/images/clients/website-screenshots/mamirosebangkok-mobile.png",
        },
      ],
    },
    tags: ["Google Tag Manager", "Google Analytics 4"],
    resultDetails: {
      roas: { symbol: "%", code: "percentage", value: 21 },
      conversions: { symbol: "%", code: "percentage", value: 57 },
      testimonial: {
        content:
          "Shahzada is great. He is extremely knowledgable and friendly and helped us out tremendously. ",
        projectTitle:
          "Send SevenRooms Events from Google Tag Manager to Google Analytics 4 (GTM - GA4)",
      },
    },
  },
];

export default clients;
