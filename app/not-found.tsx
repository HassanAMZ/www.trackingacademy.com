import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <React.Fragment>
      <Navbar />
      <Container className="flex h-[75vh] max-w-4xl flex-col items-center justify-center space-y-6 text-center">
        <h1>404 - Tracking Error</h1>
        <p>
          Oops! Looks like the tracking pixel went AWOL. The page you're looking
          for doesn't exist. But don't worry, we've already notified our data
          analysts to look into this. In the meantime, let's get you back on
          track.
        </p>
        <div className="flex gap-6">
          <Button asChild>
            <Link href="/">Go Back Home</Link>
          </Button>
          <Button asChild>
            <Link href="/blog" passHref>
              Or Go Blogs
            </Link>
          </Button>
        </div>
      </Container>

      <Footer />
    </React.Fragment>
  );
}
