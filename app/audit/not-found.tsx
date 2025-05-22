import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AuditNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="rounded-full bg-destructive/10 p-4 mb-6">
        <AlertCircle className="h-12 w-12 text-destructive" />
      </div>
      <h2 className="text-3xl font-bold mb-2">Audit Not Found</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The audit report you're looking for doesn't exist or may have been
        removed.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <Link href="/audit">View All Audits</Link>
        </Button>
        <Button asChild>
          <Link href="/contact">Request New Audit</Link>
        </Button>
      </div>
    </div>
  );
}
