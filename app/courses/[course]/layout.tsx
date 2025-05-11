import ContactUs from "@/components/blog/call-to-action-message-us";
import { CourseSidebar } from "@/components/courses/course-sidebar";
import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ course: string; module: string; lesson: string }>;
}) {
  const { course, module, lesson } = await params;
  return (
    <SidebarProvider>
      <CourseSidebar course={(await params).course} />
      <div className="flex w-full flex-col">
        <SidebarInset className="w-full">
          <Navbar />

          <Container className="grid gap-2 p-2 lg:grid-cols-[1fr_250px]">
            <div>{children}</div>
            <ContactUs />
          </Container>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
