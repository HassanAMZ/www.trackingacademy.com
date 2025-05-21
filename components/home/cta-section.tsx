import { Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function CTASection() {
  return (
    <section className="container space-y-8 py-24">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          We build measurement systems enabling companies to act faster & make a
          bigger impact!
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[800px] text-xl">
          Finally, a single source of truth for your leading revenue metrics,
          without burdening your internal team.
        </p>
      </div>{" "}
      <div className="flex justify-center">
        <Button size="lg" className="text-lg">
          Book Intro call
        </Button>
      </div>{" "}
      <Card className="mt-12">
        <CardContent className="p-8">
          <div className="mb-4 flex items-center space-x-2">
            <Clock className="text-primary h-5 w-5" />
            <span className="text-sm">Less than 3 minutes</span>
          </div>
          <h3 className="mb-4 text-2xl font-bold">
            Learn how we help you win, using your data
          </h3>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-esEvuXsvnRvzgXAAbw2yjiBpoMyDPr.png"
              alt="Demo video preview"
              fill
              className="object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
