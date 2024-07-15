import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import getOffersData from "@/utils/getOffersData"; // Ensure this path is correct

export default async function Page() {
  const offers = await getOffersData("app/offers");
  return (
    <div>
      <Navbar />

      <h3 className="container-primary py-6 text-center text-3xl font-bold">
        Active Offers
      </h3>
      <Container className="container-primary py-4">
        <div className="space-y-4">
          {offers.map((offer) => (
            <Button asChild key={offer.id}>
              <Link href={`/offers/${offer.slug}`}>{offer.title}</Link>
            </Button>
          ))}
        </div>
      </Container>
    </div>
  );
}
