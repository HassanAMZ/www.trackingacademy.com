import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AuditNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="bg-destructive/10 mb-6 rounded-full p-4">
        <AlertCircle className="text-destructive h-12 w-12" />
      </div>
      <h2 className="mb-2 text-3xl font-bold">Audit Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md text-center">
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
