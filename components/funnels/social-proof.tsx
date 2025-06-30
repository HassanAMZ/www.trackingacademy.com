import React from "react";
import Container from "@/components/ui/container";
import TestimonialGrid from "../testimonial/testimonial-grid";

interface SocialProofProps {
  sectionTitle?: string;
  sectionDescription?: string;
  resultsTitle?: string;
  upwork?: boolean;
}

const SocialProof: React.FC<SocialProofProps> = ({
  sectionTitle,
  upwork = false,
  sectionDescription,
}) => {
  return (
    <section className="from-primary/5 to-background min-h-screen bg-linear-to-b py-24">
      <Container className="space-y-6">
        {/* Section Title */}
        {sectionTitle && <h2 className="text-center">{sectionTitle}</h2>}{" "}
        {/* Section Description */}
        {sectionDescription && (
          <h4 className="text-muted-foreground pb-6 text-center md:pb-12">{sectionDescription}</h4>
        )}{" "}
      </Container>
      <TestimonialGrid upwork={upwork} />
    </section>
  );
};

export default SocialProof;
