import Container from "@/components/ui/container";
import React from "react";
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
    <section className="min-h-screen bg-linear-to-b from-primary/5 to-background py-24">
      <Container className="space-y-6">
        {/* Section Title */}
        {sectionTitle && <h2 className="text-center">{sectionTitle}</h2>}{" "}
        {/* Section Description */}
        {sectionDescription && (
          <h4 className="pb-6 text-center text-muted-foreground md:pb-12">{sectionDescription}</h4>
        )}{" "}
      </Container>
      <TestimonialGrid upwork={upwork} />
    </section>
  );
};

export default SocialProof;
