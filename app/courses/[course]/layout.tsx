import { CourseSidebar } from "@/components/courses/course-sidebar";
import Navbar from "@/components/global/navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ course: string; module: string; lesson: string }>;
}) {
  const { course, module, lesson } = await params;
  console.log(await params);
  return (
    <SidebarProvider>
      <CourseSidebar course={(await params).course} />
      <div className="flex w-full flex-col">
        <SidebarInset className="w-full">
          <Navbar />

          <div className="flex-1 p-2">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
