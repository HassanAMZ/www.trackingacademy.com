import React from "react";
import LearnMore from "@/components/global/LearnMore";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import Image from "next/image";
import TypographyH1 from "@/components/ui/typography-h1";
import TypographyP from "@/components/ui/typography-p";

export default function Page() {
  return (
    <section>
      <TypographyH1 className="text-center">Hey, I'm Hassan 👋</TypographyH1>
      <TypographyP>
        I'm a Top Rated Freelancer on Upwork, here's what you should know about
        me.
      </TypographyP>

      <section className="pt-2">
        <Image
          src="/images/social-sharing.png"
          alt="Imtiaz Ahmed"
          width={1920}
          height={1080}
          className="rounded-lg"
        />
      </section>
      <div className="container-secondary divide-y p-4">
        <LearnMore
          detailsList={[
            {
              icon: "📚",
              header: "Top Rated Web Analytics Experts",
              details:
                "With 100% Job Success, We specialize in web analytics, providing expertise in tools like GA4, Snapchat, Gads, FB Pixel, and CAPI server-side tracking, and have worked with renowned clients like BookOnline.com and TruelyBeauty.com",
            },
            {
              icon: "🌎",
              header: "Global Impact",
              details:
                "Our work has not only spanned 270+ diverse clients but has also been featured in substantial corporations, enabling me to navigate and understand varied industry landscapes and cultural nuances in business.",
            },
            {
              icon: "🔧",
              header: "1000+ Total Jobs Completed",
              details:
                "Successfully completed a spectrum of 263 jobs, delving into diverse challenges in web analytics and tracking setups, always dedicated to delivering value and tangible solutions to clients across various industries.",
            },
          ]}
        />
      </div>
    </section>
  );
}
