import BlogLayout from "@/components/blog/BlogLayout";
import { ReactNode } from "react";
import React from "react";
import { PostMetadata } from "@/types/index";
import getBlogsData from "utils/getBlogsData";
import { AuthContextProvider } from "@/context/AuthContext";
import BlogNavbar from "@/components/blog/BlogNavbar";
import SingleBlogLayout from "@/components/blog/SingleBlogLayout";

export default function Layout({ children }: { children: ReactNode }) {
 return <SingleBlogLayout>{children}</SingleBlogLayout>;
}
