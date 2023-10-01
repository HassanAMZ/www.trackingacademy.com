import Link from "next/link";

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
 let isExternal = `${href}?utm_source=ShahzadaAliHassan.com&utm_medium=affiliate&utm_campaign=InternalLink&utm_term=website&utm_content=${encodeURIComponent(
  href
 )}`;

 let classes = `underline curosr font-medium underline-offset-2  ${className}`;

 if (isInternalLink) {
  return (
   <Link href={href} className={classes}>
    <div {...rest} />
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
