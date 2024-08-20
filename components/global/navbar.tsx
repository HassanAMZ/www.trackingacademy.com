"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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

const components = [
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
  {
    title: "Youtube Replica",
    href: "/tools/youtube-replica",
    description: "A simple tool to test the Thumbnails for Youtube",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
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
));
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
      <Link
        href={
          pathname === "/for-freelancers"
            ? "/for-freelancers/enroll-now"
            : "/contact"
        }
      >
        <span className="hidden sm:block">
          {pathname === "/for-freelancers"
            ? "Enroll Now"
            : "Schedule a Meeting"}
        </span>
        <span className="block sm:hidden">Contact</span>
      </Link>
    </Button>
  );

  const HomeNavigationButton = () => (
    <NavLink
      href="/"
      className={clsx(
        navigationMenuTriggerStyle(),
        " text-accent-foreground flex items-center justify-center font-extrabold",
        isActive("/") && "text-accent-foreground bg-secondary"
      )}
    >
      TrackingAcademy
    </NavLink>
  );

  const DesktopNavigationMenu = () => (
    <div className="hidden h-14 p-2 gap-4 lg:flex w-full justify-between items-center">
      <HomeNavigationButton />
      <NavigationMenu className="w-full flex">
        <NavigationMenuList className="w-full flex flex-col gap-4 text-lg font-medium lg:flex-row lg:items-center lg:gap-2 lg:text-sm">
          <NavigationMenuItem>
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
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href="/for-freelancers" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  navigationMenuTriggerStyle(),
                  isActive("/for-freelancers") &&
                    "bg-secondary text-accent-foreground"
                )}
              >
                For Freelancers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  navigationMenuTriggerStyle(),
                  isActive("/blog") && "bg-secondary text-accent-foreground"
                )}
              >
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px] lg:grid-cols-2">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="flex gap-2">
          <ModeToggle />
          {renderCallToAction()}
        </div>
      </NavigationMenu>
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
          <Link
            href="/for-businesses"
            className={clsx(
              navigationMenuTriggerStyle(),
              isActive("/for-businesses") &&
                "bg-secondary text-accent-foreground"
            )}
            onClick={handleLinkClick}
          >
            For Businesses
          </Link>
          {/* <Link
            href="/for-freelancers"
            className={clsx(
              navigationMenuTriggerStyle(),
              isActive("/for-freelancers") &&
                "bg-secondary text-accent-foreground"
            )}
            onClick={handleLinkClick}
          >
            For Freelancers
          </Link> */}
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
          <Link
            href="/tools"
            className={clsx(
              navigationMenuTriggerStyle(),
              isActive("/tools") && "bg-secondary text-accent-foreground"
            )}
            onClick={handleLinkClick}
          >
            Tools
          </Link>
          {pathname === "/for-freelancers" ? (
            <Link passHref legacyBehavior href="/for-freelancers/enroll-now">
              <Button
                className="min-w-full font-medium text-card"
                onClick={handleLinkClick}
              >
                Enroll Now
              </Button>
            </Link>
          ) : (
            <Link passHref legacyBehavior href="/contact" className="w-full">
              <Button
                className="w-full font-medium text-card"
                onClick={handleLinkClick}
              >
                <span>Book a Call</span>
              </Button>
            </Link>
          )}
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
