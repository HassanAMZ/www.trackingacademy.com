import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import ToolBreadcrumbs from "@/components/tools/layout-breadcrumbs";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import Container from "@/components/ui/container";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { iconMap } from "@/utils/tools";
import { promises as fs } from "fs";
import { Wrench } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import path from "path";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tools | TrackingAcademy - Professional Analytics & Tracking Tools",
  description:
    "Professional tools built for web analysts and marketing professionals to make tracking optimization easier and more efficient.",
  keywords: [
    "tracking tools",
    "analytics tools",
    "conversion tracking tools",
    "ROAS optimization tools",
    "tracking academy tools",
    "web analytics tools",
    "marketing tools",
    "tracking calculators",
    "conversion optimization tools",
    "data analysis tools",
  ],
  authors: [
    {
      name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
    },
  ],
  creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
  publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/tools`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    title: "Tools | TrackingAcademy - Professional Analytics & Tracking Tools",
    description:
      "Professional tools built for web analysts and marketing professionals to make tracking optimization easier and more efficient.",
    images: [
      {
        url: "/images/social-sharing.png",
        width: 1200,
        height: 630,
        alt: "TrackingAcademy Tools - Professional analytics and tracking tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools | TrackingAcademy - Professional Analytics & Tracking Tools",
    description:
      "Professional tools built for web analysts and marketing professionals to make tracking optimization easier and more efficient.",
    images: ["/images/social-sharing.png"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
  },
  alternates: {
    canonical: "/tools",
  },
};

async function getTools() {
  const toolsDirectory = path.join(process.cwd(), "app/tools");
  const toolDirs = await fs.readdir(toolsDirectory, { withFileTypes: true });

  const tools = toolDirs
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("_"))
    .map((dirent) => ({
      name: dirent.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      slug: dirent.name,
      icon: iconMap[dirent.name] || Wrench, // Default to Wrench if no icon found
    }));

  return tools;
}

export default async function Layout({ children }: { children: ReactNode }) {
  const tools = await getTools();

  return (
    <SidebarProvider>
      <ToolsSidebar tools={tools} />
      <div className="flex w-full flex-col">
        <Navbar />
        <Container>
          <div className="flex h-14 items-center gap-4">
            <SidebarTrigger />
            <ToolBreadcrumbs />
          </div>
        </Container>
        <SidebarInset className="w-full">
          <Container className="grid gap-2">{children}</Container>
        </SidebarInset>
        <Footer />
      </div>
    </SidebarProvider>
  );
}

function ToolsSidebar({
  tools,
}: {
  tools: { name: string; slug: string; icon: React.ElementType }[];
}) {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="p-4">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Wrench className="h-6 w-6" />
              <span className="line-clamp-1 text-left text-lg font-semibold group-data-[collapsible=icon]:hidden">
                Tools
              </span>
            </div>
          </CollapsibleTrigger>
        </Collapsible>
      </SidebarHeader>
      <SidebarContent className="w-full">
        <SidebarGroup className="w-full">
          <SidebarGroupLabel className="px-4 py-2">Available Tools</SidebarGroupLabel>
          <SidebarMenu>
            {tools.map((tool) => (
              <SidebarMenuItem key={tool.slug}>
                <SidebarMenuButton asChild>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="flex items-center gap-2 rounded-md px-4 py-2 transition-colors hover:bg-accent"
                  >
                    <tool.icon className="h-4 w-4" />
                    <span className="flex-1 truncate font-medium group-data-[collapsible=icon]:hidden">
                      {tool.name}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
