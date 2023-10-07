import TestimonialCard from "@/components/testimonial/TestimonialCard";
import HeroComponent from "@/components/global/HeroComponent";
import baseColors from "@/data/base-colors";
import StartHereSection from "@/components/home/StartHereSection";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import FreeResoursesSection from "@/components/global/FreeResoursesSection";
import WhyUs from "@/components/global/WhyUs";
import Clients from "@/components/home/Clients";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import CallToActionSections from "@/components/global/CallToActionSections";

const Page: React.FC = () => {
 const clientData = [
  {
   src: "/images/clients/logos/upwork.png",
   alt: "Client 1",
   width: 1920,
   height: 1080,
  },
  {
   src: "/images/clients/logos/roastycoffee.png",
   alt: "Client 2",
   width: 1920,
   height: 1080,
  },
  {
   src: "/images/clients/logos/shepherd.png",
   alt: "Client 2",
   width: 1920,
   height: 1080,
  },
  {
   src: "/images/clients/logos/cmrd.png",
   alt: "Client 1",
   width: 1920,
   height: 1080,
  },
  {
   src: "/images/clients/logos/enhanza.png",
   alt: "Client 2",
   width: 1920,
   height: 1080,
  },
 ];

 return (
  <main className=''>
   <HeroComponent
    textGroup={{
     welcomeText: "Welcome to the Community!",
     heading: "Web Analytics for Freelancers",
     subHeading: {
      one: "Hey, I'm Hassan, ",
      two: "and I help aspiring and established freelancers master web analytics across web platforms.",
     },
    }}
    links={{
     primary: { src: "#learnMoreHeader", text: "Start Here" },
     secondary: { src: "/contact", text: "Get In Touch" },
    }}
    images={{
     group: {
      list: [
       {
        src: "/images/clients/001_1.jfif",
        alt: "Imtiaz Ahmed - Job Ready Programmer",
       },
       { src: "/images/clients/007.jfif", alt: "Client" },
       {
        src: "/images/clients/008.jfif",
        alt: "Pjipipp Herglotz - Kiss Agency",
       },
       {
        src: "/images/clients/001.jpg",
        alt: "Imtiaz Ahmed - Job Ready Programmer",
       },
      ],
     },
     background: "/images/hero/hero-image.png",
    }}
    colorDetails={{
     primary: baseColors.home.primary,
     dark: { value: 80 },
     light: { value: 10 },
    }}
   />
   <ContainerLayout className='hidden md:grid grid-cols-5 gap-2 pt-6 grayscale items-center justify-center'>
    {clientData.map((client, index) => (
     <Clients
      key={index}
      image={{
       width: client.width,
       height: client.height,
       src: client.src,
       alt: client.alt,
      }}
     />
    ))}
   </ContainerLayout>

   <LearnMoreHeader
    headingTexts={{
     heading: "Not sure where to start?",
     subHeading: "Take a look at these free resources on freelancing!",
    }}
    colorDetails={{
     primary: baseColors.home.primary,
    }}
   />
   <StartHereSection
    colorDetails={{
     primary: baseColors.home.primary,
    }}
   />

   <TestimonialCard
    className='!py-8'
    person={{
     testimonial:
      "Peter was shining a light on questions I never even asked myself!",
     position: "Freelance Journalist",
     name: "Clarissa Jurumenha",
     image: {
      src: "/images/clients/001_1.jfif",
      alt: "Imtiaz Ahmed - Job Ready Programmer",
      width: 1920,
      height: 1080,
     },
    }}
   />

   <LearnMoreHeader
    headingTexts={{
     heading: "Transform your carreer",
     subHeading:
      "Our programs were designed to guide you though launching or improving your freelance business.",
    }}
    colorDetails={{
     primary: baseColors.home.primary,
    }}
   />
   <CallToActionSections />

   <TestimonialCard
    className='!py-8'
    person={{
     testimonial:
      "Peter was shining a light on questions I never even asked myself!",
     position: "Freelance Journalist",
     name: "Clarissa Jurumenha",
     image: {
      src: "/images/clients/001_1.jfif",
      alt: "Imtiaz Ahmed - Job Ready Programmer",
      width: 1920,
      height: 1080,
     },
    }}
   />

   <WhyUs
    headingTexts={{
     heading: "Why pizza? 🍕",
    }}
    paragraphTexts={{
     primary: "Because freelancing is like pizza, ",
     secondary:
      "the dough, as in the business fundamentals are the same—but everybody gets to pick their own toppings!",
    }}
    colorDetails={{
     primary: baseColors.home.primary,
    }}
    links={{
     primary: { src: "/#start-here", text: "Get Started with Freelancing!" },
    }}
   />
   {/* <ContainerLayout className='pb-4'>
    <CustomHeader text='Recent Web Analytics & Tracking Projects' />
    <RecentClientSlider />
   </ContainerLayout>

   <InfoSection
    title='Web analytics is a testament to precision'
    description={
     <>
      Shahzada provides a detailed explanation of his innovative use of
      technology and expertise in web analytics, ensuring clear data insights.
     </>
    }
    embedId='EzSy4XULN5A'
    testimonial='Listen up, this is crucial!'
    flexDirection=''
   />

   <InfoSection
    title='Partner with an expert who has effectively managed the tracking of over 250+ clients.'
    description={
     <>
      With my four years of experience in web analytics, I offer insightful
      advice and strategies to both new and established businesses.
      <ul className='list-disc list-inside pl-4 py-2'>
       <li>Help with auditing website's tracking</li>
       <li>Easy-to-read reports</li>
       <li>Help with Google tools and analytics</li>
       <li>Web and Server tracking</li>
       <li>Expert in tools like GA4, UA, FB Pixel, and more</li>
      </ul>
      <div className='flex pt-2 items-center justify-left gap-x-4'>
       <Link href='/portfolio' className='primaryButton'>
        Browse our portfolio <span aria-hidden='true'>&rarr;</span>
       </Link>
      </div>
     </>
    }
    embedId='W0ZgVnIGNW4'
    flexDirection='sm:flex-row-reverse'
    backgroundOverlay={true}
   />
   <InfoSection
    title='James Hammond, CEO of Equifund Mortgage'
    description={
     <>
      James, a satisfied client, shares:
      <br />
      <br />
      'Our business required meticulous tracking. Hassan's expertise was a
      game-changer. Not only did he want to understand our audience and their
      needs, but he also had the technical prowess to implement tracking
      solutions that have been transformative for us.'
     </>
    }
    embedId='EzSy4XULN5A'
    testimonial='Amazing speedy and expert knowledge to fix tracking issues - James'
   />

   <ContainerLayout>
    <section className='py-5 sm:py-10 flex flex-col sm:items-center gap-2 sm:text-center backgroundOverlay  p-2'>
     <h3 className='text-2xl font-medium pb-2 '>
      Meet Shahzada Ali Hassan, Your Web Analytics and Tracking Expert
     </h3>
     <div>
      <Divider />
      <Divider />
     </div>
     <p className='font-medium max-w-2xl'>
      I'm not a team, but an individual freelancer with a passion for web
      analytics and a dedication to providing exceptional services.
     </p>
     <p className='max-w-2xl'>
      Focused on web analytics and optimization, my aim is simple: to ensure
      your website doesn't just look good but performs exceptionally well in
      generating results and{" "}
      <span className='font-medium'> zain helps me with YouTube.</span>
     </p>
     <div className='w-full sm:w-2/3 md:w-3/4 pt-5'>
      <div className='flex flex-row gap-2'>
       {avatarsDetails.map((avatar, key) => {
        return <AvatarCard avatar={avatar} key={key} />;
       })}
      </div>
     </div>
    </section>
   </ContainerLayout>

   <ContainerLayout>
    <section>
     <TestimonialCard client={clientDetails[3]} />
    </section>
   </ContainerLayout>

   <InfoSection
    title='Optimize your website with advanced analytics'
    description={
     <React.Fragment>
      <p className='font-medium'>
       Our web analytics and tracking strategy fine-tunes your site for better
       user understanding and engagement.
      </p>
      <br />
      Boost your online presence with data-driven insights. If you can't measure
      it, you can't manage it. Ensure visitors not only find what they seek, but
      also what you want them to see. An analytics-driven strategy includes:
      <ul className='list-disc list-inside pl-4 py-2'>
       <li> Advanced tracking setup & navigation</li>
       <li> Data-rich dashboards & reports</li>
       <li> User behavior analysis </li>
       <li>Conversion tracking optimization</li>
      </ul>
      When your website is backed by accurate analytics, it's easier to align
      with user preferences and business objectives.
     </React.Fragment>
    }
    embedId='EzSy4XULN5A'
    testimonial='Listen up, this is crucial!'
   />
   <InfoSection
    title='Harness the Power of Data-Driven Storytelling'
    description={
     <>
      Is your tracking strategy evolving? Your website is your digital
      footprint, reflecting your current brand image. Analytics and content
      shape your online narrative. Using the insights I've gathered, I design
      strategies that echo your message, voice, and tone. Together, we’ll shape
      a digital strategy that resonates with your audience.
      <br />
      <ul className='list-disc list-inside pl-4 py-2'>
       <li>Develop insightful conversion strategies</li>
       <li>Conceptualize analytics messaging & data strategies</li>
       <li>Gather and streamline tracking tools and standards</li>
       <li>Collaborate to forge an online strategy you believe in</li>
      </ul>
      <br />
      By marrying vision to data, your online strategy appeals to visitors,
      compelling meaningful actions.
     </>
    }
    embedId='W0ZgVnIGNW4'
    testimonial='Listen up, this is crucial!'
    flexDirection='sm:flex-row-reverse'
    backgroundOverlay={true}
   />

   <ContainerLayout>
    <TestimonialCard client={clientDetails[3]} />
   </ContainerLayout>

   <InfoSection
    title='Web Analytics: A Symphony of Decisions'
    description={
     <React.Fragment>
      <p>The start is merely the beginning.</p>
      <p>
       Every decision affects outcomes. Every outcome can be analyzed. Every
       analysis offers improvement avenues.
      </p>
      <ul className='list-disc list-inside pl-4 py-2'>
       <li>Setup meticulous tracking with filters, goals, and funnels</li>
       <li>Employ advanced tools like Google Tag Manager</li>
       <li>Regularly review reports and dashboards</li>
       <li>React to data, refining for better results</li>
       <li>Continuously optimize for sustained success</li>
      </ul>
      <p>
       Web analytics isn’t just about numbers; it’s about stories. I translate
       data into insights, crafting strategies that convey your brand's story
       and produce measurable business outcomes.
      </p>
     </React.Fragment>
    }
    embedId='EzSy4XULN5A'
    testimonial='Listen up, this is crucial!'
   />

   <InfoSection
    title='Not Sure What You Need?'
    description={
     <React.Fragment>
      <p>That’s okay. Priorities evolve.</p>
      <p>
       Needs change, and I understand that. Drawing from extensive experience
       with diverse clients, I recognize the shifts in focus that can happen.
       I’m here to adapt and guide.
      </p>
      <ul className='list-disc list-inside pl-4 py-2'>
       <li>Visual aesthetics and branding</li>
       <li>Data insights, results, and ROI</li>
       <li>Collaboration, responsiveness, and care</li>
      </ul>
      <p>
       The roadmap might shift, but the destination remains: A refined online
       strategy you'll cherish.
      </p>
     </React.Fragment>
    }
    embedId='W0ZgVnIGNW4'
    flexDirection='sm:flex-row-reverse'
    backgroundOverlay={true}
   />

   <ContainerLayout>
    <TestimonialCard client={clientDetails[3]} />
   </ContainerLayout> */}
  </main>
 );
};

export default Page;
