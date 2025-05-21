import { Check } from "lucide-react";
import Image from "next/image";
import Container from "../ui/container";

interface WhyChooseSectionProps {
  heading: string;
  subheading: string;
  eyebrow: string;
  value: string[];
  image: string;
}

export default function WhyChooseSection({
  heading,
  subheading,
  eyebrow,
  value,
  image,
}: WhyChooseSectionProps) {
  return (
    <Container className="py-12">
      <div className="bg-primary/10 text-primary mb-6 inline-block rounded-full px-3 py-1 text-sm font-medium">
        {eyebrow}
      </div>{" "}
      <h2>{heading}</h2>{" "}
      <h4 className="text-muted-foreground max-w-3xl">{subheading}</h4>{" "}
      <div className="grid items-center justify-center gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {value.map((text, i) => (
            <div key={i} className="flex gap-4">
              <div className="bg-primary text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                <Check className="h-4 w-4" />
              </div>
              <div className="text-lg">{text}</div>
            </div>
          ))}
        </div>{" "}
        <div className="relative">
          <Image
            src={image || "/images/social-sharing.png"}
            alt={`${heading} diagram`}
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
      </div>
    </Container>
  );
}
