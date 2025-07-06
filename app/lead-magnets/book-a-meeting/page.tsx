import MeetingCalender from "@/components/contact/meeting-calender";
import LoomEmbed from "@/components/global/loom-embed";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import { Phone, Settings, TrendingUp } from "lucide-react";
import React from "react";

export default async function BookAMeetingPage() {
  const steps = [
    {
      number: "1",
      title: "Onboarding Call",
      description:
        "During the onboarding call, we'll analyze your current setup, understand your goals, and create a custom measurement plan tailored to your business.",
      icon: <Phone className="h-6 w-6" />,
      color: "bg-primary",
    },
    {
      number: "2",
      title: "Tracking Setup",
      description:
        "Our team implements everything for you. No work required on your end - we handle the entire technical setup in just 7 days, so you get the 95% accurate results.",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-primary",
    },
    {
      number: "3",
      title: "Watch ROAS Increase",
      description:
        "Sit back and watch your Ads perform better with bulletproof tracking and crystal-clear attribution data and increase ROAS.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-primary",
    },
  ];

  return (
    <React.Fragment>
      {/* HEADER SECTION */}
      <Container className="max-w-6xl">
        <section className="mx-auto max-w-5xl space-y-4 py-12 text-center">
          <h1 className="animate-fade-in text-center">
            You are one Step away from Fixing your{" "}
            <span className="rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1.5 text-destructive">
              Data Sharing Restriction
            </span>{" "}
            and Track Your Conversions, <span className="text-primary">Again!</span>
          </h1>
          <h4>
            We built the "See Every Sale System" to solve this exact problem.{" "}
            <span className="text-muted-foreground">
              Recover your tracking in a week. Stay compliant. Get back to profitable scaling.
            </span>
          </h4>
        </section>
      </Container>
      <MeetingCalender />
      <div className="bg-linear-to-b from-primary/5 to-background py-24">
        <Container className="max-w-4xl space-y-4">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="">What happens Next?</h2>
            <h4 className="mx-auto max-w-3xl text-muted-foreground">
              Once you have booked a call, we will jump on and audit your current tracking setup to
              identify the gaps and how we can fix your Meta Ads Data sharing Restrictions
            </h4>
          </div>

          <div className="relative space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative mb-12 flex items-start last:mb-0">
                {/* Icon */}
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center ${step.color} rounded-full text-white`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="ml-6 flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <Badge variant="outline">Step {step.number}</Badge>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-linear-to-b from-primary/5 to-background py-24">
        <Container className="max-w-6xl space-y-4">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="">Watch the Video to see how we can help you!</h2>
            <h4 className="mx-auto max-w-3xl text-muted-foreground">
              Understand exactly what's happening to your tracking data and see how we've helped
              300+ restricted niche advertisers get back to full visibility.
            </h4>
          </div>

          <LoomEmbed
            backgroundImage="/images/hero/data-sharing-restrcition-03.png"
            embedId="3768f5d29d724dc2837085355d614c57"
            className="mx-auto max-w-3xl"
          />
        </Container>
      </div>
      <div className="grid w-full place-content-center">
        <h1 className="pt-12 pb-6 text-center text-3xl font-bold">
          Join 300+ Businesses Who've Recovered Their Facebook Tracking
        </h1>
        <h4 className="mx-auto max-w-3xl text-center text-muted-foreground">
          Don't let data sharing restrictions kill your ad performance. Our clients see results
          within 7 Days.
        </h4>
        <TestimonialGrid showUpworkStats={false} upwork={true} />
      </div>
    </React.Fragment>
  );
}
