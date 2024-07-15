interface TechStack {
  name: string;
  link: string;
}

interface Budget {
  symbol: string;
  code: string;
  value: number;
}

interface ProjectDetails {
  name: string;
  link: string;
  tech_stack: TechStack[];
  timeline: string;
  budget: Budget;
}

interface Images {
  name: string;
  link: string;
}

interface ClientDetail {
  name: string;
  email: string;
  position: string;
  images: Images[];
}

interface BusinessDetails {
  email: string;
  phone: string;
  name: string;
  link: string;
}

interface Result {
  code: string;
  symbol: string;
  value: number;
}

interface TestimonialDetails {
  testimonial: string;
  project_title: string;
}

interface ResultDetails {
  roas: Result;
  conversions: Result;
  testimonial_details: TestimonialDetails;
}

interface Client {
  id: number;
  project_details: ProjectDetails;
  client_details: ClientDetail;
  business_details: BusinessDetails;
  tags: string[];
  results_details: ResultDetails;
}

const clients: Client[] = [
  {
    id: 1,
    project_details: {
      name: "Job Ready Programmer",
      link: "https://www.jobreadyprogrammer.com/",
      timeline: "10 days",
      budget: {
        symbol: "$",
        code: "USD",
        value: 1000,
      },
      tech_stack: [
        {
          name: "Teachable",
          link: "https://teachable.com/",
        },
        {
          name: "WordPress",
          link: "https://wordpress.com/",
        },
      ],
    },
    client_details: {
      name: "Imtiaz Ahmed",
      email: "imtiazahmad007@gmail.com",
      position: "CEO",
      images: [
        {
          name: "profile",
          link: "/images/clients/imtiaz-ahmad.jfif",
        },
      ],
    },
    business_details: {
      email: "info@jobreadyprogrammer.com",
      phone: "+17328413286",
      name: "Job Ready Programmer",
      link: "https://www.linkedin.com/in/imtiaz-ahmad-80117324/",
    },
    tags: ["Subscriptions", "Teachable", "Online Courses"],
    results_details: {
      roas: {
        code: "percentage",
        symbol: "%",
        value: 36,
      },
      conversions: {
        code: "percentage",
        symbol: "%",
        value: 25,
      },
      testimonial_details: {
        testimonial: "Very happy working with Hassan! Does a great job!",
        project_title: "Google tag manager and google ads expert needed",
      },
    },
  },
  {
    id: 2,
    project_details: {
      name: "Send SevenRooms Events from Google Tag Manager to Google Analytics 4 (GTM - GA4)",
      link: "",
      timeline: "14 days",
      budget: {
        symbol: "$",
        code: "USD",
        value: 250,
      },
      tech_stack: [
        {
          name: "Google Tag Manager",
          link: "https://tagmanager.google.com/",
        },
        {
          name: "Google Analytics 4",
          link: "https://analytics.google.com/",
        },
      ],
    },
    client_details: {
      name: "Matthieu Chauveau",
      email: "",
      position: "Product Manager",
      images: [
        {
          name: "profile",
          link: "/images/clients/matthieu-chauveau.jfif",
        },
      ],
    },
    business_details: {
      email: "",
      phone: "+66902213535",
      name: "Mamirose Bangkok",
      link: "www.mamirosebangkok.com",
    },
    tags: ["Google Tag Manager", "Google Analytics 4"],
    results_details: {
      roas: {
        code: "percentage",
        symbol: "%",
        value: 21,
      },
      conversions: {
        code: "percentage",
        symbol: "%",
        value: 57,
      },
      testimonial_details: {
        testimonial:
          "Awesome work. Very professional and efficient. 100% recommend.",
        project_title:
          "Send SevenRooms Events from Google Tag Manager to Google Analytics 4 (GTM - GA4)",
      },
    },
  },
];

export default clients;
