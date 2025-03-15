import { GTMCustomEvent } from "@/components/analytics/GTMEvents";
import YoutubeEmbed from "@/components/global/youtube-embed";
import Container from "@/components/ui/container";
import React from "react";
import { cookies } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

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
          <h1>Your Free Audit is Now in Progress!</h1>
          <h4 className="pt-3 text-gray-700">
            We’re analyzing your tracking setup and will complete your audit
            within <strong>the next 48 hours.</strong>
            <br />
            <span className="text-primary font-semibold">
              Book your call now to review the results before slots fill up!
            </span>
          </h4>
        </section>
      </Container>

      {/* BOOKING SECTION */}
      <Container className="max-w-5xl">
        <div className="bg-complementary bg-secondary flex w-full items-center justify-center rounded-lg p-6 shadow-lg">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0wgUDGuk7YMLv1IcsYbgeQwVYnRt39plBBMKmO55fulvLIeQ2ZZqBOGm1IpXYK7zvyl7YBLnlq?gv=true"
            className="min-h-[75vh] w-full rounded-lg border"
          ></iframe>
        </div>
      </Container>

      {/* NEXT STEPS SECTION */}
      <Container className="flex max-w-5xl flex-col gap-6 space-y-3 py-12">
        <h1 className="text-center">🎯 What Happens Next?</h1>

        <h4>
          <span className="text-primary">✅ Step 1: </span>
          Your tracking audit is being prepared. We’ll send you an email with
          the full report within 48 hours.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 2: </span>
          Book your audit review call now to go over the findings and{" "}
          <strong>fix any critical issues immediately</strong>.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 3: </span>
          Once booked, you’ll receive a{" "}
          <strong>calendar invite & meeting link</strong>—make sure to accept
          it!
        </h4>

        <h4>
          <span className="text-primary">✅ Step 4: </span>
          Please be at your computer during the meeting—we’ll{" "}
          <strong>share our screen</strong> to show you exactly what needs
          fixing.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 5: </span>
          Watch the video below to <strong>prepare for the call</strong> and see
          what we’ll cover during the session.
        </h4>
      </Container>

      {/* VIDEO SECTION */}
      <Container className="flex justify-center py-6">
        <YoutubeEmbed embedId="9MGpL_AmEYM" className="max-w-5xl" />
      </Container>
    </React.Fragment>
  );
}
