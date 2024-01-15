import { PostMetadataProps } from "@/types/index";

function generateSchema(metadata: PostMetadataProps["metadata"]) {
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
    url: `https://trackingacademy.com${metadata.openGraph.images[0]}`, // Taking the first image, adjust if not the case.
   },
  ],
  author: {
   "@type": "Person",
   name: "TrackingAcademy",
   url: "https://trackingacademy.com/about-us",
  },
  publisher: {
   "@type": "Organization",
   name: "TrackingAcademy",
   logo: {
    "@type": "ImageObject",
    url: "https://trackingacademy.com/static/images/avatar.png",
   },
  },
 };
}

export default generateSchema;
