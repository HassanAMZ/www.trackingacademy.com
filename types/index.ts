"use client";

// types/index.ts or types/clientTypes.ts
import { JSX, ReactNode } from "react";

export interface GTMEvent {
  event: string;
  datalayer_event_name: string;
  event_id?: number;
  [key: string]: any;
}
export interface GTMBlogListViewEventProps {
  blogList: PostMetadata[];
}
export interface GTMCourseListViewEventProps {
  courseList: CourseMetadata[];
}
declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}
export interface UTMParams {
  websiteURL: string;
  campaignSource: string;
  campaignMedium: string;
  campaignName: string;
  campaignID: string;
  campaignTerm: string;
  campaignContent: string;
  selectedMode: "manual" | "facebook" | "pinterest" | "google" | "tiktok";
}

export interface GTMBlogViewProps {
  metadata: PostMetadata;
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

export interface BlogSearchProps {
  data: PostMetadata[];
  onSearch: (filtered: PostMetadata[]) => void;
}
export interface CourseSearchProps {
  data: CourseMetadata[];
  onSearch: (filtered: CourseMetadata[]) => void;
}
export interface BlogContentProps {
  data: PostMetadata[];
  rawData?: PostMetadata[];
  featuredPostId?: number;
  type: string;
}
export interface CourseContentProps {
  data: CourseMetadata[];
  rawData?: CourseMetadata[];
  type: string;
}
export interface CategoryContainerProps {
  data: PostMetadata[];
  rawData?: PostMetadata[];
  type: string;
}
export interface CourseContainerProps {
  data: CourseMetadata[];
  rawData?: CourseMetadata[];
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
  id: number;
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
  blogId: number;
  tags: string[];
  draft: boolean;
  description: string;
  openGraph: { images: string[] };
  embedId: string;
  id?: string;
  updatedDate?: string;
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
  id?: string; // Optional id prop
}

export interface BlogLayoutProps {
  children: ReactNode;
  className?: string;
  metadata?: PostMetadata; // Optional metadata prop
}

export type PreProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  language?: string;
};

export interface YoutubeEmbedProps {
  embedId: string;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export interface ImageSliderProps {
  images: ImageType[];
}

export interface ImageType {
  clientId: number;
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
export interface CourseMetadataProps {
  metadata: CourseMetadata;
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
  blogsData: PostMetadata[]; // New addition
}

export interface TagSearchProps {
  tags: string[];
  onSearch: (filtered: string[]) => void;
}

export interface TagContentProps {
  tags: string[];
  type: string;
  blogsData: PostMetadata[];
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
    background?: {
      desktop?: string;
      mobile?: string;
    };
  };
}

export interface ImageData extends ImagesProps {
  width: number;
  height: number;
}
export interface ImageGeneralProps {
  image: ImageData;
}

export interface SingleGridContentProps {
  imagesData?: ImageData;
  headingTexts: HeadingTextsProps;
  paragraphTexts: ParagraphTextsProps;
}
export interface SingleBlogCardProps {
  post: PostMetadata;
  type: string;
  isMain?: boolean;
  className?: string;
}

export interface SingleCourseCardProps {
  course: CourseMetadata;
  type: string;
  isMain?: boolean;
  className?: string;
}

export interface CourseMetadata {
  title: string;
  date: string;
  courseId: string;
  tags: string[];
  draft: boolean;
  openGraph: {
    images: string[];
  };
  price: number;
  currency: {
    symbol: string;
    type: string;
  };
  description: string;
  embedId: string;
  id?: string;
  slug?: string;
}

export interface HeadingTextsProps {
  heading: JSX.Element | string;
  subHeading?: JSX.Element | string;
}
export interface ParagraphTextsProps {
  primary?: string;
  secondary?: string;
}

export interface LearnMoreHeaderProps {
  headingTexts: HeadingTextsProps;
}
export interface WhyUsProps {
  headingTexts: HeadingTextsProps;
  paragraphTexts: ParagraphTextsProps;
  links: LinksGroupProps;
}

export interface Color {
  primary: string;
}

export interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}

export interface UTMOutputProps {
  utmLink: string;
  canGenerate: boolean;
  errorMessages: string[];
  onCopy: () => void;
}

export interface TextFieldProps {
  label: string; // Label is now optional
  value: string;
  readOnly?: boolean;
  rows?: number;
  canGenerate: boolean; // New prop to handle conditional styling
}

export type IsWebsiteURLValid = (url: string) => boolean;
export type CopyToClipboard = () => void;
export type GetErrorMessages = () => string[];
export type GenerateUTM = () => string;
export type CanGenerateUTM = () => boolean;

export type ButtonData = {
  id: number;
  text: string;
};

export type ButtonProps = {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
};

export interface HeadingProps {
  children?: React.ReactNode;
  id?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export type VideoDetails = {
  channelThumbnailUrl: string | undefined;
  id: string;
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      default: any;
      medium: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
};

export type VideoUrl = string;
export interface YoutubdeVideoProps {
  videoUrl: string;
  details?: VideoDetails;
}

export type YouTubeApiResponse = {
  items: {
    id: string;
    snippet?: {
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
        };
      };
    };
    statistics?: {
      viewCount: string;
      likeCount: string;
      dislikeCount: string;
    };
  }[];
};

export type FetchTrendingVideosParams = {
  setErrorMessage: (message: string) => void;
};

export interface VideoUrlInputProps {
  videoInput: string;
  setVideoInput: React.Dispatch<React.SetStateAction<string>>;
  addVideo: () => void;
  errorMessage: string;
}

export type FetchVideosDetailsParams = {
  videoIds: string[]; // Array of strings for the video IDs
  setErrorMessage: (message: string) => void; // Function to set the error message
};

export type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface AddVideoParams {
  videoInput: string;
  setAddedVideos: SetStateFunction<VideoUrl[]>;
  setVideos: SetStateFunction<VideoUrl[]>;
  setErrorMessage: SetStateFunction<string>;
  insertRandomly: (
    existingItems: VideoUrl[],
    newItems: VideoUrl[],
  ) => VideoUrl[];
}
export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

export interface CaseStudy {
  id: number;
  company: {
    name: string;
    logo?: string;
    description: string;
  };
  statistics: Statistic[];
  image?: {
    src: string;
    alt: string;
  };
  source?: string;
}
