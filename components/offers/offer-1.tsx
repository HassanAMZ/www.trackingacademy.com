import React from 'react';
import {
  Rocket,
  Target,
  Smile,
  ShieldCheck,
  Headset,
  Database,
  Bug,
  Link2,
  RefreshCw,
  Server,
  ShieldAlert,
} from 'lucide-react';
import Text from '../ui/text';
import FeatureCard from '../home/feature-card';
import VideoPlayer from './offer-001/video-player';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, TrendingUp, Clock, DollarSign, Repeat, Zap } from 'lucide-react';
import Container from '../ui/container';

export default function Offer() {
  const feature03 = [
    {
      icon: <Target className="mb-4 h-12 w-12 text-primary" />,
      title: 'Implementing',
      description: 'Precise tracking across all channels.',
      dialogTitle: 'Implementing Precise Tracking',
      dialogDescription:
        'Start by implementing accurate tracking across all your marketing channels to ensure every interaction is captured and analyzed.',
    },
    {
      icon: <Zap className="mb-4 h-12 w-12 text-primary" />,
      title: 'Optimizing',
      description: 'Based on accurate data insights.',
      dialogTitle: 'Optimizing Data Insights',
      dialogDescription:
        "Use the data you've gathered to optimize your campaigns and improve your performance based on accurate insights.",
    },
    {
      icon: <Repeat className="mb-4 h-12 w-12 text-primary" />,
      title: 'Iterating',
      description: 'Continuously for at least 6 months.',
      dialogTitle: 'Iterating for Continuous Improvement',
      dialogDescription:
        'Continually refine and improve your tracking and campaigns over at least 6 months to achieve sustained growth.',
    },
  ];

  const features02 = [
    {
      icon: <TrendingUp className="mb-4 h-12 w-12 text-primary" />,
      title: 'Improve ROAS',
      description: 'Increase your Return on Ad Spend by up to 30% with precision tracking.',
      dialogTitle: 'Boost Your ROAS',
      dialogDescription:
        'Our tracking solution is designed to optimize your ad spend, ensuring you get the most out of every dollar invested.',
    },
    {
      icon: <Clock className="mb-4 h-12 w-12 text-primary" />,
      title: 'Fast Setup',
      description: 'Setup completed in just 7 days.',
      dialogTitle: 'Quick and Efficient Setup',
      dialogDescription:
        "We understand the importance of time. That's why our setup process is streamlined to be completed within 7 days, so you can start benefiting immediately.",
    },
    {
      icon: <CheckCircle className="mb-4 h-12 w-12 text-primary" />,
      title: 'Accuracy Guarantee',
      description: '95%+ tracking accuracy guaranteed.',
      dialogTitle: 'Precision Tracking',
      dialogDescription:
        'Our advanced tracking techniques ensure that you achieve 95%+ accuracy, providing you with reliable data to make informed decisions.',
    },
    {
      icon: <DollarSign className="mb-4 h-12 w-12 text-primary" />,
      title: 'One-time Setup Fee',
      description: 'Affordable one-time setup cost.',
      dialogTitle: 'Cost-Effective Solution',
      dialogDescription:
        'Our service comes with a one-time setup fee, giving you high-value tracking solutions without recurring costs.',
    },
  ];

  const features = [
    {
      icon: <Server className="mb-4 h-12 w-12 text-primary" />,
      title: 'Server-side Tracking',
      description: 'Complex setup that requires deep technical knowledge.',
      dialogTitle: 'Server-side Tracking Explained',
      dialogDescription:
        'Setting up server-side tracking involves configuring a server to process tracking data instead of relying solely on client-side scripts. This method provides more reliable data, improved privacy compliance, and enhanced performance, but it requires significant technical expertise.',
    },
    {
      icon: <Database className="mb-4 h-12 w-12 text-primary" />,
      title: 'Data Validation',
      description: 'Ensuring your data is clean and reliable takes constant effort.',
      dialogTitle: 'Importance of Data Validation',
      dialogDescription:
        'Data validation is critical to ensure the accuracy and reliability of your tracking. It involves regularly checking the data for errors, inconsistencies, and anomalies to make sure that the insights you derive are trustworthy and actionable.',
    },
    {
      icon: <Link2 className="mb-4 h-12 w-12 text-primary" />,
      title: 'Cross-platform Integration',
      description: 'Making different systems talk to each other seamlessly.',
      dialogTitle: 'Cross-platform Integration Challenges',
      dialogDescription:
        'Integrating different tracking systems across platforms can be complex. It requires careful configuration to ensure that data flows smoothly between systems like Google Analytics, Facebook Pixel, and CRM software, providing a holistic view of your performance.',
    },
    {
      icon: <ShieldAlert className="mb-4 h-12 w-12 text-primary" />,
      title: 'Compliance & Privacy',
      description: 'Navigating the ever-changing landscape of data regulations.',
      dialogTitle: 'Compliance & Privacy in Tracking',
      dialogDescription:
        'With increasing data privacy regulations like GDPR and CCPA, staying compliant is a major concern. Proper tracking involves ensuring that your data collection methods are legal, transparent, and respectful of user privacy.',
    },
    {
      icon: <Bug className="mb-4 h-12 w-12 text-primary" />,
      title: 'Debugging & Troubleshooting',
      description: 'When things go wrong, it can take hours to find the issue.',
      dialogTitle: 'Debugging & Troubleshooting',
      dialogDescription:
        "Tracking systems are prone to issues that can be difficult to diagnose. Whether it's a script not firing or data not being recorded correctly, effective debugging requires a methodical approach to identify and fix issues quickly.",
    },
    {
      icon: <RefreshCw className="mb-4 h-12 w-12 text-primary" />,
      title: 'Staying Up-to-date',
      description: 'Platforms and best practices are always evolving.',
      dialogTitle: 'Keeping Up with Tracking Best Practices',
      dialogDescription:
        'The tracking landscape is always changing, with new tools, updates, and best practices emerging regularly. Staying informed and updating your tracking setup is essential to maintaining accuracy and effectiveness.',
    },
  ];
  return (
    <Container className="space-y-6" id="offer">
      <Container className="space-y-8 py-4">
        <Text as="h1" variant="heading3xl" className="mb-6 text-center font-bold">
          Precision Tracking can completely{' '}
          <span className="text-primary underline">transform your business</span> – it's transformed
          hundreds.
        </Text>

        <Text as="p" variant="bodyMd">
          If we haven't met before – hi, I'm Hassan, founder of Precision Track 👋
        </Text>

        <Text as="p" variant="bodyMd">
          I started Precision Track in 2020, after seeing countless businesses struggle with
          inaccurate data and lost revenue. We started with{' '}
          <span className="font-semibold text-primary">0 clients, 0 revenue, and a big vision</span>
          . I knew nothing about building a SaaS product, but after months of research and
          development, we created something revolutionary.
        </Text>

        <Text as="p" variant="bodyMd">
          Growing the business was challenging at first. We were{' '}
          <span className="font-semibold">working 80+ hours a week</span>, constantly iterating on
          our product, and trying to convince skeptical marketers of the power of precise tracking.
          But we knew the impact accurate data could have on businesses...
        </Text>

        <Text as="h2" variant="heading2xl" className="mb-4 text-xl font-semibold">
          We wanted to give marketers the clarity and confidence that comes with 95%+ tracking
          accuracy.
        </Text>

        <Text as="p" variant="bodyMd">
          12 months later, we had helped over{' '}
          <span className="font-semibold text-primary">100 businesses</span> dramatically improve
          their ROAS and scale their ad spend with confidence. Two years on, we've worked with{' '}
          <span className="font-semibold text-primary">over 1,000 companies</span>, saving them
          millions in ad spend and unlocking growth they never thought possible.
        </Text>

        <Text as="p" variant="bodyMd">
          Now,{' '}
          <span className="font-semibold">
            Precision Track is the go-to solution for businesses serious about optimization
          </span>
          . We've grown from a small startup to a team of dedicated experts, all focused on one
          mission: giving you the most accurate data possible.
        </Text>

        <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features02.map((feature, index) => (
            <FeatureCard
              key={index}
              className="items-start"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              dialogTitle={feature.dialogTitle}
              dialogDescription={feature.dialogDescription}
            />
          ))}
        </div>

        <Text as="p" variant="bodyMd" className="mb-4 font-semibold">
          I genuinely believe that with the right tracking, you can transform your marketing efforts
          and scale your business beyond what you thought possible.
        </Text>

        <Text as="p" variant="bodyMd" className="mb-6">
          So, how do you harness the power of precision tracking? How do you unlock the potential of
          your marketing data? Well, it starts with a conversation...
        </Text>

        <Button asChild className="w-full font-semibold">
          <Link href="contact">Book Your Free Strategy Call</Link>
        </Button>
      </Container>

      <Container className="py-4">
        <Text as="h1" variant="heading3xl" className="mb-6 text-center font-bold">
          The Simple <span className="text-primary underline">"Secret" Formula</span> to 95%+
          Tracking Accuracy
        </Text>

        <Text as="p" variant="bodyMd">
          Over the last 5 years, I've learned a lot about what it takes to{' '}
          <span className="font-semibold">build reliable tracking systems</span> from scratch,{' '}
          <span className="font-semibold">provide value</span> consistently, and{' '}
          <span className="font-semibold">optimize ROI</span> in a data-driven way. I've spent{' '}
          <span className="font-semibold text-primary">thousands of hours</span>, and over{' '}
          <span className="font-semibold text-primary">
            $100,000 in courses and coaching programs
          </span>{' '}
          to try and find the secret sauce that helps businesses track effectively and scale their
          growth.
        </Text>

        <Text as="p" variant="bodyMd">
          And while I've learned a lot of things (more on that later), the biggest thing I've
          learned is this:
        </Text>

        <Text as="p" variant="bodyMd" className="mb-4 text-center text-xl font-semibold">
          There's no secret to building a life-changing tracking system.
        </Text>

        <Text as="p" variant="bodyMd">
          It's just a matter of:
        </Text>

        <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {feature03.map((feature, index) => (
            <FeatureCard
              key={index}
              className="items-start"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              dialogTitle={feature.dialogTitle}
              dialogDescription={feature.dialogDescription}
            />
          ))}
        </div>

        <Text as="p" variant="bodyMd" className="mb-4 font-semibold">
          That's all it takes.
        </Text>

        <Text as="p" variant="bodyMd">
          I <span className="font-semibold">personally guarantee</span> that if you follow this
          3-part formula,{' '}
          <span className="font-semibold text-primary">your business will transform</span> in ways
          you can't imagine.
        </Text>

        <Text as="p" variant="bodyMd" className="mb-8">
          You'll gain <span className="font-semibold">incredibly valuable insights</span>, you'll
          make data-driven decisions that impress your team and clients, and you'll start to see
          real, measurable growth in your ROI. You might even get messages from people about how
          your optimized campaigns have changed their business 😊
        </Text>

        <Button asChild className="w-full font-semibold">
          <Link href="contact" className="h-auto text-wrap text-center">
            It seems simple in theory, but the execution is slightly more difficult.
          </Link>
        </Button>
      </Container>

      <Container className="py-4">
        <Text as="h1" variant="heading3xl" className="mb-6 text-center font-bold">
          Why do so few <span className="text-primary underline">businesses actually succeed</span>{' '}
          with precision tracking?
        </Text>

        <Text as="p" variant="bodyMd" className="mb-4 text-center text-xl font-semibold">
          One word – complexity.
        </Text>

        <Text as="p" variant="bodyMd">
          Implementing precise tracking is hard because it requires a deep understanding of multiple
          systems and platforms. And unless you're a full-time data analyst with no other
          responsibilities, tracking accuracy is probably something you don't have a lot of time to
          focus on.
        </Text>

        <Text as="p" variant="bodyMd">
          Sure, if you're a tech-savvy marketer with unlimited resources, you could probably figure
          it out given enough time. But if you're like most marketers, and you've got an actual
          business to run, or clients to manage, or you just don't have 40+ hours a week to devote
          to perfecting your tracking setup, things are a lot harder.
        </Text>

        <Text as="p" variant="bodyMd" className="mb-8">
          To achieve 95%+ tracking accuracy, you've got to master a bunch of different skills, some
          of which have entire university courses built around them, which can take years to master.
        </Text>

        <Text as="h2" variant="heading2xl" className="mb-4 text-xl font-bold">
          There are dozens of ways in which tracking sucks up your time
        </Text>

        <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              className="items-start"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              dialogTitle={feature.dialogTitle}
              dialogDescription={feature.dialogDescription}
            />
          ))}
        </div>

        <Text as="p" variant="bodyMd">
          And whether you figure it out on your own or not, you'll also have to do all this while
          juggling your core business responsibilities, client relationships, and trying to avoid
          burnout.
        </Text>

        <Text as="p" variant="bodyMd">
          I'm not saying that you can't figure all of this out on your own.
        </Text>

        <Text as="p" variant="bodyMd" className="mb-8">
          I did, but it took me 5 years, and $100k+ in courses and coaching. Yes, there are
          thousands of tutorials out there teaching you how to do all of these things, but all those
          videos will take you thousands of hours to watch, and thousands of hours to implement.
        </Text>

        <Text as="p" variant="bodyMd" className="mb-8 text-center font-semibold">
          And even then, you might still get it wrong and not see any results.
        </Text>

        <Button asChild className="w-full font-semibold">
          <Link href="contact">Skip the Learning Curve - Get 95% Accuracy in 7 Days</Link>
        </Button>
      </Container>
      <Container className="py-4">
        <Text as="h1" variant="heading3xl" className="mb-6 text-center font-bold">
          So how do you succeed with{' '}
          <span className="text-primary underline">95% Accurate Tracking</span>?
        </Text>

        <Text as="p" variant="bodyMd" className="text-center font-bold text-primary">
          You build a Precision Tracking System.
        </Text>

        <Text as="p" variant="bodyMd" className="font-medium">
          That's the secret.
        </Text>

        <Text as="p" variant="bodyMd">
          If you can systemize and operationalize your tracking setup, you’ll be able to ensure that
          all your marketing efforts are accurately tracked, enabling you to make better decisions
          and maximize your ROI, <strong>without sacrificing your time.</strong>
        </Text>

        <Text as="p" variant="bodyMd">
          Just like successful businesses have systemized their processes for consistent results,
          you want to build a system around your tracking setup that provides leverage.
        </Text>

        <Text as="p" variant="bodyMd" className="text-center font-bold text-primary">
          Systems provide leverage.
        </Text>

        <Text as="p" variant="bodyMd">
          Leverage is how you increase your output while saving time. That's the true secret to
          achieving 95%+ tracking accuracy.
        </Text>

        <Text as="p" variant="bodyMd" className="">
          Build a system that allows you to:
        </Text>

        <Text as="ul" className="">
          <Text as="li">Implement precise tracking across all channels</Text>
          <Text as="li">Monitor and validate your data regularly</Text>
          <Text as="li">Optimize based on accurate data insights</Text>
          <Text as="li">Iterate continuously for sustained growth</Text>
        </Text>

        <Text as="p" variant="bodyMd">
          This doesn’t suck the creativity out of your business. Instead,{' '}
          <strong>it multiplies it</strong>, because you’re spending your time focusing on what
          matters—growing your business and achieving your goals.
        </Text>

        <Text as="p" variant="bodyMd" className="text-center font-semibold">
          If you build a system, it takes a lot less time.
        </Text>

        <Text as="p" variant="bodyMd" className="text-center">
          I’ve built these systems for my clients, and I can help you build yours too.
        </Text>

        <Button asChild className="w-full font-semibold">
          <Link href="contact">Ready to take the next step?</Link>
        </Button>
      </Container>

      <Container className="py-4">
        <Text as="h1" variant="heading3xl" id="our-work" className="mb-6 text-center">
          Our <span className="text-primary">Precision Track</span> Solution Guarantees 95% Tracking
          Accuracy
        </Text>
        <Text as="p" variant="bodyMd" className="mb-6 text-center">
          We ensure your tracking is accurate with an easy setup, full testing, and low maintenance.
          Our system helps you make better decisions and increase your profits.
        </Text>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Rocket className="mb-4 h-12 w-12 text-primary" />}
            title="Quick Setup"
            description="We set up your tracking system in 7 days. Our team handles everything to ensure it works smoothly with no downtime."
            dialogTitle="Quick Setup"
            dialogDescription="Our expert team will set up your tracking system in just 7 days, ensuring it works smoothly with no downtime. We handle everything, so you can focus on your business."
          />
          <FeatureCard
            icon={<Target className="mb-4 h-12 w-12 text-primary" />}
            title="High Accuracy"
            description="Get 95% accuracy, which helps you make better decisions and increase your profits. Our system is easy to maintain with low costs."
            dialogTitle="High Accuracy"
            dialogDescription="Achieve 95% accuracy in your tracking, allowing you to make better decisions and increase your profits. Our system is designed for easy maintenance and low costs."
          />
          <FeatureCard
            icon={<Smile className="mb-4 h-12 w-12 text-primary" />}
            title="Ease of Use"
            description="Our system is user-friendly and doesn't require much technical knowledge. It grows with your business while staying accurate and efficient."
            dialogTitle="Ease of Use"
            dialogDescription="Our user-friendly system is simple to use and doesn’t require much technical knowledge. It grows with your business while maintaining accuracy and efficiency."
          />
        </div>

        <VideoPlayer
          src="/videos/home/reason-comparison-horizontal.mp4"
          placeholder="/images/home/reason-comparison-horizontal.gif"
          className="hidden md:block"
        />
        <VideoPlayer
          src="/videos/home/reason-comparison-vertical.mp4"
          placeholder="/images/home/reason-comparison-vertical.gif"
          className="block md:hidden"
        />

        <Text as="h1" variant="heading3xl" className="text-center">
          Enjoy the End Results
        </Text>
        <Text as="p" variant="bodyMd" className="mb-6 text-center">
          We make sure your tracking is 95% accurate so you get the right data every time. Plus, our
          support team is here to help you all day, every day.
        </Text>

        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            icon={<ShieldCheck className="mb-4 h-12 w-12 text-primary" />}
            title="Guaranteed Accuracy"
            description="We guarantee 95% tracking accuracy within 7 days. Your satisfaction is our priority."
            dialogTitle="Guaranteed Accuracy"
            dialogDescription="We guarantee 95% tracking accuracy within 7 days. Your satisfaction is our top priority."
          />
          <FeatureCard
            icon={<Headset className="mb-4 h-12 w-12 text-primary" />}
            title="24/7 Support"
            description="Our customer service team is available 24/7 to help you. Experience the difference our system can make for your business."
            dialogTitle="24/7 Support"
            dialogDescription="Our customer service team is available 24/7 to assist you. Experience the difference our dedicated support can make for your business."
          />
        </div>
      </Container>
    </Container>
  );
}
