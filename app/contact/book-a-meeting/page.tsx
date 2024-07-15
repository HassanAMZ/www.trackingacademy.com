import React from "react";
import YoutubeEmbed from "@/components/global/youtube-embed";
import TypographyH1 from "@/components/ui/typography-h1";
import TypographyP from "@/components/ui/typography-p";
import Container from "@/components/ui/container";
import { GTMCustomEvent } from "@/components/analytics/GTMEvents";

export default function Page() {
  return (
    <Container>
      <section className="space-y-2 pb-2 pt-6">
        <TypographyH1 className="text-center">
          <span className="text-primary">Final Step</span> Book a Call Below ...
        </TypographyH1>
      </section>

      <div className="flex w-full items-center justify-center py-4">
        <div className="bg-complementary min-h-[60vh] min-w-[92vw] rounded-md bg-secondary md:min-h-[70vh] md:min-w-[60vw]">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0wgUDGuk7YMLv1IcsYbgeQwVYnRt39plBBMKmO55fulvLIeQ2ZZqBOGm1IpXYK7zvyl7YBLnlq?gv=true"
            className="min-h-[60vh] min-w-[95vw] md:min-h-[70vh] md:min-w-[60vw]"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 pb-4 text-xl leading-normal">
        <div>
          <TypographyP>
            <span className="text-primary">✅ Step 1:</span>
            You will receive an email with a meeting invite for your scheduled
            time. Make sure to accept the invite so it shows up in your
            calendar.
          </TypographyP>
        </div>
        <div>
          <TypographyP>
            <span className="text-primary">✅ Step 2:</span>
            You will also receive a Zoom link in the meeting invite, which is
            where the meeting will be held.
          </TypographyP>
        </div>
        <div>
          <TypographyP>
            <span className="text-primary">✅ Step 3:</span>
            Please be at your computer for the meeting, as we may share our
            screen with you to review your business.
          </TypographyP>
        </div>
        <div>
          <TypographyP>
            <span className="text-primary">✅ Step 4:</span>
            Watch the video below to prepare for our call and learn what we will
            cover during our session.
          </TypographyP>
        </div>
      </div>

      <YoutubeEmbed embedId="9MGpL_AmEYM" />
    </Container>
  );
}
