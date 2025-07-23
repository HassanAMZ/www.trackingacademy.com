"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function MeetingBooked() {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    const email = queryParams.get("invitee_email");
    const fullName = queryParams.get("invitee_full_name") || "";
    const phone = queryParams.get("text_reminder_number") || "";
    const city = queryParams.get("city") || "";
    const country = queryParams.get("country") || "";
    const userId = queryParams.get("invitee_uuid") || "";

    const [firstName = "", lastName = ""] = fullName.split(" ");

    if (email) localStorage.setItem("email_address", decodeURIComponent(email));
    if (firstName) localStorage.setItem("first_name", decodeURIComponent(firstName));
    if (lastName) localStorage.setItem("last_name", decodeURIComponent(lastName));
    if (phone) localStorage.setItem("phone_number", decodeURIComponent(phone));
    if (city) localStorage.setItem("city", decodeURIComponent(city));
    if (country) localStorage.setItem("country", decodeURIComponent(country));
    if (userId) localStorage.setItem("user_id", decodeURIComponent(userId));

    const hasScheduled = sessionStorage.getItem("gtm_schedule_triggered");
    if (!hasScheduled) {
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "schedule",
        user_data: {
          id: userId,
          email,
          phone,
          address: {
            firstName,
            lastName,
          },
        },
      });
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "generate_lead",
        user_data: {
          id: userId,
          email,
          phone,
          address: {
            firstName,
            lastName,
          },
        },
      });
      sessionStorage.setItem("gtm_schedule_triggered", "true");
    }
  }, []);

  const steps = [
    {
      title: "Step 1",
      description: "Your implementation call is on the calendar.",
    },
    {
      title: "Step 2",
      description:
        "On the call, we’ll walk you through exactly how we’ll deploy your upgraded tracking system.",
    },
    {
      title: "Step 3",
      description:
        "You'll get a clear, customized plan—and see real examples of recovered conversions.",
    },
    {
      title: "Step 4",
      description:
        "Be ready at your computer—our team will screenshare and handle all your technical questions live.",
    },
  ];

  return (
    <Container className="grid min-h-screen max-w-4xl place-content-center space-y-6 text-center">
      {/* HEADER SECTION */}
      <Badge className="mx-auto w-fit text-sm">
        We help businesses recover 30%+ of hidden conversions and cut wasted ad spend—fast.
      </Badge>

      <h1>You're Booked — Here's What's Next</h1>
      <h4 className="text-muted-foreground">
        Your implementation call is confirmed. Here’s what to expect:
      </h4>

      <div className="grid grid-cols-2 gap-4">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <h4 className="font-bold">{step.title}</h4>
            </CardHeader>
            <CardContent className="text-muted-foreground">{step.description}</CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
