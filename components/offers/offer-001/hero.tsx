"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import TestimonialsCarousel from "../offer-002/testimonial-carousal";
const trackingData = [
  {
    date: "2024-03-01",
    before: 78,
    after: 95,
  },
  {
    date: "2024-03-08",
    before: 82,
    after: 97,
  },
  {
    date: "2024-03-15",
    before: 79,
    after: 96,
  },
  {
    date: "2024-03-22",
    before: 81,
    after: 97,
  },
  {
    date: "2024-03-29",
    before: 84,
    after: 98,
  },
  {
    date: "2024-04-05",
    before: 77,
    after: 95,
  },
  {
    date: "2024-04-12",
    before: 83,
    after: 98,
  },
  {
    date: "2024-04-19",
    before: 80,
    after: 96,
  },
  {
    date: "2024-04-26",
    before: 82,
    after: 97,
  },
  {
    date: "2024-05-02",
    before: 81,
    after: 96,
  },
];

interface TrackingData {
  date: string;
  before: number;
  after: number;
}

const calculateAverage = (
  data: TrackingData[],
): { avgBefore: string; avgAfter: string } => {
  const totalBefore = data.reduce((sum, entry) => sum + entry.before, 0);
  const totalAfter = data.reduce((sum, entry) => sum + entry.after, 0);
  const avgBefore = (totalBefore / data.length).toFixed(2);
  const avgAfter = (totalAfter / data.length).toFixed(2);
  return { avgBefore, avgAfter };
};

const { avgBefore, avgAfter } = calculateAverage(trackingData);

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col-reverse items-start justify-center gap-4 pt-4 text-left md:grid md:grid-cols-5 lg:pt-8">
        <div className="space-y-1 md:col-span-3 md:space-y-3">
          <Text as="h1" variant="heading3xl">
            <span className="text-primary">Never Miss a Sale Again </span>-
            Track 95% of your Conversions -{" "}
            <span className="text-primary"> Guaranteed!</span>
          </Text>

          <Text as="p" variant="bodyMd">
            Our <strong className="text-primary">PrecisionTrack </strong>
            system helps you get the most accurate data for your ads platforms (
            Meta, Google, TikTok, SnapChat etc.) and analytics tools (Ga4,
            PiwikPro, Segment etc.) with 0% effort and no disruption to your
            current setup.
          </Text>

          <div className="max-w-2xl self-start pt-4 md:pt-2">
            <TestimonialsCarousel />
          </div>

          <div className="grid grid-cols-1 space-y-1 py-2 text-left">
            <Text as="p" variant="bodyMd">
              ✔ 95% accuracy.
            </Text>
            <Text as="p" variant="bodyMd">
              ✔ Improve Conversion Rates by 30%
            </Text>
            <Text as="p" variant="bodyMd">
              ✔ Setup and optimized within 7 days.
            </Text>
          </div>

          <Button asChild>
            <Link href="/offers/95-accurate-tracking-in-7-days/submit-query">
              Book a Call
            </Link>
          </Button>

          <div className="flex items-center justify-start gap-2">
            <div className="relative h-8 w-8">
              <Avatar className="z-1 absolute left-0 top-0">
                <AvatarImage
                  src="/images/clients/malik-osama.png"
                  alt="@malik-osama"
                />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>

              <Avatar className="z-2 absolute left-4 top-0">
                <AvatarImage
                  src="/images/clients/philipp-herglotz.png"
                  alt="@philipp-herglotz"
                />
                <AvatarFallback>PH</AvatarFallback>
              </Avatar>

              <Avatar className="z-3 absolute left-8 top-0">
                <AvatarImage
                  src="/images/clients/imtiaz-ahmad.png"
                  alt="@imtiaz-ahmad"
                />
                <AvatarFallback>IA</AvatarFallback>
              </Avatar>
            </div>
            <Text as="p" variant="bodyMd" className="pl-8 text-sm">
              1032+ websites configured with 95% accuracy
            </Text>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-xl border text-sm md:col-span-2">
          <table className="w-full">
            <thead>
              <tr className="m-0 p-0 even:bg-muted">
                <th className="px-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  Date
                </th>
                <th className="px-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  Before
                </th>
                <th className="px-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  <strong className="text-primary">Precision Track </strong>
                </th>
              </tr>
            </thead>
            <tbody>
              {trackingData.map((data, index) => (
                <tr
                  className={cn(
                    "m-0 whitespace-nowrap p-0 even:bg-muted",
                    index < trackingData.length - 3 && "hidden md:table-row",
                  )}
                  key={index}
                >
                  <td className="px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    {data.date}
                  </td>
                  <td className="px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    {data.before}%
                  </td>
                  <td className="px-2 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    {data.after}%
                  </td>
                </tr>
              ))}
              <tr className="m-0 p-0 even:bg-muted">
                <td className="px-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  Average
                </td>
                <td className="px-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  {avgBefore}%
                </td>
                <td className="relative px-2 py-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  {avgAfter}%
                  <svg
                    width="130"
                    height="130"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1240 600"
                    className="absolute -left-8 -top-12 fill-primary"
                  >
                    <path d="M460.3 531c-106.7-3.3-217.2-12.7-315.6-56.5C88 448.7 32.7 394.4 37 327.8c3.2-36 29-64 53.5-88.3C191.8 144.2 332.1 108 465.9 86.2c164-25.2 332-22.5 495.8 2.7 15.7.9 175 34.4 136.2 49.7 73.3 30.4 139 103 86.1 181.7-32.6 46.3-85.7 73.2-135.4 97.6C963 457 870.8 479.5 779 498.6c-104.8 21.1-211.5 35-318.5 32.5Zm28.5-16.5c155.2 2.7 623.7-69.6 687.7-223.9 28.8-82.1-66-134.7-132.5-153a1727.2 1727.2 0 0 0-139-33.7c-6.6-1.8-18.7-1-17.8-10.6-216.3-22.4-493-11.6-689 89.6-56.6 31.2-163.8 103-138.7 178.2 13.4 45.7 52 79.2 94 98.8 105 45.6 222.2 53.2 335.3 54.6Z"></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
