import Link from "next/link";
import React from "react";
import Image from "next/image";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import ClientTestimonial from "@/components/home/testimonaials";
import { TypographyH2 } from "@/components/ui/typography";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";

interface BenefitItemProps {
  title: string;
  description: string;
  icon: JSX.Element | string;
}

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  imageUrls: string[];
  packageType: string;
};
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  originalPrice,
  imageUrls,
  packageType,
}) => {
  return (
    <div className="grid grid-rows-[1fr,auto]">
      <div className="lg:grid-auto-rows bg-complementary text-dominant grid h-full w-full gap-4 rounded-lg px-6 py-12">
        <div className="flex items-center justify-between">
          {packageType === "PRO" && <span className="badge">Most Popular</span>}
        </div>

        <h3 className="text-2xl font-bold">{title}</h3>
        <p className=" ">{description}</p>

        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold">{price}</span>
          {originalPrice && (
            <span className="text-primary line-through">{originalPrice}</span>
          )}
        </div>

        <button className="link-primary" type="button">
          Buy Now
        </button>
      </div>
      <div className="bg-dominant text-complementary py-4">
        <h4 className="text-sm">Brands who bought {packageType} package</h4>

        <div className="grid grid-cols-2 items-center justify-center gap-2 py-4">
          {imageUrls.map((image, index) => (
            <div
              key={index}
              className="bg-complementary/10 overflow-hidden rounded-lg object-contain filter"
            >
              <Image
                src={image}
                alt={`Client ${index}`}
                width={1920}
                height={540}
                className="scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BenefitItem: React.FC<BenefitItemProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-complementary flex flex-col gap-2 rounded-lg p-4 text-left">
      <div className="flex items-center gap-2">
        <div className="text-complementary flex h-10 w-10 items-center justify-center rounded-full bg-accent">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className=" ">{description}</p>
    </div>
  );
};

const featureList = [
  "Real-time Data Access",
  "Custom Dashboard Creation",
  "Conversion Tracking",
  "User Behavior Analysis",
  "Multi-Platform Integration",
  "Advanced Segmentation",
  "E-commerce Tracking",
  "Event Tracking Setup",
  "Custom Report Building",
  "Goal Flow Analysis",
  "Funnel Visualization",
  "Audience Demographics Reporting",
  "Retention and Cohort Analysis",
  "Custom Tag Implementation",
  "Data Layer Engineering",
  "Third-Party Data Integration",
  "Cross-Domain Tracking",
  "Data Export and API Access",
  "Page Load Speed Analysis",
  "Privacy Compliance Setup",
];

const benefitItems = [
  {
    title: "Precision Tracking",
    description: "Deploy accurate tracking for data you can trust.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Custom Analytics Solutions",
    icon: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z" />
      </svg>
    ),
    description: "Tailored setups aligned with your unique business goals.",
  },
  {
    title: "Seamless Integration",
    icon: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 00-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 000 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM578.9 546.7a8.03 8.03 0 00-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 00-11.3 0L363 475.3l-43-43a7.85 7.85 0 00-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 68.9-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 000 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2z" />
      </svg>
    ),
    description:
      "Effortless merging of analytics into your current tech stack.",
  },
  {
    title: "Data-Driven Strategies",
    icon: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM288 232c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm128-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm128-168c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z" />
      </svg>
    ),
    description: "Leverage insights to fuel strategic decision-making.",
  },
  {
    title: "Full Transparency",
    icon: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M911.5 700.7a8 8 0 00-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 00-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
      </svg>
    ),
    description: "Clear reporting for insight into your growth metrics.",
  },
  {
    title: "Ongoing Support",
    icon: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
      </svg>
    ),
    description: "Continued assistance to evolve with your analytics needs.",
  },
];

const pricingCardsData = [
  {
    title: "Starter Analytics",
    description: "Essential tracking setup for startups and personal projects.",
    price: "$2,000",
    originalPrice: "",
    imageUrls: ["/images/clients/001.svg", "/images/clients/002.svg"],
    packageType: "STARTER",
  },
  {
    title: "Business Analytics",
    description: "Advanced tracking and custom reports for growing businesses.",
    price: "$3,500",
    originalPrice: "",
    imageUrls: ["/images/clients/003.svg", "/images/clients/004.svg"],
    packageType: "BUSINESS",
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive analytics suite for data-driven enterprises.",
    price: "$5,000",
    originalPrice: "",

    imageUrls: ["/images/clients/005.svg", "/images/clients/006.svg"],
    packageType: "ENTERPRISE",
  },
];

