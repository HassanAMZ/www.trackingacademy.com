import headerNavLinks from "@/data/header-nav-links";
import MobileNav from "@/components/navbar/MobileNav";
import NavLink from "@/components/navbar/NavLink";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import DesktopNav from "@/components/navbar/DesktopNav";

export default function NavBar() {
 return (
  <ContainerLayout className='pt-2 pb-3'>
   <header className='w-full pt-3 '>
    <div className='flex items-center justify-between w-full'>
     <DesktopNav />
     <MobileNav />
    </div>
   </header>
  </ContainerLayout>
 );
}
