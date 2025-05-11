import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container space-y-8 py-12">
      <div className="flex flex-col items-center space-y-4 text-center">
        <Badge variant="secondary" className="h-6">
          Data Tracking and Visualization Agency
        </Badge>
        <h1>
          We build measurement systems enabling companies to act faster & make a
          bigger impact!{" "}
        </h1>
        <p className="text-muted-foreground max-w-4xl text-xl">
          Finally, a single source of truth for your leading revenue metrics,
          without burdening your internal team. Get always updated: data
          integration, cleaning, and custom visualization plus a dedicated Slack
          channel for your team to ask questions and monthly strategy sessions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">First-party data</Button>
          <Button size="lg" variant="outline">
            Reverse ETL
          </Button>
          <Button size="lg" variant="outline">
            Own your data
          </Button>
        </div>
      </div>
      <div className="relative h-[400px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IPTYFWH6KvZNu1muM0dT7PiIkQk4wi.png"
          alt="Data sources visualization"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
