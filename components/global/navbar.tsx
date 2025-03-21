"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import clsx from "clsx";
import { FileText, Menu, Wrench } from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import NavLink from "../navbar/NavLink";
import { ModeToggle } from "./theme-switch";
import { Card, CardContent } from "../ui/card";

interface NavItem {
  title: string;
  href: string;
  description: string;
}

const NAV_ITEMS: Record<string, NavItem[]> = {
  tools: [
    {
      title: "All Tools",
      href: "/tools",
      description:
        "Explore our complete collection of analytics and tracking tools",
    },
    {
      title: "UTM Builder",
      href: "/tools/utm-builder",
      description:
        "Start building your UTMs for Google Ads, Facebook Ads, TikTok, or custom, all at one place",
    },
    {
      title: "UTM Validator",
      href: "/tools/utm-validator",
      description:
        "Validate and analyze your UTM parameters to ensure proper tracking setup",
    },
    {
      title: "Time Managment",
      href: "/tools/time-managment",
      description: "Track and manage time across different projects and tasks",
    },
  ],
  blogs: [
    {
      title: "All Blog Posts",
      href: "/blog",
      description: "Learn everything about web analytics.",
    },
    {
      title: "Google Tag Manager",
      href: "/tags/google-tag-manager",
      description: "Learn how to implement and optimize Google Tag Manager.",
    },
    {
      title: "Shopify",
      href: "/tags/shopify",
      description:
        "Guides and tips for managing and growing your Shopify store.",
    },
  ],
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={clsx(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  ),
);
ListItem.displayName = "ListItem";

export default function Navbar({ className }: { className?: string }) {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  const handleLinkClick = () => setSheetOpen(false);

  const renderCallToAction = () => (
    <Button asChild>
      <Link href={"/contact"}>
        <span className="block">Get a Free Tracking Audit</span>
      </Link>
    </Button>
  );

  const HomeNavigationButton = () => (
    <NavLink href="/">
      <Image
        alt="logo"
        height={1080}
        width={1080}
        src={"/logo-square.png"}
        className="flex h-9 w-9 rounded sm:hidden"
      />
      <Image
        alt="logo"
        height={1920}
        width={1080}
        src={"/logo.png"}
        className="hidden h-9 w-fit rounded sm:flex"
      />
    </NavLink>
  );

  const renderNavigationMenuItems = (
    items: NavItem[],
    icon: React.ReactNode,
  ) => (
    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-sm"
            href={items[0].href}
          >
            {icon}
            <div className="mt-4 mb-2 text-lg font-medium">
              {items[0].title}
            </div>
            <p className="text-muted-foreground text-sm leading-tight">
              {items[0].description}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
      {items.map((item) => (
        <ListItem key={item.title} title={item.title} href={item.href}>
          {item.description}
        </ListItem>
      ))}
    </ul>
  );

  const DesktopNavigationMenu = () => (
    <div className="hidden h-14 w-full items-center justify-between gap-3 p-2 lg:flex">
      <NavigationMenu>
        <NavigationMenuList className="flex w-full flex-col gap-4 text-lg font-medium lg:flex-row lg:items-center lg:gap-2 lg:text-sm">
          <HomeNavigationButton />
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              {renderNavigationMenuItems(
                NAV_ITEMS.tools,
                <Wrench className="h-6 w-6" />,
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
            <NavigationMenuContent>
              {renderNavigationMenuItems(NAV_ITEMS.careers, <Briefcase className="h-6 w-6" />)}
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
            <NavigationMenuContent>
              {renderNavigationMenuItems(
                NAV_ITEMS.blogs,
                <FileText className="h-6 w-6" />,
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-2">
        <ModeToggle />
        {renderCallToAction()}
      </div>
    </div>
  );

  const MobileNavigationMenu = () => (
    <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
      <div className="flex h-14 w-full items-center justify-between gap-1 px-3 sm:gap-2 sm:px-3 lg:hidden">
        <HomeNavigationButton />
        <div className="flex items-center justify-center gap-2">
          {renderCallToAction()}
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </div>
      </div>

      <SheetContent side="right" className="flex flex-col justify-between">
        <nav className="flex w-full flex-col space-y-4 py-4">
          {["/", "/tools", "/blog"].map((path) => (
            <Link
              key={path}
              href={path}
              className={clsx(
                "w-full! justify-start!",
                navigationMenuTriggerStyle(),
                isActive(path) && "bg-secondary text-accent-foreground",
              )}
              onClick={handleLinkClick}
            >
              {path === "/"
                ? "TrackingAcademy"
                : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
          {renderCallToAction()}
        </nav>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="w-full pt-4 pb-2 lg:text-sm">
      <Container className={clsx("", className)}>
        <header className="rounded-lg border">
          <MobileNavigationMenu />
          <DesktopNavigationMenu />
        </header>
      </Container>
    </div>
  );
}
