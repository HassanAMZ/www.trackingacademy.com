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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import auditReports from "@/data/audit-report";
import { caseStudies } from "@/data/case-studies";
// import { services } from "@/data/services";
import clsx from "clsx";
import { Briefcase, FileText, Menu, Settings, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavLink from "../navbar/NavLink";
import { GlowEffect } from "../ui/glow-effect";
import { ThemeToggle } from "./theme-switch";

interface NavItem {
  title: string;
  href: string;
  description: string;
}

const NAV_ITEMS: Record<string, NavItem[]> = {
  // services: [
  //   {
  //     title: "All Services",
  //     href: "/services",
  //     description: "Explore our complete range of tracking and analytics services",
  //   },
  //   ...services.slice(0, 4).map((service) => ({
  //     title: service.name,
  //     href: `/services/${service.id}`,
  //     description: service.subtitle + " - " + service.description,
  //   })),
  // ],
  audits: [
    {
      title: "All Audits",
      href: "/audit",
      description: "Checkout the audit reports done in the past for Clients",
    },
    ...auditReports.slice(0, 7).map((audit) => ({
      title: audit.id,
      href: `/audit/${audit.id}`,
      description: audit.recommendedActions[0].title,
    })),
  ],
  tools: [
    {
      title: "All Tools",
      href: "/tools",
      description: "Explore our complete collection of analytics and tracking tools",
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
      description: "Validate and analyze your UTM parameters to ensure proper tracking setup",
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
      description: "Guides and tips for managing and growing your Shopify store.",
    },
    {
      title: "Google Ads",
      href: "/tags/google-ads",
      description: "Get more from your Google Ads with proper tracking setup.",
    },
    {
      title: "Facebook Fixel",
      href: "/tags/facebook-pixel",
      description: "Implement and optimize Facebook Pixel for better ROAS.",
    },
    {
      title: "Customer Events",
      href: "/tags/customer-events",
      description: "Learn about custom tracking pixels for specialized needs.",
    },
    {
      title: "WooCommerce",
      href: "/tags/woocommerce",
      description: "WooCommerce tracking implementation and optimization guides.",
    },
    {
      title: "Google Analytics 4",
      href: "/tags/google-analytics-4",
      description: "Transition to and maximize Google Analytics 4 capabilities.",
    },
  ],
  caseStudies: [
    {
      title: "All Case Studies",
      href: "/case-study",
      description: "Checkout the Case Studies done in the past for Clients",
    },
    ...caseStudies.slice(0, 7).map((study) => ({
      title: study.name,
      href: `/case-study/${study.id}`,
      description: study.description,
    })),
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
            "block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  ),
);
ListItem.displayName = "ListItem";

export default function Navbar({ className }: { className?: string }) {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => pathname.startsWith(path);

  const handleLinkClick = () => setSheetOpen(false);
  useEffect(() => {
    // Prefetch main routes
    router.prefetch("/contact");
    router.prefetch("/case-study");
    router.prefetch("/tools");
    router.prefetch("/blog");
  }, [router]);
  const renderCallToAction = () => (
    <div className="relative">
      <GlowEffect />
      <Button asChild className="relative">
        <Link href={"/contact"}>Fix My Tracking</Link>
      </Button>
    </div>
  );

  const HomeNavigationButton = () => (
    <NavLink href="/">
      <Image
        alt="logo"
        height={100}
        width={100}
        src={"/logo-navbar.png"}
        className="h-8 w-fit rounded sm:flex"
      />
    </NavLink>
  );

  const renderNavigationMenuItems = (items: NavItem[], icon: React.ReactNode) => (
    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden select-none focus:shadow-sm"
            href={items[0].href}
          >
            {icon}
            <div className="mt-4 mb-2 text-lg font-medium">{items[0].title}</div>
            <p className="text-sm leading-tight text-muted-foreground">{items[0].description}</p>
          </a>
        </NavigationMenuLink>
      </li>
      {items.slice(1).map((item) => (
        <ListItem key={item.title} title={item.title} href={item.href}>
          {item.description}
        </ListItem>
      ))}
    </ul>
  );

  const DesktopNavigationMenu = () => (
    <div className="hidden h-14 w-full items-center justify-between gap-3 p-2 lg:flex">
      <NavigationMenu>
        <NavigationMenuList className="flex w-full flex-col text-lg font-medium lg:flex-row lg:items-center lg:text-sm">
          <HomeNavigationButton />

          <NavigationMenuItem>
            <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
            <NavigationMenuContent>
              {renderNavigationMenuItems(NAV_ITEMS.blogs, <FileText className="h-6 w-6" />)}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              {renderNavigationMenuItems(NAV_ITEMS.tools, <Wrench className="h-6 w-6" />)}
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Audits</NavigationMenuTrigger>
            <NavigationMenuContent>
              {renderNavigationMenuItems(NAV_ITEMS.audits, <Settings className="h-6 w-6" />)}
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
            <NavigationMenuContent>
              {renderNavigationMenuItems(NAV_ITEMS.caseStudies, <Briefcase className="h-6 w-6" />)}
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              {renderNavigationMenuItems(NAV_ITEMS.services, <Settings className="h-6 w-6" />)}
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-2">
        <ThemeToggle />
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
            <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </div>
      </div>{" "}
      <SheetContent side="right" className="flex flex-col justify-between">
        <nav className="flex w-full flex-col space-y-4 py-4">
          {["/", "/tools", "/case-study", "/blog"].map((path) => (
            <Link
              key={path}
              href={path}
              className={clsx(
                "w-full! justify-start! text-foreground",
                navigationMenuTriggerStyle(),
                isActive(path) && "bg-accent text-accent-foreground",
              )}
              onClick={handleLinkClick}
            >
              {path === "/"
                ? "TrackingAcademy"
                : path === "/case-study"
                  ? "Case Studies"
                  : path === "/audit"
                    ? "Audits"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
          {renderCallToAction()}
        </nav>
        <ThemeToggle />
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="w-full pt-4 pb-2 lg:text-sm">
      <Container className={clsx(" ", className)}>
        <div className="rounded border">
          <MobileNavigationMenu />
          <DesktopNavigationMenu />
        </div>
      </Container>
    </header>
  );
}
