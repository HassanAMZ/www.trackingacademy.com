"use client";

import Container from "@/components/ui/container";
import { Facebook, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";
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
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="TrackingAcademy Logo"
                className="mb-4 h-8"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Reclaim the 30% of sales you're missing with better tracking.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
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
                  +923364904686
                </Link>
              </li>
              <li>
                <Link href="mailto:analytics@trackingacademy.com" aria-label="Email">
                  analytics@trackingacademy.com
                </Link>
              </li>
              <li>
                <Link href="/contact/book-a-meeting" className="hover:underline">
                  Book A Meeting
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Theme */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Stay Connected</h4>
            <div className="mb-4 flex items-center space-x-4">
              <Link href="mailto:analytics@trackingacademy.com" aria-label="Email">
                <Mail className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link
                href="https://youtube.com/@trackingacademy"
                target="_blank"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link
                href="https://linkedin.com/company/trackingacademy"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link
                href="https://facebook.com/shahzadaalihassan"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link href="tel:00923364904686" target="_blank" aria-label="Phone">
                <Phone className="h-5 w-5 hover:text-primary" />
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          © 2020 - {new Date().getFullYear()} TrackingAcademy. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
