import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HelpSection() {
  return (
    <div className="w-full rounded-lg border bg-card/50 p-4">
      <div className="mb-3 flex items-center gap-2 border-b pb-2">
        <HelpCircle className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold text-foreground">Need Help?</h3>
      </div>

      <div className="space-y-3">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Stuck implementing the tracking? Our team is here to help you get it working perfectly.
        </p>

        <Button size="sm" className="w-full" asChild>
          <Link href="/contact" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Get Help
          </Link>
        </Button>
      </div>
    </div>
  );
}
