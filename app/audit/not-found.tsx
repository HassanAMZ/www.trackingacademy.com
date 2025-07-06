import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AuditNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="mb-6 rounded-full bg-destructive/10 p-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
      </div>
      <h2 className="mb-2 text-3xl font-bold">Audit Not Found</h2>
      <p className="mb-8 max-w-md text-center text-muted-foreground">
        The audit report you're looking for doesn't exist or may have been removed.
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
