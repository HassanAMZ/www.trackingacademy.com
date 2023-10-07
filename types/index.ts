"use client";

export interface GTMEvent {
 event: string;
 datalayer_event_name: string;
 event_id?: number;
 [key: string]: any;
}
export interface GTMBlogListViewEventProps {
 blogList: (PostMetadata & { id: string; slug: string })[];
}
declare global {
 interface Window {
  dataLayer: GTMEvent[];
 }
}
export interface GTMBlogViewProps {
 metadata: PostMetadata;
}

// types/index.ts or types/clientTypes.ts
import {
 DetailedHTMLProps,
 HTMLAttributes,
 FC,
 useRef,
 useState,
 ReactNode,
} from "react";

export interface AccordionItemProps {
 title: string;
 content: string;
}

export interface AccordionProps {
 data: string; // This is the document ID
}
export interface AccordionDataType {
 [key: string]: AccordionItemProps[];
}
export interface ServiceCardProps {
 service: ServiceDetails;
}
export interface ClientCardProps {
 client: Client;
}
export interface AvatarCardProps {
 avatar: Avatar;
}

export interface DynamicPortfolioPageProps {
 params: {
  portfolio: string;
 };
}
export interface ServiceDetails {
 id: string;
 title: string;
 description: string;
 packages: {
  name: string;
  value: string;
 }[];
 featured_image_url: string;
 supporting_image_url: string;
 href: string;
}

export interface DynamicServicesPageProps {
 params: {
  service: string;
 };
}
export interface BlogSearchProps {
 data: (PostMetadata & { id: string; slug: string })[];
 onSearch: (filtered: (PostMetadata & { id: string; slug: string })[]) => void;
}
export interface BlogContentProps {
 data: (PostMetadata & { id: string; slug: string })[];
 rawData?: (PostMetadata & { id: string; slug: string })[];
 type: string;
}
export interface BlogContainerProps {
 data: (PostMetadata & { id: string; slug: string })[];
 rawData?: (PostMetadata & { id: string; slug: string })[];
 type: string;
}
export interface TestimonialDetails {
 testimonial: string;
 project_title: string;
}

export interface Avatar {
 id: string;
 name: string;
 title: string;
 description: string;
 images: { name: string; link: string }[];
}
export interface DetailsProps {
 detailsList: Detail[];
}
export interface Client {
 id: string;
 title: string;
 business_details: {
  email: string;
  phone: string;
  name: string;
  link: string;
 };
 client_details: { name: string; email: string; position: string }[];
 tags: string[];
 project_description: { heading: string; description: string }[];
 testimonial_details: TestimonialDetails[];
 images: { name: string; link: string }[];
 project_details: { heading: string; title: string; link: string }[];
}
export interface TestimonialCardProps {
 person: {
  image: ImageData;
  testimonial: string;
  name: string;
  position: string;
 };
 className?: string;
}
export interface PostMetadata {
 title: string;
 date: string;
 blogId: string;
 tags: string[];
 draft: boolean;
 description: string;
 openGraph: { images: string[] };
 embedId: string;
 id?: string;
 slug?: string;
}

export interface BlogCardProps {
 postId: string;
 slug: string;
 cta: string;
 excerpt: string;
 title: string;
 url: string;
 date: string;
 category: string;
 featuredImage?: string; // Making it optional as we are assigning a default value
}

export interface ContainerLayoutProps {
 children: ReactNode;
 className?: string; // Optional className prop
 id?: string; // Optional className prop
}

export interface BlogLayoutProps {
 children: ReactNode;
 className?: string;
 metadata?: PostMetadata; // Optional metadata prop
}

export interface PreProps
 extends DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> {}

export interface YoutubeEmbedProps {
 embedId: string;
}

export interface NavLinkProps {
 href: string;
 children: React.ReactNode;
 className?: string;
}

export interface ImageProps {
 link: string;
 name: string;
 clientId: string;
}

export interface ImageSliderProps {
 images: ImageProps[];
}

export interface ImageType {
 clientId: string;
 link: string;
 name: string;
}

export interface ExpertInfoProps {
 title: string;
 description: JSX.Element;
}

export interface PostMetadataProps {
 metadata: PostMetadata;
}
export interface InfoSectionProps extends ExpertInfoProps {
 embedId?: string;
 testimonial?: string;
 className?: string;
 id?: string;
 flexDirection?: string;
 backgroundOverlay?: boolean;
}

export interface OpenGraph {
 images: string[];
}

export interface TagContainerProps {
 tags: string[];
 type: string;
 blogsData: (PostMetadata & { id: string; slug: string })[]; // New addition
}

export interface TagSearchProps {
 tags: string[];
 onSearch: (filtered: string[]) => void;
}

export interface TagContentProps {
 tags: string[];
 type: string;
 blogsData: (PostMetadata & { id: string; slug: string })[];
}
export interface Detail {
 icon?: string;
 header: string;
 details: string;
}

export interface Link {
 src: string;
 text: string;
}

export interface ImagesProps {
 src: string;
 alt: string;
}

export interface ColorDetails {
 primary: string;
}

export interface TextGroup {
 welcomeText?: string;
 heading?: string;
 subHeading?: { one: string; two: string };
 learnMore?: HeadingTextsProps;
}
export interface LinksGroupProps {
 primary: Link;
 secondary?: Link;
}

export interface HeroProps {
 textGroup: TextGroup;
 links: LinksGroupProps;
 images: {
  group?: {
   list: ImagesProps[];
  };
  background?: string;
 };
 colorDetails: ColorDetailsExtended;
}

export interface ColorDetailsExtended extends ColorDetails {
 light: { value: number; opacity?: number };
 dark: { value: number; opacity?: number };
}

export interface ImageData extends ImagesProps {
 width: number;
 height: number;
}
export interface ImageGeneralProps {
 image: ImageData;
}

export interface SingleGridContentProps {
 imagesData: ImageData;
 headingTexts: HeadingTextsProps;
 paragraphTexts: ParagraphTextsProps;
}
export interface SingleBlogCardProps {
 post: PostMetadata & { id: string; slug: string };
 type: string;
 isMain?: boolean;
 className?: string;
}

export interface TwoGridContentProps {
 learnMoreHeader: string;
 detailsList: Detail[];
 primaryLink: Link;
 imagesData: ImageData;
 colorDetails: ColorDetails;
 order: number; // For grid order
}
export interface HeadingTextsProps {
 heading: string;
 subHeading?: string;
}
export interface ParagraphTextsProps {
 primary: string;
 secondary?: string;
}

export interface LearnMoreHeaderProps {
 headingTexts: HeadingTextsProps;
 colorDetails: ColorDetails;
}
export interface WhyUsProps {
 headingTexts: HeadingTextsProps;
 paragraphTexts: ParagraphTextsProps;
 colorDetails: ColorDetails;
 links: LinksGroupProps;
}
export interface StartHereSectionProps {
 colorDetails: ColorDetails;
}
export interface Color {
 primary: string;
}
export interface BaseColors {
 service: Color;
 aboutUs: Color;
 home: Color;
 forBusinesses: Color;
 [key: string]: Color;
}
