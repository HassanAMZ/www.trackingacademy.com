import CaseStudyFeaturedVideo from "@/components/case-study/case-study-featured-video";
import MeetingCalender from "@/components/contact/meeting-calender";
import Container from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import React from "react";

export default async function BookAMeetingPage() {
  const cookieStore = await cookies();
  const user_data: RequestCookie | undefined = cookieStore.get("user_data");

  return (
    <React.Fragment>
      {/* HEADER SECTION */}
      <Container className="max-w-4xl">
        <section className="space-y-4 py-12 text-center">
          <h2>You're One Step Away From Fixing Your Tracking Blindspot</h2>
          <p>
            We help businesses recover 30%+ of invisible conversions and slash wasted ad spend—fast.
            Book your implementation call now to get started.
          </p>
        </section>
      </Container>{" "}
      <MeetingCalender />
      <Container>
        <CaseStudyFeaturedVideo
          caseStudy={caseStudies[0]}
          verticalVideo={caseStudies[0].embedId?.muxVertical ?? false}
          darkMode={true}
        />
      </Container>
    </React.Fragment>
  );
}
