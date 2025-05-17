"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import React from "react";

const Page: React.FC = () => {
  const handlePurchase = async () => {
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: "price_1RNWDwAE3E6zT9eTzcpnOUZys",
        }),
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const { url }: { url: string } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <Container className="min-h-screen place-content-center ">
      <Button
        size="lg"
        onClick={handlePurchase}
        className="w-full cursor-pointer"
      >
        Pay now
      </Button>
    </Container>
  );
};

export default Page;
