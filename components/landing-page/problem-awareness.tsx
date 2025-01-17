import React from "react";
import { Card } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { AlertTriangle, CircleCheck } from "lucide-react";
import Image from "next/image";

interface ProblemAwarenessProps {
  headingText?: string;
  paragraphText?: string;
  redPillPoints?: string[];
  bluePillPoints?: string[];
  imageUrl?: string;
}

const ProblemAwareness: React.FC<ProblemAwarenessProps> = ({
  headingText,
  paragraphText,
  redPillPoints,
  bluePillPoints,
  imageUrl = "/images/social-sharing.png?height=400&width=300",
}) => {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16">
      <Container className="space-y-6">
        <div className="mx-auto max-w-3xl text-center">
          {headingText && <h2 className="mb-4">{headingText}</h2>}
          {paragraphText && (
            <p className="text-muted-foreground">{paragraphText}</p>
          )}
        </div>

        <div className="grid items-end justify-center gap-2 md:grid-cols-3">
          <div className="space-y-4">
            {redPillPoints &&
              redPillPoints.map((point, index) => (
                <Card
                  key={index}
                  className="bg-red-100 p-4 transition-colors hover:bg-red-200"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <AlertTriangle className="mt-1 h-6 w-6 text-destructive" />
                    <p className="flex-1 text-destructive">{point}</p>
                  </div>
                </Card>
              ))}
          </div>

          <div className="flex w-full items-center justify-center">
            <Image
              src={imageUrl || "/images/social-sharing.png"}
              alt="Keanu Reeves with red and blue pills"
              width={1080}
              height={1080}
              className="rounded-lg"
            />
          </div>

          <div className="space-y-4">
            {bluePillPoints &&
              bluePillPoints.map((point, index) => (
                <Card
                  key={index}
                  className="bg-blue-100 p-4 transition-colors hover:bg-blue-200"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <CircleCheck className="mt-1 h-6 w-6 text-blue-500" />
                    <p className="flex-1 text-blue-700">{point}</p>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemAwareness;
