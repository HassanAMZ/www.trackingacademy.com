import CallBookedClient from "@/components/global/call-booked-client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Container from "@/components/ui/container";

export default function MeetingBooked() {
  const steps = [
    {
      title: "Step 1",
      description: "Your implementation call is on the calendar.",
    },
    {
      title: "Step 2",
      description:
        "On the call, we'll walk you through exactly how we'll deploy your upgraded tracking system.",
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
    <>
      <CallBookedClient />
      <Container className="grid min-h-screen max-w-4xl place-content-center space-y-6 text-center">
        {/* HEADER SECTION */}
        <Badge className="mx-auto w-fit text-sm">
          We help businesses recover 30%+ of hidden conversions and cut wasted ad spend—fast.
        </Badge>

        <h1>You're Booked — Here's What's Next</h1>
        <h4 className="text-muted-foreground">
          Your implementation call is confirmed. Here's what to expect:
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
    </>
  );
}
