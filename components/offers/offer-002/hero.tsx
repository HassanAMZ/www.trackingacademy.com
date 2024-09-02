"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import React, { useEffect, useState } from "react";
import YoutubeEmbed from "@/components/global/youtube-embed";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Text from "@/components/ui/text";
export default function Hero() {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const deadline = new Date("2024-08-14");
      const today = new Date();
      const timeDiff = deadline.getTime() - today.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(daysDiff);
    };

    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 86400000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="">
      <div className="flex flex-col items-center justify-center space-y-4 py-4 pt-4 text-center sm:py-6 lg:pt-8">
        <Text
          as="p"
          variant="bodyMd"
          className="w-max rounded-lg bg-accent p-2 text-center"
        >
          <strong>{daysLeft} days to upgrade to Checkout Extensibility.</strong>{" "}
          Act now to avoid disruptions.{" "}
        </Text>
        <Text as="h1" variant="heading3xl">
          <span className="text-primary">Upgrade Your Shopify Checkout </span>
          with us
        </Text>

        <Text as="p" variant="bodyMd" applyMargin={false}>
          Don't wait until the last minute. Ensure your store is prepared for
          the future of e-commerce with Checkout Extensibility{" "}
        </Text>

        <YoutubeEmbed embedId="9MGpL_AmEYM" className="max-w-4xl p-0" />

        <div className="grid grid-cols-2 space-y-1 py-2 text-left">
          <Text as="p" variant="bodyMd">
            <span className="text-primary">✔ </span>
            95% accuracy guarantee
          </Text>
          <Text as="p" variant="bodyMd">
            <span className="text-primary">✔ </span>
            Increase conversion rates by up to 30%
          </Text>
          <Text as="p" variant="bodyMd">
            <span className="text-primary">✔ </span>
            Setup and optimization completed within 7 days
          </Text>
          <Text as="p" variant="bodyMd">
            <span className="text-primary">✔ </span>
            Avoid losing sales with updated checkouts
          </Text>

          <Text as="p" variant="bodyMd">
            <span className="text-primary">✔ </span>
            Checkout customizations and payment options
          </Text>
          <Text as="p" variant="bodyMd">
            <span className="text-primary">✔ </span>
            More secure, faster, and safer checkouts
          </Text>
        </div>

        <Button asChild>
          <Link href="/offers/checkout-extensibility-upgrade/submit-query">
            Book a Call
          </Link>
        </Button>

        <div className="flex items-center justify-start gap-2">
          <motion.div className="relative h-8 w-8">
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
          </motion.div>
          <Text
            as="p"
            variant="bodyMd"
            applyMargin={false}
            className="pl-8 text-sm"
          >
            1032+ websites configured with 95% accuracy
          </Text>
        </div>
      </div>
    </Container>
  );
}
