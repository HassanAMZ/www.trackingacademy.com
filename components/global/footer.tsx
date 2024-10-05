import React from "react";
import Container from "../ui/container";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <footer className="bg-background text-foreground py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2">
            <h6 className="uppercase font-bold mb-2">About Us</h6>
            <p className="mb-4">
              We provide advanced tracking solutions for businesses around the
              globe. Click{" "}
              <a href="/about-us" className="text-primary hover:underline">
                here
              </a>{" "}
              to learn more.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h6 className="uppercase font-bold mb-2">Contact Us</h6>
            <ul className="mb-4">
              <li>
                <a href="/contact" className="text-primary hover:underline">
                  Contact Page
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-services"
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} TrackingAcademy. All rights reserved.
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
