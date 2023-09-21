import { MetadataProps } from "@/types/index";

function generateSchema(metadata: MetadataProps["metadata"]) {
 return {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: metadata.title,
  datePublished: new Date(metadata.date).toISOString(),
  dateModified: new Date(metadata.date).toISOString(),
  description: metadata.description,

  image: [
   {
    "@type": "ImageObject",
    url: `https://shahzadaalihassan.com${metadata.openGraph.images[0]}`, // Taking the first image, adjust if not the case.
   },
  ],
  author: {
   "@type": "Person",
   name: "Shahzada Ali Hassan",
   url: "https://shahzadaalihassan.com/about-us",
  },
  publisher: {
   "@type": "Organization",
   name: "Shahzada Ali Hassan",
   logo: {
    "@type": "ImageObject",
    url: "https://shahzadaalihassan.com/static/images/avatar.png",
   },
  },
 };
}

export default generateSchema;
