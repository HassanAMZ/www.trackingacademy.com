import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Link } from "next-view-transitions";
import React from "react";
import { Button } from "../ui/button";

type CustomLinkProps = {
  href: string;
  className?: string;
  [key: string]: any; // for rest props
};

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  className,
  ...rest
}) => {
  const isInternalLink = href.startsWith("/");
  const isAnchorLink = href.startsWith("#");
  const isExternal = `${href}?utm_source=TrackingAcademy.com&utm_medium=affiliate&utm_campaign=InternalLink&utm_term=website&utm_content=${encodeURIComponent(
    href,
  )}`;

  if (isInternalLink) {
    return (
      <Button asChild className={cn("!p-0", className)} variant={"link"}>
        <Link href={href} {...rest}>
          {rest.children}
        </Link>
      </Button>
    );
  }

  if (isAnchorLink) {
    return (
      <Link
        href={href}
        className={clsx(
          "text-card-primary whitespace-pre-wrap !p-0 underline-offset-4 hover:underline dark:text-primary",
          className,
        )}
        {...rest}
      />
    );
  }

  return (
    <Button asChild variant={"link"}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={clsx("!p-0", className)}
        href={isExternal}
        {...rest}
      />
    </Button>
  );
};

export default CustomLink;
