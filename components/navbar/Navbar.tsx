import headerNavLinks from "@/data/header-nav-links";
import MobileNav from "@/components/navbar/MobileNav";
import NavLink from "@/components/navbar/NavLink";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function NavBar() {
 return (
  <ContainerLayout>
   <header className='w-full pt-3'>
    <div className='flex items-center justify-between font-medium w-full'>
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
  </ContainerLayout>
 );
}
