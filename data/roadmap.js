const roadmapData = [
  {
    id: "1",
    title: "Web Technology Fundamentals",
    subItems: [
      {
        id: "1-1",
        title: "HTML5 structure and semantics",
        description: "Overview of HTML5 elements and semantic structure.",
        keyPoints: ["Semantic HTML", "HTML5 best practices"],
      },
      {
        id: "1-2",
        title: "CSS3 for web layout",
        description: "Introduction to CSS3 features and layout techniques.",
        keyPoints: ["Flexbox", "Grid layout", "Responsive design"],
      },
      {
        id: "1-3",
        title: "Responsive web design principles",
        description: "Best practices for designing responsive websites.",
        keyPoints: ["Media queries", "Fluid layouts", "Viewport settings"],
      },
      {
        id: "1-4",
        title: "Browser rendering and DOM manipulation",
        description: "Understanding how browsers render web pages.",
        keyPoints: [
          "DOM API",
          "Rendering pipeline",
          "Performance optimizations",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "JavaScript (ES6+)",
    subItems: [
      {
        id: "2-1",
        title: "Variables, data types",
        description: "Understanding variables and types in JavaScript.",
        keyPoints: ["var, let, const", "Primitive types", "Type coercion"],
      },
      {
        id: "2-2",
        title: "Functions and scope",
        description: "Defining and using functions effectively.",
        keyPoints: ["Arrow functions", "Closures", "Lexical scope"],
      },
      {
        id: "2-3",
        title: "Promises and async programming",
        description: "Managing asynchronous tasks with promises.",
        keyPoints: ["Promise chaining", "Async/await", "Error handling"],
      },
      {
        id: "2-4",
        title: "Object-oriented programming",
        description: "OOP concepts in JavaScript.",
        keyPoints: ["Classes", "Inheritance", "Encapsulation"],
      },
      {
        id: "2-5",
        title: "JSON and APIs",
        description: "Working with JSON and interacting with APIs.",
        keyPoints: ["JSON syntax", "REST APIs", "Fetching data"],
      },
      {
        id: "2-6",
        title: "HTTP/HTTPS protocols",
        description: "Understanding web protocols.",
        keyPoints: ["Request/response cycle", "Secure communication"],
      },
      {
        id: "2-7",
        title: "Web request lifecycle",
        description: "Insights into how web requests are processed.",
        keyPoints: ["DNS lookup", "TCP/IP handshake", "Rendering"],
      },
    ],
  },
  {
    id: "3",
    title: "Tracking Concepts",
    subItems: [
      {
        id: "3-1",
        title: "Web analytics fundamentals",
        description: "Understanding the basics of web analytics.",
        keyPoints: [
          "Data collection",
          "User behavior tracking",
          "Insights generation",
        ],
      },
      {
        id: "3-2",
        title: "Tracking methodologies",
        description: "Overview of common tracking approaches.",
        keyPoints: [
          "Pixel tracking",
          "JavaScript tracking",
          "Server-side tracking",
        ],
      },
      {
        id: "3-3",
        title: "Session tracking",
        description: "Techniques to track user sessions effectively.",
        keyPoints: ["Session IDs", "Cookies", "Server logs"],
      },
      {
        id: "3-4",
        title: "User journey mapping",
        description: "Mapping the entire user journey across a website.",
        keyPoints: ["Touchpoints", "Conversion paths", "Drop-off analysis"],
      },
      {
        id: "3-5",
        title: "Conversion tracking principles",
        description: "Understanding how to track conversions.",
        keyPoints: ["Conversion events", "Attribution models", "Goal setting"],
      },
    ],
  },
  {
    id: "4",
    title: "Metrics and KPIs",
    subItems: [
      {
        id: "4-1",
        title: "User acquisition metrics",
        description:
          "Measuring the effectiveness of user acquisition strategies.",
        keyPoints: [
          "Traffic sources",
          "Cost per acquisition (CPA)",
          "Click-through rate (CTR)",
        ],
      },
      {
        id: "4-2",
        title: "Engagement metrics",
        description: "Tracking user interaction and engagement.",
        keyPoints: ["Bounce rate", "Time on site", "Pages per session"],
      },
      {
        id: "4-3",
        title: "Conversion metrics",
        description: "Measuring the effectiveness of conversion strategies.",
        keyPoints: ["Conversion rate", "Abandonment rate", "Checkout success"],
      },
      {
        id: "4-4",
        title: "Customer lifetime value (CLV)",
        description: "Estimating the long-term value of customers.",
        keyPoints: [
          "Retention rate",
          "Average order value",
          "Repeat purchase rate",
        ],
      },
      {
        id: "4-5",
        title: "Funnel analysis",
        description: "Analyzing the performance of conversion funnels.",
        keyPoints: [
          "Funnel stages",
          "Drop-off rates",
          "Optimization strategies",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Google Tag Manager (GTM)",
    subItems: [
      {
        id: "5-1",
        title: "Interface navigation",
        description: "Navigating the Google Tag Manager interface.",
        keyPoints: ["Workspaces", "Containers", "Menu navigation"],
      },
      {
        id: "5-2",
        title: "Container setup",
        description: "Setting up and managing GTM containers.",
        keyPoints: [
          "Container configuration",
          "Tag management",
          "Environment settings",
        ],
      },
      {
        id: "5-3",
        title: "Tag types",
        description: "Understanding different types of tags in GTM.",
        keyPoints: [
          "Google Analytics tags",
          "Custom HTML tags",
          "Third-party tags",
        ],
      },
      {
        id: "5-4",
        title: "Triggers and variables",
        description: "Setting up triggers and variables for tags.",
        keyPoints: [
          "Trigger conditions",
          "Built-in variables",
          "Custom variables",
        ],
      },
      {
        id: "5-5",
        title: "Debug mode",
        description: "Using debug mode for testing tags.",
        keyPoints: ["Preview mode", "Tag firing", "Error troubleshooting"],
      },
      {
        id: "5-6",
        title: "Version management",
        description: "Managing GTM versions effectively.",
        keyPoints: [
          "Version history",
          "Rollback options",
          "Publishing changes",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Alternative TMS Platforms",
    subItems: [
      {
        id: "6-1",
        title: "Adobe Launch",
        description: "Overview of Adobe Launch features and capabilities.",
        keyPoints: [
          "Tag management",
          "Integration with Adobe Analytics",
          "Custom scripts",
        ],
      },
      {
        id: "6-2",
        title: "Tealium",
        description: "Introduction to Tealium for tag management.",
        keyPoints: [
          "Data layer management",
          "Real-time tracking",
          "Cross-device integration",
        ],
      },
      {
        id: "6-3",
        title: "Ensighten",
        description: "Using Ensighten for advanced tag management.",
        keyPoints: [
          "Tag governance",
          "Privacy compliance",
          "Dynamic tag configurations",
        ],
      },
      {
        id: "6-4",
        title: "Segment",
        description: "Leveraging Segment for data collection and integration.",
        keyPoints: [
          "API-driven tracking",
          "Destination management",
          "Data consistency",
        ],
      },
      {
        id: "6-5",
        title: "Matomo",
        description: "Open-source tracking with Matomo.",
        keyPoints: [
          "Self-hosted analytics",
          "Privacy-focused tracking",
          "Custom reporting",
        ],
      },
    ],
  },
];

export default roadmapData;
