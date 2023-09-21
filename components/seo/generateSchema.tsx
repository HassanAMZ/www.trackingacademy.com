import { MetadataProps } from "@/types/index";

function generateSchema(metadata: MetadataProps["metadata"]) {
 return {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: metadata.title,
  image: metadata.openGraph.images,
  datePublished: new Date(metadata.date).toISOString(),
  dateModified: new Date(metadata.date).toISOString(),
  author: [
   {
    "@type": "Person",
    name: "Shahzada Ali Hassan",
    url: "https://shahzadaalihassan.com/about-us/",
   },
  ],
 };
}

export default generateSchema;
