"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

// Utility function to format the segment into a readable title
const formatSegment = (segment: string) => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const ToolBreadcrumbs: React.FC = () => {
  const segments = useSelectedLayoutSegments();

  // Build the breadcrumb paths
  const getBreadcrumbPath = (index: number): string => {
    return `/tools/${segments.slice(0, index + 1).join("/")}`;
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/tools">Tools</BreadcrumbLink>
        </BreadcrumbItem>{" "}
        {segments.map((segment, index) => (
          <React.Fragment key={segment}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === segments.length - 1 ? (
                // Last segment as active link
                <BreadcrumbLink
                  href={getBreadcrumbPath(index)}
                  aria-current="page"
                >
                  {formatSegment(segment)}
                </BreadcrumbLink>
              ) : (
                // Interior segments as regular links
                <BreadcrumbLink href={getBreadcrumbPath(index)}>
                  {formatSegment(segment)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ToolBreadcrumbs;
