// NavigationLinks.tsx
import React from 'react';
import NavLink from './NavLink'; // Adjust the import path based on your project structure
import headerNavLinks from '@/data/header-nav-links'; // Adjust the import path based on your project structure

type NavLinkType = {
  href: string;
  title: string;
  children?: NavLinkType[];
};

const NavigationLinks: React.FC = () => {
  const navLinks = headerNavLinks as NavLinkType[];
  return (
    <React.Fragment>
      {navLinks.map((link) => {
        if (link.children && link.children.length > 0) {
          return (
            <div key={`nav-link-${link.title}`} className="group relative">
              <NavLink
                href={link.href}
                className="transition-all duration-300 hover:text-accent hover:underline"
              >
                {link.title}
              </NavLink>
              <div className="nested-links border-dominant bg-complementary absolute z-20 hidden flex-row rounded-lg border-2 p-2 shadow group-hover:flex">
                {link.children.map((childLink) => (
                  <NavLink
                    key={`nav-link-${childLink.title}`}
                    href={childLink.href}
                    className="mx-2 transition-all duration-300 hover:text-accent hover:underline"
                  >
                    {childLink.title}
                  </NavLink>
                ))}
              </div>
            </div>
          );
        }

        return (
          <NavLink
            key={`nav-link-${link.title}`}
            href={link.href}
            className="transition-all duration-300 hover:text-accent hover:underline"
          >
            {link.title}
          </NavLink>
        );
      })}
    </React.Fragment>
  );
};

export default NavigationLinks;
