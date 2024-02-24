import React from "react";
import TimelineEvent from "./TimelineEvent";
import Image from "next/image";

const Timeline: React.FC = () => {
 return (
  <div className='py-10 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
   <TimelineEvent
    title='Initial Consultation & Goal Setting'
    imageULR='/images/home/timeline-initial-consultation.png'
    description='We begin with a consultation to understand your tracking needs and set clear goals for what we aim to achieve with our analytics implementation.'
    isActive={true}
   />
   <TimelineEvent
    title='Technical Audit & Tagging Plan'
    imageULR='/images/home/timeline-audit.png'
    description='Our team conducts a thorough audit of your existing tracking setup and creates a detailed plan for tag implementation and data layer structuring.'
    isActive={true}
   />
   <TimelineEvent
    title='Implementation & Configuration'
    imageULR='/images/home/timeline-implementation.png'
    description='We implement tracking tags, configure analytics tools, and ensure data accuracy across your website and/or app.'
    isActive={true}
   />
   <TimelineEvent
    title='Testing & Quality Assurance'
    imageULR='/images/home/timeline-testing.png'
    description='Rigorous testing is performed to ensure that all tracking is firing correctly and data is being collected as intended.'
    isActive={true}
   />
   <TimelineEvent
    title='Reporting & Insights'
    imageULR='/images/home/timeline-reporting.png'
    description='We set up dashboards and reports that provide actionable insights, allowing you to make informed decisions based on accurate data.'
    isActive={true}
   />
   <TimelineEvent
    title='Ongoing Optimization & Support'
    imageULR='/images/home/timeline-optimization.png'
    description='Our service includes continuous monitoring and optimization of your tracking setup to adapt to any changes in your marketing efforts or business objectives.'
    isActive={true}
   />
  </div>
 );
};

export default Timeline;
