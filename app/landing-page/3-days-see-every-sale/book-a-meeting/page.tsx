"use client";

import Container from "@/components/ui/container";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const existingScript = document.getElementById("hubspot-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.id = "hubspot-script";
      script.async = true;
      document.body.appendChild(script);
    }

    // Re-initialize if needed
    const container = document.querySelector(".meetings-iframe-container");
    if (container && container.getAttribute("data-src")) {
      // This triggers HubSpot's embed logic if already loaded
      (window as any).hbspt?.meetings?.load?.();
    }
  }, []);

  return (
    <section className="grid min-h-screen place-content-center overflow-hidden py-12">
      <Container className="flex w-full max-w-6xl flex-col items-center space-y-8 text-center">
        <h1 className="text-primary">
          You’ve Locked in Your $300 Coupon — Now Book Your Setup Call
        </h1>
        <h4 className="text-muted-foreground max-w-5xl">
          This 15-minute call is to confirm your eligibility, answer any
          questions, and get your 3-Day “See Every Sale” Tracking System
          started.
        </h4>

        <div
          className="meetings-iframe-container w-full"
          data-src="https://meetings.hubspot.com/shahzada-ali?embed=true"
        ></div>
      </Container>
    </section>
  );
}
