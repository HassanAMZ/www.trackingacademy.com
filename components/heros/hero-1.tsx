import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/container";
import clients, { Client } from "@/data/clients";
import YoutubeEmbed from "../global/youtube-embed";
import Text from "../ui/text";
const Hero: React.FC = () => {
  const benefits = [
    "100% done-for-you setup",
    "95%+ accuracy ",
    "One-time setup cost",
    "Completed within 7 days",
    "Improved ROAS by 20%",
    "Scaleable Solution ",
  ];

  return (
    <Container className="flex flex-col items-center justify-center gap-6 pt-12 text-center">
      <Text as="h1" variant="heading3xl">
        Increase Your ROAS with{" "}
        <span className="underline text-primary">
          95% Accurate Conversion Tracking
        </span>{" "}
        - Guaranteed
      </Text>

      <Text
        as="p"
        variant="bodyMd"
        applyMargin={false}
        className="font-semibold max-w-2xl"
      >
        Get your tracking setup perfected with our one-time service. Boost your
        business performance in just 7 days.
      </Text>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className="text-primary h-6 w-6" />
            <TypographyP applyMargin={false} className="">
              {benefit}
            </TypographyP>
          </div>
        ))}
      </div> */}
      <Button asChild className="font-semibold">
        <Link href="contact">Get 95% Accuracy in 7 Days</Link>
      </Button>
      {/* <ClientAvatars clients={clients} /> */}

      <YoutubeEmbed embedId={"9MGpL_AmEYM"} />
    </Container>
  );
};

const ClientAvatars: React.FC<{ clients: Client[] }> = ({ clients }) => (
  <div className="flex items-center justify-start gap-2">
    <div className="relative h-8 w-8">
      {clients.slice(0, 3).map((client, index) => (
        <Avatar
          key={client.id}
          className={`absolute left-${index * 4} top-0 z-${index + 1}`}
        >
          <AvatarImage
            src={client.clientDetails.images?.[0]?.url || "/default-avatar.png"}
            alt={client.clientDetails.name}
          />
          <AvatarFallback>
            {client.clientDetails.name
              .split("")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
    <Text as="p" variant="bodyMd" applyMargin={false} className="pl-8 text-sm">
      1032 + websites configured with 95% accuracy
    </Text>
  </div>
);

export default Hero;
