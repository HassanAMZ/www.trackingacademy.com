import MobileNav from "@/components/navbar/MobileNav";
import DesktopNav from "@/components/navbar/DesktopNav";
import ContainerLayout from "../layouts/ContainerLayout";

export default function NavBar() {
 return (
  <header className='pt-5 pb-3 flex items-center justify-between w-full'>
   <DesktopNav />
   <MobileNav />
  </header>
 );
}
