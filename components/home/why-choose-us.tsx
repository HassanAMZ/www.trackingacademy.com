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
      <div className="mb-6 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
        {eyebrow}
      </div>{" "}
      <h2>{heading}</h2> <h4 className="max-w-3xl text-muted-foreground">{subheading}</h4>{" "}
      <div className="grid items-center justify-center gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {value.map((text, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
