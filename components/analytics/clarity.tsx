"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

export default function ClarityInit() {
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  useEffect(() => {
    if (isProduction && projectId) {
      Clarity.init(projectId);
    }
    if (!isProduction) {
      console.log("Clarity not initialized (non-production environment)");
    }
  }, []);

  return null;
}
