import React from "react";
import NavLink from "./NavLink"; // Adjust the import path based on your project structure
import headerNavLinks from "@/data/header-nav-links";

// Define a type for each navigation link
type NavLinkType = {
 href: string;
 title: string;
 children?: NavLinkType[];
};

const NavigationLinks: React.FC = () => {
 const navLinks = headerNavLinks;
 return (
  <React.Fragment>
   {navLinks.map((link) => {
    if (link.children && link.children.length > 0) {
     return (
      <div key={`nav-link-${link.title}`} className='group relative'>
       <NavLink
        href={link.href}
        className='hover:underline hover:text-primary transition-all duration-300'>
        {link.title}
       </NavLink>
       <div className='nested-links absolute hidden group-hover:flex flex-row bg-gray-700 shadow-md p-2 rounded-md z-20'>
        {link.children.map((childLink) => (
         <NavLink
          key={`nav-link-${childLink.title}`}
          href={childLink.href}
          className='hover:underline hover:text-primary transition-all duration-300 mx-2'>
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
      className='hover:underline hover:text-primary transition-all duration-300'>
      {link.title}
     </NavLink>
    );
   })}
  </React.Fragment>
 );
};

export default NavigationLinks;