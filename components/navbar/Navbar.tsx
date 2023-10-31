import headerNavLinks from "@/data/header-nav-links";
import MobileNav from "@/components/navbar/MobileNav";
import NavLink from "@/components/navbar/NavLink";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import DesktopNav from "@/components/navbar/DesktopNav";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

export default function NavBar() {
 return (
  <header className='pt-5 pb-3 flex items-center justify-between w-full'>
   <DesktopNav />
   <MobileNav />
  </header>
 );
}
