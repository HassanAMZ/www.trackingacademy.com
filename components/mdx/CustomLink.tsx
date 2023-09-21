import Link from "next/link";

type CustomLinkProps = {
 href?: string;
 customClasses?: string;
 [key: string]: any; // for rest props
};

const CustomLink: React.FC<CustomLinkProps> = ({
 href = "",
 customClasses = "",
 ...rest
}) => {
 const isInternalLink = href.startsWith("/");
 const isAnchorLink = href.startsWith("#");
 const isExternal = `${href}?utm_source=ShahzadaAliHassan&utm_medium=affiliate&utm_campaign=HassanUpwork&utm_term=website&utm_content=${encodeURIComponent(
  href
 )}`;

 const classes = `underline curosr font-semibold  ${customClasses}`;

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
