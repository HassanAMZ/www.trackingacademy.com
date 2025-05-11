"use client";

import { useState } from "react";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import YoutubeEmbed from "@/components/global/youtube-embed";
import Link from "next/link";

export default function Page() {
  return (
    <section className="grid min-h-screen place-content-center overflow-hidden py-12">
      <Container className="flex max-w-6xl flex-col items-center space-y-8 text-center">
        <h1>
          3-Day “See Every Sale” Tracking Setup For Facebook's Data Sharing
          Restrictions
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
          <Link href="https://buy.stripe.com/28odUW1U72AD87ubIK?prefilled_promo_code=300OFFRESTRICTEDDATA">
            <div>
              💰 Ready to reclaim your Meta tracking (and $300 off)?
              <span className="mt-2 block text-sm font-medium opacity-90">
                Click here and the Discount code will be added to the checkout
                automatically
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
            <Link href="./book-a-meeting">
              <div>
                <span className="underline">
                  🔒 Book Your Free 15-Minute Setup Call
                </span>
                <br />
                <span>
                  We’ll confirm your eligibility, answer questions, and reserve
                  your $300 discount — setup begins right after
                </span>
              </div>
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
