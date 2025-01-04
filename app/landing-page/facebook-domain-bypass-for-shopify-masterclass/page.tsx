"use client";

import YoutubeEmbed from "@/components/global/youtube-embed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import {
  ArrowRight,
  Check,
  Clock,
  Database,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

interface Feature {
  icon: React.ElementType;
  title: string;
  shortDescription: string;
  detailedDescription: string[];
  benefits: string[];
}

interface SectionItem {
  title: string;
  items: string[];
  icon: React.ElementType;
  color: string;
}

interface Module {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Bonus {
  title: string;
  description: string;
  value: string;
}

const FeatureCard: React.FC<Feature> = ({
  icon: Icon,
  title,
  shortDescription,
  detailedDescription,
  benefits,
}) => {
  return (
    <div className="cursor-pointer rounded-2xl bg-card p-6 shadow-lg transition-all duration-300 hover:border-2 hover:border-primary/50">
      <div className="mb-4 flex items-center">
        <Icon className="mr-4 h-10 w-10 text-muted-foreground" />
        <Text as="h3" variant="headingMd">
          {title}
        </Text>
      </div>

      <Text as="p" variant="bodyMd" className="mb-4 text-muted-foreground">
        {shortDescription}
      </Text>

      <ul className="mb-4 space-y-3">
        {detailedDescription.map((desc, idx) => (
          <li key={idx} className="flex items-center text-muted-foreground">
            <Check className="text-success mr-2 h-4 w-4" />
            {desc}
          </li>
        ))}
      </ul>

      <div className="rounded-xl bg-muted/30 p-4">
        <Text as="h4" variant="bodyLg" className="mb-3 text-primary">
          Key Benefits
        </Text>
        <div className="flex flex-col gap-4 lg:flex-row">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="glowing-outline rounded-md border border-primary/20 bg-card px-3 py-2 text-center"
            >
              <Text
                as="span"
                variant="bodySm"
                className="text-muted-foreground"
              >
                {benefit}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SectionCard: React.FC<SectionItem> = ({
  title,
  items,
  icon: Icon,
  color,
}) => {
  return (
    <div className="group rounded-2xl bg-card p-8 shadow-lg transition-all hover:shadow-xl">
      <div className="mb-6 flex items-center">
        <Icon
          className={`mr-4 ${color} group-hover:scale-103 h-10 w-10 transition-transform`}
        />
        <Text as="h3" variant="headingMd" className={color}>
          {title}
        </Text>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center text-muted-foreground transition-colors group-hover:text-foreground"
          >
            <Icon className={`mr-2 ${color} h-4 w-4`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MetaAdDominationLandingPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features: Feature[] = [
    {
      icon: Shield,
      title: "Meta Pixel Resurrection Protocol",
      shortDescription: "Revive 'Dead' Pixels with Advanced Techniques",
      detailedDescription: [
        "Create an ironclad tracking ecosystem that survives platform changes",
        "Implement 11 critical ecommerce tracking events",
        "Capture EVERY meaningful user interaction with precision",
      ],
      benefits: [
        "95% Tracking Accuracy",
        "Reduced Data Loss",
        "Platform-Proof Tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "Domain Bypass Masterclass",
      shortDescription: "Outsmart Platform Restrictions Strategically",
      detailedDescription: [
        "Develop custom URL strategies that bypass platform limitations",
        "Master GTM Server Container configuration",
        "Implement advanced metrics subdomain routing techniques",
      ],
      benefits: [
        "Continuous Ad Capability",
        "Reduced Account Restrictions",
        "Marketing Resilience",
      ],
    },
    {
      icon: Database,
      title: "Conversion API Mastery",
      shortDescription: "Advanced Tracking Beyond Simple Pixel Implementation",
      detailedDescription: [
        "Implement comprehensive event tracking methodologies",
        "Develop robust deduplication logic",
        "Ensure maximum data privacy and platform compliance",
      ],
      benefits: [
        "Enhanced Conversion Insights",
        "Reliable Data Collection",
        "Privacy-Compliant Tracking",
      ],
    },
  ];

  const sections: SectionItem[] = [
    {
      title: "Before",
      items: [
        "Constant Ad Account Shutdowns",
        "Unpredictable Tracking",
        "Wasted Ad Spend",
      ],
      icon: X,
      color: "text-destructive",
    },
    {
      title: "After",
      items: [
        "Bulletproof Ad Infrastructure",
        "99% Accurate Tracking",
        "Predictable Scaling",
      ],
      icon: Check,
      color: "text-success",
    },
    {
      title: "The Result",
      items: [
        "+$50,000/Month Consistently",
        "Stable Revenue Stream",
        "Risk-Mitigated Growth",
      ],
      icon: TrendingUp,
      color: "text-primary",
    },
  ];

  const modules: Module[] = [
    {
      title: "Meta Pixel Resurrection Protocol",
      description: "Advanced techniques to revive 'dead' pixels",
      icon: Shield,
    },
    {
      title: "Domain Bypass Masterclass",
      description: "Proprietary strategies to prevent domain blocking",
      icon: TrendingUp,
    },
    {
      title: "Conversion API Optimization",
      description: "Achieve 95% tracking accuracy Meta doesn't reveal",
      icon: Rocket,
    },
  ];

  const bonuses: Bonus[] = [
    {
      title: "Lifetime Course Updates",
      description: "Stay ahead of evolving platform strategies",
      value: "$3,497",
    },
    {
      title: "Private Telegram Mastermind",
      description: "24/7 Access to 7-figure ad experts",
      value: "$5,000",
    },
    {
      title: "Advanced Scaling Masterclasses",
      description: "Blueprints to scale from $2K to $50K",
      value: "$2,997",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section with Subtle Animations */}
      <Container className="relative overflow-hidden py-12 text-center">
        <div className="absolute inset-0 -z-10 animate-pulse rounded-3xl bg-gradient-to-r from-primary/10 to-primary/20 blur-2xl"></div>

        <div className="animate-fade-in-up">
          <Text
            as="h1"
            variant="heading3xl"
            className="to-primary-600 animate-text mb-6 bg-gradient-to-r from-primary bg-clip-text"
          >
            Unlock the Underground Meta Ad Strategy That Turns Blocked Domains
            into Predictable Cash Machines - Without Platform Shutdown Risks
          </Text>

          <Text
            as="p"
            variant="headingLg"
            className="animate-delay-200 animate-fade-in-up mx-auto mb-10 max-w-4xl text-muted-foreground"
          >
            Transform $2,000 Monthly Ad Spend into a $50,000 Revenue Engine
          </Text>
          <YoutubeEmbed embedId="9MGpL_AmEYM" />
          <div className="animate-delay-400 animate-fade-in-up flex justify-center space-x-6 py-6">
            {[
              {
                icon: Shield,
                text: "Proven Strategy",
                color: "text-green-500",
              },
              {
                icon: Rocket,
                text: "Instant Scalability",
                color: "text-blue-500",
              },
              {
                icon: Target,
                text: "Precision Targeting",
                color: "text-purple-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="hover:scale-103 flex items-center rounded-xl bg-card/50 p-3 shadow-sm transition-all hover:shadow-md"
              >
                <feature.icon
                  className={`mr-2 ${feature.color} animate-pulse`}
                />
                <Text as="span" variant="bodyMd">
                  {feature.text}
                </Text>
              </div>
            ))}
          </div>

          <div className="animate-delay-600 animate-fade-in-up">
            <Button
              size="lg"
              className="hover:scale-103 group px-12 py-7 text-xl shadow-2xl transition-all hover:shadow-primary/50"
            >
              Claim Your Spot
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Text
              as="p"
              variant="bodySm"
              className="mt-4 text-muted-foreground"
            >
              Limited to 100 Spots • Price Increases $500 Soon
            </Text>
          </div>
        </div>
      </Container>

      {/* Detailed Features Section */}
      <div className="bg-muted/30 py-20">
        <Text
          as="h2"
          variant="headingXl"
          className="to-primary-600 mb-16 bg-gradient-to-r from-primary bg-clip-text text-center text-transparent"
        >
          Your Path to Ad Domination
        </Text>

        <Container className="grid gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`cursor-pointer rounded-2xl border-2 bg-card p-6 shadow-lg transition-all duration-300 lg:p-12 ${
                activeFeature === index
                  ? "border-2 border-primary shadow-xl"
                  : "border-card transition-shadow hover:border-2 hover:border-primary/50 hover:shadow-primary/30"
              }`}
            >
              <div className="mb-4 flex items-center">
                <feature.icon
                  className={`mr-4 h-10 w-10 ${
                    activeFeature === index
                      ? "animate-bounce text-primary"
                      : "text-muted-foreground"
                  } `}
                />
                <Text
                  as="h3"
                  variant="headingMd"
                  className={activeFeature === index ? "text-primary" : ""}
                >
                  {feature.title}
                </Text>
              </div>

              <div className="animate-fade-in-right">
                <Text
                  as="p"
                  variant="bodyMd"
                  className="mb-4 text-muted-foreground"
                >
                  {feature.shortDescription}
                </Text>

                <ul className="mb-4 space-y-3">
                  {feature.detailedDescription.map((desc, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-muted-foreground"
                    >
                      <Check className="text-success mr-2 h-4 w-4" />
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-muted/30 p-4">
                  <Text as="h4" variant="bodyLg" className="mb-3 text-primary">
                    Key Benefits
                  </Text>
                  <div className="flex flex-col gap-4 lg:flex-row">
                    {feature.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="rounded-md border border-primary/20 bg-card px-3 py-2 text-center"
                      >
                        <Text
                          as="span"
                          variant="bodySm"
                          className="glow text-muted-foreground"
                        >
                          {benefit}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* Transformation Journey Section */}
      <Container className="bg-muted/30 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-6 flex items-center">
                <section.icon
                  className={`mr-4 ${section.color} group-hover:scale-103 h-10 w-10 transition-transform`}
                />
                <Text as="h3" variant="headingMd" className={section.color}>
                  {section.title}
                </Text>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    <section.icon className={`mr-2 ${section.color} h-4 w-4`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Detailed Offer Breakdown */}
      <Container className="py-20">
        <Text
          as="h2"
          variant="headingXl"
          className="to-primary-600 mb-16 bg-gradient-to-r from-primary bg-clip-text text-center text-transparent"
        >
          Meta Ad Domination Masterclass Breakdown
        </Text>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <Card className="shadow-2xl transition-shadow hover:shadow-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Zap className="text-warning mr-3 animate-pulse" />
                Core Training Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="mb-6 flex items-center rounded-xl bg-muted/30 p-4 transition-colors hover:bg-muted/50"
                >
                  <module.icon className="mr-4 h-10 w-10 text-primary" />
                  <div>
                    <Text as="h4" variant="bodyLg" className="font-semibold">
                      {module.title}
                    </Text>
                    <Text
                      as="p"
                      variant="bodySm"
                      className="text-muted-foreground"
                    >
                      {module.description}
                    </Text>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="hover:shadow-success/30 shadow-2xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-success flex items-center">
                <Clock className="animate-spin-slow mr-3 text-primary" />
                Exclusive Bonus Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              {bonuses.map((bonus, index) => (
                <div
                  key={index}
                  className="bg-success/10 hover:bg-success/20 mb-6 flex items-center justify-between rounded-xl p-4 transition-colors"
                >
                  <div>
                    <Text
                      as="h4"
                      variant="bodyLg"
                      className="text-success font-semibold"
                    >
                      {bonus.title}
                    </Text>
                    <Text
                      as="p"
                      variant="bodySm"
                      className="text-muted-foreground"
                    >
                      {bonus.description}
                    </Text>
                  </div>
                  <Text as="p" variant="bodySm" className="text-success">
                    Value: {bonus.value}
                  </Text>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default MetaAdDominationLandingPage;
