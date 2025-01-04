import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { Link } from "next-view-transitions";
import React from "react";

const TOSPage = () => {
  return (
    <React.Fragment>
      <Container className="tos-container space-y-4">
        <header className="tos-header">
          <Text as="h4" variant="headingLg">
            Terms of Service
          </Text>
        </header>

        <section className="tos-section">
          <Text as="h4" variant="headingLg">
            Acceptance of Terms
          </Text>
          <Text as="p" variant="bodyMd">
            By accessing and using TrackingAcademy.com, you accept and agree to
            be bound by the terms and provision of this agreement.
          </Text>
        </section>

        <section className="tos-section">
          <Text as="h4" variant="headingLg">
            Provision of Services
          </Text>
          <Text as="p" variant="bodyMd">
            TrackingAcademy.com provides educational content on digital tracking
            technologies. We reserve the right to modify or discontinue our
            services at any time.
          </Text>
        </section>

        <section className="tos-section">
          <Text as="h4" variant="headingLg">
            Intellectual Property
          </Text>
          <Text as="p" variant="bodyMd">
            All content, including videos and blogs, on TrackingAcademy.com are
            the exclusive property of TrackingAcademy.com and are protected by
            copyright and other intellectual property laws.
          </Text>
        </section>

        <section className="tos-section">
          <Text as="h4" variant="headingLg">
            User Conduct
          </Text>
          <Text as="p" variant="bodyMd">
            Users are expected to use TrackingAcademy.com responsibly and to
            respect the rights and dignity of others.
          </Text>
        </section>

        <section className="tos-section">
          <Text as="h4" variant="headingLg">
            Disclaimer of Warranties
          </Text>
          <Text as="p" variant="bodyMd">
            The services and content on TrackingAcademy.com are provided "as
            is". We disclaim all warranties, express or implied, regarding the
            accuracy or reliability of content.
          </Text>
        </section>

        <section className="tos-section">
          <Text as="h4" variant="headingLg">
            Contact Us
          </Text>
          <Text as="p" variant="bodyMd">
            If you have any questions regarding these Terms of Service, please
          </Text>
        </section>

        <Button asChild className="w-full">
          <Link href="/contact"> Schedule a Meeting</Link>
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default TOSPage;
