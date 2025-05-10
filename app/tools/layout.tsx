import React, { ReactNode } from "react";
import { promises as fs } from "fs";
import path from "path";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { iconMap, IconType } from "@/utils/tools";
import { Wrench } from "lucide-react";
import ToolBreadcrumbs from "@/components/tools/layout-breadcrumbs";

export const metadata = {
  title: "Tools - TrackingAcademy",
  description: "Tools built for Analysts to make life easier.",
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
          <SidebarGroupLabel className="px-4 py-2">
            Available Tools
          </SidebarGroupLabel>
          <SidebarMenu>
            {tools.map((tool) => (
              <SidebarMenuItem key={tool.slug}>
                <SidebarMenuButton asChild>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="hover:bg-accent flex items-center gap-2 rounded-md px-4 py-2 transition-colors"
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
