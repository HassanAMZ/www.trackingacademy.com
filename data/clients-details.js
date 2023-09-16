const clientDetails = [
 {
  id: "001",
  title: "Job Ready Programmer",
  tags: ["subscriptions", "teachable"],
  details: [
   {
    heading: "Overview",
    description: `JobReadyProgrammer.com, an online educational platform selling programming courses, sought to streamline their Google Analytics tracking for a more cohesive understanding of their ecommerce journey. With the website developed on WordPress and their checkout system situated on Teachable, this multi-platform system posed an analytical challenge. The project involved configuring Google Analytics 4 (GA4) with enhanced ecommerce tracking, data deduplication, and comprehensive reporting via Google Data Studio.`,
   },
   {
    heading: "The Issues the Client Was Facing",
    description: `Imtiaz, the client, had a significant difficulty in analyzing and tracking customer behavior across their two different platforms - WordPress and Teachable. This posed issues with accurately monitoring the user journey, which includes view item, add to cart, checkout, and purchase events. The client was also facing issues with data redundancy, tracking multiple instances of the same event, which led to discrepancies in their data analysis and insights.`,
   },
   {
    heading: "How I Helped Them Resolve the Issues",
    description: `I assisted the client in implementing Google Analytics 4 (GA4) on their platforms, which offers enhanced ecommerce tracking capabilities. This ensured seamless tracking of view item, add to cart, checkout, and purchase events across both WordPress and Teachable. I also integrated deduplication to avoid redundancy in data collection, ensuring that multiple instances of the same event were not being tracked on GA4. This enabled the client to gain a clearer and more accurate understanding of their customer behavior.

    In addition, to provide a comprehensive view of the website's performance, I configured a simple report in Google Data Studio. This report tracked the performance of Universal Analytics, Google Analytics 4, and the website backend, offering the client an all-encompassing view of their online business performance.`,
   },
   {
    heading: "Conclusion",
    description: `After a focused two-week project, I successfully integrated GA4 with enhanced ecommerce tracking, tackled data deduplication, and set up performance tracking in Google Data Studio. This has paved the way for improved data insights, allowing Imtiaz to track customer journey across platforms, reduce data discrepancies, and monitor the overall performance of JobReadyProgrammer.com more accurately`,
   },
  ],
  images: [{ name: "featured_image_url", link: "/images/clients/001.svg" }],
  project_details: [
   {
    heading: "Client's website",
    title: "Job Ready Programmer",
    link: "https://www.jobreadyprogrammer.com/",
   },
   {
    heading: "Checkout Processor",
    title: "Teachable",
    link: " https://teachable.com/",
   },
   {
    heading: "Website CMS",
    title: "WordPress",
    link: " https://wordpress.com/",
   },
  ],
 },
 {
  id: "002",
  title: "Book Online",
  tags: ["Hotel Booking", "Custom Built CMS"],
  details: [
   {
    heading: "Overview",
    description:
     "BookOnline, an independent travel network offering hotel accommodations worldwide, sought to optimize their tracking systems for a more comprehensive understanding of user behaviors. The project entailed addressing issues with their Google ads, enhanced conversion tracking, and Bing's UET conversions tracking, especially when trying to send user data like email addresses.",
   },
   {
    heading: "The Issues the Client Was Facing",
    description:
     "BookOnline was struggling with their Google ads enhanced conversion tracking and Bing's UET ads conversions tracking. They were facing challenges in sending user data like email addresses effectively. Furthermore, there were issues of duplicate events and incorrect revenue figures that affected their analytical clarity and marketing strategies.",
   },
   {
    heading: "How I Helped Them Resolve the Issues",
    description:
     "After an initial discovery call where we audited their tracking system using Google Tag Manager, I worked to fix a Google ads conversion tracking index. By collaborating with Jason and Ryan, we addressed the problems related to duplicate events and inaccurate revenue figures. This holistic approach ensured BookOnline achieved accurate data insights, enabling them to better understand and engage with their users.",
   },
   {
    heading: "Conclusion",
    description:
     "By the end of our engagement, I had successfully addressed the tracking issues faced by BookOnline, ensuring accurate conversion tracking for both Google and Bing ads. With the enhanced insights, BookOnline can now better strategize their marketing campaigns, understanding their user behavior more precisely and ensuring they provide optimal services to their clientele.",
   },
  ],
  images: [{ name: "featured_image_url", link: "/images/clients/002.svg" }],
  project_details: [
   {
    heading: "Client's website",
    title: "Book Online",
    link: "https://www.bookonline.com/",
   },
   {
    heading: "Checkout Processor",
    title: "Custom Built Checkout",
    link: "",
   },
   {
    heading: "Website CMS",
    title: "Custom Built Site",
    link: "",
   },
  ],
 },
];

export default clientDetails;
