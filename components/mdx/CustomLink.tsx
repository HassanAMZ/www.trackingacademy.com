import Link from "next/link";
import React from "react";

type CustomLinkProps = {
 href?: string;
 className?: string;
 [key: string]: any; // for rest props
};

let CustomLink: React.FC<CustomLinkProps> = ({
 href = "",
 className = "",
 ...rest
}) => {
 let isInternalLink = href.startsWith("/");
 let isAnchorLink = href.startsWith("#");
 let isExternal = `${href}?utm_source=TrackingAcademy.com&utm_medium=affiliate&utm_campaign=InternalLink&utm_term=website&utm_content=${encodeURIComponent(
  href
 )}`;

 let classes = `curosr font-medium ${className || ""}`;

 if (isInternalLink) {
  return (
   <Link href={href} className={classes}>
    <React.Fragment {...rest} />
   </Link>
  );
 }

 if (isAnchorLink) {
  return <a href={href} className={classes} {...rest} />;
 }

 return (
  <a
   target='_blank'
   rel='noopener noreferrer'
   className={classes}
   href={isExternal}
   {...rest}
  />
 );
};

export default CustomLink;
