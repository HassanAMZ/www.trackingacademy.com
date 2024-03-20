"use client";

import React from "react";

interface Feature {
 name: string;
 taAgency: boolean;
 inHouseTeam: boolean;
 standardAgencies: boolean;
}

const comparisonData: Feature[] = [
 {
  name: "Comprehensive Audit and Strategic Planning",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
 },
 {
  name: "Advanced Tools and Expert Setup",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: true,
 },
 {
  name: "Seamless Integration with Marketing Tools",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
 },
 {
  name: "Customized, Actionable Reporting",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: true,
 },
 {
  name: "Continuous Innovation and Improvement",
  taAgency: true,
  inHouseTeam: false,
  standardAgencies: false,
 },
];

const ComparisonTable: React.FC = () => (
 <div className='container-secondary py-12 px-6'>
  <div className='grid grid-cols-7 lg:grid-cols-8 text-center'>
   <p className='col-span-4 px-4 py-4 border-b-2 border-dominant'></p>
   <p className=' font-semibold col-span-2 px-4 py-4 flex items-center justify-center border-2 border-complementary text-complementary bg-accent rounded-t-full'>
    Tracking Academy
   </p>
   <p className='px-4 py-4 flex items-center justify-center border-b-2 paragraph-secondary border-dominant'>
    DIY
   </p>
   <p className='px-4 py-4 hidden items-center justify-center border-b-2 paragraph-secondary border-dominant lg:flex'>
    Freelancers
   </p>
  </div>

  <div>
   {comparisonData.map((feature, index) => (
    <div key={index} className='grid grid-cols-7 lg:grid-cols-8 text-center'>
     <div className='col-span-4 px-4 py-4 border-b-2 border-dominant text-left font-semibold'>
      {feature.name}
     </div>
     <div className='col-span-2 px-4 py-4 border-b-2 flex items-center justify-center border-complementary border-l-2 border-r-2 text-dominant bg-accent'>
      {feature.taAgency ? (
       <span className='circle flex items-center justify-center'>
        <svg
         width='29'
         height='29'
         viewBox='0 0 29 29'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'>
         <circle cx='14.5' cy='14.5' r='14.5' fill='#ffffff'></circle>
         <path
          d='M8.28613 13.4643L13.4647 18.6428L21.2326 11.3928'
          stroke='#000000'
          strokeWidth='2'></path>
        </svg>
       </span>
      ) : (
       <span className='flex items-center justify-center'>
        <svg
         width='17'
         height='17'
         viewBox='0 0 17 17'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'>
         <path
          d='M15.6465 0.647008L0.646453 15.6464L1.35355 16.3536L16.3535 1.35413L15.6465 0.647008ZM16.3535 15.6459L1.35355 0.64644L0.646455 1.35356L15.6465 16.353L16.3535 15.6459Z'
          fill='#ffffff'></path>
        </svg>
       </span>
      )}
     </div>
     <div className='px-4 py-4 flex items-center justify-center border-b-2 border-dominant'>
      {feature.inHouseTeam ? (
       <span className='circle flex items-center justify-center'>
        <svg
         width='29'
         height='29'
         viewBox='0 0 29 29'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'>
         <circle cx='14.5' cy='14.5' r='14.5' fill='#ffffff'></circle>
         <path
          d='M8.28613 13.4643L13.4647 18.6428L21.2326 11.3928'
          stroke='#000000'
          strokeWidth='2'></path>
        </svg>
       </span>
      ) : (
       <span className='circle flex items-center justify-center'>
        <svg
         width='17'
         height='17'
         viewBox='0 0 17 17'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'>
         <path
          d='M15.6465 0.647008L0.646453 15.6464L1.35355 16.3536L16.3535 1.35413L15.6465 0.647008ZM16.3535 15.6459L1.35355 0.64644L0.646455 1.35356L15.6465 16.353L16.3535 15.6459Z'
          fill='#000000'></path>
        </svg>
       </span>
      )}
     </div>
     <div className='px-4 py-4 hidden items-center justify-center border-b-2 border-dominant lg:flex'>
      {feature.standardAgencies ? (
       <span>Sometimes</span>
      ) : (
       <span className='circle flex items-center justify-center'>
        <svg
         width='17'
         height='17'
         viewBox='0 0 17 17'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'>
         <path
          d='M15.6465 0.647008L0.646453 15.6464L1.35355 16.3536L16.3535 1.35413L15.6465 0.647008ZM16.3535 15.6459L1.35355 0.64644L0.646455 1.35356L15.6465 16.353L16.3535 15.6459Z'
          fill='#000000'></path>
        </svg>
       </span>
      )}
     </div>
    </div>
   ))}
  </div>
 </div>
);

export default ComparisonTable;
