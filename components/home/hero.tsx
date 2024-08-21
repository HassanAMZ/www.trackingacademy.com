import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { Star } from "lucide-react";
import TrackingTable from "../global/tracking-table";

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center gap-4 pt-4 text-left lg:grid lg:grid-cols-3 lg:pt-8">
        <div className="space-y-1 lg:col-span-2 lg:space-y-3">
          <Text as="h1" variant="heading3xl">
            <span className="text-primary">Never Miss a Sale Again </span>-
            Track 95% of Your Conversions -{" "}
            <span className="text-primary"> Guaranteed!</span>
          </Text>

          <Text as="p" applyMargin={false}>
            Our proven system ensures you have the most accurate conversion
            data, with minimal effort and no disruption to your current setup.
          </Text>

          <div className="relative w-full max-w-xl space-y-1 rounded-lg border bg-secondary px-6 py-2">
            <div className="absolute -top-4 right-0 flex space-x-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <Text as="p" applyMargin={false} className="font-semibold italic">
              “Shahzada is great and extremely knowledgable and friendly. He
              Helped us out tremendously.”
            </Text>
            <Text as="p" applyMargin={false} className="pb-2 text-xs">
              Mark, <strong>CMO at LemonLawFirm </strong>
            </Text>
            <div className="absolute -bottom-4 right-0 mb-2 mr-2 flex space-x-4">
              <Button
                variant={"outline"}
                className="m-0 h-max rotate-3 transform rounded-lg p-1 text-sm font-semibold"
              >
                12.7 ROAS
              </Button>
              <Button
                variant={"outline"}
                className="m-0 h-max -rotate-3 transform rounded-lg p-1 text-sm font-semibold"
              >
                +64% Conversions
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 space-y-1 py-2 text-left">
            <Text as="p">✔ 95% accuracy or full refund.</Text>
            <Text as="p">✔ Improve Conversion Rates by 30%</Text>
            <Text as="p">✔ Setup and optimized within 7 days.</Text>
          </div>

          <Button asChild>
            <Link href="/contact"> Schedule a Meeting</Link>
          </Button>

          <div className="flex items-center justify-start gap-2">
            <div className="relative h-8 w-8">
              <Avatar className="z-1 absolute left-0 top-0">
                <AvatarImage
                  src="/images/clients/malik-osama.jfif"
                  alt="@malik-osama"
                />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>

              <Avatar className="z-2 absolute left-4 top-0">
                <AvatarImage
                  src="/images/clients/philipp-herglotz.jfif"
                  alt="@philipp-herglotz"
                />
                <AvatarFallback>PH</AvatarFallback>
              </Avatar>

              <Avatar className="z-3 absolute left-8 top-0">
                <AvatarImage
                  src="/images/clients/imtiaz-ahmad.jfif"
                  alt="@imtiaz-ahmad"
                />
                <AvatarFallback>IA</AvatarFallback>
              </Avatar>
            </div>
            <Text as="p" applyMargin={false} className="pl-8 text-sm">
              1032+ websites configured with 95% accuracy
            </Text>
          </div>
        </div>

        <TrackingTable />
      </div>
    </Container>
  );
}
