import { GTMCustomEvent } from "@/components/analytics/GTMEvents";
import YoutubeEmbed from "@/components/global/youtube-embed";
import Container from "@/components/ui/container";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import React from "react";

export default async function Page() {
  const cookieStore = await cookies();
  const user_data: RequestCookie | undefined = cookieStore.get("user_data");

  // Transform the data structure
  const transformUserData = (data: any) => {
    const [first_name = "", last_name = ""] = (data.name || "").split(" ");

    return {
      email: data.email || "",
      phone: data.phone || "",
      address: {
        first_name,
        last_name,
      },
    };
  };

  let transformedUserData;
  try {
    const rawData = user_data?.value ? JSON.parse(user_data.value) : undefined;
    transformedUserData = rawData ? transformUserData(rawData) : undefined;
  } catch (error) {
    console.error("Failed to parse user data:", error);
    transformedUserData = undefined;
  }

  return (
    <React.Fragment>
      {transformedUserData && (
        <GTMCustomEvent
          event_name="contact_form_submission"
          user_data={transformedUserData}
        />
      )}
      {/* HEADER SECTION */}
      <Container className="max-w-6xl">
        <section className="space-y-4 py-12 text-center">
          <h1>You're One Step Away From Fixing Your Tracking Blindspot</h1>
          <h4 className="text-muted-foreground pt-3">
            We help businesses recover 30%+ of invisible conversions and slash
            wasted ad spend—fast.
            <br />
            <span className="text-primary font-semibold">
              Book your implementation call now to get started.
            </span>
          </h4>
        </section>
      </Container>

      {/* BOOKING SECTION */}
      <Container className="max-w-5xl">
        <div className="flex w-full items-center justify-center rounded-lg p-6 shadow-lg">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0wgUDGuk7YMLv1IcsYbgeQwVYnRt39plBBMKmO55fulvLIeQ2ZZqBOGm1IpXYK7zvyl7YBLnlq?gv=true"
            className="min-h-[75vh] w-full rounded-lg border"
          ></iframe>
        </div>
      </Container>

      {/* NEXT STEPS SECTION */}
      <Container className="flex max-w-5xl flex-col gap-6 space-y-3 py-12">
        <h1 className="text-center">🚀 What Happens Next?</h1>

        <h4>
          <span className="text-primary">✅ Step 1: </span>
          Book your implementation call using the calendar above.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 2: </span>
          On the call, we’ll walk you through exactly how we’ll deploy your
          upgraded tracking system—customized for your tech stack.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 3: </span>
          You’ll get a clear plan, timeline, and see real examples of how we
          recover lost conversions and ad performance.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 4: </span>
          Be at your computer—our team will screen share and answer any
          technical questions live.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 5: </span>
          Watch the quick video below to prepare for the call and see what's
          possible when your tracking is fully fixed.
        </h4>
      </Container>

      {/* VIDEO SECTION */}
      <Container className="flex justify-center py-6">
        <YoutubeEmbed embedId="9MGpL_AmEYM" className="max-w-5xl" />
      </Container>
    </React.Fragment>
  );
}
