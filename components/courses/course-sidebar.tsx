import { ChevronDown, BookOpen, GraduationCap } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link } from "next-view-transitions";

import { getCourseModules } from "@/utils/course-utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type CourseSidebarProps = {
  course: string;
};

export async function CourseSidebar({ course }: CourseSidebarProps) {
  const modules = await getCourseModules(course);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <span className="text-lg font-semibold group-data-[collapsible=icon]:hidden">
                {course}
              </span>
            </div>
          </CollapsibleTrigger>
        </Collapsible>
      </SidebarHeader>
      <SidebarContent className="w-full">
        {modules.map((module, moduleIndex) => (
          <Collapsible
            key={module.slug}
            defaultOpen={moduleIndex === 0}
            className="group/collapsible"
          >
            <SidebarGroup className="w-full">
              <SidebarGroupLabel asChild className="p-0">
                <CollapsibleTrigger>
                  <div className="flex w-full items-center justify-between rounded-md px-4 py-2 transition-colors hover:bg-accent">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {/* <span className="font-mono text-xs text-muted-foreground">
                        M{(moduleIndex + 1).toString().padStart(2, "0")}
                      </span> */}
                      <span className="font-medium group-data-[collapsible=icon]:hidden">
                        {module.title}
                      </span>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform group-data-[collapsible=icon]:hidden group-data-[state=open]/collapsible:rotate-180" />
                  </div>
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarMenu>
                  {module.lessons.map((lesson) => (
                    <SidebarMenuItem key={lesson.slug}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={`/courses/${course}/${module.slug}/${lesson.slug}`}
                          className="flex items-center gap-2 rounded-md px-4 py-1 transition-colors hover:bg-accent/50"
                        >
                          <span className="font-mono text-xs text-muted-foreground">
                            L{lesson.order.toString().padStart(2, "0")}
                          </span>
                          <span className="flex-1 truncate group-data-[collapsible=icon]:hidden">
                            {lesson.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