function page() {
  return (
    <React.Fragment>
      <main>
        <section className="container-primary flex flex-col items-center gap-4 py-16 text-center">
          <h1 className="container-secondary text-3xl font-bold lg:py-5">
            Expert Web Analytics & Tracking Integration
          </h1>
          <p className="container-secondary">
            Elevate your online strategy with our bespoke analytics and tracking
            services. We ensure precision, clarity, and growth.
          </p>

          <div className="flex w-full items-center justify-center gap-x-4">
            <Link href="#pricing" className="link-primary">
              View Pricing
            </Link>
          </div>
        </section>

        <ClientTestimonial />

        <section className="py-32">
          <div className="container-primary text-center">
            <p className="text-accent">
              Letting us help you with tracking and analytics
            </p>
            <h2 className="text-dominant text-2xl font-bold">
              Become familiar with your benefits
            </h2>
            <div className="grid gap-3 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {benefitItems.map((item, index) => (
                <BenefitItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            <div>
              <a href="#pricing" className="link-primary">
                Choose Package
              </a>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-dominant text-complementary pt-20">
          <div className="container-primary text-center">
            <p className="text-accent">Our pricing </p>
            <h2 className="text-2xl font-bold">
              Choose the right package for you
            </h2>
            <div className="grid gap-4 py-12 lg:grid-cols-3">
              {pricingCardsData.map((card, index) => (
                <PricingCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  price={card.price}
                  originalPrice={card.originalPrice}
                  imageUrls={card.imageUrls}
                  packageType={card.packageType}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-complementary text-dominant pb-20 pt-12">
          <div className="container-primary text-center">
            <h2 className="py-12 text-3xl font-bold">
              Every Web Analytics Service includes:
            </h2>
            <div className="grid grid-cols-2 gap-8 pt-6 lg:grid-cols-3">
              {featureList.map((feature, index) => (
                <div className="flex-cols flex gap-4 text-left" key={index}>
                  <svg
                    width="18"
                    height="23"
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="2.5"
                      width="18"
                      height="18"
                      rx="9"
                      fill="#BDFD6D"
                    ></rect>
                    <path
                      d="M5 11.3455L7.60526 14.1973L13 8.80273"
                      stroke="#262420"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <p className=" ">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-dominant text-complementary py-20">
          <div className="container-primary">
            <h2 className="py-8 text-center text-2xl font-bold">
              What to Expect When You Engage Our Tracking & Analytics Services
            </h2>

            <div className="border-complementary relative">
              <article className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center">
                  <div className="text-complementary z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <span className="p-4 text-2xl font-bold">1</span>
                  </div>
                  <h3 className="py-4 text-center text-xl font-bold">
                    Initial Consultation
                  </h3>
                  <p className="text-center">
                    A quick discovery session to understand your business needs
                    and analytics goals.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-complementary z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <span className="p-4 text-2xl font-bold">2</span>
                  </div>
                  <h3 className="py-4 text-center text-xl font-bold">
                    Custom Strategy Plan
                  </h3>
                  <p className="text-center">
                    Crafting a tailored tracking and analytics strategy to
                    capture the metrics that matter most.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-complementary z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <span className="p-4 text-2xl font-bold">3</span>
                  </div>
                  <h3 className="py-4 text-center text-xl font-bold">
                    Implementation & Setup
                  </h3>
                  <p className="text-center">
                    Seamless integration of analytics and tracking systems on
                    your website and digital platforms.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-complementary z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <span className="p-4 text-2xl font-bold">4</span>
                  </div>
                  <h3 className="py-4 text-center text-xl font-bold">
                    Ongoing Optimization
                  </h3>
                  <p className="text-center">
                    Regular analysis and refinement to ensure your tracking
                    systems evolve with your business.
                  </p>
                </div>
              </article>

              <div className="border-complementary absolute left-0 top-16 w-full rounded-lg border-t-8"></div>
            </div>
          </div>
        </section>
        <section className="text-dominant bg-complementary py-20">
          <h2 className="container-primary py-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="container-secondary"></div>
        </section>

        <section className="bg-dominant text-complementary py-20">
          <div className="container-primary">
            <div className="flex items-center justify-center rounded-lg bg-accent">
              <div className="items-left flex flex-col p-4 lg:p-8">
                <LearnMoreHeader
                  headingTexts={{
                    heading: (
                      <div>Not ready to start yet? Book a consultation 🤙</div>
                    ),
                    subHeading: (
                      <div>
                        Schedule a call to discuss how our expertise in
                        analytics and tracking can boost your marketing efforts.
                      </div>
                    ),
                  }}
                />
                <Container>
                  <TypographyH2 className="text-center">
                    Optimize Your Tracking in 7 Days! Get Started with No Risk.
                  </TypographyH2>
                  <Button asChild className="w-full">
                    <Link href="/contact"> Schedule a Meeting</Link>
                  </Button>
                </Container>
              </div>
              <div className="relative w-2/3 pt-4">
                <Image
                  width={1185}
                  height={1080}
                  src="/images/hero/about-image.png"
                  alt="Imtiaz Ahmed"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default page;
