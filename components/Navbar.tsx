import headerNavLinks from "@/data/header-nav-links";
import MobileNav from "components/MobileNav";
import NavLink from "components/NavLink";

export default function NavBar() {
 return (
  <header className='w-full px-2 pt-4'>
   <div className='flex items-center justify-between font-semibold w-full'>
    <div className='flex font-bold flex-row items-center justify-center gap-1'>
     <NavLink href='/'>Shahzada Ali Hassan</NavLink>
    </div>
    <nav className='sm:flex space-x-4 hidden'>
     {headerNavLinks.map(({ href, title }) => (
      <NavLink key={`nav-link-${title}`} href={href}>
       {title}
      </NavLink>
     ))}
    </nav>
    <MobileNav />
   </div>
  </header>
 );
}
