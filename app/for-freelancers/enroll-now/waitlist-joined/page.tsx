"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import React from "react";

const WaitlistJoined: React.FC = () => {
  sendGTMEvent({
    event: "gtm_custom_event",
    datalayer_event_name: "waitlist_form_submission",
  });
  return (
    <Container className="py-12 text-center">
      <h1>Thank You for Joining the Waitlist!</h1>
      <p className="mt-4">
        We appreciate your interest. You will be among the first to know when
        our courses are available. Stay tuned for updates and exclusive content.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Go to Homepage</Link>
      </Button>
    </Container>
  );
};

export default WaitlistJoined;
