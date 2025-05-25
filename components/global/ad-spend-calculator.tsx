"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { services } from "@/data/services";
import { DollarSign, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import CouponOptInForm from "../funnels/coupon-optin";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Container from "../ui/container";

interface AdSpendCalculatorProps {
  cta?: boolean;
  customCtaButton?: ReactNode;
}

export default function AdSpendCalculator({
  cta = true,
  customCtaButton,
}: AdSpendCalculatorProps) {
  const [adSpend, setAdSpend] = useState(5000);

  // Calculate additional revenue based on the formula
  const monthlyRevenue = Math.round(adSpend * 0.187);
  const annualRevenue = monthlyRevenue * 12;

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Container className="max-w-2xl text-center">
      <Card className="backdrop-blur-sm text-center  items-center flex-col flex">
        <CardHeader>
          <Badge className="w-fit mx-auto">
            Calculate your wasted ad spend
          </Badge>
          {cta && (
            <p className="text-sm text-muted-foreground">
              Spoiler alert: it's more than you think.
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <h2 className="text-center">
            Your Current Ad Spend?
            <br />
            <span className="text-primary font-black py-2">
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
          </div>{" "}
          <h4>Average Additional Revenue </h4>{" "}
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
          </div>{" "}
          <p className=" text-center text-sm">
            Brands spending ${formatNumber(adSpend)} on ads recover on average $
            {formatNumber(monthlyRevenue)}/month by improved ROAS and reducing
            ad waste by 64%.
          </p>{" "}
          {customCtaButton
            ? customCtaButton
            : cta &&
              cta && (
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href={"/pricing"}>"Fix your Tracking</Link>
                  </Button>
                </div>
              )}{" "}
        </CardContent>
      </Card>
    </Container>
  );
}
