import YoutubeEmbed from "@/components/global/youtube-embed";
import Container from "@/components/ui/container";
import React from "react";
export default function Page() {
  return (
    <React.Fragment>
      <Container className="max-w-6xl">
        <section className="space-y-2 py-12">
          <h1 className="text-center">
            <span className="text-primary">Final Step</span> Book a Call Below
            ...
          </h1>
        </section>

        <div className="bg-complementary bg-secondary flex w-full items-center justify-center">
          <iframe
            src="https: //calendar.google.com/calendar/appointments/schedules/AcZssZ0wgUDGuk7YMLv1IcsYbgeQwVYnRt39plBBMKmO55fulvLIeQ2ZZqBOGm1IpXYK7zvyl7YBLnlq?gv=true"
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
