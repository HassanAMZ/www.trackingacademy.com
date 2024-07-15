import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TypographyH3 from "../ui/typography-h3";
import TypographyP from "../ui/typography-p";

export default function ToolsHeroSection() {
  return (
    <Card className="rounded-t-lg">
      <CardContent className="flex flex-col items-start justify-center space-y-4 p-6">
        <TypographyH3>UTM Builder Tools</TypographyH3>
        <TypographyP>
          Start building your UTMs for Google Ads, Facebook Ads, TikTok, or
          custom, all at one place
        </TypographyP>
        <div className="flex justify-center gap-x-4">
          <Button asChild className="font-bold">
            <Link href="/tools/utm-builder#utm-builder">
              Start Creating UTMs
            </Link>
          </Button>
          <Button asChild variant={"link"} className="font-bold">
            <Link href="/blog/ga4/understanding-utm-builder-tool">
              Read the Blog
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
