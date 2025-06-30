import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ToolsHeroSection() {
  return (
    <Card className="rounded-t-lg">
      <CardContent className="flex flex-col items-start justify-center space-y-4 p-6">
        <h3>UTM Builder Tools</h3>
        <p>
          Start building your UTMs for Google Ads, Facebook Ads, TikTok, or custom, all at one place
        </p>
        <div className="flex justify-center gap-x-4">
          <Button asChild className="font-bold">
            <Link href="/tools/utm-builder#utm-builder">Start Creating UTMs</Link>
          </Button>
          <Button asChild variant={"link"} className="font-bold">
            <Link href="/blog/ga4/understanding-utm-builder-tool">Read the Blog</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
