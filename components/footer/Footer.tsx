import Image from "next/image";
import React from "react";
import NavLink from "../navbar/NavLink";
import NavigationLinks from "../navbar/NavigationLinks";
const Footer: React.FC = () => {
  return (
    <div className="container-primary py-3">
      <div className="w-full rounded-lg border p-3 shadow transition duration-300 ease-in-out">
        <footer className="flex flex-col gap-4">
          <div className="flex w-full flex-row items-start justify-between py-6 lg:items-center">
            <NavLink href="/">
              <Image
                src="/logo.svg"
                alt="TrackingAcademy"
                width={500}
                height={145}
                className="w-32"
              />
            </NavLink>
            <nav className="flex w-full flex-col items-end justify-end lg:flex-row lg:gap-3">
              <NavigationLinks />
            </nav>
          </div>

          <p className="pt-12 text-center text-xs">
            © {new Date().getFullYear()} TrackingAcademy, All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
