import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function CallToActionMessageUs() {
  return (
    <Card className="space-y-4 self-start rounded-lg p-6">
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-2">
          <span> 😅</span>
          Stuck?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 self-start p-0">
        <p>Need help implementing the tracking? Send us a message..!</p>
        <Button className="w-full" asChild>
          <Link href="/contact" target="_blank" rel="noopener noreferrer">
            Send a Message
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
