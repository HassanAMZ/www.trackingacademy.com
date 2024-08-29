import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import Text from "@/components/ui/text"; // Using the provided Text component
import YoutubeEmbed from "@/components/global/youtube-embed";

export default function Page() {
  return (
    <React.Fragment>
      <Container className="space-y-4 py-4">
        <Text as="h1" variant="heading2xl" alignment="center" fontWeight="bold">
          We Are Hiring!
        </Text>
        <Text as="p" variant="bodyMd" alignment="center" tone="subdued">
          Join our team as a full-time Upwork Business Developer and take your
          career to the next level.
        </Text>
      </Container>
      <YoutubeEmbed embedId="9MGpL_AmEYM" />
      <Container className="space-y-4 py-4">
        <section>
          <Text
            as="h2"
            variant="headingLg"
            alignment="start"
            fontWeight="semibold"
            className="mb-4"
          >
            Job Responsibilities:
          </Text>
          <Text
            as="ul"
            variant="bodyMd"
            alignment="start"
            className="space-y-2"
          >
            <Text as="li">
              Manage Upwork bidding in the web analytics niche.
            </Text>
            <Text as="li">
              Communicate fluently in English with clients and team members.
            </Text>
            <Text as="li">
              Leverage your technical background in programming or marketing to
              engage with potential clients.
            </Text>
            <Text as="li">
              Collaborate with the team to optimize bidding strategies and win
              projects.
            </Text>
          </Text>
        </section>

        <section>
          <Text
            as="h2"
            variant="headingLg"
            alignment="start"
            fontWeight="semibold"
            className="mb-4"
          >
            Requirements:
          </Text>
          <Text
            as="ul"
            variant="bodyMd"
            alignment="start"
            className="space-y-2"
          >
            <Text as="li">Pakistani, Male, aged 20-30 years.</Text>
            <Text as="li">Fluent in English, both spoken and written.</Text>
            <Text as="li">
              Technical background in programming or techincal marketing.
            </Text>
            <Text as="li">Proven experience with Upwork bidding profiles.</Text>
            <Text as="li">Availability to work full-time.</Text>
            <Text as="li">
              Laptop or a Computer with Backup for Power Outage
            </Text>
          </Text>
        </section>

        <Button asChild className="flex text-lg font-semibold">
          <Link href="/career/join-the-team">Apply Now</Link>
        </Button>
      </Container>
    </React.Fragment>
  );
}
