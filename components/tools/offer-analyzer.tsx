"use client";

// components/tools/offer-analyzer.tsx
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Container from "../ui/container";

interface OfferAnalysis {
  valueScore: number;
  tips: {
    type: "increase" | "decrease";
    description: string;
  }[];
}

const OfferAnalyzer: React.FC = () => {
  const [analysis, setAnalysis] = useState<OfferAnalysis | null>(null);

  const handleAnalyzeOffer = async () => {
    const response = await fetch("/api/offer-analyzer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        /* Offer data */
      }),
    });
    const analysis = await response.json();
    setAnalysis(analysis);
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>$100M Offer Analyzer</CardTitle>
        </CardHeader>
        <CardContent>
          {analysis ? (
            <div className="space-y-4">
              <Alert variant="default">
                <AlertTitle>Offer Analysis</AlertTitle>
                <AlertDescription>
                  Value Score: {analysis.valueScore} / 100
                  {analysis.tips.map((tip, index) => (
                    <div key={index}>
                      {tip.type === "increase" ? "Increase:" : "Decrease:"} {tip.description}
                    </div>
                  ))}
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <p>No offer analyzed yet. Please create an offer to analyze.</p>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default OfferAnalyzer;
