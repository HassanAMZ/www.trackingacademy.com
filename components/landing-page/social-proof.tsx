import Container from "@/components/ui/container";
import React from "react";
import TestimonialGrid from "../testimonial/testimonial-grid";

interface SocialProofProps {
  sectionTitle?: string;
  sectionDescription?: string;
  resultsTitle?: string;
}

const SocialProof: React.FC<SocialProofProps> = ({
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <section className="from-primary/5 to-background min-h-screen bg-linear-to-b py-24">
      <Container className="space-y-6">
        {/* Section Title */}
        {sectionTitle && <h2 className="text-center">{sectionTitle}</h2>}{" "}
        {/* Section Description */}
        {sectionDescription && (
          <h4 className="text-muted-foreground pb-6 text-center md:pb-12">
            {sectionDescription}
          </h4>
        )}{" "}
        <TestimonialGrid />
      </Container>
    </section>
  );
};

export default SocialProof;
