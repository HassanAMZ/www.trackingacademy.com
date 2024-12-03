"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  X,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  ArrowRight,
  Target,
  Rocket,
  Database,
} from "lucide-react";
import Text from "@/components/ui/text";
import Container from "@/components/ui/container";
import YoutubeEmbed from "@/components/global/youtube-embed";

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
    <div className="bg-card rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:border-primary/50 hover:border-2">
      <div className="flex items-center mb-4">
        <Icon className="mr-4 w-10 h-10 text-muted-foreground" />
        <Text as="h3" variant="headingMd">
          {title}
        </Text>
      </div>

      <Text as="p" variant="bodyMd" className="text-muted-foreground mb-4">
        {shortDescription}
      </Text>

      <ul className="space-y-3 mb-4">
        {detailedDescription.map((desc, idx) => (
          <li key={idx} className="flex items-center text-muted-foreground">
            <Check className="mr-2 text-success w-4 h-4" />
            {desc}
          </li>
        ))}
      </ul>

      <div className="bg-muted/30 p-4 rounded-xl">
        <Text as="h4" variant="bodyLg" className="mb-3 text-primary">
          Key Benefits
        </Text>
        <div className="flex lg:flex-row flex-col gap-4">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-card border border-primary/20 px-3 py-2 rounded-md text-center glowing-outline"
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
    <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
      <div className="flex items-center mb-6">
        <Icon
          className={`mr-4 ${color} w-10 h-10 group-hover:scale-103 transition-transform`}
        />
        <Text as="h3" variant="headingMd" className={color}>
          {title}
        </Text>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors"
          >
            <Icon className={`mr-2 ${color} w-4 h-4`} />
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
      <Container className="py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 animate-pulse rounded-3xl blur-2xl -z-10"></div>

        <div className="animate-fade-in-up">
          <Text
            as="h1"
            variant="heading3xl"
            className="mb-6 bg-gradient-to-r from-primary to-primary-600 bg-clip-text animate-text"
          >
            Unlock the Underground Meta Ad Strategy That Turns Blocked Domains
            into Predictable Cash Machines - Without Platform Shutdown Risks
          </Text>

          <Text
            as="p"
            variant="headingLg"
            className="max-w-4xl mx-auto mb-10 text-muted-foreground animate-delay-200 animate-fade-in-up"
          >
            Transform $2,000 Monthly Ad Spend into a $50,000 Revenue Engine
          </Text>
          <YoutubeEmbed embedId="9MGpL_AmEYM" />
          <div className="flex justify-center space-x-6 py-6 animate-delay-400 animate-fade-in-up">
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
                className="flex items-center bg-card/50 p-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-103"
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
              className="group px-12 py-7 text-xl shadow-2xl hover:shadow-primary/50 transition-all hover:scale-103"
            >
              Claim Your Spot
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
      <div className="py-20 bg-muted/30">
        <Text
          as="h2"
          variant="headingXl"
          className="text-center mb-16 bg-gradient-to-r from-primary to-primary-600 text-transparent bg-clip-text"
        >
          Your Path to Ad Domination
        </Text>

        <Container className="grid gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`bg-card rounded-2xl p-6 lg:p-12 shadow-lg cursor-pointer 
                transition-all duration-300 border-2 
                ${
                  activeFeature === index
                    ? "border-2 border-primary shadow-xl"
                    : "hover:border-primary/50 hover:border-2 border-card hover:shadow-primary/30 transition-shadow"
                }`}
            >
              <div className="flex items-center mb-4">
                <feature.icon
                  className={`
                    mr-4 w-10 h-10 
                    ${
                      activeFeature === index
                        ? "text-primary animate-bounce"
                        : "text-muted-foreground"
                    }
                  `}
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
                  className="text-muted-foreground mb-4"
                >
                  {feature.shortDescription}
                </Text>

                <ul className="space-y-3 mb-4">
                  {feature.detailedDescription.map((desc, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-muted-foreground"
                    >
                      <Check className="mr-2 text-success w-4 h-4" />
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="bg-muted/30 p-4 rounded-xl">
                  <Text as="h4" variant="bodyLg" className="mb-3 text-primary">
                    Key Benefits
                  </Text>
                  <div className="flex lg:flex-row flex-col gap-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="bg-card border border-primary/20 px-3 py-2 rounded-md text-center"
                      >
                        <Text
                          as="span"
                          variant="bodySm"
                          className="text-muted-foreground glow"
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
      <Container className="py-20 bg-muted/30">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-center mb-6">
                <section.icon
                  className={`mr-4 ${section.color} w-10 h-10 group-hover:scale-103 transition-transform`}
                />
                <Text as="h3" variant="headingMd" className={section.color}>
                  {section.title}
                </Text>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <section.icon className={`mr-2 ${section.color} w-4 h-4`} />
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
          className="text-center mb-16 bg-gradient-to-r from-primary to-primary-600 text-transparent bg-clip-text"
        >
          Meta Ad Domination Masterclass Breakdown
        </Text>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-2xl hover:shadow-primary/30 transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Zap className="mr-3 text-warning animate-pulse" />
                Core Training Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="flex items-center mb-6 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <module.icon className="mr-4 text-primary w-10 h-10" />
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

          <Card className="shadow-2xl hover:shadow-success/30 transition-shadow">
            <CardHeader>
              <CardTitle className="text-success flex items-center">
                <Clock className="mr-3 text-primary animate-spin-slow" />
                Exclusive Bonus Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              {bonuses.map((bonus, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-6 p-4 bg-success/10 rounded-xl hover:bg-success/20 transition-colors"
                >
                  <div>
                    <Text
                      as="h4"
                      variant="bodyLg"
                      className="font-semibold text-success"
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
