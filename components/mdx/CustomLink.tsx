"use client";

import React from "react";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { cn } from "@/lib/utils";

type CustomLinkProps = {
  href: string;
  className?: string;
  id?: string;
  trackingLabel?: string;
  [key: string]: any;
};

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  className,
  id,
  trackingLabel,
  onClick,
  ...rest
}) => {
  const isInternalLink = href.startsWith("/");
  const isAnchorLink = href.startsWith("#");
  const isExternal = `${href}?utm_source=TrackingAcademy.com&utm_medium=affiliate&utm_campaign=InternalLink&utm_term=website&utm_content=${encodeURIComponent(
    href,
  )}`;

  // Function to extract text from children
  const getLinkText = (children: React.ReactNode): string => {
    if (typeof children === "string") {
      return children;
    }
    if (typeof children === "number") {
      return children.toString();
    }
    if (React.isValidElement(children)) {
      // Safe type assertion since we checked isValidElement
      const element = children as React.ReactElement<any>;
      return getLinkText(element.props.children);
    }
    if (Array.isArray(children)) {
      return children.map((child) => getLinkText(child)).join(" ");
    }
    return "";
  };

  // Enhanced click handler with analytics
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Call original onClick if provided
    if (onClick) {
      onClick(event);
    }

    // Track the click in dataLayer
    const linkText = trackingLabel || getLinkText(rest.children);
    const finalUrl = isInternalLink || isAnchorLink ? href : isExternal;

    sendGTMEvent({
      event: "gtm_custom_event",
      datalayer_event_name: "link_click",
      link_text: linkText,
      link_id: id || "",
      link_classes: className || "",
      link_url: finalUrl,
      link_type: isInternalLink ? "internal" : isAnchorLink ? "anchor" : "external",
    });
  };

  if (isInternalLink) {
    return (
      <Link href={href} id={id} onClick={handleClick} {...rest} className={cn("", className)}>
        {rest.children}
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <Link href={href} id={id} onClick={handleClick} className={cn(className)} {...rest}>
        {rest.children}
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn("", className)}
      href={isExternal}
      id={id}
      onClick={handleClick}
      {...rest}
    />
  );
};

export default CustomLink;
