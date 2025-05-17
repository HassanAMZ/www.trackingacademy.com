"use client";

import YoutubeEmbed from "@/components/global/youtube-embed";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const formTimestamp = document.cookie
      .split("; ")
      .find((row) => row.startsWith("form_submission_timestamp="))
      ?.split("=")[1];

    if (formTimestamp) {
      const name = getCookie("name");
      const email = getCookie("email");
      const phone = getCookie("phone");
      const timestamp_id = getCookie("timestamp_id");

      let first_name = "";
      let last_name = "";

      if (name) {
        const parts = name.trim().split(" ");
        first_name = parts[0];
        last_name = parts.length > 1 ? parts.slice(1).join(" ") : ""; // Handles multi-part last names too
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "gtm_custom_event",
        datalayer_event_name: "Lead",
        form_submission_id: timestamp_id,
        user_data: {
          email,
          phone,
          address: {
            first_name,
            last_name,
          },
        },
      });

      console.log("Lead event pushed to dataLayer.");
    }

    function getCookie(name: string): string | undefined {
      const value = document.cookie
        .split("; ")
        .find((row) => row.startsWith(name + "="))
        ?.split("=")[1];

      return value ? decodeURIComponent(value) : undefined;
    }

    document.cookie = "form_submission_timestamp=; Max-Age=0; path=/";
  }, []);

  const pathname = usePathname();
  return (
    <section className="grid min-h-screen place-content-center overflow-hidden py-12">
      <Container className="flex max-w-6xl flex-col items-center space-y-8 text-center">
        <h1>
          300$ OFF: <span className="text-primary"> “See Every Sale”</span>{" "}
          Tracking Setup For Facebook's Data Sharing Restrictions
        </h1>
        <h4 className="text-muted-foreground max-w-3xl">
          Discover how our 3-Day ‘See Every Sale’ System brings back your
          conversion tracking — without any risk, tech headaches, or shady
          third-party tools.
        </h4>

        {/* VSL Video */}
        <div className="w-full max-w-4xl">
          <YoutubeEmbed embedId="9MGpL_AmEYM" className="max-w-5xl" />
        </div>

        {/* Primary CTA Button */}
        <Button
          size="lg"
          className="hover:bg-primary/90 flex flex-col py-20 text-xl font-bold text-wrap whitespace-pre-wrap sm:py-16 md:py-12"
          asChild
        >
          <Link href={`${pathname}/book-a-meeting`}>
            <div>
              🔒 Book Your Free 15-Minute Setup Call
              <br />
              <span className="mt-2 block text-sm font-medium ">
                We’ll confirm your eligibility, answer questions, and reserve
                your $300 discount — setup begins right after
              </span>
            </div>
          </Link>
        </Button>

        {/* Secondary CTA */}
        <div>
          <Button
            variant="link"
            className="max-w-lg text-wrap whitespace-pre-wrap"
            asChild
          >
            <Link href="https://buy.stripe.com/28odUW1U72AD87ubIK?prefilled_promo_code=300OFFRESTRICTEDDATA">
              <div>
                <span className="underline">
                  💰 Ready to reclaim your Meta tracking (and $300 off)?
                </span>
                <br />
                <span className="">
                  Click here and the Discount code will be added to the checkout
                  automatically
                </span>
              </div>
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
