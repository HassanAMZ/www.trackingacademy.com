import React, { useState } from "react";
import { useCompletion } from "ai/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2Icon } from "lucide-react";

export default function GrandSlamOfferGenerator() {
  const [userContext, setUserContext] = useState("");

  const { completion, complete, isLoading } = useCompletion({
    api: "/api/offer-creator",
    onFinish: (prompt, completion) => {
      // Potential analytics or tracking
    },
  });

  const generateOffer = async () => {
    await complete(userContext || "Create a high-impact acquisition offer");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Wand2Icon className="mr-2 text-purple-600" />
          Grand Slam Offer Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Describe your business, strengths, and unique value proposition..."
          value={userContext}
          onChange={(e) => setUserContext(e.target.value)}
          className="mb-4 h-32"
        />
        <Button
          onClick={generateOffer}
          disabled={isLoading}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          {isLoading ? "Generating Offer..." : "Generate Offer"}
        </Button>

        {completion && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">Generated Offer</h3>
            <p>{completion}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
