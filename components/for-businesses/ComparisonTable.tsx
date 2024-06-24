"use client";

import React from "react";

interface Feature {
 name: string;
 subHeading?: string;
 taAgency: boolean;
 inHouseTeam: boolean;
 standardAgencies: boolean;
 hoverFeature: string;
}

const comparisonData: Feature[] = [
 {
  name: "Fast Implementation",
  subHeading: "Setup in 7 Days",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: true,
  hoverFeature: "Get your tracking system set up and optimized within 7 days.",
 },
 {
  name: "High Accuracy",
  subHeading: "95% Decision Making",
  taAgency: true,
  inHouseTeam: true,
  standardAgencies: true,
  hoverFeature: "Achieve 95% accuracy, improving your decision-making and ROI.",
 },
 {
  name: "Ease of Use",
  subHeading: "User-Friendly Interface",
  taAgency: true,
  inHouseTeam: true,
  standardAgencies: false,
  hoverFeature:
   "User-friendly interface requiring minimal technical knowledge.",
 },
 {
  name: "Seamless Integration",
  subHeading: "With Existing Systems",
  taAgency: true,
  inHouseTeam: true,
  standardAgencies: true,
  hoverFeature:
   "Our system integrates smoothly with your existing setup, ensuring no disruption.",
 },
 {
  name: "Comprehensive Testing",
  subHeading: "and Validation",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
  hoverFeature: "We handle all testing and validation, so you don't have to.",
 },
 {
  name: "Low Maintenance",
  subHeading: "Easy Upkeep Design",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
  hoverFeature: "Designed for easy upkeep, reducing future maintenance costs.",
 },
 {
  name: "Scalability",
  subHeading: "Grows with Your Business",
  taAgency: true,
  inHouseTeam: true,
  standardAgencies: false,
  hoverFeature:
   "Our system grows with your business, maintaining accuracy and efficiency.",
 },
 {
  name: "Accuracy Guarantee",
  subHeading: "95% Within 7 Days",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
  hoverFeature:
   "If we don't achieve 95% accuracy within 7 days, you get a full refund.",
 },
 {
  name: "Support Assurance",
  subHeading: "24/7 Customer Service",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
  hoverFeature:
   "Ongoing support included, with dedicated customer service available 24/7.",
 },
 {
  name: "Data Security",
  subHeading: "GDPR and CCPA Compliance",
  taAgency: true,
  inHouseTeam: true,
  standardAgencies: true,
  hoverFeature:
   "Full compliance with GDPR and CCPA, with robust measures to prevent data breaches.",
 },
 {
  name: "Free Consultation",
  subHeading: "Tailored System Setup",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
  hoverFeature:
   "One-on-one session to tailor the tracking system to your specific needs.",
 },
 {
  name: "Training Resources",
  subHeading: "Tutorials and Best Practices",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
  hoverFeature:
   "Access to a library of tutorials and best practices for optimal use.",
 },
 {
  name: "First Month Free Maintenance",
  subHeading: "Monitoring",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
  hoverFeature:
   "We monitor and maintain your tracking system for the first month at no extra cost.",
 },
];

const ComparisonTable: React.FC = () => (
 <div className='container-primary lg:py-6'>
  <div className='grid grid-cols-7  text-center'>
   <p className='col-span-4 lg:col-span-3  px-4 py-4 '></p>
   <p className=' font-semibold col-span-2 px-4 py-4 flex items-center justify-center  text-complementary bg-accent rounded-t-full'>
    Tracking Academy
   </p>
   <p className='px-4 py-4 flex items-center justify-center text-sm'>DIY</p>
   <p className='px-4 py-4 hidden items-center justify-center text-sm  lg:flex'>
    Freelancers
   </p>
  </div>

  <div className=' border-t-2 rounded-lg border-dominant/10'>
   {comparisonData.map((feature, index) => (
    <div
     key={index}
     className='rounded-r-lg rounded-l-lg grid grid-cols-7 border-b-2 border-r-2 border-l-2 border-dominant/10 text-center'>
     <div className='col-span-4 lg:col-span-3 px-4 py-4 flex text-left font-semibold'>
      <p>{feature.name}</p>
      <span className='hidden lg:flex text-accent'>
       :&nbsp;{feature.subHeading}
      </span>
     </div>
     <div className='col-span-2 px-4 py-4 flex items-center justify-center  text-dominant bg-accent'>
      {feature.taAgency ? "✅" : "❌"}
     </div>
     <div className='px-4 py-4 flex items-center justify-center'>
      {feature.inHouseTeam ? <span>Sometimes</span> : "❌"}
     </div>
     <div className='px-4 py-4 hidden items-center justify-center  lg:flex'>
      {feature.standardAgencies ? <span>Sometimes</span> : "❌"}
     </div>
    </div>
   ))}
  </div>
 </div>
);

export default ComparisonTable;
