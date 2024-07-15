import fs from "fs";
import path from "path";

export default async function getTools(): Promise<string[]> {
  const toolsDirectory = path.join(process.cwd(), "app/tools");
  const allContents = fs.readdirSync(toolsDirectory);

  const folderNames = allContents.filter((content) => {
    const contentPath = path.join(toolsDirectory, content);
    return fs.statSync(contentPath).isDirectory();
  });

  return folderNames;
}
