'use client';
import formatDate from '@/components/seo/formatDate';
import generateSchema from '@/components/seo/generateSchema';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Text from '@/components/ui/text';
import { PostMetadataProps } from '@/types/index';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import YoutubeEmbed from '../global/youtube-embed';
import BreadCrumbs from './bread-crumb';

const BlogHeader: React.FC<PostMetadataProps> = ({ metadata }) => {
  const schema = generateSchema(metadata);
  const backgroundImage = metadata.openGraph.images[0];

  return (
    <article className="py-4 sm:py-8 lg:py-12">
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="grid md:grid-cols-2 items-center justify-center space-y-8">
        {/* Breadcrumb and metadata section */}

        <div className="md:space-y-8">
          <div className="md:space-y-8 space-y-4">
            <BreadCrumbs />
            <Text as="h1" variant="heading3xl">
              {metadata.title}
            </Text>

            <div className="flex items-center space-x-4 ">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/avatar.jpg" alt="ShahzadaAliHassan" />
                <AvatarFallback>SAH</AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">ShahzadaAliHassan</span>
                  <span className="text-muted-foreground">·</span>
                  <time className="text-muted-foreground">{formatDate(metadata.date)}</time>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  {metadata.updatedDate && (
                    <div>
                      <span>Last updated: {formatDate(metadata.updatedDate)}</span>
                      <span className="mx-2">·</span>
                    </div>
                  )}
                  <span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {metadata.tags.map((tag, index) => (
                <Link href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                  <Badge variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image/Video Section */}
        <div className="relative rounded-xl overflow-hidden ">
          {metadata.embedId === '' ? (
            <Image
              src={backgroundImage}
              alt={'blog image'}
              width={1920}
              height={1080}
              className="w-full object-cover hidden md:flex"
              priority
            />
          ) : (
            <YoutubeEmbed embedId={metadata.embedId} className="!p-0" />
          )}
        </div>
      </div>

      {/* As Seen On Section */}
      {/* <div className="py-4 border-t-2 border-b-2 ">
        <p className="text-sm text-muted-foreground mb-4">As seen on:</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-50 justify-center">
          {clients.map((client, index) => (
            <div key={index} className=" bg-muted rounded animate-pulse">
              <Image
                width={1920}
                height={1080}
                alt={client.businessDetails.name}
                src={client.clientDetails.images[0].url}
                className="w-full object-cover rounded-lg h-12"
              />
            </div>
          ))}
        </div>
      </div> */}
    </article>
  );
};

export default BlogHeader;