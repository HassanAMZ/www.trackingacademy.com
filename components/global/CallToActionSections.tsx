import React from 'react';
import FreeResoursesSection from './FreeResoursesSection';
import LearnMoreHeader from './LearnMoreHeader';

const CallToActionSections = () => {
  return (
    <React.Fragment>
      <LearnMoreHeader
        headingTexts={{
          heading: 'Transform your carreer',
          subHeading:
            'Our programs were designed to guide you though launching or improving your web analytics freelance business.',
        }}
      />
      <section className="flex flex-col items-center justify-center gap-2 py-3">
        <FreeResoursesSection
          headingTexts={{
            heading: 'Freelancing in 6 Weeks ',
            subHeading:
              'Get started with freelancing in Web Analytics Niche by taking the comprehensive Freelance Starter Program. ',
          }}
          image={{
            src: '/images/hero/temp_image_4.png',
            alt: 'Imtiaz Ahmed - Job Ready Programmer',
            height: 1920,
            width: 1080,
          }}
          links={{
            primary: { src: '/#start-here', text: 'Start Here' },
          }}
          order="order-last lg:order-first items-end"
        />
        <FreeResoursesSection
          headingTexts={{
            heading: 'Compass Club Monthly Membership',
            subHeading:
              'Join the Crust Club to sharpen your skills and land better clients with these exclusive freelancing resources.',
          }}
          image={{
            src: '/images/hero/temp_image_5.png',
            alt: 'Imtiaz Ahmed - Job Ready Programmer',
            height: 600,
            width: 600,
          }}
          links={{
            primary: { src: '/#start-here', text: 'Start Here' },
          }}
          order="order-last lg:order-last items-end"
        />
      </section>
    </React.Fragment>
  );
};
export default CallToActionSections;
