import React from "react";
const reasonsData = [
 {
  id: 1,
  title: "Clear, Actionacble Insights",
  paragraph:
   "Let's cut right to the chase. You want straightforward, actionable insights from your website data without the hassle of complex setups and reports. We specialize in making your data work for you, from setting up tracking to fixing issues. Our aim is to simplify your data into clear, actionable insights for growth.",
 },

 {
  id: 2,
  title: "Custom Solutions for your Unique Problems",
  paragraph:
   "Your problems are unique, and so should be the solutions. Whether it's ecommerce tracking that actually makes sense, or analytics that guide your next big decision, We tailor our approach to fit your needs. And the benefits? Better decisions, more conversions, and a clearer path to your goals.",
 },
 {
  id: 3,
  title: "Fast, efficient and Transparency",
  paragraph:
   "Time is money, and we don't waste either. We set up your tracking fast, keep you in the loop, and make sure you know what you're paying for and why. No hidden fees, no surprise charges. Just honest work that helps your business grow.",
 },
 {
  id: 4,
  title: "Reports You'll Actually Read",
  paragraph:
   "We know reports can be a snooze. That's why we've made ours different. Think of them as a chat with a friend who knows a lot about your site. Easy to read, easier to understand, and actually useful. No jargon, no endless tables of numbers—just the clear, actionable insights you need.",
 },
];
export default function ReasonsData() {
 return (
  <React.Fragment>
   <h2 className='title-secondary text-center container-secondary'>
    4 Reasons Why You Should work with us to Configure your Wesbite's Tracking
   </h2>
   <div className='grid lg:grid-cols-2 gap-2 lg:gap-4 py-10'>
    {reasonsData.map((reason, index) => (
     <div
      key={index}
      className='p-6 items-center grid grid-cols-[min-content_1fr] bg-dark-secondary rounded-lg'>
      <p className='text-7xl text-dark-primary font-black px-4 lg:pr-10 leading-none lg:leading-normal lg:row-span-2'>
       {reason.id}
      </p>
      <h3 className='tracking-nomral title-tertiary leading-tight font-semibold'>
       {reason.title}
      </h3>
      <p className='pb-2 col-span-2 lg:col-span-1 lg:pt-2 paragraph-secondary'>
       {reason.paragraph}
      </p>
     </div>
    ))}
   </div>
  </React.Fragment>
 );
}
