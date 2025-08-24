"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MessageCircle className="h-5 w-5 text-primary" />
          Need Help?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Have questions about tracking or analytics? Our experts are here to help!
        </p>
        <div className="flex flex-col gap-2">
          <Button asChild size="sm" className="w-full">
            <Link href="/contact" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactUs;
