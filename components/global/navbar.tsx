"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Briefcase, Wrench, FileText } from "lucide-react"; // Import relevant icons
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
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import NavLink from "../navbar/NavLink";
import { ModeToggle } from "./theme-switch";
import clsx from "clsx";

const tools = [
  {
    title: "UTM Builder",
    href: "/tools/utm-builder",
    description:
      "Start building your UTMs for Google Ads, Facebook Ads, TikTok, or custom, all at one place",
  },
  {
    title: "Wheel Of Life",
    href: "/tools/wheel-of-life",
    description:
      "It allows individuals to divide their life into key areas and rate their level of satisfaction",
  },
];

const careers = [
  {
    title: "Upwork Business Developer",
    href: "/career/upwork-business-developer",
    description:
      "Join us as a Business Developer on Upwork to help grow our business.",
  },
  // {
  //   title: "Web Analyst",
  //   href: "/career/web-analyst",
  //   description:
  //     "We're looking for a Web Analyst to help optimize our web presence.",
  // },
];

const blogs = [
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
    title: "WooCommerce",
    href: "/tags/woocommerce",
    description: "Explore our WooCommerce tutorials and best practices.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={clsx(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navbar() {
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const handleLinkClick = () => setSheetOpen(false);

  const renderCallToAction = () => (
    <Button asChild>
      <Link href={"/contact"}>
        <span className="hidden sm:block">Schedule a Meeting</span>
        <span className="block sm:hidden">Contact</span>
      </Link>
    </Button>
  );

  const HomeNavigationButton = () => (
    <NavLink
      href="/"
      className={clsx(
        navigationMenuTriggerStyle(),
        "p-2 text-accent-foreground flex items-center justify-center font-extrabold",
        isActive("/") && "text-accent-foreground bg-secondary"
      )}
    >
      TrackingAcademy
    </NavLink>
  );

  const DesktopNavigationMenu = () => (
    <div className="hidden h-14 gap-3 p-2 lg:flex w-full justify-center items-center">
      <HomeNavigationButton />
      <NavigationMenu>
        <NavigationMenuList className="w-full flex flex-col gap-4 text-lg font-medium lg:flex-row lg:items-center lg:gap-2 lg:text-sm">
          {/* <NavigationMenuItem>
            <Link href="/for-businesses" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  navigationMenuTriggerStyle(),
                  isActive("/for-businesses") &&
                    "bg-secondary text-accent-foreground"
                )}
              >
                For Businesses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}

          {/* Tools Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow"
                      href="/tools/utm-builder"
                    >
                      <Wrench className="h-6 w-6" /> {/* UTM Builder Icon */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        UTM Builder
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Start building your UTMs for Google Ads, Facebook Ads,
                        TikTok, or custom, all in one place.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {tools.map((tool) => (
                  <ListItem
                    key={tool.title}
                    title={tool.title}
                    href={tool.href}
                  >
                    {tool.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Careers Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow"
                      href="/career/upwork-business-developer"
                    >
                      <Briefcase className="h-6 w-6" />{" "}
                      {/* Upwork Business Developer Icon */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Upwork Business Developer
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Join us as a Business Developer on Upwork to help grow
                        our business.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {careers.map((career) => (
                  <ListItem
                    key={career.title}
                    title={career.title}
                    href={career.href}
                  >
                    {career.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Blogs Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow"
                      href="/blog"
                    >
                      <FileText className="h-6 w-6" />{" "}
                      {/* All Blog Posts Icon */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        All Blog Posts
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Explore all our blog posts in one place.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {blogs.map((blog) => (
                  <ListItem
                    key={blog.title}
                    title={blog.title}
                    href={blog.href}
                  >
                    {blog.description}
                  </ListItem>
                ))}
              </ul>
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
      <div className="flex w-full h-14 items-center justify-between gap-1 px-1 sm:gap-2 sm:px-3 lg:hidden">
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <HomeNavigationButton />
        {renderCallToAction()}
      </div>

      <SheetContent side="right" className="flex flex-col justify-between">
        <nav className="flex w-full flex-col space-y-4 py-4">
          <Link
            href="/"
            className={clsx(
              navigationMenuTriggerStyle(),
              pathname === "/" && "bg-secondary text-accent-foreground"
            )}
            onClick={handleLinkClick}
          >
            TrackingAcademy
          </Link>
          {/* <Link
            href="/for-businesses"
            className={clsx(
              navigationMenuTriggerStyle(),
              isActive("/for-businesses") &&
                "bg-secondary text-accent-foreground"
            )}
            onClick={handleLinkClick}
          >
            For Businesses
          </Link> */}
          <Link
            href={"/tools"}
            className={clsx(
              navigationMenuTriggerStyle(),
              isActive("/tools") && "bg-secondary text-accent-foreground"
            )}
            onClick={handleLinkClick}
          >
            Tools
          </Link>
          <Link
            href="/career"
            className={clsx(
              navigationMenuTriggerStyle(),
              isActive("/career") && "bg-secondary text-accent-foreground"
            )}
            onClick={handleLinkClick}
          >
            Careers
          </Link>
          <Link
            href="/blog"
            className={clsx(
              navigationMenuTriggerStyle(),
              isActive("/blog") && "bg-secondary text-accent-foreground"
            )}
            onClick={handleLinkClick}
          >
            Blogs
          </Link>
          {renderCallToAction()}
        </nav>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  );

  return (
    <div className={clsx("w-full pb-2 pt-4 lg:text-sm")}>
      <Container>
        <div className="rounded-lg border flex">
          <MobileNavigationMenu />
          <DesktopNavigationMenu />
        </div>
      </Container>
    </div>
  );
}
