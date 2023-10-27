import fs from "fs";
import path from "path";

export default function getFiles(dirPath: string): string[] {
 let entries = fs.readdirSync(dirPath, { withFileTypes: true });

 let files = entries
  .filter((file) => !file.isDirectory())
  .map((file) => path.join(dirPath, file.name)); // maps to full path

 let directories = entries.filter((folder) => folder.isDirectory());

 for (let directory of directories)
  files = files.concat(getFiles(path.join(dirPath, directory.name)));

 return files;
}
