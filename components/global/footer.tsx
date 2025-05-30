"use client";

import Container from "@/components/ui/container";
import { Facebook, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-switch";

export default function Footer() {
  return (
    <footer className="">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/">
              <img
                src="/logo.png"
                alt="TrackingAcademy Logo"
                className="mb-4 h-8"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Reclaim the 30% of sales you're missing with better tracking.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:underline">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/audit" className="hover:underline">
                  Audits
                </Link>
              </li>
              <li>
                <Link href="/case-study" className="hover:underline">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="tel:00923364904686" className="hover:underline">
                  00923364904686
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:analytics@trackingacademy.com"
                  aria-label="Email"
                >
                  analytics@trackingacademy.com
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/book-a-meeting"
                  className="hover:underline"
                >
                  Book A Meeting
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Theme */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Stay Connected</h4>
            <div className="mb-4 flex items-center space-x-4">
              <Link
                href="mailto:analytics@trackingacademy.com"
                aria-label="Email"
              >
                <Mail className="hover:text-primary h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com/@trackingacademy"
                target="_blank"
                aria-label="Youtube"
              >
                <Youtube className="hover:text-primary h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/trackingacademy"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="hover:text-primary h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/shahzadaalihassan"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="hover:text-primary h-5 w-5" />
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Bottom */}
        <div className="text-muted-foreground mt-10 border-t pt-6 text-center text-xs">
          © {new Date().getFullYear()} TrackingAcademy. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
