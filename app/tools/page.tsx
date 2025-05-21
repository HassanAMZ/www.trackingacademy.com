import { promises as fs } from "fs";
import path from "path";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/container";
import { iconMap, toolDescriptions } from "@/utils/tools";
import { Settings } from "lucide-react";
import Link from "next/link";

async function getTools() {
  const toolsDirectory = path.join(process.cwd(), "app/tools");
  const toolDirs = await fs.readdir(toolsDirectory, { withFileTypes: true });

  const tools = toolDirs
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("_"))
    .map((dirent) => ({
      name: dirent.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      slug: dirent.name,
      description:
        toolDescriptions[dirent.name] || "Tool description coming soon",
      icon: iconMap[dirent.name] || Settings,
    }));

  return tools;
}

export default async function Page() {
  const tools = await getTools();

  return (
    <Container>
      <div className="grid gap-6">
        <h1>Analytics Tools</h1>{" "}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.slug}
                className="transition-shadow hover:shadow-md"
              >
                <Link href={`/tools/${tool.slug}`} className="block h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{tool.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
