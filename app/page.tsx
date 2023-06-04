import Hero from "@/components/holders/Hero";
import RecentClients from "@/components/holders/RecentClients";
import Services from "@/components/holders/Services";

export default function Page() {
 return (
  <main className='flex flex-col gap-2'>
   <Hero />
   {/* <Services /> */}
   <RecentClients />
  </main>
 );
}
