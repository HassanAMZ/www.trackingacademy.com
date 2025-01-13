"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";

// Utility function to format the segment into a readable title
const formatSegment = (segment: string) => {
  return segment
    .split("-") // Split by dash
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join back with space
};

const ToolBreadcrumbs: React.FC = ({}) => {
  const [segment, setSegment] = useState<string | null>(null);
  const segments = useSelectedLayoutSegments();

  useEffect(() => {
    if (segments.length > 0) {
      setSegment(segments[0]);
    }
  }, [segments]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/tools">Tools</BreadcrumbLink>
        </BreadcrumbItem>
        {segment && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{formatSegment(segment)}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ToolBreadcrumbs;
