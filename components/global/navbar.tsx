'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './theme-switch';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';

const components = [
 {
  title: 'UTM Builder',
  href: '/tools/utm-builder',
  description:
   'Start building your UTMs for Google Ads, Facebook Ads, TikTok, or custom, all at one place',
 },
 {
  title: 'Wheel Of Life',
  href: '/tools/wheel-of-life',
  description:
   'It allows individuals to divide their life into key areas and rate their level of satisfaction',
 },
 {
  title: 'Youtube Replica',
  href: '/tools/youtube-replica',
  description: 'A simple tool to test the Thumbnails for Youtube',
 },
];

const ListItem = React.forwardRef<
 React.ElementRef<'a'>,
 React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
 return (
  <li>
   <NavigationMenuLink asChild>
    <a
     ref={ref}
     className={cn(
      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
      className
     )}
     {...props}>
     <div className='text-sm font-medium leading-none'>{title}</div>
     <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
      {children}
     </p>
    </a>
   </NavigationMenuLink>
  </li>
 );
});
ListItem.displayName = 'ListItem';

export default function Navbar() {
 const [isSheetOpen, setSheetOpen] = React.useState(false);
 const pathname = usePathname();

 const isActive = (path: string) => {
  return pathname.includes(path);
 };

 const handleLinkClick = () => {
  setSheetOpen(false);
 };

 const renderCallToAction = () => {
  if (pathname === '/for-freelancers') {
   return (
    <Button asChild>
     <Link href='/for-freelancers/enroll-now'>Enroll Now</Link>
    </Button>
   );
  }
  return (
   <Button asChild>
    <Link href='/contact'>
     <span className='sm:block hidden'> Schedule a Meeting</span>
     <span className='block sm:hidden'>Contact</span>
    </Link>
   </Button>
  );
 };

 return (
  <div className={cn('pt-4 pb-2 w-full lg:text-sm')}>
   <Container>
    <div className='bg-secondary rounded-lg border border-primary/10'>
     {/* Desktop Menu */}
     <NavigationMenu className='hidden lg:flex h-14 px-3'>
      <NavigationMenuList className='flex flex-col gap-4 text-lg font-medium lg:flex-row lg:items-center lg:gap-2 lg:text-sm'>
       <NavigationMenuItem>
        <Link href='/' legacyBehavior passHref>
         <NavigationMenuLink
          className={cn(
           navigationMenuTriggerStyle(),
           pathname === '/' &&
            'bg-secondary text-accent-foreground border border-primary'
          )}>
          TrackingAcademy.com
         </NavigationMenuLink>
        </Link>
       </NavigationMenuItem>
       <NavigationMenuItem>
        <Link href='/' legacyBehavior passHref>
         <NavigationMenuLink
          className={cn(
           navigationMenuTriggerStyle(),
           isActive('/for-businesses') &&
            'bg-secondary text-accent-foreground border border-primary'
          )}>
          For Businesses
         </NavigationMenuLink>
        </Link>
       </NavigationMenuItem>
       <NavigationMenuItem>
        <Link href='/for-freelancers' legacyBehavior passHref>
         <NavigationMenuLink
          className={cn(
           navigationMenuTriggerStyle(),
           isActive('/for-freelancers') &&
            'bg-secondary text-accent-foreground border border-primary'
          )}>
          For Freelancers
         </NavigationMenuLink>
        </Link>
       </NavigationMenuItem>
       <NavigationMenuItem>
        <Link href='/blog' legacyBehavior passHref>
         <NavigationMenuLink
          className={cn(
           navigationMenuTriggerStyle(),
           isActive('/blog') &&
            'bg-secondary text-accent-foreground border border-primary'
          )}>
          Blogs
         </NavigationMenuLink>
        </Link>
       </NavigationMenuItem>
       <NavigationMenuItem>
        <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
        <NavigationMenuContent>
         <ul className='grid w-[400px] gap-3 p-4 lg:w-[500px] lg:grid-cols-2'>
          {components.map((component) => (
           <ListItem
            key={component.title}
            title={component.title}
            href={component.href}>
            {component.description}
           </ListItem>
          ))}
         </ul>
        </NavigationMenuContent>
       </NavigationMenuItem>
      </NavigationMenuList>
      <div className='flex gap-2'>
       <ModeToggle />
       {renderCallToAction()}
      </div>
     </NavigationMenu>

     <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
      <div className=' flex h-14 px-1 sm:px-3 items-center justify-between gap-1 sm:gap-2 lg:hidden'>
       <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='shrink-0 lg:hidden'>
         <Menu className='h-5 w-5' />
         <span className='sr-only'>Toggle navigation menu</span>
        </Button>
       </SheetTrigger>
       <Link
        href='/'
        className={cn(
         navigationMenuTriggerStyle(),
         pathname === '/' &&
          'bg-secondary text-accent-foreground border border-primary text-xs sm:text-sm'
        )}
        onClick={handleLinkClick}>
        TrackingAcademy.com
       </Link>
       {renderCallToAction()}
      </div>

      <SheetContent side='right' className='flex flex-col justify-between'>
       <nav className='flex flex-col space-y-4 py-4 w-full'>
        <Link
         href='/'
         className={cn(
          navigationMenuTriggerStyle(),
          pathname === '/' &&
           'bg-secondary text-accent-foreground border border-primary'
         )}
         onClick={handleLinkClick}>
         TrackingAcademy.com
        </Link>
        <Link
         href='/'
         className={cn(
          navigationMenuTriggerStyle(),
          isActive('/for-businesses') &&
           'bg-secondary text-accent-foreground border border-primary'
         )}
         onClick={handleLinkClick}>
         For Businesses
        </Link>
        <Link
         href='/for-freelancers'
         className={cn(
          navigationMenuTriggerStyle(),
          isActive('/for-freelancers') &&
           'bg-secondary text-accent-foreground border border-primary'
         )}
         onClick={handleLinkClick}>
         For Freelancers
        </Link>
        <Link
         href='/blog'
         className={cn(
          navigationMenuTriggerStyle(),
          isActive('/blog') &&
           'bg-secondary text-accent-foreground border border-primary'
         )}
         onClick={handleLinkClick}>
         Blogs
        </Link>
        <Link
         href='/tools'
         className={cn(
          navigationMenuTriggerStyle(),
          isActive('/tools') &&
           'bg-secondary text-accent-foreground border border-primary'
         )}
         onClick={handleLinkClick}>
         Tools
        </Link>

        {pathname === '/for-freelancers' ? (
         <Link passHref legacyBehavior href='/for-freelancers/enroll-now'>
          <Button
           className='min-w-full font-medium text-secondary'
           onClick={handleLinkClick}>
           Enroll Now
          </Button>
         </Link>
        ) : (
         <Link passHref legacyBehavior href='/contact' className='w-full'>
          <Button
           className='w-full font-medium text-secondary'
           onClick={handleLinkClick}>
           <span>Book a Call</span>
          </Button>
         </Link>
        )}
       </nav>
       <ModeToggle />
      </SheetContent>
     </Sheet>
    </div>
   </Container>
  </div>
 );
}
