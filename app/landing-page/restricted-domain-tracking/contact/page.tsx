"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";

export default function Page() {
  useEffect(() => {
    const loadForm = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "47041795",
          formId: "6e6ab1b5-7a64-4f80-a024-808f7c7f7f86",
          target: "#hubspot-form",
        });
      }
    };

    const existingScript = document.getElementById("hubspot-form-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.id = "hubspot-form-script";
      script.async = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    } else {
      loadForm();
    }
  }, []);

  return (
    <Container className="min-h-screen w-full max-w-5xl py-4">
      <h1 className="text-primary p-4 text-center">
        Get $300 Off – 3-Day “See Your Sales Again” Tracking Setup
      </h1>
      <h4 className="text-muted-foreground p-4 text-center">
        Fill out the form below to restore accurate tracking and supercharge
        your ad performance, staying compliant with Meta Ads policies and a
        future-proof system.
      </h4>
      <div id="hubspot-form"></div>
    </Container>
  );
}
