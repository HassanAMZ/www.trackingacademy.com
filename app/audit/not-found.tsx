import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <React.Fragment>
      <Container className="flex h-[75vh] max-w-4xl flex-col items-center justify-center space-y-6 text-center">
        <h1>404 - Audit Report Not Found</h1>
        <p>
          Oops! Looks like the tracking pixel went AWOL. The page you're looking for doesn't exist.
          But don't worry, we've already notified our data analysts to look into this. In the
          meantime, let's get you back on track.
        </p>
        <div className="flex gap-6">
          <Button asChild size="lg">
            <Link href="/audit">Go Back to Audits</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/" passHref>
              Or Go Home Page
            </Link>
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}
