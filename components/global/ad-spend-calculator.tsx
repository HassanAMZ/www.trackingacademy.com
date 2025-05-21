"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Users } from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Container from "../ui/container";

export default function AdSpendCalculator() {
  const [adSpend, setAdSpend] = useState(1000);

  // Calculate additional revenue based on the formula
  const monthlyRevenue = Math.round(adSpend * 0.187);
  const annualRevenue = monthlyRevenue * 12;

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Container className="max-w-2xl text-center">
      {/* <p>Spoiler alert: it's more than you think.</p> */}

      <Card className="backdrop-blur-sm text-left  items-center flex-col flex">
        <CardHeader>
          <Badge variant={"outline"}>Calculate your wasted ad spend</Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <h2 className="text-center">
            Your Monthly Ad Spend
            <br />
            <span className="text-primary font-black">
              ${formatNumber(adSpend)}
            </span>
          </h2>
          <div>
            <Slider
              defaultValue={[1000]}
              min={1000}
              max={100000}
              step={1000}
              onValueChange={(value) => setAdSpend(value[0])}
              className="my-4 cursor-pointer"
            />
          </div>

          <p>Average Additional Revenue </p>

          <div className="grid grid-cols-2 gap-2 ">
            <Card>
              <CardContent className="px-4">
                <p className="">ANNUALLY</p>
                <h2 className="text-primary font-black line-clamp-1">
                  ${formatNumber(annualRevenue)}
                </h2>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="px-4">
                <p>MONTHLY</p>
                <h2 className="text-primary font-black line-clamp-1">
                  ${formatNumber(monthlyRevenue)}
                </h2>
              </CardContent>
            </Card>
          </div>

          <p className=" text-center text-sm">
            Brands spending ${formatNumber(adSpend)} on ads recover on average $
            {formatNumber(monthlyRevenue)}/month by improved ROAS and reducing
            ad waste by 64%.
          </p>

          <Button
            size="lg"
            className="hover:bg-primary/90 flex max-w-4xl flex-col py-20 text-center text-xl font-bold text-wrap whitespace-pre-wrap hover:cursor-pointer sm:py-16 md:py-20 "
          >
            <div>
              🎟️ Claim Your $300 Coupon for 3-Day "See Every Sale" Tracking
              System
              <span className="mt-2 block text-sm font-medium opacity-90">
                Limited to the first 10 clients — act fast before it expires
              </span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
