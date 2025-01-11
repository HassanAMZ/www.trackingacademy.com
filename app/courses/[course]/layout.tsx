import { CourseSidebar } from "@/components/courses/course-sidebar";
import Navbar from "@/components/global/navbar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ course: string }>;
}) {
  return (
    <SidebarProvider className="w-full">
      <div className="flex h-screen overflow-hidden">
        <CourseSidebar course={(await params).course} />
        <SidebarInset className="flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-auto">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
