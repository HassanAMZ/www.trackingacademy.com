"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";

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
    <Container className="min-h-screen w-full max-w-5xl p-4">
      <h1 className="text-primary p-4 text-center">Book a call</h1>
      <h4 className="text-muted-foreground p-4 text-center">
        Schedule a time that works for you
      </h4>
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/shahzada-ali?embed=true"
      ></div>
    </Container>
  );
}
