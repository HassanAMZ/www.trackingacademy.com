"use client";

import React from "react";
import { PostMetadataProps } from "@/types/index";
import formatDate from "@/components/seo/formatDate";
import generateSchema from "@/components/seo/generateSchema";
import Script from "next/script";
import BreadCrumbs from "./bread-crumb";
import Image from "next/image";
import YoutubeEmbed from "../global/youtube-embed";
import Text from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const BlogHeader: React.FC<PostMetadataProps> = ({ metadata }) => {
  const schema = generateSchema(metadata);
  const backgroundImage = metadata.openGraph.images[0]; // Assuming the first image is the background image

  return (
    <section className="space-y-4 py-2">
      <BreadCrumbs />
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Card className="rounded-t-lg">
        <CardContent className="p-6">
          <div className="flex flex-col items-start space-y-4">
            <Text as="h1" variant="heading3xl">
              {metadata.title}
            </Text>
            <Text
              as="p"
              variant="bodyMd"
              className="text-sm text-muted-foreground"
            >
              by ShahzadaAliHassan - {formatDate(metadata.date)}
            </Text>
            <div className="flex flex-wrap gap-2">
              {metadata.tags.map((tag, index) => (
                <Link
                  href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  key={index}
                >
                  <Badge variant="secondary">{tag}</Badge>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      {metadata.embedId === "" ? (
        <Image
          src={backgroundImage}
          alt={"blog image"}
          width={1920}
          height={1080}
          className="w-full rounded-lg"
        />
      ) : (
        <YoutubeEmbed embedId={metadata.embedId} className="p-0" />
      )}
    </section>
  );
};

export default BlogHeader;
