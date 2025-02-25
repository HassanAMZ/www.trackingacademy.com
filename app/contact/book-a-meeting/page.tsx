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
      )}{" "}
      <Container className="max-w-6xl">
        <section className="space-y-2 py-12">
          <h1 className="text-center">
            <span className="text-primary">Final Step</span> Book a Call Below
            ...
          </h1>
        </section>

        <div className="bg-complementary bg-secondary flex w-full items-center justify-center">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0wgUDGuk7YMLv1IcsYbgeQwVYnRt39plBBMKmO55fulvLIeQ2ZZqBOGm1IpXYK7zvyl7YBLnlq?gv=true"
            className="min-h-[75vh] w-full"
          ></iframe>
        </div>
      </Container>
      <Container className="flex max-w-4xl flex-col gap-4 space-y-3 py-12 text-center">
        <h4>
          <span className="text-primary">✅ Step 1: </span>
          You will receive an email with a meeting invite for your scheduled
          time. Make sure to accept the invite so it shows up in your calendar.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 2: </span>
          You will also receive a Meeting link in the meeting invite, which is
          where the meeting will be held.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 3: </span>
          Please be at your computer for the meeting, as we may share our screen
          with you to review your business.
        </h4>

        <h4>
          <span className="text-primary">✅ Step 4: </span>
          Watch the video below to prepare for our call and learn what we will
          cover during our session.
        </h4>
      </Container>
      {/* <YoutubeEmbed embedId="9MGpL_AmEYM" className="max-w-5xl" /> */}
    </React.Fragment>
  );
}
